---
description: An isolated environment the agent runs inside — container, VM, or restricted shell. Limits the blast radius of agent actions.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

An isolated [environment](./Environment.md) the [agent](./Agent.md) runs inside — a container, VM, ephemeral [filesystem](./Filesystem.md), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](./AFK.md) practical.

The sandbox and the [permission mode](./Permission%20mode.md) solve the same problem from opposite ends. Permissions ask before an action runs; a sandbox limits what the action can reach if it does run. Permissions need you running [in the loop](./Human-in-the-loop.md) — every prompt is an interruption — and a session that asks constantly is barely autonomous. A sandbox spends infrastructure instead of attention: the stronger the isolation, the fewer questions need asking.

Isolation comes in grades:

| Grade            | What it is                                                 | What it contains                           |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Restricted shell | OS-level confinement around each command                   | Writes outside the project, network access |
| Container        | Fresh filesystem, no credentials mounted, discarded after  | Anything the agent does to its own machine |
| VM / cloud       | A separate machine entirely, often provided by the harness | Everything, including kernel-level escapes |

What no sandbox contains: actions that leave it legitimately. An agent with your git credentials can push; one with network access can call production APIs. Decide what crosses the boundary before deciding how thick to make it.

_Usage:_

"I want to let it run [bypass-permissions](./Agent%20mode.md) overnight but I'm not ready for that."

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."
