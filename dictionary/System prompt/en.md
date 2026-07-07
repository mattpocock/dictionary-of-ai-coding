---
description: The instructions the harness prepends to every model provider request — the agent's standing brief. Usually stable across a session.
---

The instructions the [harness](./Harness.md) prepends to every [model provider request](./Model%20provider%20request.md) — the [agent](./Agent.md)'s standing brief: who it is, how to behave, which [tools](./Tool.md) it can call, what conventions to follow. Usually stable across a [session](./Session.md).

The system prompt is written by the harness vendor, not by you, and in coding harnesses it's big — often tens of thousands of [tokens](./Token.md) of behavioural rules, tool descriptions, and edge-case handling, all paid as [input tokens](./Input%20tokens.md) on every [turn](./Turn.md). Your own standing instructions ride along with it: files like [AGENTS.md](./AGENTS.md.md) are loaded next to the system prompt at the start of the session, so the [model](./Model.md) reads the vendor's brief and yours together before it ever sees your message.

Because it's identical on every request, it forms the start of the [prefix cache](./Prefix%20cache.md) — which is part of why harnesses keep it fixed for a whole session rather than editing it as they go.

Models are trained to prioritise the system prompt over user messages. So when an agent insists on a convention you never asked for, or formats output in a way you can't shake, it's usually obeying its system prompt — and your message is losing the argument. Some harnesses are customisable: they give you full access to the system prompt, so you can read what the agent is actually being told and change it.

_Usage:_

"Two harnesses, same model, totally different behavior on the same prompt."

"Different system prompts. One's tuned for terse code edits, the other for explaining — that's where the divergence lives, before your message even arrives."
