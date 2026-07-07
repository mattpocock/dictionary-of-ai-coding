#!/usr/bin/env -S npx tsx
// Generate README.md from internal/Curriculum.md + dictionary/<Concept>/{en,th}.md
// + internal/README.template.md.

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  statSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const CURRICULUM = join(HERE, "Curriculum.md");
const TEMPLATE = join(HERE, "README.template.md");
const DICT_DIR = join(ROOT, "dictionary");
const OUTPUT = join(ROOT, "README.md");
const MARKER = "<!-- CURRICULUM -->";
const TOC_MARKER = "<!-- TOC -->";

const SECTION_RE = /^## Section \d+ — .+$/;
const BULLET_RE = /^- (.+)$/;
const LINK_RE = /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g;

type Section = { heading: string; terms: string[] };

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

function parseCurriculum(text: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  text.split("\n").forEach((raw, idx) => {
    const lineNo = idx + 1;
    const line = raw.trimEnd();
    if (line === "") return;

    if (line.startsWith("## ")) {
      if (!SECTION_RE.test(line)) {
        fail(
          `Curriculum.md:${lineNo}: section heading must match "## Section N — Title" (em-dash required): ${line}`
        );
      }
      current = { heading: line.slice(3), terms: [] };
      sections.push(current);
      return;
    }

    if (line.startsWith("- ")) {
      if (!current)
        fail(`Curriculum.md:${lineNo}: bullet before any section heading`);
      const m = line.match(BULLET_RE);
      if (!m || !m[1])
        fail(`Curriculum.md:${lineNo}: malformed bullet: ${line}`);
      const term = m[1];
      if (term.trim() !== term)
        fail(`Curriculum.md:${lineNo}: term has surrounding whitespace`);
      if (/[*_`\[]/.test(term))
        fail(
          `Curriculum.md:${lineNo}: term must be plain text, no markdown: ${term}`
        );
      current.terms.push(term);
      return;
    }

    fail(
      `Curriculum.md:${lineNo}: only "## Section N — Title" headings and "- Term" bullets are allowed: ${line}`
    );
  });

  return sections;
}

function stripFrontmatter(body: string): string {
  const normalized = body.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return normalized;
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return normalized;
  return normalized.slice(end + 5).replace(/^\n+/, "");
}

function rewriteLinks(body: string): string {
  return body.replace(LINK_RE, (_, text: string, target: string) => {
    return `[${text}](#${headingSlug(decodeURIComponent(target))})`;
  });
}

function readEntry(dir: string, lang: string): string | null {
  const filePath = join(dir, `${lang}.md`);
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath, "utf8");
}

function main(): void {
  const template = readFileSync(TEMPLATE, "utf8");
  if (!template.includes(MARKER)) fail(`Template missing ${MARKER} marker`);
  if (!template.includes(TOC_MARKER))
    fail(`Template missing ${TOC_MARKER} marker`);

  const sections = parseCurriculum(readFileSync(CURRICULUM, "utf8"));

  // Collect all terms from curriculum
  const seen = new Set<string>();
  const parts: string[] = [];

  for (const section of sections) {
    parts.push(`## ${section.heading}`, "");
    for (const term of section.terms) {
      if (seen.has(term)) fail(`Curriculum.md: duplicate term "${term}"`);
      seen.add(term);

      const conceptDir = join(DICT_DIR, term);
      const isDir =
        existsSync(conceptDir) && statSync(conceptDir).isDirectory();

      let enBody: string | null = null;
      let thBody: string | null = null;

      if (!isDir) {
        fail(
          `dictionary/${term}/ is not a directory — expected dictionary/${term}/en.md and dictionary/${term}/th.md`
        );
      }

      enBody = readEntry(conceptDir, "en");
      thBody = readEntry(conceptDir, "th");

      if (!enBody) {
        fail(`dictionary/${term}/en.md does not exist`);
      }
      if (!thBody) {
        fail(`dictionary/${term}/th.md does not exist`);
      }

      // Build the entry
      const enContent = rewriteLinks(stripFrontmatter(enBody!).trimEnd());

      parts.push(`### ${term}`, "");
      parts.push("#### English", "", enContent, "");

      if (thBody) {
        const thContent = rewriteLinks(stripFrontmatter(thBody).trimEnd());
        parts.push("#### ไทย", "", thContent, "");
      }
    }
  }

  // Check for orphaned entries (files/dirs in dictionary/ not in curriculum)
  const dictEntries = readdirSync(DICT_DIR);
  const orphans: string[] = [];

  for (const entry of dictEntries) {
    const entryPath = join(DICT_DIR, entry);
    const isDir = statSync(entryPath).isDirectory();

    if (isDir) {
      // Concept directory — check if it's in curriculum
      if (!seen.has(entry)) {
        orphans.push(entry);
      }
    } else if (entry.endsWith(".md")) {
      // Legacy flat file — check if it's in curriculum
      const term = entry.slice(0, -3);
      if (!seen.has(term)) {
        orphans.push(term);
      }
    }
  }

  if (orphans.length) {
    fail(
      `dictionary/ entries not referenced by Curriculum.md: ${orphans.sort().join(", ")}`
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
    "  Source: dictionary/<Concept>/{en,th}.md, internal/Curriculum.md, internal/README.template.md\n" +
    "  Regenerate: npm run generate\n" +
    "-->\n\n";
  writeFileSync(
    OUTPUT,
    banner + template.replace(TOC_MARKER, toc).replace(MARKER, block)
  );
}

main();
