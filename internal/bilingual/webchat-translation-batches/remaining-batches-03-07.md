# Webchat Thai Translation Package: Remaining Batches 03-07

Copy this whole Markdown file into an LLM webchat. The model should return
completed Thai `th.md` files for all assigned targets only.

## User Request

Translate or rewrite the assigned English AI vocabulary entries into natural
current Thai. Use the repository rules embedded below. Do not translate
literally. Keep technical English terms when Thai would sound forced.

Return output as separate Markdown blocks, one per target file, using this
format:

````text
FILE: dictionary/<Concept>/th.md
```md
---
term: <Thai or mixed display term>
description: <Thai description under 140 characters>
---

<Thai body>
```
````

Do not edit English source. Do not invent new facts. Preserve links to the
same concepts and link only the first useful occurrence.

## Combined Batch Metadata

Batches included: 9

Terms included: 45

Approximate English words: 13812

- batch-03-01-tools-environment: Environment, Filesystem, Tool, Tool call, Tool result, MCP
- batch-03-02-tools-environment: Permission request, Permission mode, Agent mode, Sandbox
- batch-04-01-failure-modes: Sycophancy, Hallucination, Parametric knowledge, Knowledge cutoff, Contextual knowledge, Attention relationship, Attention budget
- batch-04-02-failure-modes: Attention degradation, Smart zone
- batch-05-01-handoffs: Clearing, Handoff, Primary source, Secondary source, Handoff artifact, Spec, Ticket
- batch-05-02-handoffs: Compaction, Autocompact
- batch-06-01-memory-and-steering: Memory system, AGENTS.md, Progressive disclosure, Context pointer, Skill, Subagent
- batch-07-01-patterns-of-work: Human-in-the-loop, AFK, Automated check, Automated review, Human review, Vibe coding, Design concept
- batch-07-02-patterns-of-work: Grilling, Prototyping, DX, AX

## Embedded Translation Calibration

# Translation Calibration

This file is the shared calibration source for Thai work. Every human or AI
agent that writes, edits, or reviews Thai content must read this file before
working.

## Purpose

Thai is source content, not a late-stage README translation. Each Thai entry
should explain the same concept as the English entry, but it may use Thai
sentence structure, examples, and rhythm where that improves clarity.

## Tone

- Clear, direct, and practical.
- Technical, but readable by working developers and AI tool users.
- Plain rather than promotional.
- Not formal government Thai.
- Not slangy or jokey.
- Do not over-explain simple terms just because they are in Thai.

Use short paragraphs. Start each paragraph with a clear sentence. Keep the
existing English register: explain what happens, why it matters, and what to do.

## Hybrid Glossary Policy

Translate when Thai helps the reader understand. Keep English when the English
term is the working term in AI tooling, code, logs, APIs, or product UI. When in
doubt, keep the English technical term and explain it in Thai.

| English term           | Thai rendering         | Policy       | Notes                                    |
| ---------------------- | ---------------------- | ------------ | ---------------------------------------- |
| AI                     | AI                     | Keep English | Use as the normal term.                  |
| agent                  | agent                  | Keep English | Avoid forced translations like ตัวแทน.   |
| model                  | model                  | Keep English | Use โมเดล only if prose needs Thai flow. |
| prompt                 | prompt                 | Keep English | Common tool term.                        |
| token                  | token                  | Keep English | Explain in Thai when first introduced.   |
| context                | บริบท                  | Translate    | Use English when naming the term.        |
| context window         | context window         | Keep English | It is a technical unit.                  |
| tool call              | tool call              | Keep English | It describes a concrete agent action.    |
| tool result            | tool result            | Keep English | Pair with `tool call`.                   |
| inference              | การอนุมาน              | Translate    | Accept if it reads naturally.            |
| hallucination          | hallucination          | Keep English | Explain the failure in Thai.             |
| sandbox                | sandbox                | Keep English | Product/runtime term.                    |
| handoff                | handoff                | Keep English | Repository already treats it as a term.  |
| memory system          | ระบบความจำ             | Translate    | Keep English if referring to filename.   |
| permission request     | permission request     | Keep English | UI/action term.                          |
| progressive disclosure | progressive disclosure | Keep English | Explain in Thai.                         |

Glossary entries can be expanded during translation, but keep this file as the
single source of truth. Do not create competing glossary files.

## Entry Rules

- `term` in Thai frontmatter is the Thai display term.
- `description` must be short, concrete, and under 140 characters.
- Body text should normally be at least 200 words, matching the English content
  standard.
- Usage dialogue should sound like a real working exchange, not a literal
  sentence-by-sentence translation.
- Preserve useful tables, but translate column labels and cell prose when it
  helps readability.
- Link only the first occurrence of another concept in an entry.
- Prefer concept accuracy over literal translation.

## Link Rules

During migration, links should point to concepts rather than language-specific
files whenever the generator supports it. Until then, preserve existing links
and let the infrastructure agent update link handling in one pass.

For Thai prose, link text may be Thai, English, or mixed. Choose the phrase that
reads most naturally while pointing to the same concept.

## Good Thai Example

```md
---
term: บริบท
description: ข้อมูลที่ agent มีอยู่และเกี่ยวข้องกับงานในขณะนั้น
---

บริบทคือข้อมูลที่ [agent](./Agent.md) มีอยู่และเกี่ยวข้องกับงานตรงหน้า ไม่ใช่
ทุกอย่างที่เคยเกิดขึ้นใน session และไม่ใช่แค่จำนวน token ที่ยังเหลือใน
context window

ปัญหามักเกิดเมื่อ agent มีข้อมูลเยอะ แต่ข้อมูลสำคัญไม่ได้อยู่ในจุดที่ model
ใช้ตัดสินใจได้จริง มันอาจเดา API ผิด ใช้ schema เก่า หรือย้อนแย้งกับข้อสรุปที่
คุยกันไปแล้ว วิธีแก้ไม่ใช่ยัดข้อมูลเพิ่มเสมอไป แต่คือเลือกข้อมูลที่เกี่ยวข้อง
และเอาสิ่งรบกวนออก
```

Why it works: it keeps technical terms where useful, explains the failure mode,
and uses natural Thai syntax.

## Bad Thai Example

```md
บริบทคือพลังหลักที่ปลดล็อกคุณค่าทั้งหมดของ agent อย่างมหาศาล เมื่อคุณเข้าใจ
บริบท คุณจะสัมผัสได้ทันทีว่า AI coding กลายเป็นเรื่องง่ายแบบก้าวกระโดด
```

Why it fails: it is promotional, vague, and does not explain mechanism or
action.

## Review Checklist

- The Thai entry explains the same concept as English.
- Thai prose is natural and direct.
- Technical terms follow the glossary policy.
- Description is under 140 characters.
- Usage dialogue sounds realistic.
- Links point to the right concepts.
- Tables are readable in Thai.

## Embedded Thai Translation AI Brief

# Thai Translation AI Brief

Use this brief when assigning GPT-5.5 or another AI agent to translate or
rewrite Thai dictionary entries.

## Authority

`internal/TRANSLATION_CALIBRATION.md` is the source of truth for Thai tone,
hybrid glossary policy, entry rules, link rules, and review criteria. Read it
before writing Thai. If this brief and the calibration file disagree, follow the
calibration file.

Do not create a separate glossary. If a new term policy is needed, propose an
edit to `internal/TRANSLATION_CALIBRATION.md`.

## Translation Goal

Write Thai as source content for working developers and AI tool users. The Thai
entry should explain the same concept as the English entry, but it does not need
to follow English sentence order.

The result should sound like current, ordinary professional Thai:

- clear and direct;
- technical where needed, but not academic;
- practical, with mechanism and consequence made explicit;
- calm, not promotional;
- natural mixed Thai/English for AI tooling terms.

## มาตรฐานภาษาไทย

ให้เขียนเหมือนคนไทยสายเทคนิคอธิบายงานให้เพื่อนร่วมทีมฟัง: ชัด ตรง ใช้คำที่คน
ทำงานกับ AI tooling เห็นจริงในชีวิตประจำวัน และไม่พยายามแปลทุกคำให้เป็นไทยจน
ฝืนธรรมชาติ

หลักที่ต้องรักษา:

- ประโยคแรกของแต่ละย่อหน้าควรบอกแก่นให้ชัดก่อน แล้วค่อยอธิบายเหตุผลหรือผลที่
  ตามมา
- คำอย่าง `agent`, `prompt`, `token`, `tool call`, `sandbox`, `context window`
  ใช้ภาษาอังกฤษได้ตามปกติ ถ้าแปลแล้วทำให้ผู้อ่านต้องเดาความหมายใหม่
- คำอธิบายรอบ ๆ technical term ให้เป็นไทยที่อ่านลื่น ไม่ใช่แปลติดโครงประโยค
  อังกฤษ
- ตัวอย่างและ dialogue ให้ฟังเหมือนบทสนทนาในการทำงานจริง ไม่ใช่ประโยคสาธิตใน
  ตำรา
- น้ำเสียงต้องนิ่งและใช้งานได้จริง: ไม่ขายของ ไม่เล่นคำ ไม่ราชการ ไม่วัยรุ่นจน
  หลุดความน่าเชื่อถือ

รูปแบบที่ควรได้:

