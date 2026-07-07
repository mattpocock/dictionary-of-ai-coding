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
const palette = ref("green");

const width = 1400;
const height = 880;
const centerX = width / 2;
const centerY = height / 2;

const currentLang = computed(() =>
  lang.value?.startsWith("th") ? "th" : "en"
);
const isThai = computed(() => currentLang.value === "th");
const normalizedQuery = computed(() => query.value.trim().toLowerCase());

const labels = computed(() =>
  isThai.value
    ? {
        eyebrow: "แผนผังคำศัพท์",
        title: "AI coding map",
        intro:
          "สำรวจคำศัพท์ผ่านหมวดและความสัมพันธ์แบบภาพ คลิก node เพื่ออ่านคำอธิบายเต็ม.",
        search: "ค้นหาในแผนผัง",
        searchPlaceholder: "ค้นหาคำหรือคำอธิบาย",
        directory: "กลับไปหน้า dictionary",
        green: "เขียว",
        red: "แดง",
        terms: "คำ",
      }
    : {
        eyebrow: "Vocabulary graph",
        title: "AI coding map",
        intro:
          "Explore the vocabulary as section hubs and clickable term nodes.",
        search: "Search the map",
        searchPlaceholder: "Search terms or descriptions",
        directory: "Back to dictionary",
        green: "Green",
        red: "Red",
        terms: "terms",
      }
);

const totalTerms = computed(() =>
  props.sections.reduce((total, section) => total + section.terms.length, 0)
);

function matchesTerm(term, sectionHeading) {
  const q = normalizedQuery.value;
  if (!q) return false;

  return [term.title, term.description, term.slug, sectionHeading]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(q));
}

function labelForNode(title) {
  return title.length > 24 ? `${title.slice(0, 21)}...` : title;
}

const sectionHubs = computed(() => {
  const count = Math.max(props.sections.length, 1);
  const radiusX = 365;
  const radiusY = 255;

  return props.sections.map((section, index) => {
    const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;

    return {
      id: `section-${index}`,
      heading: section.heading,
      count: section.terms.length,
      x: centerX + Math.cos(angle) * radiusX,
      y: centerY + Math.sin(angle) * radiusY,
      angle,
    };
  });
});

const termNodes = computed(() =>
  props.sections.flatMap((section, sectionIndex) => {
    const hub = sectionHubs.value[sectionIndex];
    const terms = section.terms;
    const count = Math.max(terms.length, 1);
    const baseAngle = hub.angle;
    const spread = Math.min(Math.PI * 0.9, 0.34 * count);
    const start = baseAngle - spread / 2;

    return terms.map((term, termIndex) => {
      const localAngle =
        count === 1 ? baseAngle : start + (spread * termIndex) / (count - 1);
      const orbit = 145 + (termIndex % 3) * 42;
      const x = hub.x + Math.cos(localAngle) * orbit;
      const y = hub.y + Math.sin(localAngle) * orbit;
      const highlighted = matchesTerm(term, section.heading);

      return {
        ...term,
        id: `${sectionIndex}-${term.slug}`,
        sectionId: hub.id,
        sectionHeading: section.heading,
        x: Math.min(Math.max(x, 70), width - 70),
        y: Math.min(Math.max(y, 70), height - 70),
        r: term.title.length <= 5 ? 22 : term.title.length <= 13 ? 28 : 34,
        highlighted,
        dimmed: normalizedQuery.value && !highlighted,
      };
    });
  })
);

const links = computed(() =>
  termNodes.value.map((term) => {
    const hub = sectionHubs.value.find(
      (section) => section.id === term.sectionId
    );

    return {
      id: `${term.sectionId}-${term.slug}`,
      x1: hub.x,
      y1: hub.y,
      x2: term.x,
      y2: term.y,
      highlighted: term.highlighted,
      dimmed: term.dimmed,
    };
  })
);

const matchedCount = computed(() =>
  normalizedQuery.value
    ? termNodes.value.filter((term) => term.highlighted).length
    : totalTerms.value
);
</script>

