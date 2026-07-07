---
description: What the harness sends back after executing a tool call — file contents, output, or error. The agent's only view of the environment.
---

What the [harness](./Harness.md) sends back after executing a [tool call](./Tool%20call.md) — the file contents, the command output, the error. The [agent](./Agent.md)'s only view of the [environment](./Environment.md). Travels back to the [model](./Model.md) in the _next_ [model provider request](./Model%20provider%20request.md), where the model decides what to do with it. Tool call and tool result are two ends of the same exchange, both inside one [turn](./Turn.md).

The lifecycle of a tool result:

| Step | Who     | What happens                                                               |
| ---- | ------- | -------------------------------------------------------------------------- |
| 1    | Harness | Executes the tool call — runs the command, reads the file                  |
| 2    | Harness | Captures the outcome: output, contents, or error                           |
| 3    | Harness | Appends it to the [context](./Context.md) as a message                     |
| 4    | Harness | Sends the whole context to the provider in the next model provider request |
| 5    | Model   | Reads the result and decides: another tool call, or a final answer         |

The result stays in the context for the rest of the [session](./Session.md). Tool results are usually the bulk of a coding session's context: every file read, every test run, every search lands in full and keeps occupying [tokens](./Token.md) long after it stopped being useful. A few large results — a verbose test log, a generated file read whole — can push a session toward the edge of the [context window](./Context%20window.md) faster than the conversation itself does.

Because the result is all the model sees, the model has no way to check the environment behind it. If the output was truncated, the command silently failed, or the harness returned an error instead of the contents, the model reasons from what it was given. When the agent's picture of your system seems wrong, the tool results are where to look: somewhere in the transcript is a result that says something different from what you know to be true.

_Usage:_

"It's reasoning about the file like it's empty."

"The tool result came back as a permission denial, not the contents. The model only saw the error string — it has no other way to see the file."