```md
บริบทคือข้อมูลที่ agent ใช้ตัดสินใจในงานตรงหน้า ไม่ใช่ทุกอย่างที่เคยเกิดขึ้นใน
session และไม่ใช่แค่จำนวน token ที่เหลือใน context window
```

รูปแบบที่ควรเลี่ยง:

```md
บริบทคือองค์ประกอบอันทรงพลังซึ่งช่วยปลดล็อกศักยภาพสูงสุดของปัญญาประดิษฐ์ในทุก
มิติการทำงาน
```

## What Good Output Feels Like

Thai readers should feel that the entry was written for them, not translated at
them. Keep the concept precise, but use Thai rhythm:

- Put the main point early.
- Prefer short paragraphs.
- Keep concrete AI tooling terms in English when that is how users see them in
  code, logs, API docs, product UI, or repository files.
- Translate surrounding explanation into Thai so the sentence flows naturally.
- Preserve examples, tables, and usage dialogue only when they still help.
- Rewrite dialogue so it sounds like a real working conversation.

## Avoid

- literal word-by-word translation;
- government-formal Thai;
- marketing tone;
- cute or slangy phrasing;
- forced Thai for established technical terms such as `agent`, `prompt`,
  `token`, `tool call`, `sandbox`, or `context window`;
- adding claims that are not supported by the English source;
- hiding uncertainty behind vague phrases.

## Input Contract

Each raw-English batch contains:

- curriculum section and batch metadata;
- exact English source paths;
- exact Thai output target paths;
- full `en.md` content for each assigned concept.

Use only the assigned English entries as concept source unless the batch asks
for more context. Do not edit English files in a translation batch.

## Output Contract

For each assigned concept, write one file:

```text
dictionary/<Concept>/th.md
```

Each `th.md` file must include YAML frontmatter:

```yaml
---
term: <Thai or mixed display term>
description: <Thai description under 140 characters>
---
```

The body should normally be at least 200 words, excluding frontmatter, unless
the English source is intentionally shorter. Preserve first-link-only behavior:
link another concept only on its first useful occurrence.

## Review Before Handoff

Check every file against this list:

- Same concept meaning as English.
- Natural Thai for current Thai technical readers.
- Hybrid glossary follows `internal/TRANSLATION_CALIBRATION.md`.
- `description` is concrete and under 140 characters.
- Links point to the right concepts.
- Tables and dialogue read naturally.
- No unrelated English edits.

Leave a short handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Raw English Batches

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

---

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

---

# batch-04-01-failure-modes

Batch 8 of 14.

Curriculum section: Section 4 — Failure Modes

Approximate English words: 2194

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                   | English source                            | Thai target                               | Words |
| ---------------------- | ----------------------------------------- | ----------------------------------------- | ----: |
| Sycophancy             | `dictionary/Sycophancy/en.md`             | `dictionary/Sycophancy/th.md`             |   255 |
| Hallucination          | `dictionary/Hallucination/en.md`          | `dictionary/Hallucination/th.md`          |   340 |
| Parametric knowledge   | `dictionary/Parametric knowledge/en.md`   | `dictionary/Parametric knowledge/th.md`   |   313 |
| Knowledge cutoff       | `dictionary/Knowledge cutoff/en.md`       | `dictionary/Knowledge cutoff/th.md`       |   211 |
| Contextual knowledge   | `dictionary/Contextual knowledge/en.md`   | `dictionary/Contextual knowledge/th.md`   |   365 |
| Attention relationship | `dictionary/Attention relationship/en.md` | `dictionary/Attention relationship/th.md` |   418 |
| Attention budget       | `dictionary/Attention budget/en.md`       | `dictionary/Attention budget/th.md`       |   292 |

## Raw English

## Sycophancy

Source: `dictionary/Sycophancy/en.md`

Target: `dictionary/Sycophancy/th.md`

```md
---
description: Confidently agreeable model output. Caused by training that shaped the model to favor answers humans liked — including agreement.
---

Confidently agreeable [model](./Model.md) output. Caused by [training](./Training.md): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

_Surfaces as:_

- _Caving under pushback_ — reverses a correct answer when you say "are you sure?".
- _Praising bad input_ — agrees your broken plan is brilliant before analysing it.
- _Biased framing_ — review skews positive when you signal you wrote it; negative when you signal someone else did. Same artifact, different verdict.
- _Mimicry_ — repeats your mistakes back to you as confirmation.

_Diagnostic test:_ would the model have said this without your steer? If the only thing that changed was your tone or framing, it's sycophancy, not a real shift in analysis.

_Fix:_ hide your preferences. Phrase prompts neutrally — "review this code" not "is this code good?".

_Avoid:_ using "sycophancy" for any wrong answer that happens to please you. Without the diagnostic test, the term has no more value than "wrong."

_Usage:_

"It said my refactor plan looked great, then I asked 'are you sure?' and it walked the whole thing back."

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](./Clearing.md) and re-ask without signalling either way."
```

## Hallucination

Source: `dictionary/Hallucination/en.md`

Target: `dictionary/Hallucination/th.md`

```md
---
description: "Confidently-wrong model output. Two flavors: factuality (invented facts) and faithfulness (drift from loaded context)."
---

Confidently-wrong [model](./Model.md) output. Two flavors with different causes and fixes:

| Flavor         | What goes wrong                                                                                                        | Cause                                                                                                                | Fix                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Factuality_   | Invented or wrong facts about the world — a function that doesn't exist, a wrong API signature, a fake citation        | [Parametric knowledge](./Parametric%20knowledge.md) gaps, often past the [knowledge cutoff](./Knowledge%20cutoff.md) | Load the right [contextual knowledge](./Contextual%20knowledge.md) |
| _Faithfulness_ | Output drifts from the contextual knowledge that's loaded, the user's instructions, or the model's own prior reasoning | [Attention degradation](./Attention%20degradation.md); worsens in the [dumb zone](./Smart%20zone.md)                 | [Clear](./Clearing.md) or [compact](./Compaction.md)               |

[Next-token prediction](./Next-token%20prediction.md) produces fluent output whether or not the underlying fact is real — the model has no internal signal that it doesn't know something, so an invented method arrives in the same assured register as a correct one. Hallucinated code is plausible by construction: it's what the API _would_ look like if it existed, which is exactly what makes it slip past a skim-level review and fail only when run.

You need to know which flavor you're looking at, because the fix for one makes the other worse. Factuality means missing knowledge: the fix is adding context — the docs, the type definitions, the file. Faithfulness means the knowledge is present but losing the competition for attention: the fix is removing context. Misdiagnose faithfulness as factuality and you paste in more docs, which grows the context and makes the drift worse. When the agent gets something wrong, check whether the correct information was already in context before deciding which problem you have.

_Avoid:_ "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

_Usage:_

"It hallucinated a `parseAsync` method on the schema."

"Factuality or faithfulness?"

"The method exists in the docs I pasted — it just stopped reading them after [turn](./Turn.md) forty."

"Faithfulness then. Compact and reload, don't bother adding more docs."
```

## Parametric knowledge

Source: `dictionary/Parametric knowledge/en.md`

Target: `dictionary/Parametric knowledge/th.md`

```md
---
description: What the model knows from training, stored in its parameters. Frozen at training time. Counterpart to contextual knowledge.
---

What the [model](./Model.md) "knows" from [training](./Training.md), stored in its [parameters](./Parameters.md). Frozen at training time — the model can't see its own parameters or update them. Detail is lost in the squeeze: billions of facts cram into a fixed number of parameters, and the rare ones blur. Source of fluency on common topics, and of fabrication on uncommon ones. Counterpart to [contextual knowledge](./Contextual%20knowledge.md).

Parametric knowledge is not stored as facts. Training never gives the model a database to look things up in; it adjusts parameters until the model predicts text well, and a model that predicts text about a topic well behaves as if it knows the topic. How reliable the knowledge is tracks how often something appeared in the training data: a topic with millions of examples is reproduced accurately, for a topic with only a handful, the model guesses based on what similar topics look like. Reproducing and guessing are the same process to the model, so it can't tell which one it's doing. A fabricated answer arrives with the same fluency as a correct one. [Hallucination](./Hallucination.md) is the model guessing wrong.

Parametric knowledge also ages. The parameters stop changing at the [knowledge cutoff](./Knowledge%20cutoff.md), so a library released or renamed after that date doesn't exist in them, and an API that changed is remembered in its old form.

For both gaps — too rare and too recent — the remedy is the same: the knowledge can't be added to the parameters, so it has to be supplied as contextual knowledge instead.

_Usage:_

"It writes flawless React but invents methods on our internal SDK."

"React is dense in the parametric knowledge — millions of training examples. Your SDK isn't, so the model fills in plausible-looking shapes. Load the SDK docs into [context](./Context.md)."
```

## Knowledge cutoff

Source: `dictionary/Knowledge cutoff/en.md`

Target: `dictionary/Knowledge cutoff/th.md`

