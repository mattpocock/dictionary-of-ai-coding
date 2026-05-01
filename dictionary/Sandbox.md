---
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---
An isolated [environment](./Environment.md) the [agent](./Agent.md) runs inside — a container, VM, ephemeral [filesystem](./Filesystem.md), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](./AFK.md) practical.

*Usage:*

"I want to let it run bypass-permissions overnight but I'm not ready for that."

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."
