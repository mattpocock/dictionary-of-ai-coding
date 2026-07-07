# batch-07-02-patterns-of-work

Batch 14 of 14.

Curriculum section: Section 7 — Patterns of Work

Approximate English words: 1175

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
| Grilling    | `dictionary/Grilling/en.md`    | `dictionary/Grilling/th.md`    |   217 |
| Prototyping | `dictionary/Prototyping/en.md` | `dictionary/Prototyping/th.md` |   300 |
| DX          | `dictionary/DX/en.md`          | `dictionary/DX/th.md`          |   342 |
| AX          | `dictionary/AX/en.md`          | `dictionary/AX/th.md`          |   316 |

## Raw English

## Grilling

Source: `dictionary/Grilling/en.md`

Target: `dictionary/Grilling/th.md`

```md
---
description: "A technique for developing a design concept: the agent interviews the user Socratically, one decision at a time."
---

A technique for developing a [design concept](./Design%20concept.md) with an [agent](./Agent.md): the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each. Slows the rush to a finished plan — no [handoff artifact](./Handoff%20artifact.md) is written until the concept stabilises.

The technique exists because agents fill gaps silently. Asked to write a [spec](./Spec.md) from a two-line prompt, the agent doesn't stop at the decisions you haven't made — it picks defaults and writes them in. The result looks complete, and the guesses are indistinguishable from the choices, so you discover them late: at review, or when the built feature handles an edge case in a way you never chose. Grilling inverts this — instead of guessing, the agent has to ask.

It's a [human-in-the-loop](./Human-in-the-loop.md) technique: your answers are the input. When a question can't be answered in conversation — you'd have to see the thing — switch to [prototyping](./Prototyping.md).

_Usage:_

"It went straight to writing the spec and got the cancellation logic wrong."

"Grill it first — make it ask you about partial cancels, refunds, and timing before it commits anything to the doc. Cheaper to resolve in conversation than in code."
```

## Prototyping

Source: `dictionary/Prototyping/en.md`

Target: `dictionary/Prototyping/th.md`

```md
---
description: Having the agent build a quick, rough version when conversation is too low-fidelity and you need a real artifact to talk about.
---

Having the [agent](./Agent.md) build a quick, rough version of something, for when conversation is too low-fidelity and you need a real artifact to talk about.

[Grilling](./Grilling.md) resolves design decisions in conversation. Conversation is cheap, but it's low-fidelity: some questions can't be answered in words — how an interaction feels, whether an API shape is ergonomic in real calling code, whether the layout works at real data sizes. The interview hits a question and your honest answer is "I don't know, I'd have to see it." Past that point the discussion circles. Instead, have the agent build the thing, look at it, and come back to the conversation with an answer.

Agents lower the cost of building, which is what makes this practical. A rough version that used to take a day to mock up now takes minutes, so it's worth doing routinely. It's a [human-in-the-loop](./Human-in-the-loop.md) technique: the prototype is there for you to react to.

You usually don't stop at one look. Iterate with the prototype — react, ask for a change, react again — so each round resolves another decision against the real artifact, at a higher fidelity than conversation allows.

A prototype doesn't have to be all-scrappy. You can build the pieces you're actually evaluating to production quality, so when the decision lands, the component or API you reacted to can transfer into the real codebase. This makes prototyping essential material for the [spec](./Spec.md) to reference.

_Usage:_

"We've spent half an hour arguing about whether the wizard should be one page or three steps."

"Words won't settle it — have the agent prototype both. We'll click through them and know in five minutes."
```

## DX

Source: `dictionary/DX/en.md`

Target: `dictionary/DX/th.md`

```md
---
description: "Developer experience: how easy a codebase and its toolchain make it for humans to do good work — docs, feedback speed, errors."
aliases:
  - Developer experience
---

Developer experience — how easy a codebase and its toolchain make it for humans to do good work. Good DX is fast feedback, clear error messages, documentation that answers the question you actually have, and setup that works on the first try. The term long predates AI coding; it's in this dictionary mainly as the contrast for [AX](./AX.md).

DX is the interaction between the human and the codebase — nothing more. The main difference between the two audiences is that humans are [stateful](./Stateful.md) and agents are [stateless](./Stateless.md). A human learns the codebase once and carries that knowledge into every day after, which is why poor DX is survivable: they route around slow CI by batching their pushes, around missing docs by asking in Slack once, around confusing structure by remembering where things live. The workarounds accumulate, and a team ends up productive in a codebase that fights them.

[Agents](./Agent.md) face the same codebase with none of that accumulation. Stateless across [sessions](./Session.md), an agent re-learns the codebase from scratch every time — it benefits from the fast test suite and the clear error messages, but anything it figured out yesterday is gone unless it was written into the [environment](./Environment.md), which the agent only perceives through [tool results](./Tool%20result.md). That's the gap AX names: the parts of DX that survive when the developer is an agent, plus concerns humans don't have, like keeping the [context window](./Context%20window.md) free.

The overlap means DX investment often improves AX for free — strict types, fast tests, and predictable structure help both. The divergence means it doesn't always: a beautiful onboarding doc helps a human for a week and an agent not at all unless it's reachable from [AGENTS.md](./AGENTS.md.md).

_Usage:_

"Our DX is fine — new hires are productive in a week."

"Productive because someone sits with them for that week. The agent doesn't get that week; check the AX separately."
```

## AX

Source: `dictionary/AX/en.md`

Target: `dictionary/AX/th.md`

```md
---
description: "Agent experience: how well the environment is set up for an agent to do good work — checks, architecture, and free context."
aliases:
  - Agent experience
---

Agent experience — how well the [environment](./Environment.md) is set up for an [agent](./Agent.md) to do good work in a codebase. The agent-facing counterpart to [DX](./DX.md). When the same agent performs well in one repo and badly in another — same [model](./Model.md), same [harness](./Harness.md) — the difference is usually AX. The instinct is to blame the model or rewrite the prompt; the fix is more often in the repo.

Good AX has three main dimensions:

| Dimension        | What good AX looks like                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated checks | Fast, deterministic [automated checks](./Automated%20check.md) — types, tests, lints — that the agent can self-correct from without a human                                                                                                          |
| Architecture     | A codebase the agent can navigate without reading everything: predictable structure, a lot of behaviour behind small interfaces, names that say what things do                                                                                       |
| Free context     | [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), and [tools](./Tool.md) kept lean, so most of the [context window](./Context%20window.md) is available for the task and the agent stays in the [smart zone](./Smart%20zone.md) instead of drowning |

AX and DX overlap — good checks and clean architecture help both audiences — but they diverge. Humans tolerate tribal knowledge, slow CI, and "ask Sarah about the billing module"; agents can't. Agents don't benefit from IDE tooltips or pretty dashboards; they need failures as text in a [tool result](./Tool%20result.md). A codebase can have good DX and poor AX.

_Avoid:_ treating AX as a synonym for DX — the audiences need different investments.

_Usage:_

"The agent writes great code in the API repo and garbage in the frontend."

"The API repo has strict types and a fast test suite; the frontend has neither and forty always-loaded skills. That's an AX gap, not a model problem."
```
