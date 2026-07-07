# Webchat Thai Translation Package: batch-01-01-the-model

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

Batch: 1 of 14

ID: batch-01-01-the-model

Curriculum section: Section 1 — The Model

Approximate English words: 2173

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

# batch-01-01-the-model

Batch 1 of 14.

Curriculum section: Section 1 — The Model

Approximate English words: 2173

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term       | English source                | Thai target                   | Words |
| ---------- | ----------------------------- | ----------------------------- | ----: |
| AI         | `dictionary/AI/en.md`         | `dictionary/AI/th.md`         |   407 |
| Model      | `dictionary/Model/en.md`      | `dictionary/Model/th.md`      |   255 |
| Parameters | `dictionary/Parameters/en.md` | `dictionary/Parameters/th.md` |   258 |
| Training   | `dictionary/Training/en.md`   | `dictionary/Training/th.md`   |   247 |
| Inference  | `dictionary/Inference/en.md`  | `dictionary/Inference/th.md`  |   312 |
| Effort     | `dictionary/Effort/en.md`     | `dictionary/Effort/th.md`     |   354 |
| Token      | `dictionary/Token/en.md`      | `dictionary/Token/th.md`      |   340 |

## Raw English

## AI

Source: `dictionary/AI/en.md`

Target: `dictionary/AI/th.md`

```md
---
description: A moving label, not a technology. Points at whatever computers can newly, impressively do — right now, large language models.
---

A moving label, not a technology. "AI" doesn't name a fixed thing the way [model](./Model.md) or [token](./Token.md) does — it points at whatever computers can newly, impressively do. Right now it points at large language models. It has pointed at very different things before:

| Era       | What "AI" meant                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------- |
| 1950s     | Symbolic reasoning — theorem provers, checkers programs.                                              |
| 1960s–70s | Rule-based symbolic programs — ELIZA, SHRDLU.                                                         |
| 1980s     | Expert systems — thousands of hand-written if-then rules encoding human expertise.                    |
| 1990s     | Game-tree search — Deep Blue beating Kasparov (1997). Researchers avoided the word "AI" entirely      |
| 2000s     | Statistical machine learning — spam filters, recommenders. Still sold as "machine learning", not "AI" |
| 2010s     | Deep learning — image recognition (AlexNet, 2012), AlphaGo (2016).                                    |
| 2020s     | Large language models — ChatGPT (2022) made "AI" mean chatbots                                        |

The pointer moves by a known mechanism, sometimes called the AI effect: once a technique works reliably, it gets renamed — it's "just" search, "just" statistics — and "AI" slides forward to the next unsolved thing. The observation is old. Bertram Raphael put it this way in 1971: "AI is a collective name for problems which we do not yet know how to solve properly by computer." Larry Tesler's version, from around 1979: "Intelligence is whatever machines haven't done yet."

This is why conversations about AI so often talk past each other. A claim like "AI can't reason" or "AI is overhyped" carries a hidden timestamp — it may be about expert systems, about 2010s image classifiers, or about last month's LLM, and each reference supports a different conclusion. When a discussion about AI stalls, the fix is usually to swap the word for whichever precise term is actually meant: the model, the [harness](./Harness.md), the [agent](./Agent.md), the [context](./Context.md) it was given.

_Avoid:_ "AI" in any technical claim — name the part you mean instead. "AI coding" as a label for the practice is fine; "the AI is hallucinating" is not.

_Usage:_

"The CTO wants to know whether AI could handle the triage queue."

"Translate that before scoping it — she means an LLM in a harness with access to the ticket system. 'AI' on its own isn't a spec."
```

## Model

Source: `dictionary/Model/en.md`

Target: `dictionary/Model/th.md`

```md
---
description: The parameters. Stateless — does next-token prediction and nothing else. Cannot do anything agentic on its own.
---

The [parameters](./Parameters.md). [Stateless](./Stateless.md) — does [next-token prediction](./Next-token%20prediction.md) and nothing else. "Claude Opus 4.x" and "GPT-5.x" are models. On its own a model can't do anything agentic; it has to be [harnessed](./Harness.md).

Models can't read files, run commands, browse the web, or remember yesterday — it takes [tokens](./Token.md) in and predicts tokens out, once per [model provider request](./Model%20provider%20request.md). Everything that feels like an [agent](./Agent.md) working — choosing [tools](./Tool.md), reading results, looping until the task is done — is the harness orchestrating many of those predictions in a row.

[Model providers](./Model%20provider.md) ship models in tiers: a large one that's smartest but slow and expensive, and smaller ones that are faster and cheaper but less capable. Picking a tier is a real decision — heavyweight for planning and hard debugging, lightweight for mechanical changes — and harnesses let you switch mid-[session](./Session.md).

Being strict about the word also sharpens diagnosis. "The model is bad at this" is a specific claim — the same model in a different harness, or with a different [context](./Context.md), often behaves completely differently. Before blaming the model, check what it was given: most disappointing output traces back to context or harness, not parameters.

_Usage:_

"Should we switch the model from Sonnet to Opus for the planning step?"

"Try it — but the harness is doing most of the lifting on this task. The model swap won't help if the [system prompt](./System%20prompt.md) and tools are wrong."
```

