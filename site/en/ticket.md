---
title: "Ticket"
description: "A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets."
editLink: false
---

# Ticket

A [handoff artifact](/en/handoff-artifact) scoping one [session](/en/session) of work. Stands alone, or hangs off a [spec](/en/spec) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

The defining constraint is the size: one session. A ticket should be completable before the session drifts out of the [smart zone](/en/smart-zone) — and that constraint is testable. If sessions on your tickets routinely degrade before the work is done, the tickets are too big; split them. If each session spends most of its [context](/en/context) on setup before doing five minutes of work, they're too small; merge them.

A good ticket is written for a reader with no other context. The goal, the acceptance criteria, and [context pointers](/en/context-pointer) to the relevant files and decisions — enough that the session can start working without re-deriving what the last one knew.

The dependency graph is also what unlocks parallelism. Independent tickets — the leaves of the graph — can each run in their own session at the same time. This is an effective way of running multiple agents at once.

_Usage:_

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/ticket" class="VPLink">Read in ไทย →</a>
</div>
