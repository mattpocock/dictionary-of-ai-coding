A [handoff artifact](./Handoff%20artifact.md) scoping one [session](./Session.md) of work. Stands alone, or hangs off a [spec](./Spec.md) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

*Usage:*

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."
