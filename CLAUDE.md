README.md is a generated file, generated via internal/README.template.md.

Links to other entries should only have a link on the first occurrence. I.e. if session appears twice in the entry, only the first should have an outward link.

New entries must be added to dictionary/, and found a place in internal/Curriculum.md

Each entry must have a `description` field in the frontmatter. Each description must be less than 140 characters long.

Co-locate each concept with the real-life problem it explains. Where a term has a recognisable symptom — a felt failure or surprise the reader has likely hit — weave that symptom into the prose near the definition, so the reader recognises their own incident in the entry. Woven prose, not a named section. Vocabulary/building-block terms (e.g. Token, Parameters) have no symptom; don't force a fake one.

Each entry should be at least 200 words long (counting the body and the Usage dialogue, not the frontmatter). Reach the minimum with substance — mechanism, symptom, what to do about it — never with padding.

Prefer tables for structured material: lifecycles (step / who / what happens), ladders of options, and similar. See `dictionary/Tool call.md` and `dictionary/Permission mode.md` for examples. Don't force prose into a table when it isn't naturally stepped or comparative.

Write in a plain, de-hyped register. No selling the concept: avoid superlatives ("the cheapest medium there is"), dramatised moments ("You'll recognise the moment", "That's the signal to"), and emphasis words like "core", "whole value", "real power", "straight into". State what happens and what to do, flatly.

The first sentence used in a paragraph must be extra-clear. Don't attempt to pre-hype the paragraph by using a clever phrase first.

Whenever a new entry is added, search through all other entries to see if it can be referenced there. The presence of a new term may be able to reduce verbosity in other entries.

## Bilingual migration

Thai is planned as a first-class source language, not a README-only translation layer. The migration plan lives in `internal/bilingual/PLAN.md`.

Before writing, editing, or reviewing Thai content, read `internal/TRANSLATION_CALIBRATION.md`. It is the single source of truth for Thai tone, level of formality, glossary choices, and which terms should remain in English.

Before changing bilingual infrastructure or assigning work to another agent, read `internal/bilingual/HANDOFF.md`, `internal/bilingual/ORCHESTRATION.md`, and `internal/bilingual/COMMAND_ORDER.md`.

The target source layout is `dictionary/<Concept>/en.md` and `dictionary/<Concept>/th.md`, while `internal/Curriculum.md` remains the source of truth for concept order.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues, accessed via the `gh` CLI. See `internal/issue-tracker.md`.

### Triage labels

Default canonical label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `internal/triage-labels.md`.

### Domain docs

Single-context layout, nested under `internal/` (`internal/CONTEXT.md`, `internal/adr/`). See `internal/domain.md`.
