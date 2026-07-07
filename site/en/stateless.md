---
title: "Stateless"
description: "Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default."
editLink: false
---

# Stateless

Carries no information forward. The [model](/en/model) is stateless across [model provider requests](/en/model-provider-request) — each request resends the full [context window](/en/context-window), because the model has no way to see anything else. An [agent](/en/agent) is stateless across [sessions](/en/session) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](/en/stateful).

The model itself is permanently stateless: its [parameters](/en/parameters) are frozen after [training](/en/training), and nothing you do at [inference](/en/inference) changes them. The model doesn't learn from your corrections, doesn't remember being told the same thing yesterday, and isn't getting to know you — however much the conversation feels otherwise. The feeling of continuity within a session is manufactured by the [harness](/en/harness), which keeps the transcript and re-sends it with every request. The model isn't remembering the conversation; it's re-reading it.

The practical consequence: if you want something remembered across sessions, you have to write it down somewhere the agent will read it back. That's what [AGENTS.md](/en/agents-md) files, [memory systems](/en/memory-system), and [handoff artifacts](/en/handoff-artifact) are — files that get loaded into the [context](/en/context) of future sessions, standing in for the memory the model doesn't have. When the agent keeps making a mistake you've corrected before, the question isn't why it didn't learn — it can't — but where that correction should be written down so every future session reads it.

_Usage:_

"Why does it forget the convention every time I [clear](/en/clearing)?"

"The model's stateless — the new session starts empty. If you want it carried, write it to AGENTS.md or a memory file the harness loads at session start."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/stateless" class="VPLink">Read in ไทย →</a>
</div>
