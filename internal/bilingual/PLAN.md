# Bilingual Migration Plan

## Goal

Make Thai a first-class language in this repository. English and Thai must be
stored as source content at the smallest useful unit: term, description, body,
usage dialogue, tables, and links. The generated README should show EN+TH
together rather than translating only at output time.

## Locked Decisions

- Canonical concept order stays in `internal/Curriculum.md`.
- Canonical concept ids continue to use the current English term names.
- Source layout will become `dictionary/<Concept>/en.md` and
  `dictionary/<Concept>/th.md`.
- Thai uses the hybrid glossary policy in
  `internal/TRANSLATION_CALIBRATION.md`.
- Generated README display is stacked: English first, Thai second.
- Rollout is incremental until Thai content exists for every concept.

## Target Source Shape

```text
dictionary/
  Context/
    en.md
    th.md
  Tool call/
    en.md
    th.md
```

Each language file owns its own frontmatter:

```yaml
---
term: Context
description: The relevant information the agent has access to right now.
---
```

```yaml
---
term: บริบท
description: ข้อมูลที่ agent มีอยู่และเกี่ยวข้องกับงานในขณะนั้น
---
```

## Target README Shape

```md
### Context / บริบท

#### English

...

#### ไทย

...
```

The table of contents remains section-based and ordered by
`internal/Curriculum.md`.

## Phases

### Phase 1: Documentation and Calibration

Add this planning set, the translation calibration file, and entrypoint links
from `AGENTS.md` and `CLAUDE.md`. Do not migrate dictionary content in this
phase.

### Phase 2: Generator Infrastructure

Update `internal/generate-readme.ts` to understand concept directories. During
the incremental period, `en.md` is required and `th.md` is reported when missing.
Do not make missing Thai fatal until Phase 5.

### Phase 3: English Migration

Move each current `dictionary/*.md` file to `dictionary/<Concept>/en.md`. Keep
English prose unchanged except for link updates required by the generator.
Regenerate `README.md` and verify the English content is meaningfully unchanged.

### Phase 4: Thai Pilot and Scale-Out

Create `th.md` for a pilot set: `AI`, `Agent`, `Context`, `Token`, and
`Tool call`. Use the pilot to refine calibration. Then translate by section from
`internal/Curriculum.md`.

### Phase 5: Strict Validation

After every concept has `th.md`, make `npm run generate` fail when either
language is missing, frontmatter is incomplete, or concept directories are
orphaned.

## Validation Expectations

- `npm run generate` is the primary structural validation.
- `npx prettier --check .` is the formatting validation.
- `git diff --check` should be clean before handoff or PR.
- Translation batches must be reviewed against
  `internal/TRANSLATION_CALIBRATION.md`.