```md
---
description: The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded.
---

The date past which a [model](./Model.md) has no [parametric knowledge](./Parametric%20knowledge.md). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](./Contextual%20knowledge.md). Each model release ships with its own cutoff.

The cutoff exists because of how models are made: [training](./Training.md) bakes a snapshot of text into the model's [parameters](./Parameters.md), and after that the parameters are frozen. The model doesn't know its knowledge has an edge — asked about something past the cutoff, it doesn't refuse, it extrapolates from the nearest thing it does know. That's what makes the trap quiet: code written against an old version of a library looks plausible, often compiles, and fails on the parts that changed.

The fix is always the same: get current information into [context](./Context.md). Load the changelog, point at the installed version's type definitions, or have the agent read the docs from the web. Anything in context outranks nothing-in-parameters.

_Usage:_

"It keeps writing the v3 SDK syntax — we're on v5."

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."
```

## Contextual knowledge

Source: `dictionary/Contextual knowledge/en.md`

Target: `dictionary/Contextual knowledge/th.md`

```md
---
description: Facts the agent can read directly from the context right now. Counterpart to parametric knowledge.
---

Facts the [agent](./Agent.md) can read directly from the [context](./Context.md) right now — the user's task, files the agent has read in, [tool results](./Tool%20result.md), [AGENTS.md](./AGENTS.md.md) content loaded at [session](./Session.md) start. Counterpart to [parametric knowledge](./Parametric%20knowledge.md): parametric is _recalled_ from the parameters; contextual is _read_ from the [window](./Context%20window.md). [Hallucinations](./Hallucination.md) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

Of the two kinds of knowledge, only contextual knowledge is in your control. The parameters are frozen, so the only way to give the [model](./Model.md) knowledge it lacks — an internal SDK, a library released after the [knowledge cutoff](./Knowledge%20cutoff.md), a decision made yesterday — is to put it in the context. A lot of practical [AI](./AI.md) coding work reduces to this: getting the right facts in front of the model at the moment it needs them.

When contextual and parametric knowledge conflict, the contextual usually wins. Paste the current API docs and the model follows them rather than its stale memory of the old API — though the old version can still bleed through, especially deep into a long session. If the agent keeps reverting to an outdated pattern despite the docs being loaded, that's parametric knowledge leaking past the contextual; restating the correction or moving it closer to the work helps.

Unlike parametric knowledge, contextual knowledge costs something to use. Everything loaded into the window spends [tokens](./Token.md) and competes for the model's [attention budget](./Attention%20budget.md), so loading more is not automatically better — the aim is the relevant facts in the window, not all the facts.

_Reach for this term_ only when contrasting with parametric knowledge; otherwise just say **context**.

_Avoid:_ "working memory" — contextual knowledge is what's in the window _now_; a [memory system](./Memory%20system.md) is what gets cross-session content into it. Different scales, don't conflate.

_Usage:_

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."
```

## Attention relationship

Source: `dictionary/Attention relationship/en.md`

Target: `dictionary/Attention relationship/th.md`

```md
---
description: The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these.
---

When predicting each [token](./Token.md), the [model](./Model.md) factors in every other token in the [context](./Context.md) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

The pairings are where the model's apparent understanding lives. When it resolves a pronoun, it's because the attention relationship between "her" and "Sarah" is strong. When it calls a function with the right arguments, the relationship between the call site and the definition it read earlier is doing the work. None of this is looked up — it's computed fresh on every [model provider request](./Model%20provider%20request.md), for every pair.

The N² figure is worth sitting with, because it grows faster than intuition suggests:

| Context size   | Pairings (~N²) |
| -------------- | -------------- |
| 1,000 tokens   | ~1 million     |
| 10,000 tokens  | ~100 million   |
| 100,000 tokens | ~10 billion    |

Each pairing is also computed more than once. Models have multiple attention heads — exact counts for frontier models are unpublished, but fifty to a hundred is a reasonable guess — and each head computes its own version of every relationship. So every pairing in the table above is duplicated across every head. That's a lot of pairings.

Only a small number of these relationships matter for any given task. The pairing between your instruction and the code it governs is one of a handful that count; almost everything else in the pool is noise. And the two grow at different rates: the relationships that matter stay roughly constant, while the total pool grows quadratically with context size. At 1,000 tokens, the pairing you care about is one in a million; at 100,000 tokens, it's one in ten billion. This is the arithmetic underneath the [attention budget](./Attention%20budget.md), and [attention degradation](./Attention%20degradation.md) is what it feels like when the relationships that matter get too thin a share.

_Usage:_

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](./Smart%20zone.md)."

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."
```

## Attention budget

Source: `dictionary/Attention budget/en.md`

Target: `dictionary/Attention budget/th.md`

```md
---
description: Each token has a finite amount of influence to distribute across the rest of the context. Per-token, doesn't grow when context does.
---

Each [token](./Token.md) has a finite amount of influence to distribute across the rest of the [context](./Context.md). Heavy influence on [one relationship](./Attention%20relationship.md) leaves less for others. The budget is per-token and doesn't grow when the context does, which is why long [sessions](./Session.md) dilute.

Think of it as signal and noise. Your instruction is a signal at fixed volume; every other token in the [context window](./Context%20window.md) is competing sound. The instruction never gets quieter — it's still there, character for character — but as the context grows, the room gets louder around it, and the signal-to-noise ratio drops. An instruction that was the loudest thing at 10k tokens of context is background hum at 150k. This is the mechanism behind [attention degradation](./Attention%20degradation.md): the model doesn't forget; the signal gets lost in the noise.

The symptom reads as disobedience — the agent agreed to a constraint early on and then drifts from it, and re-pasting the constraint helps only briefly. The cause isn't the instruction; it's everything else in the window competing with it.

What you can control is what goes into the context. Content that doesn't serve the task isn't neutral — it's noise over everything that does. Keep the window small, [clear](./Clearing.md) when the accumulated context stops paying for itself, and restate the constraints that matter instead of trusting their early mention to hold.

_Usage:_

"Why does it keep ignoring the schema I pasted at the top?"

"We're well into the [dumb zone](./Smart%20zone.md) — every token's attention budget is fixed, but the context kept growing. The signal on the schema is now competing with thousands of newer tokens."
```

---

# batch-04-02-failure-modes

Batch 9 of 14.

Curriculum section: Section 4 — Failure Modes

Approximate English words: 639

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                  | English source                           | Thai target                              | Words |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ----: |
| Attention degradation | `dictionary/Attention degradation/en.md` | `dictionary/Attention degradation/th.md` |   261 |
| Smart zone            | `dictionary/Smart zone/en.md`            | `dictionary/Smart zone/th.md`            |   378 |

## Raw English

## Attention degradation

Source: `dictionary/Attention degradation/en.md`

Target: `dictionary/Attention degradation/th.md`

```md
---
description: As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks.
---

As a [session](./Session.md) grows, each [token](./Token.md)'s [attention budget](./Attention%20budget.md) is spread across more competitors. The signal on any one [meaningful relationship](./Attention%20relationship.md) shrinks; noise from irrelevant [context](./Context.md) crowds in. Same [model](./Model.md), same [parameters](./Parameters.md) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](./Smart%20zone.md).

It presents as the model getting worse mid-session: constraints it followed for an hour start slipping, it re-asks things it was told, it writes code that ignores a file it read earlier. Nothing about the model changed — the only variable is how much context it's now attending over.

It's gradual, which is what makes it hard to catch from inside the session. There's no error and no threshold; each [turn](./Turn.md) is only slightly worse than the last, and by the time the slips are obvious you've been in the dumb zone for a while.

You recover by removing context, not adding more. Re-pasting the ignored instruction adds another competitor to the same crowded window and helps only briefly. What works: [clear](./Clearing.md) and reload only what the task needs, or [compact](./Compaction.md), or [hand off](./Handoff.md) to a fresh session. Treat declining instruction-following as a signal about context length, not about the model.

_Usage:_

"It's deep in the dumb zone — inventing generics that aren't in the type file."

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. Clear and reload."
```

## Smart zone

Source: `dictionary/Smart zone/en.md`

Target: `dictionary/Smart zone/th.md`

```md
---
description: "Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes."
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

Early in a [session](./Session.md) the [agent](./Agent.md) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more faithfulness [hallucinations](./Hallucination.md). Same [model](./Model.md), same [harness](./Harness.md) — just more [context](./Context.md). The felt effect of [attention degradation](./Attention%20degradation.md). On frontier models, the dumb zone commonly begins around 125K-150K [tokens](./Token.md) — though this is debated. [Clear](./Clearing.md) or [compact](./Compaction.md) when the session bloats; don't push through.

The decline is gradual, which makes it easy to miss. There's no error message and no visible boundary; the agent just starts performing slightly worse, then noticeably worse. Common signs: it forgets an instruction you gave twenty turns ago, repeats a mistake it had already corrected, or confidently asserts something the context contradicts. Because the slide is smooth, the usual response is to push through and re-explain — which adds more context and makes the problem worse.

The zones don't track the [context window](./Context%20window.md) limit. A session can be deep in the dumb zone with most of the window still free: the limit is where the harness refuses to continue, but quality falls off long before that. Plan around the smart zone, not the window — the practical budget for a task is the tokens the agent works well within, not the tokens it can technically hold.

The smart zone is a budget, and unrelated work spends it. Every task done in a session uses up tokens, so starting a second task in the same session means starting it closer to the dumb zone. Doing one task per session gives each task the sharpest part of the session. When a single task is bigger than one smart zone, split it: [hand off](./Handoff.md) or compact at a natural boundary, and let a fresh session do the next piece.

_Usage:_

"It nailed the first three components and just butchered the fourth."

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."
```

---

