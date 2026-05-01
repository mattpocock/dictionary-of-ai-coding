The buffer the [model](./Model.md) reads on each [model provider request](./Model%20provider%20request.md). Finite, model-specific, and the *only* surface through which the model perceives anything.

*Avoid:* "memory" — the context window is working state and doesn't persist across [sessions](./Session.md). [Memory](./Memory%20system.md) is a separate concept layered on top.

*Usage:*

"Can I just paste the whole monorepo into the prompt?"

"The context window's 200k tokens — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a tool call."
