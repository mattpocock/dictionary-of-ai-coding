# batch-02-01-sessions-context-windows-turns

Batch 4 of 14.

Curriculum section: Section 2 — Sessions, Context Windows & Turns

Approximate English words: 1942

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term           | English source                    | Thai target                       | Words |
| -------------- | --------------------------------- | --------------------------------- | ----: |
| Stateless      | `dictionary/Stateless/en.md`      | `dictionary/Stateless/th.md`      |   279 |
| Context        | `dictionary/Context/en.md`        | `dictionary/Context/th.md`        |   283 |
| Context window | `dictionary/Context window/en.md` | `dictionary/Context window/th.md` |   262 |
| Stateful       | `dictionary/Stateful/en.md`       | `dictionary/Stateful/th.md`       |   309 |
| Agent          | `dictionary/Agent/en.md`          | `dictionary/Agent/th.md`          |   242 |
| System prompt  | `dictionary/System prompt/en.md`  | `dictionary/System prompt/th.md`  |   283 |
| Session        | `dictionary/Session/en.md`        | `dictionary/Session/th.md`        |   284 |

## Raw English

## Stateless

Source: `dictionary/Stateless/en.md`

Target: `dictionary/Stateless/th.md`

```md
---
description: Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default.
---

Carries no information forward. The [model](./Model.md) is stateless across [model provider requests](./Model%20provider%20request.md) — each request resends the full [context window](./Context%20window.md), because the model has no way to see anything else. An [agent](./Agent.md) is stateless across [sessions](./Session.md) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](./Stateful.md).

The model itself is permanently stateless: its [parameters](./Parameters.md) are frozen after [training](./Training.md), and nothing you do at [inference](./Inference.md) changes them. The model doesn't learn from your corrections, doesn't remember being told the same thing yesterday, and isn't getting to know you — however much the conversation feels otherwise. The feeling of continuity within a session is manufactured by the [harness](./Harness.md), which keeps the transcript and re-sends it with every request. The model isn't remembering the conversation; it's re-reading it.

The practical consequence: if you want something remembered across sessions, you have to write it down somewhere the agent will read it back. That's what [AGENTS.md](./AGENTS.md.md) files, [memory systems](./Memory%20system.md), and [handoff artifacts](./Handoff%20artifact.md) are — files that get loaded into the [context](./Context.md) of future sessions, standing in for the memory the model doesn't have. When the agent keeps making a mistake you've corrected before, the question isn't why it didn't learn — it can't — but where that correction should be written down so every future session reads it.

_Usage:_

"Why does it forget the convention every time I [clear](./Clearing.md)?"

"The model's stateless — the new session starts empty. If you want it carried, write it to AGENTS.md or a memory file the harness loads at session start."
```

## Context

Source: `dictionary/Context/en.md`

Target: `dictionary/Context/th.md`

```md
---
description: The relevant information the agent has access to right now — what the agent knows that's pertinent to the task.
---

The relevant information the [agent](./Agent.md) has access to right now. The abstract noun — not the raw input the model sees (that's the [context window](./Context%20window.md)), not the running history (that's the [session](./Session.md)), but _what the agent knows that's pertinent to the task_. "Loading something into context" means making it part of this set; "context engineering" is the discipline of curating it.

The three terms separate cleanly:

| Term           | What it names                                                       |
| -------------- | ------------------------------------------------------------------- |
| Context        | The task-relevant information the agent currently has               |
| Context window | The literal [token](./Token.md) sequence the model sees per request |
| Session        | The running conversation the [harness](./Harness.md) stores         |

The separation matters because context is a measure of quality, not quantity. A context window can be nearly full and the context still poor — thousands of tokens of stale tool output, none of it about the task at hand. It can also be nearly empty and the context excellent: the one type definition the task turns on.

Most day-to-day failures trace back to context. When the agent invents an API, contradicts a decision, or guesses at a schema, the first question is what was in context when it did — usually the relevant fact was never loaded, or was buried under [attention degradation](./Attention%20degradation.md). The fix is curation: load what the task needs, keep out what it doesn't.

_Usage:_

"It keeps inventing fields that aren't in the type."

"The type file isn't in context — it's reading the call sites and guessing. Read the definition in first."
```