# batch-05-01-handoffs

Batch 10 of 14.

Curriculum section: Section 5 — Handoffs

Approximate English words: 2080

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term             | English source                      | Thai target                         | Words |
| ---------------- | ----------------------------------- | ----------------------------------- | ----: |
| Clearing         | `dictionary/Clearing/en.md`         | `dictionary/Clearing/th.md`         |   258 |
| Handoff          | `dictionary/Handoff/en.md`          | `dictionary/Handoff/th.md`          |   277 |
| Primary source   | `dictionary/Primary source/en.md`   | `dictionary/Primary source/th.md`   |   290 |
| Secondary source | `dictionary/Secondary source/en.md` | `dictionary/Secondary source/th.md` |   371 |
| Handoff artifact | `dictionary/Handoff artifact/en.md` | `dictionary/Handoff artifact/th.md` |   339 |
| Spec             | `dictionary/Spec/en.md`             | `dictionary/Spec/th.md`             |   290 |
| Ticket           | `dictionary/Ticket/en.md`           | `dictionary/Ticket/th.md`           |   255 |

## Raw English

## Clearing

Source: `dictionary/Clearing/en.md`

Target: `dictionary/Clearing/th.md`

```md
---
description: Ending the current session and starting a fresh one. The next message begins with an empty session and an empty context window.
---

Ending the current [session](./Session.md) and starting a fresh one. The next message begins with an empty session and an empty [context window](./Context%20window.md). Usually user-driven.

Clearing is the cure for a polluted context. A session accumulates everything: failed attempts, wrong turns, stale [tool results](./Tool%20result.md), abandoned plans. The [model](./Model.md) re-reads all of it on every [turn](./Turn.md), and bad history drags on new work. Deep into a long session the [agent](./Agent.md) gets vaguer and less obedient — instructions you gave clearly get ignored, quality slips, and prodding it to do better doesn't help, because the noise it's wading through is still in its [context](./Context.md). Clearing removes the noise.

Clearing doesn't erase the conversation. Most [harnesses](./Harness.md) keep session history on your computer, so the transcript is still there to read or resume. What's gone is the agent's working state: the model is [stateless](./Stateless.md), so the new session knows nothing the old one knew. If the session holds decisions or progress the next one will need, have the agent write a [handoff artifact](./Handoff%20artifact.md) first, then start the new session by pointing at it.

Compare [compaction](./Compaction.md), which summarises the session into the new context instead of starting empty. Clearing is the blunter tool: nothing carries over, including the junk.

_Usage:_

"It's stuck looping on the failing test."

"Just clear it — start a fresh session with the plan doc and the test file. No point fighting the existing context."
```

## Handoff

Source: `dictionary/Handoff/en.md`

Target: `dictionary/Handoff/th.md`

```md
---
description: Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others.
---

Transferring [agent](./Agent.md) [context](./Context.md) from one [session](./Session.md) to another. The carry mechanism varies — a written [handoff artifact](./Handoff%20artifact.md), an in-memory summary ([compaction](./Compaction.md)), and others. Distinct from [clearing](./Clearing.md) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](./AFK.md) run, fanning out to parallel sessions, or freeing up [context window](./Context%20window.md) room.

The receiving session starts with zero context — the [model](./Model.md) is [stateless](./Stateless.md), and nothing from the old session is visible to the new one. Whatever the next session needs has to be carried explicitly; everything else is gone. "No return path" is the constraint that shapes the carry: the new session can't ask the old one what it meant, so the carried material has to stand on its own.

| Mechanism        | Form                                        | Properties                                                                               |
| ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Handoff artifact | File in the [environment](./Environment.md) | You can read and correct it before anything depends on it; reusable across many sessions |
| Compaction       | Summary in the context window               | Automatic and cheap; harder to inspect; feeds one successor                              |

The visible failure of a bad handoff is relitigation: the new session re-opens decisions the old one had settled, because the carry recorded what was decided but not why. Judge a handoff by what a session with zero context could do with it.

_Usage:_

"Planning session is getting heavy — should I just keep going?"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."
```

## Primary source

Source: `dictionary/Primary source/en.md`

Target: `dictionary/Primary source/th.md`

```md
---
description: The thing itself — code, transcripts, raw data. Complete and authoritative, but expensive to load into context.
---

A source of truth in its original form — the code, the conversation transcript, the raw log, the actual API response. Not an account of the thing; the thing. Counterpart to [secondary source](./Secondary%20source.md).

If you want to know what your codebase does, the code is the primary source. The docs, the architecture diagram, and the README are all descriptions of it — accurate when written, on their own schedule ever since. When an [agent](./Agent.md) confidently asserts something wrong about your project, the question to ask is which source it was working from: an agent that read a doc inherits the doc's staleness; an agent that read the code is reading the current truth.

The cost is what keeps primary sources from being the default. Loading one into the [context window](./Context%20window.md) is expensive — the full file, the full transcript, every [token](./Token.md) billed as [input](./Input%20tokens.md) and competing for [attention budget](./Attention%20budget.md). What you get for the cost is completeness: nothing has been pre-filtered by someone else's judgement about what mattered. A summary written last month can't contain the detail that turned out to matter today; the primary source still does.

Reach for the primary source when precision matters — the exact signature, the actual error, the line that throws. Much of managing [context](./Context.md) is deciding when to pay for the primary source and when a secondary source is good enough.

_Usage:_

"The agent says the retry logic backs off exponentially, but I'm watching it hammer the endpoint."

"It read that out of the design doc. Point it at the actual retry module — work from the primary source when the behaviour matters."
```

## Secondary source

Source: `dictionary/Secondary source/en.md`

Target: `dictionary/Secondary source/th.md`

```md
---
description: An account of a primary source, one step removed — summaries, docs, compaction summaries. Cheap to load, lossy by construction.
---

An account of a [primary source](./Primary%20source.md), one step removed — documentation describing code, a summary describing a transcript, a report describing search results. Cheaper to load into the [context window](./Context%20window.md) than the source it describes, and lossy by construction: whoever wrote it decided what mattered, and whatever they dropped is invisible to a reader who only has the summary.

A lot of [context](./Context.md) engineering is the manufacture of secondary sources. [Compaction](./Compaction.md) turns the [session](./Session.md) history into a summary that seeds the next session. A [subagent](./Subagent.md) burns its own context on a noisy search and returns a short report. A [handoff artifact](./Handoff%20artifact.md) condenses a session's decisions into a document the next session reads. [Memory systems](./Memory%20system.md) distil what a session learned into notes. Each makes the same trade: fidelity for headroom.

Secondary sources fail in two ways. They're lossy — the compaction summary that lost the schema decision, the report that didn't mention the edge case. And they drift — the primary source changes and the account doesn't follow, so docs describe last quarter's architecture with this quarter's confidence. When an [agent](./Agent.md) acts on a secondary source that has failed either way, it works confidently from wrong information; the fix is sending it back to the primary source.

Neither failure makes secondary sources a mistake. The context window is finite, and primary sources are expensive; without summaries, reports, and handoff documents, nothing large fits. The skill is knowing which details can survive the loss — and verifying against the primary source when one can't. A well-made secondary source carries a [context pointer](./Context%20pointer.md) back to its original — the summary that names the transcript it came from, the doc that names the file it describes — so when the account isn't enough, the reader can follow the pointer rather than work from the loss.

_Usage:_

"The handoff doc says auth is done, but the new session keeps finding broken token refresh."

"The doc's a secondary source — the last session wrote down what it believed, not what's true. Have the new session run the auth tests and trust the primary source."
```

## Handoff artifact

Source: `dictionary/Handoff artifact/en.md`

Target: `dictionary/Handoff artifact/th.md`

```md
---
description: A document used as the carry mechanism for a handoff — written by one session to be read by another.
---

A document used as the carry mechanism for a [handoff](./Handoff.md) — written to the [environment](./Environment.md) by one [session](./Session.md) to be read by another. [Specs](./Spec.md), [tickets](./Ticket.md), and plan docs are all handoff artifacts.

The reason to write one: the [model](./Model.md) is [stateless](./Stateless.md), so nothing in a session survives [clearing](./Clearing.md) it. Decisions, constraints, half-finished plans — all gone with the [context](./Context.md) that held them. The environment persists. Writing the important state into a file moves it somewhere the next session can read it back from.

The artifact is a [secondary source](./Secondary%20source.md) — an account of the session's work, not the work itself. That's what makes it small enough to brief a fresh session, and also why it can mislead one: it records what the writing session believed, and anything it left out or got wrong is invisible to the reader. Where a claim matters, the next session should verify it against the [primary source](./Primary%20source.md) — the code, the tests — rather than inherit it.

A good artifact is written to be read into a session that has zero context. Concrete file paths rather than "the file we discussed". What was decided and why, so the next session doesn't relitigate it. What's done and what's left. It helps to tell the writing session where the artifact is headed: "write a handoff doc for a fresh session that knows nothing about this work".

The alternative carry mechanism is [compaction](./Compaction.md), which summarises in-memory. The artifact has two advantages: it lives on disk where you can read and correct it before anything depends on it, and it can be reused — the same spec can brief five parallel sessions.

_Usage:_

"How do I split this between the planning [agent](./Agent.md) and the implementing one?"

"Have the planner write a handoff artifact — file paths, decisions, constraints. The implementer's session opens with a pointer to the artifact and works from it as its brief."
```

