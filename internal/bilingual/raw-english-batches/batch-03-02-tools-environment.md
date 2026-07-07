# batch-03-02-tools-environment

Batch 7 of 14.

Curriculum section: Section 3 — Tools & Environment

Approximate English words: 1286

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term               | English source                        | Thai target                           | Words |
| ------------------ | ------------------------------------- | ------------------------------------- | ----: |
| Permission request | `dictionary/Permission request/en.md` | `dictionary/Permission request/th.md` |   361 |
| Permission mode    | `dictionary/Permission mode/en.md`    | `dictionary/Permission mode/th.md`    |   282 |
| Agent mode         | `dictionary/Agent mode/en.md`         | `dictionary/Agent mode/th.md`         |   341 |
| Sandbox            | `dictionary/Sandbox/en.md`            | `dictionary/Sandbox/th.md`            |   302 |

## Raw English

## Permission request

Source: `dictionary/Permission request/en.md`

Target: `dictionary/Permission request/th.md`

```md
---
description: What the harness shows the user before executing a tool call that isn't pre-approved. The mechanism for putting a human in the loop.
---

What the [harness](./Harness.md) shows the user before executing a [tool call](./Tool%20call.md) that isn't pre-approved. The [model](./Model.md) produces a tool call; instead of running it immediately, the harness pauses and asks. Approve and it runs; deny and the harness reports the denial back to the model as a [tool result](./Tool%20result.md). The mechanism by which a harness puts a human in the [loop](./Human-in-the-loop.md) for risky or sensitive actions.

The lifecycle of a permission request:

| Step | Who     | What happens                                                                            |
| ---- | ------- | --------------------------------------------------------------------------------------- |
| 1    | Model   | Produces a tool call                                                                    |
| 2    | Harness | Checks it against the [permission mode](./Permission%20mode.md) and any saved approvals |
| 3    | Harness | Pre-approved: executes immediately. Otherwise: pauses and shows the request             |
| 4    | User    | Approves once, approves for the rest of the [session](./Session.md), or denies          |
| 5    | Harness | Executes the call, or sends the denial back as a tool result                            |

Denying a request steers the agent. The model reads the denial like any other tool result and reacts to it — it tries a different approach, or asks what you'd prefer. Most harnesses let you attach a message to the denial, which turns the request into a steering point: "not like that, use the migration script instead" lands exactly when the model is deciding what to do next.

The cost is that every request is a synchronous wait on you. The [agent](./Agent.md) sits blocked until you answer, which is fine while you're watching and a problem when you're not — an agent that triggers requests constantly can't be left to work [AFK](./AFK.md). The permission mode is the dial: which calls run freely, which ask first, ideally with a [sandbox](./Sandbox.md) making it safe to widen the free set.

_Usage:_

"It's been blocked on a permission request for ten minutes — I was in a meeting."

"That's the cost of human-in-the-loop. Pre-approve the safe [tools](./Tool.md) so the request only fires on the actually-risky calls."
```

## Permission mode

Source: `dictionary/Permission mode/en.md`

Target: `dictionary/Permission mode/th.md`

```md
---
description: The permission-gating slice of an agent mode — which tool calls trigger a permission request and which run automatically.
---

The permission-gating slice of an [agent mode](./Agent%20mode.md) — which [tool calls](./Tool%20call.md) trigger a [permission request](./Permission%20request.md) and which run automatically. The original purpose of mode systems before [harnesses](./Harness.md) started bundling behavioral instructions on top.

Harnesses ship a ladder of these modes:

| Mode               | Reads | Writes & shell         | Typical use                                     |
| ------------------ | ----- | ---------------------- | ----------------------------------------------- |
| Read-only / plan   | Auto  | Blocked                | Research, planning, reviewing                   |
| Default            | Auto  | Ask                    | Day-to-day supervised work                      |
| Auto-edit          | Auto  | Edits auto, shell asks | Trusted repos, mechanical changes               |
| "Yolo" / full-auto | Auto  | Auto                   | [Sandboxes](./Sandbox.md), [AFK](./AFK.md) runs |

Choosing a rung is a trade between safety and interruption, and both failure modes are felt. Too tight, and you become the bottleneck: the [agent](./Agent.md) stops every few seconds for harmless reads, you click approve on autopilot, and the approvals stop meaning anything — rubber-stamping is the worst of both worlds, all the interruption with none of the protection. Too loose, and the agent edits files and runs commands you'd have wanted to see first.

The loose end is most defensible inside a sandbox, where the blast radius of a bad [tool](./Tool.md) call is contained. Outside one, most people settle on auto-approving reads and keeping a [human in the loop](./Human-in-the-loop.md) for anything irreversible.

_Usage:_

"It paused on every grep — totally killed the AFK run."

"Loosen the permission mode for read-only tools, keep prompting on writes and shell. Most permission requests on a research [session](./Session.md) are noise."
```

