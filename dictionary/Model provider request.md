One round-trip from the [harness](./Harness.md) to the [model provider](./Model%20provider.md). The harness sends the current [context](./Context.md); the provider returns one response (a [tool call](./Tool%20call.md) or a final answer). A single user message can spawn many model provider requests if the [agent](./Agent.md) calls [tools](./Tool.md) — each [tool result](./Tool%20result.md) triggers another request.

*Usage:*

"One question burned forty thousand tokens?"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole session prefix re-sends every time."
