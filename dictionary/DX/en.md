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
