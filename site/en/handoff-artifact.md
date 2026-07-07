---
title: "Handoff artifact"
description: "A document used as the carry mechanism for a handoff — written by one session to be read by another."
editLink: false
---

# Handoff artifact

A document used as the carry mechanism for a [handoff](/en/handoff) — written to the [environment](/en/environment) by one [session](/en/session) to be read by another. [Specs](/en/spec), [tickets](/en/ticket), and plan docs are all handoff artifacts.

The reason to write one: the [model](/en/model) is [stateless](/en/stateless), so nothing in a session survives [clearing](/en/clearing) it. Decisions, constraints, half-finished plans — all gone with the [context](/en/context) that held them. The environment persists. Writing the important state into a file moves it somewhere the next session can read it back from.

The artifact is a [secondary source](/en/secondary-source) — an account of the session's work, not the work itself. That's what makes it small enough to brief a fresh session, and also why it can mislead one: it records what the writing session believed, and anything it left out or got wrong is invisible to the reader. Where a claim matters, the next session should verify it against the [primary source](/en/primary-source) — the code, the tests — rather than inherit it.

A good artifact is written to be read into a session that has zero context. Concrete file paths rather than "the file we discussed". What was decided and why, so the next session doesn't relitigate it. What's done and what's left. It helps to tell the writing session where the artifact is headed: "write a handoff doc for a fresh session that knows nothing about this work".

The alternative carry mechanism is [compaction](/en/compaction), which summarises in-memory. The artifact has two advantages: it lives on disk where you can read and correct it before anything depends on it, and it can be reused — the same spec can brief five parallel sessions.

_Usage:_

"How do I split this between the planning [agent](/en/agent) and the implementing one?"

"Have the planner write a handoff artifact — file paths, decisions, constraints. The implementer's session opens with a pointer to the artifact and works from it as its brief."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/handoff-artifact" class="VPLink">Read in ไทย →</a>
</div>
