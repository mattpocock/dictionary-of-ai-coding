---
description: As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks.
---

As a [session](./Session.md) grows, each [token](./Token.md)'s [attention budget](./Attention%20budget.md) is spread across more competitors. The signal on any one [meaningful relationship](./Attention%20relationship.md) shrinks; noise from irrelevant [context](./Context.md) crowds in. Same [model](./Model.md), same [parameters](./Parameters.md) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](./Smart%20zone.md).

It presents as the model getting worse mid-session: constraints it followed for an hour start slipping, it re-asks things it was told, it writes code that ignores a file it read earlier. Nothing about the model changed — the only variable is how much context it's now attending over.

It's gradual, which is what makes it hard to catch from inside the session. There's no error and no threshold; each [turn](./Turn.md) is only slightly worse than the last, and by the time the slips are obvious you've been in the dumb zone for a while.

You recover by removing context, not adding more. Re-pasting the ignored instruction adds another competitor to the same crowded window and helps only briefly. What works: [clear](./Clearing.md) and reload only what the task needs, or [compact](./Compaction.md), or [hand off](./Handoff.md) to a fresh session. Treat declining instruction-following as a signal about context length, not about the model.

_Usage:_

"It's deep in the dumb zone — inventing generics that aren't in the type file."

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. Clear and reload."
