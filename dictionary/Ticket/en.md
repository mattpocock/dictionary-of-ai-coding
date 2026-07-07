---
description: A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets.
---

A [handoff artifact](./Handoff%20artifact.md) scoping one [session](./Session.md) of work. Stands alone, or hangs off a [spec](./Spec.md) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

The defining constraint is the size: one session. A ticket should be completable before the session drifts out of the [smart zone](./Smart%20zone.md) — and that constraint is testable. If sessions on your tickets routinely degrade before the work is done, the tickets are too big; split them. If each session spends most of its [context](./Context.md) on setup before doing five minutes of work, they're too small; merge them.

A good ticket is written for a reader with no other context. The goal, the acceptance criteria, and [context pointers](./Context%20pointer.md) to the relevant files and decisions — enough that the session can start working without re-deriving what the last one knew.

The dependency graph is also what unlocks parallelism. Independent tickets — the leaves of the graph — can each run in their own session at the same time. This is an effective way of running multiple agents at once.

_Usage:_

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."
