<script setup>
import { computed, ref } from "vue";
import { useData } from "vitepress";

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
});

const { lang } = useData();
const query = ref("");

const currentLang = computed(() =>
  lang.value?.startsWith("th") ? "th" : "en"
);
const isThai = computed(() => currentLang.value === "th");
const normalizedQuery = computed(() => query.value.trim().toLowerCase());

const labels = computed(() =>
  isThai.value
    ? {
        eyebrow: "พจนานุกรม AI coding",
        title: "คำศัพท์ AI coding",
        accent: "แบบอ่านง่าย",
        tagline:
          "คำอธิบายสั้น กระชับ และค้นหาเร็ว สำหรับคำที่เจอบ่อยเวลาใช้ coding agent.",
        source: "ต้นฉบับแนวคิด",
        search: "ค้นหาคำศัพท์",
        searchPlaceholder: "ค้นหาด้วยคำ, หมวด, หรือคำอธิบาย",
        sections: "หมวด",
        browseMap: "ดูแผนผัง",
        noResults: "ไม่พบคำที่ตรงกับการค้นหา",
        terms: "คำ",
        allTerms: "คำทั้งหมด",
      }
    : {
        eyebrow: "AI coding vocabulary",
        title: "The vocabulary of AI coding,",
        accent: "in plain English and Thai.",
        tagline:
          "Skimmable definitions for the terms that make agentic coding click.",
        source: "Source inspiration",
        search: "Search terms",
        searchPlaceholder: "Search by term, section, or description",
        sections: "Sections",
        browseMap: "Browse map",
        noResults: "No matching terms",
        terms: "terms",
        allTerms: "all terms",
      }
);

const totalTerms = computed(() =>
  props.sections.reduce((total, section) => total + section.terms.length, 0)
);

function sectionId(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

function termMatches(term, sectionHeading) {
  const q = normalizedQuery.value;
  if (!q) return true;

  return [term.title, term.description, term.slug, sectionHeading]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(q));
}

const filteredSections = computed(() =>
  props.sections
    .map((section) => {
      const headingMatches =
        normalizedQuery.value &&
        section.heading.toLowerCase().includes(normalizedQuery.value);
      const terms = headingMatches
        ? section.terms
        : section.terms.filter((term) => termMatches(term, section.heading));

      return { ...section, terms };
    })
    .filter((section) => section.terms.length > 0)
);

const filteredCount = computed(() =>
  filteredSections.value.reduce(
    (total, section) => total + section.terms.length,
    0
  )
);
</script>

<template>
  <div class="dictionary-home">
    <header class="dictionary-hero">
      <div class="hero-copy">
        <div class="brand-line">
          <span class="brand-mark" aria-hidden="true">AI</span>
          <span>{{ labels.eyebrow }}</span>
        </div>
        <h1>
          <span>{{ labels.title }}</span>
          <strong>{{ labels.accent }}</strong>
        </h1>
        <p class="tagline">{{ labels.tagline }}</p>
        <div class="hero-actions" aria-label="Dictionary actions">
          <a class="primary-link" :href="`/${currentLang}/map`">
            {{ labels.browseMap }}
          </a>
          <div class="lang-toggle" aria-label="Language">
            <a :class="{ active: currentLang === 'en' }" href="/en/">English</a>
            <a :class="{ active: currentLang === 'th' }" href="/th/">ไทย</a>
          </div>
        </div>
        <p class="source">
          {{ labels.source }}:
          <a href="https://www.aihero.dev/ai-coding-dictionary" target="_blank">
            AIHero
          </a>
        </p>
      </div>

      <aside class="hero-index" aria-label="Featured sections">
        <a
          v-for="section in sections.slice(0, 7)"
          :key="section.heading"
          :href="`#${sectionId(section.heading)}`"
        >
          <span># {{ section.heading }}</span>
          <small>{{ section.terms.length }}</small>
        </a>
      </aside>
    </header>

    <div class="directory-toolbar">
      <label class="search-box">
        <span>{{ labels.search }}</span>
        <input
          v-model="query"
          type="search"
          :placeholder="labels.searchPlaceholder"
        />
      </label>
      <p class="result-count" aria-live="polite">
        {{ filteredCount }} / {{ totalTerms }} {{ labels.allTerms }}
      </p>
    </div>

    <div class="dictionary-layout">
      <nav class="section-nav" :aria-label="labels.sections">
        <p>{{ labels.sections }}</p>
        <a
          v-for="section in sections"
          :key="section.heading"
          :href="`#${sectionId(section.heading)}`"
        >
          <span>{{ section.heading }}</span>
          <small>{{ section.terms.length }}</small>
        </a>
      </nav>

      <main class="terms-column">
        <div
          v-for="section in filteredSections"
          :id="sectionId(section.heading)"
          :key="section.heading"
          class="section-group"
        >
          <div class="section-heading-row">
            <h2 class="section-heading">{{ section.heading }}</h2>
            <span>{{ section.terms.length }} {{ labels.terms }}</span>
          </div>
          <div class="terms-grid">
            <a
              v-for="term in section.terms"
              :key="term.slug"
              :href="`/${currentLang}/${term.slug}`"
              class="term-card"
            >
              <span class="term-title">{{ term.title }}</span>
              <span class="term-desc">{{ term.description }}</span>
              <span class="term-arrow" aria-hidden="true">-></span>
            </a>
          </div>
        </div>

        <p v-if="filteredSections.length === 0" class="empty-state">
          {{ labels.noResults }}
        </p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dictionary-home {
  color: #191817;
  margin: -1.5rem auto 0;
  max-width: 1180px;
  padding: 2.5rem 1.25rem 5rem;
}

