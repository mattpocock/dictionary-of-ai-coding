Transferring [agent](./Agent.md) [context](./Context.md) from one [session](./Session.md) to another, with no return path. The carry mechanism varies — a written [handoff artifact](./Handoff%20artifact.md), an in-memory summary ([compaction](./Compaction.md)), and others. Distinct from [clearing](./Clearing.md) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](./AFK.md) run, fanning out to parallel sessions, or freeing up [context window](./Context%20window.md) room.

*Usage:*

"Planning session is getting heavy — should I just keep going?"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."
