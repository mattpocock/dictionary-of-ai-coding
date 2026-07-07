---
description: Everything the model sees on each model provider request. Finite, model-specific, the only surface through which the model perceives.
---

Everything the [model](./Model.md) sees on each [model provider request](./Model%20provider%20request.md). Finite, model-specific, and the _only_ surface through which the model perceives anything.

It's a single sequence of [tokens](./Token.md): the [system prompt](./System%20prompt.md), the conversation so far, every [tool result](./Tool%20result.md) the [harness](./Harness.md) has fed back in. If something is in that sequence, the model can use it; if it isn't, the model doesn't know it exists — not your codebase, not the file you edited yesterday, not the instruction you gave three sessions ago. Anything outside the window has to be brought in, usually via a [tool call](./Tool%20call.md), before it can affect anything.

Finite means it fills up. Every turn appends more — your messages, the model's responses, tool results — and a long [session](./Session.md) will eventually hit the limit, forcing [compaction](./Compaction.md) or [clearing](./Clearing.md). It also means everything in the window competes: each token you load is one less available for the rest, and content you didn't need still occupies the model's [attention](./Attention%20budget.md). The practical stance is to treat the window as a budget — load what the task needs, leave the rest out.

_Avoid:_ "memory" — the context window is working state and doesn't persist across sessions. [Memory](./Memory%20system.md) is a separate concept layered on top.

_Usage:_

"Can I just paste the whole monorepo into the prompt?"

"The context window's 200k tokens — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a tool call."