## Context window

Source: `dictionary/Context window/en.md`

Target: `dictionary/Context window/th.md`

```md
---
description: Everything the model sees on each model provider request. Finite, model-specific, the only surface through which the model perceives.
---

Everything the [model](./Model.md) sees on each [model provider request](./Model%20provider%20request.md). Finite, model-specific, and the _only_ surface through which the model perceives anything.

It's a single sequence of [tokens](./Token.md): the [system prompt](./System%20prompt.md), the conversation so far, every [tool result](./Tool%20result.md) the [harness](./Harness.md) has fed back in. If something is in that sequence, the model can use it; if it isn't, the model doesn't know it exists — not your codebase, not the file you edited yesterday, not the instruction you gave three sessions ago. Anything outside the window has to be brought in, usually via a [tool call](./Tool%20call.md), before it can affect anything.

Finite means it fills up. Every turn appends more — your messages, the model's responses, tool results — and a long [session](./Session.md) will eventually hit the limit, forcing [compaction](./Compaction.md) or [clearing](./Clearing.md). It also means everything in the window competes: each token you load is one less available for the rest, and content you didn't need still occupies the model's [attention](./Attention%20budget.md). The practical stance is to treat the window as a budget — load what the task needs, leave the rest out.

_Avoid:_ "memory" — the context window is working state and doesn't persist across sessions. [Memory](./Memory%20system.md) is a separate concept layered on top.

_Usage:_

"Can I just paste the whole monorepo into the prompt?"

"The context window's 200k tokens — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a tool call."
```

## Stateful

Source: `dictionary/Stateful/en.md`

Target: `dictionary/Stateful/th.md`

```md
---
description: Carries information forward. Sessions are stateful across turns; agents can be made stateful across sessions via a memory system.
---

Carries information forward. A [session](./Session.md) is stateful across [turns](./Turn.md) — [context](./Context.md) accumulates as the session runs, which is why long sessions drift into the [dumb zone](./Smart%20zone.md). An [agent](./Agent.md) can be made stateful across **sessions** by adding a [memory system](./Memory%20system.md) that persists information into the [environment](./Environment.md) and reloads it at the start of future sessions. The [model](./Model.md) is never stateful; any apparent continuity is the [harness](./Harness.md) re-feeding context. Counterpart to [stateless](./Stateless.md).

Where state lives at each layer:

| Layer       | Stateful?       | How                                                                                                                    |
| ----------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Model       | Never           | [Parameters](./Parameters.md) are frozen; it sees only what's in each request                                          |
| Session     | Across turns    | The harness appends every message and [tool result](./Tool%20result.md) to the context                                 |
| Harness     | Across sessions | Memory files, [AGENTS.md](./AGENTS.md.md), [handoff artifacts](./Handoff%20artifact.md) — written down, reloaded later |
| Environment | Always          | Files persist whether or not any session is running                                                                    |

Each layer's statefulness is built by re-reading something stored a layer below: the session feels continuous because the harness re-sends the message history to the stateless model, and the agent remembers across sessions because the harness re-loads files from the environment. No state is ever stored in the model itself.

State isn't always wanted. Everything carried forward influences what comes next, so a wrong assumption made early in a session is carried forward too. [Clearing](./Clearing.md) is the deliberate act of throwing session state away and starting from what's written down.

_Usage:_

"It remembered my preferences from yesterday — does that mean the model learned them?"

"No, the agent's stateful because the harness wrote them to a memory file and reloaded them at session start. The model itself saw nothing of yesterday."
```

## Agent

Source: `dictionary/Agent/en.md`

Target: `dictionary/Agent/th.md`