## Spec

Source: `dictionary/Spec/en.md`

Target: `dictionary/Spec/th.md`

```md
---
description: A handoff artifact describing a multi-session piece of work — what's being built, not how each session does its share. Made of tickets.
---

A [handoff artifact](./Handoff%20artifact.md) describing a multi-[session](./Session.md) piece of work — what's being built, not how each session does its share. Mutates as work progresses. Made of [tickets](./Ticket.md).

The spec exists because sessions are disposable and big work isn't. Anything that takes more than one [context window](./Context%20window.md) of effort needs a home outside the [context](./Context.md) — somewhere in the agent's [environment](./Environment.md) that survives [clearing](./Clearing.md), whether that's a file in the repo, a GitHub issue, or an issue tracker the agent can reach. The spec is that home: the goal, the constraints, the decisions made so far, and the list of tickets with their status. Any fresh session can read it and know where the work stands without inheriting the previous session's accumulated noise.

Specs come in recognisable styles, mostly inherited from how teams already write things down. A _product requirements document_ (PRD) leans toward the user-facing what and why — features, behaviour, acceptance criteria. A _design doc_ or _RFC_ leans technical — the chosen approach, the alternatives rejected, the trade-offs. At the small end, a plain `plan.md` with a checklist of tickets does the same job for a multi-session feature. The style matters less than the role: for the [agent](./Agent.md), each of these is the same thing — the durable statement of intent it reads at the start of every session.

_Usage:_

"Should this all be one session?"

"No, write it up as a spec — break it into tickets, run each one in its own session. Trying to do the whole thing in a single context will hit the [dumb zone](./Smart%20zone.md) before you're halfway."
```

## Ticket

Source: `dictionary/Ticket/en.md`

Target: `dictionary/Ticket/th.md`

```md
---
description: A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets.
---

A [handoff artifact](./Handoff%20artifact.md) scoping one [session](./Session.md) of work. Stands alone, or hangs off a [spec](./Spec.md) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

The defining constraint is the size: one session. A ticket should be completable before the session drifts out of the [smart zone](./Smart%20zone.md) — and that constraint is testable. If sessions on your tickets routinely degrade before the work is done, the tickets are too big; split them. If each session spends most of its [context](./Context.md) on setup before doing five minutes of work, they're too small; merge them.

A good ticket is written for a reader with no other context. The goal, the acceptance criteria, and [context pointers](./Context%20pointer.md) to the relevant files and decisions — enough that the session can start working without re-deriving what the last one knew.

The dependency graph is also what unlocks parallelism. Independent tickets — the leaves of the graph — can each run in their own session at the same time. This is an effective way of running multiple agents at once.

_Usage:_

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."
```

---

# batch-05-02-handoffs

Batch 11 of 14.

Curriculum section: Section 5 — Handoffs

Approximate English words: 553

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
| Compaction  | `dictionary/Compaction/en.md`  | `dictionary/Compaction/th.md`  |   277 |
| Autocompact | `dictionary/Autocompact/en.md` | `dictionary/Autocompact/th.md` |   276 |

## Raw English

## Compaction

Source: `dictionary/Compaction/en.md`

Target: `dictionary/Compaction/th.md`

```md
---
description: A handoff done in-memory: the previous session's history is summarised and seeds a fresh session. Lossy — detail traded for headroom.
---

A [handoff](./Handoff.md) done in-memory: the previous [session](./Session.md)'s history is summarised, and the summary seeds a fresh session. Lossy by design: the transcript is a [primary source](./Primary%20source.md), the summary a [secondary source](./Secondary%20source.md) — detail traded for headroom. Triggered manually by the user, or automatically via [autocompact](./Autocompact.md).

The mechanism: the [context window](./Context%20window.md) is finite, and a long session fills it — every [tool result](./Tool%20result.md), every file read, every wrong turn stays in history. When it gets heavy, the [harness](./Harness.md) asks the [model](./Model.md) to summarise the session, throws the original history away, and seeds a fresh session with the summary. Whatever didn't make it into the summary is gone from the context. Some harnesses soften this by keeping the old transcript on disk and leaving a [context pointer](./Context%20pointer.md) to it in the summary — the secondary source links back to its primary source, so a detail the summary lost can be recovered by re-reading the original.

The summary is written by the model, so it can be prompted. "Preserve the schema decisions" makes the generated artifact more deliberate. Timing matters too — compact at a phase boundary, after the plan is settled, not mid-task.

Contrast with [clearing](./Clearing.md), which drops everything and starts cold: compaction tries to carry the essentials across; clearing bets they're already written down somewhere better.

_Usage:_

"[Context](./Context.md)'s getting heavy and I still have the test pass to do."

"Compact before you start — write what must survive into the summary prompt so the new session keeps the schema decisions and drops the exploration."
```

## Autocompact

Source: `dictionary/Autocompact/en.md`

Target: `dictionary/Autocompact/th.md`

```md
---
description: Compaction triggered automatically by the harness when the context window approaches full.
---

[Compaction](./Compaction.md) triggered automatically by the [harness](./Harness.md) when the [context window](./Context%20window.md) approaches full.

The harness watches how full the context window is. When it crosses a threshold — often around 80% — it pauses, asks the [model](./Model.md) to summarise the [session](./Session.md) so far, and seeds a fresh session with the summary. Work then continues as if nothing happened.

Except something did happen. Compaction is lossy, and autocompact is lossy at a moment you didn't choose. A manual compact happens at a phase boundary, when you can tell the model what to preserve. Autocompact fires mid-task, whenever the threshold is hit — possibly halfway through a refactor, with the summary deciding for itself which of your decisions were worth keeping. The classic symptom: the [agent](./Agent.md) carries on confidently but has quietly forgotten a constraint you established an hour ago, and you only notice when its work starts contradicting it.

The defence is to not let it fire. Watch the context indicator and compact manually at a natural boundary, or write decisions into a plan doc or [handoff artifact](./Handoff%20artifact.md) on disk, where no summary can lose them. Most harnesses also let you customise the buffer — moving the threshold earlier or later, or turning autocompact off entirely — so you can tune how much headroom you keep before it fires.

_Usage:_

"It doesn't seem to remember what we decided about the schema earlier."

"Autocompact fired between [turns](./Turn.md) — the early decisions got summarised and we must have lost something. Reload the plan doc, or compact manually next time so you control what gets kept."
```

---

# batch-06-01-memory-and-steering

Batch 12 of 14.

Curriculum section: Section 6 — Memory and Steering

Approximate English words: 1718

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                   | English source                            | Thai target                               | Words |
| ---------------------- | ----------------------------------------- | ----------------------------------------- | ----: |
| Memory system          | `dictionary/Memory system/en.md`          | `dictionary/Memory system/th.md`          |   263 |
| AGENTS.md              | `dictionary/AGENTS.md/en.md`              | `dictionary/AGENTS.md/th.md`              |   304 |
| Progressive disclosure | `dictionary/Progressive disclosure/en.md` | `dictionary/Progressive disclosure/th.md` |   258 |
| Context pointer        | `dictionary/Context pointer/en.md`        | `dictionary/Context pointer/th.md`        |   365 |
| Skill                  | `dictionary/Skill/en.md`                  | `dictionary/Skill/th.md`                  |   275 |
| Subagent               | `dictionary/Subagent/en.md`               | `dictionary/Subagent/th.md`               |   253 |

## Raw English

## Memory system

Source: `dictionary/Memory system/en.md`

Target: `dictionary/Memory system/th.md`

```md
---
description: A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start.
---

A system that attempts to make an [agent](./Agent.md) [stateful](./Stateful.md) across [sessions](./Session.md). Persists information into the [environment](./Environment.md) during a session and reloads it into the [context window](./Context%20window.md) at the start of future ones, so the agent carries continuity beyond the user [clearing](./Clearing.md) the session.

A memory system has two halves. The write path: during a session, the agent records what it learned — a preference you stated, a fact about the project — as files in the environment. The read path: at session start, the [harness](./Harness.md) loads those files, or an index of them, back into the context window. Many harnesses ship their own memory system — Claude Code's `/memory` is one — but you can also build one yourself: a directory of notes plus an instruction in [AGENTS.md](./AGENTS.md.md) to consult it.

The same trade-offs as any always-loaded content apply. Memories accumulate, so most systems load a one-line index and leave the bodies behind [context pointers](./Context%20pointer.md) rather than inlining everything. And memories are [secondary sources](./Secondary%20source.md), so they drift: a fact recorded in March is loaded with equal confidence in June, after the project has moved on. A memory system needs pruning, the same way AGENTS.md does.

_Usage:_

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write what it learns to the [filesystem](./Filesystem.md) on the first [turn](./Turn.md), reload it at session start. The [model](./Model.md) itself is [stateless](./Stateless.md); the memory layer fakes continuity."
```

## AGENTS.md

Source: `dictionary/AGENTS.md/en.md`

Target: `dictionary/AGENTS.md/th.md`

