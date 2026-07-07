# batch-06-01-memory-and-steering

Batch 12 of 14.

Curriculum section: Section 6 — Memory and Steering

Approximate English words: 1718

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
| Memory system          | `dictionary/Memory system/en.md`          | `dictionary/Memory system/th.md`          |   263 |
| AGENTS.md              | `dictionary/AGENTS.md/en.md`              | `dictionary/AGENTS.md/th.md`              |   304 |
| Progressive disclosure | `dictionary/Progressive disclosure/en.md` | `dictionary/Progressive disclosure/th.md` |   258 |
| Context pointer        | `dictionary/Context pointer/en.md`        | `dictionary/Context pointer/th.md`        |   365 |
| Skill                  | `dictionary/Skill/en.md`                  | `dictionary/Skill/th.md`                  |   275 |
| Subagent               | `dictionary/Subagent/en.md`               | `dictionary/Subagent/th.md`               |   253 |

## Raw English

## Memory system

Source: `dictionary/Memory system/en.md`

Target: `dictionary/Memory system/th.md`

```md
---
description: A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start.
---

A system that attempts to make an [agent](./Agent.md) [stateful](./Stateful.md) across [sessions](./Session.md). Persists information into the [environment](./Environment.md) during a session and reloads it into the [context window](./Context%20window.md) at the start of future ones, so the agent carries continuity beyond the user [clearing](./Clearing.md) the session.

A memory system has two halves. The write path: during a session, the agent records what it learned — a preference you stated, a fact about the project — as files in the environment. The read path: at session start, the [harness](./Harness.md) loads those files, or an index of them, back into the context window. Many harnesses ship their own memory system — Claude Code's `/memory` is one — but you can also build one yourself: a directory of notes plus an instruction in [AGENTS.md](./AGENTS.md.md) to consult it.

The same trade-offs as any always-loaded content apply. Memories accumulate, so most systems load a one-line index and leave the bodies behind [context pointers](./Context%20pointer.md) rather than inlining everything. And memories are [secondary sources](./Secondary%20source.md), so they drift: a fact recorded in March is loaded with equal confidence in June, after the project has moved on. A memory system needs pruning, the same way AGENTS.md does.

_Usage:_

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write what it learns to the [filesystem](./Filesystem.md) on the first [turn](./Turn.md), reload it at session start. The [model](./Model.md) itself is [stateless](./Stateless.md); the memory layer fakes continuity."
```

## AGENTS.md

Source: `dictionary/AGENTS.md/en.md`

Target: `dictionary/AGENTS.md/th.md`

```md
---
description: A file in the environment that the harness loads into the context window at session start — the project's standing brief to the agent.
---

A file in the [environment](./Environment.md) that the [harness](./Harness.md) loads into the [context window](./Context%20window.md) at [session](./Session.md) start — the project's standing brief to the [agent](./Agent.md). Cross-harness convention; some harnesses also have their own variant (Claude Code's is CLAUDE.md).

Because it loads automatically, it's one way to avoid repeating yourself across sessions. The [model](./Model.md) is [stateless](./Stateless.md) — a correction you give in one session is gone in the next, and you end up telling every fresh session that the project uses pnpm, that tests run with a particular flag, that a directory is generated and shouldn't be touched. When you've corrected the agent for the same thing twice, that correction is a candidate line for AGENTS.md.

Suitable content is whatever the agent can't derive from the code: build and test commands, conventions the codebase doesn't make obvious, hard constraints ("never edit the generated client"). Short and declarative — it's a brief, not documentation.

The trade-off is that everything in it is always loaded. Instructions accumulate, most of them irrelevant to any given task, and a long AGENTS.md both costs tokens and dilutes itself — the more instructions in context, the less reliably the model follows any one of them.

_Avoid:_ using AGENTS.md for content that should be [progressively disclosed](./Progressive%20disclosure.md) — anything in it pays a [token](./Token.md) cost every [turn](./Turn.md), in every session, whether or not that session needs it. A style guide can go behind a [skill](./Skill.md) or a [context pointer](./Context%20pointer.md) instead; keep AGENTS.md for the lines that apply everywhere.

_Usage:_

"Why is every session starting with 4k tokens already burned?"

"Check AGENTS.md — someone pasted the entire style guide in there instead of putting it behind a skill."
```

## Progressive disclosure

Source: `dictionary/Progressive disclosure/en.md`

Target: `dictionary/Progressive disclosure/th.md`

```md
---
description: Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design.
---

Loading only the [context](./Context.md) an [agent](./Agent.md) needs right now, with [context pointers](./Context%20pointer.md) to the rest. Borrowed from UI design, where it means showing users only the controls relevant to their current task and hiding the rest behind a click.

The technique exists because context is a cost twice over. Every [token](./Token.md) loaded up front is billed as [input tokens](./Input%20tokens.md) on every [turn](./Turn.md), and every token spends [attention budget](./Attention%20budget.md) whether the agent needs it or not. An [AGENTS.md](./AGENTS.md.md) stuffed with the full style guide, deployment runbook, and database conventions makes the agent worse at all of them — the instructions that matter for the current task are diluted by the ones that don't. The tell is an agent that ignores rules you know are in its context: they're in there, but buried.

Progressive disclosure inverts this. Keep the always-loaded layer small — a sentence per topic and a pointer to where the detail lives. The agent reads the style guide when it's writing a component, the deployment runbook when it's deploying, and neither when it's fixing a test. [Skills](./Skill.md) are the pattern built into the [harness](./Harness.md): a short description loaded every [session](./Session.md), the full instructions only when triggered.

_Usage:_

"Should I dump the entire style guide into AGENTS.md?"

"No — progressive disclosure. Reference the style guide as a skill the agent loads when it actually needs to write a component. AGENTS.md pays the token cost every turn."
```