```md
---
description: A model harnessed with tools, a system prompt, and a context window, that takes turns with a user. The model in motion.
---

A [model](./Model.md) [harnessed](./Harness.md) with [tools](./Tool.md), a [system prompt](./System%20prompt.md), and a [context window](./Context%20window.md), that takes [turns](./Turn.md) with a user. _Claude Code is an agent. Cursor is an agent. Claude.ai is an agent._ An agent is what you actually talk to — it's the model in motion, configured for a purpose.

Unlike most terms in this dictionary, "agent" doesn't name a mechanical part. The model is a file of [parameters](./Parameters.md); the harness is software you can point at. The agent is neither — it's the unit you're speaking to. People anthropomorphize [AI](./AI.md) constantly, and the agent is the anthropomorphized unit: the thing you delegate to, the thing that reads your message and answers, the "it" in "it broke the build again". When you say the agent did something, you mean the model-plus-harness did it, but you're addressing the combination as a single actor.

The idea is older than this wave of AI. Software agents — programs you delegate a goal to, which act on your behalf — have been a concept for as long as AI has.

_Avoid:_ "the AI", "the bot" (too vague — they hide whether you mean the parameters or the harnessed thing).

_Usage:_

"Which agent are you using for the migration?"

"Claude Code locally, Cursor for the UI work — same model underneath, different harnesses."
```

## System prompt

Source: `dictionary/System prompt/en.md`

Target: `dictionary/System prompt/th.md`

```md
---
description: The instructions the harness prepends to every model provider request — the agent's standing brief. Usually stable across a session.
---

The instructions the [harness](./Harness.md) prepends to every [model provider request](./Model%20provider%20request.md) — the [agent](./Agent.md)'s standing brief: who it is, how to behave, which [tools](./Tool.md) it can call, what conventions to follow. Usually stable across a [session](./Session.md).

The system prompt is written by the harness vendor, not by you, and in coding harnesses it's big — often tens of thousands of [tokens](./Token.md) of behavioural rules, tool descriptions, and edge-case handling, all paid as [input tokens](./Input%20tokens.md) on every [turn](./Turn.md). Your own standing instructions ride along with it: files like [AGENTS.md](./AGENTS.md.md) are loaded next to the system prompt at the start of the session, so the [model](./Model.md) reads the vendor's brief and yours together before it ever sees your message.

Because it's identical on every request, it forms the start of the [prefix cache](./Prefix%20cache.md) — which is part of why harnesses keep it fixed for a whole session rather than editing it as they go.

Models are trained to prioritise the system prompt over user messages. So when an agent insists on a convention you never asked for, or formats output in a way you can't shake, it's usually obeying its system prompt — and your message is losing the argument. Some harnesses are customisable: they give you full access to the system prompt, so you can read what the agent is actually being told and change it.

_Usage:_

"Two harnesses, same model, totally different behavior on the same prompt."

"Different system prompts. One's tuned for terse code edits, the other for explaining — that's where the divergence lives, before your message even arrives."
```

## Session

Source: `dictionary/Session/en.md`

Target: `dictionary/Session/th.md`

```md
---
description: One bounded run of interaction with an agent. Starts empty, accumulates, ends when cleared, closed, or compacted into a fresh session.
---

One bounded run of interaction with an [agent](./Agent.md). Starts empty, accumulates messages, [tool results](./Tool%20result.md), and files read, and ends when [cleared](./Clearing.md), closed, or [compacted](./Compaction.md) into a fresh session. The session is what _fills_ the [context window](./Context%20window.md): if the context window is the box, the session is the stuff slowly filling it up. Work too large for a single context window must be split across sessions.

The session's message history is the agent's working memory. The [model](./Model.md) is [stateless](./Stateless.md), so everything it appears to remember — what you asked for, what the tests said, what it decided three turns ago — is in the message history, re-sent with every [model provider request](./Model%20provider%20request.md). Whatever isn't in the session doesn't exist for the agent.

That memory ends with the session. A new session starts from nothing: the agent that knew your codebase well at the end of yesterday's session knows none of it this morning. What survives is the [filesystem](./Filesystem.md) — files written during one session can be read by the next, which is what [handoffs](./Handoff.md), [memory systems](./Memory%20system.md), and [AGENTS.md](./AGENTS.md.md) rely on.

You choose where a session ends. Everything in a session influences every later [turn](./Turn.md), so unrelated tasks done in one session leave residue that colours the next answer. One task per session keeps the context relevant; finishing a task is a natural point to clear.

_Usage:_

"How long can one session run before it falls apart?"

"Depends on the work — a focused refactor stays sharp longer than open-ended research. Once the session bloats, hand off or compact, don't push through."
```
