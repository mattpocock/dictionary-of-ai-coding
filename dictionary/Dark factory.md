---
description: "A software factory whose output is vibe coded: sessions start on triggers, and their changes ship without anyone reading them."
---

A [software factory](./Software%20factory.md) whose output is [vibe coded](./Vibe%20coding.md): [agent](./Agent.md) [sessions](./Session.md) start on triggers, and their changes merge and ship without anyone reading them. Humans may still write the issues that feed it; what makes it dark is that no [human review](./Human%20review.md) happens on the way out. The name comes from lights-out manufacturing, where a factory runs with nobody on the floor.

It carries the cost of vibe coding at a different scale. With vibe coding, a person chooses not to read a diff they asked for, and at least knows the change exists. In a dark factory, changes land that no person individually asked for or saw, at the rate the triggers fire. The symptom is learning what the factory changed only when something breaks, then debugging code nobody on the team has read, spread across dozens of changes that each looked plausible to the checks that passed them.

With review gone, [automated checks](./Automated%20check.md) and [automated review](./Automated%20review.md) are the only gates left, so a dark factory is only as safe as those gates are thorough.

Teams that move toward one do it loop by loop. Start with a narrow loop that produces small, easy-to-trust PRs — one lint rule fixed per PR — and review every one. Once the loop has a track record, widen it: two fixes a day, then ten in one PR. Removing review is the last step for a given loop, taken when reviewing it has stopped finding problems, and it applies to that loop only.

_Avoid:_ calling a factory "dark" because it runs unattended. Sessions that run [AFK](./AFK.md) and end in PRs a human reviews are a software factory, not a dark one.

_Usage:_

"Can the dependency-bump loop merge on its own now?"

"Three months of PRs and review hasn't caught anything. Turn off review for that loop only — the rest of the factory stays gated."
