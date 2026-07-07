import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Coding Dictionary",
  description:
    "The vocabulary of AI coding, translated into plain English and Thai.",
  cleanUrls: true,
  head: [
    ["meta", { name: "theme-color", content: "#0a0a0a" }],
    ["meta", { property: "og:title", content: "The AI Coding Dictionary" }],
    [
      "meta",
      {
        property: "og:description",
        content: "The vocabulary of AI coding, in plain English and Thai.",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Dictionary", link: "/en/" },
      { text: "Map", link: "/en/map" },
      { text: "English", link: "/en/" },
      { text: "ไทย", link: "/th/" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mattpocock/dictionary-of-ai-coding",
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: false,
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    th: {
      label: "ไทย",
      lang: "th",
    },
  },
});
