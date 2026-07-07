# batch-04-02-failure-modes

Batch 9 of 14.

Curriculum section: Section 4 — Failure Modes

Approximate English words: 639

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                  | English source                           | Thai target                              | Words |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ----: |
| Attention degradation | `dictionary/Attention degradation/en.md` | `dictionary/Attention degradation/th.md` |   261 |
| Smart zone            | `dictionary/Smart zone/en.md`            | `dictionary/Smart zone/th.md`            |   378 |

## Raw English

## Attention degradation

Source: `dictionary/Attention degradation/en.md`

Target: `dictionary/Attention degradation/th.md`

```md
---
description: As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks.
---

As a [session](./Session.md) grows, each [token](./Token.md)'s [attention budget](./Attention%20budget.md) is spread across more competitors. The signal on any one [meaningful relationship](./Attention%20relationship.md) shrinks; noise from irrelevant [context](./Context.md) crowds in. Same [model](./Model.md), same [parameters](./Parameters.md) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](./Smart%20zone.md).

It presents as the model getting worse mid-session: constraints it followed for an hour start slipping, it re-asks things it was told, it writes code that ignores a file it read earlier. Nothing about the model changed — the only variable is how much context it's now attending over.

It's gradual, which is what makes it hard to catch from inside the session. There's no error and no threshold; each [turn](./Turn.md) is only slightly worse than the last, and by the time the slips are obvious you've been in the dumb zone for a while.

You recover by removing context, not adding more. Re-pasting the ignored instruction adds another competitor to the same crowded window and helps only briefly. What works: [clear](./Clearing.md) and reload only what the task needs, or [compact](./Compaction.md), or [hand off](./Handoff.md) to a fresh session. Treat declining instruction-following as a signal about context length, not about the model.

_Usage:_

"It's deep in the dumb zone — inventing generics that aren't in the type file."

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. Clear and reload."
```

## Smart zone

Source: `dictionary/Smart zone/en.md`

Target: `dictionary/Smart zone/th.md`

```md
---
description: "Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes."
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

Early in a [session](./Session.md) the [agent](./Agent.md) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more faithfulness [hallucinations](./Hallucination.md). Same [model](./Model.md), same [harness](./Harness.md) — just more [context](./Context.md). The felt effect of [attention degradation](./Attention%20degradation.md). On frontier models, the dumb zone commonly begins around 125K-150K [tokens](./Token.md) — though this is debated. [Clear](./Clearing.md) or [compact](./Compaction.md) when the session bloats; don't push through.

The decline is gradual, which makes it easy to miss. There's no error message and no visible boundary; the agent just starts performing slightly worse, then noticeably worse. Common signs: it forgets an instruction you gave twenty turns ago, repeats a mistake it had already corrected, or confidently asserts something the context contradicts. Because the slide is smooth, the usual response is to push through and re-explain — which adds more context and makes the problem worse.

The zones don't track the [context window](./Context%20window.md) limit. A session can be deep in the dumb zone with most of the window still free: the limit is where the harness refuses to continue, but quality falls off long before that. Plan around the smart zone, not the window — the practical budget for a task is the tokens the agent works well within, not the tokens it can technically hold.

The smart zone is a budget, and unrelated work spends it. Every task done in a session uses up tokens, so starting a second task in the same session means starting it closer to the dumb zone. Doing one task per session gives each task the sharpest part of the session. When a single task is bigger than one smart zone, split it: [hand off](./Handoff.md) or compact at a natural boundary, and let a fresh session do the next piece.

_Usage:_

"It nailed the first three components and just butchered the fourth."

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."
```
