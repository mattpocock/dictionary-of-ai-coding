---
description: A working pattern where one or more humans pair with the agent during a session — reviewing, redirecting, or collaborating in real time.
aliases:
  - HITL
  - Human-in-the-loop (HITL)
---

A working pattern where one or more humans pair with the [agent](./Agent.md) during a [session](./Session.md) — reviewing, redirecting, or collaborating in real time. The human is present and engaged, not just gating individual actions.

The contrast is with [AFK](./AFK.md) work, where the agent runs unattended and you judge the result afterwards. Human-in-the-loop means catching problems while they're still cheap: you see the agent reach for the wrong file, misread the requirement, or start down a dead end, and you redirect it in one sentence — rather than discovering twenty minutes of confident work built on that mistake. Agents don't reliably know when they're off track; left alone, they tend to push forward rather than stop and ask.

Which pattern fits depends on the work. Well-specified, low-risk, easy-to-verify tasks suit AFK. Tasks that are ambiguous, irreversible, or where you'd struggle to review the finished result — a schema migration, a tricky design decision, anything touching production — suit staying in the loop. The judgement call is essentially: how expensive is a wrong turn, and how late would you catch it?

Some work is in-the-loop by nature, because your reactions are the input. [Grilling](./Grilling.md) only works with you there to answer the questions; [prototyping](./Prototyping.md) only works with you there to react to the artifact.

Staying in the loop costs your attention, which is the scarce resource. Part of getting better with agents is moving more work safely out of the loop — with plans, [automated checks](./Automated%20check.md), and [human review](./Human%20review.md) at the end instead of supervision throughout.

_Usage:_

"Run this AFK overnight?"

"No, schema migration — keep it human-in-the-loop. I want to see each step and steer if it picks the wrong column to backfill from."
