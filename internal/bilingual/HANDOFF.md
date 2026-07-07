# Bilingual Migration Handoff

## Current State

The repository is an AI coding vocabulary dictionary. Current entries live as
single Markdown files in `dictionary/*.md`. `README.md` is generated from
`internal/README.template.md`, `internal/Curriculum.md`, and dictionary entries
by `internal/generate-readme.ts`.

This handoff covers the planned EN/TH migration. It does not mean the dictionary
has already been migrated.

## Decisions Already Made

- Thai must be source content, not a generated afterthought.
- The future layout is `dictionary/<Concept>/en.md` and
  `dictionary/<Concept>/th.md`.
- `internal/Curriculum.md` remains the source of truth for concept order.
- Canonical concept ids remain the current English names.
- README should display English and Thai together in a stacked format.
- Translation uses the hybrid glossary policy in
  `internal/TRANSLATION_CALIBRATION.md`.
- Work is divided by curriculum section for multi-agent execution.

## Read Before Starting

Read these files in order:

1. `AGENTS.md`
2. `CLAUDE.md`
3. `internal/bilingual/PLAN.md`
4. `internal/TRANSLATION_CALIBRATION.md`
5. `internal/bilingual/ORCHESTRATION.md`
6. `internal/bilingual/COMMAND_ORDER.md`
7. `internal/Curriculum.md`

## Suggested Skills

- `handoff`: use when passing a phase or section batch to another agent.
- `agent-orchestrator`: use when assigning infrastructure, translation, review,
  and integration agents.
- `writing-guidelines` or an equivalent writing/review skill: use for Thai tone,
  clarity, and consistency review.

If a named skill is unavailable, continue with the documented role contract in
`internal/bilingual/ORCHESTRATION.md`.

## Remaining Work By Phase

- Phase 1: Documentation and calibration. This phase creates the planning docs
  and entrypoint links only.
- Phase 2: Update the generator to support concept directories and incremental
  Thai reporting.
- Phase 3: Move English entries into `en.md` files without changing meaning.
- Phase 4: Add Thai pilot entries, refine calibration, then translate by
  curriculum section.
- Phase 5: Enable strict bilingual validation once every concept has Thai.

## Handoff Note Format

Every agent handing off work should leave a short note with:

- Phase and curriculum section handled.
- Files changed.
- Commands run and whether they passed.
- Missing Thai entries or unresolved glossary questions.
- Any deviations from `internal/TRANSLATION_CALIBRATION.md`.

Do not duplicate long plan or calibration content in handoff notes. Reference the
files above.
