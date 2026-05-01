The world the [agent](./Agent.md) acts on — anything outside the [harness](./Harness.md) that the agent perceives through [tool results](./Tool%20result.md) and changes through [tool calls](./Tool%20call.md). The harness *runs* the agent; the environment is what the agent *works in*. A file like [`AGENTS.md`](./AGENTS.md.md) lives in the environment; the harness is what loads it into the [context window](./Context%20window.md). A [filesystem](./Filesystem.md) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

*Avoid:* using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

*Usage:* "The agent can't see the staging DB schema." "Wire it into the environment — give it a `psql` tool scoped to read-only on staging. The harness is fine, it just has nothing to act on."
