---
description: A deterministic shell command the harness runs in response to an agent event. Wired by the operator, not invoked by the agent.
---

A deterministic shell command the [harness](./Harness.md) runs in response to an [agent](./Agent.md) event — before or after a [tool call](./Tool%20call.md), at the end of a [session](./Session.md), on file edit. Distinct from a [tool](./Tool.md) (which the agent calls) and a [skill](./Skill.md) (which the agent reads): a hook fires whether the agent wants it to or not. How an operator wires deterministic behavior into the loop without trusting the model to remember.

_Avoid:_ "tool" — agents call tools; the harness runs hooks. _Avoid:_ "[automated check](./Automated%20check.md)" — a check is what a hook usually _runs_; the hook is the trigger plumbing.

_Usage:_

"How do I make sure it always runs typecheck after edits?"

"Wire a post-edit hook in the harness — don't rely on the agent to do it. Same for blocking writes outside the [sandbox](./Sandbox.md): pre-tool hook, exit non-zero."
