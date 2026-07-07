#!/usr/bin/env -S npx tsx

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

type Section = {
  heading: string;
  number: number;
  title: string;
  terms: string[];
};

type Entry = {
  term: string;
  section: Section;
  sourcePath: string;
  targetPath: string;
  content: string;
  words: number;
};

type Batch = {
  id: string;
  section: Section;
  entries: Entry[];
  words: number;
};

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(dirname(HERE));
const CURRICULUM = join(ROOT, "internal", "Curriculum.md");
const CALIBRATION = join(ROOT, "internal", "TRANSLATION_CALIBRATION.md");
const THAI_BRIEF = join(HERE, "THAI_TRANSLATION_AI_BRIEF.md");
const DICTIONARY = join(ROOT, "dictionary");
const OUTPUT_DIR = join(HERE, "raw-english-batches");
const WEBCHAT_OUTPUT_DIR = join(HERE, "webchat-translation-batches");
const REMAINING_WEBCHAT_FILE = join(
  WEBCHAT_OUTPUT_DIR,
  "remaining-batches-03-07.md"
);
const TARGET_WORDS = 2200;
const MAX_TERMS_PER_BATCH = 7;
const IMPORTED_BATCH_IDS = new Set([
  "batch-01-01-the-model",
  "batch-01-02-the-model",
  "batch-01-03-the-model",
  "batch-02-01-sessions-context-windows-turns",
  "batch-02-02-sessions-context-windows-turns",
]);