## Agent mode

Source: `dictionary/Agent mode/en.md`

Target: `dictionary/Agent mode/th.md`

```md
---
description: A preset bundling a permission mode with behavioral instructions injected into the system prompt. Can flip mid-session.
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---

A preset that shapes how the [agent](./Agent.md) operates at runtime — bundles a [permission mode](./Permission%20mode.md) with behavioral instructions injected into the [system prompt](./System%20prompt.md). Examples: a default that prompts on risky calls, a **plan mode** that blocks edits and steers the agent toward research, an **accept-edits** mode that auto-approves edits, a **bypass permissions** mode (colloquially **YOLO mode**) that auto-approves everything. Can flip [mid-session](./Session.md).

The bundling is what distinguishes a mode from a bare permission setting. A permission mode is only a gate: it decides which [tool calls](./Tool%20call.md) go through. A gate alone produces an agent that wants to edit but can't — it proposes the write, gets blocked, and tries another way. The injected instructions remove the want: plan mode doesn't just block edits, it tells the agent it's in a planning phase, so it reads, asks, and proposes instead of straining against the gate. Gate and steer point the same direction.

In practice, you change mode as your trust changes over the course of a task. The same task can pass through several modes: plan mode while the approach is still being shaped, the prompting default for the first delicate edits, accept-edits once the agent has shown it understands the change, bypass for an [AFK](./AFK.md) run inside a [sandbox](./Sandbox.md). Changing mode costs you nothing: the conversation continues exactly where it was, with new permissions and new instructions. If you find yourself approving every prompt without reading it, the mode is set tighter than your actual trust; if you keep rejecting edits, it's set looser.

_Vendor terms:_ Claude Code calls these "permission modes," Codex calls them "approval modes" — both predate behavioral bundling.

_Usage:_

"It keeps editing files when I just want a plan."

"Switch to plan mode — it'll block writes and stay in research."

"What about for the AFK run later?"

"Bypass mode, but only inside the sandbox."
```

## Sandbox

Source: `dictionary/Sandbox/en.md`

Target: `dictionary/Sandbox/th.md`

```md
---
description: An isolated environment the agent runs inside — container, VM, or restricted shell. Limits the blast radius of agent actions.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

An isolated [environment](./Environment.md) the [agent](./Agent.md) runs inside — a container, VM, ephemeral [filesystem](./Filesystem.md), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](./AFK.md) practical.

The sandbox and the [permission mode](./Permission%20mode.md) solve the same problem from opposite ends. Permissions ask before an action runs; a sandbox limits what the action can reach if it does run. Permissions need you running [in the loop](./Human-in-the-loop.md) — every prompt is an interruption — and a session that asks constantly is barely autonomous. A sandbox spends infrastructure instead of attention: the stronger the isolation, the fewer questions need asking.

Isolation comes in grades:

| Grade            | What it is                                                 | What it contains                           |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Restricted shell | OS-level confinement around each command                   | Writes outside the project, network access |
| Container        | Fresh filesystem, no credentials mounted, discarded after  | Anything the agent does to its own machine |
| VM / cloud       | A separate machine entirely, often provided by the harness | Everything, including kernel-level escapes |

What no sandbox contains: actions that leave it legitimately. An agent with your git credentials can push; one with network access can call production APIs. Decide what crosses the boundary before deciding how thick to make it.

_Usage:_

"I want to let it run [bypass-permissions](./Agent%20mode.md) overnight but I'm not ready for that."

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."
```
