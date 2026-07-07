---
title: "Progressive disclosure"
description: "Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design."
editLink: false
---

# Progressive disclosure

Loading only the [context](/en/context) an [agent](/en/agent) needs right now, with [context pointers](/en/context-pointer) to the rest. Borrowed from UI design, where it means showing users only the controls relevant to their current task and hiding the rest behind a click.

The technique exists because context is a cost twice over. Every [token](/en/token) loaded up front is billed as [input tokens](/en/input-tokens) on every [turn](/en/turn), and every token spends [attention budget](/en/attention-budget) whether the agent needs it or not. An [AGENTS.md](/en/agents-md) stuffed with the full style guide, deployment runbook, and database conventions makes the agent worse at all of them — the instructions that matter for the current task are diluted by the ones that don't. The tell is an agent that ignores rules you know are in its context: they're in there, but buried.

Progressive disclosure inverts this. Keep the always-loaded layer small — a sentence per topic and a pointer to where the detail lives. The agent reads the style guide when it's writing a component, the deployment runbook when it's deploying, and neither when it's fixing a test. [Skills](/en/skill) are the pattern built into the [harness](/en/harness): a short description loaded every [session](/en/session), the full instructions only when triggered.

_Usage:_

"Should I dump the entire style guide into AGENTS.md?"

"No — progressive disclosure. Reference the style guide as a skill the agent loads when it actually needs to write a component. AGENTS.md pays the token cost every turn."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/progressive-disclosure" class="VPLink">Read in ไทย →</a>
</div>
