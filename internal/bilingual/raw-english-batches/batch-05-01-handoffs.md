# batch-05-01-handoffs

Batch 10 of 14.

Curriculum section: Section 5 — Handoffs

Approximate English words: 2080

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term             | English source                      | Thai target                         | Words |
| ---------------- | ----------------------------------- | ----------------------------------- | ----: |
| Clearing         | `dictionary/Clearing/en.md`         | `dictionary/Clearing/th.md`         |   258 |
| Handoff          | `dictionary/Handoff/en.md`          | `dictionary/Handoff/th.md`          |   277 |
| Primary source   | `dictionary/Primary source/en.md`   | `dictionary/Primary source/th.md`   |   290 |
| Secondary source | `dictionary/Secondary source/en.md` | `dictionary/Secondary source/th.md` |   371 |
| Handoff artifact | `dictionary/Handoff artifact/en.md` | `dictionary/Handoff artifact/th.md` |   339 |
| Spec             | `dictionary/Spec/en.md`             | `dictionary/Spec/th.md`             |   290 |
| Ticket           | `dictionary/Ticket/en.md`           | `dictionary/Ticket/th.md`           |   255 |

## Raw English

## Clearing

Source: `dictionary/Clearing/en.md`

Target: `dictionary/Clearing/th.md`

```md
---
description: Ending the current session and starting a fresh one. The next message begins with an empty session and an empty context window.
---

Ending the current [session](./Session.md) and starting a fresh one. The next message begins with an empty session and an empty [context window](./Context%20window.md). Usually user-driven.

Clearing is the cure for a polluted context. A session accumulates everything: failed attempts, wrong turns, stale [tool results](./Tool%20result.md), abandoned plans. The [model](./Model.md) re-reads all of it on every [turn](./Turn.md), and bad history drags on new work. Deep into a long session the [agent](./Agent.md) gets vaguer and less obedient — instructions you gave clearly get ignored, quality slips, and prodding it to do better doesn't help, because the noise it's wading through is still in its [context](./Context.md). Clearing removes the noise.

Clearing doesn't erase the conversation. Most [harnesses](./Harness.md) keep session history on your computer, so the transcript is still there to read or resume. What's gone is the agent's working state: the model is [stateless](./Stateless.md), so the new session knows nothing the old one knew. If the session holds decisions or progress the next one will need, have the agent write a [handoff artifact](./Handoff%20artifact.md) first, then start the new session by pointing at it.

Compare [compaction](./Compaction.md), which summarises the session into the new context instead of starting empty. Clearing is the blunter tool: nothing carries over, including the junk.

_Usage:_

"It's stuck looping on the failing test."

"Just clear it — start a fresh session with the plan doc and the test file. No point fighting the existing context."
```

## Handoff

Source: `dictionary/Handoff/en.md`

Target: `dictionary/Handoff/th.md`

```md
---
description: Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others.
---

Transferring [agent](./Agent.md) [context](./Context.md) from one [session](./Session.md) to another. The carry mechanism varies — a written [handoff artifact](./Handoff%20artifact.md), an in-memory summary ([compaction](./Compaction.md)), and others. Distinct from [clearing](./Clearing.md) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](./AFK.md) run, fanning out to parallel sessions, or freeing up [context window](./Context%20window.md) room.

The receiving session starts with zero context — the [model](./Model.md) is [stateless](./Stateless.md), and nothing from the old session is visible to the new one. Whatever the next session needs has to be carried explicitly; everything else is gone. "No return path" is the constraint that shapes the carry: the new session can't ask the old one what it meant, so the carried material has to stand on its own.

| Mechanism        | Form                                        | Properties                                                                               |
| ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Handoff artifact | File in the [environment](./Environment.md) | You can read and correct it before anything depends on it; reusable across many sessions |
| Compaction       | Summary in the context window               | Automatic and cheap; harder to inspect; feeds one successor                              |

The visible failure of a bad handoff is relitigation: the new session re-opens decisions the old one had settled, because the carry recorded what was decided but not why. Judge a handoff by what a session with zero context could do with it.

_Usage:_

"Planning session is getting heavy — should I just keep going?"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."
```

