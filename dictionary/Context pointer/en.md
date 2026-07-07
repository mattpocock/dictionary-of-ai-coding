---
description: A mention in one document that points to another, so the agent can pull it into context only when the task calls for it.
---

A mention in one document that points to another, so the [agent](./Agent.md) can pull it into the [context window](./Context%20window.md) only when the task calls for it. The unit [progressive disclosure](./Progressive%20disclosure.md) is built from.

The reason to use a pointer (instead of inlining the content) is cost. A pointer is one line in the context window. The document behind it might be thousands of [tokens](./Token.md), but those tokens cost nothing until the agent actually follows the pointer. Inline a 2,000-token runbook in [AGENTS.md](./AGENTS.md.md) and every [session](./Session.md) pays for it; replace it with "deploy process: see `internal/deploy.md`" and only the sessions that deploy ever load it. The agent follows the pointer with a [tool call](./Tool%20call.md) when the task matches.

A pointer needs two parts to work: a stable path, and enough description for the agent to know when following it is worth it. A bare path is a pointer the agent has no reason to follow; "see `internal/deploy.md`" with no hint of what's inside gets skipped by a session that needed it. Write the line so it matches how tasks present: "release, deploy, or rollback — read `internal/deploy.md` first".

Pointers are everywhere once you look: lines in AGENTS.md, [skill](./Skill.md) descriptions (the harness loads the description; the skill body waits behind it), filenames in a directory listing, links between docs.

A pointer can also tie a [secondary source](./Secondary%20source.md) back to the [primary source](./Primary%20source.md) it was derived from — the compaction summary that names the original transcript, the doc that names the source file it describes. This makes the secondary source's lossiness recoverable: when the summary turns out not to be enough, the agent follows the pointer and reads the original, instead of working from whatever the summary kept.

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

_Usage:_

"AGENTS.md is getting huge."

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into skills and leave a context pointer behind."
