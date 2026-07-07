# Bilingual Migration Orchestration

## Operating Model

Use a sequential pipeline for infrastructure, then section-based parallel work
for translation. Every role must read `internal/TRANSLATION_CALIBRATION.md`
before touching Thai content.

## Roles

| Role                 | Owns                                      | Must not do                                       |
| -------------------- | ----------------------------------------- | ------------------------------------------------- |
| Infrastructure agent | Generator changes and source layout       | Rewrite entry prose while migrating structure     |
| Translation agent    | `th.md` creation for assigned sections    | Change English source except to report issues     |
| Review agent         | Tone, glossary, links, and concept checks | Introduce new glossary policy outside calibration |
| Integration agent    | Generate README and resolve conflicts     | Accept missing validation silently                |

## Batch Assignment

Assign translation work by section from `internal/Curriculum.md`. A batch should
cover one section unless the section is too large for a single review pass. Keep
the section heading and term list in the batch handoff.

Recommended first pilot batch:

- Section 1 subset: `AI`, `Model`, `Token`
- Section 2 subset: `Context`, `Agent`
- Section 3 subset: `Tool call`

## Batch Contract

Each translation batch receives:

- `internal/TRANSLATION_CALIBRATION.md`
- `internal/Curriculum.md`
- The assigned English `en.md` files
- Any generated README excerpt needed for context

Each batch returns:

- Completed `th.md` files for assigned concepts
- A handoff note using the format in `internal/bilingual/HANDOFF.md`
- Glossary questions, if any, proposed as edits to
  `internal/TRANSLATION_CALIBRATION.md`

## Review Contract

Review each batch for:

- Concept accuracy against English.
- Natural Thai prose.
- Hybrid glossary consistency.
- `term` and `description` frontmatter.
- First-link-only behavior.
- Tables and usage dialogue readability.

Reviewers should make small corrections directly when allowed. If a term policy
decision is missing, update `internal/TRANSLATION_CALIBRATION.md` rather than
creating a local convention.

## Integration Flow

1. Infrastructure agent updates generator and migrates source layout.
2. Integration agent runs structural checks and regenerates `README.md`.
3. Translation agents work by curriculum section.
4. Review agents review each section batch.
5. Integration agent resolves link, README, and formatting issues.
6. Strict validation is enabled only after every concept has `th.md`.

## Conflict Rules

- `internal/TRANSLATION_CALIBRATION.md` wins over individual agent preference.
- `internal/Curriculum.md` wins for ordering and membership.
- English source is authoritative for concept meaning until Thai review marks a
  translation as accepted.
- Do not rename canonical concept directories without updating curriculum and
  generator logic in the same change.