## Parameters

Source: `dictionary/Parameters/en.md`

Target: `dictionary/Parameters/th.md`

```md
---
description: The numbers inside a model — often billions — tuned during training. Everything the model knows lives in them. Also called weights.
---

The numbers inside a [model](./Model.md) — often billions of them — tuned during [training](./Training.md). Everything the model "knows" lives in them. Training sets them; [inference](./Inference.md) uses them unchanged. Also called _weights_.

Mechanically, the parameters are what turn input into output. [Next-token prediction](./Next-token%20prediction.md) is a giant calculation: the [tokens](./Token.md) in the [context window](./Context%20window.md) go in, get multiplied through the parameters, and a prediction for the next token comes out. There is no database of facts inside the model, no code lookup table — just these numbers, arranged so that the calculation tends to produce useful output. Facts the model can recite from training, like a standard library API, are [parametric knowledge](./Parametric%20knowledge.md): stored in the parameters, not retrieved from anywhere.

The detail worth internalising is that parameters are frozen after training. Nothing you do in a [session](./Session.md) changes them — no correction you make, no codebase you show it, no mistake it learns from. Every session runs on the same numbers. This is why the model is [stateless](./Stateless.md), why its built-in knowledge stops at the [knowledge cutoff](./Knowledge%20cutoff.md), and why anything project-specific has to arrive via [context](./Context.md) instead. The only way parameters change is more training — which produces, in effect, a different model.

_Usage:_

"Can we fine-tune it on our codebase?"

"That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as context than to retrain."
```

## Training

Source: `dictionary/Training/en.md`

Target: `dictionary/Training/th.md`

```md
---
description: The process that sets a model's parameters by exposing it to vast amounts of text and adjusting to improve next-token prediction.
---

The process that sets a [model](./Model.md)'s [parameters](./Parameters.md), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](./Next-token%20prediction.md). A one-time, expensive process done by the [model provider](./Model%20provider.md). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.

The mechanism is repetition at scale: show the model a stretch of text, have it predict the next [token](./Token.md), nudge the parameters toward whatever the actual next token was, and repeat across trillions of tokens. Nothing is stored as facts or rules — everything the model "knows" is a side effect of getting better at prediction, compressed into the parameters as [parametric knowledge](./Parametric%20knowledge.md).

Two consequences matter day to day. Training ends at a point in time, so the model has a [knowledge cutoff](./Knowledge%20cutoff.md) — it hasn't seen the library version you upgraded to last month. And training is not something you can do: when the model doesn't know your codebase, your conventions, or your internal APIs, the fix is never "teach the model" — it's putting that material into [context](./Context.md), the one input you control.

_Usage:_

"Can we get it to know our internal API?"

"Not via training — that's a months-long process by the model provider. Load the API docs into context instead, that's the lever you actually have."
```

## Inference

Source: `dictionary/Inference/en.md`

Target: `dictionary/Inference/th.md`

```md
---
description: Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed.
---

Running a trained [model](./Model.md) to generate output — what happens on every [model provider request](./Model%20provider%20request.md). [Parameters](./Parameters.md) stay fixed; the model just does [next-token prediction](./Next-token%20prediction.md) over the [context](./Context.md) it's given. Cheap relative to [training](./Training.md), but billed per [token](./Token.md) and the dominant cost of using a model.

A model's life splits into two phases:

| Phase     | When it happens                  | What it does                                                    | Parameters    |
| --------- | -------------------------------- | --------------------------------------------------------------- | ------------- |
| Training  | Once, before release             | Produces the parameters from a training corpus                  | Being written |
| Inference | Every time anyone uses the model | Runs the frozen parameters over your context to generate tokens | Read-only     |

Nothing you do at inference time writes back to the parameters — that's the reason a correction you make today doesn't stick tomorrow. The model that makes the same mistake next [session](./Session.md), after you carefully explained the fix, hasn't ignored you; it's incapable of learning from the exchange. The model is [stateless](./Stateless.md) — continuity has to come from outside it — from the [context window](./Context%20window.md) or a [memory system](./Memory%20system.md).

This mechanism also explains how you're billed. Every request runs the model over the full context, so cost scales with [input tokens](./Input%20tokens.md) and [output tokens](./Output%20tokens.md), and an agent making dozens of [tool](./Tool.md) calls pays for inference on each round trip. This is why context size is a cost question as well as a quality one.

_Usage:_

"Why does the bill scale with usage instead of being a flat license?"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](./Turn.md) can expand into many requests when tools are called."
```

