#!/usr/bin/env -S npx tsx
// Generate README files from curriculum + dictionary entries + templates.

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const MARKER = "<!-- CURRICULUM -->";
const TOC_MARKER = "<!-- TOC -->";

const SECTION_RE = /^## Section \d+ — .+$/;
const BULLET_RE = /^- (.+)$/;
const LINK_RE = /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g;

type Section = { heading: string; terms: string[] };
type ReadmeConfig = {
  name: string;
  curriculum: string;
  template: string;
  dictionaryDir: string;
  output: string;
  sourceLine: string;
};

const README_CONFIGS: ReadmeConfig[] = [
  {
    name: "English README",
    curriculum: join(HERE, "Curriculum.md"),
    template: join(HERE, "README.template.md"),
    dictionaryDir: join(ROOT, "dictionary"),
    output: join(ROOT, "README.md"),
    sourceLine:
      "Source: dictionary/*.md, internal/Curriculum.md, internal/README.template.md",
  },
  {
    name: "Simplified Chinese README",
    curriculum: join(HERE, "Curriculum.zh-CN.md"),
    template: join(HERE, "README.zh-CN.template.md"),
    dictionaryDir: join(ROOT, "dictionary.zh-CN"),
    output: join(ROOT, "README.zh-CN.md"),
    sourceLine:
      "Source: dictionary.zh-CN/*.md, internal/Curriculum.zh-CN.md, internal/README.zh-CN.template.md",
  },
];

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

// Mirrors GitHub's heading slugger: lowercase, strip punctuation (keeping hyphens),
// then replace spaces with hyphens. "Section 1 — Foundations" → "section-1--foundations".
function headingSlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/ /g, "-");
}

function parseCurriculum(text: string, label: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  text.split("\n").forEach((raw, idx) => {
    const lineNo = idx + 1;
    const line = raw.trimEnd();
    if (line === "") return;

    if (line.startsWith("## ")) {
      if (!SECTION_RE.test(line)) {
        fail(
          `${label}:${lineNo}: section heading must match "## Section N — Title" (em-dash required): ${line}`
        );
      }
      current = { heading: line.slice(3), terms: [] };
      sections.push(current);
      return;
    }

    if (line.startsWith("- ")) {
      if (!current)
        fail(`${label}:${lineNo}: bullet before any section heading`);
      const m = line.match(BULLET_RE);
      if (!m || !m[1]) fail(`${label}:${lineNo}: malformed bullet: ${line}`);
      const term = m[1];
      if (term.trim() !== term)
        fail(`${label}:${lineNo}: term has surrounding whitespace`);
      if (/[*_`\[]/.test(term)) {
        fail(
          `${label}:${lineNo}: term must be plain text, no markdown: ${term}`
        );
      }
      current.terms.push(term);
      return;
    }

    fail(
      `${label}:${lineNo}: only "## Section N — Title" headings and "- Term" bullets are allowed: ${line}`
    );
  });

  return sections;
}

function stripFrontmatter(body: string): string {
  if (!body.startsWith("---\n") && !body.startsWith("---\r\n")) return body;
  const match = body.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (!match) return body;
  return body.slice(match[0].length).replace(/^\r?\n+/, "");
}

function rewriteLinks(body: string): string {
  return body.replace(LINK_RE, (_, text: string, target: string) => {
    return `[${text}](#${headingSlug(decodeURIComponent(target))})`;
  });
}

function generateReadme(config: ReadmeConfig): void {
  const template = readFileSync(config.template, "utf8");
  if (!template.includes(MARKER))
    fail(`${config.name}: template missing ${MARKER} marker`);
  if (!template.includes(TOC_MARKER)) {
    fail(`${config.name}: template missing ${TOC_MARKER} marker`);
  }

  const curriculumLabel = config.curriculum.slice(ROOT.length + 1);
  const sections = parseCurriculum(
    readFileSync(config.curriculum, "utf8"),
    curriculumLabel
  );

  const seen = new Set<string>();
  const parts: string[] = [];
  for (const section of sections) {
    parts.push(`## ${section.heading}`, "");
    for (const term of section.terms) {
      if (seen.has(term)) fail(`${curriculumLabel}: duplicate term "${term}"`);
      seen.add(term);
      const entryPath = join(config.dictionaryDir, `${term}.md`);
      let body: string;
      try {
        body = readFileSync(entryPath, "utf8");
      } catch {
        fail(
          `${curriculumLabel} references "${term}" but ${entryPath} does not exist`
        );
      }
      parts.push(
        `### ${term}`,
        "",
        rewriteLinks(stripFrontmatter(body).trimEnd()),
        ""
      );
    }
  }

  const onDisk = new Set(
    readdirSync(config.dictionaryDir)
      .filter((n) => n.endsWith(".md"))
      .map((n) => n.slice(0, -3))
  );
  const orphans = [...onDisk].filter((t) => !seen.has(t)).sort();
  if (orphans.length) {
    fail(
      `${config.dictionaryDir} entries not referenced by ${curriculumLabel}: ${orphans.join(", ")}`
    );
  }

  const block = parts.join("\n").trimEnd() + "\n";
  const toc = sections
    .map((s) => {
      const terms = s.terms
        .map((t) => `- [${t}](#${headingSlug(t)})`)
        .join("\n");
      return [
        "<details>",
        `<summary>${s.heading}</summary>`,
        "",
        terms,
        "",
        "</details>",
      ].join("\n");
    })
    .join("\n\n");
  const banner =
    "<!--\n" +
    "  GENERATED FILE — DO NOT EDIT.\n" +
    `  ${config.sourceLine}\n` +
    "  Regenerate: npm run generate\n" +
    "-->\n\n";
  writeFileSync(
    config.output,
    banner + template.replace(TOC_MARKER, toc).replace(MARKER, block)
  );
}

function main(): void {
  for (const config of README_CONFIGS) {
    generateReadme(config);
  }
}

main();
