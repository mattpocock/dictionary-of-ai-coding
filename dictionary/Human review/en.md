---
description: The user reading the code the agent produced and forming a judgement on it. Reading the diff counts; reading the summary doesn't.
---

The user reading the code the [agent](./Agent.md) produced and forming a judgement on it. Reading the diff or the changed files counts; reading the agent's _description_ of what it did does not — narration is not the artifact. The description is a [secondary source](./Secondary%20source.md), written by the party being reviewed; the diff is the [primary source](./Primary%20source.md), and review means reading it.

Agents raise the volume of code produced, so review becomes the bottleneck. One useful idea is layering different review strategies. [Automated checks](./Automated%20check.md) catch the mechanical failures, [automated review](./Automated%20review.md) catches the describable ones, and human review is reserved for what only you can judge — whether the change is the right change, whether the approach fits the codebase, whether this should exist at all.

Review is also cheaper earlier. Reading a plan before work starts, or a small diff mid-flight, takes minutes; excavating a finished branch after an [AFK](./AFK.md) run takes longer. Where you place the review checkpoint is a [human-in-the-loop](./Human-in-the-loop.md) decision, not an afterthought.

_Avoid:_ "code review" alone — ambiguous between human and automated.

_Usage:_

"I human-reviewed the AFK output."

"You read the diff or just the summary?"

"Diff. The summary said it deleted dead code — turned out the function was called from a generated file."
