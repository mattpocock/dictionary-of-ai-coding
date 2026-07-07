---
description: "Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks."
---

Everything around the [model](./Model.md) that turns it into an [agent](./Agent.md): [tools](./Tool.md), [system prompt](./System%20prompt.md), [context-window management](./Context%20window.md), permissions, hooks. **Claude.ai** and **Claude Code** run on the same model but behave differently because their harnesses differ.

The model itself only does one thing: take text in, produce text out. It can't read a file, run a command, or remember the last [turn](./Turn.md). The harness supplies all of that. It assembles the [context](./Context.md) for each [model provider request](./Model%20provider%20request.md), executes the [tool calls](./Tool%20call.md) the model asks for, feeds the [tool results](./Tool%20result.md) back in, stores the [session](./Session.md) history, asks you for permission before risky actions, and decides when to [compact](./Compaction.md). The agent loop — model proposes, harness executes, repeat — is run by the harness.

This matters for diagnosis. When behaviour differs between two products, or between yesterday and today, the model is often not the variable — the harness is. A different system prompt, a different set of tools, a changed permission default, or a new context-management strategy all change behaviour without any change to the model. It also means the harness is where most of your configuration lives: [AGENTS.md](./AGENTS.md.md) files, permission settings, and hooks are all instructions to the harness, not the model.

Examples: Claude Code, Cursor, Codex CLI — and Claude.ai, which is a chat harness rather than a coding one.

_Usage:_

"Same model, why is Claude Code editing files and Claude.ai just answering questions?"

"Different harnesses — Claude Code has [filesystem](./Filesystem.md) tools, a different system prompt, and a permission layer. The model isn't the variable here."
