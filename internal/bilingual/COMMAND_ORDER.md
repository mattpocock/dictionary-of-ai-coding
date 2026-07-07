# Bilingual Migration Command Order

Run commands from the repository root in PowerShell unless noted otherwise.

## 0. Inspect Current State

```powershell
git status --short
Get-Content AGENTS.md
Get-Content CLAUDE.md
Get-Content internal\Curriculum.md
Get-Content internal\generate-readme.ts
```

Checkpoint: confirm whether the branch already has unrelated user changes. Do
not revert unrelated changes.

## 1. Documentation Phase

Create documentation only:

```powershell
New-Item -ItemType Directory -Force internal\bilingual
# Add or update:
# - internal\bilingual\PLAN.md
# - internal\bilingual\HANDOFF.md
# - internal\bilingual\ORCHESTRATION.md
# - internal\bilingual\COMMAND_ORDER.md
# - internal\TRANSLATION_CALIBRATION.md
# - AGENTS.md
# - CLAUDE.md
```

Validate docs:

```powershell
npx prettier --check AGENTS.md CLAUDE.md internal\bilingual\*.md internal\TRANSLATION_CALIBRATION.md
git diff -- AGENTS.md CLAUDE.md internal\bilingual internal\TRANSLATION_CALIBRATION.md
git status --short
```

Checkpoint: this phase should not modify `dictionary/`, `README.md`, or
`internal/generate-readme.ts`.

## 2. Generator Infrastructure Phase

Inspect before editing:

```powershell
Get-Content internal\generate-readme.ts
Get-Content internal\README.template.md
Get-Content internal\Curriculum.md
```

After editing generator behavior:

```powershell
npm run generate
npx prettier --check internal\generate-readme.ts
git diff -- internal\generate-readme.ts README.md
```

Checkpoint: during incremental rollout, missing `th.md` should be reported but
not fatal. Missing `en.md` should be fatal.

## 3. English Migration Phase

Before moving files:

```powershell
git status --short
Get-ChildItem dictionary -File | Select-Object -ExpandProperty Name
```

After moving `dictionary\Term.md` to `dictionary\Term\en.md`:

```powershell
npm run generate
npx prettier --check dictionary internal\generate-readme.ts README.md
git diff --stat
git diff -- README.md
```

Checkpoint: English README content should not change in meaning. Structural
heading changes are expected only where bilingual rendering requires them.

## 4. Thai Pilot Phase

Create pilot `th.md` files for:

```text
AI
Model
Token
Context
Agent
Tool call
```

Before writing Thai, read:

```powershell
Get-Content internal\TRANSLATION_CALIBRATION.md
```

Validate:

```powershell
npm run generate
npx prettier --check dictionary internal\TRANSLATION_CALIBRATION.md README.md
git diff -- dictionary internal\TRANSLATION_CALIBRATION.md README.md
```

Checkpoint: update `internal/TRANSLATION_CALIBRATION.md` if the pilot exposes a
new glossary decision.

## 5. Section Translation Phase

For each curriculum section:

```powershell
Get-Content internal\Curriculum.md
Get-Content internal\TRANSLATION_CALIBRATION.md
# Translate the assigned section.
npm run generate
npx prettier --check dictionary README.md
git diff -- dictionary README.md
```

Checkpoint: each batch must include a handoff note with files changed, commands
run, missing terms, and glossary questions.

## 6. Strict Validation Phase

After every concept has `th.md`, update the generator so missing Thai becomes
fatal. Then run:

```powershell
npm run generate
npx prettier --check .
git diff --check
git status --short
```

Checkpoint: no missing language files, no orphan concept directories, and no
frontmatter gaps.

## Rollback Guidance

- Documentation-only changes can be reverted independently.
- Generator changes should be reverted before source moves if validation fails.
- Source moves should be checkpointed by phase so translation work does not mix
  with infrastructure fixes.
- Do not use destructive git commands unless explicitly instructed.