```md
---
description: A file in the environment that the harness loads into the context window at session start — the project's standing brief to the agent.
---

A file in the [environment](./Environment.md) that the [harness](./Harness.md) loads into the [context window](./Context%20window.md) at [session](./Session.md) start — the project's standing brief to the [agent](./Agent.md). Cross-harness convention; some harnesses also have their own variant (Claude Code's is CLAUDE.md).

Because it loads automatically, it's one way to avoid repeating yourself across sessions. The [model](./Model.md) is [stateless](./Stateless.md) — a correction you give in one session is gone in the next, and you end up telling every fresh session that the project uses pnpm, that tests run with a particular flag, that a directory is generated and shouldn't be touched. When you've corrected the agent for the same thing twice, that correction is a candidate line for AGENTS.md.

Suitable content is whatever the agent can't derive from the code: build and test commands, conventions the codebase doesn't make obvious, hard constraints ("never edit the generated client"). Short and declarative — it's a brief, not documentation.

The trade-off is that everything in it is always loaded. Instructions accumulate, most of them irrelevant to any given task, and a long AGENTS.md both costs tokens and dilutes itself — the more instructions in context, the less reliably the model follows any one of them.

_Avoid:_ using AGENTS.md for content that should be [progressively disclosed](./Progressive%20disclosure.md) — anything in it pays a [token](./Token.md) cost every [turn](./Turn.md), in every session, whether or not that session needs it. A style guide can go behind a [skill](./Skill.md) or a [context pointer](./Context%20pointer.md) instead; keep AGENTS.md for the lines that apply everywhere.

_Usage:_

"Why is every session starting with 4k tokens already burned?"

"Check AGENTS.md — someone pasted the entire style guide in there instead of putting it behind a skill."
```

## Progressive disclosure

Source: `dictionary/Progressive disclosure/en.md`

Target: `dictionary/Progressive disclosure/th.md`

```md
---
description: Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design.
---

Loading only the [context](./Context.md) an [agent](./Agent.md) needs right now, with [context pointers](./Context%20pointer.md) to the rest. Borrowed from UI design, where it means showing users only the controls relevant to their current task and hiding the rest behind a click.

The technique exists because context is a cost twice over. Every [token](./Token.md) loaded up front is billed as [input tokens](./Input%20tokens.md) on every [turn](./Turn.md), and every token spends [attention budget](./Attention%20budget.md) whether the agent needs it or not. An [AGENTS.md](./AGENTS.md.md) stuffed with the full style guide, deployment runbook, and database conventions makes the agent worse at all of them — the instructions that matter for the current task are diluted by the ones that don't. The tell is an agent that ignores rules you know are in its context: they're in there, but buried.

Progressive disclosure inverts this. Keep the always-loaded layer small — a sentence per topic and a pointer to where the detail lives. The agent reads the style guide when it's writing a component, the deployment runbook when it's deploying, and neither when it's fixing a test. [Skills](./Skill.md) are the pattern built into the [harness](./Harness.md): a short description loaded every [session](./Session.md), the full instructions only when triggered.

_Usage:_

"Should I dump the entire style guide into AGENTS.md?"

"No — progressive disclosure. Reference the style guide as a skill the agent loads when it actually needs to write a component. AGENTS.md pays the token cost every turn."
```

## Context pointer

Source: `dictionary/Context pointer/en.md`

Target: `dictionary/Context pointer/th.md`

```md
---
description: A mention in one document that points to another, so the agent can pull it into context only when the task calls for it.
---

A mention in one document that points to another, so the [agent](./Agent.md) can pull it into the [context window](./Context%20window.md) only when the task calls for it. The unit [progressive disclosure](./Progressive%20disclosure.md) is built from.

The reason to use a pointer (instead of inlining the content) is cost. A pointer is one line in the context window. The document behind it might be thousands of [tokens](./Token.md), but those tokens cost nothing until the agent actually follows the pointer. Inline a 2,000-token runbook in [AGENTS.md](./AGENTS.md.md) and every [session](./Session.md) pays for it; replace it with "deploy process: see `internal/deploy.md`" and only the sessions that deploy ever load it. The agent follows the pointer with a [tool call](./Tool%20call.md) when the task matches.

A pointer needs two parts to work: a stable path, and enough description for the agent to know when following it is worth it. A bare path is a pointer the agent has no reason to follow; "see `internal/deploy.md`" with no hint of what's inside gets skipped by a session that needed it. Write the line so it matches how tasks present: "release, deploy, or rollback — read `internal/deploy.md` first".

Pointers are everywhere once you look: lines in AGENTS.md, [skill](./Skill.md) descriptions (the harness loads the description; the skill body waits behind it), filenames in a directory listing, links between docs.

A pointer can also tie a [secondary source](./Secondary%20source.md) back to the [primary source](./Primary%20source.md) it was derived from — the compaction summary that names the original transcript, the doc that names the source file it describes. This makes the secondary source's lossiness recoverable: when the summary turns out not to be enough, the agent follows the pointer and reads the original, instead of working from whatever the summary kept.

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

_Usage:_

"AGENTS.md is getting huge."

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into skills and leave a context pointer behind."
```

## Skill

Source: `dictionary/Skill/en.md`

Target: `dictionary/Skill/th.md`

```md
---
description: A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand.
---

A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](./Environment.md) until a [context pointer](./Context%20pointer.md) pulls it into the [context window](./Context%20window.md) for the task at hand. The unit of [progressive disclosure](./Progressive%20disclosure.md) in a [harness](./Harness.md).

Skills are an open standard, defined at [agentskills.io](https://agentskills.io) — originally developed by Anthropic and since adopted by most major harnesses, so a skill written once works across them. The format is a folder containing:

- A `SKILL.md` file — metadata (a name and description, at minimum) plus the instructions themselves
- Optionally, scripts the [agent](./Agent.md) can run
- Optionally, templates and reference material the instructions point to

Only the name and description sit in [context](./Context.md) by default. When the agent's task matches, it loads the rest. Until then, the skill takes up almost no room — a sentence or two of [tokens](./Token.md), however large its full instructions are.

This distinguishes skills from [AGENTS.md](./AGENTS.md.md), which is loaded into every [session](./Session.md) regardless of the task. A skill is read when a particular kind of work comes up — releasing, scaffolding a new service, writing a migration — and ignored the rest of the time.

_Avoid:_ "[tool](./Tool.md)" — a tool is what the agent _calls_; a skill is instructions it _reads_.

_Usage:_

"Where should I put the deploy runbook?"

"As a skill — the agent loads it only when the task involves deploys. In AGENTS.md it'd burn tokens on every [turn](./Turn.md) for something we use weekly."
```

## Subagent

Source: `dictionary/Subagent/en.md`

Target: `dictionary/Subagent/th.md`

```md
---
description: An agent spawned by another agent via a tool call. Runs in its own session, reports a single tool result. Cannot spawn further subagents.
---

An [agent](./Agent.md) spawned by another agent via a [tool call](./Tool%20call.md). Runs in its own [session](./Session.md) with its own [context window](./Context%20window.md), and reports a single [tool result](./Tool%20result.md) back. Distinct from a [handoff](./Handoff.md) — the parent specifically expects a return; a handoff has no return path. **Cannot spawn further subagents** — the tree is one level deep. Subagents exist to isolate [context](./Context.md), not to compose hierarchies.

The point is to keep noisy work out of the parent's context. A broad search or a long file-reading expedition produces pages of tool results, most of which matter only long enough to find the answer. Run inside the parent and all of it stays in the parent's context for the rest of the session. Run inside a subagent and the noise fills a disposable window instead — only the final report lands in the parent's context. The report is a [secondary source](./Secondary%20source.md): the parent gets the subagent's account of what it found, not the raw results, so anything the report leaves out is invisible to the parent.

Subagents also run concurrently — a parent can fan several out at once over independent pieces of work.

_Usage:_

"The grep results are blowing out my context."

"Spawn a subagent to do the search — it'll burn its own context window on the noise and report back the two file paths you actually need."
```

---

# batch-07-01-patterns-of-work

Batch 13 of 14.

Curriculum section: Section 7 — Patterns of Work

Approximate English words: 2157

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term              | English source                       | Thai target                          | Words |
| ----------------- | ------------------------------------ | ------------------------------------ | ----: |
| Human-in-the-loop | `dictionary/Human-in-the-loop/en.md` | `dictionary/Human-in-the-loop/th.md` |   315 |
| AFK               | `dictionary/AFK/en.md`               | `dictionary/AFK/th.md`               |   346 |
| Automated check   | `dictionary/Automated check/en.md`   | `dictionary/Automated check/th.md`   |   341 |
| Automated review  | `dictionary/Automated review/en.md`  | `dictionary/Automated review/th.md`  |   316 |
| Human review      | `dictionary/Human review/en.md`      | `dictionary/Human review/th.md`      |   233 |
| Vibe coding       | `dictionary/Vibe coding/en.md`       | `dictionary/Vibe coding/th.md`       |   295 |
| Design concept    | `dictionary/Design concept/en.md`    | `dictionary/Design concept/th.md`    |   311 |

## Raw English

## Human-in-the-loop

Source: `dictionary/Human-in-the-loop/en.md`

Target: `dictionary/Human-in-the-loop/th.md`

