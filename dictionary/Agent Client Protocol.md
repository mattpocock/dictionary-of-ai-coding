---
description: A protocol standardizing how a code editor talks to a coding agent backend, so editors and agents can mix and match without custom integration.
---

**Agent Client Protocol.** A protocol standardizing communication between a code editor or IDE and the [coding agent](./Agent.md) running behind it, so the editor doesn't need a bespoke integration for every agent it wants to support, and the agent doesn't need a different API for every editor it wants to reach. Created by Zed. It reuses parts of [MCP](./MCP.md)'s message shapes where the two overlap, and adds types specific to coding work, such as diff visualization.

Without a shared protocol, every editor-agent pairing is its own integration. Adding a second agent to an editor means rebuilding the plumbing that already existed for the first one, and an agent that works well in one editor often only exists there — you end up choosing the editor because that's where the agent you want happens to live, not because the editor suits you better. The protocol turns each side into an implementation of one interface instead of a pair written for each other, the same relationship [Model provider](./Model%20provider.md)-agnostic harnesses have to models: swapping one side doesn't require rewriting the other.

| Deployment   | Transport                                     | Typical case                                    |
| ------------ | --------------------------------------------- | ----------------------------------------------- |
| Local agent  | JSON-RPC over stdio, as an editor sub-process | A CLI coding agent the editor runs directly     |
| Remote agent | HTTP or WebSocket (still evolving)            | A cloud-hosted agent the editor connects out to |

What flows over that connection is the same material a [harness](./Harness.md) already manages internally — [tool calls](./Tool%20call.md), [permission requests](./Permission%20request.md), streamed output — just exposed in a shape any conforming editor can render, instead of being wired to one editor's UI. An editor that speaks the protocol shows approvals and diffs consistently no matter which agent is behind the session.

_Avoid:_ confusing this with the [Agent Control Protocol](./Agent%20Control%20Protocol.md) — same acronym, unrelated protocols. That one is a small draft for an agent operating an arbitrary application's UI; this one is what's used across the coding-agent ecosystem for editor-agent communication.

_Usage:_

"We want to try a different coding agent, but our editor's assistant integration only talks to the one it shipped with."

"Check whether both sides speak ACP. If the editor and the agent both implement it, swapping is a config change, not a rewrite of the integration."
