# Repository Guidelines

## Project Structure & Module Organization

This repository is an AI vocabulary dictionary. Current entries live in
`dictionary/` as one Markdown file per term, using the visible term as the
filename, for example `dictionary/Context window.md`. The published `README.md`
is generated; do not edit it directly. Generation uses
`internal/README.template.md`, `internal/Curriculum.md`, and all files in
`dictionary/`. Supporting contributor notes and domain documents live in
`internal/`. Agent-specific guidance is also captured in `CLAUDE.md`.

The planned bilingual migration is documented in `internal/bilingual/`. Thai
work must follow `internal/TRANSLATION_CALIBRATION.md`.

## Build, Test, and Development Commands

- `npm install`: install TypeScript, tsx, Prettier, Husky, and lint-staged.
- `npm run generate`: rebuild `README.md` from the curriculum, template, and
  dictionary entries. This also validates that every dictionary entry is listed
  in `internal/Curriculum.md`.
- `npx prettier --check .`: check formatting without changing files.
- `npx prettier --write .`: format Markdown, JSON, and TypeScript files.

There is no separate automated test suite. Treat `npm run generate` plus
Prettier as the required validation before opening a PR.

## Coding Style & Naming Conventions

Use Prettier settings from `.prettierrc.json`: 2-space indentation, 80-character
print width, double quotes, semicolons, and trailing commas where valid in ES5.
Dictionary entry filenames should match the term exactly, including spaces and
capitalization. Each entry must include YAML frontmatter with a `description`
under 140 characters. Link to another entry only on the first occurrence of that
term in an article.

## Entry Authoring Guidelines

New entries must be added to both `dictionary/` and `internal/Curriculum.md`.
Entry bodies should be at least 200 words, excluding frontmatter. Write plainly:
explain the mechanism, the real-life problem it clarifies, and what to do about
it. Prefer tables for naturally structured comparisons or lifecycles.

## Bilingual Migration Guidelines

Before adding or reviewing Thai content, read
`internal/TRANSLATION_CALIBRATION.md`. Before changing bilingual structure, read
`internal/bilingual/PLAN.md`, `internal/bilingual/ORCHESTRATION.md`, and
`internal/bilingual/COMMAND_ORDER.md`. The target source layout is
`dictionary/<Concept>/en.md` and `dictionary/<Concept>/th.md`, with
`internal/Curriculum.md` retaining canonical ordering.

## Testing Guidelines

After adding or editing entries, run `npm run generate`. Fix missing curriculum
references, orphaned dictionary files, or malformed curriculum headings reported
by the generator. Then run `npx prettier --check .` or allow the pre-commit hook
to format staged files.

## Commit & Pull Request Guidelines

Recent commits use short, imperative messages such as `Add Effort entry to the
dictionary`, `Update AFK description for clarity and consistency`, or `Fix
formatting of description in Automated review.md`. Keep PRs focused, describe
the changed terms, mention generated `README.md` updates, and link any relevant
issue. Include screenshots only when visual README rendering is important.
