---
description: Carries information forward. Sessions are stateful across turns; agents can be made stateful across sessions via a memory system.
---

Carries information forward. A [session](./Session.md) is stateful across [turns](./Turn.md) — [context](./Context.md) accumulates as the session runs, which is why long sessions drift into the [dumb zone](./Smart%20zone.md). An [agent](./Agent.md) can be made stateful across **sessions** by adding a [memory system](./Memory%20system.md) that persists information into the [environment](./Environment.md) and reloads it at the start of future sessions. The [model](./Model.md) is never stateful; any apparent continuity is the [harness](./Harness.md) re-feeding context. Counterpart to [stateless](./Stateless.md).

Where state lives at each layer:

| Layer       | Stateful?       | How                                                                                                                    |
| ----------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Model       | Never           | [Parameters](./Parameters.md) are frozen; it sees only what's in each request                                          |
| Session     | Across turns    | The harness appends every message and [tool result](./Tool%20result.md) to the context                                 |
| Harness     | Across sessions | Memory files, [AGENTS.md](./AGENTS.md.md), [handoff artifacts](./Handoff%20artifact.md) — written down, reloaded later |
| Environment | Always          | Files persist whether or not any session is running                                                                    |

Each layer's statefulness is built by re-reading something stored a layer below: the session feels continuous because the harness re-sends the message history to the stateless model, and the agent remembers across sessions because the harness re-loads files from the environment. No state is ever stored in the model itself.

State isn't always wanted. Everything carried forward influences what comes next, so a wrong assumption made early in a session is carried forward too. [Clearing](./Clearing.md) is the deliberate act of throwing session state away and starting from what's written down.

_Usage:_

"It remembered my preferences from yesterday — does that mean the model learned them?"

"No, the agent's stateful because the harness wrote them to a memory file and reloaded them at session start. The model itself saw nothing of yesterday."
