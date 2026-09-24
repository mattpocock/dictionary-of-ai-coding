---
description: A codebase, or part of one, where a software factory writes the code and no human ever reviews it.
---

A codebase, or part of one, where a [software factory](./Software%20factory.md) writes the code and no human reads it. There is no [human review](./Human%20review.md). Humans can still write the issues that start the work. But nobody reads the code that comes out. The name comes from "lights-out" factories, which make things with no people on the floor.

A dark factory is [vibe coding](./Vibe%20coding.md) for an area of code, not for one change. When you vibe code, you choose not to read a change that you asked for. But you know that the change exists. In a dark factory, the team makes that choice one time, for the full area. After that, no person asks for each change or sees it. Changes arrive as fast as the triggers start new work.

The problem shows when something breaks. You do not know what changed, because nobody read the changes. You must debug code that nobody on the team has read. The cause can be in any of many changes, and each one passed the checks.

[Automated checks](./Automated%20check.md) and [automated review](./Automated%20review.md) are the only gates. If they do not find a problem, the problem goes into the code.

_Avoid:_ calling a codebase "dark" only because its factory runs with nobody watching. If [agent](./Agent.md) [sessions](./Session.md) run [AFK](./AFK.md) and a human reviews their PRs, that is a software factory. It is not a dark factory.

_Usage:_

"Who changed the retry logic in the billing service? Nobody on the team remembers it."

"The billing service is a dark factory. The agents merge all changes that pass CI. Nobody read that change."
