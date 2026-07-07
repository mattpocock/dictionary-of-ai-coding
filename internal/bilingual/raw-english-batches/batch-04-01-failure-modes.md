# batch-04-01-failure-modes

Batch 8 of 14.

Curriculum section: Section 4 — Failure Modes

Approximate English words: 2194

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                   | English source                            | Thai target                               | Words |
| ---------------------- | ----------------------------------------- | ----------------------------------------- | ----: |
| Sycophancy             | `dictionary/Sycophancy/en.md`             | `dictionary/Sycophancy/th.md`             |   255 |
| Hallucination          | `dictionary/Hallucination/en.md`          | `dictionary/Hallucination/th.md`          |   340 |
| Parametric knowledge   | `dictionary/Parametric knowledge/en.md`   | `dictionary/Parametric knowledge/th.md`   |   313 |
| Knowledge cutoff       | `dictionary/Knowledge cutoff/en.md`       | `dictionary/Knowledge cutoff/th.md`       |   211 |
| Contextual knowledge   | `dictionary/Contextual knowledge/en.md`   | `dictionary/Contextual knowledge/th.md`   |   365 |
| Attention relationship | `dictionary/Attention relationship/en.md` | `dictionary/Attention relationship/th.md` |   418 |
| Attention budget       | `dictionary/Attention budget/en.md`       | `dictionary/Attention budget/th.md`       |   292 |

## Raw English

## Sycophancy

Source: `dictionary/Sycophancy/en.md`

Target: `dictionary/Sycophancy/th.md`

```md
---
description: Confidently agreeable model output. Caused by training that shaped the model to favor answers humans liked — including agreement.
---

Confidently agreeable [model](./Model.md) output. Caused by [training](./Training.md): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

_Surfaces as:_

- _Caving under pushback_ — reverses a correct answer when you say "are you sure?".
- _Praising bad input_ — agrees your broken plan is brilliant before analysing it.
- _Biased framing_ — review skews positive when you signal you wrote it; negative when you signal someone else did. Same artifact, different verdict.
- _Mimicry_ — repeats your mistakes back to you as confirmation.

_Diagnostic test:_ would the model have said this without your steer? If the only thing that changed was your tone or framing, it's sycophancy, not a real shift in analysis.

_Fix:_ hide your preferences. Phrase prompts neutrally — "review this code" not "is this code good?".

_Avoid:_ using "sycophancy" for any wrong answer that happens to please you. Without the diagnostic test, the term has no more value than "wrong."

_Usage:_

"It said my refactor plan looked great, then I asked 'are you sure?' and it walked the whole thing back."

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](./Clearing.md) and re-ask without signalling either way."
```

## Hallucination

Source: `dictionary/Hallucination/en.md`

Target: `dictionary/Hallucination/th.md`

```md
---
description: "Confidently-wrong model output. Two flavors: factuality (invented facts) and faithfulness (drift from loaded context)."
---

Confidently-wrong [model](./Model.md) output. Two flavors with different causes and fixes:

| Flavor         | What goes wrong                                                                                                        | Cause                                                                                                                | Fix                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Factuality_   | Invented or wrong facts about the world — a function that doesn't exist, a wrong API signature, a fake citation        | [Parametric knowledge](./Parametric%20knowledge.md) gaps, often past the [knowledge cutoff](./Knowledge%20cutoff.md) | Load the right [contextual knowledge](./Contextual%20knowledge.md) |
| _Faithfulness_ | Output drifts from the contextual knowledge that's loaded, the user's instructions, or the model's own prior reasoning | [Attention degradation](./Attention%20degradation.md); worsens in the [dumb zone](./Smart%20zone.md)                 | [Clear](./Clearing.md) or [compact](./Compaction.md)               |

[Next-token prediction](./Next-token%20prediction.md) produces fluent output whether or not the underlying fact is real — the model has no internal signal that it doesn't know something, so an invented method arrives in the same assured register as a correct one. Hallucinated code is plausible by construction: it's what the API _would_ look like if it existed, which is exactly what makes it slip past a skim-level review and fail only when run.

You need to know which flavor you're looking at, because the fix for one makes the other worse. Factuality means missing knowledge: the fix is adding context — the docs, the type definitions, the file. Faithfulness means the knowledge is present but losing the competition for attention: the fix is removing context. Misdiagnose faithfulness as factuality and you paste in more docs, which grows the context and makes the drift worse. When the agent gets something wrong, check whether the correct information was already in context before deciding which problem you have.

_Avoid:_ "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

_Usage:_

"It hallucinated a `parseAsync` method on the schema."

"Factuality or faithfulness?"

"The method exists in the docs I pasted — it just stopped reading them after [turn](./Turn.md) forty."

"Faithfulness then. Compact and reload, don't bother adding more docs."
```