.dictionary-hero {
  display: grid;
  gap: 2rem;
  padding: 2rem 0 2.5rem;
}

.brand-line {
  align-items: center;
  color: #6f6a64;
  display: flex;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 0.55rem;
  text-transform: uppercase;
}

.brand-mark {
  align-items: center;
  background: #191817;
  color: #f7f3ee;
  display: inline-flex;
  font-size: 0.68rem;
  height: 1.45rem;
  justify-content: center;
  width: 1.45rem;
}

h1 {
  color: #191817;
  font-size: clamp(2.4rem, 7vw, 5.8rem);
  line-height: 0.95;
  margin: 1rem 0 1.2rem;
  max-width: 760px;
}

h1 span,
h1 strong {
  display: block;
}

h1 strong {
  color: #f05a28;
  font-weight: 800;
}

.tagline {
  color: #5b5650;
  font-size: 1.08rem;
  line-height: 1.7;
  margin: 0;
  max-width: 580px;
}

.hero-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.6rem;
}

.primary-link,
.lang-toggle a {
  border: 1px solid #d8d1c8;
  color: #191817;
  font-size: 0.88rem;
  font-weight: 700;
  min-height: 44px;
  text-decoration: none;
}

.primary-link {
  align-items: center;
  background: #f05a28;
  border-color: #f05a28;
  color: #fffaf6;
  display: inline-flex;
  padding: 0 1.1rem;
}

.lang-toggle {
  display: inline-flex;
}

.lang-toggle a {
  align-items: center;
  display: inline-flex;
  padding: 0 0.95rem;
}

.lang-toggle a.active {
  background: #191817;
  border-color: #191817;
  color: #fffaf6;
}

.source {
  color: #7d776f;
  font-size: 0.82rem;
  margin: 1.3rem 0 0;
}

.source a {
  color: #191817;
  text-decoration-color: #f05a28;
  text-underline-offset: 3px;
}

.hero-index {
  align-self: end;
  background: #f1ece5;
  border: 1px solid #e3ddd4;
  display: grid;
}

.hero-index a {
  align-items: center;
  border-bottom: 1px solid #e3ddd4;
  color: #4f4943;
  display: flex;
  font-size: 0.82rem;
  font-weight: 700;
  justify-content: space-between;
  min-height: 42px;
  padding: 0 1rem;
  text-decoration: none;
}

.hero-index a:last-child {
  border-bottom: 0;
}

.directory-toolbar {
  align-items: end;
  border-bottom: 1px solid #ddd6cd;
  border-top: 1px solid #ddd6cd;
  display: grid;
  gap: 0.8rem;
  padding: 0.9rem 0;
}

.search-box {
  display: grid;
  gap: 0.45rem;
}

.search-box span,
.section-nav p {
  color: #6f6a64;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.search-box input {
  background: #fffaf6;
  border: 1px solid #d8d1c8;
  color: #191817;
  font: inherit;
  min-height: 48px;
  padding: 0 0.9rem;
}

.result-count {
  color: #6f6a64;
  font-size: 0.84rem;
  margin: 0;
}

.dictionary-layout {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.section-nav {
  display: none;
}

.section-group {
  scroll-margin-top: 5rem;
}

.section-heading-row {
  align-items: center;
  border-bottom: 1px solid #ddd6cd;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding: 1rem 0;
}

.section-heading {
  color: #191817;
  font-size: 1rem;
  margin: 0;
}

.section-heading-row span {
  color: #8a837b;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
}

.terms-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.term-card {
  background: #fffdf9;
  border-bottom: 1px solid #e8e1d8;
  color: #191817;
  display: grid;
  gap: 0.5rem;
  min-height: 148px;
  padding: 1.1rem 2.4rem 1.1rem 0;
  position: relative;
  text-decoration: none;
}

.term-card:hover {
  background: #fff7ed;
}

.term-title {
  font-size: 1.02rem;
  font-weight: 800;
}

.term-desc {
  color: #5f5851;
  font-size: 0.88rem;
  line-height: 1.55;
}

.term-arrow {
  color: #c94a20;
  font-weight: 800;
  position: absolute;
  right: 0.2rem;
  top: 1rem;
}

.empty-state {
  border: 1px solid #ddd6cd;
  color: #6f6a64;
  margin: 2rem 0 0;
  padding: 2rem;
  text-align: center;
}

@media (min-width: 760px) {
  .dictionary-hero {
    grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
    padding-top: 3.2rem;
  }

  .directory-toolbar {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .dictionary-layout {
    align-items: start;
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .section-nav {
    display: grid;
    gap: 0.2rem;
    position: sticky;
    top: 88px;
  }

  .section-nav a {
    align-items: center;
    border-left: 2px solid transparent;
    color: #5b5650;
    display: flex;
    font-size: 0.82rem;
    justify-content: space-between;
    padding: 0.5rem 0 0.5rem 0.7rem;
    text-decoration: none;
  }

  .section-nav a:hover {
    border-color: #f05a28;
    color: #191817;
  }

  .terms-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .term-card {
    border-right: 1px solid #e8e1d8;
    padding-left: 1rem;
  }

  .term-card:nth-child(2n) {
    border-right: 0;
  }
}
</style>
