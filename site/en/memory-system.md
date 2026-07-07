---
title: "Memory system"
description: "A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start."
editLink: false
---

# Memory system

A system that attempts to make an [agent](/en/agent) [stateful](/en/stateful) across [sessions](/en/session). Persists information into the [environment](/en/environment) during a session and reloads it into the [context window](/en/context-window) at the start of future ones, so the agent carries continuity beyond the user [clearing](/en/clearing) the session.

A memory system has two halves. The write path: during a session, the agent records what it learned — a preference you stated, a fact about the project — as files in the environment. The read path: at session start, the [harness](/en/harness) loads those files, or an index of them, back into the context window. Many harnesses ship their own memory system — Claude Code's `/memory` is one — but you can also build one yourself: a directory of notes plus an instruction in [AGENTS.md](/en/agents-md) to consult it.

The same trade-offs as any always-loaded content apply. Memories accumulate, so most systems load a one-line index and leave the bodies behind [context pointers](/en/context-pointer) rather than inlining everything. And memories are [secondary sources](/en/secondary-source), so they drift: a fact recorded in March is loaded with equal confidence in June, after the project has moved on. A memory system needs pruning, the same way AGENTS.md does.

_Usage:_

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write what it learns to the [filesystem](/en/filesystem) on the first [turn](/en/turn), reload it at session start. The [model](/en/model) itself is [stateless](/en/stateless); the memory layer fakes continuity."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/memory-system" class="VPLink">Read in ไทย →</a>
</div>