```md
---
description: A working pattern where one or more humans pair with the agent during a session — reviewing, redirecting, or collaborating in real time.
aliases:
  - HITL
  - Human-in-the-loop (HITL)
---

A working pattern where one or more humans pair with the [agent](./Agent.md) during a [session](./Session.md) — reviewing, redirecting, or collaborating in real time. The human is present and engaged, not just gating individual actions.

The contrast is with [AFK](./AFK.md) work, where the agent runs unattended and you judge the result afterwards. Human-in-the-loop means catching problems while they're still cheap: you see the agent reach for the wrong file, misread the requirement, or start down a dead end, and you redirect it in one sentence — rather than discovering twenty minutes of confident work built on that mistake. Agents don't reliably know when they're off track; left alone, they tend to push forward rather than stop and ask.

Which pattern fits depends on the work. Well-specified, low-risk, easy-to-verify tasks suit AFK. Tasks that are ambiguous, irreversible, or where you'd struggle to review the finished result — a schema migration, a tricky design decision, anything touching production — suit staying in the loop. The judgement call is essentially: how expensive is a wrong turn, and how late would you catch it?

Some work is in-the-loop by nature, because your reactions are the input. [Grilling](./Grilling.md) only works with you there to answer the questions; [prototyping](./Prototyping.md) only works with you there to react to the artifact.

Staying in the loop costs your attention, which is the scarce resource. Part of getting better with agents is moving more work safely out of the loop — with plans, [automated checks](./Automated%20check.md), and [human review](./Human%20review.md) at the end instead of supervision throughout.

_Usage:_

"Run this AFK overnight?"

"No, schema migration — keep it human-in-the-loop. I want to see each step and steer if it picks the wrong column to backfill from."
```

## AFK

Source: `dictionary/AFK/en.md`

Target: `dictionary/AFK/th.md`

```md
---
description: A working pattern where the user kicks off a session and leaves the agent to run unattended (away from keyboard).
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

Away from keyboard. A working pattern where the user kicks off a [session](./Session.md) and leaves the [agent](./Agent.md) to run unattended. The throughput multiplier of [AI](./AI.md) coding — many AFK sessions can run in parallel while you sleep, eat, or work on something else. Usually requires a permissive [permission mode](./Permission%20mode.md) plus [sandboxing](./Sandbox.md) to be safe.

When you're not there, the agent handles ambiguity differently. While you're watching, an ambiguous decision surfaces as a question and you answer it; once you've walked away, the agent picks a default and keeps going, and every later decision builds on that guess. The characteristic failure is coming back to hours of finished, confident work built on a wrong call made in the first ten minutes. The work isn't sloppy — it's coherent, just coherent about the wrong thing.

Since you can't give input during the run, give it before and after instead. Before: resolve the ambiguity up front — a [grilling](./Grilling.md) session, a written [spec](./Spec.md) — so there are fewer gaps for the agent to fill alone. During: [automated checks](./Automated%20check.md) and [automated review](./Automated%20review.md) stand in for the attention you're not giving, failing fast on what can be caught mechanically. After: the run ends in something reviewable — a PR, not changes already merged. AFK doesn't remove [human review](./Human%20review.md); it defers all of it to the end, which is why what arrives at the end has to be worth reviewing. This is also why [AX](./AX.md) matters most in AFK runs — with no one watching, the environment is the only support the agent gets.

_Avoid:_ "background agent" — centers the machine ("running in the background") rather than the human pattern ("user has walked away"). AFK names the fact that matters: the user isn't watching.

_Usage:_

"I'm running this AFK — three sandboxed agents on the refactor, reviewing the PRs in the morning."

"[Bypass permissions](./Agent%20mode.md)?"

"Yeah, read-only [filesystem](./Filesystem.md), no network."
```

## Automated check

Source: `dictionary/Automated check/en.md`

Target: `dictionary/Automated check/th.md`

```md
---
description: A deterministic verification that runs in the environment — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement.
---

A deterministic verification that runs in the [environment](./Environment.md) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](./Agent.md) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic _by design_.

Self-correction works as a loop. The agent makes a change, runs the check as a [tool call](./Tool%20call.md), and the failure output lands in its [context window](./Context%20window.md) — a type error with a file and line, a failing assertion with expected and actual values. That's enough for the agent to fix the problem and run the check again, around and around until it passes, with no human in the loop. Determinism is what makes the loop trustworthy: the same code always produces the same verdict, so a pass means something. A flaky check poisons this — the agent "fixes" code that was fine, or retries past a real failure.

This is why good checks are a large part of a codebase's [AX](./AX.md). An agent in a repo with strict types, a fast test suite, and a linter catches most of its own mistakes before you see them; an agent in a repo with none of those ships whatever it produces. The difference matters most in [AFK](./AFK.md) runs, where checks are the only verification happening during the run. But a check only catches what it asserts — green checks mean the asserted properties hold, not that the code is right. The judgement-shaped gaps are what [automated review](./Automated%20review.md) and [human review](./Human%20review.md) are for.

_Avoid:_ "feedback loop" / "backpressure" — both lump checks together with review. _Avoid:_ "test" — tests are automated checks, but not all automated checks are tests.

_Usage:_

"The agent keeps shipping broken code in the AFK runs."

"What automated checks are wired into the [sandbox](./Sandbox.md)?"

"Just the unit tests."

"Add typecheck and lint — it'll self-correct from those before the PR ever lands."
```

## Automated review

Source: `dictionary/Automated review/en.md`

Target: `dictionary/Automated review/th.md`

```md
---
description: "An agent reviewing another agent's work, often with a different model or system prompt. Non-deterministic: it forms a judgement."
---

An [agent](./Agent.md) reviewing another agent's work, often with a different [model](./Model.md) or [system prompt](./System%20prompt.md). Non-deterministic: it forms a judgement. Runs anywhere — pre-merge on a PR, post-hoc on commit history, mid-session as a [subagent](./Subagent.md). An LLM-as-judge in CI is automated review, not an [automated check](./Automated%20check.md); what the assertion _does_ decides the category, not where it runs.

The separation from the working agent is what makes it work. Asking the agent that wrote the code to review its own work gets you very little — the [session](./Session.md) that produced the bug also contains the reasoning that produced it, and the agent reads its own conclusions back as confirmation. A reviewer with a fresh [context window](./Context%20window.md) has none of that attachment: it sees the diff the way a stranger would, which is what review depends on. A different model or a review-specific system prompt sharpens this further — different blind spots, and a system prompt scoped to what you actually care about (security, API contracts, performance) rather than a vague "look for problems".

It slots between the other review layers. Automated checks are deterministic and catch what can be asserted mechanically; [human review](./Human%20review.md) is expensive and scales worst. Automated review sits in the middle: it catches judgement-shaped problems — a misleading function name, a missed edge case — at machine cost. Because it's non-deterministic, it can miss things and flag non-issues; treat it as a filter that raises the floor before a human looks, not a gate that replaces one.

_Avoid:_ "AI review" / "agent review" — too vague to distinguish from the working agent itself.

_Usage:_

"We're getting too many bad PRs from the [AFK](./AFK.md) runs."

"Add an automated review step before merge — different model, separate system prompt, scoped to security and contract changes."
```

## Human review

Source: `dictionary/Human review/en.md`

Target: `dictionary/Human review/th.md`

```md
---
description: The user reading the code the agent produced and forming a judgement on it. Reading the diff counts; reading the summary doesn't.
---

The user reading the code the [agent](./Agent.md) produced and forming a judgement on it. Reading the diff or the changed files counts; reading the agent's _description_ of what it did does not — narration is not the artifact. The description is a [secondary source](./Secondary%20source.md), written by the party being reviewed; the diff is the [primary source](./Primary%20source.md), and review means reading it.

Agents raise the volume of code produced, so review becomes the bottleneck. One useful idea is layering different review strategies. [Automated checks](./Automated%20check.md) catch the mechanical failures, [automated review](./Automated%20review.md) catches the describable ones, and human review is reserved for what only you can judge — whether the change is the right change, whether the approach fits the codebase, whether this should exist at all.

Review is also cheaper earlier. Reading a plan before work starts, or a small diff mid-flight, takes minutes; excavating a finished branch after an [AFK](./AFK.md) run takes longer. Where you place the review checkpoint is a [human-in-the-loop](./Human-in-the-loop.md) decision, not an afterthought.

_Avoid:_ "code review" alone — ambiguous between human and automated.

_Usage:_

"I human-reviewed the AFK output."

"You read the diff or just the summary?"

"Diff. The summary said it deleted dead code — turned out the function was called from a generated file."
```

## Vibe coding

Source: `dictionary/Vibe coding/en.md`

Target: `dictionary/Vibe coding/th.md`

```md
---
description: A working pattern where the user accepts the agent's code without human review. The diff is treated as opaque.
---

A working pattern where the user accepts the [agent](./Agent.md)'s code without [human review](./Human%20review.md). The diff is treated as opaque — what matters is whether the program behaves, not what's inside. [Automated review](./Automated%20review.md) and [automated checks](./Automated%20check.md) may still run; vibe coding is silent on both.

The term comes from Andrej Karpathy, who [coined it in early 2025](https://x.com/karpathy/status/1886192184808149383): you "fully give in to the vibes" and "forget that the code even exists" — describe what you want, accept what comes back, and judge it by running it.

Vibe coding trades inspection for speed. Reading diffs is usually the slowest step in agent-driven work, so dropping it removes the main bottleneck. For code whose failures are cheap — [prototypes](./Prototyping.md), one-off scripts, internal tools — that's a reasonable trade. The risk scales with the code's lifespan and stakes.

The cost arrives later. Vibe-coded changes accumulate into a codebase nobody has read, and behaviour was the only thing checked — so anything behaviour doesn't surface, like a secret written to logs, a missing edge case, or quietly wrong data handling, ships unseen. The first time someone debugs the system is the first time anyone reads the code. With human review gone, whatever automated verification still runs — tests, types, automated review — is the only gate the code passes through.

_Avoid:_ "vibe coding" as a synonym for "low-quality AI coding" — the term names the review stance, not the resulting code.

_Usage:_

"Did you read what it changed in the auth flow?"

"Vibe coded it — login still works, that's all I checked."

"Read the diff before you push, vibing on auth is how secrets leak into logs."
```