## Primary source

Source: `dictionary/Primary source/en.md`

Target: `dictionary/Primary source/th.md`

```md
---
description: The thing itself — code, transcripts, raw data. Complete and authoritative, but expensive to load into context.
---

A source of truth in its original form — the code, the conversation transcript, the raw log, the actual API response. Not an account of the thing; the thing. Counterpart to [secondary source](./Secondary%20source.md).

If you want to know what your codebase does, the code is the primary source. The docs, the architecture diagram, and the README are all descriptions of it — accurate when written, on their own schedule ever since. When an [agent](./Agent.md) confidently asserts something wrong about your project, the question to ask is which source it was working from: an agent that read a doc inherits the doc's staleness; an agent that read the code is reading the current truth.

The cost is what keeps primary sources from being the default. Loading one into the [context window](./Context%20window.md) is expensive — the full file, the full transcript, every [token](./Token.md) billed as [input](./Input%20tokens.md) and competing for [attention budget](./Attention%20budget.md). What you get for the cost is completeness: nothing has been pre-filtered by someone else's judgement about what mattered. A summary written last month can't contain the detail that turned out to matter today; the primary source still does.

Reach for the primary source when precision matters — the exact signature, the actual error, the line that throws. Much of managing [context](./Context.md) is deciding when to pay for the primary source and when a secondary source is good enough.

_Usage:_

"The agent says the retry logic backs off exponentially, but I'm watching it hammer the endpoint."

"It read that out of the design doc. Point it at the actual retry module — work from the primary source when the behaviour matters."
```

## Secondary source

Source: `dictionary/Secondary source/en.md`

Target: `dictionary/Secondary source/th.md`

```md
---
description: An account of a primary source, one step removed — summaries, docs, compaction summaries. Cheap to load, lossy by construction.
---

An account of a [primary source](./Primary%20source.md), one step removed — documentation describing code, a summary describing a transcript, a report describing search results. Cheaper to load into the [context window](./Context%20window.md) than the source it describes, and lossy by construction: whoever wrote it decided what mattered, and whatever they dropped is invisible to a reader who only has the summary.

A lot of [context](./Context.md) engineering is the manufacture of secondary sources. [Compaction](./Compaction.md) turns the [session](./Session.md) history into a summary that seeds the next session. A [subagent](./Subagent.md) burns its own context on a noisy search and returns a short report. A [handoff artifact](./Handoff%20artifact.md) condenses a session's decisions into a document the next session reads. [Memory systems](./Memory%20system.md) distil what a session learned into notes. Each makes the same trade: fidelity for headroom.

Secondary sources fail in two ways. They're lossy — the compaction summary that lost the schema decision, the report that didn't mention the edge case. And they drift — the primary source changes and the account doesn't follow, so docs describe last quarter's architecture with this quarter's confidence. When an [agent](./Agent.md) acts on a secondary source that has failed either way, it works confidently from wrong information; the fix is sending it back to the primary source.

Neither failure makes secondary sources a mistake. The context window is finite, and primary sources are expensive; without summaries, reports, and handoff documents, nothing large fits. The skill is knowing which details can survive the loss — and verifying against the primary source when one can't. A well-made secondary source carries a [context pointer](./Context%20pointer.md) back to its original — the summary that names the transcript it came from, the doc that names the file it describes — so when the account isn't enough, the reader can follow the pointer rather than work from the loss.

_Usage:_

"The handoff doc says auth is done, but the new session keeps finding broken token refresh."

"The doc's a secondary source — the last session wrote down what it believed, not what's true. Have the new session run the auth tests and trust the primary source."
```

## Handoff artifact

Source: `dictionary/Handoff artifact/en.md`

Target: `dictionary/Handoff artifact/th.md`