const SECTION_RE = /^## Section (\d+) — (.+)$/;
const BULLET_RE = /^- (.+)$/;

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function repoPath(path: string): string {
  return relative(ROOT, path).replace(/\\/g, "/");
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function parseCurriculum(text: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  text.split("\n").forEach((raw, index) => {
    const lineNo = index + 1;
    const line = raw.trimEnd();
    if (!line) return;

    const sectionMatch = line.match(SECTION_RE);
    if (sectionMatch) {
      current = {
        heading: line.slice(3),
        number: Number(sectionMatch[1]),
        title: sectionMatch[2],
        terms: [],
      };
      sections.push(current);
      return;
    }

    const bulletMatch = line.match(BULLET_RE);
    if (bulletMatch) {
      if (!current) {
        fail(`Curriculum.md:${lineNo}: term appears before a section`);
      }
      current.terms.push(bulletMatch[1]);
      return;
    }

    fail(`Curriculum.md:${lineNo}: unsupported line: ${line}`);
  });

  return sections;
}

function readEntries(sections: Section[]): Entry[] {
  const entries: Entry[] = [];
  const seen = new Set<string>();

  for (const section of sections) {
    for (const term of section.terms) {
      if (seen.has(term)) fail(`Duplicate curriculum term: ${term}`);
      seen.add(term);

      const sourcePath = join(DICTIONARY, term, "en.md");
      const targetPath = join(DICTIONARY, term, "th.md");
      if (!existsSync(sourcePath)) {
        fail(`Missing English source: ${repoPath(sourcePath)}`);
      }
      if (!statSync(sourcePath).isFile()) {
        fail(`English source is not a file: ${repoPath(sourcePath)}`);
      }

      const content = readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");
      entries.push({
        term,
        section,
        sourcePath,
        targetPath,
        content,
        words: countWords(content),
      });
    }
  }

  return entries;
}

function buildBatches(entries: Entry[]): Batch[] {
  const batches: Batch[] = [];
  const bySection = new Map<number, Entry[]>();

  for (const entry of entries) {
    const sectionEntries = bySection.get(entry.section.number) ?? [];
    sectionEntries.push(entry);
    bySection.set(entry.section.number, sectionEntries);
  }

  for (const sectionEntries of bySection.values()) {
    let group: Entry[] = [];
    let words = 0;
    let sequence = 1;

    const flush = (): void => {
      if (!group.length) return;
      const section = group[0].section;
      const id = `batch-${String(section.number).padStart(2, "0")}-${String(
        sequence
      ).padStart(2, "0")}-${slugify(section.title)}`;
      batches.push({ id, section, entries: group, words });
      group = [];
      words = 0;
      sequence += 1;
    };

    for (const entry of sectionEntries) {
      const wouldExceedWords =
        group.length > 0 && words + entry.words > TARGET_WORDS;
      const wouldExceedTerms = group.length >= MAX_TERMS_PER_BATCH;
      if (wouldExceedWords || wouldExceedTerms) flush();
      group.push(entry);
      words += entry.words;
    }

    flush();
  }

  return batches;
}

function cleanOutputDir(outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  for (const name of readdirSync(outputDir)) {
    if (name === "INDEX.md" || /^batch-\d+-\d+-.*\.md$/.test(name)) {
      rmSync(join(outputDir, name));
    }
  }
}

function renderBatch(batch: Batch, batchIndex: number, total: number): string {
  const sourceList = batch.entries
    .map(
      (entry) =>
        `| ${entry.term} | \`${repoPath(entry.sourcePath)}\` | \`${repoPath(
          entry.targetPath
        )}\` | ${entry.words} |`
    )
    .join("\n");

  const entries = batch.entries
    .map((entry) =>
      [
        `## ${entry.term}`,
        "",
        `Source: \`${repoPath(entry.sourcePath)}\``,
        "",
        `Target: \`${repoPath(entry.targetPath)}\``,
        "",
        "```md",
        entry.content.trimEnd(),
        "```",
      ].join("\n")
    )
    .join("\n\n");

  return [
    `# ${batch.id}`,
    "",
    `Batch ${batchIndex} of ${total}.`,
    "",
    `Curriculum section: ${batch.section.heading}`,
    "",
    `Approximate English words: ${batch.words}`,
    "",
    "## Translator Contract",
    "",
    "- Read `internal/TRANSLATION_CALIBRATION.md` first.",
    "- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.",
    "- Translate or rewrite only the assigned target `th.md` files.",
    "- Do not edit English `en.md` files in this batch.",
    "- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.",
    "- Use natural current Thai, with technical English terms kept where Thai would be forced.",
    "- Leave a handoff note using `internal/bilingual/HANDOFF.md`.",
    "",
    "## Assigned Files",
    "",
    "| Term | English source | Thai target | Words |",
    "| --- | --- | --- | ---: |",
    sourceList,
    "",
    "## Raw English",
    "",
    entries,
    "",
  ].join("\n");
}

function renderIndex(batches: Batch[]): string {
  const rows = batches
    .map((batch, index) => {
      const file = `${batch.id}.md`;
      const terms = batch.entries.map((entry) => entry.term).join(", ");
      return `| ${index + 1} | [${batch.id}](./${file}) | ${
        batch.section.heading
      } | ${batch.entries.length} | ${batch.words} | ${terms} |`;
    })
    .join("\n");

  const totalEntries = batches.reduce(
    (sum, batch) => sum + batch.entries.length,
    0
  );
  const totalWords = batches.reduce((sum, batch) => sum + batch.words, 0);

  return [
    "# Raw English Translation Batches",
    "",
    "Generated from `internal/Curriculum.md` and `dictionary/<Concept>/en.md`.",
    "",
    "Use these batches to assign Thai translation or Thai rewrite work without",
    "losing source context. Each batch is sized for one focused AI turn and",
    "keeps entries within the same curriculum section.",
    "",
    "Before translating, read:",
    "",
    "1. `internal/TRANSLATION_CALIBRATION.md`",
    "2. `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md`",
    "3. the assigned batch file",
    "",
    `Total batches: ${batches.length}`,
    "",
    `Total terms: ${totalEntries}`,
    "",
    `Approximate English words: ${totalWords}`,
    "",
    "| # | Batch | Section | Terms | Words | Assigned terms |",
    "| ---: | --- | --- | ---: | ---: | --- |",
    rows,
    "",
  ].join("\n");
}

function renderWebchatBatch(
  batch: Batch,
  batchIndex: number,
  total: number,
  calibration: string,
  thaiBrief: string
): string {
  return [
    `# Webchat Thai Translation Package: ${batch.id}`,
    "",
    "Copy this whole Markdown file into an LLM webchat. The model should return",
    "completed Thai `th.md` files for the assigned targets only.",
    "",
    "## User Request",
    "",
    "Translate or rewrite the assigned English AI vocabulary entries into natural",
    "current Thai. Use the repository rules embedded below. Do not translate",
    "literally. Keep technical English terms when Thai would sound forced.",
    "",
    "Return output as separate Markdown blocks, one per target file, using this",
    "format:",
    "",
    "````text",
    "FILE: dictionary/<Concept>/th.md",
    "```md",
    "---",
    "term: <Thai or mixed display term>",
    "description: <Thai description under 140 characters>",
    "---",
    "",
    "<Thai body>",
    "```",
    "````",
    "",
    "Do not edit English source. Do not invent new facts. Preserve links to the",
    "same concepts and link only the first useful occurrence.",
    "",
    "## Batch Metadata",
    "",
    `Batch: ${batchIndex} of ${total}`,
    "",
    `ID: ${batch.id}`,
    "",
    `Curriculum section: ${batch.section.heading}`,
    "",
    `Approximate English words: ${batch.words}`,
    "",
    "## Embedded Translation Calibration",
    "",
    calibration.trimEnd(),
    "",
    "## Embedded Thai Translation AI Brief",
    "",
    thaiBrief.trimEnd(),
    "",
    "## Assigned Raw English Batch",
    "",
    renderBatch(batch, batchIndex, total).trimEnd(),
    "",
  ].join("\n");
}

function renderWebchatIndex(
  batches: Batch[],
  remainingBatches: Batch[]
): string {
  const rows = batches
    .map((batch, index) => {
      const file = `${batch.id}.md`;
      const terms = batch.entries.map((entry) => entry.term).join(", ");
      return `| ${index + 1} | [${batch.id}](./${file}) | ${
        batch.section.heading
      } | ${batch.entries.length} | ${batch.words} | ${terms} |`;
    })
    .join("\n");

  return [
    "# Webchat Thai Translation Packages",
    "",
    "Each file in this directory is self-contained. Copy one full batch file into",
    "an LLM webchat and ask it to return the target `th.md` files.",
    "",
    "Use one batch per webchat turn. Do not paste every batch at once.",
    "",
    "For the current remaining translation work, use this single combined file:",
    "",
    "- [remaining-batches-03-07](./remaining-batches-03-07.md)",
    "",
    `Remaining combined terms: ${remainingBatches.reduce(
      (sum, batch) => sum + batch.entries.length,
      0
    )}`,
    "",
    "| # | Webchat file | Section | Terms | Words | Assigned terms |",
    "| ---: | --- | --- | ---: | ---: | --- |",
    rows,
    "",
  ].join("\n");
}

function renderRemainingWebchatPackage(
  remainingBatches: Batch[],
  allBatches: Batch[],
  calibration: string,
  thaiBrief: string
): string {
  const totalTerms = remainingBatches.reduce(
    (sum, batch) => sum + batch.entries.length,
    0
  );
  const totalWords = remainingBatches.reduce(
    (sum, batch) => sum + batch.words,
    0
  );
  const batchList = remainingBatches
    .map(
      (batch) =>
        `- ${batch.id}: ${batch.entries.map((entry) => entry.term).join(", ")}`
    )
    .join("\n");
  const rawBatches = remainingBatches
    .map((batch) => {
      const batchIndex = allBatches.findIndex((item) => item.id === batch.id);
      return renderBatch(batch, batchIndex + 1, allBatches.length).trimEnd();
    })
    .join("\n\n---\n\n");

  return [
    "# Webchat Thai Translation Package: Remaining Batches 03-07",
    "",
    "Copy this whole Markdown file into an LLM webchat. The model should return",
    "completed Thai `th.md` files for all assigned targets only.",
    "",
    "## User Request",
    "",
    "Translate or rewrite the assigned English AI vocabulary entries into natural",
    "current Thai. Use the repository rules embedded below. Do not translate",
    "literally. Keep technical English terms when Thai would sound forced.",
    "",
    "Return output as separate Markdown blocks, one per target file, using this",
    "format:",
    "",
    "````text",
    "FILE: dictionary/<Concept>/th.md",
    "```md",
    "---",
    "term: <Thai or mixed display term>",
    "description: <Thai description under 140 characters>",
    "---",
    "",
    "<Thai body>",
    "```",
    "````",
    "",
    "Do not edit English source. Do not invent new facts. Preserve links to the",
    "same concepts and link only the first useful occurrence.",
    "",
    "## Combined Batch Metadata",
    "",
    `Batches included: ${remainingBatches.length}`,
    "",
    `Terms included: ${totalTerms}`,
    "",
    `Approximate English words: ${totalWords}`,
    "",
    batchList,
    "",
    "## Embedded Translation Calibration",
    "",
    calibration.trimEnd(),
    "",
    "## Embedded Thai Translation AI Brief",
    "",
    thaiBrief.trimEnd(),
    "",
    "## Assigned Raw English Batches",
    "",
    rawBatches,
    "",
  ].join("\n");
}

function main(): void {
  const sections = parseCurriculum(readFileSync(CURRICULUM, "utf8"));
  const calibration = readFileSync(CALIBRATION, "utf8").replace(/\r\n/g, "\n");
  const thaiBrief = readFileSync(THAI_BRIEF, "utf8").replace(/\r\n/g, "\n");
  const entries = readEntries(sections);
  const batches = buildBatches(entries);
  const remainingBatches = batches.filter(
    (batch) => !IMPORTED_BATCH_IDS.has(batch.id)
  );

  cleanOutputDir(OUTPUT_DIR);
  cleanOutputDir(WEBCHAT_OUTPUT_DIR);
  batches.forEach((batch, index) => {
    writeFileSync(
      join(OUTPUT_DIR, `${batch.id}.md`),
      renderBatch(batch, index + 1, batches.length)
    );
    writeFileSync(
      join(WEBCHAT_OUTPUT_DIR, `${batch.id}.md`),
      renderWebchatBatch(
        batch,
        index + 1,
        batches.length,
        calibration,
        thaiBrief
      )
    );
  });
  writeFileSync(join(OUTPUT_DIR, "INDEX.md"), renderIndex(batches));
  writeFileSync(
    join(WEBCHAT_OUTPUT_DIR, "INDEX.md"),
    renderWebchatIndex(batches, remainingBatches)
  );
  writeFileSync(
    REMAINING_WEBCHAT_FILE,
    renderRemainingWebchatPackage(
      remainingBatches,
      batches,
      calibration,
      thaiBrief
    )
  );

  console.log(
    `Wrote ${batches.length} raw batches for ${entries.length} entries to ${repoPath(
      OUTPUT_DIR
    )}`
  );
  console.log(
    `Wrote ${batches.length} webchat packages for ${entries.length} entries to ${repoPath(
      WEBCHAT_OUTPUT_DIR
    )}`
  );
  console.log(
    `Wrote ${remainingBatches.length} remaining batches to ${repoPath(
      REMAINING_WEBCHAT_FILE
    )}`
  );
}

main();
