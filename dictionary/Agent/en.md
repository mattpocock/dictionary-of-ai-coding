---
description: A model harnessed with tools, a system prompt, and a context window, that takes turns with a user. The model in motion.
---

A [model](./Model.md) [harnessed](./Harness.md) with [tools](./Tool.md), a [system prompt](./System%20prompt.md), and a [context window](./Context%20window.md), that takes [turns](./Turn.md) with a user. _Claude Code is an agent. Cursor is an agent. Claude.ai is an agent._ An agent is what you actually talk to — it's the model in motion, configured for a purpose.

Unlike most terms in this dictionary, "agent" doesn't name a mechanical part. The model is a file of [parameters](./Parameters.md); the harness is software you can point at. The agent is neither — it's the unit you're speaking to. People anthropomorphize [AI](./AI.md) constantly, and the agent is the anthropomorphized unit: the thing you delegate to, the thing that reads your message and answers, the "it" in "it broke the build again". When you say the agent did something, you mean the model-plus-harness did it, but you're addressing the combination as a single actor.

The idea is older than this wave of AI. Software agents — programs you delegate a goal to, which act on your behalf — have been a concept for as long as AI has.

_Avoid:_ "the AI", "the bot" (too vague — they hide whether you mean the parameters or the harnessed thing).

_Usage:_

"Which agent are you using for the migration?"

"Claude Code locally, Cursor for the UI work — same model underneath, different harnesses."
