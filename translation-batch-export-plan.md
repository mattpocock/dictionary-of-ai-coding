# Thai Translation Batch Export

## Goal

Create repeatable raw-English translation batches and one AI-facing Thai brief so
Thai rewrites can be assigned without losing source context or tone.

## Tasks

- [x] Inspect curriculum and entry sizes -> Verify batch size target is sensible.
- [x] Add Thai AI brief -> Verify it points to the calibration file as authority.
- [x] Add batch export script -> Verify it reads curriculum order and `en.md`.
- [x] Generate raw-English batch Markdown -> Verify every curriculum term appears.
- [x] Run validation -> Verify `npm run generate` and Prettier checks pass.

## Done When

- [x] Batch files are under `internal/bilingual/raw-english-batches/`.
- [x] Each batch has exact source paths, output targets, and translator contract.
- [x] Thai tone guidance is centralized and does not compete with glossary policy.
