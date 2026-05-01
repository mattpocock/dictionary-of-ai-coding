A system that attempts to make an [agent](./Agent.md) [stateful](./Stateful.md) across [sessions](./Session.md). Persists information into the [environment](./Environment.md) during a session and reloads it into the [context window](./Context%20window.md) at the start of future ones, so the agent carries continuity beyond the user [clearing](./Clearing.md) the session.

*Usage:*

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write the stack to disk on the first turn, reload it at session start. The model itself is stateless; the memory layer fakes continuity."