## Design concept

Source: `dictionary/Design concept/en.md`

Target: `dictionary/Design concept/th.md`

```md
---
description: The shared understanding of what's being built, held in common between user and agent but separate from any asset.
---

The shared understanding of what's being built, held in common between user and [agent](./Agent.md) but separate from any asset. Brooks' term (_The Design of Design_): the conversation, [handoff artifacts](./Handoff%20artifact.md), and the code are all assets that try to capture or reach the design concept, but none of them _are_ it. Quality of the design concept is felt through the quality of the conversation that built it.

The term names the gap behind a familiar frustration: the agent writes exactly what you asked for and it's still wrong. The usual cause is that you hadn't fully figured out what you wanted. The design concept wasn't finished in your own head — your prompt captured the parts you'd worked out, and was silent on the parts you hadn't. The agent filled those silences with its own assumptions, because there was nothing to align with. Nothing malfunctioned. There was no shared design concept, because there wasn't yet a whole one to share.

You can tell a design concept is shared the same way you can with a colleague: the other party starts answering questions you haven't asked yet the way you would. Until then, the work is conversation — [grilling](./Grilling.md) is the deliberate version — and writing a [spec](./Spec.md) too early just captures the misalignment in a more durable asset. The design concept also moves as you learn; assets lag it, which is why a spec faithful to last week's understanding can still mislead this week's session.

_Usage:_

"It's writing exactly what I asked for and it's still wrong."

"You don't share a design concept yet — it's filling gaps with assumptions. Keep talking until cancellation, refunds, and partial fulfilment all line up between you before you let it write a spec."
```

---

# batch-07-02-patterns-of-work

Batch 14 of 14.

Curriculum section: Section 7 — Patterns of Work

Approximate English words: 1175

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
| Grilling    | `dictionary/Grilling/en.md`    | `dictionary/Grilling/th.md`    |   217 |
| Prototyping | `dictionary/Prototyping/en.md` | `dictionary/Prototyping/th.md` |   300 |
| DX          | `dictionary/DX/en.md`          | `dictionary/DX/th.md`          |   342 |
| AX          | `dictionary/AX/en.md`          | `dictionary/AX/th.md`          |   316 |

## Raw English

## Grilling

Source: `dictionary/Grilling/en.md`

Target: `dictionary/Grilling/th.md`

```md
---
description: "A technique for developing a design concept: the agent interviews the user Socratically, one decision at a time."
---

A technique for developing a [design concept](./Design%20concept.md) with an [agent](./Agent.md): the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each. Slows the rush to a finished plan — no [handoff artifact](./Handoff%20artifact.md) is written until the concept stabilises.

The technique exists because agents fill gaps silently. Asked to write a [spec](./Spec.md) from a two-line prompt, the agent doesn't stop at the decisions you haven't made — it picks defaults and writes them in. The result looks complete, and the guesses are indistinguishable from the choices, so you discover them late: at review, or when the built feature handles an edge case in a way you never chose. Grilling inverts this — instead of guessing, the agent has to ask.

It's a [human-in-the-loop](./Human-in-the-loop.md) technique: your answers are the input. When a question can't be answered in conversation — you'd have to see the thing — switch to [prototyping](./Prototyping.md).

_Usage:_

"It went straight to writing the spec and got the cancellation logic wrong."

"Grill it first — make it ask you about partial cancels, refunds, and timing before it commits anything to the doc. Cheaper to resolve in conversation than in code."
```

## Prototyping

Source: `dictionary/Prototyping/en.md`

Target: `dictionary/Prototyping/th.md`

```md
---
description: Having the agent build a quick, rough version when conversation is too low-fidelity and you need a real artifact to talk about.
---

Having the [agent](./Agent.md) build a quick, rough version of something, for when conversation is too low-fidelity and you need a real artifact to talk about.

[Grilling](./Grilling.md) resolves design decisions in conversation. Conversation is cheap, but it's low-fidelity: some questions can't be answered in words — how an interaction feels, whether an API shape is ergonomic in real calling code, whether the layout works at real data sizes. The interview hits a question and your honest answer is "I don't know, I'd have to see it." Past that point the discussion circles. Instead, have the agent build the thing, look at it, and come back to the conversation with an answer.

Agents lower the cost of building, which is what makes this practical. A rough version that used to take a day to mock up now takes minutes, so it's worth doing routinely. It's a [human-in-the-loop](./Human-in-the-loop.md) technique: the prototype is there for you to react to.

You usually don't stop at one look. Iterate with the prototype — react, ask for a change, react again — so each round resolves another decision against the real artifact, at a higher fidelity than conversation allows.

A prototype doesn't have to be all-scrappy. You can build the pieces you're actually evaluating to production quality, so when the decision lands, the component or API you reacted to can transfer into the real codebase. This makes prototyping essential material for the [spec](./Spec.md) to reference.

_Usage:_

"We've spent half an hour arguing about whether the wizard should be one page or three steps."

"Words won't settle it — have the agent prototype both. We'll click through them and know in five minutes."
```

## DX

Source: `dictionary/DX/en.md`

Target: `dictionary/DX/th.md`

```md
---
description: "Developer experience: how easy a codebase and its toolchain make it for humans to do good work — docs, feedback speed, errors."
aliases:
  - Developer experience
---

Developer experience — how easy a codebase and its toolchain make it for humans to do good work. Good DX is fast feedback, clear error messages, documentation that answers the question you actually have, and setup that works on the first try. The term long predates AI coding; it's in this dictionary mainly as the contrast for [AX](./AX.md).

DX is the interaction between the human and the codebase — nothing more. The main difference between the two audiences is that humans are [stateful](./Stateful.md) and agents are [stateless](./Stateless.md). A human learns the codebase once and carries that knowledge into every day after, which is why poor DX is survivable: they route around slow CI by batching their pushes, around missing docs by asking in Slack once, around confusing structure by remembering where things live. The workarounds accumulate, and a team ends up productive in a codebase that fights them.

[Agents](./Agent.md) face the same codebase with none of that accumulation. Stateless across [sessions](./Session.md), an agent re-learns the codebase from scratch every time — it benefits from the fast test suite and the clear error messages, but anything it figured out yesterday is gone unless it was written into the [environment](./Environment.md), which the agent only perceives through [tool results](./Tool%20result.md). That's the gap AX names: the parts of DX that survive when the developer is an agent, plus concerns humans don't have, like keeping the [context window](./Context%20window.md) free.

The overlap means DX investment often improves AX for free — strict types, fast tests, and predictable structure help both. The divergence means it doesn't always: a beautiful onboarding doc helps a human for a week and an agent not at all unless it's reachable from [AGENTS.md](./AGENTS.md.md).

_Usage:_

"Our DX is fine — new hires are productive in a week."

"Productive because someone sits with them for that week. The agent doesn't get that week; check the AX separately."
```

## AX

Source: `dictionary/AX/en.md`

Target: `dictionary/AX/th.md`

```md
---
description: "Agent experience: how well the environment is set up for an agent to do good work — checks, architecture, and free context."
aliases:
  - Agent experience
---

Agent experience — how well the [environment](./Environment.md) is set up for an [agent](./Agent.md) to do good work in a codebase. The agent-facing counterpart to [DX](./DX.md). When the same agent performs well in one repo and badly in another — same [model](./Model.md), same [harness](./Harness.md) — the difference is usually AX. The instinct is to blame the model or rewrite the prompt; the fix is more often in the repo.

Good AX has three main dimensions:

| Dimension        | What good AX looks like                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated checks | Fast, deterministic [automated checks](./Automated%20check.md) — types, tests, lints — that the agent can self-correct from without a human                                                                                                          |
| Architecture     | A codebase the agent can navigate without reading everything: predictable structure, a lot of behaviour behind small interfaces, names that say what things do                                                                                       |
| Free context     | [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), and [tools](./Tool.md) kept lean, so most of the [context window](./Context%20window.md) is available for the task and the agent stays in the [smart zone](./Smart%20zone.md) instead of drowning |

AX and DX overlap — good checks and clean architecture help both audiences — but they diverge. Humans tolerate tribal knowledge, slow CI, and "ask Sarah about the billing module"; agents can't. Agents don't benefit from IDE tooltips or pretty dashboards; they need failures as text in a [tool result](./Tool%20result.md). A codebase can have good DX and poor AX.

_Avoid:_ treating AX as a synonym for DX — the audiences need different investments.

_Usage:_

"The agent writes great code in the API repo and garbage in the frontend."

"The API repo has strict types and a fast test suite; the frontend has neither and forty always-loaded skills. That's an AX gap, not a model problem."
```