## Parametric knowledge

Source: `dictionary/Parametric knowledge/en.md`

Target: `dictionary/Parametric knowledge/th.md`

```md
---
description: What the model knows from training, stored in its parameters. Frozen at training time. Counterpart to contextual knowledge.
---

What the [model](./Model.md) "knows" from [training](./Training.md), stored in its [parameters](./Parameters.md). Frozen at training time — the model can't see its own parameters or update them. Detail is lost in the squeeze: billions of facts cram into a fixed number of parameters, and the rare ones blur. Source of fluency on common topics, and of fabrication on uncommon ones. Counterpart to [contextual knowledge](./Contextual%20knowledge.md).

Parametric knowledge is not stored as facts. Training never gives the model a database to look things up in; it adjusts parameters until the model predicts text well, and a model that predicts text about a topic well behaves as if it knows the topic. How reliable the knowledge is tracks how often something appeared in the training data: a topic with millions of examples is reproduced accurately, for a topic with only a handful, the model guesses based on what similar topics look like. Reproducing and guessing are the same process to the model, so it can't tell which one it's doing. A fabricated answer arrives with the same fluency as a correct one. [Hallucination](./Hallucination.md) is the model guessing wrong.

Parametric knowledge also ages. The parameters stop changing at the [knowledge cutoff](./Knowledge%20cutoff.md), so a library released or renamed after that date doesn't exist in them, and an API that changed is remembered in its old form.

For both gaps — too rare and too recent — the remedy is the same: the knowledge can't be added to the parameters, so it has to be supplied as contextual knowledge instead.

_Usage:_

"It writes flawless React but invents methods on our internal SDK."

"React is dense in the parametric knowledge — millions of training examples. Your SDK isn't, so the model fills in plausible-looking shapes. Load the SDK docs into [context](./Context.md)."
```

## Knowledge cutoff

Source: `dictionary/Knowledge cutoff/en.md`

Target: `dictionary/Knowledge cutoff/th.md`

```md
---
description: The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded.
---

The date past which a [model](./Model.md) has no [parametric knowledge](./Parametric%20knowledge.md). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](./Contextual%20knowledge.md). Each model release ships with its own cutoff.

The cutoff exists because of how models are made: [training](./Training.md) bakes a snapshot of text into the model's [parameters](./Parameters.md), and after that the parameters are frozen. The model doesn't know its knowledge has an edge — asked about something past the cutoff, it doesn't refuse, it extrapolates from the nearest thing it does know. That's what makes the trap quiet: code written against an old version of a library looks plausible, often compiles, and fails on the parts that changed.

The fix is always the same: get current information into [context](./Context.md). Load the changelog, point at the installed version's type definitions, or have the agent read the docs from the web. Anything in context outranks nothing-in-parameters.

_Usage:_

"It keeps writing the v3 SDK syntax — we're on v5."

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."
```

## Contextual knowledge

Source: `dictionary/Contextual knowledge/en.md`

Target: `dictionary/Contextual knowledge/th.md`

