---
description: A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start.
---

A system that attempts to make an [agent](./Agent.md) [stateful](./Stateful.md) across [sessions](./Session.md). Persists information into the [environment](./Environment.md) during a session and reloads it into the [context window](./Context%20window.md) at the start of future ones, so the agent carries continuity beyond the user [clearing](./Clearing.md) the session.

A memory system has two halves. The write path: during a session, the agent records what it learned — a preference you stated, a fact about the project — as files in the environment. The read path: at session start, the [harness](./Harness.md) loads those files, or an index of them, back into the context window. Many harnesses ship their own memory system — Claude Code's `/memory` is one — but you can also build one yourself: a directory of notes plus an instruction in [AGENTS.md](./AGENTS.md.md) to consult it.

The same trade-offs as any always-loaded content apply. Memories accumulate, so most systems load a one-line index and leave the bodies behind [context pointers](./Context%20pointer.md) rather than inlining everything. And memories are [secondary sources](./Secondary%20source.md), so they drift: a fact recorded in March is loaded with equal confidence in June, after the project has moved on. A memory system needs pruning, the same way AGENTS.md does.

_Usage:_

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write what it learns to the [filesystem](./Filesystem.md) on the first [turn](./Turn.md), reload it at session start. The [model](./Model.md) itself is [stateless](./Stateless.md); the memory layer fakes continuity."
