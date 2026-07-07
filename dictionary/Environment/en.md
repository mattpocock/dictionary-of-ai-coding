---
description: The world the agent acts on — anything outside the harness that the agent perceives via tool results and changes via tool calls.
---

The world the [agent](./Agent.md) acts on — anything outside the [harness](./Harness.md) that the agent perceives through [tool results](./Tool%20result.md) and changes through [tool calls](./Tool%20call.md). The harness _runs_ the agent; the environment is what the agent _works in_. A file like [`AGENTS.md`](./AGENTS.md.md) lives in the environment; the harness is what loads it into the [context window](./Context%20window.md). A [filesystem](./Filesystem.md) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

The agent only sees the environment when it looks. Everything it knows about the environment arrived through a tool result, so its picture is a collection of snapshots, each accurate at the moment it was taken. If a file changes after the agent read it — you edit it by hand, a build step regenerates it — the agent keeps reasoning from the stale copy until something prompts a re-read. An agent confidently describing a file that no longer looks like that is usually this: the environment moved, the snapshot didn't.

The environment is also the layer that persists — the only one that is always [stateful](./Stateful.md). A [session](./Session.md)'s context is gone when the session ends, but files written to the environment remain for the next session to read — which is what [memory systems](./Memory%20system.md), [handoff artifacts](./Handoff%20artifact.md), and `AGENTS.md` rely on. Anything an agent should still know tomorrow has to end up in the environment.

You decide how big the environment is. A [sandbox](./Sandbox.md) shrinks it, limiting what the agent can reach; adding a [tool](./Tool.md) extends it, bringing a database or an API into reach. What's inside the boundary is what the agent can perceive and change; everything outside it doesn't exist for the agent. How well the environment is set up to support the agent's work is the codebase's [AX](./AX.md).

_Avoid:_ using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

_Usage:_

"The agent can't see the staging DB schema."

"Wire it into the environment — give it a `psql` tool scoped to read-only on staging. The harness is fine, it just has nothing to act on."
