---
title: "Handoff"
description: "Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others."
editLink: false
---

# Handoff

Transferring [agent](/en/agent) [context](/en/context) from one [session](/en/session) to another. The carry mechanism varies — a written [handoff artifact](/en/handoff-artifact), an in-memory summary ([compaction](/en/compaction)), and others. Distinct from [clearing](/en/clearing) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](/en/afk) run, fanning out to parallel sessions, or freeing up [context window](/en/context-window) room.

The receiving session starts with zero context — the [model](/en/model) is [stateless](/en/stateless), and nothing from the old session is visible to the new one. Whatever the next session needs has to be carried explicitly; everything else is gone. "No return path" is the constraint that shapes the carry: the new session can't ask the old one what it meant, so the carried material has to stand on its own.

| Mechanism        | Form                                       | Properties                                                                               |
| ---------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Handoff artifact | File in the [environment](/en/environment) | You can read and correct it before anything depends on it; reusable across many sessions |
| Compaction       | Summary in the context window              | Automatic and cheap; harder to inspect; feeds one successor                              |

The visible failure of a bad handoff is relitigation: the new session re-opens decisions the old one had settled, because the carry recorded what was decided but not why. Judge a handoff by what a session with zero context could do with it.

_Usage:_

"Planning session is getting heavy — should I just keep going?"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/handoff" class="VPLink">Read in ไทย →</a>
</div>
