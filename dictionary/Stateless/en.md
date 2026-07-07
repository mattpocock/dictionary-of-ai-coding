---
description: Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default.
---

Carries no information forward. The [model](./Model.md) is stateless across [model provider requests](./Model%20provider%20request.md) — each request resends the full [context window](./Context%20window.md), because the model has no way to see anything else. An [agent](./Agent.md) is stateless across [sessions](./Session.md) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](./Stateful.md).

The model itself is permanently stateless: its [parameters](./Parameters.md) are frozen after [training](./Training.md), and nothing you do at [inference](./Inference.md) changes them. The model doesn't learn from your corrections, doesn't remember being told the same thing yesterday, and isn't getting to know you — however much the conversation feels otherwise. The feeling of continuity within a session is manufactured by the [harness](./Harness.md), which keeps the transcript and re-sends it with every request. The model isn't remembering the conversation; it's re-reading it.

The practical consequence: if you want something remembered across sessions, you have to write it down somewhere the agent will read it back. That's what [AGENTS.md](./AGENTS.md.md) files, [memory systems](./Memory%20system.md), and [handoff artifacts](./Handoff%20artifact.md) are — files that get loaded into the [context](./Context.md) of future sessions, standing in for the memory the model doesn't have. When the agent keeps making a mistake you've corrected before, the question isn't why it didn't learn — it can't — but where that correction should be written down so every future session reads it.

_Usage:_

"Why does it forget the convention every time I [clear](./Clearing.md)?"

"The model's stateless — the new session starts empty. If you want it carried, write it to AGENTS.md or a memory file the harness loads at session start."
