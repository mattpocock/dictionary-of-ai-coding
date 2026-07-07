# batch-03-01-tools-environment

Batch 6 of 14.

Curriculum section: Section 3 — Tools & Environment

Approximate English words: 2010

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term        | English source                 | Thai target                    | Words |
| ----------- | ------------------------------ | ------------------------------ | ----: |
| Environment | `dictionary/Environment/en.md` | `dictionary/Environment/th.md` |   384 |
| Filesystem  | `dictionary/Filesystem/en.md`  | `dictionary/Filesystem/th.md`  |   243 |
| Tool        | `dictionary/Tool/en.md`        | `dictionary/Tool/th.md`        |   381 |
| Tool call   | `dictionary/Tool call/en.md`   | `dictionary/Tool call/th.md`   |   282 |
| Tool result | `dictionary/Tool result/en.md` | `dictionary/Tool result/th.md` |   384 |
| MCP         | `dictionary/MCP/en.md`         | `dictionary/MCP/th.md`         |   336 |

## Raw English

## Environment

Source: `dictionary/Environment/en.md`

Target: `dictionary/Environment/th.md`

```md
---
description: The world the agent acts on — anything outside the harness that the agent perceives via tool results and changes via tool calls.
---

The world the [agent](./Agent.md) acts on — anything outside the [harness](./Harness.md) that the agent perceives through [tool results](./Tool%20result.md) and changes through [tool calls](./Tool%20call.md). The harness _runs_ the agent; the environment is what the agent _works in_. A file like [`AGENTS.md`](./AGENTS.md.md) lives in the environment; the harness is what loads it into the [context window](./Context%20window.md). A [filesystem](./Filesystem.md) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

The agent only sees the environment when it looks. Everything it knows about the environment arrived through a tool result, so its picture is a collection of snapshots, each accurate at the moment it was taken. If a file changes after the agent read it — you edit it by hand, a build step regenerates it — the agent keeps reasoning from the stale copy until something prompts a re-read. An agent confidently describing a file that no longer looks like that is usually this: the environment moved, the snapshot didn't.

The environment is also the layer that persists — the only one that is always [stateful](./Stateful.md). A [session](./Session.md)'s context is gone when the session ends, but files written to the environment remain for the next session to read — which is what [memory systems](./Memory%20system.md), [handoff artifacts](./Handoff%20artifact.md), and `AGENTS.md` rely on. Anything an agent should still know tomorrow has to end up in the environment.

You decide how big the environment is. A [sandbox](./Sandbox.md) shrinks it, limiting what the agent can reach; adding a [tool](./Tool.md) extends it, bringing a database or an API into reach. What's inside the boundary is what the agent can perceive and change; everything outside it doesn't exist for the agent. How well the environment is set up to support the agent's work is the codebase's [AX](./AX.md).

_Avoid:_ using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

_Usage:_

"The agent can't see the staging DB schema."

"Wire it into the environment — give it a `psql` tool scoped to read-only on staging. The harness is fine, it just has nothing to act on."
```

## Filesystem

Source: `dictionary/Filesystem/en.md`

Target: `dictionary/Filesystem/th.md`

```md
---
description: A tree of files and directories the agent reads from, writes to, and executes within — the default environment for a coding agent.
---

A tree of files and directories the [agent](./Agent.md) reads from, writes to, and executes within — the default kind of [environment](./Environment.md) for a coding agent. [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), source code, build scripts, and [tool](./Tool.md) configs all live in a filesystem. When a [harness](./Harness.md) "starts in your project," it's pointing the agent at a filesystem.

The agent touches it only through [tool calls](./Tool%20call.md) — reading a file, writing one, running a shell command. Nothing on disk is in the [context window](./Context%20window.md) until a tool call loads it, which is what lets the agent work in a repository far larger than the window: the filesystem holds everything, the context holds only what the current task has read. Some harnesses do load the current directory's filenames into the context window by default — not the contents, just the tree — which act as [context pointers](./Context%20pointer.md): the agent sees what exists and reads the files it needs.

And it's shared with you. The files the agent edits are the same ones you open in your editor and diff in git — the filesystem is the common workspace where you review what the agent did.

_Usage:_

"Why isn't it picking up my AGENTS.md?"

"It's running against a different filesystem — the [sandbox](./Sandbox.md) mounted the parent dir, not the project root. Repoint the harness."
```

## Tool

Source: `dictionary/Tool/en.md`

Target: `dictionary/Tool/th.md`

