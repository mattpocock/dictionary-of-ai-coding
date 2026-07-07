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