```md
---
description: Facts the agent can read directly from the context right now. Counterpart to parametric knowledge.
---

Facts the [agent](./Agent.md) can read directly from the [context](./Context.md) right now — the user's task, files the agent has read in, [tool results](./Tool%20result.md), [AGENTS.md](./AGENTS.md.md) content loaded at [session](./Session.md) start. Counterpart to [parametric knowledge](./Parametric%20knowledge.md): parametric is _recalled_ from the parameters; contextual is _read_ from the [window](./Context%20window.md). [Hallucinations](./Hallucination.md) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

Of the two kinds of knowledge, only contextual knowledge is in your control. The parameters are frozen, so the only way to give the [model](./Model.md) knowledge it lacks — an internal SDK, a library released after the [knowledge cutoff](./Knowledge%20cutoff.md), a decision made yesterday — is to put it in the context. A lot of practical [AI](./AI.md) coding work reduces to this: getting the right facts in front of the model at the moment it needs them.

When contextual and parametric knowledge conflict, the contextual usually wins. Paste the current API docs and the model follows them rather than its stale memory of the old API — though the old version can still bleed through, especially deep into a long session. If the agent keeps reverting to an outdated pattern despite the docs being loaded, that's parametric knowledge leaking past the contextual; restating the correction or moving it closer to the work helps.

Unlike parametric knowledge, contextual knowledge costs something to use. Everything loaded into the window spends [tokens](./Token.md) and competes for the model's [attention budget](./Attention%20budget.md), so loading more is not automatically better — the aim is the relevant facts in the window, not all the facts.

_Reach for this term_ only when contrasting with parametric knowledge; otherwise just say **context**.

_Avoid:_ "working memory" — contextual knowledge is what's in the window _now_; a [memory system](./Memory%20system.md) is what gets cross-session content into it. Different scales, don't conflate.

_Usage:_

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."
```

## Attention relationship

Source: `dictionary/Attention relationship/en.md`

Target: `dictionary/Attention relationship/th.md`

```md
---
description: The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these.
---

When predicting each [token](./Token.md), the [model](./Model.md) factors in every other token in the [context](./Context.md) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

The pairings are where the model's apparent understanding lives. When it resolves a pronoun, it's because the attention relationship between "her" and "Sarah" is strong. When it calls a function with the right arguments, the relationship between the call site and the definition it read earlier is doing the work. None of this is looked up — it's computed fresh on every [model provider request](./Model%20provider%20request.md), for every pair.

The N² figure is worth sitting with, because it grows faster than intuition suggests:

| Context size   | Pairings (~N²) |
| -------------- | -------------- |
| 1,000 tokens   | ~1 million     |
| 10,000 tokens  | ~100 million   |
| 100,000 tokens | ~10 billion    |

Each pairing is also computed more than once. Models have multiple attention heads — exact counts for frontier models are unpublished, but fifty to a hundred is a reasonable guess — and each head computes its own version of every relationship. So every pairing in the table above is duplicated across every head. That's a lot of pairings.

Only a small number of these relationships matter for any given task. The pairing between your instruction and the code it governs is one of a handful that count; almost everything else in the pool is noise. And the two grow at different rates: the relationships that matter stay roughly constant, while the total pool grows quadratically with context size. At 1,000 tokens, the pairing you care about is one in a million; at 100,000 tokens, it's one in ten billion. This is the arithmetic underneath the [attention budget](./Attention%20budget.md), and [attention degradation](./Attention%20degradation.md) is what it feels like when the relationships that matter get too thin a share.

_Usage:_

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](./Smart%20zone.md)."

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."
```

## Attention budget

Source: `dictionary/Attention budget/en.md`

Target: `dictionary/Attention budget/th.md`

```md
---
description: Each token has a finite amount of influence to distribute across the rest of the context. Per-token, doesn't grow when context does.
---

Each [token](./Token.md) has a finite amount of influence to distribute across the rest of the [context](./Context.md). Heavy influence on [one relationship](./Attention%20relationship.md) leaves less for others. The budget is per-token and doesn't grow when the context does, which is why long [sessions](./Session.md) dilute.

Think of it as signal and noise. Your instruction is a signal at fixed volume; every other token in the [context window](./Context%20window.md) is competing sound. The instruction never gets quieter — it's still there, character for character — but as the context grows, the room gets louder around it, and the signal-to-noise ratio drops. An instruction that was the loudest thing at 10k tokens of context is background hum at 150k. This is the mechanism behind [attention degradation](./Attention%20degradation.md): the model doesn't forget; the signal gets lost in the noise.

The symptom reads as disobedience — the agent agreed to a constraint early on and then drifts from it, and re-pasting the constraint helps only briefly. The cause isn't the instruction; it's everything else in the window competing with it.

What you can control is what goes into the context. Content that doesn't serve the task isn't neutral — it's noise over everything that does. Keep the window small, [clear](./Clearing.md) when the accumulated context stops paying for itself, and restate the constraints that matter instead of trusting their early mention to hold.

_Usage:_

"Why does it keep ignoring the schema I pasted at the top?"

"We're well into the [dumb zone](./Smart%20zone.md) — every token's attention budget is fixed, but the context kept growing. The signal on the schema is now competing with thousands of newer tokens."
```