## Context pointer

Source: `dictionary/Context pointer/en.md`

Target: `dictionary/Context pointer/th.md`

```md
---
description: A mention in one document that points to another, so the agent can pull it into context only when the task calls for it.
---

A mention in one document that points to another, so the [agent](./Agent.md) can pull it into the [context window](./Context%20window.md) only when the task calls for it. The unit [progressive disclosure](./Progressive%20disclosure.md) is built from.

The reason to use a pointer (instead of inlining the content) is cost. A pointer is one line in the context window. The document behind it might be thousands of [tokens](./Token.md), but those tokens cost nothing until the agent actually follows the pointer. Inline a 2,000-token runbook in [AGENTS.md](./AGENTS.md.md) and every [session](./Session.md) pays for it; replace it with "deploy process: see `internal/deploy.md`" and only the sessions that deploy ever load it. The agent follows the pointer with a [tool call](./Tool%20call.md) when the task matches.

A pointer needs two parts to work: a stable path, and enough description for the agent to know when following it is worth it. A bare path is a pointer the agent has no reason to follow; "see `internal/deploy.md`" with no hint of what's inside gets skipped by a session that needed it. Write the line so it matches how tasks present: "release, deploy, or rollback — read `internal/deploy.md` first".

Pointers are everywhere once you look: lines in AGENTS.md, [skill](./Skill.md) descriptions (the harness loads the description; the skill body waits behind it), filenames in a directory listing, links between docs.

A pointer can also tie a [secondary source](./Secondary%20source.md) back to the [primary source](./Primary%20source.md) it was derived from — the compaction summary that names the original transcript, the doc that names the source file it describes. This makes the secondary source's lossiness recoverable: when the summary turns out not to be enough, the agent follows the pointer and reads the original, instead of working from whatever the summary kept.

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

_Usage:_

"AGENTS.md is getting huge."

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into skills and leave a context pointer behind."
```

## Skill

Source: `dictionary/Skill/en.md`

Target: `dictionary/Skill/th.md`

```md
---
description: A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand.
---

A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](./Environment.md) until a [context pointer](./Context%20pointer.md) pulls it into the [context window](./Context%20window.md) for the task at hand. The unit of [progressive disclosure](./Progressive%20disclosure.md) in a [harness](./Harness.md).

Skills are an open standard, defined at [agentskills.io](https://agentskills.io) — originally developed by Anthropic and since adopted by most major harnesses, so a skill written once works across them. The format is a folder containing:

- A `SKILL.md` file — metadata (a name and description, at minimum) plus the instructions themselves
- Optionally, scripts the [agent](./Agent.md) can run
- Optionally, templates and reference material the instructions point to

Only the name and description sit in [context](./Context.md) by default. When the agent's task matches, it loads the rest. Until then, the skill takes up almost no room — a sentence or two of [tokens](./Token.md), however large its full instructions are.

This distinguishes skills from [AGENTS.md](./AGENTS.md.md), which is loaded into every [session](./Session.md) regardless of the task. A skill is read when a particular kind of work comes up — releasing, scaffolding a new service, writing a migration — and ignored the rest of the time.

_Avoid:_ "[tool](./Tool.md)" — a tool is what the agent _calls_; a skill is instructions it _reads_.

_Usage:_

"Where should I put the deploy runbook?"

"As a skill — the agent loads it only when the task involves deploys. In AGENTS.md it'd burn tokens on every [turn](./Turn.md) for something we use weekly."
```

## Subagent

Source: `dictionary/Subagent/en.md`

Target: `dictionary/Subagent/th.md`

```md
---
description: An agent spawned by another agent via a tool call. Runs in its own session, reports a single tool result. Cannot spawn further subagents.
---

An [agent](./Agent.md) spawned by another agent via a [tool call](./Tool%20call.md). Runs in its own [session](./Session.md) with its own [context window](./Context%20window.md), and reports a single [tool result](./Tool%20result.md) back. Distinct from a [handoff](./Handoff.md) — the parent specifically expects a return; a handoff has no return path. **Cannot spawn further subagents** — the tree is one level deep. Subagents exist to isolate [context](./Context.md), not to compose hierarchies.

The point is to keep noisy work out of the parent's context. A broad search or a long file-reading expedition produces pages of tool results, most of which matter only long enough to find the answer. Run inside the parent and all of it stays in the parent's context for the rest of the session. Run inside a subagent and the noise fills a disposable window instead — only the final report lands in the parent's context. The report is a [secondary source](./Secondary%20source.md): the parent gets the subagent's account of what it found, not the raw results, so anything the report leaves out is invisible to the parent.

Subagents also run concurrently — a parent can fan several out at once over independent pieces of work.

_Usage:_

"The grep results are blowing out my context."

"Spawn a subagent to do the search — it'll burn its own context window on the noise and report back the two file paths you actually need."
```