```md
---
description: A document used as the carry mechanism for a handoff — written by one session to be read by another.
---

A document used as the carry mechanism for a [handoff](./Handoff.md) — written to the [environment](./Environment.md) by one [session](./Session.md) to be read by another. [Specs](./Spec.md), [tickets](./Ticket.md), and plan docs are all handoff artifacts.

The reason to write one: the [model](./Model.md) is [stateless](./Stateless.md), so nothing in a session survives [clearing](./Clearing.md) it. Decisions, constraints, half-finished plans — all gone with the [context](./Context.md) that held them. The environment persists. Writing the important state into a file moves it somewhere the next session can read it back from.

The artifact is a [secondary source](./Secondary%20source.md) — an account of the session's work, not the work itself. That's what makes it small enough to brief a fresh session, and also why it can mislead one: it records what the writing session believed, and anything it left out or got wrong is invisible to the reader. Where a claim matters, the next session should verify it against the [primary source](./Primary%20source.md) — the code, the tests — rather than inherit it.

A good artifact is written to be read into a session that has zero context. Concrete file paths rather than "the file we discussed". What was decided and why, so the next session doesn't relitigate it. What's done and what's left. It helps to tell the writing session where the artifact is headed: "write a handoff doc for a fresh session that knows nothing about this work".

The alternative carry mechanism is [compaction](./Compaction.md), which summarises in-memory. The artifact has two advantages: it lives on disk where you can read and correct it before anything depends on it, and it can be reused — the same spec can brief five parallel sessions.

_Usage:_

"How do I split this between the planning [agent](./Agent.md) and the implementing one?"

"Have the planner write a handoff artifact — file paths, decisions, constraints. The implementer's session opens with a pointer to the artifact and works from it as its brief."
```

## Spec

Source: `dictionary/Spec/en.md`

Target: `dictionary/Spec/th.md`

```md
---
description: A handoff artifact describing a multi-session piece of work — what's being built, not how each session does its share. Made of tickets.
---

A [handoff artifact](./Handoff%20artifact.md) describing a multi-[session](./Session.md) piece of work — what's being built, not how each session does its share. Mutates as work progresses. Made of [tickets](./Ticket.md).

The spec exists because sessions are disposable and big work isn't. Anything that takes more than one [context window](./Context%20window.md) of effort needs a home outside the [context](./Context.md) — somewhere in the agent's [environment](./Environment.md) that survives [clearing](./Clearing.md), whether that's a file in the repo, a GitHub issue, or an issue tracker the agent can reach. The spec is that home: the goal, the constraints, the decisions made so far, and the list of tickets with their status. Any fresh session can read it and know where the work stands without inheriting the previous session's accumulated noise.

Specs come in recognisable styles, mostly inherited from how teams already write things down. A _product requirements document_ (PRD) leans toward the user-facing what and why — features, behaviour, acceptance criteria. A _design doc_ or _RFC_ leans technical — the chosen approach, the alternatives rejected, the trade-offs. At the small end, a plain `plan.md` with a checklist of tickets does the same job for a multi-session feature. The style matters less than the role: for the [agent](./Agent.md), each of these is the same thing — the durable statement of intent it reads at the start of every session.

_Usage:_

"Should this all be one session?"

"No, write it up as a spec — break it into tickets, run each one in its own session. Trying to do the whole thing in a single context will hit the [dumb zone](./Smart%20zone.md) before you're halfway."
```

## Ticket

Source: `dictionary/Ticket/en.md`

Target: `dictionary/Ticket/th.md`

```md
---
description: A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets.
---

A [handoff artifact](./Handoff%20artifact.md) scoping one [session](./Session.md) of work. Stands alone, or hangs off a [spec](./Spec.md) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

The defining constraint is the size: one session. A ticket should be completable before the session drifts out of the [smart zone](./Smart%20zone.md) — and that constraint is testable. If sessions on your tickets routinely degrade before the work is done, the tickets are too big; split them. If each session spends most of its [context](./Context.md) on setup before doing five minutes of work, they're too small; merge them.

A good ticket is written for a reader with no other context. The goal, the acceptance criteria, and [context pointers](./Context%20pointer.md) to the relevant files and decisions — enough that the session can start working without re-deriving what the last one knew.

The dependency graph is also what unlocks parallelism. Independent tickets — the leaves of the graph — can each run in their own session at the same time. This is an effective way of running multiple agents at once.

_Usage:_

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."
```
