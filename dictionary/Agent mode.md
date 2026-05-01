---
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---
A preset that shapes how the [agent](./Agent.md) operates at runtime — bundles a [permission mode](./Permission%20mode.md) with behavioral instructions injected into the [system prompt](./System%20prompt.md). Examples: a default that prompts on risky calls, a **plan mode** that blocks edits and steers the agent toward research, an **accept-edits** mode that auto-approves edits, a **bypass permissions** mode (colloquially **YOLO mode**) that auto-approves everything. Can flip [mid-session](./Session.md).

*Vendor terms:* Claude Code calls these "permission modes," Codex calls them "approval modes" — both predate behavioral bundling.

*Usage:*

"It keeps editing files when I just want a plan."

"Switch to plan mode — it'll block writes and stay in research."

"What about for the AFK run later?"

"Bypass mode, but only inside the sandbox."