## Effort

Source: `dictionary/Effort/en.md`

Target: `dictionary/Effort/th.md`

```md
---
description: A dial for how much reasoning the model does before it answers. More effort spends more output tokens for a better shot at hard problems.
aliases:
  - Reasoning effort
  - Thinking effort
---

Effort is a dial for how much reasoning a [model](./Model.md) does before it answers. Set per [model provider request](./Model%20provider%20request.md), it controls the length of the thinking the model works through before it starts writing the response you see. That thinking is generated at [inference](./Inference.md) time like everything else; the [harness](./Harness.md) often hides it, but it's real work the model is doing.

Higher effort costs more and runs slower. The reasoning is emitted as [tokens](./Token.md), billed as [output tokens](./Output%20tokens.md) even when you never see them, and produced one token at a time — so turning effort up lengthens the wait before the answer arrives and adds to the bill. The trade is more deliberation against speed and cost.

Most harnesses expose effort as a small ladder:

| Level  | What it's for                                                          |
| ------ | ---------------------------------------------------------------------- |
| Low    | Mechanical edits, lookups, well-specified changes with one clear path. |
| Medium | Everyday coding — the usual default.                                   |
| High   | Tricky bugs, design decisions, multi-step plans.                       |
| Max    | The hardest problems, where a wrong answer is expensive to unwind.     |

The symptom of getting it wrong cuts both ways. Set effort too low on a hard problem and you get a confident, shallow answer that skipped the reasoning the problem needed — it reads fine and is wrong in a way that costs you later. Set it to max for a one-line rename and you sit through a long think that produces nothing the lowest setting wouldn't have.

Match effort to the task, not the [session](./Session.md). Turn it up for the part that's genuinely hard to reason about, and back down for the rote work around it.

_Usage:_

"It keeps botching this concurrency fix — I've re-explained it three times."

"Bump the effort up. That's a reasoning-heavy bug, and on the default setting it's not thinking long enough before it commits to an approach."
```

## Token

Source: `dictionary/Token/en.md`

Target: `dictionary/Token/th.md`

```md
---
description: The atomic unit a model reads and writes. Roughly word-sized but not exactly. Context window size, cost, and latency all count tokens.
---

The atomic unit a [model](./Model.md) reads and writes. Roughly word-sized but not exactly — common words are one token, rare or long ones split into several. [Context window](./Context%20window.md) size, cost, and latency are all counted in tokens.

Text becomes tokens via a tokenizer: a fixed vocabulary of tens of thousands of fragments, learned before [training](./Training.md), that splits any input into a sequence of vocabulary entries. The model never sees characters or words — every piece of text is converted to tokens on the way in, and [next-token prediction](./Next-token%20prediction.md) produces output one token at a time on the way out.

As a rule of thumb, a token is about three-quarters of an English word, so a thousand tokens is roughly 750 words. Code is less predictable: common keywords and idioms tokenize compactly, while generated identifiers, hashes, base64 blobs, and minified output split into many tokens per "word". The pattern: text that appeared often in the tokenizer's source material gets short, efficient encodings; text that didn't gets chopped into many small pieces. A hash like `a3f9c2e1` never appeared anywhere, so it splits into many tokens, while `function` is one. This is why a small-looking file full of unusual strings can occupy a surprising share of the context window.

Tokens are the unit everything else is measured in. Cost is per token — providers bill [input tokens](./Input%20tokens.md) and [output tokens](./Output%20tokens.md) separately. Speed is tokens per second, since output is generated one token at a time. And the context window is a fixed number of tokens, so the token count of your files decides how much fits.

_Avoid:_ "word" — token boundaries don't match word boundaries, and tokens-per-second / tokens-per-dollar are the units that actually matter.

_Usage:_

"How big is this prompt going to be?"

"Run it through the tokenizer — the schema's compact but the JSON keys are weird, so they'll split into more tokens than you think."
```
