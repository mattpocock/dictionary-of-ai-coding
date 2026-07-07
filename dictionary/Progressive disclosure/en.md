---
description: Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design.
---

Loading only the [context](./Context.md) an [agent](./Agent.md) needs right now, with [context pointers](./Context%20pointer.md) to the rest. Borrowed from UI design, where it means showing users only the controls relevant to their current task and hiding the rest behind a click.

The technique exists because context is a cost twice over. Every [token](./Token.md) loaded up front is billed as [input tokens](./Input%20tokens.md) on every [turn](./Turn.md), and every token spends [attention budget](./Attention%20budget.md) whether the agent needs it or not. An [AGENTS.md](./AGENTS.md.md) stuffed with the full style guide, deployment runbook, and database conventions makes the agent worse at all of them — the instructions that matter for the current task are diluted by the ones that don't. The tell is an agent that ignores rules you know are in its context: they're in there, but buried.

Progressive disclosure inverts this. Keep the always-loaded layer small — a sentence per topic and a pointer to where the detail lives. The agent reads the style guide when it's writing a component, the deployment runbook when it's deploying, and neither when it's fixing a test. [Skills](./Skill.md) are the pattern built into the [harness](./Harness.md): a short description loaded every [session](./Session.md), the full instructions only when triggered.

_Usage:_

"Should I dump the entire style guide into AGENTS.md?"

"No — progressive disclosure. Reference the style guide as a skill the agent loads when it actually needs to write a component. AGENTS.md pays the token cost every turn."
