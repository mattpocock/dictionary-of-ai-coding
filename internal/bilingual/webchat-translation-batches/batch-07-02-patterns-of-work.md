# Webchat Thai Translation Package: batch-07-02-patterns-of-work

Copy this whole Markdown file into an LLM webchat. The model should return
completed Thai `th.md` files for the assigned targets only.

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

## Batch Metadata

Batch: 14 of 14

ID: batch-07-02-patterns-of-work

Curriculum section: Section 7 — Patterns of Work

Approximate English words: 1175

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

## Assigned Raw English Batch

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