<template>
  <div class="dictionary-map" :data-palette="palette">
    <header class="map-header">
      <div>
        <p class="map-eyebrow">{{ labels.eyebrow }}</p>
        <h1>{{ labels.title }}</h1>
        <p>{{ labels.intro }}</p>
      </div>
      <div class="map-actions">
        <a :href="`/${currentLang}/`">{{ labels.directory }}</a>
        <div class="palette-toggle" aria-label="Map color theme">
          <button
            :class="{ active: palette === 'green' }"
            type="button"
            @click="palette = 'green'"
          >
            {{ labels.green }}
          </button>
          <button
            :class="{ active: palette === 'red' }"
            type="button"
            @click="palette = 'red'"
          >
            {{ labels.red }}
          </button>
        </div>
      </div>
    </header>

    <div class="map-toolbar">
      <label>
        <span>{{ labels.search }}</span>
        <input
          v-model="query"
          type="search"
          :placeholder="labels.searchPlaceholder"
        />
      </label>
      <p aria-live="polite">
        {{ matchedCount }} / {{ totalTerms }} {{ labels.terms }}
      </p>
    </div>

    <div class="map-stage" aria-label="AI coding vocabulary map">
      <svg :viewBox="`0 0 ${width} ${height}`" role="img">
        <title>{{ labels.title }}</title>
        <g class="map-links">
          <line
            v-for="link in links"
            :key="link.id"
            :class="{ highlighted: link.highlighted, dimmed: link.dimmed }"
            :x1="link.x1"
            :x2="link.x2"
            :y1="link.y1"
            :y2="link.y2"
          />
        </g>

        <g class="section-hubs">
          <g
            v-for="hub in sectionHubs"
            :key="hub.id"
            class="section-hub"
            :transform="`translate(${hub.x} ${hub.y})`"
          >
            <circle r="44" />
            <text y="-58" text-anchor="middle">{{ hub.heading }}</text>
            <text class="hub-count" y="5" text-anchor="middle">
              {{ hub.count }}
            </text>
          </g>
        </g>

        <g class="term-nodes">
          <a
            v-for="term in termNodes"
            :key="term.id"
            :class="{ highlighted: term.highlighted, dimmed: term.dimmed }"
            :href="`/${currentLang}/${term.slug}`"
            class="term-node"
          >
            <title>{{ term.title }} - {{ term.sectionHeading }}</title>
            <circle :cx="term.x" :cy="term.y" :r="term.r" />
            <text :x="term.x" :y="term.y - term.r - 11" text-anchor="middle">
              {{ labelForNode(term.title) }}
            </text>
          </a>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.dictionary-map {
  --map-bg: #147467;
  --map-bg-deep: #0f5d55;
  --map-line: rgba(242, 255, 248, 0.16);
  --map-line-strong: rgba(255, 255, 255, 0.65);
  --map-node: #f5f2ec;
  --map-text: rgba(255, 255, 255, 0.88);
  --map-muted: rgba(255, 255, 255, 0.68);
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    var(--map-bg);
  background-size: 38px 38px;
  color: var(--map-text);
  margin: -1.5rem calc(50% - 50vw) 0;
  min-height: calc(100vh - 64px);
  padding: 2rem max(1rem, calc((100vw - 1320px) / 2)) 2.5rem;
}

.dictionary-map[data-palette="red"] {
  --map-bg: #df322f;
  --map-bg-deep: #b92828;
  --map-line: rgba(255, 245, 238, 0.17);
  --map-line-strong: rgba(255, 255, 255, 0.7);
}

.map-header {
  align-items: start;
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

.map-eyebrow {
  color: var(--map-muted);
  font-size: 0.76rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
  text-transform: uppercase;
}

.map-header h1 {
  color: #fff;
  font-size: clamp(2rem, 5vw, 4.5rem);
  line-height: 1;
  margin: 0;
}

.map-header p {
  color: var(--map-muted);
  margin: 0.75rem 0 0;
  max-width: 620px;
}

.map-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.map-actions a,
.palette-toggle button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #fff;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 800;
  min-height: 44px;
  padding: 0 0.9rem;
  text-decoration: none;
}

.palette-toggle {
  display: inline-flex;
}

.palette-toggle button {
  cursor: pointer;
}

.palette-toggle button.active {
  background: #fff;
  color: var(--map-bg-deep);
}

.map-toolbar {
  align-items: end;
  display: grid;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.map-toolbar label {
  display: grid;
  gap: 0.35rem;
}

.map-toolbar span {
  color: var(--map-muted);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.map-toolbar input {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #fff;
  font: inherit;
  min-height: 48px;
  padding: 0 0.9rem;
}

.map-toolbar input::placeholder {
  color: rgba(255, 255, 255, 0.58);
}

.map-toolbar p {
  color: var(--map-muted);
  margin: 0;
}

.map-stage {
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: auto;
}

svg {
  display: block;
  min-width: 940px;
  width: 100%;
}

.map-links line {
  stroke: var(--map-line);
  stroke-width: 1;
}

.map-links line.highlighted {
  stroke: var(--map-line-strong);
  stroke-width: 2;
}

.map-links line.dimmed {
  opacity: 0.18;
}

.section-hub circle {
  fill: rgba(255, 255, 255, 0.18);
  stroke: rgba(255, 255, 255, 0.34);
}

.section-hub text,
.term-node text {
  fill: var(--map-text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
}

.section-hub .hub-count {
  fill: #fff;
  font-size: 20px;
}

.term-node {
  outline: none;
  text-decoration: none;
}

.term-node circle {
  fill: var(--map-node);
  stroke: rgba(255, 255, 255, 0.7);
  stroke-width: 2;
}

.term-node text {
  font-size: 14px;
}

.term-node:hover circle,
.term-node:focus-visible circle,
.term-node.highlighted circle {
  fill: #fff;
  stroke: #fff;
  stroke-width: 5;
}

.term-node.dimmed {
  opacity: 0.26;
}

@media (min-width: 780px) {
  .map-header {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .map-actions {
    justify-content: end;
  }

  .map-toolbar {
    grid-template-columns: minmax(280px, 420px) auto;
  }
}
</style>
