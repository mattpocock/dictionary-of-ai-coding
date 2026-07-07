# batch-05-02-handoffs

Batch 11 of 14.

Curriculum section: Section 5 — Handoffs

Approximate English words: 553

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term        | English source                 | Thai target                    | Words |
| ----------- | ------------------------------ | ------------------------------ | ----: |
| Compaction  | `dictionary/Compaction/en.md`  | `dictionary/Compaction/th.md`  |   277 |
| Autocompact | `dictionary/Autocompact/en.md` | `dictionary/Autocompact/th.md` |   276 |

## Raw English

## Compaction

Source: `dictionary/Compaction/en.md`

Target: `dictionary/Compaction/th.md`

```md
---
description: A handoff done in-memory: the previous session's history is summarised and seeds a fresh session. Lossy — detail traded for headroom.
---

A [handoff](./Handoff.md) done in-memory: the previous [session](./Session.md)'s history is summarised, and the summary seeds a fresh session. Lossy by design: the transcript is a [primary source](./Primary%20source.md), the summary a [secondary source](./Secondary%20source.md) — detail traded for headroom. Triggered manually by the user, or automatically via [autocompact](./Autocompact.md).

The mechanism: the [context window](./Context%20window.md) is finite, and a long session fills it — every [tool result](./Tool%20result.md), every file read, every wrong turn stays in history. When it gets heavy, the [harness](./Harness.md) asks the [model](./Model.md) to summarise the session, throws the original history away, and seeds a fresh session with the summary. Whatever didn't make it into the summary is gone from the context. Some harnesses soften this by keeping the old transcript on disk and leaving a [context pointer](./Context%20pointer.md) to it in the summary — the secondary source links back to its primary source, so a detail the summary lost can be recovered by re-reading the original.

The summary is written by the model, so it can be prompted. "Preserve the schema decisions" makes the generated artifact more deliberate. Timing matters too — compact at a phase boundary, after the plan is settled, not mid-task.

Contrast with [clearing](./Clearing.md), which drops everything and starts cold: compaction tries to carry the essentials across; clearing bets they're already written down somewhere better.

_Usage:_

"[Context](./Context.md)'s getting heavy and I still have the test pass to do."

"Compact before you start — write what must survive into the summary prompt so the new session keeps the schema decisions and drops the exploration."
```

## Autocompact

Source: `dictionary/Autocompact/en.md`

Target: `dictionary/Autocompact/th.md`

```md
---
description: Compaction triggered automatically by the harness when the context window approaches full.
---

[Compaction](./Compaction.md) triggered automatically by the [harness](./Harness.md) when the [context window](./Context%20window.md) approaches full.

The harness watches how full the context window is. When it crosses a threshold — often around 80% — it pauses, asks the [model](./Model.md) to summarise the [session](./Session.md) so far, and seeds a fresh session with the summary. Work then continues as if nothing happened.

Except something did happen. Compaction is lossy, and autocompact is lossy at a moment you didn't choose. A manual compact happens at a phase boundary, when you can tell the model what to preserve. Autocompact fires mid-task, whenever the threshold is hit — possibly halfway through a refactor, with the summary deciding for itself which of your decisions were worth keeping. The classic symptom: the [agent](./Agent.md) carries on confidently but has quietly forgotten a constraint you established an hour ago, and you only notice when its work starts contradicting it.

The defence is to not let it fire. Watch the context indicator and compact manually at a natural boundary, or write decisions into a plan doc or [handoff artifact](./Handoff%20artifact.md) on disk, where no summary can lose them. Most harnesses also let you customise the buffer — moving the threshold earlier or later, or turning autocompact off entirely — so you can tune how much headroom you keep before it fires.

_Usage:_

"It doesn't seem to remember what we decided about the schema earlier."

"Autocompact fired between [turns](./Turn.md) — the early decisions got summarised and we must have lost something. Reload the plan doc, or compact manually next time so you control what gets kept."
```
