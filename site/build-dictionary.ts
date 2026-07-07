#!/usr/bin/env -S npx tsx
// Build VitePress markdown pages from dictionary/<Concept>/{en,th}.md

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const DICT_DIR = join(ROOT, "dictionary");
const CURRICULUM = join(ROOT, "internal", "Curriculum.md");
const SITE_DIR = HERE;

const SECTION_RE = /^## Section \d+ — (.+)$/;
const BULLET_RE = /^- (.+)$/;

type Section = { heading: string; terms: string[] };
type TermData = {
  slug: string;
  title: string;
  description: string;
};

function slugify(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

function parseCurriculum(text: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const raw of text.split("\n")) {
    const line = raw.trimEnd();
    if (line === "") continue;

    if (line.startsWith("## ")) {
      const m = line.match(SECTION_RE);
      if (m) {
        current = { heading: m[1], terms: [] };
        sections.push(current);
      }
      continue;
    }

    if (line.startsWith("- ")) {
      const m = line.match(BULLET_RE);
      if (m && current) {
        current.terms.push(m[1]);
      }
    }
  }

  return sections;
}

function stripFrontmatter(body: string): string {
  const normalized = body.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return normalized;
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return normalized;
  return normalized.slice(end + 5).replace(/^\n+/, "");
}

function getFrontmatterField(body: string, field: string): string {
  const normalized = body.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return "";
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return "";
  const fm = normalized.slice(4, end);
  const re = new RegExp(`^${field}:\\s*(.+)$`, "m");
  const m = fm.match(re);
  return m ? m[1].trim() : "";
}

function rewriteLinks(body: string, lang: string): string {
  return body.replace(
    /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g,
    (_, text: string, target: string) => {
      const slug = slugify(decodeURIComponent(target));
      return `[${text}](/${lang}/${slug})`;
    }
  );
}

function escapeYaml(str: string): string {
  return str.replace(/"/g, "'");
}

function ensureDir(dir: string): void {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function buildSectionData(
  sections: Section[],
  lang: string
): { heading: string; terms: TermData[] }[] {
  return sections.map((section) => ({
    heading: section.heading,
    terms: section.terms
      .map((term) => {
        const conceptDir = join(DICT_DIR, term);
        if (!existsSync(conceptDir)) return null;

        const file = lang === "th" ? "th.md" : "en.md";
        const filePath = join(conceptDir, file);
        const fallbackPath = join(conceptDir, "en.md");
        const body = existsSync(filePath)
          ? readFileSync(filePath, "utf8")
          : existsSync(fallbackPath)
            ? readFileSync(fallbackPath, "utf8")
            : null;

        if (!body) return null;

        return {
          slug: slugify(term),
          title: getFrontmatterField(body, "term") || term,
          description: getFrontmatterField(body, "description"),
        };
      })
      .filter(Boolean) as TermData[],
  }));
}

function generateHomepage(
  lang: string,
  sectionsData: { heading: string; terms: TermData[] }[]
): string {
  const sectionsJson = JSON.stringify(sectionsData, null, 2);

  return `---
layout: page
title: AI Coding Dictionary
lang: ${lang}
---

<script setup>
import DictionaryHome from '../.vitepress/theme/DictionaryHome.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const sections = ${sectionsJson}
</script>

<DictionaryHome :sections="sections" />
`;
}

function generateMapPage(
  lang: string,
  sectionsData: { heading: string; terms: TermData[] }[]
): string {
  const sectionsJson = JSON.stringify(sectionsData, null, 2);

  return `---
layout: page
title: AI Coding Map
lang: ${lang}
---

<script setup>
import DictionaryMap from '../.vitepress/theme/DictionaryMap.vue'

const sections = ${sectionsJson}
</script>

<DictionaryMap :sections="sections" />
`;
}

function main(): void {
  const sections = parseCurriculum(readFileSync(CURRICULUM, "utf8"));

  ensureDir(join(SITE_DIR, "en"));
  ensureDir(join(SITE_DIR, "th"));

  // Build section data for both languages
  const enSections = buildSectionData(sections, "en");
  const thSections = buildSectionData(sections, "th");

  // Generate homepages
  writeFileSync(
    join(SITE_DIR, "en", "index.md"),
    generateHomepage("en", enSections)
  );
  writeFileSync(
    join(SITE_DIR, "th", "index.md"),
    generateHomepage("th", thSections)
  );
  writeFileSync(
    join(SITE_DIR, "en", "map.md"),
    generateMapPage("en", enSections)
  );
  writeFileSync(
    join(SITE_DIR, "th", "map.md"),
    generateMapPage("th", thSections)
  );

  // Root index redirects to English
  writeFileSync(
    join(SITE_DIR, "index.md"),
    `---
layout: page
title: AI Coding Dictionary
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
const router = useRouter()
onMounted(() => { router.go('/en/') })
</script>

<p>Redirecting to <a href="/en/">English</a>...</p>
`
  );

  let count = 0;

  for (const section of sections) {
    for (const term of section.terms) {
      const conceptDir = join(DICT_DIR, term);
      if (!existsSync(conceptDir)) continue;

      const slug = slugify(term);
      const enBody = readFileSync(join(conceptDir, "en.md"), "utf8");
      const thPath = join(conceptDir, "th.md");
      const thBody = existsSync(thPath) ? readFileSync(thPath, "utf8") : null;

      const enTitle = getFrontmatterField(enBody, "term") || term;
      const enDesc = getFrontmatterField(enBody, "description");
      const thTitle = thBody
        ? getFrontmatterField(thBody, "term") || term
        : term;
      const thDesc = thBody ? getFrontmatterField(thBody, "description") : "";

      // English page
      const enContent = rewriteLinks(stripFrontmatter(enBody), "en");
      const enPage = `---
title: "${escapeYaml(enTitle)}"
description: "${escapeYaml(enDesc)}"
editLink: false
---

# ${enTitle}

${enContent}

<div style="text-align:center;margin-top:2rem">
  <a href="/th/${slug}" class="VPLink">Read in ไทย →</a>
</div>
`;
      writeFileSync(join(SITE_DIR, "en", `${slug}.md`), enPage);

      // Thai page
      if (thBody) {
        const thContent = rewriteLinks(stripFrontmatter(thBody), "th");
        const thPage = `---
title: "${escapeYaml(thTitle)}"
description: "${escapeYaml(thDesc)}"
editLink: false
---

# ${thTitle}

${thContent}

<div style="text-align:center;margin-top:2rem">
  <a href="/en/${slug}" class="VPLink">Read in English →</a>
</div>
`;
        writeFileSync(join(SITE_DIR, "th", `${slug}.md`), thPage);
      }

      count++;
    }
  }

  console.log(`Built ${count} terms × 2 languages + homepages + maps`);
}

main();