```md
---
description: A function the harness exposes for the agent to call — Read, Write, Bash, Search. How an agent perceives and acts on the environment.
---

A function the [harness](./Harness.md) exposes for the [agent](./Agent.md) to call — Read, Write, Bash, Search. Tools are how an agent perceives and acts on the [environment](./Environment.md): it can't see the environment except through [tool results](./Tool%20result.md), and can't change it except through [tool calls](./Tool%20call.md). Each tool call costs an extra [model provider request](./Model%20provider%20request.md), since the result has to go back to the model before it can decide what to do next.

Tools most coding agents ship with:

| Tool   | What it does                                                 |
| ------ | ------------------------------------------------------------ |
| Read   | Returns a file's contents as a tool result                   |
| Write  | Creates or edits a file in the [filesystem](./Filesystem.md) |
| Bash   | Runs a shell command and returns its output                  |
| Search | Finds files or text matching a pattern across the codebase   |

A tool is defined by three things: a name, a description of what it does, and a schema for its parameters. The harness sends these definitions to the [model](./Model.md) with every request, and the model chooses a tool the same way it produces everything else — by writing [tokens](./Token.md), in this case a structured call with arguments. The model never executes anything itself; the harness reads the call, runs the function, and sends back the result.

The tool list sets what the agent can do. A capable model with a narrow tool set is a narrow agent: it will route everything through whatever it has, which is why agents lean so heavily on Bash — a shell is one tool that reaches most of the system. To give an agent a capability cleanly, add a tool for it; [MCP](./MCP.md) is the standard for plugging in tools from outside the harness.

Tool definitions occupy [context](./Context.md) on every request, so a large tool set has a standing cost before any tool is called — and many similarly-described tools make the model worse at picking the right one.

_Usage:_

"Can the agent query staging directly?"

"Add a `psql` tool to the harness, scoped read-only on staging. Without a tool for it, the agent's blind to anything outside the filesystem."
```

## Tool call

Source: `dictionary/Tool call/en.md`

Target: `dictionary/Tool call/th.md`

```md
---
description: The model's output naming a tool and its arguments — just structured text. The harness has to read it and execute.
---

The [model](./Model.md)'s output naming a [tool](./Tool.md) and its arguments — just structured text. It doesn't do anything on its own; the [harness](./Harness.md) has to read it and execute. Produced by the model in one [model provider request](./Model%20provider%20request.md).

The lifecycle of a tool call:

| Step | Who     | What happens                                                                            |
| ---- | ------- | --------------------------------------------------------------------------------------- |
| 1    | Model   | Learns which tools exist from descriptions in the [system prompt](./System%20prompt.md) |
| 2    | Model   | Emits a call — tool name plus arguments, usually JSON — and stops                       |
| 3    | Harness | Parses the call and checks it against the [permission mode](./Permission%20mode.md)     |
| 4    | Harness | Executes it if allowed                                                                  |
| 5    | Harness | Sends the outcome back as a [tool result](./Tool%20result.md) in the next request       |

One [turn](./Turn.md) of [agent](./Agent.md) work is usually many of these round trips chained together.

Because the call is generated by [next-token prediction](./Next-token%20prediction.md) like everything else, it can be wrong the way any model output can be wrong: a path that doesn't exist, a flag the command doesn't have, arguments that are plausible rather than correct. The harness executes what was written, not what was meant — a mistyped path doesn't error gracefully, it edits the wrong file.

_Usage:_

"It said it ran the tests but the file timestamps haven't changed."

"Look at the transcript — did it actually emit a tool call, or just describe running them? The model produces the call, but if the harness didn't execute it, nothing happened."
```

## Tool result

Source: `dictionary/Tool result/en.md`

Target: `dictionary/Tool result/th.md`

```md
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
```

## MCP

Source: `dictionary/MCP/en.md`

Target: `dictionary/MCP/th.md`

```md
---
description: A protocol for plugging external tool servers into a harness — how an agent gets tools beyond what the harness ships with.
---

**Model Context Protocol.** A protocol for plugging external tool servers into a [harness](./Harness.md) — how an [agent](./Agent.md) gets [tools](./Tool.md) beyond what the harness ships with. The agent never "calls MCP"; it calls a tool, and the harness happens to have gotten that tool from an MCP server. Also exposes resources (read-only data) and prompts (reusable templates), but tool provision is the primary use.

The protocol solves an integration problem. Without a standard, every harness would need its own Linear integration, its own Slack integration, its own database integration — written and maintained separately for each. With MCP, the integration is written once as a server, and any MCP-compatible harness can use it. The harness connects to the server, the server advertises what tools it offers, and those tools become available to the agent alongside the built-in ones.

The cost is paid in [context](./Context.md). Every tool a server advertises arrives as a definition — name, description, parameter schema — and the [model](./Model.md) can only call tools it knows about. The naive approach loads every definition into the [context window](./Context%20window.md) up front: install a few generous servers and a [session](./Session.md) starts with thousands of [tokens](./Token.md) of tool schemas before you've typed anything, spending [attention budget](./Attention%20budget.md) on tools the task will never use.

Many harnesses now mitigate this with tool search: instead of the full definitions, the context holds a [context pointer](./Context%20pointer.md) to the available tools — the agent searches for a tool by name or purpose and loads its definition only when it needs it. If your harness doesn't do this, the up-front cost still applies, and it's worth enabling only the servers a project actually needs.

_Usage:_

"The agent needs to read tickets from Linear."

"Configure the harness to use the Linear MCP server — it exposes the Linear API as tools the agent can call. Saves you writing custom tool wrappers."
```
