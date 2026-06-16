---
description: The layer of an agent above the harness that specifies who it is — values, persistent memory, and what about itself it cannot change.
---

The layer of an [agent](./Agent.md) above the [harness](./Harness.md) that specifies who it is over time — its values, its accumulated [memory](./Memory%20system.md), and what about itself it is not authorized to change without external review. Distinct from harness configuration, which governs what the agent does on this turn; the identity layer governs who the agent is across sessions.

Most production agent systems do not have one. Their persistence story is a long-lived [session](./Session.md), an [AGENTS.md](./AGENTS.md.md) loaded each turn, and whatever the harness chooses to carry across [handoff](./Handoff.md). Nothing in that stack distinguishes between facts the agent can revise and facts the agent must not. A self-improvement loop that updates project instructions or vault rules from past failures touches the same surface that holds whatever the agent considers its disposition. Without an identity layer, there is no such distinction to make.

The identity layer becomes load-bearing when an agent is intended for sustained collaboration: shared work over months, accumulated context across hundreds of conversations, progressively more sensitive scope. For task-shaped agents that ship code and exit, it is overhead. For agents that are someone, it is the part that makes "the same agent" mean anything across time.

Three pieces are usually present where the layer exists at all: a values document the agent is committed to (often something like SOUL.md), a [memory](./Memory%20system.md) substrate that survives compaction and clearing, and an enforcement mechanism that distinguishes editable surface from protected surface. Without the third piece, the first two are advisory.

_Avoid:_ "[memory system](./Memory%20system.md)" — a memory system reloads state at session start; the identity layer specifies what about that state cannot change without authorization.

_Usage:_

"The agent rewrote its own system prompt during a session-mining cycle. Is that fine?"

"Depends on what it rewrote. If your stack has an identity layer, those parts are protected and the rewrite gets caught at the gate. If it doesn't, the agent's disposition just drifted and you won't see it for a few cycles."
