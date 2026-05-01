---
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---
A working pattern where the user kicks off a [session](./Session.md) and leaves the [agent](./Agent.md) to run unattended. The throughput multiplier of AI coding — many AFK sessions can run in parallel while you sleep, eat, or work on something else. Usually requires a permissive [permission mode](./Permission%20mode.md) plus [sandboxing](./Sandbox.md) to be safe.

*Avoid:* "background agent" — centers the machine ("running in the background") rather than the human pattern ("user has walked away"). AFK is the load-bearing fact: the user isn't watching.

*Usage:* "I'm running this AFK — three sandboxed agents on the refactor, reviewing the PRs in the morning." "Bypass permissions?" "Yeah, read-only filesystem, no network."
