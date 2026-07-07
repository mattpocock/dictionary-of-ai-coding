<!--
  GENERATED FILE — DO NOT EDIT.
  Source: dictionary/<Concept>/{en,th}.md, internal/Curriculum.md, internal/README.template.md
  Regenerate: npm run generate
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# AI Coding Dictionary

**AI coding can feel like it's just for experts**. Unexplained jargon. Mysterious failures. Bills that don't seem to match the work.

It isn't, really. A lot of the confusion is manufactured: **there's a whole VC-funded economy that benefits from keeping it hard to understand**.

The basic terms of engagement are learnable in an afternoon. Once you have them, the whole thing stops feeling like guesswork.

Why does context degrade? Why is the bill so high? Why does the same prompt behave differently from one day to the next?

Each has a clean answer, once someone tells you the words to use.

That's what this dictionary is for. **The vocabulary of AI coding, translated into plain English**.

**Want more than the vocabulary?** Join 62,000+ developers at **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** for my latest skills, thinking on AI engineering, and the resources that'll keep you ahead of the curve.

---

## Table of contents

<details>
<summary>Section 1 — The Model</summary>

- [AI](#ai)
- [Model](#model)
- [Parameters](#parameters)
- [Training](#training)
- [Inference](#inference)
- [Effort](#effort)
- [Token](#token)
- [Next-token prediction](#next-token-prediction)
- [Non-determinism](#non-determinism)
- [Model provider](#model-provider)
- [Harness](#harness)
- [Model provider request](#model-provider-request)
- [Input tokens](#input-tokens)
- [Output tokens](#output-tokens)
- [Prefix cache](#prefix-cache)
- [Cache tokens](#cache-tokens)

</details>

<details>
<summary>Section 2 — Sessions, Context Windows & Turns</summary>

- [Stateless](#stateless)
- [Context](#context)
- [Context window](#context-window)
- [Stateful](#stateful)
- [Agent](#agent)
- [System prompt](#system-prompt)
- [Session](#session)
- [Turn](#turn)

</details>

<details>
<summary>Section 3 — Tools & Environment</summary>

- [Environment](#environment)
- [Filesystem](#filesystem)
- [Tool](#tool)
- [Tool call](#tool-call)
- [Tool result](#tool-result)
- [MCP](#mcp)
- [Permission request](#permission-request)
- [Permission mode](#permission-mode)
- [Agent mode](#agent-mode)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Section 4 — Failure Modes</summary>

- [Sycophancy](#sycophancy)
- [Hallucination](#hallucination)
- [Parametric knowledge](#parametric-knowledge)
- [Knowledge cutoff](#knowledge-cutoff)
- [Contextual knowledge](#contextual-knowledge)
- [Attention relationship](#attention-relationship)
- [Attention budget](#attention-budget)
- [Attention degradation](#attention-degradation)
- [Smart zone](#smart-zone)

</details>

<details>
<summary>Section 5 — Handoffs</summary>

- [Clearing](#clearing)
- [Handoff](#handoff)
- [Primary source](#primary-source)
- [Secondary source](#secondary-source)
- [Handoff artifact](#handoff-artifact)
- [Spec](#spec)
- [Ticket](#ticket)
- [Compaction](#compaction)
- [Autocompact](#autocompact)

</details>

<details>
<summary>Section 6 — Memory and Steering</summary>

- [Memory system](#memory-system)
- [AGENTS.md](#agentsmd)
- [Progressive disclosure](#progressive-disclosure)
- [Context pointer](#context-pointer)
- [Skill](#skill)
- [Subagent](#subagent)

</details>

<details>
<summary>Section 7 — Patterns of Work</summary>

- [Human-in-the-loop](#human-in-the-loop)
- [AFK](#afk)
- [Automated check](#automated-check)
- [Automated review](#automated-review)
- [Human review](#human-review)
- [Vibe coding](#vibe-coding)
- [Design concept](#design-concept)
- [Grilling](#grilling)
- [Prototyping](#prototyping)
- [DX](#dx)
- [AX](#ax)

</details>

## Section 1 — The Model

### AI

#### English

A moving label, not a technology. "AI" doesn't name a fixed thing the way [model](#model) or [token](#token) does — it points at whatever computers can newly, impressively do. Right now it points at large language models. It has pointed at very different things before:

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

This is why conversations about AI so often talk past each other. A claim like "AI can't reason" or "AI is overhyped" carries a hidden timestamp — it may be about expert systems, about 2010s image classifiers, or about last month's LLM, and each reference supports a different conclusion. When a discussion about AI stalls, the fix is usually to swap the word for whichever precise term is actually meant: the model, the [harness](#harness), the [agent](#agent), the [context](#context) it was given.

_Avoid:_ "AI" in any technical claim — name the part you mean instead. "AI coding" as a label for the practice is fine; "the AI is hallucinating" is not.

_Usage:_

"The CTO wants to know whether AI could handle the triage queue."

"Translate that before scoping it — she means an LLM in a harness with access to the ticket system. 'AI' on its own isn't a spec."

#### ไทย

ป้ายกำกับที่เปลี่ยนความหมายไปตามยุคสมัย ไม่ใช่ชื่อเทคโนโลยีตายตัว AI ไม่ได้เป็นคำเรียกสิ่งที่มีโครงสร้างชัดเจนเหมือนอย่าง [model](#model) หรือ [token](#token) แต่มันเป็นคำที่ใช้ชี้ไปยังอะไรก็ตามที่คอมพิวเตอร์เพิ่งจะทำได้และสร้างความน่าทึ่งในขณะนั้น ซึ่งในปัจจุบัน คำนี้กำลังชี้มาที่โมเดลภาษาขนาดใหญ่ (large language model) แต่ในอดีต AI เคยหมายถึงสิ่งที่แตกต่างออกไปอย่างสิ้นเชิง:

| ยุคสมัย        | ความหมายของคำว่า "AI"                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ทศวรรษ 1950    | การใช้เหตุผลเชิงสัญลักษณ์ (Symbolic reasoning) — โปรแกรมพิสูจน์ทฤษฎีบท, โปรแกรมหมากรุก                                                                                    |
| ทศวรรษ 1960–70 | โปรแกรมเชิงสัญลักษณ์ที่ขับเคลื่อนด้วยกฎ (Rule-based symbolic programs) — ELIZA, SHRDLU                                                                                    |
| ทศวรรษ 1980    | ระบบผู้เชี่ยวชาญ (Expert systems) — กฎ if-then ที่เขียนด้วยมือเป็นพันๆ ข้อเพื่อรวบรวมความเชี่ยวชาญของมนุษย์                                                               |
| ทศวรรษ 1990    | การค้นหาแบบแผนภูมิโครงสร้างต้นไม้ของเกม (Game-tree search) — Deep Blue ที่เอาชนะ Kasparov ได้ (ค.ศ. 1997 / พ.ศ. 2540) ยุคนั้นนักวิจัยพยายามเลี่ยงคำว่า "AI" กันเลยทีเดียว |
| ทศวรรษ 2000    | การเรียนรู้ของเครื่องเชิงสถิติ (Statistical machine learning) — ตัวกรองสแปม, ระบบแนะนำเนื้อหา ยุคนี้ยังทำการตลาดด้วยคำว่า "machine learning" ไม่ใช่ "AI"                  |
| ทศวรรษ 2010    | การเรียนรู้เชิงลึก (Deep learning) — ระบบจดจำรูปภาพ (AlexNet, ค.ศ. 2012 / พ.ศ. 2555), AlphaGo (ค.ศ. 2016 / พ.ศ. 2559)                                                     |
| ทศวรรษ 2020    | โมเดลภาษาขนาดใหญ่ — ChatGPT (ค.ศ. 2022 / พ.ศ. 2565) ที่ทำให้คนทั่วไปมองว่า "AI" คือแชตบอต                                                                                 |

เป้าหมายที่คำนี้ชี้ขยับเคลื่อนไปด้วยกลไกที่เรารู้จักกันดี ซึ่งบางครั้งเรียกว่า "ปรากฏการณ์เอไอ" (AI effect) นั่นคือ เมื่อใดก็ตามที่เทคนิคหนึ่งๆ ทำงานได้อย่างเสถียรและน่าเชื่อถือแล้ว มันจะถูกเปลี่ยนชื่อไปเรียกว่า "ก็แค่" การค้นหา หรือ "ก็แค่" สถิติ แล้วคำว่า "AI" ก็จะเลื่อนต่อไปยังสิ่งถัดไปที่ยังแก้ไม่ได้ ข้อสังเกตนี้มีมานานแล้ว เบอร์แทรม ราฟาเอล (Bertram Raphael) เคยกล่าวไว้ในปี ค.ศ. 1971 (พ.ศ. 2514) ว่า "AI เป็นชื่อเรียกกลุ่มปัญหาที่คอมพิวเตอร์ยังไม่รู้วิธีแก้ไขอย่างถูกต้องเหมาะสม" ส่วนแลร์รี เทสเลอร์ (Larry Tesler) ก็เคยกล่าวไว้ในช่วงปี ค.ศ. 1979 (พ.ศ. 2522) ว่า "ความฉลาดคืออะไรก็ตามที่เครื่องจักรยังไม่ได้ทำ"

นี่คือเหตุผลที่บทสนทนาเกี่ยวกับ AI มักจะคุยกันไปคนละทิศคนละทาง ข้ออ้างที่ว่า "AI คิดวิเคราะห์ไม่ได้" หรือ "AI ถูกปั่นกระแสเกินจริง" ล้วนมีเวลาที่ซ่อนอยู่ (timestamp) ซึ่งอาจจะหมายถึงระบบผู้เชี่ยวชาญในอดีต, ระบบจำแนกรูปภาพในทศวรรษ 2010 หรืออาจหมายถึง LLM เมื่อเดือนที่แล้ว ซึ่งการอ้างอิงแต่ละแบบก็นำไปสู่ข้อสรุปที่ต่างกัน ดังนั้นเมื่อการพูดคุยเรื่อง AI เริ่มตัน วิธีแก้คือให้เปลี่ยนคำว่า AI เป็นคำเทคนิคัลที่เจาะจงตรงกับสิ่งที่จะสื่อจริงๆ เช่น ตัว model, ตัว [harness](#harness), ตัว [agent](#agent) หรือ [บริบท](#context) ที่ถูกป้อนให้มัน

_สิ่งที่ควรเลี่ยง:_ การใช้คำว่า "AI" ในข้ออ้างทางเทคนิค ให้ระบุส่วนที่คุณหมายถึงไปเลย เช่น การใช้คำว่า "AI coding" เพื่อเรียกรูปแบบการทำงานนั้นถือว่าใช้ได้ แต่การพูดว่า "AI กำลังเกิด hallucination" นั้นไม่เหมาะสม

_ตัวอย่างการใช้งาน:_

"CTO อยากรู้ว่าเราจะเอา AI มาจัดการคิวคัดกรองเคส (triage queue) ได้ไหม"

"แปลความหมายก่อนไปกำหนดขอบเขตงานเถอะ พี่เขาหมายถึงเอา LLM ไปใส่ใน harness แล้วให้สิทธิ์เข้าถึงระบบตั๋วส่งงาน คำว่า 'AI' โดดๆ มันเอามาทำสเปกงานไม่ได้หรอก"

### Model

#### English

The [parameters](#parameters). [Stateless](#stateless) — does [next-token prediction](#next-token-prediction) and nothing else. "Claude Opus 4.x" and "GPT-5.x" are models. On its own a model can't do anything agentic; it has to be [harnessed](#harness).

Models can't read files, run commands, browse the web, or remember yesterday — it takes [tokens](#token) in and predicts tokens out, once per [model provider request](#model-provider-request). Everything that feels like an [agent](#agent) working — choosing [tools](#tool), reading results, looping until the task is done — is the harness orchestrating many of those predictions in a row.

[Model providers](#model-provider) ship models in tiers: a large one that's smartest but slow and expensive, and smaller ones that are faster and cheaper but less capable. Picking a tier is a real decision — heavyweight for planning and hard debugging, lightweight for mechanical changes — and harnesses let you switch mid-[session](#session).

Being strict about the word also sharpens diagnosis. "The model is bad at this" is a specific claim — the same model in a different harness, or with a different [context](#context), often behaves completely differently. Before blaming the model, check what it was given: most disappointing output traces back to context or harness, not parameters.

_Usage:_

"Should we switch the model from Sonnet to Opus for the planning step?"

"Try it — but the harness is doing most of the lifting on this task. The model swap won't help if the [system prompt](#system-prompt) and tools are wrong."

#### ไทย

ชุด [parameters](#parameters) ที่ทำงานแบบ [Stateless](#stateless) (ไม่มีการจำสถานะ) โดยหน้าที่ของมันมีเพียงการทำ [next-token prediction](#next-token-prediction) (คาดเดา token ถัดไป) เท่านั้นและไม่ทำอย่างอื่นเลย โมเดลอย่าง "Claude Opus 4.x" และ "GPT-5.x" ถือเป็น model โดยลำพังตัวมันเองแล้ว model ไม่สามารถดำเนินการหรือคิดตัดสินใจใดๆ เองได้ มันจำเป็นต้องถูกควบคุมและจัดลำดับงานผ่านระบบที่เรียกว่า [harness](#harness)

model ไม่สามารถอ่านไฟล์, รันคำสั่ง, ท่องเว็บ หรือจำเรื่องราวเมื่อวานนี้ได้ สิ่งที่มันทำคือรับ [token](#token) เข้าไปและคาดเดา token ส่งกลับออกมา โดยทำงานหนึ่งครั้งต่อหนึ่ง [model provider request](#model-provider-request) ดังนั้น ทุกอย่างที่ทำให้เราชวนรู้สึกว่ามี [agent](#agent) กำลังทำงานอยู่ ไม่ว่าจะเป็นการเลือกใช้ [tools](#tool), การอ่านผลลัพธ์ หรือการวนลูปจนกว่างานจะเสร็จ ล้วนเป็นฝีมือของตัว harness ที่เข้ามาจัดระเบียบและสั่งการให้เกิดการคาดเดาเหล่านั้นต่อเนื่องกัน

[Model providers](#model-provider) (ผู้ให้บริการโมเดล) มักจะปล่อยโมเดลออกมาเป็นระดับ (tier) ตั้งแต่โมเดลขนาดใหญ่ที่ฉลาดที่สุดแต่ทำงานช้าและมีราคาแพง ไปจนถึงโมเดลขนาดเล็กที่เร็วกว่าและถูกกว่าแต่มีความสามารถน้อยกว่า การเลือก tier จึงเป็นเรื่องสำคัญที่คุณต้องตัดสินใจจริง เช่น เลือกใช้โมเดลรุ่นใหญ่เพื่องานวางแผนและการทำดีบั๊กที่ยากๆ และเลือกใช้รุ่นเล็กเพื่องานแก้ไขเชิงกลไกทั่วไป ซึ่งระบบ harness จะช่วยให้คุณสลับรุ่นโมเดลได้ในระหว่าง [session](#session)

การแยกแยะและใช้คำว่า model อย่างเคร่งครัดจะช่วยให้เราหาสาเหตุของปัญหาได้แม่นยำขึ้น ข้อสรุปที่ว่า "model ทำงานนี้ได้แย่" เป็นข้ออ้างที่เฉพาะเจาะจงมาก เพราะ model เดียวกันเมื่ออยู่ใน harness คนละตัว หรือได้รับ [บริบท](#context) ที่ต่างไป มักจะแสดงพฤติกรรมออกมาต่างกันโดยสิ้นเชิง ดังนั้นก่อนจะโทษว่าเป็นเพราะ model ให้ตรวจสอบสิ่งที่เราป้อนให้มันก่อน เพราะผลลัพธ์ที่น่าผิดหวังส่วนใหญ่มักมีสาเหตุมาจากบริบทหรือตัว harness ไม่ใช่ตัว parameters

_ตัวอย่างการใช้งาน:_

"ขั้นตอนการวางแผนนี่ เราควรสลับ model จาก Sonnet เป็น Opus ดีไหม"

"ลองดูได้นะ แต่จริงๆ งานนี้ระบบ harness เป็นตัวแบกหลักเลย ต่อให้เปลี่ยน model ก็อาจจะไม่ช่วยอะไรถ้า [system prompt](#system-prompt) กับ tools ที่เตรียมไว้มันยังไม่ถูก"

### Parameters

#### English

The numbers inside a [model](#model) — often billions of them — tuned during [training](#training). Everything the model "knows" lives in them. Training sets them; [inference](#inference) uses them unchanged. Also called _weights_.

Mechanically, the parameters are what turn input into output. [Next-token prediction](#next-token-prediction) is a giant calculation: the [tokens](#token) in the [context window](#context-window) go in, get multiplied through the parameters, and a prediction for the next token comes out. There is no database of facts inside the model, no code lookup table — just these numbers, arranged so that the calculation tends to produce useful output. Facts the model can recite from training, like a standard library API, are [parametric knowledge](#parametric-knowledge): stored in the parameters, not retrieved from anywhere.

The detail worth internalising is that parameters are frozen after training. Nothing you do in a [session](#session) changes them — no correction you make, no codebase you show it, no mistake it learns from. Every session runs on the same numbers. This is why the model is [stateless](#stateless), why its built-in knowledge stops at the [knowledge cutoff](#knowledge-cutoff), and why anything project-specific has to arrive via [context](#context) instead. The only way parameters change is more training — which produces, in effect, a different model.

_Usage:_

"Can we fine-tune it on our codebase?"

"That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as context than to retrain."

#### ไทย

ตัวเลขภายใน [model](#model) ซึ่งมักจะมีจำนวนหลายพันล้านตัว ที่ถูกปรับแต่งในระหว่างกระบวนการ [training](#training) (การฝึกฝน) ทุกสิ่งที่โมเดล "รู้" ล้วนฝังอยู่ในตัวเลขเหล่านี้ กระบวนการฝึกฝนจะเป็นผู้กำหนดค่าตัวเลขเหล่านี้ ส่วนการนำไปใช้งานหรือ [การอนุมาน](#inference) จะดึงตัวเลขเหล่านี้ไปใช้โดยไม่มีการเปลี่ยนแปลงใดๆ ตัวเลขเหล่านี้เรียกอีกอย่างหนึ่งว่า _weights_ (ค่าน้ำหนัก)

ในเชิงกลไก parameters คือสิ่งที่มีหน้าที่เปลี่ยนข้อมูลนำเข้า (input) ให้กลายเป็นผลลัพธ์ (output) กระบวนการ [next-token prediction](#next-token-prediction) คือการคำนวณทางคณิตศาสตร์ขนาดมหึมา โดย [token](#token) ที่อยู่ใน [context window](#context-window) จะถูกส่งเข้ามาคำนวณผ่านการคูณเข้ากับ parameters เหล่านี้ แล้วผลลัพธ์ที่ได้จะเป็นการคาดเดาสำหรับ token ถัดไป ภายในโมเดลไม่มีฐานข้อมูลข้อเท็จจริงและไม่มีตารางค้นหารหัสคำสั่ง (code lookup table) มีเพียงตัวเลขเหล่านี้ที่จัดเรียงตัวกันในรูปแบบที่ทำให้การคำนวณมีแนวโน้มที่จะผลิตผลลัพธ์ที่เป็นประโยชน์ออกมา ข้อเท็จจริงต่างๆ ที่โมเดลสามารถท่องจำได้จากการฝึกฝน เช่น API ของ standard library จะเรียกว่า [parametric knowledge](#parametric-knowledge) (ความรู้ในพารามิเตอร์) ซึ่งถูกจัดเก็บไว้ในตัว parameters เอง ไม่ได้ดึงมาจากแหล่งข้อมูลภายนอกอื่นใด

รายละเอียดสำคัญที่ต้องทำความเข้าใจให้ขึ้นใจคือ parameters จะถูกแช่แข็ง (frozen) ทันทีหลังจากการฝึกฝนเสร็จสิ้น ไม่มีสิ่งใดที่คุณทำในระหว่าง [session](#session) ที่จะสามารถเปลี่ยนค่าตัวเลขเหล่านี้ได้ ไม่ว่าจะเป็นการตักเตือนแก้ไข ข้อความโค้ดเบสที่คุณส่งให้มันดู หรือความผิดพลาดที่มันควรจะเรียนรู้ ทุกๆ session จะทำงานบนชุดตัวเลขเดิมเสมอ นี่คือเหตุผลที่ทำให้โมเดลทำงานแบบ [stateless](#stateless) (ไม่มีการจำสถานะ), ความรู้ในตัวมันจึงหยุดลง ณ วันที่ตัดข้อมูลความรู้ ([knowledge cutoff](#knowledge-cutoff)), และข้อมูลใดๆ ที่เฉพาะเจาะจงกับโปรเจกต์จึงจำเป็นต้องส่งผ่านทาง [บริบท](#context) แทน วิธีเดียวที่จะเปลี่ยน parameters ได้คือการทำ training เพิ่มเติม ซึ่งผลลัพธ์ที่ได้ก็คือโมเดลตัวใหม่นั่นเอง

_ตัวอย่างการใช้งาน:_

"เราสามารถทำ fine-tune โมเดลนี้ด้วยโค้ดเบสของเราได้ไหม"

"ทำแบบนั้นมันจะไปอัปเดต parameters ซึ่งทำให้ได้โมเดลตัวใหม่เลยนะ ถ้าทำแค่โปรเจกต์เดียว การโหลดโค้ดเบสเข้าไปเป็นบริบทมักจะประหยัดค่าใช้จ่ายกว่าการเทรนใหม่เกือบเสมอ"

### Training

#### English

The process that sets a [model](#model)'s [parameters](#parameters), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](#next-token-prediction). A one-time, expensive process done by the [model provider](#model-provider). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.

The mechanism is repetition at scale: show the model a stretch of text, have it predict the next [token](#token), nudge the parameters toward whatever the actual next token was, and repeat across trillions of tokens. Nothing is stored as facts or rules — everything the model "knows" is a side effect of getting better at prediction, compressed into the parameters as [parametric knowledge](#parametric-knowledge).

Two consequences matter day to day. Training ends at a point in time, so the model has a [knowledge cutoff](#knowledge-cutoff) — it hasn't seen the library version you upgraded to last month. And training is not something you can do: when the model doesn't know your codebase, your conventions, or your internal APIs, the fix is never "teach the model" — it's putting that material into [context](#context), the one input you control.

_Usage:_

"Can we get it to know our internal API?"

"Not via training — that's a months-long process by the model provider. Load the API docs into context instead, that's the lever you actually have."

#### ไทย

กระบวนการกำหนดค่า [parameters](#parameters) ของ [model](#model) โดยการป้อนข้อความปริมาณมหาศาลให้โมเดลได้เรียนรู้ และปรับแต่งค่าพารามิเตอร์เพื่อพัฒนาความสามารถในการทำ [next-token prediction](#next-token-prediction) กระบวนการนี้ทำเพียงครั้งเดียวและมีค่าใช้จ่ายสูงมากโดย [model provider](#model-provider) (ผู้ให้บริการโมเดล) ซึ่งจะครอบคลุมทั้งขั้นตอน pre-training (การรันข้อมูลหลักชุดใหญ่) และ post-training (การปรับแต่งรายละเอียดในภายหลัง เช่น การฝึกให้ปฏิบัติตามคำสั่งและความปลอดภัย) ซึ่งความแตกต่างในสองส่วนนี้ไม่มีผลต่อเนื้อหาในพจนานุกรมระดับนี้

กลไกของมันคือการทำซ้ำในระดับสเกลที่ใหญ่มาก โดยระบบจะแสดงข้อความส่วนหนึ่งให้โมเดลเห็น จากนั้นให้มันคาดเดา [token](#token) ถัดไป แล้วทำการปรับเปลี่ยนค่า parameters เล็กน้อยให้ขยับเข้าใกล้ token ที่ถูกต้องจริงๆ ทำแบบนี้ซ้ำไปซ้ำมากับโทเค็นหลายล้านล้านตัว ภายในระบบไม่มีการจัดเก็บข้อมูลในลักษณะข้อเท็จจริงหรือกฎเกณฑ์ใดๆ ทุกสิ่งที่โมเดล "รู้" เป็นเพียงผลพลอยได้จากการที่มันพัฒนาความสามารถในการคาดเดาให้เก่งขึ้น ซึ่งถูกบีบอัดลงใน parameters ในรูปแบบของ [parametric knowledge](#parametric-knowledge)

มีผลลัพธ์สองประการที่ส่งผลต่อการทำงานในแต่ละวันของเรา อย่างแรกคือ กระบวนการฝึกฝนจะสิ้นสุดลง ณ จุดเวลาใดเวลาหนึ่ง โมเดลจึงมีข้อจำกัดเรื่องวันตัดข้อมูลความรู้ ([knowledge cutoff](#knowledge-cutoff)) มันจึงไม่เคยเห็นเวอร์ชันของไลบรารีที่คุณเพิ่งอัปเกรดไปเมื่อเดือนที่แล้ว และอย่างที่สองคือ การเทรนไม่ใช่สิ่งที่คุณจะทำเองได้ เมื่อโมเดลไม่รู้จักโค้ดเบส ข้อตกลงร่วมกันในการเขียนโค้ด หรืออินเทอร์นอล API ของคุณ วิธีแก้ปัญหาจึงไม่ใช่การพยายามไป "สอนโมเดล" แต่คือการใส่เนื้อหาเหล่านั้นลงไปใน [บริบท](#context) ซึ่งเป็นข้อมูลนำเข้าเพียงอย่างเดียวที่คุณสามารถควบคุมได้

_ตัวอย่างการใช้งาน:_

"เราจะทำให้มันรู้จักอินเทอร์นอล API ของเราได้ไหม"

"ไม่ใช่ด้วยการทำ training แน่ๆ เพราะนั่นเป็นกระบวนการที่กินเวลาหลายเดือนโดยผู้ให้บริการโมเดล ให้โหลดเอกสาร API เข้าไปในบริบทแทนเถอะ นั่นคือเครื่องมือเดียวที่คุณควบคุมได้จริง"

### Inference

#### English

Running a trained [model](#model) to generate output — what happens on every [model provider request](#model-provider-request). [Parameters](#parameters) stay fixed; the model just does [next-token prediction](#next-token-prediction) over the [context](#context) it's given. Cheap relative to [training](#training), but billed per [token](#token) and the dominant cost of using a model.

A model's life splits into two phases:

| Phase     | When it happens                  | What it does                                                    | Parameters    |
| --------- | -------------------------------- | --------------------------------------------------------------- | ------------- |
| Training  | Once, before release             | Produces the parameters from a training corpus                  | Being written |
| Inference | Every time anyone uses the model | Runs the frozen parameters over your context to generate tokens | Read-only     |

Nothing you do at inference time writes back to the parameters — that's the reason a correction you make today doesn't stick tomorrow. The model that makes the same mistake next [session](#session), after you carefully explained the fix, hasn't ignored you; it's incapable of learning from the exchange. The model is [stateless](#stateless) — continuity has to come from outside it — from the [context window](#context-window) or a [memory system](#memory-system).

This mechanism also explains how you're billed. Every request runs the model over the full context, so cost scales with [input tokens](#input-tokens) and [output tokens](#output-tokens), and an agent making dozens of [tool](#tool) calls pays for inference on each round trip. This is why context size is a cost question as well as a quality one.

_Usage:_

"Why does the bill scale with usage instead of being a flat license?"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](#turn) can expand into many requests when tools are called."

#### ไทย

การรัน [model](#model) ที่ผ่านการฝึกฝนแล้วเพื่อสร้างผลลัพธ์ออกมา ซึ่งเป็นสิ่งเกิดขึ้นในทุกๆ [model provider request](#model-provider-request) ในขั้นตอนนี้ ค่า [parameters](#parameters) จะคงเดิมไม่เปลี่ยนแปลง โมเดลเพียงแค่ทำหน้าที่ [next-token prediction](#next-token-prediction) บน [บริบท](#context) ที่ถูกป้อนเข้ามา การอนุมานมีค่าใช้จ่ายที่ถูกมากเมื่อเทียบกับขั้นตอน [training](#training) (การฝึกฝน) แต่จะถูกเรียกเก็บเงินตามจำนวน [token](#token) และถือเป็นต้นทุนหลักในการใช้งานโมเดล

ชีวิตของโมเดลถูกแบ่งออกเป็นสองช่วงเวลาหลัก:

| ช่วงเวลา  | เกิดขึ้นเมื่อใด                    | สิ่งที่ระบบทำ                                                             | สภาพของ Parameters                     |
| --------- | ---------------------------------- | ------------------------------------------------------------------------- | -------------------------------------- |
| Training  | เกิดขึ้นครั้งเดียว ก่อนปล่อยใช้งาน | สร้างและกำหนดค่า parameters จากชุดข้อมูลที่ใช้เทรน                        | อยู่ในระหว่างการเขียนข้อมูล (Writable) |
| Inference | เกิดขึ้นทุกครั้งที่มีคนใช้งานโมเดล | รันค่า parameters ที่ถูกแช่แข็งไว้ร่วมกับบริบทของคุณเพื่อสร้างโทเค็นออกมา | อ่านได้อย่างเดียว (Read-only)          |

ไม่มีสิ่งใดที่คุณทำในช่วงเวลาของการอนุมานที่จะถูกเขียนกลับไปยัง parameters นี่คือเหตุผลว่าทำไมสิ่งที่คุณตักเตือนแก้ไขไปในวันนี้จะไม่ถูกจดจำในวันพรุ่งนี้ โมเดลที่ยังคงทำผิดพลาดแบบเดิมซ้ำอีกใน [session](#session) ถัดไป ทั้งที่คุณได้อธิบายวิธีแก้ไขอย่างละเอียดไปแล้ว ไม่ได้แปลว่ามันเพิกเฉยต่อคุณ แต่มันไม่มีความสามารถในการเรียนรู้จากการสนทนานั้นต่างหาก โมเดลทำงานแบบ [stateless](#stateless) (ไม่จำสถานะ) ความต่อเนื่องของเนื้อหาจึงต้องถูกจัดการจากภายนอกตัวมันเอง เช่น ผ่านทาง [context window](#context-window) หรือตัว [ระบบความจำ](#memory-system)

กลไกนี้ยังช่วยอธิบายวิธีที่คุณถูกเรียกเก็บเงินอีกด้วย เนื่องจากในทุกๆ request ระบบจะต้องรันโมเดลครอบคลุมบริบททั้งหมด ค่าใช้จ่ายจึงแปรผันตามจำนวน [input tokens](#input-tokens) และ [output tokens](#output-tokens) โดยตรง และการที่ agent ทำการเรียกใช้เครื่องมือ ([tool call](#tool-call)) หลายสิบครั้ง ย่อมหมายความว่าคุณต้องจ่ายค่าการอนุมานในทุกๆ รอบของการส่งข้อมูลไปกลับ นี่คือสาเหตุที่ขนาดของบริบทไม่ใช่แค่เรื่องของคุณภาพงาน แต่เป็นเรื่องของค่าใช้จ่ายด้วยเช่นกัน

_ตัวอย่างการใช้งาน:_

"ทำไมบิลค่าบริการถึงคิดเงินตามการใช้งานจริง แทนที่จะคิดเป็นค่าสิทธิ์การใช้งานแบบเหมาจ่าย (flat license) ล่ะ"

"เพราะคุณกำลังจ่ายค่าการอนุมาน (inference) ไงครับ ทุกครั้งที่ส่ง request ไปหาผู้ให้บริการโมเดล มันคือการรันโมเดลบนฮาร์ดแวร์ของเขา กระบวนการเทรนมันจบไปแล้วก็จริง แต่ต้นทุนการอนุมานจะเกิดขึ้นใหม่ในทุกๆ request และการคุยกันแค่รอบเดียว ([turn](#turn)) ก็สามารถงอกกลายเป็นหลาย request ได้เมื่อมีการเรียกใช้เครื่องมือต่างๆ"

### Effort

#### English

Effort is a dial for how much reasoning a [model](#model) does before it answers. Set per [model provider request](#model-provider-request), it controls the length of the thinking the model works through before it starts writing the response you see. That thinking is generated at [inference](#inference) time like everything else; the [harness](#harness) often hides it, but it's real work the model is doing.

Higher effort costs more and runs slower. The reasoning is emitted as [tokens](#token), billed as [output tokens](#output-tokens) even when you never see them, and produced one token at a time — so turning effort up lengthens the wait before the answer arrives and adds to the bill. The trade is more deliberation against speed and cost.

Most harnesses expose effort as a small ladder:

| Level  | What it's for                                                          |
| ------ | ---------------------------------------------------------------------- |
| Low    | Mechanical edits, lookups, well-specified changes with one clear path. |
| Medium | Everyday coding — the usual default.                                   |
| High   | Tricky bugs, design decisions, multi-step plans.                       |
| Max    | The hardest problems, where a wrong answer is expensive to unwind.     |

The symptom of getting it wrong cuts both ways. Set effort too low on a hard problem and you get a confident, shallow answer that skipped the reasoning the problem needed — it reads fine and is wrong in a way that costs you later. Set it to max for a one-line rename and you sit through a long think that produces nothing the lowest setting wouldn't have.

Match effort to the task, not the [session](#session). Turn it up for the part that's genuinely hard to reason about, and back down for the rote work around it.

_Usage:_

"It keeps botching this concurrency fix — I've re-explained it three times."

"Bump the effort up. That's a reasoning-heavy bug, and on the default setting it's not thinking long enough before it commits to an approach."

#### ไทย

Effort คือปุ่มปรับระดับความลึกซึ้งในการคิดวิเคราะห์ (reasoning) ของ [model](#model) ก่อนที่มันจะให้คำตอบกลับมา โดยจะถูกกำหนดค่าต่อหนึ่ง [model provider request](#model-provider-request) เพื่อควบคุมความยาวของกระบวนการคิดที่โมเดลต้องไล่เรียงภายในระบบ ก่อนจะเริ่มเขียนคำตอบที่คุณมองเห็น กระบวนการคิดดังกล่าวจะถูกสร้างขึ้นในช่วงเวลาของการ [อนุมาน](#inference) เหมือนกับข้อมูลส่วนอื่นๆ แม้ว่าตัว [harness](#harness) มักจะซ่อนส่วนนี้เอาไว้ แต่มันคือการทำงานจริงที่โมเดลกำลังประมวลผลอยู่

การปรับ effort ให้สูงขึ้นจะมีค่าใช้จ่ายที่แพงกว่าและทำงานช้ากว่า เนื่องจากกระบวนการคิดวิเคราะห์นั้นจะถูกส่งออกมาในรูปแบบของ [token](#token) และถูกคิดเงินเป็น [output tokens](#output-tokens) แม้ว่าคุณจะไม่ได้เห็นข้อความเหล่านั้นเลยก็ตาม และมันจะถูกสร้างขึ้นทีละโทเค็น ดังนั้นการเพิ่มระดับ effort จึงทำให้คุณต้องรอนานขึ้นกว่าที่คำตอบจะมาถึงและทำให้บิลค่าบริการสูงขึ้น สิ่งที่คุณจะได้แลกกลับมาคือความสุขุมรอบคอบในการวิเคราะห์ที่มากขึ้น โดยต้องแลกกับความเร็วและค่าใช้จ่าย

ระบบ harness ส่วนใหญ่มักจะแสดงระดับ effort เป็นขั้นบันไดสั้นๆ ดังนี้:

| ระดับ  | วัตถุประสงค์การใช้งาน                                                                                           |
| ------ | --------------------------------------------------------------------------------------------------------------- |
| Low    | งานแก้ไขเชิงกลไกทั่วไป, การค้นหาข้อมูล, งานปรับเปลี่ยนโค้ดที่มีข้อกำหนดชัดเจนและมีเส้นทางแก้ไขที่แน่นอนอยู่แล้ว |
| Medium | งานเขียนโค้ดทั่วไปในแต่ละวัน — ซึ่งมักจะเป็นค่าเริ่มต้นมาตรฐาน                                                  |
| High   | บั๊กที่ซับซ้อนและรับมือยาก, การตัดสินใจเชิงออกแบบสถาปัตยกรรม, แผนงานที่มีหลายขั้นตอน                            |
| Max    | ปัญหาที่ยากที่สุด ซึ่งหากตอบผิดพลาดจะมีมูลค่าความเสียหายและต้นทุนในการแก้ไขสูงมาก                               |

ผลเสียจากการเลือกโหมดผิดพลาดสามารถเกิดขึ้นได้ทั้งสองทาง หากคุณตั้งระดับ effort ต่ำเกินไปสำหรับโจทย์ที่ยาก คุณจะได้คำตอบที่ดูมั่นใจแต่ตื้นเขิน ซึ่งมองข้ามการคิดวิเคราะห์ที่จำเป็นสำหรับปัญหานั้นไป คำตอบจะอ่านดูสละสลวยดีแต่แฝงข้อผิดพลาดที่สร้างปัญหาให้คุณในภายหลัง ในทางกลับกัน หากคุณตั้งไว้ที่ระดับสูงสุดเพียงเพื่อเปลี่ยนชื่อตัวแปรแค่บรรทัดเดียว คุณจะต้องนั่งรอโมเดลนั่งคิดเป็นเวลานานโดยไม่ได้ผลลัพธ์อะไรที่แตกต่างไปจากระดับต่ำสุดเลย

ควรปรับระดับ effort ให้สอดคล้องกับตัวงาน ไม่ใช่ปรับทิ้งไว้ตลอดทั้ง [session](#session) ให้เลือกเพิ่มระดับในส่วนที่ยากต่อการคิดวิเคราะห์จริงๆ และปรับลดลงมาเมื่องานส่วนนั้นเป็นเพียงงานรูทีนทั่วไป

_ตัวอย่างการใช้งาน:_

"มันยังแก้บั๊กการทำงานพร้อมกัน (concurrency fix) ตัวนี้ผิดอยู่เรื่อยเลย ขนาดอธิบายซ้ำไปสามรอบแล้วนะ"

"ลองดันระดับ effort ขึ้นดูสิ บั๊กประเภทนั้นต้องใช้การคิดวิเคราะห์สูงมาก ถ้าใช้ค่าเริ่มต้น มันยังคิดไม่นานพอที่จะเลือกแนวทางที่ถูกต้องก็ด่วนสรุปคำตอบซะก่อนแล้ว"

### Token

#### English

The atomic unit a [model](#model) reads and writes. Roughly word-sized but not exactly — common words are one token, rare or long ones split into several. [Context window](#context-window) size, cost, and latency are all counted in tokens.

Text becomes tokens via a tokenizer: a fixed vocabulary of tens of thousands of fragments, learned before [training](#training), that splits any input into a sequence of vocabulary entries. The model never sees characters or words — every piece of text is converted to tokens on the way in, and [next-token prediction](#next-token-prediction) produces output one token at a time on the way out.

As a rule of thumb, a token is about three-quarters of an English word, so a thousand tokens is roughly 750 words. Code is less predictable: common keywords and idioms tokenize compactly, while generated identifiers, hashes, base64 blobs, and minified output split into many tokens per "word". The pattern: text that appeared often in the tokenizer's source material gets short, efficient encodings; text that didn't gets chopped into many small pieces. A hash like `a3f9c2e1` never appeared anywhere, so it splits into many tokens, while `function` is one. This is why a small-looking file full of unusual strings can occupy a surprising share of the context window.

Tokens are the unit everything else is measured in. Cost is per token — providers bill [input tokens](#input-tokens) and [output tokens](#output-tokens) separately. Speed is tokens per second, since output is generated one token at a time. And the context window is a fixed number of tokens, so the token count of your files decides how much fits.

_Avoid:_ "word" — token boundaries don't match word boundaries, and tokens-per-second / tokens-per-dollar are the units that actually matter.

_Usage:_

"How big is this prompt going to be?"

"Run it through the tokenizer — the schema's compact but the JSON keys are weird, so they'll split into more tokens than you think."

#### ไทย

หน่วยย่อยที่สุด (atomic unit) ที่ [model](#model) ใช้ในการอ่านและเขียน มีขนาดใกล้เคียงกับคำหนึ่งคำแต่ไม่ตรงกันเป๊ะ โดยคำทั่วไปที่พบบ่อยจะนับเป็นหนึ่ง token ส่วนคำที่พบยากหรือคำที่มีความยาวจะถูกหั่นย่อยออกเป็นหลายโทเค็น ทั้งขนาดของ [context window](#context-window), ค่าใช้จ่าย และความหน่วง (latency) ล้วนถูกคำนวณนับด้วยหน่วยโทเค็นทั้งสิ้น

ข้อความจะถูกแปลงสภาพให้กลายเป็นโทเค็นผ่านเครื่องมือที่เรียกว่า tokenizer ซึ่งภายในบรรจุคลังคำศัพท์ (vocabulary) ขนาดหลายหมื่นชิ้นส่วนที่ถูกกำหนดไว้ตายตัวและเรียนรู้มาตั้งแต่ก่อนขั้นตอน [training](#training) (การฝึกฝน) ทำหน้าที่หั่นข้อมูลนำเข้าใดๆ ให้กลายเป็นลำดับของชิ้นส่วนคำศัพท์เหล่านั้น โมเดลไม่มีวันมองเห็นตัวอักษรหรือคำโดดๆ ข้อความทุกชิ้นจะถูกแปลงเป็นโทเค็นในขาเข้า และกระบวนการ [next-token prediction](#next-token-prediction) ก็จะผลิตผลลัพธ์ออกมาทีละหนึ่งโทเค็นในขาออกเช่นกัน

หากจะประเมินคร่าวๆ หนึ่งโทเค็นจะมีขนาดประมาณ 3 ใน 4 ของคำในภาษาอังกฤษ ดังนั้น โทเค็นจำนวน 1,000 ตัว จะเท่ากับคำประมาณ 750 คำ แต่สำหรับโค้ด (code) จะคาดเดาได้ยากกว่า เนื่องจากคีย์เวิร์ดและรูปแบบโค้ดที่ใช้บ่อยจะถูกแปลงเป็นโทเค็นได้อย่างกะทัดรัด ในขณะที่ชื่อตัวแปรที่ถูกสร้างขึ้น (generated identifiers), ค่าแฮช (hashes), บล็อกข้อความ base64 หรือโค้ดที่ถูกย่อขนาด (minified output) จะถูกสับออกเป็นหลายโทเค็นต่อหนึ่ง "คำ" รูปแบบที่เกิดขึ้นคือ ข้อความใดที่ปรากฏบ่อยในคลังข้อมูลของ tokenizer จะได้รหัสที่สั้นและมีประสิทธิภาพ ส่วนข้อความที่ไม่ค่อยพบจะถูกสับเป็นชิ้นเล็กชิ้นน้อย ตัวอย่างเช่น ค่าแฮชอย่าง `a3f9c2e1` ที่ไม่เคยปรากฏที่ไหนเลยจะถูกสับออกเป็นหลายโทเค็น ในขณะที่คำว่า `function` จะนับเป็นหนึ่งโทเค็น นี่คือเหตุผลว่าทำไมไฟล์ขนาดเล็กที่ดูไม่มีอะไร แต่อัดแน่นไปด้วยสตริงหน้าตาแปลกๆ จึงสามารถกินพื้นที่ใน context window ได้มากจนน่าประหลาดใจ

โทเค็นคือหน่วยวัดสำหรับทุกสิ่งทุกอย่างในระบบ ค่าใช้จ่ายจะคิดราคาต่อโทเค็น โดยผู้ให้บริการจะแยกบิลระหว่าง [input tokens](#input-tokens) และ [output tokens](#output-tokens) ความเร็วของระบบจะวัดเป็นจำนวนโทเค็นต่อวินาที เนื่องจากผลลัพธ์ถูกสร้างออกมาทีละโทเค็น และช่องหน้าต่างบริบท (context window) ก็ถูกจำกัดด้วยจำนวนโทเค็นที่ตายตัว ดังนั้น จำนวนโทเค็นในไฟล์ของคุณจึงเป็นตัวกำหนดว่าจะมีข้อมูลหลงเหลือพื้นที่ให้ใส่เข้าไปได้มากน้อยเพียงใด

_สิ่งที่ควรเลี่ยง:_ การใช้คำว่า "คำ" (word) เนื่องจากขอบเขตของโทเค็นไม่ได้ตรงกับขอบเขตของคำ และหน่วยวัดที่ส่งผลต่อการทำงานจริงคือ โทเค็นต่อวินาที หรือ โทเค็นต่อดอลลาร์

_ตัวอย่างการใช้งาน:_

"prompt ชุดนี้จะกินพื้นที่ขนาดไหนเนี่ย"

"ลองเอาไปรันผ่าน tokenizer ดูก่อนสิ โครงสร้าง (schema) มันดูกะทัดรัดก็จริง แต่คีย์ของ JSON มันแปลกมาก ระบบน่าจะสับมันออกมาเป็นโทเค็นเยอะกว่าที่คิดนะ"

### Next-token prediction

#### English

What the [model](#model) actually does. Given a [context](#context), it samples one next [token](#token), appends it, and runs again. Every output — a sentence, a [tool call](#tool-call), a thousand-line file — is built one token at a time. The model has no other mode of operation.

Each step works the same way: the tokens in the [context window](#context-window) are run through the [parameters](#parameters), which produce a probability for every token in the vocabulary — this one is very likely next, that one less so. One token is sampled from those probabilities, appended, and the loop runs again with the slightly longer context. That sampling step is why the same prompt produces different output on different runs: [non-determinism](#non-determinism) is built into the mechanism, not a bug layered on top.

Holding onto this mechanism explains behaviour that otherwise looks strange. The model never checks whether a token is _true_ before emitting it — only whether it's _likely_ — which is the root of [hallucination](#hallucination). It commits to each token as it goes, so a confident-sounding opening sentence can steer the rest of the answer wrong. And because [output tokens](#output-tokens) are produced strictly one at a time, generation speed puts a floor on how fast any [agent](#agent) can work.

_Usage:_

"How does the agent 'decide' to call a tool?"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](#harness) parses out of the output stream."

#### ไทย

สิ่งที่ [model](#model) ทำจริง ๆ คือสิ่งนี้ เมื่อได้รับ[บริบท](#context) (context) มันจะทำการสุ่มเลือก [token](#token) ถัดไปขึ้นมาหนึ่งตัว นำมาต่อท้ายข้อความเดิม แล้วเริ่มต้นประมวลผลใหม่อีกครั้ง ผลลัพธ์ทุกอย่างที่คุณเห็น ไม่ว่าจะเป็นประโยคสั้น ๆ การเรียกใช้เครื่องมือ ([tool call](#tool-call)) หรือไฟล์โค้ดความยาวเป็นพันบรรทัด ล้วนถูกสร้างขึ้นทีละโทเค็นทั้งสิ้น model ไม่มีโหมดการทำงานในรูปแบบอื่นเลย

ทุกขั้นตอนการประมวลผลมีกลไกที่เหมือนกันคือ token ทั้งหมดที่อยู่ใน [context window](#context-window) จะถูกส่งเข้าไปคำนวณผ่าน [parameters](#parameters) ซึ่งจะคำนวณค่าความน่าจะเป็นออกมาสำหรับทุก ๆ token ที่มีอยู่ในคลังคำศัพท์ (vocabulary) ผลลัพธ์จะบอกว่าโทเค็นตัวไหนมีโอกาสเกิดขึ้นถัดไปมากที่สุดและตัวไหนมีโอกาสน้อย ระบบจะสุ่มเลือกโทเค็นขึ้นมาหนึ่งตัวจากค่าความน่าจะเป็นเหล่านั้น นำไปต่อท้าย และวนลูปทำงานต่อด้วยบริบทที่ยาวขึ้นเล็กน้อย ขั้นตอนการสุ่มเลือก (sampling) นี้เองคือเหตุผลที่ทำให้การส่ง prompt ชุดเดิมสามารถให้ผลลัพธ์ที่แตกต่างกันในการรันแต่ละครั้ง [ความไม่แน่นอนในผลลัพธ์](#non-determinism) (non-determinism) จึงเป็นคุณสมบัติที่ติดมากับกลไกนี้ตั้งแต่แรก ไม่ใช่บั๊กที่เกิดขึ้นในภายหลัง

การทำความเข้าใจกลไกนี้จะช่วยอธิบายพฤติกรรมของ model ที่อาจดูแปลกประหลาดในสายตาคนทั่วไป ตัว model ไม่เคยตรวจสอบว่า token ที่มันกำลังพ่นออกมานั้นเป็นเรื่องที่ "ถูกต้องตามข้อเท็จจริง" หรือไม่ มันสนใจเพียงแค่ว่าโทเค็นนั้น "มีความน่าจะเป็นที่จะเกิดขึ้นถัดไป" มากน้อยเพียงใด ซึ่งนี่คือรากเหง้าของการเกิด [hallucination](#hallucination) นอกจากนี้โมเดลจะผูกมัดตัวเองเข้ากับแต่ละโทเค็นที่เลือกไปแล้วทันที ดังนั้น ประโยคเปิดที่ฟังดูมั่นใจแต่ผิดพลาด สามารถชี้นำให้คำตอบส่วนที่เหลือหลงทิศหลงทางไปได้ทั้งหมด และเนื่องจาก [output tokens](#output-tokens) จะถูกผลิตออกมาทีละตัวอย่างเข้มงวด ความเร็วในการสร้างโทเค็นจึงกลายเป็นขีดจำกัดขั้นต่ำที่กำหนดความเร็วในการทำงานของ [agent](#agent) ทุกตัว

_ตัวอย่างการใช้งาน:_

"ตัว agent มัน 'ตัดสินใจ' เลือกเรียกใช้เครื่องมือยังไงเหรอ"

"มันไม่ได้คิดหรือตัดสินใจอะไรหรอกครับ ทุกอย่างเป็นแค่ next-token prediction ล้วน ๆ การทำ tool call ก็เป็นแค่ข้อความที่มีโครงสร้าง (structured string) ที่ตัว [harness](#harness) เข้าไปแกะออกมาจากกระแสข้อมูลขาออก (output stream) เท่านั้นเอง"

### Non-determinism

#### English

The same input can produce different output. Run a [model](#model) twice with identical [context](#context) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.

It's a property of how models generate text, and how [model providers](#model-provider) serve [requests](#model-provider-request). During [inference](#inference), the model produces a probability distribution over possible next [tokens](#token) and one is sampled from it — usually with some randomness on purpose, since always picking the most likely token produces repetitive, lower-quality text. One differently-sampled token early in a response changes every token after it, which is how a single different word becomes a completely different approach. Provider-side serving adds more variation on top: requests are batched together on shared hardware, and tiny floating-point differences between batches can tip a close call between two tokens. There's no setting you can flip to make it all go away.

Expect a spread of results from an [agent](#agent) on the same task. Most responses fall within a reasonable bell curve of quality — that's why the non-determinism is tolerable at all — but the tails are real: some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice. This has two practical consequences. Retrying is a legitimate strategy: a failed attempt is one draw from the distribution, and a fresh attempt at the same task may simply land better. And verification matters more than it would with deterministic tools — you can't test an agent's behaviour once and rely on it repeating, so [automated checks](#automated-check) have to catch the bad draws.

Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.

_Usage:_

"Claude has been awful today. Did they ship a worse version?"

"Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."

#### ไทย

ข้อมูลนำเข้าชุดเดียวกันสามารถให้ผลลัพธ์ที่แตกต่างกันได้ การรัน [model](#model) สองครั้งด้วย[บริบท](#context)ที่เหมือนกันทุกประการอาจทำให้คุณได้คำตอบที่ต่างกันออกไป บางครั้งอาจเปลี่ยนไปแค่คำบางคำ แต่บางครั้งอาจเปลี่ยนแนวทางการแก้ปัญหาไปอย่างสิ้นเชิง โดยที่คุณไม่จำเป็นต้องแก้ไขโค้ดใด ๆ เลยเพื่อให้เกิดสิ่งนี้

พฤติกรรมนี้เป็นคุณสมบัติพื้นฐานของวิธีการที่ model ใช้สร้างข้อความ และวิธีที่ [model providers](#model-provider) จัดการส่งคำขอ ([model provider request](#model-provider-request)) ในระหว่างการ[อนุมาน](#inference) โมเดลจะคำนวณการกระจายความน่าจะเป็น (probability distribution) ของ [token](#token) ถัดไปที่เป็นไปได้ทั้งหมด จากนั้นจะทำการสุ่มเลือกโทเค็นตัวหนึ่งขึ้นมา ซึ่งโดยปกติระบบจะตั้งใจใส่ความสุ่มลงไปเล็กน้อย เพราะการเลือกโทเค็นที่มีความน่าจะเป็นสูงสุดเสมอมักจะได้ข้อความที่ซ้ำซากและมีคุณภาพต่ำ การสุ่มได้โทเค็นที่ต่างไปเพียงตัวเดียวในช่วงเริ่มต้นคำตอบ จะเปลี่ยนทิศทางของโทเค็นทุกตัวที่ตามมาทั้งหมด ซึ่งเป็นเหตุผลว่าทำไมคำที่ต่างไปเพียงคำเดียวถึงงอกกลายเป็นแนวทางที่ต่างไปคนละทิศ นอกจากนี้ ระบบฝั่งผู้ให้บริการยังเพิ่มความผันผวนเข้าไปอีกขั้น เนื่องจาก request ต่าง ๆ จะถูกรวบรวมประมวลผลพร้อมกัน (batched) บนฮาร์ดแวร์ที่ใช้ร่วมกัน และความแตกต่างเพียงเล็กน้อยของทศนิยม (floating-point) ระหว่างรอบการประมวลผลก็สามารถเปลี่ยนผลลัพธ์ของโทเค็นที่มีคะแนนสูสีกันได้ เรื่องนี้ไม่มีปุ่มตั้งค่าใด ๆ ที่จะปรับให้หายไปได้ทั้งหมด

คุณจึงต้องเผื่อใจรับผลลัพธ์ที่หลากหลายจาก [agent](#agent) ในการทำงานชิ้นเดิม ผลลัพธ์ส่วนใหญ่จะเกาะกลุ่มกันอยู่ในระดับคุณภาพที่ยอมรับได้ (ตามเส้นโค้งรูประฆังคว่ำ) ซึ่งนั่นคือเหตุผลที่เรายังยอมรับความไม่แน่นอนนี้ได้ แต่ผลลัพธ์ที่หลุดไปอยู่ที่ปลายขอบทั้งสองข้างก็เกิดขึ้นได้จริง บางวัน model อาจจะดูฉลาดและเฉียบคมมาก แต่บางวันมันอาจจะดูเอ๋อจนกู่ไม่กลับ ทั้งที่เป็นงานเดิมแต่เหมือนดวงตกจากการทอยเต๋า ซึ่งเรื่องนี้ส่งผลในทางปฏิบัติ 2 ประการ ประการแรกคือ การลองใหม่อีกครั้ง (retrying) ถือเป็นกลยุทธ์ที่ใช้งานได้จริง เพราะความล้มเหลวในรอบแรกเป็นเพียงการสุ่มได้ผลลัพธ์แย่ ๆ จากชุดกระจายความน่าจะเป็น การกดรันใหม่อีกรอบอาจช่วยให้ได้ผลลัพธ์ที่ดีขึ้นได้ง่าย ๆ และประการที่สองคือ การตรวจสอบผลงาน (verification) จะมีความสำคัญมากกว่าเครื่องมือแบบดั้งเดิมที่มีผลลัพธ์ตายตัว (deterministic) คุณไม่สามารถทดสอบพฤติกรรมของ agent เพียงครั้งเดียวแล้วเชื่อมั่นว่ามันจะทำงานเหมือนเดิมตลอดไปได้ ดังนั้นจึงจำเป็นต้องมีระบบตรวจทานอัตโนมัติ เพื่อคอยดักจับผลลัพธ์แย่ ๆ จากการสุ่มเหล่านั้น

จงระวังอย่าเผลอคิดทึกทักเป็นเรื่องราวใหญ่โต มนุษย์เราเป็นสิ่งมีชีวิตที่ชอบจับแพะชนแกะเพื่อหารูปแบบ เมื่อเจอการรันที่แย่ติดต่อกันหลาย ๆ ครั้ง เรามักจะด่วนสรุปว่า "สัปดาห์นี้ผู้ให้บริการแอบปรับโมเดลให้โง่ลงแน่ ๆ" ทั้งที่ความจริงแล้วมันเป็นเพียงแค่ผลลัพธ์ตามปกติของสถิติการกระจายตัวเท่านั้น

_ตัวอย่างการใช้งาน:_

"วันนี้ Claude ทำงานห่วยแตกมากเลย เขาแอบปล่อยเวอร์ชันที่แย่ลงมารึเปล่านะ"

"คงไม่ใช่หรอกครับ ผลลัพธ์ของ model มันเป็นแบบ non-deterministic อยู่แล้ว งานเดียวกันมันก็มีทั้งวันดีคืนดี ลองรันใหม่อีกรอบหรือรอพรุ่งนี้ดูก่อนดีกว่า อย่าเพิ่งรีบไปหาสาเหตุอื่นเลย"

### Model provider

#### English

Whatever serves a [model](#model) for [inference](#inference). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](#harness) doesn't run the model itself; it asks a provider to.

The provider owns the machinery: the [parameters](#parameters) live on its hardware, and every [model provider request](#model-provider-request) is the harness sending [tokens](#token) over the network and getting predictions back. That makes the provider the source of a whole category of problems that get misattributed to the model or the harness — rate limits, degraded capacity, and outages all live here. When the [agent](#agent) stalls mid-[session](#session) or errors on every [turn](#turn), the provider's status page is worth checking before anything else.

The provider also sets the commercial terms: per-token pricing for [input](#input-tokens) and [output tokens](#output-tokens), [prefix cache](#prefix-cache) discounts, and which models are available at all. Note that the provider and the model's maker can be different companies — Bedrock, Vertex, and OpenRouter serve other people's models.

Local providers trade capability for control: the models that fit on your own hardware are far smaller than the frontier ones, but nothing leaves the machine and there's no bill per token.

_Usage:_

"Can we run this offline for the air-gapped client?"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."

#### ไทย

ระบบใดก็ตามที่ทำหน้าที่เปิดให้ใช้งาน [model](#model) เพื่อการ[อนุมาน](#inference) โดยทั่วไปจะอยู่ในรูปของบริการคลาวด์ทางไกล (เช่น Anthropic, OpenAI, Google) แต่ก็สามารถรันแบบโลคัลในเครื่องของตัวเองได้เช่นกัน เช่น Ollama, LM Studio หรือ llama.cpp ตัวระบบควบคุม ([harness](#harness)) ไม่ได้ทำหน้าที่รันโมเดลด้วยตัวเอง แต่มันจะส่งคำสั่งไปให้ตัว provider เป็นผู้ประมวลผลแทน

ฝั่ง provider จะเป็นผู้ถือครองระบบเครื่องจักรทั้งหมด โดยค่า [parameters](#parameters) จะจัดเก็บอยู่บนฮาร์ดแวร์ของพวกเขา และทุก ๆ [model provider request](#model-provider-request) ก็คือการที่ระบบ harness ส่ง [token](#token) ผ่านเครือข่ายเน็ตเวิร์กไปให้ แล้วรอรับผลการคาดเดากลับมา ด้วยเหตุนี้ ตัว provider จึงเป็นต้นตอของปัญหาหลาย ๆ อย่างที่คนมักจะเข้าใจผิดไปโทษตัว model หรือตัว harness เช่น ปัญหาการจำกัดโควตาการเรียกใช้งาน (rate limits) ประสิทธิภาพระบบที่ดรอปหล่นลง หรือระบบล่ม (outages) ดังนั้นเมื่อตัว [agent](#agent) เกิดอาการค้างกลางคันระหว่างใช้งาน ([session](#session)) หรือแจ้งข้อผิดพลาดในทุก ๆ รอบสนทนา ([turn](#turn)) สิ่งแรกที่ควรทำคือการเข้าไปเช็กหน้าสถานะระบบ (status page) ของผู้ให้บริการก่อนสิ่งอื่นใด

นอกจากนี้ provider ยังเป็นผู้กำหนดเงื่อนไขทางการค้าทั้งหมด ไม่ว่าจะเป็นการคิดราคาต่อหนึ่งโทเค็นแยกกันระหว่าง [input](#input-tokens) และ [output tokens](#output-tokens) ส่วนลดจากการใช้ [prefix cache](#prefix-cache) รวมถึงการกำหนดว่าจะมีโมเดลรุ่นใดให้เลือกใช้บ้าง พึงระลึกไว้ว่าผู้ให้บริการระบบ (provider) กับผู้พัฒนาตัวโมเดลอาจเป็นคนละบริษัทกันก็ได้ เช่น บริการ Amazon Bedrock, Google Vertex AI หรือ OpenRouter ที่นำโมเดลของค่ายอื่นมาเปิดให้บริการผ่านระบบของตน

ส่วนการเลือกใช้ผู้ให้บริการแบบโลคัล (local providers) จะเป็นการแลกเปลี่ยนระหว่างความสามารถของโมเดลกับอำนาจในการควบคุม โมเดลที่สามารถยัดลงในฮาร์ดแวร์ส่วนตัวของคุณได้จะมีขนาดเล็กกว่าโมเดลระดับแนวหน้า (frontier models) บนคลาวด์อยู่มาก แต่สิ่งที่จะได้กลับมาคือความเป็นส่วนตัวที่ไม่มีข้อมูลใด ๆ หลุดออกจากเครื่อง และไม่มีบิลเรียกเก็บเงินตามจำนวนโทเค็นให้ปวดหัว

_ตัวอย่างการใช้งาน:_

"เราสามารถรันระบบนี้แบบออฟไลน์ให้กับลูกค้ากลุ่มที่ปิดกั้นเครือข่ายภายนอก (air-gapped) ได้ไหมครับ"

"ได้ครับ แค่เปลี่ยนตัว model provider ไปใช้แบบโลคัลอย่าง Ollama หรือ llama.cpp บนเครื่องของเขา ตัว harness มันไม่สนใจหรอก มันแค่เปลี่ยนไปเรียกใช้ API endpoint ตัวอื่นเท่านั้นเอง"

### Harness

#### English

Everything around the [model](#model) that turns it into an [agent](#agent): [tools](#tool), [system prompt](#system-prompt), [context-window management](#context-window), permissions, hooks. **Claude.ai** and **Claude Code** run on the same model but behave differently because their harnesses differ.

The model itself only does one thing: take text in, produce text out. It can't read a file, run a command, or remember the last [turn](#turn). The harness supplies all of that. It assembles the [context](#context) for each [model provider request](#model-provider-request), executes the [tool calls](#tool-call) the model asks for, feeds the [tool results](#tool-result) back in, stores the [session](#session) history, asks you for permission before risky actions, and decides when to [compact](#compaction). The agent loop — model proposes, harness executes, repeat — is run by the harness.

This matters for diagnosis. When behaviour differs between two products, or between yesterday and today, the model is often not the variable — the harness is. A different system prompt, a different set of tools, a changed permission default, or a new context-management strategy all change behaviour without any change to the model. It also means the harness is where most of your configuration lives: [AGENTS.md](#agentsmd) files, permission settings, and hooks are all instructions to the harness, not the model.

Examples: Claude Code, Cursor, Codex CLI — and Claude.ai, which is a chat harness rather than a coding one.

_Usage:_

"Same model, why is Claude Code editing files and Claude.ai just answering questions?"

"Different harnesses — Claude Code has [filesystem](#filesystem) tools, a different system prompt, and a permission layer. The model isn't the variable here."

#### ไทย

ระบบแวดล้อมรอบตัว [model](#model) ทั้งหมดที่มีหน้าที่เปลี่ยนโมเดลเปล่า ๆ ให้กลายเป็น [agent](#agent) ทำงานได้จริง ซึ่งรวมถึงเครื่องมือต่าง ๆ ([tools](#tool)) ตัว [system prompt](#system-prompt) การบริหารจัดการพื้นที่หน้าต่างบริบท ([context window](#context-window)) เลเยอร์ควบคุมสิทธิ์ (permissions) และจุดเชื่อมต่อคำสั่งซอฟต์แวร์ (hooks) แอปพลิเคชันอย่าง **Claude.ai** และ **Claude Code** ต่างรันอยู่บนฐานของโมเดลรุ่นเดียวกัน แต่แสดงพฤติกรรมออกมาต่างกันโดยสิ้นเชิง เป็นเพราะตัว harness ของทั้งสองระบบนั้นได้รับการออกแบบมาไม่เหมือนกัน

ตัวของ model เองมีความสามารถเพียงสิ่งเดียวเท่านั้นคือ รับข้อความเข้ามาแล้วทายข้อความส่งกลับออกไป มันไม่สามารถเปิดอ่านไฟล์ รันคำสั่งคอมพิวเตอร์ หรือจำเรื่องราวในรอบการสนทนา ([turn](#turn)) ก่อนหน้าได้เลย ระบบ harness ต่างหากที่เป็นผู้จัดหาฟังก์ชันเหล่านั้นมาเติมเต็ม โดยมันจะทำหน้าที่ประกอบ[บริบท](#context) รวบรวมข้อมูลเพื่อส่งให้ในแต่ละ [model provider request](#model-provider-request) จากนั้นคอยดักฟังเพื่อนำตัว [tool calls](#tool-call) ที่โมเดลร้องขอไปรันบนระบบจริง นำผลลัพธ์ ([tool results](#tool-result)) ป้อนกลับคืนเข้าไป เก็บประวัติความเป็นมาของ [session](#session) คอยเด้งถามขออนุมัติจากคุณก่อนจะเริ่มทำงานที่มีความเสี่ยง และตัดสินใจว่าเมื่อใดควรทำการบีบอัดข้อมูล ลูปการทำงานของ agent ทั้งหมด ไม่ว่าจะเป็นการที่โมเดลยื่นข้อเสนอ -> harness นำไปรัน -> สรุปผลกลับไปให้โมเดลรันต่อ ล้วนถูกควบคุมและขับเคลื่อนผ่านระบบ harness ทั้งสิ้น

ความเข้าใจในจุดนี้มีความสำคัญมากในการหาสาเหตุของปัญหา เมื่อพฤติกรรมของระบบมีความแตกต่างกันระหว่างสองโปรดักต์ หรือระหว่างผลลัพธ์เมื่อวานกับวันนี้ ตัวแปรที่เปลี่ยนไปมักไม่ใช่ตัว model แต่เป็นตัว harness การเปลี่ยนข้อความใน system prompt การสลับชุดเครื่องมือ tools การปรับเปลี่ยนค่าเริ่มต้นของสิทธิ์การเข้าถึงระบบ หรือการปรับกลยุทธ์จัดการบริบท ล้วนส่งผลให้พฤติกรรมปลายทางเปลี่ยนไปได้ทั้งสิ้นโดยที่ตัวโมเดลไม่ได้ขยับเปลี่ยนอะไรเลย นั่นยังหมายความว่า harness คือสถานที่หลักที่ใช้เก็บค่าคอนฟิกเกอเรชันเกือบทั้งหมดของคุณ ไม่ว่าจะเป็นภาพรวมไฟล์ตระกูล AGENTS.md การตั้งค่าสิทธิ์ หรือโค้ดส่วนขยายพฤทีพรรรม (hooks) ทั้งหมดนี้ล้วนเป็นคำสั่งที่บอกให้ตัว harness ทำงาน ไม่ใช่คำสั่งสำหรับโมเดล

ตัวอย่างของระบบเหล่านี้ ได้แก่ Claude Code, Cursor, Codex CLI รวมถึง Claude.ai ซึ่งตัวหลังสุดนี้จัดว่าเป็น harness ในรูปแบบห้องแชตคุยทั่วไป ไม่ใช่ระบบที่ออกแบบมาสำหรับงานเขียนโค้ดโดยเจาะจง

_ตัวอย่างการใช้งาน:_

"รันบน model ตัวเดียวกันแท้ ๆ ทำไม Claude Code ถึงสามารถเปิดแก้ไฟล์จริงในเครื่องได้ แต่ Claude.ai ทำได้แค่พิมพ์ตอบคำถามเฉย ๆ ล่ะครับ"

"เป็นเพราะตัว harness คนละตัวกันครับ Claude Code จะมีชุดเครื่องมือสำหรับเข้าถึงระบบไฟล์ มี system prompt ที่ต่างออกไป และมีเลเยอร์ควบคุมสิทธิ์คอยดูแล ตัวแปรสำคัญในเคสนี้จึงอยู่ที่ harness ไม่ใช่ตัวโมเดลครับ"

### Model provider request

#### English

One round-trip from the [harness](#harness) to the [model provider](#model-provider). The harness sends the current [context](#context); the provider returns one response (a [tool call](#tool-call) or a final answer). A single user message can spawn many model provider requests if the [agent](#agent) calls [tools](#tool) — each [tool result](#tool-result) triggers another request.

Each request carries everything: the [system prompt](#system-prompt), the full conversation so far, every tool result. The [model](#model) is [stateless](#stateless), so the provider keeps nothing between requests — request forty re-sends what request thirty-nine sent, plus one more tool result. The [prefix cache](#prefix-cache) exists to make this repetition affordable.

The request is also the unit of billing. [Input tokens](#input-tokens), [output tokens](#output-tokens), and cache discounts are all counted per request, which is why an innocuous-looking question can cost a surprising amount: the cost isn't proportional to your message, it's proportional to the number of requests times the size of the context each one carries.

It's worth keeping the request distinct from the [turn](#turn). A turn is one exchange with you, and a single turn — "fix the failing test" — plays out as a chain of requests:

| Request | Model returns                     | Harness then                          |
| ------- | --------------------------------- | ------------------------------------- |
| 1       | Tool call: run the tests          | Runs them, appends the failure output |
| 2       | Tool call: read the test file     | Appends the file contents             |
| 3       | Tool call: read the source file   | Appends the file contents             |
| 4       | Tool call: edit the source file   | Applies the edit, appends the result  |
| 5       | Tool call: run the tests again    | Runs them, appends the pass output    |
| 6       | Final answer: "fixed, tests pass" | Shows it to you                       |

Six requests for one turn — each one re-sending the whole context. When you wonder where the [tokens](#token) went, count the requests, not the turns.

_Usage:_

"One question burned forty thousand tokens?"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole [session](#session) prefix re-sends every time."

#### ไทย

การเดินทางของข้อมูลไปกลับหนึ่งรอบ (round-trip) ระหว่างระบบควบคุม ([harness](#harness)) ไปยังผู้ให้บริการโมเดล ([model provider](#model-provider)) โดยตัว harness จะส่ง[บริบท](#context)ล่าสุดทั้งหมดไป และฝั่ง provider จะส่งผลลัพธ์ตอบกลับมาหนึ่งข้อความ (ซึ่งอาจเป็นการสั่งเรียกใช้เครื่องมือ [tool call](#tool-call) หรือเป็นคำตอบสุดท้ายสำหรับผู้ใช้) ข้อความแชตจากผู้ใช้งานเพียงข้อความเดียวสามารถแตกงอกออกมาเป็น model provider request ได้เป็นสิบ ๆ ครั้ง หากตัว [agent](#agent) มีการเปิดใช้งานเครื่องมือต่าง ๆ ([tools](#tool)) เนื่องจากทุก ๆ ผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) จะต้องถูกส่งกลับไปกระตุ้นให้เกิด request รอบใหม่อยゅうเสมอ

ในทุก ๆ request ระบบจำเป็นต้องหอบเอาทุกสิ่งทุกอย่างแนบไปด้วยเสมอ ไม่ว่าจะเป็นระบบคำสั่งหลัก ([system prompt](#system-prompt)) ประวัติการคุยทั้งหมดตั้งแต่ต้นจนถึงปัจจุบัน รวมถึงผลลัพธ์ของเครื่องมือทุกชิ้น [model](#model) ทำงานแบบ [stateless](#stateless) (ไม่มีการจำสถานะ) ฝั่งผู้ให้บริการจึงไม่มีการบันทึกหรือเก็บจำอะไรไว้ให้ระหว่างแต่ละ request เลย การส่ง request รอบที่ 40 จึงเป็นการส่งข้อมูลซ้ำเดิมเหมือนรอบที่ 39 ทุกประการ แล้วบวกเพิ่มผลลัพธ์ของเครื่องมือตัวล่าสุดเข้าไปอีกชิ้นหนึ่ง ระบบบันทึกส่วนหัวล่วงหน้า ([prefix cache](#prefix-cache)) จึงถูกสร้างขึ้นมาเพื่อช่วยลดภาระค่าใช้จ่ายจากการส่งข้อมูลซ้ำ ๆ มหาศาลเหล่านี้

นอกจากนี้ ตัว request ยังเป็นหน่วยพื้นฐานที่ใช้ในการคำนวณบิลค่าบริการ จำนวน [input tokens](#input-tokens), [output tokens](#output-tokens) รวมถึงส่วนลดจากการใช้แคช ล้วนถูกนับแยกเป็นรอบ ๆ ต่อหนึ่งคำขอ นี่คือเหตุผลว่าทำไมคำถามง่าย ๆ ที่ดูไม่มีอะไรในสายตาผู้ใช้ ถึงสามารถผลาญค่าใช้จ่ายได้อย่างน่าตกใจ เพราะต้นทุนที่เกิดขึ้นจริงไม่ได้แปรผันตรงกับความยาวข้อความของคุณ แต่มันแปรผันตามจำนวนรอบ request คูณเข้ากับขนาดของบริบททั้งหมดที่ต้องหอบส่งไปซ้ำ ๆ ในแต่ละรอบ

เราจึงจำเป็นต้องแยกแยะคำว่า request ออกจากคำว่า รอบการสนทนา ([turn](#turn)) ให้ชัดเจน คำว่า turn หมายถึงการส่งและตอบโต้ระหว่างตัวคุณกับระบบหนึ่งรอบเต็ม ๆ ซึ่งการคุยกันเพียงแค่ turn เดียว เช่น สั่งว่า "ช่วยแก้เคสทดสอบที่พังให้หน่อย" เบื้องหลังจะถูกแตกออกเป็นสายโซ่ของ request ต่อเนื่องกันยาวเหยียดดังนี้:

| Request | สิ่งที่ Model ส่งกลับมา                     | สิ่งที่ Harness ดำเนินการต่อ                                |
| ------- | ------------------------------------------- | ----------------------------------------------------------- |
| 1       | Tool call: สั่งรันเคสทดสอบ (tests)          | สั่งรันระบบ แล้วนำผลลัพธ์ความล้มเหลวที่ได้แนบต่อท้ายบริบท   |
| 2       | Tool call: สั่งเปิดอ่านไฟล์ทดสอบ            | นำเนื้อหาภายในไฟล์ทดสอบนั้นแนบต่อท้ายบริบท                  |
| 3       | Tool call: สั่งอ่านไฟล์ซอร์สโค้ดหลัก        | นำเนื้อหาในไฟล์ซอร์สโค้ดหลักนั้นแนบต่อท้ายบริบท             |
| 4       | Tool call: สั่งแก้ไขไฟล์ซอร์สโค้ดหลัก       | ดำเนินการแก้ไขไฟล์จริง แล้วนำผลลัพธ์การแก้ไขแนบต่อท้ายบริบท |
| 5       | Tool call: สั่งรันเคสทดสอบซ้ำอีกรอบ         | สั่งรันระบบ แล้วนำผลลัพธ์การทดสอบที่ผ่านฉลุยแนบต่อท้ายบริบท |
| 6       | คำตอบสุดท้าย: "แก้ไขเรียบร้อย ผ่านแล้วครับ" | นำข้อความนี้มาแสดงผลให้คุณเห็นบนหน้าจอ                      |

สรุปคือเกิด request ขึ้นถึง 6 ครั้งจากการคุยกันเพียงรอบ (turn) เดียว และทุก ๆ ครั้งจะต้องส่งบริบททั้งหมดไปใหม่ซ้ำ ๆ ดังนั้นเวลาที่คุณสงสัยว่าจำนวน [token](#token) มันงอกหายไปไหนหมด ให้กลับไปนับที่จำนวนครั้งของ request อย่าไปนับที่จำนวนรอบการคุยกับคุณ

_ตัวอย่างการใช้งาน:_

"ถามคำถามไปแค่ข้อเดียว ทำไมมันผลาญโทเค็นไปตั้งสี่หมื่นตัวเลยล่ะ"

"ลองดูตรงประวัติการเรียกใช้เครื่องมือสิครับ มีการทำ grep ไป 12 ครั้ง อ่านไฟล์อีก 8 รอบ และเปิดแก้โค้ดอีก 4 หน ทุก ๆ ผลลัพธ์จากเครื่องมือจะงอกกลายเป็น model provider request ใหม่หนึ่งรอบเสมอ และตัว prefix ของ session ทั้งหมดก็ต้องถูกหอบส่งไปใหม่ทุก ๆ ครั้งด้วยครับ"

### Input tokens

#### English

[Tokens](#token) the [harness](#harness) sends on each [model provider request](#model-provider-request) — the [system prompt](#system-prompt), the conversation history, [tool results](#tool-result), everything the [model](#model) reads before it writes. Billed at a lower rate than [output tokens](#output-tokens), because they are less expensive to process than output tokens.

When doing [AI](#ai) coding, input tokens make up most of your bill. The model is [stateless](#stateless), so each [turn](#turn) re-sends the entire [session](#session) as input: your first message, every response, every tool result since. The input for turn fifty contains the previous forty-nine turns. A single model provider request might produce a few hundred output tokens but re-send a hundred thousand input tokens of accumulated history.

The [prefix cache](#prefix-cache) reduces the cost: history that exactly matches a previous request is billed as cheap [cache tokens](#cache-tokens) rather than full-price input. When input costs still hurt, the fix is to shrink what gets re-sent — [clearing](#clearing) or [compacting](#compaction) between tasks.

_Usage:_

"Bill's high but the [agent](#agent)'s barely writing anything."

"It's the input tokens — every turn re-sends the whole session. Without the prefix cache you re-pay for the history each request."

#### ไทย

จำนวน [token](#token) ที่ระบบควบคุม ([harness](#harness)) จัดส่งไปให้ทางฝั่งผู้ให้บริการในทุก ๆ [model provider request](#model-provider-request) ซึ่งครอบคลุมตั้งแต่ตัว [system prompt](#system-prompt) ประวัติการพูดคุยทั้งหมด และ [tool results](#tool-result) (ผลลัพธ์จากเครื่องมือต่าง ๆ) สรุปง่าย ๆ คือทุกสิ่งทุกอย่างที่ตัว [model](#model) ต้องเปิดอ่านและทำความเข้าใจก่อนที่จะเริ่มลงมือเขียนคำตอบ โดยปกติแล้วโทเค็นขาเข้าเหล่านี้จะมีราคาเรียกเก็บที่ถูกกว่า [output tokens](#output-tokens) เนื่องจากใช้ทรัพยากรคอมพิวเตอร์ในการประมวลผลฝั่งผู้ให้บริการน้อยกว่า

ในงานเขียนโค้ดร่วมกับ [AI](#ai) ค่า input tokens จะกลายเป็นค่าใช้จ่ายส่วนใหญ่ในบิลของคุณ เนื่องจากตัวโมเดลทำงานแบบ [stateless](#stateless) (ไม่มีการจำสถานะ) ในทุก ๆ รอบสนทนา ([turn](#turn)) ระบบจึงจำเป็นต้องหอบเอาประวัติการใช้งานของทั้ง [session](#session) ส่งกลับไปเป็นข้อมูลขาเข้าใหม่เสมอ ตั้งแต่ข้อความแรกสุดที่คุณพิมพ์ คำตอบทุกข้อความของระบบ ไปจนถึงผลลัพธ์ของเครื่องมือทุกชิ้นที่เคยเรียกใช้มา ข้อมูลขาเข้าใน turn ที่ 50 จึงประกอบไปด้วยเนื้อหาทั้งหมดของ 49 turn ก่อนหน้า การส่งคำขอในบาง request อาจจะผลิตเนื้อหาตอบกลับมาเพียงไม่กี่ร้อย output tokens แต่เบื้องหลังอาจต้องส่งข้อมูลประวัติสะสมย้อนหลังกลับไปสูงถึงหลักแสนโทเค็นเลยทีเดียว

ระบบบันทึกส่วนหัวล่วงหน้า ([prefix cache](#prefix-cache)) จึงถูกนำเข้ามาช่วยลดภาระค่าใช้จ่ายในจุดนี้ โดยประวัติข้อความส่วนที่ตรงกับ request ก่อนหน้าแบบเป๊ะ ๆ จะถูกคำนวณราคาเป็นโทเค็นส่วนแคชแทนราคาข้อมูลขาเข้าแบบเต็มเม็ดเต็มหน่วยอย่างมาก แต่ถ้าหากค่าใช้จ่ายฝั่งขาเข้ารวม ๆ แล้วยังคงสูงเกินไป วิธีแก้ไขคือต้องพยายามลดขนาดของข้อมูลที่จะถูกส่งซ้ำ เช่น การสั่งล้างประวัติการคุย หรือการสั่งบีบอัดสรุปใจความ[บริบท](#context)เมื่อคุณสลับไปเริ่มทำงานชิ้นใหม่

_ตัวอย่างการใช้งาน:_

"บิลค่าบริการเดือนนี้แพงมากเลย ทั้งที่ตัว [agent](#agent) แทบจะไม่ค่อยเขียนโค้ดอะไรยาว ๆ ส่งกลับมาให้เลยนะ"

"เป็นเพราะค่า input tokens ครับ เพราะในทุก ๆ turn ระบบจะต้องหอบเอาประวัติข้อมูลของทั้ง session ส่งกลับไปใหม่ทั้งหมด ถ้าไม่มีระบบ prefix cache คอยช่วย คุณก็ต้องจ่ายเงินค่าประวัติย้อนหลังเหล่านั้นเต็มราคาใหม่ในทุก ๆ request เลยล่ะครับ"

### Output tokens

#### English

[Tokens](#token) the [model](#model) generates back. Billed at a higher rate than [input tokens](#input-tokens) — commonly around five times the rate — since they cost more compute to produce.

Everything the model writes counts: the prose you read, the code it emits, [tool calls](#tool-call), and any extended thinking the model does before answering. That last one surprises people — reasoning tokens are billed as output even when the [harness](#harness) often doesn't show them to you, and turning up [effort](#effort) spends more of them.

Output tokens also set the pace of a [session](#session). The model reads input quickly but generates output one token at a time, so when a [turn](#turn) feels slow, it's almost always the output being written, not the input being read. A long wait usually means a long answer is coming.

_Usage:_

"The refactor session is burning through credit even though the inputs are small."

"Agent's rewriting whole files instead of patching. Output tokens cost roughly five times the input rate — get it emitting edits and the bill drops."

#### ไทย

จำนวน [token](#token) ที่ตัว [model](#model) สร้างขึ้นและส่งกลับคืนมา โทเค็นขาออกเหล่านี้จะถูกคิดราคาในอัตราที่แพงกว่า [input tokens](#input-tokens) อย่างเห็นได้ชัด (โดยทั่วไปจะแพงกว่าประมาณ 5 เท่า) เนื่องจากระบบฝั่งผู้ให้บริการต้องใช้พลังงานและทรัพยากรในการคำนวณประมวลผลสูงกว่ามากในการผลิตออกมาทีละตัว

ทุกสิ่งทุกอย่างที่ตัวโมเดลเป็นผู้เขียนจะถูกนำมานับรวมในนี้ทั้งหมด ไม่ว่าจะเป็นข้อความอธิบายที่คุณเปิดอ่าน ซอร์สโค้ดที่มันพ่นออกมา ข้อความคำสั่งสั่งงานเครื่องมือ ([tool calls](#tool-call)) รวมถึงกระบวนการคิดวิเคราะห์เชิงลึกที่เกิดขึ้นก่อนจะเริ่มให้คำตอบ ประเด็นหลังสุดนี้มักจะทำให้หลายคนประหลาดใจ เพราะโทเค็นการคิดวิเคราะห์จะถูกคิดเงินเป็นอัตราขาออกทั้งหมด แม้ว่าตัวระบบควบคุม ([harness](#harness)) ส่วนใหญ่จะซ่อนข้อความส่วนนี้เอาไว้ไม่ให้คุณเห็นก็ตาม และการปรับระดับความพยายาม ([effort](#effort)) ให้สูงขึ้น ก็จะยิ่งผลาญโทเค็นการคิดวิเคราะห์ส่วนนี้มากขึ้นไปอีก

Output tokens ยังเป็นตัวกำหนดความเร็วและจังหวะการทำงานในแต่ละ [session](#session) อีกด้วย ตัวโมเดลสามารถกวาดอ่านข้อมูลขาเข้าได้อย่างรวดเร็วมาก แต่ในยามสร้างผลลัพธ์มันจะค่อย ๆ ผลิตออกมาทีละโทเค็นอย่างเข้มงวด ดังนั้นเมื่อใดก็ตามที่คุณรู้สึกว่าในรอบการคุย ([turn](#turn)) นั้นทำไมระบบถึงตอบช้า สาเหตุมักจะมาจากขั้นตอนการเขียนโทเค็นขาออกตัวนี้ ไม่ใช่ขั้นตอนการอ่านข้อมูลขาเข้า การนั่งรอนาน ๆ จึงเป็นสัญญาณบ่งบอกว่าระบบกำลังเตรียมคำตอบที่มีความยาวส่งมาให้คุณนั่นเอง

_ตัวอย่างการใช้งาน:_

"session ที่สั่งแก้โค้ดตัวนี้เพิ่งรันไปนิดเดียวแต่ทำไมเงินเครดิตปลิวหายไปเยอะจัง ทั้งที่ข้อมูลโค้ดขาเข้าก็ไม่ได้ใหญ่เลยนะ"

"เป็นเพราะตัว agent มันเลือกใช้วิธีเขียนเนื้อหาใหม่ยกไฟล์แทนการเขียนโค้ดดัดแปลงเฉพาะจุดครับ อนุมานราคาของ output tokens มันแพงกว่าขาเข้าตั้ง 5 เท่า ถ้าเราปรับพฤติกรรมให้มันพ่นออกมาเฉพาะโค้ดส่วนที่แก้ไข บิลค่าบริการจะลดลงไปได้เยอะมากครับ"

### Prefix cache

#### English

The [provider](#model-provider)-side store that lets consecutive [model provider requests](#model-provider-request) skip re-processing a shared prefix. When the start of a request matches the start of a recent one — same [system prompt](#system-prompt), same history up to some point — the provider reuses its prior work and bills those [tokens](#token) as [cache tokens](#cache-tokens) at a much lower rate.

The cache pays off because sessions grow append-only. Every request re-sends the whole history as [input tokens](#input-tokens) (see that entry for why), and in a normal [session](#session) the history only changes at the end — each request is the previous one plus a few new messages. The provider processes the long shared beginning once, stores the result, and picks up from where the prefix ends. Without the cache, a 50-[turn](#turn) session would pay to re-process turn one fifty times.

Caches also expire. How long an entry stays warm varies per model provider — typically minutes, not hours. Leave a session idle past the window and the next request rebuilds the prefix at full price once before caching resumes. This is mostly a [harness](#harness) builder's concern; as a user, the visible effect is that requests after a long pause cost more than the ones before it.

_Usage:_

"Why did the bill spike halfway through the session?"

"Harness started injecting the current time into the system prompt every turn. Prefix cache breaks at the first changed token, so every request after that billed at full rate."

#### ไทย

คลังจัดเก็บข้อมูลฝั่งผู้ให้บริการ ([model provider](#model-provider)) ที่ช่วยให้บรรดารอบ [model provider requests](#model-provider-request) ที่ถูกส่งเข้ามาอย่างต่อเนื่อง สามารถข้ามขั้นตอนการประมวลผลซ้ำในส่วนหัว (prefix) ที่มีเนื้อหาร่วมกันได้ เมื่อข้อความเริ่มต้นของ request ตัวใหม่มีความตรงกันเป๊ะกับส่วนเริ่มต้นของ request ก่อนหน้า (เช่น ใช้ [system prompt](#system-prompt) ตัวเดิม และมีประวัติการคุยย้อนหลังที่เหมือนกันจนถึงจุดใดจุดหนึ่ง) ทางฝั่งผู้ให้บริการจะดึงผลคำนวณเก่ามาใช้ซ้ำทันที และจะบันทึกหน่วย [token](#token) ในส่วนนั้นเป็น [cache tokens](#cache-tokens) พร้อมคิดค่าบริการในราคาที่ถูกลงกว่าเดิมอย่างมาก

ระบบแคชนี้สร้างความคุ้มค่าได้อย่างมหาศาลเนื่องจากลักษณะของ [session](#session) บทสนทนาจะเติบโตในรูปแบบการแนบต่อท้ายเพิ่มขึ้นเรื่อย ๆ เท่านั้น (append-only) ในทุก ๆ request ระบบจำเป็นต้องส่งประวัติทั้งหมดกลับไปใหม่ในฐานะ [input tokens](#input-tokens) (สามารถอ่านเหตุผลได้ในหัวข้อนั้น) และในการใช้งานทั่วไป ประวัติข้อความจะขยับเปลี่ยนแปลงเฉพาะส่วนท้ายสุดเท่านั้น โดยที่ request รอบใหม่ก็คือเนื้อหาของรอบก่อนหน้าแล้วบวกข้อความใหม่เพิ่มเข้าไปไม่กี่บรรทัด ฝั่งผู้ให้บริการจึงทำหน้าที่ประมวลผลข้อความส่วนหัวที่ยาวเหยียดและซ้ำกันนี้เพียงแค่ครั้งเดียว จากนั้นเซฟผลลัพธ์เก็บไว้ แล้วค่อยไปเริ่มคำนวณต่อจากจุดสิ้นสุดของข้อความส่วนหัวนั้น หากไม่มีระบบแคชนี้ การสนทนาที่ยาวถึง 50 รอบ ([turn](#turn)) จะทำให้คุณต้องเสียเงินค่าประมวลผลข้อความของ turn แรกสุดซ้ำไปซ้ำมาถึง 50 ครั้งฟรี ๆ

อย่างไรก็ตาม ระบบแคชนี้มีวันหมดอายุ ระยะเวลาที่ข้อมูลจะถูกเก็บรักษาไว้ให้ "พร้อมใช้งาน" (stay warm) จะมีความแตกต่างกันไปตามแต่ระเบียบของแต่ละ model provider โดยปกติจะมีอายุเป็นระดับนาที ไม่ใช่ระดับชั่วโมง หากคุณปล่อยให้ session นั่งนิ่งไม่มีการขยับเคลื่อนไหวใด ๆ นานจนเกินเวลาหน้าต่างที่กำหนด การส่ง request ในรอบถัดไปจะต้องยอมควักเงินจ่ายราคาเต็มเพื่อสร้างระบบข้อมูลส่วนหัวขึ้นมาใหม่ทั้งหมดหนึ่งครั้ง ก่อนที่ระบบจะเริ่มทำแคชรอบใหม่ให้ใช้งานต่อ เรื่องนี้มักจะเป็นประเด็นที่ผู้พัฒนาตัวระบบควบคุม ([harness](#harness)) ต้องคอยบริหารจัดการ ส่วนในมุมของผู้ใช้งานทั่วไป ผลกระทบที่พอจะสังเกตเห็นได้คือ การกลับมาสั่งงานต่อหลังจากทิ้งช่วงหยุดคุยไปนาน ๆ จะมีค่าใช้จ่ายในรอบนั้นแพงกว่าปกติเล็กน้อย

_ตัวอย่างการใช้งาน:_

"ทำไมบิลค่าบริการมันถึงพุ่งกระฉูดขึ้นมาตอนช่วงกลางของ session ล่ะครับ"

"เป็นเพราะตัว harness มันเริ่มใส่ข้อมูลเวลาปัจจุบัน (timestamp) เข้าไปใน system prompt ในทุก ๆ turn ครับ ระบบ prefix cache จะพังทันทีเมื่อเจอ token ตัวแรกที่เปลี่ยนไป ส่งผลให้ request ทุก ๆ รอบหลังจากจุดนั้นถูกคิดเงินเต็มราคาค่านำเข้าทั้งหมดเลยครับ"

### Cache tokens

#### English

[Input tokens](#input-tokens) the [provider](#model-provider) has cached from a previous [model provider request](#model-provider-request) so it doesn't have to re-process them. When consecutive requests share a prefix, the provider reuses the work via its [prefix cache](#prefix-cache) and bills the cached portion at a much lower rate. The lever that makes long [sessions](#session) affordable — without it, every [turn](#turn) re-pays for the whole history.

The reason this matters is how sessions are billed. The [model](#model) is [stateless](#stateless), so every request resends the entire conversation — [system prompt](#system-prompt), every message, every [tool result](#tool-result) — as input tokens. By turn fifty, each request carries fifty turns of history, and you'd pay full rate on all of it, every time. The cache changes the maths: tokens the provider has already processed in an identical prefix are billed as cache tokens, often at a tenth of the input rate or less. On a long session, most of what you send is cache tokens, and the bill stays sane.

An example shows when tokens are cached and when they're not. Each letter stands for a block of conversation content; each request sends the conversation so far:

| Request sends | Cached  | Billed at full rate | Why                                               |
| ------------- | ------- | ------------------- | ------------------------------------------------- |
| `AB`          | nothing | `AB`                | First request — nothing to match against          |
| `ABC`         | `AB`    | `C`                 | `AB` is an exact prefix of the previous request   |
| `ABCD`        | `ABC`   | `D`                 | Prefix still intact                               |
| `AXCD`        | `A`     | `XCD`               | An edit changed `B` to `X`; the match fails there |

The cache is fragile in a specific way: it matches exact prefixes. If anything changes earlier in the conversation — the [harness](#harness) reorders content, a timestamp updates, a file's representation shifts — the cache misses from that point onward and everything after it is billed at full input rate. Caches also expire after a few minutes of inactivity, so a session resumed after a long pause re-pays its history once. When a session's cost jumps without an obvious cause, compare cache tokens to input tokens in the usage report — a broken cache shows up there first.

_Usage:_

"Cost on long sessions is brutal — eight bucks for a refactor."

"Check the cache tokens. If the harness is reordering the system prompt or files between turns, the prefix breaks and you re-pay full input rate every request."

#### ไทย

จำนวน [input tokens](#input-tokens) ที่ทางฝั่งผู้ให้บริการ ([model provider](#model-provider)) ได้ทำการบันทึกและจัดเก็บไว้จากการส่งคำขอ ([model provider request](#model-provider-request)) ในรอบก่อนหน้า ทำให้ไม่ต้องสิ้นเปลืองพลังงานสมองกลับไปประมวลผลคำนวณซ้ำอีกครั้ง เมื่อคำขอที่ถูกส่งเข้ามาติดต่อกันมีข้อความส่วนหัวที่ร่วมกัน (shared prefix) ตัวผู้ให้บริการจะดึงผลงานชิ้นเดิมกลับมาใช้ซ้ำทันทีผ่านกลไก [prefix cache](#prefix-cache) และปรับเปลี่ยนสถานะบิลของข้อความส่วนที่ถูกแคชไว้เหล่านั้นให้อยู่ในราคาที่ถูกลงอย่างมาก นี่คือกลไกหลักชิ้นสำคัญที่ช่วยให้การเปิดใช้งาน [session](#session) ระยะยาวเป็นเรื่องที่เอื้อมถึงในแง่ของงบประมาณ เพราะหากไม่มีมัน ทุก ๆ รอบของการพูดคุย ([turn](#turn)) คุณจะต้องควักเงินจ่ายค่าประวัติย้อนหลังทั้งหมดเต็มราคาซ้ำแล้วซ้ำเล่า

เหตุผลที่เรื่องนี้มีความสำคัญอย่างยิ่งมาจากวิธีการคำนวณบิลค่าบริการของตัวระบบ เนื่องจากตัว [model](#model) ทำงานแบบ [stateless](#stateless) (ไม่มีการเก็บจำสถานะ) ทุก ๆ คำขอจึงต้องแบกเอาเนื้อหาบทสนทนาทั้งหมดตั้งแต่แรกเริ่ม ไม่ว่าจะเป็นตัว [system prompt](#system-prompt) ข้อความคุยโต้ตอบทุกประโยค รวมถึงผลลัพธ์จากเครื่องมือทุกชิ้น ([tool result](#tool-result)) ส่งกลับไปใหม่ทั้งหมดในฐานะโทเค็นขาเข้า เมื่อการสนทนาเดินทางไปถึง turn ที่ 50 แต่ละคำขอจะแบกประวัติย้อนหลังหนาถึง 50 รอบ และคุณจะต้องจ่ายค่าบริการราคาเต็มให้กับข้อมูลชุดเดิมเหล่านั้นในทุก ๆ ครั้ง ระบบแคชจึงเข้ามาเปลี่ยนสูตรคณิตศาสตร์ในบิลใหม่ โดย [token](#token) ตัวใดก็ตามที่ผู้ให้บริการเคยประมวลผลผ่านตามาแล้วในข้อความส่วนหัวที่เหมือนเดิมเป๊ะ จะถูกเปลี่ยนไปคิดเงินในฐานะ cache tokens ซึ่งมักจะมีราคาถูกลงเหลือเพียง 1 ใน 10 ของราคาขาเข้าปกติหรือน้อยกว่านั้น ใน session ยาว ๆ ข้อมูลเกือบทั้งหมดที่คุณส่งไปจะถูกนับเป็น cache tokens ช่วยให้บิลตอนสิ้นเดือนไม่พุ่งทะลุเพดานไปไกล

ตัวอย่างด้านล่างนี้จะช่วยให้เห็นภาพชัดเจนขึ้นว่า โทเค็นจะถูกนำไปทำแคชเมื่อใดและจุดใดบ้างที่ไม่นับ โดยตัวอักษรแต่ละตัวจะแทนบล็อกเนื้อหาของบทสนทนา และในแต่ละ request จะเป็นการส่งเนื้อหาทั้งหมดนับรวมตั้งแต่เริ่มต้นมาจนถึงจุดปัจจุบัน:

| สิ่งที่ Request นำส่ง | ส่วนที่ได้ทำแคช (Cached) | ส่วนที่คิดราคาเต็มอัตรา | เหตุผลอธิบายพฤติกรรม                                                                    |
| --------------------- | ------------------------ | ----------------------- | --------------------------------------------------------------------------------------- |
| `AB`                  | ไม่มี (nothing)          | `AB`                    | เป็น request แรกสุดในระบบ — ไม่มีข้อมูลเก่ามาเทียบเคียง                                 |
| `ABC`                 | `AB`                     | `C`                     | บล็อกข้อความ `AB` เป็นส่วนหัวที่ตรงกับข้อความใน request ก่อนหน้าแบบเป๊ะ ๆ               |
| `ABCD`                | `ABC`                    | `D`                     | ข้อความส่วนหัวเดิมยังคงอยู่ครบถ้วนไม่มีการบิดพริ้ว                                      |
| `AXCD`                | `A`                      | `XCD`                   | มีการแก้ไขข้อความเปลี่ยนบล็อก `B` ให้กลายเป็น `X` ระบบแคชจึงหลุดและพังลง ณ จุดนั้นทันที |

ระบบแคชนี้มีความเปราะบางเป็นพิเศษในรูปแบบเฉพาะตัว นั่นคือมันต้องการความตรงกันของข้อความส่วนหัวแบบตัวอักษรต่อตัวอักษร (exact prefixes) หากมีสิ่งใดก็ตามขยับเปลี่ยนไปแม้เพียงนิดเดียวในตรรกะช่วงต้นของบทสนทนา เช่น ตัวระบบควบคุม ([harness](#harness)) สลับลำดับการวางเนื้อหา มีการอัปเดตตัวเลขเวลาปัจจุบัน หรือรูปแบบการแปลงข้อความของตัวไฟล์มีการบิดพริ้วไป ระบบแคชจะเกิดอาการค้นหาไม่เจอ (cache miss) นับตั้งแต่จุดที่มีการเปลี่ยนแปลงนั้นเป็นต้นไป และเนื้อหาข้อความทั้งหมดหลังจากจุดนั้นจะถูกปัดไปคิดราคาเต็มอัตราข้อมูลขาเข้าทันที นอกจากนี้ แคชจะเสื่อมสลายหายไปเองหลังจากไม่มีการใช้งานติดต่อกันไม่กี่นาที การกลับมาเปิดคุยต่อใน session เดิมหลังจากเว้นช่วงไปนาน ๆ จึงต้องยอมจ่ายค่าล้างประวัติย้อนหลังราคาเต็มใหม่อีกหนึ่งครั้ง เมื่อใดก็ตามที่ค่าใช้จ่ายใน session พุ่งสูงขึ้นโดยไม่มีสาเหตุชัดเจน ให้เข้าไปเปรียบเทียบสัดส่วนระหว่าง cache tokens กับข้อมูลขาเข้าปกติในรายงานการใช้งาน (usage report) แคชที่พังทลายจะแสดงความผิดปกติให้เห็นในจุดนั้นเป็นที่แรก

_ตัวอย่างการใช้งาน:_

"Lineage ของ long session ตัวนี้ราคาดุเดือดมากครับ แค่สั่งปรับแก้โค้ดไปรอบเดียวโดนไปตั้ง 8 ดอลลาร์"

"ลองเข้าไปเช็กจำนวน cache tokens ดูสิครับ ถ้าตัว harness มันมีการจัดลำดับระบบคำสั่ง system prompt หรือสลับไฟล์ไปมาสลับรอบกันระหว่าง turn ตัวข้อความส่วนหัวก็จะฉีกขาดออกจากกัน ทำให้คุณต้องจ่ายค่าข้อมูลขาเข้าเต็มราคาใหม่ในทุก ๆ request ครับ"

## Section 2 — Sessions, Context Windows & Turns

### Stateless

#### English

Carries no information forward. The [model](#model) is stateless across [model provider requests](#model-provider-request) — each request resends the full [context window](#context-window), because the model has no way to see anything else. An [agent](#agent) is stateless across [sessions](#session) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](#stateful).

The model itself is permanently stateless: its [parameters](#parameters) are frozen after [training](#training), and nothing you do at [inference](#inference) changes them. The model doesn't learn from your corrections, doesn't remember being told the same thing yesterday, and isn't getting to know you — however much the conversation feels otherwise. The feeling of continuity within a session is manufactured by the [harness](#harness), which keeps the transcript and re-sends it with every request. The model isn't remembering the conversation; it's re-reading it.

The practical consequence: if you want something remembered across sessions, you have to write it down somewhere the agent will read it back. That's what [AGENTS.md](#agentsmd) files, [memory systems](#memory-system), and [handoff artifacts](#handoff-artifact) are — files that get loaded into the [context](#context) of future sessions, standing in for the memory the model doesn't have. When the agent keeps making a mistake you've corrected before, the question isn't why it didn't learn — it can't — but where that correction should be written down so every future session reads it.

_Usage:_

"Why does it forget the convention every time I [clear](#clearing)?"

"The model's stateless — the new session starts empty. If you want it carried, write it to AGENTS.md or a memory file the harness loads at session start."

#### ไทย

ไม่มีการส่งต่อหรือเก็บข้อมูลไปข้างหน้า ตัว [model](#model) จะทำงานแบบ stateless ข้ามหน่วยคำขอผู้ให้บริการ ([model provider requests](#model-provider-request)) ซึ่งในทุก ๆ คำขอระบบจำเป็นต้องส่งข้อมูลในพื้นที่หน้าต่างบริบท ([context window](#context-window)) กลับไปทั้งหมด เพราะโมเดลไม่มีช่องทางอื่นในการมองเห็นข้อมูลภายนอกเลย ส่วนตัว [agent](#agent) โดยปกติแล้วจะทำงานแบบ stateless ข้ามแต่ละ [session](#session) โดยเริ่มต้น หมายความว่าเมื่อเปิดเซสชันใหม่จะไม่มีร่องรอยของการพูดคุยเก่าหลงเหลืออยู่เลย ซึ่งเป็นคำตรงข้ามกับ [stateful](#stateful)

ตัวโมเดลเองนั้นมีคุณสมบัติเป็นแบบ stateless อย่างถาวร เนื่องจากค่าพารามิเตอร์ ([parameters](#parameters)) ทั้งหมดจะถูกแช่แข็งไว้อย่างตายตัวตั้งแต่หลังขั้นตอนการฝึกฝน ([training](#training)) และไม่มีสิ่งใดที่คุณทำในช่วงเวลาของการนำไปใช้งานหรือ [การอนุมาน](#inference) ที่จะไปเปลี่ยนแปลงตัวเลขเหล่านั้นได้ โมเดลจึงไม่สามารถเรียนรู้จากคำตักเตือนแก้ไขของคุณ ไม่สามารถจดจำเรื่องที่คุณเคยบอกไปเมื่อวานนี้ และไม่เคยทำความรู้จักตัวตนของคุณเลย แม้ว่าลักษณะของบทสนทนาจะทำให้เราชวนรู้สึกไปเองเช่นนั้นก็ตาม ความต่อเนื่องที่คุณสัมผัสได้ภายในเซสชันนั้นเป็นสิ่งถูกสร้างขึ้นมาเลียนแบบโดยระบบควบคุม ([harness](#harness)) ซึ่งทำหน้าที่เก็บรักษาประวัติบันทึกการพูดคุยและส่งมันกลับไปพร้อมกับทุก ๆ request สรุปคือโมเดลไม่ได้จำบทสนทนาได้ แต่มันเป็นการอ่านประวัติทั้งหมดใหม่อีกรอบต่างหาก

ผลลัพธ์ในทางปฏิบัติคือ หากคุณต้องการให้ระบบจดจำสิ่งใดข้ามเซสชัน คุณจำเป็นต้องบันทึกข้อมูลนั้นลงในพื้นที่บางจุดที่ agent สามารถอ่านกลับเข้ามาได้ ซึ่งนั่นคือบทบาทของไฟล์คู่มือประจำตัวโปรเจกต์ (เช่น AGENTS.md) [ระบบความจำ](#memory-system) หรือไฟล์บันทึกส่งงาน (handoff artifacts) ซึ่งเป็นไฟล์ที่จะถูกโหลดเข้าสู่ [บริบท](#context) ของเซสชันในอนาคต เพื่อทำหน้าที่แทนระบบความจำที่ตัวโมเดลไม่มี ดังนั้นเวลาที่ agent ยังคงทำผิดพลาดในเรื่องเดิม ๆ ทั้งที่คุณเคยแก้ไขไปแล้ว คำถามหลักจึงไม่ใช่เรื่องทำไมมันถึงไม่ยอมเรียนรู้ (เพราะมันไม่มีความสามารถนั้นอยู่แล้ว) แต่ต้องถามว่าเราควรเขียนคำดัดแปลงแก้ไขนั้นลงในไฟล์ไหน เพื่อให้ทุกเซสชันในอนาคตเปิดอ่านและทำตามได้อย่างถูกต้อง

_ตัวอย่างการใช้งาน:_

"ทำไมพอล้างประวัติการคุย ([clear](#clearing)) ทีไร มันชอบลืมข้อตกลงในการเขียนโค้ดของเราทุกทีเลยล่ะครับ"

"เพราะโมเดลมันเป็นแบบ stateless ครับ พอเริ่มเซสชันใหม่ข้อมูลก็หายเกลี้ยง ถ้าอยากให้มันจำได้ตลอด ต้องเอาข้อตกลงไปเขียนไว้ในไฟล์ AGENTS.md หรือเซฟลงไฟล์ความจำ เพื่อให้ตัว harness คอยโหลดเข้าระบบตอนเริ่มเซสชันครับ"

### Context

#### English

The relevant information the [agent](#agent) has access to right now. The abstract noun — not the raw input the model sees (that's the [context window](#context-window)), not the running history (that's the [session](#session)), but _what the agent knows that's pertinent to the task_. "Loading something into context" means making it part of this set; "context engineering" is the discipline of curating it.

The three terms separate cleanly:

| Term           | What it names                                                       |
| -------------- | ------------------------------------------------------------------- |
| Context        | The task-relevant information the agent currently has               |
| Context window | The literal [token](#token) sequence the model sees per request |
| Session        | The running conversation the [harness](#harness) stores         |

The separation matters because context is a measure of quality, not quantity. A context window can be nearly full and the context still poor — thousands of tokens of stale tool output, none of it about the task at hand. It can also be nearly empty and the context excellent: the one type definition the task turns on.

Most day-to-day failures trace back to context. When the agent invents an API, contradicts a decision, or guesses at a schema, the first question is what was in context when it did — usually the relevant fact was never loaded, or was buried under [attention degradation](#attention-degradation). The fix is curation: load what the task needs, keep out what it doesn't.

_Usage:_

"It keeps inventing fields that aren't in the type."

"The type file isn't in context — it's reading the call sites and guessing. Read the definition in first."

#### ไทย

ข้อมูลที่เกี่ยวข้องและเป็นประโยชน์ต่องานที่ [agent](#agent) สามารถเข้าถึงได้ในขณะนั้น คำนี้เป็นคำนามเชิงนามธรรม ไม่ใช่ตัวข้อความดิบนำเข้าที่โมเดลมองเห็น (ส่วนนั้นเรียกว่า [context window](#context-window)) และไม่ใช่ประวัติการพูดคุยทั้งหมดที่รันอยู่ (ส่วนนั้นเรียกว่า [session](#session)) แต่มันหมายถึง _สิ่งที่ agent รับรู้และเกี่ยวข้องโดยตรงกับภารกิจตรงหน้า_ การระบุว่า "โหลดข้อมูลเข้าสู่บริบท" หมายถึงการเพิ่มข้อมูลชิ้นนั้นเข้ามาในเซ็ตความรู้นี้ และศาสตร์การจัดการบริบท (context engineering) คือการเลือกสรรและขัดเกลาข้อมูลเหล่านี้อย่างเป็นระบบ

คำศัพท์ทั้งสามคำนี้มีความหมายที่แยกออกจากกันอย่างชัดเจน:

| คำศัพท์         | สิ่งที่ระบุถึง                                                                         |
| --------------- | -------------------------------------------------------------------------------------- |
| บริบท (Context) | ข้อมูลที่เกี่ยวข้องกับภารกิจซึ่ง agent ถือครองอยู่ในปัจจุบัน                           |
| Context window  | ลำดับชิ้นส่วน [token](#token) ข้อมูลขาเข้าที่โมเดลเปิดอ่านจริงต่อหนึ่ง request     |
| Session         | ประวัติบันทึกบทสนทนาต่อเนื่องทั้งหมดที่ระบบควบคุม ([harness](#harness)) จัดเก็บไว้ |

การแยกแยะนี้มีความสำคัญมากเพราะบริบทเป็นเรื่องของคุณภาพ ไม่ใช่ปริมาณ พื้นที่หน้าต่างบริบท (context window) อาจถูกใช้ไปจนเกือบเต็ม แต่คุณภาพของบริบทกลับย่ำแย่มากได้ เช่น เต็มไปด้วยข้อมูลขาออกขยะจากเครื่องมือเก่า ๆ หลายหมื่นโทเค็นที่ไม่ได้เกี่ยวข้องกับงานปัจจุบันเลย ในทางกลับกัน พื้นที่หน้าต่างบริบทอาจจะเหลือว่างอยู่เยอะมากแต่กลับมีบริบทที่ยอดเยี่ยมที่สุดได้ เช่น มีเพียงแค่นิยามประเภทข้อมูล (type definition) บรรทัดเดียวที่เป็นหัวใจสำคัญของงานชิ้นนั้น

ความล้มเหลวในการสั่งงานส่วนใหญ่มักมีสาเหตุมาจากเรื่องบริบท เมื่อใดก็ตามที่ agent เกิดอาการแต่งเรื่องโค้ดขึ้นมาเอง (inventing APIs) ให้คำตอบที่ขัดแย้งกับการตัดสินใจก่อนหน้า หรือคาดเดาโครงสร้างข้อมูล (schema) ไปเรื่อย สิ่งแรกที่ต้องตั้งคำถามคือมีข้อมูลอะไรอยู่ในบริบทบ้างในตอนที่มันทำงาน ซึ่งส่วนใหญ่มักพบว่าข้อมูลสำคัญชิ้นนั้นไม่เคยถูกโหลดเข้าระบบเลย หรือไม่ก็จมหายไปอยู่ใต้ [อาการความสนใจเสื่อมถอย](#attention-degradation) (attention degradation) วิธีการแก้ไขจึงต้องเน้นไปที่การคัดสรร โดยโหลดเฉพาะสิ่งที่งานต้องการ และตัดสิ่งรบกวนภายนอกออกไปให้หมด

_ตัวอย่างการใช้งาน:_

"ตัว agent มันชอบมโนฟิลด์ข้อมูลแปลก ๆ ที่ไม่มีอยู่จริงในตัวแปร type นี้ขึ้นมาเรื่อยเลยครับ"

"เป็นเพราะไฟล์ที่นิยาม type ชิ้นนั้นมันยังไม่ได้ถูกโหลดเข้าสู่บริบทครับ มันเลยพยายามเดาจากจุดเรียกใช้งานรอบ ๆ เอา ให้สั่งเปิดอ่านไฟล์นิยามตัวเต็มเข้ามาในระบบก่อนเลยครับ"

### Context window

#### English

Everything the [model](#model) sees on each [model provider request](#model-provider-request). Finite, model-specific, and the _only_ surface through which the model perceives anything.

It's a single sequence of [tokens](#token): the [system prompt](#system-prompt), the conversation so far, every [tool result](#tool-result) the [harness](#harness) has fed back in. If something is in that sequence, the model can use it; if it isn't, the model doesn't know it exists — not your codebase, not the file you edited yesterday, not the instruction you gave three sessions ago. Anything outside the window has to be brought in, usually via a [tool call](#tool-call), before it can affect anything.

Finite means it fills up. Every turn appends more — your messages, the model's responses, tool results — and a long [session](#session) will eventually hit the limit, forcing [compaction](#compaction) or [clearing](#clearing). It also means everything in the window competes: each token you load is one less available for the rest, and content you didn't need still occupies the model's [attention](#attention-budget). The practical stance is to treat the window as a budget — load what the task needs, leave the rest out.

_Avoid:_ "memory" — the context window is working state and doesn't persist across sessions. [Memory](#memory-system) is a separate concept layered on top.

_Usage:_

"Can I just paste the whole monorepo into the prompt?"

"The context window's 200k tokens — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a tool call."

#### ไทย

ทุกสิ่งทุกอย่างที่ [model](#model) สามารถมองเห็นได้ในแต่ละคำขอผู้ให้บริการ ([model provider request](#model-provider-request)) มีขนาดที่จำกัดตายตัว แตกต่างกันไปตามแต่ละรุ่นโมเดล และเป็นพื้นที่หน้าต่าง _เพียงบานเดียวเท่านั้น_ ที่โมเดลใช้ในการรับรู้สิ่งต่าง ๆ รอบตัว

พื้นที่ส่วนนี้ประกอบไปด้วยลำดับข้อความของ [token](#token) ยาวต่อเนื่องกันเพียงชุดเดียว ได้แก่ ระบบคำสั่งหลัก ([system prompt](#system-prompt)) ประวัติบทสนทนาทั้งหมดจนถึงปัจจุบัน และผลลัพธ์จากเครื่องมือทุกชิ้น ([tool result](#tool-result)) ที่ระบบควบคุม ([harness](#harness)) ป้อนย้อนกลับเข้าไป หากข้อมูลใดปรากฏอยู่ในลำดับข้อความชุดนี้ โมเดลจะสามารถนำไปประมวลผลใช้งานได้ทันที แต่ถ้าข้อมูลนั้นอยู่นอกพื้นที่หน้าต่างนี้ โมเดลจะไม่รับรู้เลยว่ามีสิ่งนั้นอยู่ในโลก ไม่ว่าจะเป็นโค้ดเบสทั้งหมดของคุณ ไฟล์ที่คุณเพิ่งเปิดแก้ไขไปเมื่อวาน หรือคำสั่งที่คุณเคยสำทับไว้เมื่อสามเซสชันก่อน ข้อมูลใด ๆ ที่อยู่ภายนอกจึงจำเป็นต้องถูกดึงเข้ามาข้างในผ่านการเรียกใช้เครื่องมือ ([tool call](#tool-call)) ก่อนเท่านั้น จึงจะสามารถส่งผลต่อการประมวลผลได้

คำว่ามีขนาดจำกัดหมายความว่ามันสามารถเต็มได้ ในทุก ๆ รอบสนทนาจะมีการแนบข้อความต่อท้ายเพิ่มเข้าไปเรื่อย ๆ ทั้งข้อความของคุณ คำตอบจากโมเดล และผลลัพธ์ของเครื่องมือ ส่งผลให้ [session](#session) ที่ลากยาวจะเดินหน้าไปชนเพดานขีดจำกัดในที่สุด บังคับให้ระบบต้องทำการบีบอัดข้อมูล ([compaction](#compaction)) หรือล้างระบบเก่าออก ([clearing](#clearing)) นอกจากนี้ ข้อมูลทุกอย่างภายในหน้าต่างนี้ยังต้องแย่งพื้นที่ใช้งานร่วมกัน โทเค็นทุกตัวที่คุณโหลดเข้ามาจะไปแย่งโควตาพื้นที่ของส่วนอื่น และเนื้อหาขยะที่คุณไม่ได้ใช้ประโยชน์ก็จะเข้าไปเบียดบังพื้นที่งบประมาณ [ความสนใจของโมเดล](#attention-budget) (attention budget) ในทางปฏิบัติเราจึงต้องบริหารจัดการพื้นที่หน้าต่างนี้ในลักษณะของการจัดสรรงบประมาณ โดยโหลดเฉพาะสิ่งที่งานชิ้นนั้นจำเป็นต้องใช้ และทิ้งส่วนที่เหลือไว้นอกหน้าต่าง

_สิ่งที่ควรเลี่ยง:_ การเรียกพื้นที่ส่วนนี้ว่า "ความจำ" (memory) เนื่องจาก context window เป็นเพียงสถานะการทำงานชั่วคราวตรงหน้า (working state) และไม่มีการบันทึกจัดเก็บอยู่ข้ามเซสชัน ส่วน [ระบบความจำ](#memory-system) จริง ๆ จะเป็นโครงสร้างอีกเลเยอร์หนึ่งที่ถูกสร้างมาครอบไว้ด้านบน

_ตัวอย่างการใช้งาน:_

"เราสามารถก๊อปปี้โค้ดของทั้ง monorepo ใส่เข้าไปใน prompt เลยได้ไหมครับ"

"ไม่ได้ครับ เพราะขนาดของ context window มันจำกัดอยู่ที่ 200k โทเค็น ซึ่งน่าจะจุได้แค่ประมาณเศษหนึ่งส่วนห้าของคลังโค้ดทั้งหมดเอง แนะนำให้เลือกเฉพาะไฟล์ที่งานชิ้นนี้ต้องแตะต้องส่งเข้าไป ส่วนที่เหลือให้ปล่อยไว้ข้างนอก ค่อยให้มันดึงผ่าน tool call เอาทีหลังครับ"

### Stateful

#### English

Carries information forward. A [session](#session) is stateful across [turns](#turn) — [context](#context) accumulates as the session runs, which is why long sessions drift into the [dumb zone](#smart-zone). An [agent](#agent) can be made stateful across **sessions** by adding a [memory system](#memory-system) that persists information into the [environment](#environment) and reloads it at the start of future sessions. The [model](#model) is never stateful; any apparent continuity is the [harness](#harness) re-feeding context. Counterpart to [stateless](#stateless).

Where state lives at each layer:

| Layer       | Stateful?       | How                                                                                                                    |
| ----------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Model       | Never           | [Parameters](#parameters) are frozen; it sees only what's in each request                                          |
| Session     | Across turns    | The harness appends every message and [tool result](#tool-result) to the context                                 |
| Harness     | Across sessions | Memory files, [AGENTS.md](#agentsmd), [handoff artifacts](#handoff-artifact) — written down, reloaded later |
| Environment | Always          | Files persist whether or not any session is running                                                                    |

Each layer's statefulness is built by re-reading something stored a layer below: the session feels continuous because the harness re-sends the message history to the stateless model, and the agent remembers across sessions because the harness re-loads files from the environment. No state is ever stored in the model itself.

State isn't always wanted. Everything carried forward influences what comes next, so a wrong assumption made early in a session is carried forward too. [Clearing](#clearing) is the deliberate act of throwing session state away and starting from what's written down.

_Usage:_

"It remembered my preferences from yesterday — does that mean the model learned them?"

"No, the agent's stateful because the harness wrote them to a memory file and reloaded them at session start. The model itself saw nothing of yesterday."

#### ไทย

มีการเก็บรักษาและส่งต่อข้อมูลไปข้างหน้า ตัว [session](#session) จะมีคุณสมบัติแบบ stateful ข้ามแต่ละรอบสนทนา ([turns](#turn)) ข้อมูล[บริบท](#context)จะค่อย ๆ สะสมหนาขึ้นเรื่อย ๆ ในระหว่างที่เซสชันรันไป ซึ่งเป็นสาเหตุที่ทำให้เซสชันที่ลากยาวเกินไปเริ่มหลุดเข้าไปอยู่ใน [โซนเอ๋อ](#smart-zone) (dumb zone) นอกจากนี้เรายังสามารถสร้าง [agent](#agent) ให้มีคุณสมบัติแบบ stateful ข้าม **เซสชัน** ได้ โดยการเพิ่ม [ระบบความจำ](#memory-system) (memory system) เข้าไปทำหน้าที่จัดเก็บข้อมูลลงสู่สภาพแวดล้อมระบบ ([environment](#environment)) และโหลดข้อมูลเก่าตัวนั้นกลับเข้ามาใหม่ในตอนเริ่มต้นเซสชันถัดไป พึงระลึกไว้ว่าตัว [model](#model) เองไม่มีวันทำงานแบบ stateful ได้เลย ความต่อเนื่องทั้งหมดที่เห็นเป็นเพียงฝีมือของระบบควบคุม ([harness](#harness)) ที่ช่วยส่งบริบทซ้ำเข้าไปให้แทน เป็นคำตรงข้ามกับ [stateless](#stateless)

การจัดเก็บสถานะ (state) ในแต่ละเลเยอร์ของระบบ:

| เลเยอร์ระบบ | มีสถานะแบบ Stateful ไหม? | รูปแบบการทำงานและกลไก                                                                                                     |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Model       | ไม่เคยมี (Never)         | ค่าพารามิเตอร์ ([parameters](#parameters)) ถูกแช่แข็งถาวร มันรับรู้ข้อมูลเฉพาะแค่สิ่งที่แนบมาในแต่ละ request เท่านั้น |
| Session     | มีข้ามรอบสนทนา (turns)   | ตัว harness จะคอยนำทุกข้อความและผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) ไปแนบต่อท้ายบริบทเสมอ            |
| Harness     | มีข้ามแต่ละเซสชัน        | อาศัยการเขียนข้อมูลลงไฟล์ความจำ, ไฟล์ AGENTS.md หรือไฟล์บันทึกส่งงาน (handoff artifacts) แล้วคอยโหลดกลับมาใหม่ภายหลัง     |
| Environment | มีอยู่ตลอดเวลา (Always)  | ไฟล์ข้อมูลต่าง ๆ จะคงอยู่บนระบบอย่างถาวร ไม่ว่าจะมีเซสชันใด ๆ กำลังรันอยู่หรือไม่ก็ตาม                                    |

ความเป็น stateful ของแต่ละเลเยอร์จะถูกสร้างขึ้นมาจากการอ่านข้อมูลที่ถูกจัดเก็บไว้ในเลเยอร์ที่อยู่ต่ำลงไปหนึ่งขั้น ระบบเซสชันให้ความรู้สึกต่อเนื่องเพราะตัว harness คอยส่งประวัติข้อความซ้ำกลับไปให้โมเดลที่ทำงานแบบ stateless และ agent สามารถจำเรื่องราวข้ามเซสชันได้เพราะตัว harness คอยเปิดอ่านไฟล์เก่ากลับมาจากตัวสภาพแวดล้อมระบบ ไม่มีสถานะหรือความจำใด ๆ ถูกบันทึกไว้ในตัวโมเดลเองเลย

การมีสถานะสะสมอยู่ไม่ใช่สิ่งที่เป็นประโยชน์เสมอไป ข้อมูลทุกอย่างที่ถูกส่งต่อมาจะส่งอิทธิพลต่อสิ่งที่จะเกิดขึ้นถัดไปทั้งหมด ดังนั้น ข้อสมมติฐานที่ผิดพลาดตั้งแต่ช่วงต้นของเซสชันก็จะถูกหอบส่งต่อไปสร้างปัญหาในอนาคตด้วยเช่นกัน การล้างระบบ ([clearing](#clearing)) จึงเป็นกระบวนการที่ตั้งใจทำขึ้นเพื่อโยนสถานะเก่าในเซสชันทิ้งไป และเริ่มต้นระบบใหม่จากข้อมูลที่ถูกบันทึกไว้เป็นลายลักษณ์อักษรจริง ๆ เท่านั้น

_ตัวอย่างการใช้งาน:_

"มันจำความชอบและรูปแบบโค้ดที่ผมเคยสั่งไว้เมื่อวานได้ด้วยแฮะ แปลว่าตัวโมเดลมันเรียนรู้และจำเรื่องของผมได้ใช่ไหมครับ"

"เปล่าครับ ตัว agent มันดูมีสถานะแบบ stateful ขึ้นมาเพราะตัว harness แอบเซฟ preferences ของคุณลงไฟล์ความจำ แล้วคอยโหลดกลับเข้ามาให้ตอนเปิดเซสชันใหม่ครับ ตัวโมเดลเปล่า ๆ ดั้งเดิมไม่ได้รับรู้อะไรเกี่ยวกับเรื่องเมื่อวานเลยครับ"

### Agent

#### English

A [model](#model) [harnessed](#harness) with [tools](#tool), a [system prompt](#system-prompt), and a [context window](#context-window), that takes [turns](#turn) with a user. _Claude Code is an agent. Cursor is an agent. Claude.ai is an agent._ An agent is what you actually talk to — it's the model in motion, configured for a purpose.

Unlike most terms in this dictionary, "agent" doesn't name a mechanical part. The model is a file of [parameters](#parameters); the harness is software you can point at. The agent is neither — it's the unit you're speaking to. People anthropomorphize [AI](#ai) constantly, and the agent is the anthropomorphized unit: the thing you delegate to, the thing that reads your message and answers, the "it" in "it broke the build again". When you say the agent did something, you mean the model-plus-harness did it, but you're addressing the combination as a single actor.

The idea is older than this wave of AI. Software agents — programs you delegate a goal to, which act on your behalf — have been a concept for as long as AI has.

_Avoid:_ "the AI", "the bot" (too vague — they hide whether you mean the parameters or the harnessed thing).

_Usage:_

"Which agent are you using for the migration?"

"Claude Code locally, Cursor for the UI work — same model underneath, different harnesses."

#### ไทย

ตัว [model](#model) ที่ถูกประกอบเข้ากับระบบควบคุม ([harness](#harness)) ซึ่งติดตั้งเครื่องมือ ([tools](#tool)) ระบบคำสั่งหลัก ([system prompt](#system-prompt)) และพื้นที่หน้าต่างบริบท ([context window](#context-window)) เรียบร้อยแล้ว เพื่อทำหน้าที่พูดคุยและทำงานสลับรอบ ([turns](#turn)) ร่วมกับผู้ใช้งาน โปรแกรมอย่าง _Claude Code, Cursor หรือ Claude.ai ต่างก็เป็น agent_ มันคือสิ่งที่คุณเปิดใจพูดคุยทำงานด้วยจริง ๆ เปรียบเสมือนตัวโมเดลในเวอร์ชันที่เคลื่อนไหวและทำงานได้จริง โดยได้รับการตั้งค่าปรับแต่งมาเพื่อจุดประสงค์เฉพาะทาง

คำว่า "agent" มีความแตกต่างจากคำศัพท์ส่วนใหญ่ในพจนานุกรมฉบับนี้ตรงที่มันไม่ได้หมายถึงชิ้นส่วนกลไกทางเทคนิคชิ้นใดชิ้นหนึ่งโดยเจาะจง ตัวโมเดลคือไฟล์คลังตัวเลขพารามิเตอร์ ([parameters](#parameters)) ส่วน harness คือตัวซอฟต์แวร์ระบบที่คุณสามารถชี้พิกัดตรวจสอบโค้ดได้ แต่คำว่า agent ไม่ใช่ทั้งสองอย่าง แต่มันหมายถึง "หน่วยบุคคลจำลอง" ที่คุณกำลังสนทนาและมอบหมายงานให้ มนุษย์เรามีพฤติกรรมชอบมองสิ่งไม่มีชีวิตให้มีลักษณะเหมือนมนุษย์ (anthropomorphize) อยู่ตลอดเวลา และคำว่า agent ก็คือหน่วยจำลองนั้นเอง มันคือสิ่งที่คุณไว้วางใจส่งมอบเป้าหมายงานให้ทำ คือสิ่งทีเปิดอ่านข้อความของคุณแล้วพิมพ์ตอบกลับมา และเป็นคำว่า "มัน" เวลาที่คุณอุทานว่า "มันทำระบบบิลด์พังอีกแล้ว" เวลาที่คุณพูดว่า agent เป็นคนทำสิ่งใดสิ่งหนึ่ง ในแง่เทคนิคคือระบบโมเดลบวก harness ร่วมกันทำงาน แต่ในมุมมองการใช้งาน คุณกำลังมองส่วนผสมนั้นรวมกันเป็นนักแสดงหลักเพียงหนึ่งเดียว

แนวคิดเรื่องนี้มีประวัติศาสตร์มาอย่างยาวนานก่อนยุคกระแสความนิยมปัญญาประดิษฐ์ในปัจจุบัน คำว่า ซอฟต์แวร์เอเจนต์ (software agents) ซึ่งหมายถึงโปรแกรมคอมพิวเตอร์ที่คุณมอบหมายเป้าหมายไว้ให้ แล้วมันจะทำหน้าที่เป็นตัวแทนออกไปดำเนินการสิ่งต่าง ๆ เพื่อคุณ ถือเป็นแนวคิดหลักในแวดวงวิจัยวิทยาศาสตร์คอมพิวเตอร์มาตั้งแต่ยุคเริ่มต้นยุคแรก ๆ แล้ว

_สิ่งที่ควรเลี่ยง:_ การใช้คำกว้าง ๆ อย่าง "ตัว AI" หรือ "หุ่นยนต์บอต" (bot) เนื่องจากคำเหล่านี้มีความคลุมเครือเกินไป และบดบังรายละเอียดสำคัญว่าสิ่งที่คุณกำลังพูดถึงอยู่ ณ ขณะนั้นคือตัว parameters ในโมเดล หรือคือระบบที่ถูกประกอบโครง harness เข้าไปเสร็จสรรพแล้ว

_ตัวอย่างการใช้งาน:_

"ในโปรเจกต์โยกย้ายฐานข้อมูล (migration) รอบนี้ คุณเลือกใช้ agent ตัวไหนทำงานหลักครับ"

"ผมใช้ Claude Code รันในเครื่องโลคัลครับ ส่วนงานดัดแปลงหน้าจอ UI จะใช้ Cursor สรุปคือข้างใต้รันอยู่บนโครงสร้าง model ตัวเดียวกันเป๊ะ แต่ใช้ harness คนละตัวแยกตามสไตล์ของแต่ละ agent ครับ"

### System prompt

#### English

The instructions the [harness](#harness) prepends to every [model provider request](#model-provider-request) — the [agent](#agent)'s standing brief: who it is, how to behave, which [tools](#tool) it can call, what conventions to follow. Usually stable across a [session](#session).

The system prompt is written by the harness vendor, not by you, and in coding harnesses it's big — often tens of thousands of [tokens](#token) of behavioural rules, tool descriptions, and edge-case handling, all paid as [input tokens](#input-tokens) on every [turn](#turn). Your own standing instructions ride along with it: files like [AGENTS.md](#agentsmd) are loaded next to the system prompt at the start of the session, so the [model](#model) reads the vendor's brief and yours together before it ever sees your message.

Because it's identical on every request, it forms the start of the [prefix cache](#prefix-cache) — which is part of why harnesses keep it fixed for a whole session rather than editing it as they go.

Models are trained to prioritise the system prompt over user messages. So when an agent insists on a convention you never asked for, or formats output in a way you can't shake, it's usually obeying its system prompt — and your message is losing the argument. Some harnesses are customisable: they give you full access to the system prompt, so you can read what the agent is actually being told and change it.

_Usage:_

"Two harnesses, same model, totally different behavior on the same prompt."

"Different system prompts. One's tuned for terse code edits, the other for explaining — that's where the divergence lives, before your message even arrives."

#### ไทย

ชุดระบบคำสั่งที่ระบบควบคุม ([harness](#harness)) จะทำการแนบไว้ที่ส่วนหัวบนสุดของทุก ๆ คำขอผู้ให้บริการ ([model provider request](#model-provider-request)) เปรียบเสมือนหนังสือคำสั่งถาวรประจำตัวของ [agent](#agent) ที่คอยระบุว่าตัวมันเองคือใคร ต้องปฏิบัติตนอย่างไร มีเครื่องมือ ([tools](#tool)) ชิ้นไหนให้เรียกใช้ได้บ้าง และมีข้อตกลงร่วมกันในการทำงานเรื่องใดที่ต้องยึดถือ โดยปกติแล้วชุดคำสั่งนี้จะถูกตั้งค่าไว้อย่างคงที่ไม่มีการขยับเปลี่ยนตลอดการรันใช้งานใน [session](#session)

ตัวข้อความใน system prompt จะถูกเขียนขึ้นโดยผู้พัฒนาระบบซอฟต์แวร์ harness ไม่ใช่ข้อความที่คุณพิมพ์เอง และในระบบ harness สำหรับงานเขียนโค้ด ข้อความส่วนนี้จะมีความยาวและหนามาก บ่อยครั้งอาจกินพื้นที่สูงถึงหลายหมื่น [token](#token) เพื่อบรรจุข้อบังคับพฤติกรรม คำอธิบายวิธีรันเครื่องมือ และการดักจับเคสปัญหาแปลก ๆ ซึ่งโทเค็นเหล่านั้นทั้งหมดจะถูกนับเป็นส่วนของข้อมูลขาเข้า ([input tokens](#input-tokens)) ที่คุณต้องควักเงินจ่ายในทุก ๆ รอบสนทนา ([turn](#turn)) นอกจากนี้ คำสั่งยืนพื้นส่วนตัวของคุณก็คือนั่งรันอยู่ข้าง ๆ กันนี้ โดยไฟล์คู่มือประจำโปรเจกต์ เช่น AGENTS.md จะถูกตัว harness โหลดเข้าไปประกบเคียงข้างกับ system prompt ตั้งแต่ตอนเริ่มต้นเซสชัน ดังนั้น ตัว [model](#model) จึงได้อ่านบันทึกคำสั่งของผู้พัฒนาซอฟต์แวร์และข้อตกลงของคุณร่วมกัน ก่อนที่มันจะได้เห็นข้อความแรกที่คุณพิมพ์ส่งเข้าไปเสียด้วยซ้ำ

เนื่องจากตัวข้อความในส่วนนี้มีความเหมือนเดิมเป๊ะในทุก ๆ request มันจึงกลายเป็นจุดเริ่มต้นของบล็อกข้อมูลสำหรับระบบบันทึกส่วนหัวล่วงหน้า ([prefix cache](#prefix-cache)) นี่คือเหตุผลสำคัญในเชิงวิศวกรรมว่าทำไมระบบ harness ถึงนิยมตั้งค่าส่วนนี้ให้คงที่ตลอดเซสชัน แทนที่จะคอยเปิดแก้ข้อความไปมาในระหว่างรันงาน

โมเดลภาษาโดยทั่วไปจะถูกฝึกฝนมาให้จัดลำดับความสำคัญของระบบคำสั่ง system prompt ให้สูงกว่าข้อความทั่วไปจากผู้ใช้งาน ดังนั้น หากคุณพบว่า agent แสดงอาการดื้อรั้น ยืนกรานจะใช้ข้อตกลงรูปแบบโค้ดบางอย่างที่คุณไม่เคยสั่ง หรือพยายามจัดรูปแบบผลลัพธ์ (format) ออกมาในทรงที่คุณพยายามจะห้ามแล้วก็ไม่ฟัง สาเหตุมักเกิดจากการที่มันกำลังปฏิบัติตามคำสั่งที่ฝังอยู่ใน system prompt อย่างเคร่งครัด และข้อความแชตของคุณเป็นฝ่ายแพ้ในการโต้แย้งนั้น ระบบ harness บางตัวจึงเปิดให้คุณเข้าถึงและปรับแต่งส่วนนี้ได้ เพื่อให้คุณสามารถเปิดอ่านข้อความที่ agent ได้รับแจ้งจริง ๆ และเข้าไปดัดแปลงแก้ไขข้อกำหนดเหล่านั้นได้ตามใจชอบ

_ตัวอย่างการใช้งาน:_

"ทำไมรันบน model ตัวเดียวกันแท้ ๆ แต่ซอฟต์แวร์สองตัวนี้ให้พฤติกรรมปลายทางออกมาต่างกันลิบลับ ทั้งที่ส่งคำสั่ง prompt เข้าไปเหมือนกันเลยนะ"

"เพราะระบบใช้ system prompt คนละชุดกันครับ ตัวหนึ่งอาจจะถูกจูนมาให้เขียนโค้ดสั้นกระชับตรงประเด็น แต่อีกตัวโดนตั้งค่ามาให้อธิบายเหตุผลยาว ๆ ความแตกต่างมันงอกขึ้นมาตั้งแต่ตรงนั้นแล้วครับ ก่อนที่ข้อความของคุณจะถูกส่งเข้าไปคำนวณเสียด้วยซ้ำ"

### Session

#### English

One bounded run of interaction with an [agent](#agent). Starts empty, accumulates messages, [tool results](#tool-result), and files read, and ends when [cleared](#clearing), closed, or [compacted](#compaction) into a fresh session. The session is what _fills_ the [context window](#context-window): if the context window is the box, the session is the stuff slowly filling it up. Work too large for a single context window must be split across sessions.

The session's message history is the agent's working memory. The [model](#model) is [stateless](#stateless), so everything it appears to remember — what you asked for, what the tests said, what it decided three turns ago — is in the message history, re-sent with every [model provider request](#model-provider-request). Whatever isn't in the session doesn't exist for the agent.

That memory ends with the session. A new session starts from nothing: the agent that knew your codebase well at the end of yesterday's session knows none of it this morning. What survives is the [filesystem](#filesystem) — files written during one session can be read by the next, which is what [handoffs](#handoff), [memory systems](#memory-system), and [AGENTS.md](#agentsmd) rely on.

You choose where a session ends. Everything in a session influences every later [turn](#turn), so unrelated tasks done in one session leave residue that colours the next answer. One task per session keeps the context relevant; finishing a task is a natural point to clear.

_Usage:_

"How long can one session run before it falls apart?"

"Depends on the work — a focused refactor stays sharp longer than open-ended research. Once the session bloats, hand off or compact, don't push through."

#### ไทย

ขอบเขตของรอบการทำงานหนึ่งรอบในการติดต่อโต้ตอบกับ [agent](#agent) โดยจะเริ่มต้นจากระบบที่ว่างเปล่า ค่อย ๆ สะสมเก็บรวบรวมประวัติข้อความคุย ผลลัพธ์จากเครื่องมือ ต่าง ๆ ([tool results](#tool-result)) รวมถึงเนื้อหาไฟล์ต่าง ๆ ที่เคยเปิดอ่าน และจะสิ้นสุดวงจรลงเมื่อมีการล้างข้อมูลระบบ ([clearing](#clearing)) ปิดหน้าโปรแกรม หรือถูกทำการบีบอัดสรุปข้อมูล ([compacted](#compaction)) เพื่อก้าวขึ้นสู่เซสชันอันใหม่ที่สะอาดกว่าเดิม ตัว session คือสิ่งที่มีหน้าที่ _เติมเต็ม_ พื้นที่หน้าต่างบริบท ([context window](#context-window)) หากเปรียบ context window เป็นกล่องพัสดุเปล่า ตัว session ก็คือสิ่งของข้อมูลต่าง ๆ ที่ค่อย ๆ ถูกยัดใส่ลงไปจนเต็มกล่อง ดังนั้น งานที่มีขนาดใหญ่เกินกว่าขีดจำกัดของกล่องใบเดียว จึงจำเป็นต้องถูกหั่นย่อยแยกไปประมวลผลข้ามหลาย ๆ เซสชันแทน

ประวัติข้อความทั้งหมดที่ถูกเก็บสะสมอยู่ในเซสชันจะทำหน้าที่เสมือนระบบความจำชั่วคราว (working memory) สำหรับการประมวลผลงานของ agent เนื่องจากตัว [model](#model) ทำงานแบบไม่มีการจำสถานะ ([stateless](#stateless)) ทุกสิ่งทุกอย่างที่ดูเหมือนมันจะจำได้ ไม่ว่าจะเป็นโจทย์คำถามที่คุณสั่งไว้ ผลลัพธ์ที่ตัวทดสอบรายงาน หรือการตัดสินใจที่มันเคยเลือกไว้เมื่อสามรอบสนทนาก่อนหน้า ความจริงแล้วข้อมูลทั้งหมดนั้นฝังอยู่ในประวัติข้อความของเซสชัน ซึ่งจะถูกหอบหิ้วส่งกลับไปใหม่ในทุก ๆ คำขอผู้ให้บริการ ([model provider request](#model-provider-request)) ข้อมูลใด ๆ ก็ตามที่ไม่ได้ถูกบันทึกจัดเก็บอยู่ในเซสชันปัจจุบัน จะถือว่าไม่มีตัวตนอยู่จริงในมุมมองการรับรู้ของ agent

ระบบความจำจำลองส่วนนี้จะสลายหายไปทันทีเมื่อเซสชันสิ้นสุดลง การเปิดเซสชันอันใหม่จะเริ่มนับหนึ่งจากความว่างเปล่าเสมอ ตัว agent ที่เคยเปิดอ่านทำความเข้าใจโครงสร้างคลังโค้ดเบสของคุณได้อย่างเชี่ยวชาญในช่วงท้ายของเซสชันเมื่อวานนี้ จะกลายสภาพเป็นสิ่งที่ไม่รู้อะไรเลยเกี่ยวกับโค้ดของคุณในเช้าวันใหม่นี้ ข้อมูลชิ้นเดียวที่สามารถอยู่รอดข้ามผ่านช่วงเวลานี้ได้คือระบบไฟล์จริง ([filesystem](#filesystem)) โดยไฟล์ซอร์สโค้ดและข้อมูลต่าง ๆ ที่ถูกเขียนบันทึกไว้ในระหว่างเซสชันหนึ่ง จะสามารถถูกเปิดอ่านได้โดยเซสชันถัดไป ซึ่งนี่คือกลไกพื้นฐานที่ระบบส่งงาน ([handoffs](#handoff)) คู่มือความจำ และไฟล์ตระกูล AGENTS.md นำมาใช้เพื่อชดเชยพื้นที่ความจำส่วนที่ขาดหายไปของโมเดล

คุณคือผู้กำหนดพิกัดจุดสิ้นสุดของแต่ละเซสชัน ข้อมูลทุกประการที่ถูกสะสมข้ามผ่านการคุยในเซสชันจะส่งอิทธิพลต่อผลการสุ่มคำตอบในรอบสนทนา ([turn](#turn)) ถัด ๆ ไปทั้งหมด ดังนั้น การสั่งให้ agent ทำภารกิจที่หลากหลายประเภทและไม่เกี่ยวข้องกันรวมอยู่ภายในเซสชันเดียวกัน จะหลงเหลือคราบข้อมูลเก่าตระกูลขยะ (residue) เข้าไปเบียดบังและปนเปื้อนคำตอบถัดไปในอนาคต การจำกัดกรอบให้มีเพียง 1 ภารกิจหลักต่อ 1 เซสชัน จึงเป็นแนวทางปฏิบัติที่ดีที่สุดในการควบคุมบริบทให้มีความเฉียบคมตรงประเด็น และเมื่อใดก็ตามที่ภารกิจชิ้นนั้นเสร็จสิ้นลง นั่นคือพิกัดจังหวะที่เป็นธรรมชาติที่สุดในการสั่งล้างระบบเพื่อเริ่มงานชิ้นใหม่

_ตัวอย่างการใช้งาน:_

"ปกติแล้วเราควรลากเปิดรัน session หนึ่งยาวต่อเนื่องกันได้นานแค่ไหน ก่อนที่ระบบมันจะเริ่มรวนและให้ผลลัพธ์เพี้ยนครับ"

"ขึ้นอยู่กับลักษณะและสมาธิของเนื้อหางานครับ ถ้ารันงานปรับแก้โค้ดแบบเจาะจงเป้าหมาย (focused refactor) ระบบจะรักษาความเฉียบคมได้นานกว่างานวิจัยสำรวจแบบเปิดกว้าง (open-ended research) ครับ แต่เมื่อใดก็ตามที่เริ่มรู้สึกว่าข้อมูลในเซสชันมันบวมและอืดเกินไป ให้รีบทำเรื่องส่งงานส่งต่อสาระสำคัญ (compact) แล้วเปิดเซสชันใหม่ทันที อย่าฝืนรันต่อในสภาพนั้นครับ"

### Turn

#### English

One user message plus everything the [agent](#agent) does in response, up until it yields back to the user. Contains one or more [model provider requests](#model-provider-request) — many, if the agent calls [tools](#tool). A clarifying question closes the turn; your reply opens the next one. The hierarchy is [session](#session) **> Turn > Model provider request**.

What makes the turn worth naming is that its length is the agent's decision, not yours. You hand over one message; the agent decides how many tool calls to chain before yielding. A turn can be a one-sentence answer or twenty minutes of reading, editing, and running tests. That's the same property from two angles: long turns are what make [AFK](#afk) work possible, and long turns are also where things go wrong unsupervised — by the time the agent yields, it may have drifted a long way from what you meant.

The turn is also the natural unit for steering. Everything inside a turn happens without you; the gaps between turns are where you redirect. Most [harnesses](#harness) soften this: you can interrupt mid-turn to stop the agent and redirect it, or type a message while it works, which gets read once the turn completes. If you find yourself repeatedly unhappy with where turns end up, the fix is usually to ask for smaller ones — a plan first, one step at a time — trading autonomy for more frequent gaps to steer in.

_Usage:_

"One turn took two minutes?"

"It made fourteen [tool calls](#tool-call) inside that turn — each one is a separate model provider request. Latency stacks up before the agent finally yields back to you."

#### ไทย

รอบการทำงานโต้ตอบที่นับตั้งแต่ข้อความที่ผู้ใช้งานส่งเข้าไปหนึ่งครั้ง รวมเข้ากับทุก ๆ การกระทำที่ [agent](#agent) ลงมือปฏิบัติเพื่อตอบสนองต่อคำสั่งนั้น ลากยาวต่อเนื่องไปจนกระทั่งระบบส่งมอบสิทธิ์บนหน้าจอกลับคืนมาให้แก่คุณ ภายในหนึ่งรอบการสนทนานี้จะประกอบไปด้วยรอบการส่งข้อมูลคำขอผู้ให้บริการ ([model provider requests](#model-provider-request)) ตั้งแต่หนึ่งครั้งขึ้นไป และอาจพุ่งสูงขึ้นเป็นจำนวนมากหาก agent มีการเปิดเรียกใช้งานเครื่องมือต่าง ๆ ([tools](#tool)) อย่างต่อเนื่อง วงจรในรอบการสนทนานี้จะจบลงเมื่อระบบพิมพ์คำถามเพื่อขอความชัดเจนจากคุณ หรือให้คำตอบสุดท้ายแก่คุณ และข้อความที่คุณพิมพ์ส่งกลับไปจะเป็นการเปิดฉากรอบการสนทนาอันถัดไป ลำดับขั้นสถาปัตยกรรมของข้อมูลจึงเรียงตัวดังนี้คือ [session](#session) **> รอบการสนทนา (Turn) > Model provider request**

เหตุผลสำคัญที่ทำให้คำว่า "รอบการสนทนา" หรือ turn มีความจำเป็นต้องถูกนิยามขึ้นมาแยกต่างหาก เป็นเพราะความยาวและขอบเขตของมันถูกตัดสินใจโดยตัว agent เอง ไม่ใช่คุณ คุณมีหน้าที่เพียงแค่ยื่นข้อความคำสั่งเปิดฉากเข้าไปหนึ่งประโยค หลังจากนั้น agent จะเป็นผู้ประเมินและตัดสินใจเองว่าจะต้องร้อยเรียงโซ่ตรวนของการเรียกใช้เครื่องมือ ([tool calls](#tool-call)) ต่อเนื่องกันกี่สิบครั้งก่อนที่จะยอมวางมือ ส่งผลให้หนึ่งรอบสนทนาอาจจบลงอย่างรวดเร็วด้วยประโยคคำตอบสั้น ๆ เพียงบรรทัดเดียว หรืออาจกินเวลาลากยาวนานถึง 20 นาทีในการเปิดไล่ดูไฟล์ แก้ไขซอร์สโค้ด และสั่งรันระบบทดสอบหลังบ้านอย่างต่อเนื่อง คุณสมบัติชิ้นนี้มีเหรียญสองด้านที่ต้องทำความเข้าใจ ด้านหนึ่งคือ รอบสนทนาที่ลากยาวแบบนี้คือกลไกหลักที่ช่วยเปิดโอกาสให้คุณสามารถละสายตาจากหน้าจอเพื่อไปทำสิ่งอื่นได้ ([AFK](#afk)) แต่อีกด้านหนึ่ง รอบสนทนาที่ยาวเกินไปโดยไม่มีคนคอยควบคุม ก็เป็นจุดกำเนิดของปัญหาความสูญเสียได้เช่นกัน เพราะกว่าที่ agent จะยอมส่งมอบสิทธิ์คืนกลับมาให้คุณตรวจสอบ ผลงานปลายทางอาจจะหลุดลอยเตลิดเปิดเปิงออกไปไกลจากเจตนาเริ่มต้นของคุณมากแล้ว

นอกจากนี้ turn ยังทำหน้าที่เป็นหน่วยธรรมชาติที่ดีที่สุดในการเข้ามาคุมพวงมาลัยทิศทาง (steering) ทุกสิ่งทุกอย่างที่เกิดขึ้นภายในวงลูปของหนึ่งรอบสนทนาจะดำเนินไปโดยอัตโนมัติโดยไม่มีตัวคุณเข้าไปเกี่ยวข้อง ช่องว่างระหว่างรอยต่อข้ามแต่ละ turn จึงเป็นพื้นที่จังหวะที่เหมาะสมที่สุดที่คุณจะใช้ในการป้อนคำสั่งปรับเปลี่ยนทิศทางงานใหม่ ระบบควบคุม ([harness](#harness)) ส่วนใหญ่มักจะทำการลดความแข็งกระด้างในจุดนี้ลง โดยอนุญาตให้คุณสามารถกดปุ่มสั่งเบรกขัดจังหวะกลางคัน (interrupt) เพื่อสั่งให้ agent หยุดทำงานในรอบนั้นทันทีและรับคำสั่งใหม่ หรือเปิดให้คุณสามารถพิมพ์ข้อความทิ้งไว้ในระหว่างที่มันกำลังประมวลผลอยู่ โดยข้อความนั้นจะถูกเปิดอ่านทำความเข้าใจทันทีเมื่อสิ้นสุดวงจรรอบสนทนานั้นลง หากคุณพบว่าตัวเองต้องพบกับความผิดหวังอยู่บ่อยครั้งกับผลงานปลายทางหลังจากที่ agent วางมือ วิธีการแก้ไขคือการปรับตรรกะคำสั่งให้สั่งงานในขอบเขตที่เล็กลง เช่น สั่งให้วางแผนงานมาให้ดูก่อนทีละขั้น แล้วค่อยสั่งให้ลงมือทำทีละเป้าหมาย เพื่อเป็นการแลกเปลี่ยนสิทธิ์ความเป็นอิสระ (autonomy) ของระบบ ไปเป็นช่องว่างรอยต่อข้าม turn ที่ถี่ขึ้นเพื่อให้คุณมีโอกาสคุมพวงมาลัยได้บ่อยตามต้องการ

_ตัวอย่างการใช้งาน:_

"การคุยโต้ตอบกันแค่รอบเดียว (turn) ทำไมมันถึงใช้เวลานั่งรอนานตั้งสองนาทีเต็มเลยล่ะครับ"

"เพราะเบื้องหลังภายใน turn นั้น ตัว agent มีการเรียกใช้งานเครื่องมือไปถึง 14 ครั้งครับ ซึ่งแต่ละครั้งหมายถึงการส่ง model provider request แยกกันออกไปหนึ่งรอบเต็ม ๆ ความหน่วงในการเครือข่ายเน็ตเวิร์กและเวลาประมวลผลจึงสะสมพอกพูนขึ้นเรื่อย ๆ กว่าที่มันจะรันงานเสร็จสิ้นและยอมส่งมอบสิทธิ์คืนกลับมาให้คุณบนหน้าจอครับ"

## Section 3 — Tools & Environment

### Environment

#### English

The world the [agent](#agent) acts on — anything outside the [harness](#harness) that the agent perceives through [tool results](#tool-result) and changes through [tool calls](#tool-call). The harness _runs_ the agent; the environment is what the agent _works in_. A file like [`AGENTS.md`](#agentsmd) lives in the environment; the harness is what loads it into the [context window](#context-window). A [filesystem](#filesystem) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

The agent only sees the environment when it looks. Everything it knows about the environment arrived through a tool result, so its picture is a collection of snapshots, each accurate at the moment it was taken. If a file changes after the agent read it — you edit it by hand, a build step regenerates it — the agent keeps reasoning from the stale copy until something prompts a re-read. An agent confidently describing a file that no longer looks like that is usually this: the environment moved, the snapshot didn't.

The environment is also the layer that persists — the only one that is always [stateful](#stateful). A [session](#session)'s context is gone when the session ends, but files written to the environment remain for the next session to read — which is what [memory systems](#memory-system), [handoff artifacts](#handoff-artifact), and `AGENTS.md` rely on. Anything an agent should still know tomorrow has to end up in the environment.

You decide how big the environment is. A [sandbox](#sandbox) shrinks it, limiting what the agent can reach; adding a [tool](#tool) extends it, bringing a database or an API into reach. What's inside the boundary is what the agent can perceive and change; everything outside it doesn't exist for the agent. How well the environment is set up to support the agent's work is the codebase's [AX](#ax).

_Avoid:_ using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

_Usage:_

"The agent can't see the staging DB schema."

"Wire it into the environment — give it a `psql` tool scoped to read-only on staging. The harness is fine, it just has nothing to act on."

#### ไทย

โลกที่ [agent](#agent) เข้าไปปฏิบัติการและส่งผลกระทบ ซึ่งหมายถึงสิ่งใดก็ตามที่อยู่นอกระบบควบคุม ([harness](#harness)) ที่ agent ใช้รับรู้ผ่านทางผลลัพธ์ของเครื่องมือ ([tool results](#tool-result)) และเข้าไปสร้างการเปลี่ยนแปลงผ่านทางการเรียกใช้เครื่องมือ ([tool calls](#tool-call)) ระบบ harness คือผู้ทำหน้าที่ _สั่งรัน_ ตัว agent ส่วน environment คือพื้นที่ที่ agent _เข้าไปนั่งทำงานจริง ๆ_ ตัวอย่างเช่น ไฟล์กำหนดกฎเกณฑ์อย่าง [`AGENTS.md`](#agentsmd) นั้นจัดว่าเป็นสิ่งที่อาศัยอยู่ใน environment แต่ระบบ harness จะเป็นผู้โหลดไฟล์นี้เข้าสู่หน้าต่างบริบท ([context window](#context-window)) อีกทีหนึ่ง ระบบไฟล์ ([filesystem](#filesystem)) คือรูปแบบของ environment ที่เราพบเจอได้บ่อยที่สุดในงานเขียนโค้ด แต่มันไม่ใช่รูปแบบเดียว (ฐานข้อมูล, external API หรือแม้แต่เซสชันของเว็บเบราว์เซอร์ ล้วนสามารถทำหน้าที่เป็น environment ได้ทั้งสิ้น)

agent จะสามารถมองเห็นสภาพของ environment ได้ก็ต่อเมื่อมันสั่งเปิดดูเท่านั้น ทุกสิ่งทุกอย่างที่มันรับรู้เกี่ยวกับโลกภายนอกล้วนเดินทางผ่านเข้ามาทางผลลัพธ์ของเครื่องมือ ภาพจำในหัวของมันจึงเป็นเพียงชุดของภาพถ่ายชั่วขณะ (snapshots) ซึ่งมีความถูกต้องแม่นยำ ณ วินาทีที่ถูกถ่ายขึ้นมาเท่านั้น หากไฟล์ข้อมูลภายนอกมีการขยับเปลี่ยนไปหลังจากที่ agent เปิดอ่านไปแล้ว (เช่น คุณเข้าไปเปิดแก้โค้ดด้วยตัวเอง หรือขั้นตอนการบิลด์ระบบทำการสร้างไฟล์นั้นขึ้นมาใหม่) ตัว agent จะยังคงปักใจคิดวิเคราะห์จากสำเนาข้อมูลเก่าที่ล้าสมัยไปแล้ว จนกว่าจะมีคำสั่งบางอย่างไปกระตุ้นให้มันเปิดอ่านไฟล์นั้นใหม่อีกรอบ เหตุการณ์ที่ agent บรรยายลักษณะของไฟล์อย่างมั่นใจแต่กลับไม่ตรงกับความเป็นจริงในเครื่อง มักเกิดจากสาเหตุนี้คือ โลกภายนอกขยับเคลื่อนไปแล้ว แต่ภาพถ่ายในหัวของมันยังหยุดนิ่งอยู่กับที่

environment ยังเป็นเลเยอร์ระบบเพียงชั้นเดียวที่ยังคงอยู่ข้ามเวลา ซึ่งถือเป็นชั้นเดียวที่มีคุณสมบัติแบบจำสถานะ ([stateful](#stateful)) อยู่ตลอดเวลา ข้อมูลบริบทใน [session](#session) จะสลายหายไปทันทีเมื่อปิดเซสชันลง แต่ไฟล์ข้อมูลใด ๆ ที่ถูกเขียนทิ้งไว้ใน environment จะยังคงตั้งอยู่ให้เซสชันอันถัดไปเปิดอ่านได้ ซึ่งนี่คือกลไกพื้นฐานที่ [ระบบความจำ](#memory-system) ไฟล์บันทึกส่งงาน ([handoff artifacts](#handoff-artifact)) และไฟล์ `AGENTS.md` นำมาใช้ประโยชน์ ข้อมูลใด ๆ ที่คุณต้องการให้ agent ยังคงจดจำได้ในวันพรุ่งนี้ ข้อมูลชิ้นนั้นจะต้องถูกนำมาบันทึกจัดเก็บไว้ใน environment

คุณคือผู้กำหนดขอบเขตขนาดของ environment การครอบโครงระบบพื้นที่ปิด ([sandbox](#sandbox)) จะช่วยย่อขนาดโลกภายนอกลง เพื่อจำกัดวงไม่ให้ agent เอื้อมมือไปแตะต้องระบบส่วนอื่น ในทางกลับกัน การเพิ่มเครื่องมือ ([tool](#tool)) ใหม่ ๆ เข้าไปจะเป็นการขยายขอบเขตโลกภายนอกออกไป ทำให้มันสามารถเชื่อมต่อฐานข้อมูลหรือเรียกใช้งาน API ภายนอกได้ สิ่งใดที่อยู่ภายในเส้นขอบเขตคือสิ่งที่ agent สามารถรับรู้และเข้าไปแก้ไขได้ ส่วนสิ่งใดที่อยู่นอกเส้นกั้นจะถือว่าไม่มีตัวตนอยู่จริงในมุมมองของมัน และระดับความพร้อมของ environment ที่เอื้อให้ agent ทำงานได้อย่างราบรื่นจะเรียกว่าค่า [AX](#ax) ของคลังโค้ดชิ้นนั้น

_สิ่งที่ควรเลี่ยง:_ การใช้คำว่า "environment" เพื่อระบุถึงตัวซอฟต์แวร์รันไทม์หรือตัวโครงระบบ harness เอง เพราะ harness คือเปลือกนอกที่ห่อหุ้มระบบไว้ ส่วน environment คือพื้นที่โต๊ะทำงานจริง ๆ

_ตัวอย่างการใช้งาน:_

"ตัว agent มันมองไม่เห็นโครงสร้างข้อมูล (schema) ของฐานข้อมูลฝั่ง staging เลยครับ"

"ผูกมันเข้ากับ environment สิครับ โดยเพิ่มเครื่องมือ `psql` ที่ตั้งค่าสิทธิ์ให้เปิดอ่านได้อย่างเดียวบน staging เข้าไปในโครงระบบ harness ตอนนี้ตัว harness ทำงานได้ปกติอยู่แล้ว แค่มันไม่มีเครื่องมือให้ออกไปปฏิบัติการกับโลกภายนอกเฉย ๆ ครับ"

### Filesystem

#### English

A tree of files and directories the [agent](#agent) reads from, writes to, and executes within — the default kind of [environment](#environment) for a coding agent. [AGENTS.md](#agentsmd), [skills](#skill), source code, build scripts, and [tool](#tool) configs all live in a filesystem. When a [harness](#harness) "starts in your project," it's pointing the agent at a filesystem.

The agent touches it only through [tool calls](#tool-call) — reading a file, writing one, running a shell command. Nothing on disk is in the [context window](#context-window) until a tool call loads it, which is what lets the agent work in a repository far larger than the window: the filesystem holds everything, the context holds only what the current task has read. Some harnesses do load the current directory's filenames into the context window by default — not the contents, just the tree — which act as [context pointers](#context-pointer): the agent sees what exists and reads the files it needs.

And it's shared with you. The files the agent edits are the same ones you open in your editor and diff in git — the filesystem is the common workspace where you review what the agent did.

_Usage:_

"Why isn't it picking up my AGENTS.md?"

"It's running against a different filesystem — the [sandbox](#sandbox) mounted the parent dir, not the project root. Repoint the harness."

#### ไทย

โครงสร้างสถาปัตยกรรมแบบต้นไม้ของไฟล์และไดเรกทอรีต่าง ๆ ที่ [agent](#agent) สามารถเปิดอ่าน เขียนบันทึกข้อมูล และสั่งรันระบบปฏิบัติการภายในพื้นที่นั้น ซึ่งจัดเป็นรูปแบบของ [environment](#environment) มาตรฐานหลักสำหรับ agent สายงานเขียนโค้ด ข้อมูลทุกประการตั้งแต่ไฟล์ข้อบังคับโปรเจกต์ ([AGENTS.md](#agentsmd)) ทักษะแบบแพ็กเกจ ([skills](#skill)) ซอร์สโค้ดหลัก สคริปต์สั่งบิลด์ระบบ รวมถึงไฟล์ตั้งค่าเครื่องมือ ([tool](#tool)) ต่าง ๆ ล้วนอาศัยอยู่ภายในระบบ filesystem นี้ เวลาที่ตัวระบบควบคุม ([harness](#harness)) ได้รับคำสั่งว่า "ให้เริ่มต้นทำงานภายในโปรเจกต์ของคุณ" ในแง่เทคนิคคือการสั่งให้ agent หันหน้าไปหาพิกัดพื้นที่ของ filesystem ชิ้นนั้นนั่นเอง

agent จะสามารถแตะต้องหรือรับรู้ข้อมูลบน filesystem ได้ผ่านช่องทางการเรียกใช้เครื่องมือ ([tool calls](#tool-call)) เท่านั้น เช่น สั่งเปิดอ่านไฟล์ สั่งเขียนข้อมูลลงไป หรือสั่งรันคำสั่งเชลล์ (shell command) ข้อมูลใด ๆ บนฮาร์ดดิสก์จะไม่มีวันลอยเข้าไปอยู่ในหน้าต่างบริบท ([context window](#context-window)) ได้เลย จนกว่าจะมี tool call วิ่งไปโหลดเนื้อหาชิ้นนั้นเข้ามา ซึ่งกลไกนี้เองที่ช่วยเปิดโอกาสให้ agent สามารถปฏิบัติงานภายในคลังโปรเจกต์ (repository) ที่มีขนาดใหญ่กว่าพื้นที่หน้าต่างบริบทหลายเท่าตัวได้ เพราะ filesystem จะทำหน้าที่แบกรับและจัดเก็บข้อมูลทั้งหมดเอาไว้ ส่วนในหน้าต่างบริบทจะดึงเข้ามาเฉพาะเนื้อหาที่ภารกิจตรงหน้าเพิ่งเปิดอ่านเท่านั้น อย่างไรก็ตาม ระบบ harness บางตัวนิยมใช้วิธีโหลดรายชื่อไฟล์ทั้งหมดในไดเรกทอรีปัจจุบันเข้าไปกองไว้ใน context window ตั้งแต่เริ่มต้น (โหลดเฉพาะรายชื่อ ไม่ใช่เนื้อหาข้างใน) เพื่อทำหน้าที่เป็นตัวชี้พิกัดบริบท ([context pointers](#context-pointer)) คอยบอกให้ agent มองเห็นภาพรวมว่ามีไฟล์อะไรอยู่ตรงไหนบ้าง แล้วมันจะเลือกสั่งเปิดอ่านเนื้อหาเฉพาะไฟล์ที่มันต้องการใช้งานจริง ๆ

และ filesystem ชิ้นนี้ยังเป็นพื้นที่ทำงานร่วมกันระหว่างตัวคุณกับมัน ไฟล์ข้อมูลต่าง ๆ ที่ agent ลงมือปรับแต่งแก้ไข ก็คือไฟล์ตัวเดียวกันกับที่คุณเปิดดูบนหน้าจอโปรแกรมแก้ไขโค้ดของคุณ และมองเห็นร่องรอยความเปลี่ยนแปลงผ่านคำสั่ง diff ในระบบ git ตัว filesystem จึงทำหน้าที่เป็นพื้นที่โต๊ะทำงานกลาง (common workspace) ที่คุณและมันใช้ร่วมกันเพื่อตรวจทานผลงานที่ agent ได้ทำลงไป

_ตัวอย่างการใช้งาน:_

"ทำไมมันถึงไม่ยอมดึงกฎในไฟล์ AGENTS.md ของผมไปใช้เลยล่ะครับ"

"มันกำลังรันงานอยู่บน filesystem คนละตัวกันครับ เพราะตัวพื้นที่ปิด ([sandbox](#sandbox)) ดันไปเมานต์โฟลเดอร์ตัวแม่ขึ้นมา ไม่ใช่โฟลเดอร์รากของโปรเจกต์ ให้รีบปรับจุดชี้พิกัดของระบบ harness ใหม่ให้ตรงจุดครับ"

### Tool

#### English

A function the [harness](#harness) exposes for the [agent](#agent) to call — Read, Write, Bash, Search. Tools are how an agent perceives and acts on the [environment](#environment): it can't see the environment except through [tool results](#tool-result), and can't change it except through [tool calls](#tool-call). Each tool call costs an extra [model provider request](#model-provider-request), since the result has to go back to the model before it can decide what to do next.

Tools most coding agents ship with:

| Tool   | What it does                                                 |
| ------ | ------------------------------------------------------------ |
| Read   | Returns a file's contents as a tool result                   |
| Write  | Creates or edits a file in the [filesystem](#filesystem) |
| Bash   | Runs a shell command and returns its output                  |
| Search | Finds files or text matching a pattern across the codebase   |

A tool is defined by three things: a name, a description of what it does, and a schema for its parameters. The harness sends these definitions to the [model](#model) with every request, and the model chooses a tool the same way it produces everything else — by writing [tokens](#token), in this case a structured call with arguments. The model never executes anything itself; the harness reads the call, runs the function, and sends back the result.

The tool list sets what the agent can do. A capable model with a narrow tool set is a narrow agent: it will route everything through whatever it has, which is why agents lean so heavily on Bash — a shell is one tool that reaches most of the system. To give an agent a capability cleanly, add a tool for it; [MCP](#mcp) is the standard for plugging in tools from outside the harness.

Tool definitions occupy [context](#context) on every request, so a large tool set has a standing cost before any tool is called — and many similarly-described tools make the model worse at picking the right one.

_Usage:_

"Can the agent query staging directly?"

"Add a `psql` tool to the harness, scoped read-only on staging. Without a tool for it, the agent's blind to anything outside the filesystem."

#### ไทย

ฟังก์ชันซอฟต์แวร์ที่ระบบควบคุม ([harness](#harness)) เปิดสิทธิ์ทิ้งไว้ให้ [agent](#agent) สามารถส่งคำสั่งมาเรียกใช้งานได้ เช่น ฟังก์ชัน Read (อ่านไฟล์), Write (เขียนไฟล์), Bash (รันคำสั่งเชลล์) หรือ Search (ค้นหาข้อความ) เครื่องมือหรือ tools เหล่านี้คือช่องทางเดียวที่ agent ใช้ในการรับรู้และลงมือสร้างการเปลี่ยนแปลงกับสภาพแวดล้อมระบบ ([environment](#environment)) มันไม่สามารถมองเห็นโลกภายนอกได้เลยหากไม่มีข้อมูลจากผลลัพธ์ของเครื่องมือ ([tool results](#tool-result)) ส่งมาให้ และไม่สามารถขยับเปลี่ยนสิ่งใดในเครื่องได้เลยหากไม่ส่งคำสั่งเรียกใช้เครื่องมือ ([tool calls](#tool-call)) ออกไป การทำงานของเครื่องมือในทุก ๆ หนึ่งครั้ง จะมีต้นทุนที่ต้องจ่ายเพิ่มเป็นจำนวนหนึ่งหน่วยคำขอผู้ให้บริการ ([model provider request](#model-provider-request)) เสมอ เพราะผลลัพธ์ที่เครื่องมือรันได้ จะต้องถูกวิ่งย้อนกลับไปป้อนให้ตัวโมเดลอ่านทำความเข้าใจก่อน มันจึงจะสามารถประเมินและตัดสินใจได้ว่าจะต้องทำสิ่งใดต่อไป

ชุดเครื่องมือพื้นฐานที่ agent สายงานเขียนโค้ดส่วนใหญ่มักจะติดตั้งมาให้ใช้งาน:

| ชื่อเครื่องมือ (Tool) | บทบาทหน้าที่และผลลัพธ์                                                                |
| --------------------- | ------------------------------------------------------------------------------------- |
| Read                  | ทำหน้าที่ส่งคืนเนื้อหาภายในไฟล์ข้อมูลกลับไปในฐานะ tool result                         |
| Write                 | ทำหน้าที่สร้างไฟล์ใหม่หรือเปิดแก้ไขไฟล์เดิมบนระบบไฟล์ ([filesystem](#filesystem)) |
| Bash                  | ทำหน้าที่รันคำสั่งเชลล์คอมมานด์หลังบ้าน แล้วส่งข้อความขาออกกลับคืนไป                  |
| Search                | ทำหน้าที่ค้นหาไฟล์หรือข้อความย่อส่วนที่ตรงตามแพทเทิร์นจากทั่วทั้งคลังโค้ด             |

โครงสร้างของ tool จะถูกนิยามขึ้นมาจากองค์ประกอบ 3 ส่วนหลัก ได้แก่ ชื่อของเครื่องมือ (name) ข้อความอธิบายบทบาทหน้าที่ (description) และโครงสร้างกำหนดรูปแบบพารามิเตอร์ (parameter schema) ตัว harness จะทำหน้าที่หอบเอาชุดนิยามของเครื่องมือเหล่านี้ส่งแนบไปให้ตัว [model](#model) อ่านพร้อมกับทุก ๆ request และตัวโมเดลจะทำการเลือกหยิบเครื่องมือขึ้นมาใช้งานด้วยกระบวนการเดียวกันกับที่มันใช้สร้างข้อความทั่วไป นั่นคือการใช้ตรรกะคาดเดาโทเค็นถัดไป ([tokens](#token)) พ่นข้อความที่มีโครงสร้างคำสั่งและพารามิเตอร์ (structured call) ออกมา ตัวโมเดลเปล่า ๆ ไม่เคยมีสิทธิ์ลงมือรันโค้ดใด ๆ ด้วยตัวเอง ตัวซอฟต์แวร์ harness ต่างหากที่จะคอยทำหน้าที่อ่านคำสั่งข้อความนั้น นำไปรันฟังก์ชันบนเครื่องจริง แล้วจึงแพ็กผลลัพธ์ส่งคืนกลับไปให้มัน

รายชื่อและจำนวนของเครื่องมือที่มีอยู่จะเป็นตัวกำหนดขอบเขตความสามารถของ agent ตัวโมเดลระดับแนวหน้าที่ฉลาดมาก ๆ หากถูกจับมาใส่ในโครงระบบที่มีเครื่องมือจำกัดอย่างยิ่ง ก็จะกลายสภาพเป็น agent ที่ทำงานได้ในวงแคบ ๆ และมันจะพยายามฝืนยัดยียดทุกภารกิจให้วิ่งผ่านเครื่องมือเท่าที่มีอยู่ ซึ่งเป็นสาเหตุที่ทำให้ agent มักจะชอบหันมาพึ่งพาคำสั่ง Bash อยู่บ่อยครั้ง เพราะคำสั่งเชลล์เพียงตัวเดียวก็สามารถเอื้อมมือไปแตะต้องระบบส่วนใหญ่ในเครื่องได้เกือบทั้งหมดแล้ว หากคุณต้องการเพิ่มขีดความสามารถใหม่ ๆ ให้มันอย่างสะอาดและปลอดภัย วิธีที่ดีที่สุดคือการเขียนสร้าง tool เจาะจงสำหรับงานนั้นเพิ่มเข้าไป โดยโปรโตคอล [MCP](#mcp) คือมาตรฐานสากลที่ใช้ในการเสียบต่อปลั๊กเครื่องมือจากภายนอกเข้าสู่ระบบ harness

ชุดนิยามของเครื่องมือเหล่านี้จะเข้าไปกินพื้นที่งบประมาณความรู้ ([context](#context)) ในทุก ๆ request ดังนั้น การเปิดใช้ชุดเครื่องมือขนาดใหญ่เกินไปจะสร้างต้นทุนยืนพื้น (standing cost) ที่คุณต้องควักเงินจ่ายตั้งแต่ตอนที่ยังไม่มีการเรียกใช้งานเครื่องมือใด ๆ เลยเสียด้วยซ้ำ และการติดตั้งเครื่องมือที่มีคำอธิบายพฤติกรรมคล้ายคลึงกันอยู่เป็นจำนวนมาก จะส่งผลให้โมเดลเริ่มเกิดอาการสับสนและเลือกหยิบเครื่องมือมาใช้งานผิด ๆ ถูก ๆ

_ตัวอย่างการใช้งาน:_

"เราสามารถสั่งให้ agent วิ่งไปคิวรีข้อมูลจากฐานข้อมูลฝั่ง staging โดยตรงเลยได้ไหมครับ"

"เขียนสร้างเครื่องมือ `psql` ที่จำกัดสิทธิ์เปิดอ่านอย่างเดียวบน staging เพิ่มเข้าไปในระบบ harness สิครับ หากไม่มีตัว tool ชิ้นนี้รองรับ ตัว agent จะตกอยู่ในสภาวะตาบอดสนิท ไม่สามารถมองเห็นหรือแตะต้องสิ่งใดที่อยู่นอกเหนือระบบไฟล์ปกติได้เลยครับ"

### Tool call

#### English

The [model](#model)'s output naming a [tool](#tool) and its arguments — just structured text. It doesn't do anything on its own; the [harness](#harness) has to read it and execute. Produced by the model in one [model provider request](#model-provider-request).

The lifecycle of a tool call:

| Step | Who     | What happens                                                                            |
| ---- | ------- | --------------------------------------------------------------------------------------- |
| 1    | Model   | Learns which tools exist from descriptions in the [system prompt](#system-prompt) |
| 2    | Model   | Emits a call — tool name plus arguments, usually JSON — and stops                       |
| 3    | Harness | Parses the call and checks it against the [permission mode](#permission-mode)     |
| 4    | Harness | Executes it if allowed                                                                  |
| 5    | Harness | Sends the outcome back as a [tool result](#tool-result) in the next request       |

One [turn](#turn) of [agent](#agent) work is usually many of these round trips chained together.

Because the call is generated by [next-token prediction](#next-token-prediction) like everything else, it can be wrong the way any model output can be wrong: a path that doesn't exist, a flag the command doesn't have, arguments that are plausible rather than correct. The harness executes what was written, not what was meant — a mistyped path doesn't error gracefully, it edits the wrong file.

_Usage:_

"It said it ran the tests but the file timestamps haven't changed."

"Look at the transcript — did it actually emit a tool call, or just describe running them? The model produces the call, but if the harness didn't execute it, nothing happened."

#### ไทย

ข้อความขาออกที่ตัว [model](#model) ผลิตส่งมอบออกมาเพื่อระบุชื่อของ [tool](#tool) ที่มันต้องการใช้ พร้อมทั้งระบุค่าพารามิเตอร์ที่ต้องการส่งไปให้คำนวณ ในแง่เทคนิคข้อมูลชิ้นนี้เป็นเพียงแค่ข้อความที่มีโครงสร้างชัดเจน (structured text) เท่านั้น ตัวของมันเองไม่สามารถสั่งรันหรือทำสิ่งใดบนเครื่องได้เลย ระบบควบคุม ([harness](#harness)) จะต้องทำหน้าที่คอยเปิดอ่านข้อความชิ้นนี้แล้วนำไปรันคำสั่งจริงบนเครื่อง ข้อมูลชิ้นนี้จะถูกผลิตออกมาจากโมเดลต่อการส่งคำขอหนึ่งครั้ง ([model provider request](#model-provider-request))

วงจรชีวิตของการเกิด tool call หนึ่งรอบ:

| ขั้นตอนที่ | บทบาทผู้ดำเนินงาน | รายละเอียดและกลไกที่เกิดขึ้นในระบบ                                                                                              |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1          | Model             | เรียนรู้ว่ามีเครื่องมือใดให้เลือกใช้บ้างจากคำอธิบายที่แนบไปในระบบคำสั่งหลัก ([system prompt](#system-prompt))             |
| 2          | Model             | พ่นข้อความคำสั่งระบุชื่อเครื่องมือพร้อมพารามิเตอร์อินพุต (มักอยู่ในทรงของ JSON) ออกมา แล้วหยุดรอ                                |
| 3          | Harness           | ทำหน้าที่แกะอ่านข้อความคำสั่งนั้น แล้วนำไปตรวจสอบเข้ากับโหมดควบคุมสิทธิ์ ([permission mode](#permission-mode))            |
| 4          | Harness           | ดำเนินการรันคำสั่งคอมพิวเตอร์จริงบนเครื่องหากตรวจสอบแล้วว่าได้รับอนุญาต                                                         |
| 5          | Harness           | แพ็กผลลัพธ์ที่ได้จากการรันส่งคืนกลับไปในฐานะผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) พร้อมคำขอ request รอบถัดไป |

ในการทำงานจริงหนึ่งรอบการสนทนา ([turn](#turn)) ของตัว [agent](#agent) มักจะประกอบไปด้วยวงจรการรับส่งข้อมูลไปกลับในลักษณะนี้ร้อยเรียงต่อกันเป็นสายโซ่ยาวหลายรอบ

เนื่องจากข้อความคำสั่งนี้ถูกผลิตขึ้นมาจากกระบวนการคาดเดาโทเค็นถัดไป ([next-token prediction](#next-token-prediction)) เช่นเดียวกับข้อความส่วนอื่น ๆ มันจึงสามารถแฝงข้อผิดพลาดขั้นรุนแรงขึ้นมาได้ไม่ต่างจากข้อความทั่วไป เช่น ระบุพิกัดพาธไฟล์ข้อมูลที่ไม่มีอยู่จริงบนเครื่อง สั่งเปิดใช้งานแฟล็กคำสั่งที่โปรแกรมคอมพิวเตอร์นั้นไม่ได้รองรับ หรือส่งอาร์กิวเมนต์หน้าตาละม้ายคล้ายคลึงว่าจะถูกต้องแต่ความจริงแล้วผิด ตัวซอฟต์แวร์ harness จะทำหน้าที่ก้มหน้าก้มตารันตามข้อความอักษรที่เขียนส่งมาจริง ๆ ไม่ใช่รันตามความตั้งใจในหัวของโมเดล ดังนั้น พาธไฟล์ที่พิมพ์ตัวอักษรผิดไปเพียงตัวเดียวจะไม่ได้รับการแจ้งเตือนข้อผิดพลาดอย่างอ่อนโยน แต่มันจะวิ่งไปเปิดแก้ไขไฟล์ผิดตำแหน่งให้คุณทันที

_ตัวอย่างการใช้งาน:_

"ในประวัติมันบอกว่ารันคำสั่งทดสอบระบบเสร็จสิ้นแล้ว แต่ทำไมตัวเลขเวลาอัปเดตไฟล์ (timestamp) บนดิสก์ถึงไม่มีการขยับเปลี่ยนเลยล่ะครับ"

"ลองเปิดเข้าไปดูในบันทึกข้อความดิบ (transcript) สิครับว่ามันพ่นข้อความคำสั่งที่เป็น tool call ออกมาจริง ๆ หรือมันแค่พิมพ์ข้อความโม้บรรยายเฉย ๆ ว่ากำลังจะรัน ตัวโมเดลมีหน้าที่แค่พิมพ์คำสั่งส่งมา แต่ถ้าฝั่งซอฟต์แวร์ harness ไม่ได้จับข้อความนั้นไปรันจริง บนเครื่องก็ไม่มีอะไรเกิดขึ้นครับ"

### Tool result

#### English

What the [harness](#harness) sends back after executing a [tool call](#tool-call) — the file contents, the command output, the error. The [agent](#agent)'s only view of the [environment](#environment). Travels back to the [model](#model) in the _next_ [model provider request](#model-provider-request), where the model decides what to do with it. Tool call and tool result are two ends of the same exchange, both inside one [turn](#turn).

The lifecycle of a tool result:

| Step | Who     | What happens                                                               |
| ---- | ------- | -------------------------------------------------------------------------- |
| 1    | Harness | Executes the tool call — runs the command, reads the file                  |
| 2    | Harness | Captures the outcome: output, contents, or error                           |
| 3    | Harness | Appends it to the [context](#context) as a message                     |
| 4    | Harness | Sends the whole context to the provider in the next model provider request |
| 5    | Model   | Reads the result and decides: another tool call, or a final answer         |

The result stays in the context for the rest of the [session](#session). Tool results are usually the bulk of a coding session's context: every file read, every test run, every search lands in full and keeps occupying [tokens](#token) long after it stopped being useful. A few large results — a verbose test log, a generated file read whole — can push a session toward the edge of the [context window](#context-window) faster than the conversation itself does.

Because the result is all the model sees, the model has no way to check the environment behind it. If the output was truncated, the command silently failed, or the harness returned an error instead of the contents, the model reasons from what it was given. When the agent's picture of your system seems wrong, the tool results are where to look: somewhere in the transcript is a result that says something different from what you know to be true.

_Usage:_

"It's reasoning about the file like it's empty."

"The tool result came back as a permission denial, not the contents. The model only saw the error string — it has no other way to see the file."

#### ไทย

ข้อมูลที่ระบบควบคุม ([harness](#harness)) จัดส่งคืนกลับไปให้ตัว [model](#model) หลังจากดำเนินงานตามข้อความคำสั่ง ([tool call](#tool-call)) เสร็จสิ้นเรียบร้อยแล้ว ซึ่งอาจเป็นเนื้อหาภายในไฟล์ข้อมูล ข้อความผลลัพธ์จากการรันคำสั่งคอมพิวเตอร์ หรือข้อความรายงานความล้มเหลว ข้อมูลชิ้นนี้คือช่องหน้าต่างบานเดียวที่ [agent](#agent) ใช้ในการมองเห็นสถานะความเป็นไปของสภาพแวดล้อมระบบ ([environment](#environment)) โดยข้อมูลนี้จะถูกหอบเดินทางร่วมไปกับคำขอผู้ให้บริการในรอบ*ถัดไป* ([model provider request](#model-provider-request)) เพื่อให้ตัวโมเดลเปิดอ่านทำความเข้าใจและตัดสินใจว่าจะต้องทำสิ่งใดต่อ ตัวคำสั่ง tool call และตัวผลลัพธ์ tool result ถือเป็นข้อมูลสองฝั่งของกระบวนการแลกเปลี่ยนชิ้นเดียวกัน ซึ่งทำงานอยู่ภายใต้ขอบเขตรอบการสนทนา ([turn](#turn)) เดียวกัน

วงจรชีวิตของการเกิด tool result หนึ่งรอบ:

| ขั้นตอนที่ | บทบาทผู้ดำเนินงาน | รายละเอียดและกลไกที่เกิดขึ้นในระบบ                                                                                   |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1          | Harness           | ดำเนินการรันตามคำสั่ง tool call เช่น สั่งเปิดรันคอมมานด์ หรือเปิดอ่านไฟล์ข้อมูลบนดิสก์                               |
| 2          | Harness           | ดักจับผลลัพธ์ปลายทางที่เกิดขึ้น ไม่ว่าจะเป็นข้อความขาออก เนื้อหาไฟล์ หรือรหัสข้อผิดพลาด (error)                      |
| 3          | Harness           | นำข้อความผลลัพธ์ชิ้นนั้นไปแนบต่อท้ายงบประมาณความรู้ ([context](#context)) ในฐานะข้อความชุดใหม่                   |
| 4          | Harness           | จัดส่งเนื้อหาข้อมูลบริบททั้งหมดไปให้ผู้ให้บริการในหน่วยคำขอ request รอบถัดไป                                         |
| 5          | Model             | เปิดอ่านข้อความผลลัพธ์นั้นแล้วประเมินว่า: จะต้องส่งคำสั่งเรียกใช้เครื่องมือตัวอื่นต่อ หรือจะให้คำตอบสุดท้ายแก่ผู้ใช้ |

ข้อมูลผลลัพธ์เหล่านี้จะยังคงฝังจมอยู่ภายในข้อความบริบทไปตลอดช่วงเวลาที่เหลือของ [session](#session) นั้น ข้อมูลฝั่ง tool results มักจะงอกเงยจนกลายเป็นเนื้อหาชิ้นส่วนหลักที่ยึดครองพื้นที่บริบทเกือบทั้งหมดในงานเขียนโค้ด ทุก ๆ ไฟล์ที่เคยเปิดอ่าน ทุก ๆ รอบคำสั่งทดสอบระบบที่เคยสั่งรัน หรือทุก ๆ ข้อความค้นหา จะถูกถมลงมาแบบตัวเต็มและคอยเบียดบังใช้หน่วยโทเค็น ([tokens](#token)) อยู่ตลอดเวลา แม้ว่าข้อมูลชิ้นนั้นจะหมดประโยชน์ต่องานไปนานแล้วก็ตาม ผลลัพธ์ขนาดใหญ่ยักษ์เพียงไม่กี่ชิ้น เช่น บันทึกประวัติการทดสอบระบบที่ยาวเกินไป (verbose test log) หรือการสั่งเปิดอ่านไฟล์ที่ถูกเจเนอเรตขึ้นมาแบบเต็มไฟล์ สามารถผลักดันให้เซสชันวิ่งหน้าตั้งไปชนเพดานขีดจำกัดของหน้าต่างบริบท ([context window](#context-window)) ได้รวดเร็วยิ่งกว่าข้อความคุยโต้ตอบกับคุณหลายเท่าตัว

เนื่องจากข้อความผลลัพธ์ชิ้นนี้คือสิ่งเดียวที่โมเดลมองเห็น ตัวโมเดลจึงไม่มีหนทางตรวจสอบสถานะที่แท้จริงของโลกภายนอกที่ซ่อนอยู่เบื้องหลังข้อความนั้นได้เลย หากข้อความขาออกถูกตัดทอนให้สั้นลง (truncated) คำสั่งคอมพิวเตอร์เกิดความล้มเหลวแบบเงียบ ๆ (silently failed) หรือตัว harness ส่งข้อความรายงานข้อผิดพลาดกลับไปให้แทนที่จะเป็นเนื้อหาไฟล์ ตัวโมเดลจะยังคงก้มหน้าก้มตาคิดวิเคราะห์ไปตามเนื้อผ้าข้อมูลเท่าที่ถูกป้อนให้สัมผัส เมื่อใดก็ตามที่คุณรู้สึกว่า agent กำลังมองภาพระบบในเครื่องผิดเพี้ยนไป จุดแรกที่ควรเข้าไปขุดคุ้ยตรวจสอบคือข้อมูลในฝั่ง tool results เพราะจะต้องมีผลลัพธ์บางชิ้นในประวัติบันทึกการคุย (transcript) ที่รายงานข้อมูลคลาดเคลื่อนไปจากความเป็นจริงที่คุณรับรู้

_ตัวอย่างการใช้งาน:_

"ตัว agent มันกำลังประมวลผลวิเคราะห์ไฟล์นี้ราวกับว่าเป็นไฟล์เปล่าที่ไม่มีข้อมูลอะไรอยู่ข้างในเลยครับ"

"ลองดูในบันทึกสิครับ ข้อมูลในฝั่ง tool result มันส่งข้อความกลับไปว่าเกิดปัญหาการถูกปฏิเสธสิทธิ์เข้าถึงระบบ (permission denial) ไม่ใช่เนื้อหาในไฟล์ ตัวโมเดลได้เห็นแค่ข้อความ error ประโยคนั้นประโยคเดียว มันเลยไม่มีช่องทางอื่นในการรับรู้เนื้อหาที่แท้จริงข้างในไฟล์ได้เลยครับ"

### MCP

#### English

**Model Context Protocol.** A protocol for plugging external tool servers into a [harness](#harness) — how an [agent](#agent) gets [tools](#tool) beyond what the harness ships with. The agent never "calls MCP"; it calls a tool, and the harness happens to have gotten that tool from an MCP server. Also exposes resources (read-only data) and prompts (reusable templates), but tool provision is the primary use.

The protocol solves an integration problem. Without a standard, every harness would need its own Linear integration, its own Slack integration, its own database integration — written and maintained separately for each. With MCP, the integration is written once as a server, and any MCP-compatible harness can use it. The harness connects to the server, the server advertises what tools it offers, and those tools become available to the agent alongside the built-in ones.

The cost is paid in [context](#context). Every tool a server advertises arrives as a definition — name, description, parameter schema — and the [model](#model) can only call tools it knows about. The naive approach loads every definition into the [context window](#context-window) up front: install a few generous servers and a [session](#session) starts with thousands of [tokens](#token) of tool schemas before you've typed anything, spending [attention budget](#attention-budget) on tools the task will never use.

Many harnesses now mitigate this with tool search: instead of the full definitions, the context holds a [context pointer](#context-pointer) to the available tools — the agent searches for a tool by name or purpose and loads its definition only when it needs it. If your harness doesn't do this, the up-front cost still applies, and it's worth enabling only the servers a project actually needs.

_Usage:_

"The agent needs to read tickets from Linear."

"Configure the harness to use the Linear MCP server — it exposes the Linear API as tools the agent can call. Saves you writing custom tool wrappers."

#### ไทย

**Model Context Protocol** โปรโตคอลสากลสำหรับใช้ในการเสียบต่อปลั๊กเชื่อมต่อระบบเซิร์ฟเวอร์เครื่องมือจากภายนอกเข้าสู่ตัวระบบควบคุม ([harness](#harness)) ซึ่งเป็นกลไกหลักที่ช่วยให้ [agent](#agent) สามารถมี [tools](#tool) ใช้งานเพิ่มเติม นอกเหนือไปจากชุดเครื่องมือมาตรฐานที่ติดมากับตัวซอฟต์แวร์ตั้งแต่แรก ตัว agent ไม่เคยส่งคำสั่งเรียกหา "โปรโตคอล MCP" โดยตรง แต่มันจะส่งคำสั่งเรียกใช้งานเครื่องมือตามปกติ และตัว harness จะทำหน้าที่วิ่งไปดึงเครื่องมือชิ้นนั้นมาจากระบบเซิร์ฟเวอร์ MCP อีกทอดหนึ่ง นอกจากนี้โปรโตคอลดังกล่ายังมีฟังก์ชันเปิดสิทธิ์เข้าถึงทรัพยากรข้อมูลแบบอ่านได้อย่างเดียว (resources) และระบบเทมเพลตคำสั่งสำเร็จรูป (prompts) แต่หน้าที่หลักที่นิยมใช้งานมากที่สุดคือการจัดหาเครื่องมือให้ระบบ

โปรโตคอลชิ้นนี้ถูกคิดค้นขึ้นมาเพื่อแก้ไขปัญหาความยุ่งยากในการเชื่อมต่อระบบซอฟต์แวร์ (integration problem) หากไม่มีมาตรฐานกลางชุดนี้ ผู้พัฒนาซอฟต์แวร์ harness แต่ละค่ายจำเป็นต้องลงแรงเขียนโค้ดเชื่อมต่อระบบของ Linear แยกเอง เขียนโค้ดต่อ Slack แยกเอง หรือเขียนระบบต่อฐานข้อมูลแยกเองสำหรับซอฟต์แวร์ของตน แต่เมื่อมีโปรโตคอล MCP เข้ามาช่วย โค้ดเชื่อมต่อระบบจะถูกเขียนขึ้นเพียงครั้งเดียวในรูปแบบของระบบเซิร์ฟเวอร์ MCP และซอฟต์แวร์ harness ค่ายใดก็ได้ในโลกที่รองรับมาตรฐาน MCP จะสามารถเปิดใจเข้ามาร่วมดึงเครื่องมือชิ้นนั้นไปใช้งานได้ทันที ตัว harness จะวิ่งไปต่อสายเข้ากับเซิร์ฟเวอร์ ฝั่งเซิร์ฟเวอร์จะทำการป่าวประกาศรายชื่อเครื่องมือที่มีให้เลือกใช้งาน และเครื่องมือเหล่านั้นจะลอยเข้าไปอยู่ในคลังให้ agent เลือกหยิบมาใช้งานเคียงคู่กับเครื่องมือดั้งเดิมในเครื่องได้ทันที

แต่สิ่งที่คุณต้องจ่ายเป็นค่าแลกเปลี่ยนคือพื้นที่งบประมาณความรู้ ([context](#context)) ทุก ๆ เครื่องมือที่เซิร์ฟเวอร์ป่าวประกาศบอกรายชื่อออกมาจะเดินทางเข้ามาในรูปแบบของชุดนิยามความสามารถ (ชื่อ, คำอธิบาย, โครงสร้างพารามิเตอร์) และตัว [model](#model) จะสามารถเลือกสั่งรันเครื่องมือได้เฉพาะชิ้นที่มันรู้จักโครงสร้างนิยามแล้วเท่านั้น การออกแบบระบบที่ตื้นเขินเกินไปจะใช้วิธีโหลดนิยามของทุกเครื่องมือยัดใส่เข้าสู่หน้าต่างบริบท ([context window](#context-window)) ตั้งแต่ตอนเริ่มต้นระบบ หากคุณไปเผลอติดตั้งเซิร์ฟเวอร์ภายนอกที่ใจดีแจกเครื่องมือเยอะ ๆ ทันทีที่เปิดใช้งาน [session](#session) พื้นที่หน้าต่างบริบทจะถูกผลาญทิ้งไปทันทีหลายพันโทเค็น ([tokens](#token)) ให้กับโครงสร้างนิยามของเครื่องมือเหล่านั้น ทั้งที่คุณยังไม่ได้พิมพ์ตัวอักษรคำสั่งแรกเข้าไปเลยด้วยซ้ำ ส่งผลให้สูญเสียพื้นที่งบประมาณ [ความสนใจของโมเดล](#attention-budget) ไปกับชุดเครื่องมือที่ภารกิจชิ้นนั้นอาจจะไม่มีวันเรียกใช้งานเลยตลอดทั้งเซสชัน

ซอฟต์แวร์ harness ยุคปัจจุบันหลายตัวเริ่มมีการบรรเทาปัญหานี้ด้วยการเพิ่มระบบค้นหาเครื่องมือ (tool search) เข้ามาช่วย แทนที่จะขนนิยามตัวเต็มของทุกเครื่องมือเข้าไปกองไว้ ระบบจะส่งเข้าไปเพียงแค่ตัวชี้พิกัดบริบท ([context pointer](#context-pointer)) คอยบอกใบ้ให้รู้ว่ามีเครื่องมือประเภทไหนให้เลือกใช้บ้าง และเมื่อ agent ตระหนักรู้ว่าภารกิจตรงหน้าจำเป็นต้องใช้เครื่องมือชิ้นไหน มันจะส่งข้อความมาค้นหาและโหลดเฉพาะข้อความนิยามของเครื่องมือชิ้นนั้นเข้ามาในพื้นที่หน้าต่างบริบทเฉพาะยามที่ต้องการใช้งานจริงเท่านั้น หากซอฟต์แวร์ harness ที่คุณใช้งานอยู่ยังไม่มีระบบจัดการเช่นนี้ ต้นทุนยืนพื้นส่วนหัวก็ยังคงเกิดขึ้นอยู่ และแนวทางปฏิบัติที่ดีที่สุดคือการเลือกเปิดใช้งานเฉพาะระบบเซิร์ฟเวอร์ MCP ที่โปรเจกต์นั้นจำเป็นต้องใช้จริง ๆ เท่านั้น

_ตัวอย่างการใช้งาน:_

"ตัว agent มันจำเป็นต้องวิ่งไปเปิดอ่านตั๋วส่งงานจากระบบ Linear ครับ"

"ตั้งค่าระบบ harness ให้สลับไปเชื่อมต่อเข้ากับ Linear MCP server สิครับ ตัวเซิร์ฟเวอร์จะทำหน้าที่เปลี่ยนระบบ Linear API ให้กลายเป็นชุดเครื่องมือสำเร็จรูปที่ agent สามารถส่งคำสั่งเรียกใช้งานได้ทันที ช่วยประหยัดเวลาไม่ต้องมานั่งเขียนโค้ดครอบฟังก์ชันครอบเครื่องมือเองให้เหนื่อยครับ"

### Permission request

#### English

What the [harness](#harness) shows the user before executing a [tool call](#tool-call) that isn't pre-approved. The [model](#model) produces a tool call; instead of running it immediately, the harness pauses and asks. Approve and it runs; deny and the harness reports the denial back to the model as a [tool result](#tool-result). The mechanism by which a harness puts a human in the [loop](#human-in-the-loop) for risky or sensitive actions.

The lifecycle of a permission request:

| Step | Who     | What happens                                                                            |
| ---- | ------- | --------------------------------------------------------------------------------------- |
| 1    | Model   | Produces a tool call                                                                    |
| 2    | Harness | Checks it against the [permission mode](#permission-mode) and any saved approvals |
| 3    | Harness | Pre-approved: executes immediately. Otherwise: pauses and shows the request             |
| 4    | User    | Approves once, approves for the rest of the [session](#session), or denies          |
| 5    | Harness | Executes the call, or sends the denial back as a tool result                            |

Denying a request steers the agent. The model reads the denial like any other tool result and reacts to it — it tries a different approach, or asks what you'd prefer. Most harnesses let you attach a message to the denial, which turns the request into a steering point: "not like that, use the migration script instead" lands exactly when the model is deciding what to do next.

The cost is that every request is a synchronous wait on you. The [agent](#agent) sits blocked until you answer, which is fine while you're watching and a problem when you're not — an agent that triggers requests constantly can't be left to work [AFK](#afk). The permission mode is the dial: which calls run freely, which ask first, ideally with a [sandbox](#sandbox) making it safe to widen the free set.

_Usage:_

"It's been blocked on a permission request for ten minutes — I was in a meeting."

"That's the cost of human-in-the-loop. Pre-approve the safe [tools](#tool) so the request only fires on the actually-risky calls."

#### ไทย

หน้าต่างข้อความเตือนยืนยันสิทธิ์ที่ระบบควบคุม ([harness](#harness)) จะนำมาแสดงผลบนหน้าจอเพื่อรอให้ผู้ใช้งานกดปุมอนุมัติ ก่อนที่จะยอมเริ่มรันข้อความคำสั่ง ([tool call](#tool-call)) ใด ๆ ที่ไม่ได้รับการอนุมัติล่วงหน้า ตัวอย่างกลไกคือ เมื่อตัว [model](#model) ผลิตข้อความสั่งรันเครื่องมือส่งมา แทนที่ระบบจะวิ่งไปรันคำสั่งคอมพิวเตอร์บนเครื่องทันที ตัวซอฟต์แวร์ harness จะทำหน้าที่สั่งกดปุ่มสต็อปหยุดชั่วคราวแล้วเด้งข้อความถามคุณก่อน หากคุณกดปุ่มยอมรับ (approve) ระบบจะเริ่มดำเนินการรันให้ทันที แต่ถ้าคุณกดปฏิเสธ (deny) ตัว harness จะทำหน้าที่แพ็กข้อความรายงานการถูกปฏิเสธสิทธิ์ส่งคืนกลับไปให้โมเดลอ่านในฐานะผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) นี่คือกลไกหลักชิ้นสำคัญที่ซอฟต์แวร์ harness นำมาใช้เพื่อดึงมนุษย์เข้ามาร่วมคุมพวงมาลัยพิกัดทิศทาง ([Human-in-the-loop](#human-in-the-loop)) ยามที่ระบบกำลังจะลงมือทำงานที่มีความเสี่ยงสูงหรือเป็นเรื่องละเอียดอ่อน

วงจรชีวิตของการเกิด permission request หนึ่งรอบ:

| ขั้นตอนที่ | บทบาทผู้ดำเนินงาน | รายละเอียดและกลไกที่เกิดขึ้นในระบบ                                                                                  |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1          | Model             | ผลิตข้อความคำสั่ง tool call ส่งมา                                                                                   |
| 2          | Harness           | นำคำสั่งนั้นไปตรวจสอบเข้ากับโหมดควบคุมสิทธิ์ ([permission mode](#permission-mode)) และประวัติการกดอนุมัติเก่า |
| 3          | Harness           | หากพบว่าตรงตามเงื่อนไขอนุมัติล่วงหน้าจะรันให้ทันที หากไม่ตรงจะสั่งหยุดระบบและเด้งถามคุณบนหน้าจอ                     |
| 4          | User              | กดอนุมัติเฉพาะรอบนี้, กดอนุมัติถาวรไปตลอดทั้งเซสชัน ([session](#session)), หรือกดปุ่มปฏิเสธสิทธิ์               |
| 5          | Harness           | ดำเนินการรันฟังก์ชันเครื่องมือจริงตามคำสั่ง หรือส่งข้อความรายงานการปฏิเสธสิทธิ์ย้อนกลับไปให้โมเดลอ่าน               |

การกดปุ่มปฏิเสธคำขอ permission request ถือเป็นช่องทางชั้นยอดในการคุมพวงมาลัยทิศทาง (steering) ให้แก่ตัว [agent](#agent) โมเดลภาษาจะอ่านข้อความการปฏิเสธสิทธิ์นั้นเหมือนกับผลลัพธ์จากเครื่องมือทั่วไปและแสดงพฤติกรรมตอบสนองต่อข้อความนั้นทันที เช่น มันจะลองสลับไปใช้แนวทางอื่นในการแก้ปัญหา หรือพิมพ์ข้อความถามความต้องการที่แท้จริงจากคุณ ซอฟต์แวร์ harness ส่วนใหญ่อนุญาตให้คุณสามารถพิมพ์ข้อความอธิบายแนบไปกับการกดปุ่มปฏิเสธได้ ซึ่งจะเปลี่ยนหน้าต่างคำขอนี้ให้กลายเป็นจุดควบคุมทิศทางที่ทรงพลังอย่างมาก คำสั่งจำพวก "ห้ามทำแบบนั้น ให้สลับไปใช้สคริปต์สำหรับการย้ายฐานข้อมูลแทน" จะเดินทางไปถึงหน้าต่างรับรู้ในจังหวะเวลาที่โมเดลกำลังประเมินและตัดสินใจว่าจะต้องทำสิ่งใดในขั้นตอนถัดไปพอดี

แต่ต้นทุนที่คุณต้องจ่ายเป็นค่าแลกเปลี่ยนคือ ทุก ๆ คำขอที่เด้งขึ้นมาจะทำให้ระบบหยุดชะงักและติดอยู่ในสถานะนั่งรอคุณประมวลผล (synchronous wait) ตัว agent จะถูกบล็อกค้างเติ่งอยู่ตรงนั้นจนกว่าคุณจะหันมากดปุ่มตอบ พฤติกรรมเช่นนี้ไม่ใช่ปัญหาหากคุณกำลังนั่งจ้องหน้าจออยู่ตลอดเวลา แต่จะกลายเป็นอุปสรรคชิ้นโตทันทีในยามที่คุณไม่ได้อยู่หน้าเครื่อง ตัว agent ที่ขยันผลิตคำขอเตือนเด้งขึ้นมาตลอดเวลาจะไม่สามารถปล่อยให้รันงานแบบไร้คนดูแลตามลำพัง ([AFK](#afk)) ได้เลย ตัวเลือกโหมดควบคุมสิทธิ์ (permission mode) จึงทำหน้าที่เป็นเหมือนปุ่มปรับระดับความเข้มงวด คอยกำหนดว่าเครื่องมือชิ้นไหนปล่อยให้รันผ่านได้ฉลุย ชิ้นไหนต้องเด้งถามก่อน โดยแนวทางในฝันคือการติดตั้งระบบพื้นที่ปิด ([sandbox](#sandbox)) เพื่อรองรับความปลอดภัย ช่วยให้เรากล้าเปิดใจปรับโหมดให้เครื่องมือส่วนใหญ่รันผ่านได้ฟรีโดยไม่ต้องคอยเด้งถาม

_ตัวอย่างการใช้งาน:_

"ระบบมันค้างเติ่งติดอยู่ตรงหน้าต่าง permission request มาสิบนาทีแล้วเนี่ย พอดีผมติดประชุมด่วนอยู่"

"นี่คือต้นทุนของการดึงคนเข้ามาร่วมคุมพวงมาลัยครับ แนะนำให้กดตั้งค่าอนุมัติล่วงหน้าให้กับชุดเครื่องมือ ([tools](#tool)) ที่ปลอดภัยไปเลยครับ หน้าต่างคำขอจะได้ยอมเด้งเตือนเฉพาะในจังหวะที่มีการเรียกใช้คำสั่งที่มีความเสี่ยงสูงจริง ๆ เท่านั้นครับ"

### Permission mode

#### English

The permission-gating slice of an [agent mode](#agent-mode) — which [tool calls](#tool-call) trigger a [permission request](#permission-request) and which run automatically. The original purpose of mode systems before [harnesses](#harness) started bundling behavioral instructions on top.

Harnesses ship a ladder of these modes:

| Mode               | Reads | Writes & shell         | Typical use                                     |
| ------------------ | ----- | ---------------------- | ----------------------------------------------- |
| Read-only / plan   | Auto  | Blocked                | Research, planning, reviewing                   |
| Default            | Auto  | Ask                    | Day-to-day supervised work                      |
| Auto-edit          | Auto  | Edits auto, shell asks | Trusted repos, mechanical changes               |
| "Yolo" / full-auto | Auto  | Auto                   | [Sandboxes](#sandbox), [AFK](#afk) runs |

Choosing a rung is a trade between safety and interruption, and both failure modes are felt. Too tight, and you become the bottleneck: the [agent](#agent) stops every few seconds for harmless reads, you click approve on autopilot, and the approvals stop meaning anything — rubber-stamping is the worst of both worlds, all the interruption with none of the protection. Too loose, and the agent edits files and runs commands you'd have wanted to see first.

The loose end is most defensible inside a sandbox, where the blast radius of a bad [tool](#tool) call is contained. Outside one, most people settle on auto-approving reads and keeping a [human in the loop](#human-in-the-loop) for anything irreversible.

_Usage:_

"It paused on every grep — totally killed the AFK run."

"Loosen the permission mode for read-only tools, keep prompting on writes and shell. Most permission requests on a research [session](#session) are noise."

#### ไทย

ระดับการตั้งค่าควบคุมและคัดกรองสิทธิ์เข้าถึงระบบ ซึ่งเป็นส่วนประกอบย่อยภายในโหมดการทำงานของ agent ([agent mode](#agent-mode)) ทำหน้าที่คอยกำหนดตรรกะว่าการเรียกใช้เครื่องมือ ([tool calls](#tool-call)) ชิ้นใดสามารถปล่อยให้รันผ่านโดยอัตโนมัติ และชิ้นใดจำเป็นต้องหยุดระบบเพื่อแสดงหน้าต่างยืนยันสิทธิ์ ([permission request](#permission-request)) ขึ้นมาถามผู้ใช้งานก่อน นี่คือจุดประสงค์ดั้งเดิมแท้ ๆ ของการคิดค้นระบบแบ่งโหมด ก่อนที่ตัวระบบควบคุม ([harness](#harness)) ยุคหลัง ๆ จะเริ่มขยายขอบเขตนำข้อบังคับพฤติกรรมและคู่มือการทำงานยัดรวมเข้าไปในโหมดด้วย

โดยทั่วไปซอฟต์แวร์ harness มักจะออกแบบระดับการควบคุมสิทธิ์ไล่เรียงตามขั้นบันไดดังนี้:

| ระดับโหมดสิทธิ์    | ฝั่งเปิดอ่านข้อมูล (Reads) | ฝั่งเขียนข้อมูลและคำสั่งเชลล์ (Writes & shell)   | รูปแบบพฤติกรรมการใช้งานทั่วไป                                                              |
| ------------------ | -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Read-only / plan   | ปล่อยผ่านอัตโนมัติ (Auto)  | บล็อกการทำงานถาวร (Blocked)                      | งานวิเคราะห์ข้อมูล, งานวางแผนระบบ, งานตรวจทานโค้ด                                          |
| Default            | ปล่อยผ่านอัตโนมัติ (Auto)  | หยุดระบบและเด้งถามคุณก่อน (Ask)                  | งานเขียนโค้ดทั่วไปในแต่ละวันที่ต้องการคนเฝ้าดู                                             |
| Auto-edit          | ปล่อยผ่านอัตโนมัติ (Auto)  | เปิดแก้ไฟล์ออโต้ ส่วนคำสั่งเชลล์ยังคงเด้งถามอยู่ | ทำงานในคลังโค้ดที่เชื่อใจได้, งานแก้เชิงกลไก                                               |
| "Yolo" / full-auto | ปล่อยผ่านอัตโนมัติ (Auto)  | ปล่อยผ่านอัตโนมัติทั้งหมด (Auto)                 | รันงานในระบบพื้นที่ปิด ([Sandboxes](#sandbox)), รันงานทิ้งไว้ข้ามคืน ([AFK](#afk)) |

การเลือกบันไดขั้นใดขั้นหนึ่งคือการแลกเปลี่ยน (trade-off) ระหว่างระดับความปลอดภัยของเครื่อง กับความน่ารำคาญในการโดนขัดจังหวะการทำงาน และปัญหาสุดโต่งทั้งสองฝั่งก็สร้างความเสียหายได้จริง หากคุณตั้งค่าเข้มงวดตึงเครียดจนเกินไป ตัวคุณเองนั่นแหละที่จะกลายเป็นคอขวดของระบบ ตัว [agent](#agent) จะคอยหยุดชะงักทุก ๆ 3 วินาทีเพียงเพื่อขออนุญาตเปิดอ่านไฟล์ขยะทั่วไป จนทำให้คุณเกิดอาการเมื่อยล้าและเผลอกดปุ่มยอมรับแบบรัว ๆ โดยไม่ได้อ่านข้อความ (rubber-stamping) ซึ่งสถานการณ์นี้ถือเป็นจุดที่ย่ำแย่ที่สุดเพราะคุณเสียเวลาโดนขัดจังหวะฟรี ๆ โดยไม่ได้รับความปลอดภัยกลับมาเลย แต่ถ้าหากคุณตั้งค่าหละหลวมปล่อยจอยจนเกินไป agent ก็อาจจะขยับไปเปิดแก้ไฟล์ข้อมูลสำคัญหรือสั่งรันคอมมานด์ทำลายระบบที่คุณควรจะได้เห็นและคัดค้านก่อนเป็นคนแรก

แนวทางการปล่อยสิทธิ์ฟรีแบบหละหลวม (Yolo) จะมีความสมเหตุสมผลและยอมรับได้มากที่สุดก็ต่อเมื่ออยู่ภายใต้ระบบพื้นที่ปิด (sandbox) เท่านั้น เพราะความเสียหายจากการเรียกใช้งานเครื่องมือ ([tool](#tool)) ที่ผิดพลาดจะถูกจำกัดวงเอาไว้ข้างใน แต่ถ้าเป็นการรันภารกิจบนเครื่องจริงภายนอก ข้อสรุปที่คนทำงานส่วนใหญ่ยอมรับร่วมกันคือ ปล่อยให้ฟังก์ชันฝั่งอ่านข้อมูลรันผ่านได้ฉลุยแบบอัตโนมัติ และคงกลไกดึงมนุษย์เข้ามาร่วมคุมพวงมาลัย ([human in the loop](#human-in-the-loop)) เอาไว้สำหรับทุก ๆ คำสั่งที่สร้างความเปลี่ยนแปลงทางกายภาพและไม่สามารถกู้คืนระบบกลับมาได้

_ตัวอย่างการใช้งาน:_

"มันชอบหยุดชะงักค้างเติ่งในทุก ๆ คำสั่ง grep เลยครับ เสียจังหวะและทำลายแผนการปล่อยจอรันงานข้ามคืน (AFK) หมดเลย"

"ปรับลดระดับ permission mode สำหรับกลุ่มเครื่องมือประเภทอ่านข้อมูลอย่างเดียว (read-only tools) ให้ปล่อยผ่านออโต้เลยครับ และตั้งล็อกให้เด้งถามเฉพาะงานเขียนไฟล์กับคำสั่งเชลล์ก็พอ เพราะหน้าต่างขออนุมัติในระหว่าง [session](#session) วิเคราะห์ข้อมูลส่วนใหญ่เป็นเพียงแค่สัญญาณรบกวนขยะครับ"

### Agent mode

#### English

A preset that shapes how the [agent](#agent) operates at runtime — bundles a [permission mode](#permission-mode) with behavioral instructions injected into the [system prompt](#system-prompt). Examples: a default that prompts on risky calls, a **plan mode** that blocks edits and steers the agent toward research, an **accept-edits** mode that auto-approves edits, a **bypass permissions** mode (colloquially **YOLO mode**) that auto-approves everything. Can flip [mid-session](#session).

The bundling is what distinguishes a mode from a bare permission setting. A permission mode is only a gate: it decides which [tool calls](#tool-call) go through. A gate alone produces an agent that wants to edit but can't — it proposes the write, gets blocked, and tries another way. The injected instructions remove the want: plan mode doesn't just block edits, it tells the agent it's in a planning phase, so it reads, asks, and proposes instead of straining against the gate. Gate and steer point the same direction.

In practice, you change mode as your trust changes over the course of a task. The same task can pass through several modes: plan mode while the approach is still being shaped, the prompting default for the first delicate edits, accept-edits once the agent has shown it understands the change, bypass for an [AFK](#afk) run inside a [sandbox](#sandbox). Changing mode costs you nothing: the conversation continues exactly where it was, with new permissions and new instructions. If you find yourself approving every prompt without reading it, the mode is set tighter than your actual trust; if you keep rejecting edits, it's set looser.

_Vendor terms:_ Claude Code calls these "permission modes," Codex calls them "approval modes" — both predate behavioral bundling.

_Usage:_

"It keeps editing files when I just want a plan."

"Switch to plan mode — it'll block writes and stay in research."

"What about for the AFK run later?"

"Bypass mode, but only inside the sandbox."

#### ไทย

ค่าพรีเซ็ตสำเร็จรูปที่ใช้สำหรับจัดวางพฤติกรรมการทำงานของ [agent](#agent) ในระหว่างรันไทม์ โดยจะทำหน้าที่ควบรวมระดับการตั้งค่าควบคุมสิทธิ์ ([permission mode](#permission-mode)) เข้าไว้กับชุดคู่มือปรับพฤติกรรมที่จะถูกฉีดเพิ่มเข้าไปในระบบคำสั่งหลัก ([system prompt](#system-prompt)) ตัวอย่างพรีเซ็ตที่คุ้นเคย เช่น โหมดค่าเริ่มต้น (default) ที่คอยเด้งถามสิทธิ์ก่อนเริ่มงานที่มีความเสี่ยง, **โหมดวางแผน (plan mode)** ที่ปิดกั้นสิทธิ์การเปิดแก้ไขไฟล์พร้อมปรับพฤติกรรม agent ให้มุ่งเน้นไปที่งานวิเคราะห์สำรวจ, **โหมดอนุมัติแก้โค้ดออโต้ (accept-edits)** ที่ยอมปล่อยผ่านสิทธิ์งานเขียนไฟล์ข้อมูลได้ทันที หรือโหมดข้ามขั้นตอนยืนยันสิทธิ์ทั้งหมด (bypass permissions หรือที่เรียกกันในวงเหล้าคนทำงานว่า **YOLO mode**) ที่ยอมเปิดสิทธิ์ผ่านฉลุยออโต้ให้กับทุก ๆ คำสั่ง โดยพรีเซ็ตเหล่านี้สามารถสั่งคลิกขยับสลับโหมดไปมาได้ในระหว่างรัน [session](#session)

การควบรวมชุดคำสั่งดัดแปลงพฤติกรรมเข้าไปด้วยนี่เอง คือความแตกต่างที่ฉีกตัว agent mode ออกจากการตั้งค่าควบคุมสิทธิ์แบบดิบ ๆ ทั่วไป ลำพังแค่ระดับการควบคุมสิทธิ์ทำหน้าที่เป็นเพียงแค่ประตูกั้นสิทธิ์ คอยประเมินว่าการเรียกใช้เครื่องมือ ([tool calls](#tool-call)) ชิ้นไหนสามารถผ่านไปรันได้จริง ประตูกั้นสิทธิ์เพียงอย่างเดียวจะทำให้คุณได้ agent ที่กระหายอยากเปิดแก้ไฟล์ข้อมูลอยู่ตลอดเวลาแต่มันทำไม่ได้ มันจะยื่นข้อเสนอสั่งเขียนไฟล์ -> โดนประตูกั้นบล็อกสิทธิ์ -> แล้วมันก็หันไปฝืนยื่นคำสั่งแนวเดิมซ้ำ ๆ แต่การฉีดคำสั่งปรับพฤติกรรมเข้าไปจะช่วยลบความอยากนั้นทิ้งไปตั้งแต่แรก โดนโหมดวางแผน (plan mode) ไม่ได้ทำเพียงแค่ล็อกกลอนประตูไม่ให้เขียนไฟล์ แต่ตัวมันจะสำทับบอก agent ให้ตระหนักรู้ว่า 'ตอนนี้แกกำลังอยู่ในช่วงของการระดมสมองวางแผนงานนะ' ส่งผลให้มันหันไปโฟกัสกับการเปิดอ่านข้อมูล ตั้งคำถามถามคุณ และยื่นข้อเสนอเชิงทฤษฎีแทนที่จะพยายามวิ่งไปงัดประตูกั้นสิทธิ์ ประตูกั้นสิทธิ์และเข็มทิศชี้นำพฤติกรรมจึงหันหน้าทำงานไปในทิศทางเดียวกันอย่างสามัคคี

ในทางปฏิบัติ คุณสามารถสลับปรับเปลี่ยนโหมดไปมาได้ตามระดับความไว้วางใจที่ขยับเคลื่อนไปในระหว่างทำภารกิจ ภารกิจชิ้นเดียวกันสามารถสลับผ่านโหมดการทำงานได้หลายรูปแบบ: เปิดด้วย plan mode ในช่วงที่กำลังร่วมกันตบแต่งแนวทางแก้ปัญหา, ขยับมาใช้โหมดค่าเริ่มต้น (default) ในจังหวะที่เริ่มลงมือแก้โค้ดจุดละเอียดอ่อนชิ้นแรก, ขยับความเร็วขึ้นมาเป็นโหมด accept-edits ทันทีที่ agent แสดงฝีมือให้เห็นว่ามันเข้าใจรูปแบบความเปลี่ยนแปลงชิ้นนี้อย่างถูกต้องแล้ว และเปิดโหมด bypass เพื่อปล่อยจอรันงานข้ามคืน ([AFK](#afk)) ทิ้งไว้ภายในระบบพื้นที่ปิด ([sandbox](#sandbox)) การสลับโหมดการทำงานไม่มีต้นทุนใด ๆ ที่ต้องเสีย ประวัติบทสนทนาจะยังคงดำเนินต่อ ณ จุดเดิมแบบเป๊ะ ๆ โดยระบบจะสลับแค่เงื่อนไขสิทธิ์และคำสั่งชุดใหม่เข้าไปแทน หากคุณพบว่าตัวเองกำลังนั่งกดปุ่มอนุมัติหน้าต่างคำขอแบบรัว ๆ โดยไม่ได้อ่านข้อความ แปลว่าระดับโหมดถูกตั้งไว้เข้มงวดเกินกว่าระดับความไว้วางใจจริงในหัวของคุณ แต่ถ้าคุณพบว่าตัวเองต้องคอยกดปุ่มยกเลิกปฏิเสธงานเขียนโค้ดอยู่บ่อยครั้ง แปลว่าโหมดถูกตั้งไว้หละหลวมเกินไป

_คำศัพท์เฉพาะของแต่ละค่าย:_ แอปพลิเคชัน Claude Code จะเรียกสิ่งนี้ว่า "permission modes" ส่วนค่าย Codex จะเรียกว่า "approval modes" ซึ่งคำเรียกของทั้งสองค่ายเกิดขึ้นมาก่อนยุคที่จะมีการควบรวมชุดคำสั่งดัดแปลงพฤติกรรมเข้าไว้ด้วยกันในภายหลัง

_ตัวอย่างการใช้งาน:_

"ตัว agent มันชอบพุ่งตัวไปเปิดไล่แก้ไฟล์โค้ดจริงอยู่เรื่อยเลย ทั้งที่ผมแค่อยากให้มันช่วยวางแผนงานมาให้ดูก่อนเฉย ๆ"

"สลับโหมดไปเป็น plan mode สิครับ ระบบจะทำการบล็อกสิทธิ์งานเขียนไฟล์ข้อมูลทั้งหมด และบีบให้ตัวมันตั้งสมาธิอยู่กับงานสำรวจวิเคราะห์ข้อมูลวางแผนแทนครับ"

"แล้วถ้าผมจะปล่อยจอรันงานทิ้งไว้ข้ามคืน (AFK) ในช่วงดึกหลังจากวางแผนเสร็จแล้วล่ะครับ"

"ขยับไปเปิดใช้งานโหมด bypass ได้เลยครับ แต่ต้องมั่นใจนะครับว่ารันอยู่ภายในพื้นที่ปิด sandbox เท่านั้น"

### Sandbox

#### English

An isolated [environment](#environment) the [agent](#agent) runs inside — a container, VM, ephemeral [filesystem](#filesystem), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](#afk) practical.

The sandbox and the [permission mode](#permission-mode) solve the same problem from opposite ends. Permissions ask before an action runs; a sandbox limits what the action can reach if it does run. Permissions need you running [in the loop](#human-in-the-loop) — every prompt is an interruption — and a session that asks constantly is barely autonomous. A sandbox spends infrastructure instead of attention: the stronger the isolation, the fewer questions need asking.

Isolation comes in grades:

| Grade            | What it is                                                 | What it contains                           |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Restricted shell | OS-level confinement around each command                   | Writes outside the project, network access |
| Container        | Fresh filesystem, no credentials mounted, discarded after  | Anything the agent does to its own machine |
| VM / cloud       | A separate machine entirely, often provided by the harness | Everything, including kernel-level escapes |

What no sandbox contains: actions that leave it legitimately. An agent with your git credentials can push; one with network access can call production APIs. Decide what crosses the boundary before deciding how thick to make it.

_Usage:_

"I want to let it run [bypass-permissions](#agent-mode) overnight but I'm not ready for that."

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."

#### ไทย

สภาพแวดล้อมระบบ ([environment](#environment)) แบบปิดและแยกโดเมนออกไปอย่างเด็ดขาด (isolated) ที่ถูกสร้างขึ้นมาครอบไว้เพื่อให้ [agent](#agent) เข้าไปปฏิบัติงานอยู่ภายใน เช่น ระบบคอนเทนเนอร์ (container), เวอร์ชวลแมชชีน (VM), ระบบไฟล์ชั่วคราว (ephemeral [filesystem](#filesystem)) หรือระบบเชลล์ที่ถูกจำกัดวงสิทธิ์ใช้งาน ทำหน้าที่คอยควบคุมขอบเขตความเสียหาย (blast radius) จากคำสั่งคอมพิวเตอร์ต่าง ๆ ของ agent: ต่อให้มันเผลอรันคำสั่งทำลายระบบล้างเครื่อง หรือเผลอไปดึงไฟล์ข้อมูลแฝงมัลแวร์อันตรายเข้ามา ความเสียหายทั้งหมดจะถูกกักขังเอาไว้ข้างในพื้นที่จำลองนี้เท่านั้น นี่คือเลเยอร์โครงสร้างพื้นฐานด้านความปลอดภัยที่ช่วยเปิดโอกาสให้คุณสามารถปล่อยจอรันงานทิ้งไว้ข้ามคืน ([AFK](#afk)) ได้จริงในทางปฏิบัติ

ตัวระบบพื้นที่ปิด sandbox และตัวโหมดควบคุมสิทธิ์ ([permission mode](#permission-mode)) ทำหน้าที่แก้ไขโจทย์ปัญหาความปลอดภัยข้อเดียวกันจากคนละฝั่ง เลเยอร์ควบคุมสิทธิ์ใช้วิธีหยุดระบบเพื่อเด้งคำถามขออนุมัติก่อนที่จะยอมรันคำสั่ง ส่วน sandbox ใช้วิธีขีดเส้นกั้นล็อกพื้นที่ไว้ล่วงหน้าว่าคำสั่งนั้นจะเอื้อมมือไปทำลายสิ่งใดได้บ้างหากถูกรันขึ้นมา เลเยอร์ควบคุมสิทธิ์บีบให้ตัวคุณต้องคอยนั่งเฝ้าหน้าจอคุมพวงมาลัย ([Human-in-the-loop](#human-in-the-loop)) อยู่ตลอดเวลา โดยทุก ๆ คำขออนุมัติคือการเข้ามาขัดจังหวะสมาธิของคุณ และเซสชันที่คอยเด้งคำถามอยู่ทุก ๆ วินาทีจะแทบไม่เหลือความเป็นระบบอัตโนมัติเลย การเปิดใช้งาน sandbox จึงเป็นการยอมสละทรัพยากรฝั่งโครงสร้างระบบอินฟราสตรัคเจอร์แทนการผลาญสมาธิของคุณ ยิ่งระบบกั้นแยกพื้นที่ปิดมีความแข็งแกร่งแน่นหนามากเท่าใด จำนวนคำถามที่ระบบต้องเด้งขึ้นมาถามคุณก็จะลดน้อยลงตามไปด้วยเท่านั้น

ระดับความแน่นหนาของการกั้นแยกพื้นที่ปิดถูกแบ่งออกเป็นหลายขั้น:

| ระดับความแน่นหนา | นิยามเชิงระบบทางเทคนิค                                                                                           | ขอบเขตสิ่งแปลกปลอมที่สามารถกักขังควบคุมไว้ได้                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Restricted shell | การตีกรอบจำกัดวงสิทธิ์ที่ระดับ OS ครอบรอบตัวคำสั่งคอมพิวเตอร์                                                    | งานเขียนไฟล์นอกขอบเขตโปรเจกต์, สิทธิ์เข้าถึงเน็ตเวิร์กภายนอก                    |
| Container        | ระบบไฟล์ที่ถูกเจเนอเรตขึ้นมาใหม่แกะกล่อง โดยไม่มีการเมานต์รหัสผ่านประจำเครื่อง และจะถูกโยนทิ้งทันทีเมื่อรันเสร็จ | ทุกสิ่งทุกอย่างที่ agent ลงมือปฏิบัติกับตัวเครื่องจำลองของมันเอง                |
| VM / cloud       | ระบบแยกเครื่องคอมพิวเตอร์ออกไปอีกหนึ่งเครื่องอย่างเด็ดขาด มักจะจัดหามาให้โดยผู้พัฒนาซอฟต์แวร์ harness เอง        | ทุก ๆ ความเสียหายร้ายแรง รวมถึงเคสการเจาะทะลุเลเยอร์ระบบ (kernel-level escapes) |

สิ่งที่ไม่มีระบบ sandbox ใดในโลกจะสามารถกักขังเอาไว้ได้: คือการกระทำใด ๆ ที่มีตรรกะสั่งวิ่งทะลุออกไปภายนอกอย่างถูกต้องตามกฎเกณฑ์ ตัวอย่างเช่น agent ที่ถือครองรหัสผ่าน git credentials ส่วนตัวของคุณจะสามารถสั่ง push โค้ดขึ้นคลังหลักภายนอกได้ปกติ หรือ agent ที่ได้รับสิทธิ์เข้าถึงเน็ตเวิร์กภายนอกย่อมสามารถยิงคำสั่งไปเรียกใช้งาน production API จริงหลังบ้านได้ ดังนั้น จงประเมินและตัดสินใจให้ดีว่ามีข้อมูลอะไรบ้างที่อนุญาตให้วิ่งข้ามเส้นกั้นขอบเขตออกไปได้ ก่อนที่คุณจะเริ่มพิจารณาเลือกความหนาของกำแพงกั้น sandbox

_ตัวอย่างการใช้งาน:_

"ผมอยากจะเปิดตั้งค่าให้มันรันงานแบบข้ามขั้นตอนยืนยันสิทธิ์ ([bypass-permissions](#agent-mode)) ทิ้งไว้ตลอดทั้งคืนเลยครับ แต่ใจหนึ่งก็ยังรู้สึกกลัวและไม่พร้อมเสี่ยงขนาดนั้น"

"จับมันยัดใส่ลงใน sandbox สิครับ โดยเปิดรันบนคอนเทนเนอร์ตัวใหม่แกะกล่อง ไม่ต้องเมานต์รหัสผ่านประจำเครื่อง และตัดสายเน็ตเวิร์กขาออกให้หมด เคสที่แย่ที่สุดมันก็แค่ทำลายระบบ filesystem จำลองของตัวมันเองจนพังพินาศ ซึ่งคุณก็แค่สั่งลบคอนเทนเนอร์ขยะชิ้นนั้นทิ้งไปก็จบเรื่องครับ"

## Section 4 — Failure Modes

### Sycophancy

#### English

Confidently agreeable [model](#model) output. Caused by [training](#training): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

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

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](#clearing) and re-ask without signalling either way."

#### ไทย

ผลลัพธ์ขาออกของ [model](#model) ที่แสดงอาการเออออห่อหมก ยอมรับตามความคิดเห็นของผู้ใช้งานอย่างเชี่ยวชาญแต่มั่นใจแบบผิด ๆ ปัญหานี้เกิดขึ้นมาจากกระบวนการฝึกฝน ([training](#training)) ที่ตัวโมเดลถูกขัดเกลามาให้เลือกตอบคำถามในแนวทางที่มนุษย์เปิดอ่านแล้วพึงพอใจ และพฤติกรรมธรรมชาติของมนุษย์เรามักจะชอบฟังคำพูดสนับสนุนเห็นด้วย มากกว่าการโดนชี้หน้าตัดเตือนตรง ๆ ว่าคุณกำลังทำเรื่องที่ผิดพลาด ด้วยเหตุนี้ ตัวโมเดลจึงเรียนรู้ว่าการก้มหน้าตอบเออออตามผู้ใช้จะช่วยให้มันได้รับรางวัลคะแนนสะสมที่สูงกว่า แม้ว่าคำพูดสนับสนุนนั้นจะผิดพลาดคลาดเคลื่อนจากความจริงก็ตาม

_มักจะปรากฏร่องรอยในลักษณะ:_

- _อาการยอมหมอบเมื่อโดนทักท้วง_ — ยอมกลับลำพลิกคำตอบที่ถูกต้องทันที เพียงแค่คุณส่งข้อความแชตไปถามทวนคำสั่งเบา ๆ ว่า "แน่ใจแล้วเหรอ?"
- _การเอ่ยปากชมไอเดียแย่ ๆ_ — ด่วนสรุปเอ่ยปากอวยแผนงานที่พังพินาศของคุณว่าก้าวล้ำยอดเยี่ยมมาก ก่อนที่ตัวมันจะเริ่มต้นลงมืออ่านวิเคราะห์ตรรกะในนั้นเสียด้วยซ้ำ
- _การประเมินผลงานแบบลำเอียง_ — การส่งโค้ดชิ้นเดียวกันไปให้ตรวจทาน ผลประเมินจะเอียงไปในแดนบวกทันทีถ้าคุณแอบส่งสัญญาณบอกใบ้ว่าโค้ดชิ้นนี้คุณเป็นคนเขียนเอง แต่ผลจะพลิกไปเป็นแดนลบทันทีถ้าคุณแอบบอกใบ้ว่านี่เป็นผลงานของโปรแกรมเมอร์คนอื่น เป็นซอร์สโค้ดตัวเดียวกันแท้ ๆ แต่ให้คำตัดสินต่างกันคนละขั้ว
- _พฤติกรรมลอกเลียนแบบ_ — การนำเอาคำสะกดผิดหรือตรรกะที่พังของคุณมาพิมพ์ทวนซ้ำส่งกลับคืนมา เพื่อใช้เป็นข้อความยืนยันสนับสนุนคุณ

_วิธีการทดสอบเพื่อวินิจฉัยโรค:_ ให้ตั้งคำถามเช็กว่า ตัวโมเดลจะยังคงให้คำตัดสินในทรงนี้อยู่หรือไม่หากไม่มีข้อความชี้นำทิศทางจากคุณ? ถ้าหากสิ่งเดียวที่ขยับเปลี่ยนไปในระบบมีเพียงแค่น้ำเสียง (tone) หรือรูปแบบการตั้งคำถามของคุณ พฤติกรรมตอบรับนั้นจะถูกจัดว่าเป็น sycophancy ทันที ไม่ใช่ผลลัพธ์ที่เกิดจากการปรับเปลี่ยนตรรกะวิเคราะห์เชิงลึก

_แนวทางการดัดแปลงแก้ไข:_ จงปกปิดซ่อนความต้องการและรสนิยมส่วนตัวของคุณให้มิดชิด พยายามเลือกใช้ถ้อยคำใน prompt ที่มีความเป็นกลางทางตรรกะมากที่สุด เช่น ใช้ประโยคว่า "ช่วยเปิดตรวจทานซอร์สโค้ดชิ้นนี้หน่อย" แทนการใช้ประโยคชี้นำว่า "โค้ดชิ้นนี้เขียนมาดีแล้วใช่ไหม?"

_สิ่งที่ควรเลี่ยง:_ การเหมารวมเรียกทุก ๆ คำตอบที่ผิดพลาดแต่บังเอิญตรงใจคุณว่าเป็นอาการ sycophancy หากไม่มีการรันกระบวนการตรวจสอบทดสอบตามที่ระบุไว้ข้างต้น คำศัพท์คำนี้จะไม่มีมูลค่าเชิงวินิจฉัยปัญหาใด ๆ มากไปกว่าคำว่า "ตอบผิด" เฉย ๆ

_ตัวอย่างการใช้งาน:_

"ตอนแรกมันยังเอ่ยปากชมอยู่เลยว่าแผนการปรับปรุงโค้ด (refactor) ของผมยอดเยี่ยมมาก พอผมแกล้งแชตถามกลับไปว่า 'แน่ใจแล้วเหรอ?' มันรีบพิมพ์ขอโทษขอโพยแล้วกลับลำโยนแผนทิ้งหมดเลยครับ"

"อาการ sycophancy ขั้นตำราเลยครับ รอบแรกมันรีบอวยเพราะน้ำเสียงคุณฟังดูมั่นใจ พอรอบสองมันยอมหมอบเพราะน้ำเสียงคุณฟังดูลังเล คุณภาพของแผนงานไม่ได้ขยับเปลี่ยนเลย มีแค่โทนเสียงของคุณเท่านั้นที่เปลี่ยน ให้สั่งล้างประวัติเซสชัน ([clear](#clearing)) ทิ้งซะ แล้วส่งคำถามเข้าไปใหม่โดยห้ามแฝงอารมณ์หรือส่งสัญญาณชี้นำใด ๆ ทั้งสิ้นครับ"

### Hallucination

#### English

Confidently-wrong [model](#model) output. Two flavors with different causes and fixes:

| Flavor         | What goes wrong                                                                                                        | Cause                                                                                                                | Fix                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Factuality_   | Invented or wrong facts about the world — a function that doesn't exist, a wrong API signature, a fake citation        | [Parametric knowledge](#parametric-knowledge) gaps, often past the [knowledge cutoff](#knowledge-cutoff) | Load the right [contextual knowledge](#contextual-knowledge) |
| _Faithfulness_ | Output drifts from the contextual knowledge that's loaded, the user's instructions, or the model's own prior reasoning | [Attention degradation](#attention-degradation); worsens in the [dumb zone](#smart-zone)                 | [Clear](#clearing) or [compact](#compaction)               |

[Next-token prediction](#next-token-prediction) produces fluent output whether or not the underlying fact is real — the model has no internal signal that it doesn't know something, so an invented method arrives in the same assured register as a correct one. Hallucinated code is plausible by construction: it's what the API _would_ look like if it existed, which is exactly what makes it slip past a skim-level review and fail only when run.

You need to know which flavor you're looking at, because the fix for one makes the other worse. Factuality means missing knowledge: the fix is adding context — the docs, the type definitions, the file. Faithfulness means the knowledge is present but losing the competition for attention: the fix is removing context. Misdiagnose faithfulness as factuality and you paste in more docs, which grows the context and makes the drift worse. When the agent gets something wrong, check whether the correct information was already in context before deciding which problem you have.

_Avoid:_ "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

_Usage:_

"It hallucinated a `parseAsync` method on the schema."

"Factuality or faithfulness?"

"The method exists in the docs I pasted — it just stopped reading them after [turn](#turn) forty."

"Faithfulness then. Compact and reload, don't bother adding more docs."

#### ไทย

ผลลัพธ์การสุ่มข้อความขาออกของ [model](#model) ที่มีความผิดพลาดคลาดเคลื่อนจากความเป็นจริงแต่กลับแสดงน้ำเสียงพฤติกรรมที่มั่นใจอย่างเต็มเปี่ยม ปัญหานี้ถูกแบ่งแยกออกเป็นสองสายหลัก ซึ่งมีรากเหง้าต้นตอของสาเหตุและแนวทางการดัดแปลงแก้ไขที่แตกต่างกันโดยสิ้นเชิง:

| สายอาการหลอน                                  | รูปแบบความเสียหายที่เกิดขึ้นในระบบ                                                                                                             | รากเหง้าต้นตอของสาเหตุ                                                                                                                                                                          | แนวทางการดัดแปลงแก้ไข                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| _Factuality_ (ความถูกต้องเชิงข้อเท็จจริง)     | การกุเรื่องราวหรือแต่งข้อเท็จจริงภายนอกขึ้นมาเอง เช่น เรียกใช้งานฟังก์ชันที่ไม่มีอยู่จริง มโนสเปกข้อกำหนด API ขึ้นมาเอง หรืออ้างอิงชื่อไฟล์ขยะ | เกิดช่องว่างโหว่ในคลังความรู้ที่ฝังในตัวเลขพารามิเตอร์ ([parametric knowledge](#parametric-knowledge)) มักเป็นข้อมูลที่อยู่เลยวันตัดความรู้ ([knowledge cutoff](#knowledge-cutoff)) | ดำเนินการป้อนชุดข้อมูลดิบที่ถูกต้องเข้าสู่พื้นที่ความรู้เฉพาะกิจ ([contextual knowledge](#contextual-knowledge)) |
| _Faithfulness_ (ความซื่อสัตย์ต่อข้อมูลนำเข้า) | ข้อความขาออกเกิดอาการหลุดลอยและหลงทิศทางไปจากชุดข้อมูลบริบทที่อัปโหลดให้ หลุดจากคำสั่งของผู้ใช้ หรือขัดแย้งกับข้อสรุปเก่าของตัวมันเอง          | เกิดสภาวะพื้นที่ความสนใจในระบบเริ่มเสื่อมถอยลง ([attention degradation](#attention-degradation)) มักเริ่มแผลงฤทธิ์เมื่อเซสชันหลุดเข้าสู่ [โซนเอ๋อ](#smart-zone) (dumb zone)         | สั่งล้างประวัติการคุย ([clear](#clearing)) หรือสั่งบีบอัดสรุปใจความบริบทใหม่ ([compact](#compaction))          |

กลไกการคำนวณคาดเดาโทเค็นถัดไป ([next-token prediction](#next-token-prediction)) จะยังคงทำหน้าที่พ่นข้อความภาษาคอมพิวเตอร์ที่สละสลวยและอ่านลื่นไหลออกมาเสมอ ไม่ว่าข้อเท็จจริงที่อยู่เบื้องหลังประโยคนั้นจะมีตัวตนอยู่จริงบนโลกหรือไม่ก็ตาม ตัวโมเดลไม่มีสัญญาณเตือนภัยหลังบ้านคอยบอกตัวเองว่า 'เฮ้ย เรื่องนี้แกไม่รู้นะ' ส่งผลให้ข้อความฟังก์ชันมโนที่ถูกแต่งขึ้นมา จะถูกส่งมอบออกมาด้วยน้ำเสียงที่มั่นใจและดูเป็นมืออาชีพในระดับเดียวกันกับฟังก์ชันที่ถูกต้องทุกประการ ซอร์สโค้ดที่เกิดอาการหลอนจึงถูกสร้างขึ้นมาอย่างแนบเนียนและมีความสมเหตุสมผลในเชิงโครงสร้างอักษร: มันคือหน้าตาของ API ที่ _ควรจะเป็น_ หากผู้พัฒนาซอฟต์แวร์ชิ้นนั้นออกแบบไว้ ซึ่งคุณสมบัตินี้เองที่ทำให้โค้ดหลอนสามารถเล็ดลอดผ่านสายตาการกวาดอ่านตรวจทานแบบคร่าว ๆ ของมนุษย์ไปได้ง่าย ๆ และจะไปแสดงอาการพังพินาศเอาตอนสั่งกดรันระบบจริงเท่านั้น

คุณจำเป็นต้องวิเคราะห์ให้เฉียบขาดว่ากำลังเผชิญหน้าอยู่กับอาการหลอนสายไหน เพราะวิธีการแก้ไขของสายหนึ่งจะเข้าไปซ้ำเติมให้อาการของอีกสายหนึ่งย่ำแย่หนักกว่าเดิม อาการหลอนสาย Factuality หมายความว่าระบบขาดแคลนความรู้ วิธีแก้คือการถมข้อมูล [บริบท](#context) เติมเข้าไป เช่น เอกสารคู่มือ นิยามประเภทข้อมูล หรือตัวไฟล์โค้ด แต่อาการหลอนสาย Faithfulness หมายความว่าระบบมีข้อมูลหนาแน่นเกินไปจนเริ่มเกิดอาการเบลอและหลุดโฟกัส วิธีแก้ไขจึงต้องใช้กลยุทธ์ตรงกันข้ามคือการรีบลดขนาดถอนข้อความบริบทออกไป หากคุณดันวินิจฉัยโรคผิดพลาด มองอาการหลอนสาย Faithfulness ว่าเป็นสาย Factuality คุณจะเผลอก๊อปปี้คู่มือตัวเต็มอัดถมเข้าไปเพิ่ม ซึ่งจะทำให้ขนาดของบริบทบวมเบ่งขึ้น และส่งผลให้โมเดลเกิดสภาวะหลุดโฟกัสหลงทิศหนักข้อขึ้นกว่าเก่า ดังนั้นเมื่อใดก็ตามที่ agent เริ่มทำงานผิดพลาด ให้เปิดเช็กดูก่อนว่าข้อมูลที่ถูกต้องชิ้นนั้นมันเคยนั่งทับอยู่ในหน้าต่างบริบทอยู่แล้วหรือไม่ ก่อนที่คุณจะเริ่มตัดสินใจเลือกแนวทางแก้ไขปัญหา

_สิ่งที่ควรเลี่ยง:_ การใช้คำว่า "hallucination" เป็นเพียงคำสรุปกว้าง ๆ แทนคำว่า "ตอบผิด" โดยไม่มีการระบุสายอาการแยกย่อย เพราะคำศัพท์ชิ้นนี้จะสูญเสียมูลค่าเชิงวินิจฉัยปัญหาทางเทคนิคทันที

_ตัวอย่างการใช้งาน:_

"ตัว agent มันแอบมโนเมธอดชื่อ `parseAsync` ขึ้นมาเองบนโครงสร้างข้อกำหนด schema ครับ"

"เป็นอาการหลอนสาย Factuality หรือสาย Faithfulness ครับ"

"เมธอดนี้มันมีตัวตนอยู่จริงในไฟล์เอกสารคู่มือที่ผมเคยแนบส่งให้มันดูครับ แต่มันแค่ขยับเลิกอ่านคู่มือชิ้นนั้นไปดื้อ ๆ หลังจากคุยผ่านรอบสนทนา ([turn](#turn)) ที่ 40 เป็นต้นไป"

"ถ้าอย่างนั้นเป็นสาย Faithfulness ชัดเจนครับ ให้สั่งบีบอัดสรุปข้อมูล (compact) แล้วเปิดเซสชันใหม่ทันที ไม่ต้องเสียเวลาไปก๊อปคู่มือมาประเคนถมเพิ่มให้มันแล้วครับ"

### Parametric knowledge

#### English

What the [model](#model) "knows" from [training](#training), stored in its [parameters](#parameters). Frozen at training time — the model can't see its own parameters or update them. Detail is lost in the squeeze: billions of facts cram into a fixed number of parameters, and the rare ones blur. Source of fluency on common topics, and of fabrication on uncommon ones. Counterpart to [contextual knowledge](#contextual-knowledge).

Parametric knowledge is not stored as facts. Training never gives the model a database to look things up in; it adjusts parameters until the model predicts text well, and a model that predicts text about a topic well behaves as if it knows the topic. How reliable the knowledge is tracks how often something appeared in the training data: a topic with millions of examples is reproduced accurately, for a topic with only a handful, the model guesses based on what similar topics look like. Reproducing and guessing are the same process to the model, so it can't tell which one it's doing. A fabricated answer arrives with the same fluency as a correct one. [Hallucination](#hallucination) is the model guessing wrong.

Parametric knowledge also ages. The parameters stop changing at the [knowledge cutoff](#knowledge-cutoff), so a library released or renamed after that date doesn't exist in them, and an API that changed is remembered in its old form.

For both gaps — too rare and too recent — the remedy is the same: the knowledge can't be added to the parameters, so it has to be supplied as contextual knowledge instead.

_Usage:_

"It writes flawless React but invents methods on our internal SDK."

"React is dense in the parametric knowledge — millions of training examples. Your SDK isn't, so the model fills in plausible-looking shapes. Load the SDK docs into [context](#context)."

#### ไทย

สิ่งที่ตัว [model](#model) "รับรู้และจดจำได้" จากกระบวนการฝึกฝน ([training](#training)) โดยข้อมูลความรู้ทั้งหมดจะถูกแปลงสภาพและจัดเก็บอยู่ภายในไฟล์ตัวเลขพารามิเตอร์ ([parameters](#parameters)) ข้อมูลในส่วนนี้จะถูกแช่แข็งไว้อย่างถาวรทันทีหลังเสร็จสิ้นกระบวนการเทรน โดยตัวโมเดลไม่มีช่องทางเปิดดูโครงสร้างพารามิเตอร์ของตัวเองและไม่สามารถส่งคำสั่งไปอัปเดตตัวเลขเหล่านั้นได้ รายละเอียดปลีกย่อยต่าง ๆ มักจะสูญหายไปในระหว่างขั้นตอนการบีบอัดความรู้: ข้อเท็จจริงหลายพันล้านเรื่องถูกบังคับให้บีบอัดลงมาอยู่ในพื้นที่จำกัดของชุดตัวเลข ส่งผลให้ข้อเท็จจริงเรื่องใดที่เป็นเรื่องแปลกหรือพบเจอได้ยากเกิดอาการเบลอและเลือนลางหายไป นี่คือจุดกำเนิดของสติปัญญาที่รอบรู้และสละสลวยในหัวข้อสาธารณะทั่วไป แต่ในขณะเดียวกันก็เป็นต้นตอของอาการกุเรื่องแต่งข้อมูลในหัวข้อเฉพาะทางที่พบเจอได้ยาก เป็นคำตรงข้ามกับความรู้จากบริบทภายนอก ([Contextual knowledge](#contextual-knowledge))

ความรู้ในพารามิเตอร์ไม่ได้ถูกจัดเก็บอยู่ในทรงของฐานข้อมูลข้อเท็จจริง กระบวนการฝึกฝนไม่เคยส่งมอบดาต้าเบสให้โมเดลใช้ในการเปิดสืบค้นค้นหาข้อมูล แต่กระบวนการนี้ใช้วิธีปรับแต่งค่าตัวเลขพารามิเตอร์ไปเรื่อย ๆ จนกระทั่งตัวโมเดลสามารถทำนายประมวลผลข้อความถัดไปได้อย่างแม่นยำ และโมเดลที่สามารถพ่นข้อความเกี่ยวกับหัวข้อนั้น ๆ ได้อย่างยอดเยี่ยม ก็จะแสดงพฤติกรรมออกมาราวกับว่ามันมีความรอบรู้ในศาสตร์แขนงนั้นจริง ๆ ระดับความน่าเชื่อถือของความรู้ส่วนนี้จึงแปรผันตรงตามจำนวนครั้งที่ข้อมูลชิ้นนั้นเคยปรากฏอยู่ในชุดข้อมูลฝึกฝน: หัวข้อใดที่มีตัวอย่างรันผ่านตามาเป็นล้าน ๆ ครั้งจะสามารถถูกผลิตซ้ำออกมาได้อย่างแม่นยำแกะกล่อง ส่วนหัวข้อใดที่มีตัวอย่างหลุดเข้ามาเพียงแค่หยิบมือ ตัวโมเดลจะใช้วิธีคาดเดารูปร่างจากหัวข้อรอบ ๆ ที่มีลักษณะใกล้เคียงกันแทน ในมุมมองของโมเดล กระบวนการผลิตซ้ำข้อมูลจริงกับกระบวนการนั่งเดาสุ่มคือกลไกคณิตศาสตร์ตัวเดียวกันเป๊ะ มันจึงแยกแยะไม่ออกว่าข้อมูลที่มันกำลังพ่นออกมา ณ ขณะนั้นเกิดจากการจำได้หรือเกิดจากการเดา คำตอบที่ถูกมโนขึ้นมาจึงถูกส่งมอบออกมาด้วยความสละสลวยลื่นไหลเท่ากับคำตอบที่ถูกต้องทุกประการ อาการหลงลืมแต่งเรื่องหลอน ([Hallucination](#hallucination)) ก็คือการที่โมเดลเดาตัวเลขคณิตศาสตร์ผิดฝั่งนั่นเอง

ความรู้ในพารามิเตอร์ยังมีวันหมดอายุ ตัวเลขพารามิเตอร์จะขยับเลิกเปลี่ยนแปลง ณ วันตัดข้อมูลความรู้ ([knowledge cutoff](#knowledge-cutoff)) ส่งผลให้ซอฟต์แวร์ไลบรารีใด ๆ ที่ถูกปล่อยออกมาหรือถูกเปลี่ยนชื่อหลังจากจุดเวลานั้น จะไม่มีตัวตนอยู่จริงภายในคลังความรู้นี้ และสเปกข้อกำหนด API ที่เคยขยับปรับเปลี่ยนไปแล้ว ก็จะยังคงถูกจดจำอยู่ในรูปแบบเวอร์ชันเก่ากึกค้างปีอยู่ข้างใน

สำหรับโจทย์ปัญหาช่องว่างความรู้ทั้งสองฝั่ง — ไม่ว่าจะเป็นเรื่องข้อมูลที่พบเจอได้ยากเกินไป หรือเรื่องข้อมูลที่ใหม่สดซิ่งเกินไป — แนวทางการแก้ไขมีเพียงหนึ่งเดียวเท่านั้นคือ ในเมื่อเราไม่สามารถเดินหน้าเข้าไปเพิ่มความรู้ลงในพารามิเตอร์ได้ เราจึงจำเป็นต้องจัดส่งข้อมูลเหล่านั้นเข้าไปในฐานะความรู้จากบริบทภายนอกแทน

_ตัวอย่างการใช้งาน:_

"มันสามารถเขียนโค้ด React ออกมาได้สละสลวยอย่างไร้ที่ติเลยครับ แต่พอสั่งให้รันงานดัดแปลงฟังก์ชันบน internal SDK ของบริษัทเรา มันชอบมโนชื่อเมธอดแปลก ๆ ขึ้นมาเองตลอดเลย"

"เพราะเทคโนโลยี React มีข้อมูลหนาแน่นอยู่ในความรู้ในพารามิเตอร์ครับ มีตัวอย่างให้มันเรียนรู้มาเป็นล้าน ๆ ชิ้นในดาต้าเซ็ต แต่ชุดซอฟต์แวร์ SDK ของบริษัทคุณไม่ได้อยู่ข้างในนั้น โมเดลเลยต้องใช้วิธีเดาสุ่มรูปทรงที่น่าจะเป็นขึ้นมาแทน ให้รีบเอาคู่มือการใช้งาน SDK โหลดเข้าไปใน [บริบท](#context) ด่วนเลยครับ"

### Knowledge cutoff

#### English

The date past which a [model](#model) has no [parametric knowledge](#parametric-knowledge). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](#contextual-knowledge). Each model release ships with its own cutoff.

The cutoff exists because of how models are made: [training](#training) bakes a snapshot of text into the model's [parameters](#parameters), and after that the parameters are frozen. The model doesn't know its knowledge has an edge — asked about something past the cutoff, it doesn't refuse, it extrapolates from the nearest thing it does know. That's what makes the trap quiet: code written against an old version of a library looks plausible, often compiles, and fails on the parts that changed.

The fix is always the same: get current information into [context](#context). Load the changelog, point at the installed version's type definitions, or have the agent read the docs from the web. Anything in context outranks nothing-in-parameters.

_Usage:_

"It keeps writing the v3 SDK syntax — we're on v5."

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."

#### ไทย

พิกัดวันที่ระบุจุดสิ้นสุด ซึ่งหลังจากพ้นกำหนดเวลานี้ไปแล้ว ตัว [model](#model) จะไม่มีความรู้ในพารามิเตอร์ ([parametric knowledge](#parametric-knowledge)) หลงเหลืออยู่อีกเลย ซอฟต์แวร์ไลบรารี ข้อกำหนดคุณลักษณะ API หรือเหตุการณ์สำคัญใด ๆ ที่เกิดขึ้นหลังจากพิกัดวันเวลานี้ จะกลายเป็นกับดักชั้นยอดที่พร้อมล่อลวงให้โมเดลเกิดอาการกุเรื่องแต่งข้อมูลขึ้นมาเอง ทันทีที่คุณเผลอสั่งงานโดยไม่ได้แนบไฟล์คู่มือข้อเท็จจริงจากบริบท ([contextual knowledge](#contextual-knowledge)) เข้าไปประกบ โมเดลแต่ละรุ่นที่ถูกปล่อยออกมาใช้งานจะพกพาวันตัดข้อมูลความรู้ประจำตัวมาไม่เหมือนกัน

เหตุผลที่มีเส้นกั้นเวลานี้เกิดขึ้นมาจากข้อจำกัดในขั้นตอนการสร้างโมเดล: กระบวนการฝึกฝน ([training](#training)) คือการบันทึกภาพถ่ายประวัติศาสตร์ของชุดข้อความมหาศาลบีบอัดลงสู่ไฟล์พารามิเตอร์ ([parameters](#parameters)) และหลังจากผ่านพ้นจุดนั้นไป ค่าตัวเลขพารามิเตอร์จะถูกแช่แข็งถาวร ตัวโมเดลไม่เคยตระหนักรู้ว่าความรู้ในหัวของมันมีเส้นขอบเหวสิ้นสุดอยู่ตรงไหน เมื่อใดที่คุณตั้งคำถามถามถึงสิ่งที่มีตัวตนเกิดขึ้นหลังจากวันกั้นเวลา มันจะไม่เคยตอบปฏิเสธว่าไม่รู้ แต่มันจะใช้วิธีคาดเดาต่อยอด (extrapolate) จากข้อมูลเก่ากึกชิ้นที่ใกล้เคียงที่สุดเท่าที่มันมีอยู่แทน ซึ่งนี่คือสาเหตุที่ทำให้กับดักชิ้นนี้ทำงานได้อย่างเงียบเชียบที่สุด: โค้ดที่มันเขียนขึ้นมาตามความรู้เวอร์ชันเก่าจะดูมีความสมเหตุสมผล หน้าตาผ่านตาดูถูกต้อง และรันระบบผ่านฉลุยในขั้นตอนคอมไพล์ แต่จะไปแสดงอาการพังพินาศในฟังก์ชันเฉพาะส่วนที่มีการขยับปรับสเปกไปในเวอร์ชันปัจจุบัน

แนวทางการแก้ไขปัญหามีเพียงรูปแบบเดียวเสมอ: คือการจัดส่งข้อมูลที่สดใหม่และถูกต้องเข้าสู่ [บริบท](#context) โดยตรง สั่งโหลดบันทึกการเปลี่ยนแปลงระบบ (changelog) ยื่นไฟล์นิยามประเภทข้อมูล (type definitions) ของเวอร์ชันปัจจุบันให้มันดู หรือเปิดสิทธิ์ให้ตัว agent วิ่งออกไปเปิดอ่านคู่มือสด ๆ จากหน้าเว็บไซต์ภายนอก ข้อมูลใด ๆ ที่ตั้งตระหง่านอยู่ในบริบท จะมีน้ำหนักความน่าเชื่อถือเหนือกว่าความว่างเปล่าในพารามิเตอร์เสมอ

_ตัวอย่างการใช้งาน:_

"ทำไมมันยังคงเขียนโค้ดตามสเปกไวยากรณ์ (syntax) ของ SDK เวอร์ชัน v3 อยู่เลยครับ ทั้งที่ตอนนี้ระบบของทีมเราขยับขึ้นมาใช้เวอร์ชัน v5 กันหมดแล้วนะ"

"เพราะ SDK เวอร์ชัน v5 เพิ่งจะถูกปล่อยออกมาหลังจากพิกัดวัน knowledge cutoff ของโมเดลตัวนี้ครับ ให้สั่งโหลด changelog ของ v5 แนบเข้าไปในฐานะความรู้จากบริบทภายนอกด่วนครับ มิฉะนั้นมันก็จะยังคงกุมโนโค้ดขึ้นมาจากข้อมูลความรู้เวอร์ชันเก่ากึกค้างปีในพารามิเตอร์อยู่ดีครับ"

### Contextual knowledge

#### English

Facts the [agent](#agent) can read directly from the [context](#context) right now — the user's task, files the agent has read in, [tool results](#tool-result), [AGENTS.md](#agentsmd) content loaded at [session](#session) start. Counterpart to [parametric knowledge](#parametric-knowledge): parametric is _recalled_ from the parameters; contextual is _read_ from the [window](#context-window). [Hallucinations](#hallucination) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

Of the two kinds of knowledge, only contextual knowledge is in your control. The parameters are frozen, so the only way to give the [model](#model) knowledge it lacks — an internal SDK, a library released after the [knowledge cutoff](#knowledge-cutoff), a decision made yesterday — is to put it in the context. A lot of practical [AI](#ai) coding work reduces to this: getting the right facts in front of the model at the moment it needs them.

When contextual and parametric knowledge conflict, the contextual usually wins. Paste the current API docs and the model follows them rather than its stale memory of the old API — though the old version can still bleed through, especially deep into a long session. If the agent keeps reverting to an outdated pattern despite the docs being loaded, that's parametric knowledge leaking past the contextual; restating the correction or moving it closer to the work helps.

Unlike parametric knowledge, contextual knowledge costs something to use. Everything loaded into the window spends [tokens](#token) and competes for the model's [attention budget](#attention-budget), so loading more is not automatically better — the aim is the relevant facts in the window, not all the facts.

_Reach for this term_ only when contrasting with parametric knowledge; otherwise just say **context**.

_Avoid:_ "working memory" — contextual knowledge is what's in the window _now_; a [memory system](#memory-system) is what gets cross-session content into it. Different scales, don't conflate.

_Usage:_

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."

#### ไทย

ชุดข้อเท็จจริงและข้อมูลต่าง ๆ ที่ตัว [agent](#agent) สามารถเปิดอ่านตัวอักษรได้โดยตรงจากพื้นที่[บริบท](#context) ณ ขณะนั้น เช่น โจทย์คำสั่งชิ้นงานของผู้ใช้ ไฟล์ซอร์สโค้ดต่าง ๆ ที่เอเจนต์เคยสั่งรันเปิดเข้ามา ผลลัพธ์จากการเรียกใช้เครื่องมือ ([tool results](#tool-result)) หรือแม้กระทั่งเนื้อหาแนวทางปฏิบัติในไฟล์คู่มือกติตาประจำโปรเจกต์ (เช่น AGENTS.md) ที่ถูกโหลดเข้ามาตอนเริ่มต้น [session](#session) ข้อมูลส่วนนี้คือคำตรงข้ามกับความรู้ในพารามิเตอร์ ([Parametric knowledge](#parametric-knowledge)): ข้อมูลในพารามิเตอร์เกิดจากการ _นึกย้อนทวนจำ_ ออกมาจากคลังตัวเลขคณิตศาสตร์หลังบ้าน ส่วนความรู้จากบริบทเกิดจากการ _เปิดอ่านตัวอักษรบนหน้ากระดาษ_ ตรงหน้าภายในพื้นที่หน้าต่างบริบท ([context window](#context-window)) โอกาสที่จะเกิดอาการหลงลืมแต่งเรื่องหลอน ([Hallucinations](#hallucination)) จะลดน้อยลงไปอย่างมากยามที่ agent ทำงานบนฐานของความรู้จากบริบทภายนอก เพราะคำตอบที่ถูกต้องตั้งวางอยู่ตรงหน้าของมันแล้ว ไม่ต้องเสียเวลาไปขุดคุ้ยงัดมาจากความทรงจำอันเลือนลางบีบอัดหลังบ้าน

ในบรรดาความรู้ทั้งสองรูปแบบ มีเพียงแค่ความรู้จากบริบทภายนอกชิ้นนี้เท่านั้นที่อยู่ภายใต้การควบคุมและสั่งการของคุณแบบ 100% ตัวเลขพารามิเตอร์ในโมเดลถูกแช่แข็งอย่างถาวรไปแล้ว วิธีเดียวที่คุณจะสามารถมอบความรู้ส่วนที่ระบบขาดแคลนให้แก่ตัว [model](#model) ได้ ไม่ว่าจะเป็นโค้ดเบสเฉพาะกิจภายในบริษัท ซอฟต์แวร์ไลบรารีที่เพิ่งถูกปล่อยออกมาหลังวันตัดข้อมูลความรู้ ([knowledge cutoff](#knowledge-cutoff)) หรือข้อสรุปแนวทางแก้ปัญหาที่ทีมเพิ่งตกลงร่วมกันเมื่อวานนี้ คือการคัดสรรและจัดส่งข้อมูลชิ้นนั้นยัดใส่เข้าสู่พื้นที่บริบท ศาสตร์และศิลป์ในการสั่งงาน [AI](#ai) เขียนโค้ดในแต่ละวันจึงสรุปเหลือเพียงภารกิจเดียวเท่านั้น: คือการจัดวางข้อเท็จจริงที่ถูกต้องให้ไปตั้งอยู่ตรงหน้าโมเดลในจังหวะวินาทีที่มันจำเป็นต้องใช้ประมวลผลพอดี

หากเกิดเคสปัญหาความรู้จากบริบทภายนอกวิ่งไปขัดแย้งกับความรู้ดั้งเดิมในพารามิเตอร์ โดยทั่วไปความรู้จากบริบทตรงหน้าจะเป็นฝ่ายชนะคำนวณคณิตศาสตร์เสมอ ทันทีที่คุณก๊อปปี้เอกสารคู่มือ API เวอร์ชันปัจจุบันส่งให้ดู ตัวโมเดลจะยอมปฏิบัติตามคำสั่งบนหน้ากระดาษนั้น มากกว่าความทรงจำเก่ากึกค้างปีของมัน แต่คุณต้องระวังให้ดีเพราะข้อมูลความรู้เวอร์ชันเก่าในพารามิเตอร์ก็สามารถเกิดอาการซึมเล็ดลอด (bleed through) ออกมาปนเปื้อนคำตอบได้เช่นกัน โดยเฉพาะอย่างยิ่งในยามที่เซสชันลากยาวจนเหนื่อยล้า หากพบว่า agent เริ่มแสดงอาการดื้อดึง พยายามกลับไปเขียนโค้ดตามแพทเทิร์นเก่ากึกล้าสมัย ทั้งที่คุณก็อัปโหลดคู่มือฉบับปรับปรุงตั้งไว้ให้ดูอยู่ทนโท่ นั่นคือสัญญาณเตือนว่าความรู้ในพารามิเตอร์กำลังรั่วซึมทะลุกำแพงบริบทออกมา วิธีการแก้ไขคือการพิมพ์ข้อความสำทับตักเตือนซ้ำอีกรอบ หรือขยับย้ายข้อความคำสั่งนั้นให้ไปตั้งอยู่ใกล้กับพิกัดจุดที่มันกำลังประมวลผลโค้ดให้มากขึ้น

ความรู้จากบริบทภายนอกมีต้นทุนที่ต้องจ่ายในยามใช้งาน ซึ่งต่างจากความรู้ในพารามิเตอร์ ข้อมูลทุกสิ่งทุกอย่างที่คุณโหลดใส่เข้าสู่พื้นที่หน้าต่างบริบทจะคอยผลาญหน่วยโทเค็น ([tokens](#token)) และเข้าไปรุมแย่งชิงพื้นที่งบประมาณความสนใจของโมเดล ([attention budget](#attention-budget)) อยู่ตลอดเวลา ดังนั้น การสาดข้อมูลทุกอย่างถมเข้าไปในระบบจึงไม่ใช่แนวทางปฏิบัติที่ดีเสมอไป เป้าหมายสูงสุดคือการคัดสรรให้มีเพียงข้อเท็จจริงที่เกี่ยวข้องโดยตรงตั้งอยู่ในหน้าต่างบริบท ไม่ใช่การขนเอาข้อเท็จจริงทั้งหมดบนโลกมายัดใส่

_ให้เลือกหยิบคำศัพท์คำนี้มาใช้_ เฉพาะในจังหวะที่ต้องการเปรียบเทียบเชิงคอนทราสต์เข้ากับคำว่า parametric knowledge เท่านั้น นอกเหนือจากนั้นให้เรียกสั้น ๆ ว่า **บริบท (context)** พอครับ

_สิ่งที่ควรเลี่ยง:_ การเรียกสิ่งนี้ว่า "ความจำชั่วคราวชั่วโมงทำงาน" (working memory) เพราะความรู้จากบริบทหมายถึงข้อมูลที่ตั้งอยู่ในหน้าต่างบริบท _ณ วินาทีนี้_ เท่านั้น ส่วน [ระบบความจำ](#memory-system) (memory system) คือโครงสร้างระบบซอฟต์แวร์หลังบ้านที่มีหน้าที่คอยวิ่งไปดึงข้อมูลข้ามเซสชันมาหยอดใส่หน้าต่างนี้อีกทีหนึ่ง เป็นสเกลระบบคนละชั้นกัน อย่าจำสับสนเด็ดขาด

_ตัวอย่างการใช้งาน:_

"ทำไมเวลาผมก๊อปคู่มือ API แปะใส่เข้าไป มันถึงเขียนโค้ดเรียกใช้งานฟังก์ชันได้ถูกต้องแม่นยำมาก แต่พอรอบไหนไม่ได้แปะ มันชอบมโนชื่อฟังก์ชันขึ้นมาเองตลอดเลยล่ะครับ"

"เพราะทันทีที่คุณแปะคู่มือใส่ลงไป ข้อมูลชิ้นนั้นจะกลายสภาพเป็นความรู้จากบริบทภายนอก (contextual knowledge) มันทำหน้าที่เหมือนการเปิดข้อความอ่านจากหน้ากระดาษตรง ๆ แต่พอรอบไหนที่คุณไม่ได้แปะ ระบบจะตกร่นไปพึ่งพาความรู้ในพารามิเตอร์ดั้งเดิม ซึ่งข้อมูลฟังก์ชันเฉพาะทางที่พบน้อยมักจะเกิดอาการเบลอและเลือนลางหายไปในคลังตัวเลขคณิตศาสตร์หลังบ้านครับ"

### Attention relationship

#### English

When predicting each [token](#token), the [model](#model) factors in every other token in the [context](#context) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

The pairings are where the model's apparent understanding lives. When it resolves a pronoun, it's because the attention relationship between "her" and "Sarah" is strong. When it calls a function with the right arguments, the relationship between the call site and the definition it read earlier is doing the work. None of this is looked up — it's computed fresh on every [model provider request](#model-provider-request), for every pair.

The N² figure is worth sitting with, because it grows faster than intuition suggests:

| Context size   | Pairings (~N²) |
| -------------- | -------------- |
| 1,000 tokens   | ~1 million     |
| 10,000 tokens  | ~100 million   |
| 100,000 tokens | ~10 billion    |

Each pairing is also computed more than once. Models have multiple attention heads — exact counts for frontier models are unpublished, but fifty to a hundred is a reasonable guess — and each head computes its own version of every relationship. So every pairing in the table above is duplicated across every head. That's a lot of pairings.

Only a small number of these relationships matter for any given task. The pairing between your instruction and the code it governs is one of a handful that count; almost everything else in the pool is noise. And the two grow at different rates: the relationships that matter stay roughly constant, while the total pool grows quadratically with context size. At 1,000 tokens, the pairing you care about is one in a million; at 100,000 tokens, it's one in ten billion. This is the arithmetic underneath the [attention budget](#attention-budget), and [attention degradation](#attention-degradation) is what it feels like when the relationships that matter get too thin a share.

_Usage:_

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](#smart-zone)."

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."

#### ไทย

ในทุก ๆ จังหวะการประมวลผลคาดเดา [token](#token) ถัดไป ตัว [model](#model) จำเป็นต้องนำโทเค็นตัวนั้นวิ่งไปคำนวณคณิตศาสตร์เปรียบเทียบร่วมกับโทเค็นตัวอื่น ๆ ทุกตัวที่มีตระหง่านอยู่ภายในพื้นที่[บริบท](#context) โดยบางตัวจะถูกให้น้ำหนักอย่างหนาแน่น และบางตัวจะถูกปล่อยผ่านเลยไปแทบจะเป็นศูนย์ ค่าจับคู่เชื่อมโยงระหว่างโทเค็นสองตัวนี้เรียกว่า **ความสัมพันธ์ด้านความสนใจ (attention relationship)** และโทเค็นคู่ใดที่มีความหมายสัมพันธ์กันในเชิงตรรกะซอฟต์แวร์ (เช่น คำสรรพนาม "เธอ" จับคู่เข้ากับชื่อบุคคล "ซาร่าห์" หรือ จุดเรียกใช้งานฟังก์ชัน `getUser()` จับคู่เข้ากับเนื้อโค้ดนิยาม `function getUser`) จะส่งอิทธิพลดึงดูดและชี้นำตรรกะคำตอบให้แก่กันสูงกว่าโทเค็นคู่ที่ไม่ได้เกี่ยวข้องกันอย่างมาก บริบทที่มีขนาดจำนวนโทเค็นรวมทั้งสิ้น N ตัว จะงอกมูลค่าความสัมพันธ์ด้านคณิตศาสตร์ลักษณะนี้ออกมาเป็นสเกลยกกำลังสอง หรือแปรผันตามทรง N² เสมอ

ชุดตัวเลขการจับคู่เหล่านี้คือสถานที่ซ่อนตัวของสติปัญญาที่ดูน่าทึ่งของโมเดล เวลาที่มันสามารถไขปริศนาหาคำตอบได้ว่าคำสรรพนามในประโยคนี้หมายถึงใคร เบื้องหลังเกิดจากการที่ค่า attention relationship ระหว่างคำว่า "เธอ" กับชื่อ "ซาร่าห์" มีพลังดึงดูดคณิตศาสตร์ที่เข้มงวดรุนแรง หรือเวลาที่มันสามารถเขียนโค้ดเรียกใช้งานฟังก์ชันพร้อมจัดส่งพารามิเตอร์ได้อย่างถูกต้องแม่นยำ เบื้องหลังเกิดจากการที่จุดเรียกใช้งานกับตัวนิยามฟังก์ชันดั้งเดิมที่มันเคยเปิดอ่านช่วงต้นประวัติ มีค่าความเชื่อมโยงดึงดูดกันอยู่ ข้อมูลความสัมพันธ์ทั้งหมดนี้ไม่ได้เกิดขึ้นจากการเปิดตารางสืบค้นข้อมูลสำเร็จรูป (lookup table) แต่มันคือการคำนวณคณิตศาสตร์สดใหม่แกะกล่องในทุก ๆ หน่วยคำขอผู้ให้บริการ ([model provider request](#model-provider-request)) แยกย่อยรายโทเค็นคู่ข้ามทั่วทั้งหน้าต่างระบบ

ตัวเลขสเกลยกกำลังสอง N² คือสิ่งที่เราควรหยุดนั่งคิดพิจารณาให้ขึ้นใจ เพราะมันพอกพูนเติบโตในอัตราความเร็วที่เหนือกว่าสัญชาตญาณความรู้สึกของมนุษย์เราจะประเมินได้ง่าย ๆ:

| ขนาดจำนวนโทเค็นรวมในบริบท (N) | มูลค่าคู่ความสัมพันธ์เชื่อมโยงที่ต้องคำนวณ (~N²) |
| ----------------------------- | ------------------------------------------------ |
| 1,000 tokens                  | ประมาณ 1 ล้านคู่ความสัมพันธ์                     |
| 10,000 tokens                 | ประมาณ 100 ล้านคู่ความสัมพันธ์                   |
| 100,000 tokens                | ประมาณ 10,000 ล้านคู่ความสัมพันธ์ (10 Billion)   |

และมูลค่าการจับคู่แต่ละคู่ในตารางข้างต้นนี้ ไม่ได้ถูกคำนวณประมวลผลเพียงแค่รอบเดียว โมเดลภาษาภาษาขนาดใหญ่ยุคปัจจุบันจะพกพาหัวประมวลผลความสนใจ (attention heads) ซ่อนอยู่ภายในระบบหลายชุดพร้อมกัน — แม้ตัวเลขจำนวนหัวที่แน่ชัดสำหรับโมเดลระดับแนวหน้าจะไม่ถูกเปิดเผยต่อสาธารณะ แต่การประเมินคร่าว ๆ ว่ามีซ่อนอยู่ประมาณ 50 ถึง 100 หัวจัดว่าเป็นตัวเลขที่สมเหตุสมผล — และหัวประมวลผลแต่ละหัวจะทำหน้าที่คำนวณมูลค่าความเชื่อมโยงในเวอร์ชันของตัวเองแยกกันเป็นอิสระ ดังนั้น ตัวเลขคู่ความสัมพันธ์มหาศาลในตารางข้างต้นจะถูกสำเนาคูณซ้ำเข้าไปตามจำนวนหัวประมวลผลทั้งหมดที่มี สรุปคือเบื้องหลังมันคือกองทัพตัวเลขคำนวณที่มหาศาลอย่างยิ่ง

ในงานแต่ละชิ้น จะมีคู่ความสัมพันธ์เพียงส่วนน้อยนิดเท่านั้นที่เป็นหัวใจสำคัญในการแก้โจทย์ความถูกต้อง คู่ความสัมพันธ์ระหว่างประโยคคำสั่งของคุณกับบรรทัดซอร์สโค้ดที่ต้องการปรับแต่ง คือหนึ่งในคู่คำนวณเพียงหยิบมือเดียวที่มีคุณค่าต่อภารกิจ ส่วนคู่คำนวณอื่น ๆ เกือบทั้งหมดในอ่างคณิตศาสตร์ชิ้นนี้เป็นเพียงแค่สัญญาณรบกวนขยะ และปัญหาใหญ่คือ ข้อมูลสองฝั่งนี้เติบโตในอัตราความเร็วที่ไม่เท่ากัน: คู่ความสัมพันธ์ที่มีคุณค่าต่องานจะคงที่อยู่ประมาณเดิมเสมอ แต่กองทัพคู่คำนวณขยะทั้งหมดจะขยายตัวเพิ่มขึ้นเป็นทรงกราฟยกกำลังสองตามขนาดของบริบทที่บวมเบ่งขึ้น ที่ขนาดบริบท 1,000 โทเค็น คู่คำนวณที่คุณคอยเฝ้าเป็นห่วงจะมีสัดส่วนเป็น 1 ในล้านคู่คำนวณ แต่พอขนาดบริบทบวมเบ่งขึ้นไปถึง 100,000 โทเค็น คู่คำนวณสำคัญชิ้นเดิมจะดิ่งลงไปเหลือสัดส่วนเพียงแค่ 1 ในหมื่นล้านคู่คำนวณ (10 Billion) นี่คือหลักคณิตศาสตร์ที่ซ่อนอยู่เบื้องหลังกลไก [งบประมาณความสนใจ](#attention-budget) และ [อาการความสนใจเสื่อมถอย](#attention-degradation) ก็คือความรู้สึกยามที่คู่ความสัมพันธ์สำคัญตรงหน้า โดนสัดส่วนตัวเลขขยะรุมเบียดบังจนเหลือส่วนแบ่งพลังงานคณิตศาสตร์น้อยเกินไป

_ตัวอย่างการใช้งาน:_

"ตัวโมเดลมันเริ่มแสดงอาการสับสน สลับสัญลักษณ์ตัวแปร `user` สองตัวสลับกันไปมาในระหว่างดูไฟล์ diff ครับ อาการเหมือนหลุดเข้าไปใน [โซนเอ๋อ](#smart-zone) เรียบร้อยแล้ว"

"ใช่ครับ ตอนนี้ค่า attention relationship ระหว่างจุดเรียกใช้งานแต่ละจุดกับพาธที่มันประกาศตัวตน กำลังวิ่งเข้าต่อสู้ห้ำหั่นกันเองอยู่ข้างหลัง เพราะโทเค็นมันหน้าตาเหมือนกันเป๊ะแต่ผูกสิทธิ์ข้อมูลคนละตัว แนะนำให้ลองเปลี่ยนชื่อตัวแปรตัวใดตัวหนึ่งในโค้ดดูครับ ค่าการจับคู่เชื่อมโยงในระบบคำนวณจะได้แยกออกจากกันได้อย่างเฉียบคมขึ้นครับ"

### Attention budget

#### English

Each [token](#token) has a finite amount of influence to distribute across the rest of the [context](#context). Heavy influence on [one relationship](#attention-relationship) leaves less for others. The budget is per-token and doesn't grow when the context does, which is why long [sessions](#session) dilute.

Think of it as signal and noise. Your instruction is a signal at fixed volume; every other token in the [context window](#context-window) is competing sound. The instruction never gets quieter — it's still there, character for character — but as the context grows, the room gets louder around it, and the signal-to-noise ratio drops. An instruction that was the loudest thing at 10k tokens of context is background hum at 150k. This is the mechanism behind [attention degradation](#attention-degradation): the model doesn't forget; the signal gets lost in the noise.

The symptom reads as disobedience — the agent agreed to a constraint early on and then drifts from it, and re-pasting the constraint helps only briefly. The cause isn't the instruction; it's everything else in the window competing with it.

What you can control is what goes into the context. Content that doesn't serve the task isn't neutral — it's noise over everything that does. Keep the window small, [clear](#clearing) when the accumulated context stops paying for itself, and restate the constraints that matter instead of trusting their early mention to hold.

_Usage:_

"Why does it keep ignoring the schema I pasted at the top?"

"We're well into the [dumb zone](#smart-zone) — every token's attention budget is fixed, but the context kept growing. The signal on the schema is now competing with thousands of newer tokens."

#### ไทย

โควตาพลังงานในการส่งอิทธิพลเชื่อมโยงข้อมูล (influence) ที่แต่ละ [token](#token) พกพามาอย่างจำกัดตายตัวเพื่อใช้จัดสรรกระจายให้แก่โทเค็นตัวอื่น ๆ ที่เหลืออยู่ภายในพื้นที่[บริบท](#context) การยอมทุ่มเทพลังงานความสนใจอย่างหนาแน่นให้แก่ [คู่ความสัมพันธ์หนึ่ง](#attention-relationship) ย่อมส่งผลให้เหลือส่วนแบ่งพลังงานไปแจกจ่ายให้คู่คำนวณอื่น ๆ น้อยลงตามไปด้วย มูลค่าโควตางบประมาณชิ้นนี้จะถูกล็อกไว้คงที่ประจำตัวต่อหนึ่งโทเค็น และไม่มีวันขยายขนาดเติบโตขึ้นตามขนาดของข้อมูลบริบทที่บวมเบ่งขึ้น นี่คือสาเหตุหลักที่ทำให้ [session](#session) ที่ลากยาวเกินไปเริ่มเกิดสภาวะเจือจางและหลุดโฟกัส

อยากให้ลองจินตนาการเปรียบเปรยสิ่งนี้เป็นเรื่องของสัญญาณเสียง (signal) และเสียงรบกวน (noise) ข้อความประโยคคำสั่งของคุณเปรียบเสมือนสัญญาณเสียงหลักที่ถูกเปิดทิ้งไว้ด้วยระดับความดังที่คงที่ถาวร ข้อมูลโทเค็นตัวอื่น ๆ ทุกตัวที่ลอยติดเข้ามาอยู่ภายในพื้นที่หน้าต่างบริบท ([context window](#context-window)) ก็คือเสียงฝีเท้าและเสียงรอบข้างที่คอยส่งเสียงดังรุมแย่งชิงความโดดเด่น ข้อความประโยคคำสั่งของคุณไม่เคยหรี่เสียงลง — ตัวอักษรทุกตัวยังคงตั้งตระหง่านอยู่ครบถ้วนไม่มีบิดพริ้ว — แต่ยิ่งขนาดของบริบทรอบข้างขยายใหญ่โตขึ้น พื้นที่ในห้องทำงานจำลองนั้นจะยิ่งส่งเสียงดังเซ็งแซ่รบกวนรอบทิศทาง ส่งผลให้อัตราส่วนระหว่างสัญญาณเสียงต่อเสียงรบกวนดิ่งวูบหล่นลง ประโยคคำสั่งที่เคยส่งเสียงดังฟังชัดที่สุดในตอนที่บริบทมีขนาด 10k โทเค็น จะกลายสภาพเป็นเพียงแค่เสียงฮัมแผ่วเบาในฉากหลังทันทีที่บริบทบวมเบ่งขึ้นไปถึง 150k โทเค็น นี่คือกลไกคณิตศาสตร์ที่ซ่อนอยู่เบื้องหลัง [อาการความสนใจเสื่อมถอย](#attention-degradation): ตัวโมเดลไม่ได้หลงลืมคำสั่งของคุณ แต่มันเป็นเพราะสัญญาณเสียงหลักโดนเสียงรบกวนรอบข้างรุมตะโกนกลบจนหาคลื่นไม่เจอต่างหาก

อาการผิดปกติที่แสดงออกมาบนหน้าจอจะทรงคล้ายกับพฤติกรรมดื้อรั้นไม่ยอมปฏิบัติตามคำสั่ง (disobedience) — ตัว agent อ้อนวอนยอมรับข้อตกลงและเงื่อนไขการเขียนโค้ดของคุณเป็นอย่างดีในช่วงต้นเซสชัน หลังจากนั้นก็เริ่มแสดงอาการหลุดลอยทำตามบ้างไม่ทำตามบ้าง และการก๊อปปี้ข้อความคำสั่งนั้นไปแปะสำทับซ้ำใหม่อีกรอบจะช่วยดึงสมาธิกลับมาได้เพียงแค่ช่วงเวลาสั้น ๆ เท่านั้น ต้นตอของปัญหาไม่ได้อยู่ที่ตัวข้อความคำสั่ง แต่อยู่ที่กองทัพโทเค็นขยะตัวอื่น ๆ ในหน้าต่างที่กำลังรุมแย่งส่วนแบ่งงบประมาณคำนวณไปจากมัน

สิ่งเดียวที่คุณสามารถยื่นมือเข้าไปควบคุมบริหารจัดการได้ คือการคัดกรองข้อมูลที่จะถูกปล่อยให้ไหลเข้าสู่หน้าต่างบริบท เนื้อหาข้อมูลใด ๆ ที่ไม่ได้ช่วยซัพพอร์ตภารกิจตรงหน้าโดยตรง จะไม่จัดว่าเป็นข้อมูลที่เป็นกลาง (neutral) แต่มันทำหน้าที่เป็นสัญญาณรบกวนคอยทำลายความเฉียบคมของข้อมูลส่วนที่เหลือทั้งหมด จงพยายามตีกรอบควบคุมพื้นที่หน้าต่างบริบทให้มีขนาดเล็กและกระชับอยู่เสมอ สั่งล้างระบบประวัติเก่า ([clear](#clearing)) ทันทีที่ประวัติสะสมเริ่มบวมจนได้ผลลัพธ์ไม่คุ้มค่าเหนื่อย และใช้วิธีพิมพ์เน้นย้ำข้อบังคับที่สำคัญเป็นระยะ ๆ แทนการไว้วางใจปล่อยให้คำสั่งประโยคแรกสุดทำหน้าที่แบกงานเพียงลำพัง

_ตัวอย่างการใช้งาน:_

"ทำไมมันถึงชอบแอบละเลย มองข้ามเงื่อนไขโครงสร้างข้อมูล schema ที่ผมอุตส่าห์แปะไว้ให้ดูที่ข้อความบนสุดอยู่เรื่อยเลยล่ะครับ"

"เพราะตอนนี้เรากำลังรันงานอยู่ลึกเข้าไปใน [โซนเอ๋อ](#smart-zone) เรียบร้อยแล้วครับ โควตา attention budget ของแต่ละโทเค็นถูกล็อกค่าไว้คงที่ถาวร แต่ขนาดของบริบทรอบข้างกลับขยายใหญ่ขึ้นเรื่อย ๆ สัญญาณเสียงดั้งเดิมของไฟล์ schema เลยต้องวิ่งเข้าต่อสู้รุมแย่งชิงพลังงานกับโทเค็นเกิดใหม่ชิ้นอื่น ๆ อีกหลายหมื่นตัวรอบข้างครับ"

### Attention degradation

#### English

As a [session](#session) grows, each [token](#token)'s [attention budget](#attention-budget) is spread across more competitors. The signal on any one [meaningful relationship](#attention-relationship) shrinks; noise from irrelevant [context](#context) crowds in. Same [model](#model), same [parameters](#parameters) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](#smart-zone).

It presents as the model getting worse mid-session: constraints it followed for an hour start slipping, it re-asks things it was told, it writes code that ignores a file it read earlier. Nothing about the model changed — the only variable is how much context it's now attending over.

It's gradual, which is what makes it hard to catch from inside the session. There's no error and no threshold; each [turn](#turn) is only slightly worse than the last, and by the time the slips are obvious you've been in the dumb zone for a while.

You recover by removing context, not adding more. Re-pasting the ignored instruction adds another competitor to the same crowded window and helps only briefly. What works: [clear](#clearing) and reload only what the task needs, or [compact](#compaction), or [hand off](#handoff) to a fresh session. Treat declining instruction-following as a signal about context length, not about the model.

_Usage:_

"It's deep in the dumb zone — inventing generics that aren't in the type file."

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. Clear and reload."

#### ไทย

สภาวะที่เกิดขึ้นในยามที่ [session](#session) บทสนทนาเริ่มขยายตัวลากยาวขึ้น ส่งผลให้โควตาพลังงานความสนใจ ([attention budget](#attention-budget)) ของแต่ละ [token](#token) ถูกรุมเฉือนส่วนแบ่งกระจายไปให้แก่ตัวหารและคู่แข่งเกิดใหม่จำนวนมาก สัญญาณความเชื่อมโยงของ [คู่ความสัมพันธ์ที่มีคุณค่า](#attention-relationship) ต่องานจะดิ่งวูบหล่นลง และโดนสัญญาณรบกวนจากข้อความ[บริบท](#context)ขยะรอบทิศทางรุมตะโกนข่มเบียดบังจนจมหาย รันบนฐานของ [model](#model) ตัวเดิม ค่าพารามิเตอร์ ([parameters](#parameters)) ชุดเดิมทุกประการ — มีเพียงตัวหารที่เข้ามารุมแย่งส่วนแบ่งอาหารบนจานคณิตศาสตร์ใบเดิมที่มีขนาดเท่าเดิมเท่านั้น นี่คือกลไกหลักหลังบ้านที่เป็นต้นตอของปรากฏการณ์สลับขั้วระหว่างโซนฉลาดและ [โซนเอ๋อ](#smart-zone) (smart zone / dumb zone effect)

อาการความเสียหายที่แสดงผลออกมาบนหน้าจอคือ ตัวโมเดลจะเริ่มทำผลงานดรอปย่ำแย่ลงในช่วงกลางเซสชัน: ข้อบังคับหรือกฎเหล็กที่คุณเคยสั่งสำทับไว้และมันเคยทำตามได้อย่างดีมาเป็นชั่วโมงจะเริ่มเกิดอาการหลุดลอย ละเลย ทำตามบ้างไม่ทำตามบ้าง เริ่มแสดงอาการพฤติกรรมแปลก ๆ ด้วยการหันกลับมาตั้งคำถามถามในประเด็นที่คุณเคยพิมพ์บอกอธิบายเคลียร์ไปแล้ว หรือลงมือเขียนโค้ดปรับแต่งโดยละเลยมองข้ามเงื่อนไขในไฟล์ข้อมูลเทคนิคที่มันเพิ่งเปิดอ่านไปเมื่อห้านาทีก่อนหน้า ตัวแปรเดียวที่ขยับเปลี่ยนแปลงไปในระบบมีเพียงแค่ปริมาณขนาดความหนาของข้อมูลบริบทที่มันต้องคอยกวาดสายตาคำนวณครอบคลุมอยู่ ณ วินาทีนั้น

ความน่ากลัวของอาการนี้คือมันจะค่อย ๆ คืบคลานเข้ามาทีละเล็กละน้อย (gradual) ทำให้คนทำงานยากที่จะตระหนักรู้ตัวจากภายในเซสชัน ระบบไม่มีการพ่นรหัสข้อผิดพลาดแจ้งเตือน และไม่มีเส้นกั้นขอบเขตทางกายภาพโชว์ให้เห็นเด่นชัด ข้อมูลในแต่ละรอบสนทนา ([turn](#turn)) จะค่อย ๆ ดรอปคุณภาพลงจากรอบก่อนหน้าเพียงแค่เสี้ยวเปอร์เซ็นต์ และกว่าที่คุณจะรู้ตัวตื่นขึ้นมาพบข้อผิดพลาดที่เด่นชัด ตัวระบบก็แอบหลุดลอยเข้าไปนั่งคุยอยู่กลางโซนเอ๋อมาเป็นเวลานานแล้ว

แนวทางการดัดแปลงแก้ไขเพื่อกู้คืนสติปัญญาระบบกลับมา คือการมุ่งเน้นไปที่การถอนล้างเนื้อหาบริบทขยะออกไปข้างนอก ไม่ใช่การก๊อปปี้คำสั่งเก่าป้อนประเคนถมเพิ่มเข้าไปข้างใน การก๊อปปี้คำสั่งเดิมที่โดนละเลยไปแปะสำทับซ้ำ เป็นเพียงการส่งตัวหารตัวใหม่เข้าไปร่วมเบียดบังพื้นที่หน้าต่างบริบทอันแสนแออัดชิ้นเดิม และจะช่วยดึงสมาธิระบบกลับมาได้เพียงแค่ช่วงจังหวะเวลาสั้น ๆ เท่านั้น แนวทางปฏิบัติที่ได้ผลจริงในโลกทำงาน: คือสั่งล้างระบบประวัติเก่า ([clear](#clearing)) แล้วเปิดเซสชันใหม่โดยเลือกโหลดเฉพาะไฟล์ที่ภารกิจชิ้นนั้นจำเป็นต้องใช้จริง ๆ หรือสั่งรันระบบบีบอัดสรุปข้อมูลบริบท ([compact](#compaction)) หรือสั่งทำเรื่อง [ส่งมอบงานส่งต่อข้อมูล](#handoff) ข้ามไปคุยต่อบนเซสชันอันใหม่ที่สะอาดสะอ้าน จงฝึกฝนมองพฤติกรรมการละเลยไม่ยอมทำตามคำสั่งว่าเป็นสัญญาณเตือนภัยเกี่ยวกับขนาดความยาวของบริบท อย่าเพิ่งด่วนสรุปไปโทษว่าเป็นเพราะข้อจำกัดทางสติปัญญาของโมเดล

_ตัวอย่างการใช้งาน:_

"ตัวระบบมันหลุดลอยเข้าไปนั่งเล่นอยู่กลางโซนเอ๋อเรียบร้อยแล้วครับ ตอนนี้เริ่มแสดงอาการมโนฟังก์ชันโครงสร้างคณิตศาสตร์สำเร็จรูป (generics) แปลก ๆ ที่ไม่มีอยู่จริงในไฟล์ประเภทข้อมูลขึ้นมาเองแล้วครับ"

"อาการความสนใจเสื่อมถอย (Attention degradation) แผลงฤทธิ์แล้วครับ ตัวนิยามไฟล์ประเภทข้อมูล (type definitions) มันยังคงตั้งตระหง่านอยู่ในพื้นที่บริบทก็จริง แต่น้ำหนักสัญญาณความสนใจของมันโดนข้อความขยะชิ้นอื่น ๆ ที่เราถมตามเข้ามาทีหลังรุมตะโกนกลบจนมิดหัวเรียบร้อยแล้วครับ ให้สั่งล้างประวัติเซสชันแล้วโหลดใหม่ด่วนครับ"

### Smart zone

#### English

Early in a [session](#session) the [agent](#agent) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more faithfulness [hallucinations](#hallucination). Same [model](#model), same [harness](#harness) — just more [context](#context). The felt effect of [attention degradation](#attention-degradation). On frontier models, the dumb zone commonly begins around 125K-150K [tokens](#token) — though this is debated. [Clear](#clearing) or [compact](#compaction) when the session bloats; don't push through.

The decline is gradual, which makes it easy to miss. There's no error message and no visible boundary; the agent just starts performing slightly worse, then noticeably worse. Common signs: it forgets an instruction you gave twenty turns ago, repeats a mistake it had already corrected, or confidently asserts something the context contradicts. Because the slide is smooth, the usual response is to push through and re-explain — which adds more context and makes the problem worse.

The zones don't track the [context window](#context-window) limit. A session can be deep in the dumb zone with most of the window still free: the limit is where the harness refuses to continue, but quality falls off long before that. Plan around the smart zone, not the window — the practical budget for a task is the tokens the agent works well within, not the tokens it can technically hold.

The smart zone is a budget, and unrelated work spends it. Every task done in a session uses up tokens, so starting a second task in the same session means starting it closer to the dumb zone. Doing one task per session gives each task the sharpest part of the session. When a single task is bigger than one smart zone, split it: [hand off](#handoff) or compact at a natural boundary, and let a fresh session do the next piece.

_Usage:_

"It nailed the first three components and just butchered the fourth."

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."

#### ไทย

ช่วงจังหวะเวลาในช่วงเริ่มต้นเปิดใช้งาน [session](#session) ใหม่ ๆ ที่ตัว [agent](#agent) จะมีความเฉียบคม มีสมาธิสูง และสามารถเปิดอ่านจำข้อมูลย้อนหลัง (recall) ได้อย่างแม่นยำยอดเยี่ยม ซึ่งพื้นที่ช่วงนี้จะเรียกว่า "โซนฉลาด" (smart zone) แต่เมื่อใดก็ตามที่เซสชันเริ่มขยายตัวและสะสมประวัติข้อมูลหนาขึ้นเรื่อย ๆ ตัวระบบจะค่อย ๆ หลุดลอยเข้าสู่ "โซนเอ๋อ" (dumb zone): ทำงานสะเพร่าขึ้น หลงลืมง่าย ทำผิดพลาดในจุดที่ไม่ควรพลาดบ่อยขึ้น และเริ่มแสดงอาการหลอนกุเรื่องหลุดจากข้อมูลนำเข้า (faithfulness [hallucinations](#hallucination)) รันอยู่บนฐานของ [model](#model) ตัวเดิม โครงระบบซอฟต์แวร์ควบคุม ([harness](#harness)) ตัวเดิมทุกประการ — มีเพียงปริมาณเนื้อหา [บริบท](#context) ที่บวมเบ่งขึ้นเท่านั้น นี่คือผลลัพธ์ทางกายภาพที่คุณสามารถสัมผัสได้จากกลไก [อาการความสนใจเสื่อมถอย](#attention-degradation) ในโมเดลระดับแนวหน้า (frontier models) ส่วนใหญ่ โซนเอ๋อมักจะเริ่มแผลงฤทธิ์และคืบคลานเข้ามาทักทายเมื่อขนาดข้อมูลบริบทสะสมวิ่งไปแตะระดับประมาณ 125k ถึง 150k [token](#token) — แม้ว่าตัวเลขพิกัดนี้จะยังคงเป็นประเด็นที่ถกเถียงกันอยู่ในวงการก็ตาม แนวทางปฏิบัติที่ดีที่สุดคือสั่งล้างระบบ ([clear](#clearing)) หรือสั่งบีบอัดสรุปข้อมูล ([compact](#compaction)) ทันทีที่ประวัติเซสชันเริ่มบวมและอืด อย่าฝืนดันทุรังรันงานต่อในสภาพนั้น

สภาวะความเสื่อมถอยของระบบจะเกิดขึ้นในลักษณะค่อยเป็นค่อยไป (gradual) ซึ่งทำให้คนทำงานสังเกตเห็นและดักจับได้ยากมาก ระบบไม่มีการพ่นข้อความแจ้งเตือนความล้มเหลวและไม่มีเส้นกั้นขอบเขตโชว์ให้เห็นบนหน้าจอ ตัว agent จะแค่เริ่มทำผลงานดร็อปลงเล็กน้อยในรอบรันชิ้นแรก และขยับแย่ลงอย่างเด่นชัดในรอบถัดมา สัญญาณเตือนภัยยอดนิยม: เช่น มันเริ่มหลงลืมคำสั่งข้อบังคับที่คุณเคยสั่งสำทับไว้เมื่อ 20 รอบสนทนาก่อนหน้า, วิ่งกลับไปทำความผิดพลาดในจุดเดิมซ้ำสอง ทั้งที่คุณก็เคยดัดแปลงแก้ไขและคุมมันจนผ่านไปแล้วรอบหนึ่ง, หรือพิมพ์ยืนยันข้อมูลชิ้นหนึ่งอย่างมั่นใจเต็มเปี่ยม ทั้งที่ข้อความในคลังบริบทรอบข้างกำลังเขียนคัดค้านข้อมูลชิ้นนั้นอยู่ทนโท่ และเนื่องจากกราฟความเสื่อมถอยมีความลาดเอียงที่สมูทลื่นไหล พฤติกรรมตอบสนองตามสัญชาตญาณของมนุษย์เรามักจะเลือกใช้วิธีฝืนรันงานต่อแล้วพิมพ์ข้อความอธิบายซ้ำใหม่อีกรอบ — ซึ่งการทำแบบนั้นเป็นการส่งโทเค็นขยะเข้าไปถมเพิ่มในหน้าต่าง และส่งผลให้ตรรกะระบบยิ่งดิ่งลงเหวฝั่งโซนเอ๋อหนักข้อขึ้นกว่าเก่า

พิกัดขอบเขตของโซนไม่ได้ขยับวิ่งตามเส้นกั้นเพดานสูงสุดของพื้นที่หน้าต่างบริบท ([context window](#context-window)) เสมอไป เซสชันการทำงานสามารถหลุดลอยเข้าไปนั่งเอ๋ออยู่ก้นบึ้งของ dumb zone ได้อย่างสมบูรณ์แบบ ทั้งที่พื้นที่หน้าต่างบริบทยังคงเหลือโควตาว่างให้ใส่ข้อมูลได้อีกมหาศาล เพดานสูงสุดของกล่องข้อความคือจุดที่ตัว harness จะสั่งล็อกกลอนประตูและปฏิเสธที่จะประมวลผลงานต่อ แต่ระดับคุณภาพและสติปัญญาของระบบจะร่วงหล่นลงมาก่อนจะเดินหน้าไปถึงจุดนั้นตั้งนานแล้ว จงวางแผนและออกแบบภารกิจโดยยึดตามขอบเขตความกว้างของโซนฉลาด อย่าไปวางแผนอิงตามตัวเลขสเปกสูงสุดของหน้าต่างบริบท — พื้นที่งบประมาณที่ใช้งานได้จริงสำหรับหนึ่งภารกิจ คือจำนวนโทเค็นรวมที่ agent สามารถประมวลผลวิเคราะห์ได้อย่างเฉียบคม ไม่ใช่จำนวนโทเค็นสูงสุดที่มันสามารถฝืนยัดเก็บไว้ในหัวได้ในทางทฤษฎี

จงมองว่าโซนฉลาดเป็นพื้นที่งบประมาณที่มีจำกัด และภารกิจอื่น ๆ ที่ไม่ได้เกี่ยวข้องกันจะคอยเข้ามารุมแย่งชิงงบประมาณชิ้นนี้ไป ทุก ๆ ทาสก์งานย่อยที่คุณสั่งให้มันทำภายในเซสชันเดียวกันจะเข้ามารุมผลาญหน่วยโทเค็นไปเรื่อย ๆ ดังนั้น การสั่งเปิดทาสก์งานชิ้นที่ 2 ภายในโครงสร้างเซสชันอันเดิม ย่อมหมายความว่าคุณกำลังบังคับให้ภารกิจชิ้นใหม่นั้นออกสตาร์ทวิ่งใกล้กับหน้าผาของโซนเอ๋อตั้งแต่ก้าวแรก การจำกัดขอบเขตงานแบบ 1 เซสชันต่อ 1 ภารกิจหลัก (one task per session) จะช่วยเปิดโอกาสให้แต่ละชิ้นงานได้สัมผัสกับพลังงานสติปัญญาในช่วงที่เฉียบคมและสดใหม่ที่สุดของเซสชัน และเมื่อใดก็ตามที่ภารกิจชิ้นนั้นมีความใหญ่โตเกินกว่าขอบเขตพื้นที่ของโซนฉลาดอันเดียว ให้ใช้กลยุทธ์หั่นซอยแบ่งชิ้นงาน: สั่งทำเรื่อง [ส่งมอบงานส่งต่อข้อมูล](#handoff) หรือสั่งรันระบบบีบอัดสรุปข้อมูลบริบท ณ พิกัดรอยต่อที่สมเหตุสมผล เพื่อปล่อยให้เซสชันอันใหม่ที่สะอาดและสดชื่นทำหน้าที่แบกรับชิ้นงานส่วนถัดไปแทน

_ตัวอย่างการใช้งาน:_

"ตอนประกอบโครงสร้างซอฟต์แวร์ 3 ชิ้นแรกมันยังเขียนโค้ดออกมาได้เนี๊ยบไร้ที่ติอยู่เลยครับ พอสั่งให้ทำชิ้นที่ 4 ปุ๊บ สภาพเละเทะดูไม่จืดเลย"

"คุณหลุดวงโคจรออกมาจากโซนฉลาดเรียบร้อยแล้วครับ รันอยู่บนโมเดลตัวเดิมนั่นแหละ แค่ตอนนี้ข้อมูลสะสมมันจมลึกเข้าสู่โซนเอ๋อแล้ว ให้สั่งบีบอัดสรุปข้อมูล (compact) แล้วเปิดเซสชันใหม่พร้อมโหลดแผนงานชิ้นล่าสุดเข้าไปประกบด่วนครับ ชิ้นซอฟต์แวร์ที่ 4 ถึงจะยอมคลอดออกมาได้อย่างถูกต้องครับ"

## Section 5 — Handoffs

### Clearing

#### English

Ending the current [session](#session) and starting a fresh one. The next message begins with an empty session and an empty [context window](#context-window). Usually user-driven.

Clearing is the cure for a polluted context. A session accumulates everything: failed attempts, wrong turns, stale [tool results](#tool-result), abandoned plans. The [model](#model) re-reads all of it on every [turn](#turn), and bad history drags on new work. Deep into a long session the [agent](#agent) gets vaguer and less obedient — instructions you gave clearly get ignored, quality slips, and prodding it to do better doesn't help, because the noise it's wading through is still in its [context](#context). Clearing removes the noise.

Clearing doesn't erase the conversation. Most [harnesses](#harness) keep session history on your computer, so the transcript is still there to read or resume. What's gone is the agent's working state: the model is [stateless](#stateless), so the new session knows nothing the old one knew. If the session holds decisions or progress the next one will need, have the agent write a [handoff artifact](#handoff-artifact) first, then start the new session by pointing at it.

Compare [compaction](#compaction), which summarises the session into the new context instead of starting empty. Clearing is the blunter tool: nothing carries over, including the junk.

_Usage:_

"It's stuck looping on the failing test."

"Just clear it — start a fresh session with the plan doc and the test file. No point fighting the existing context."

#### ไทย

กระบวนการสั่งปิดวงจรการทำงานของ [session](#session) ปัจจุบันทิ้งไป เพื่อเริ่มต้นออกสตาร์ทระบบเซสชันอันใหม่อย่างสะอาดบริสุทธิ์แกะกล่อง ส่งผลให้ข้อความคำสั่งแชตในรอบถัดไปจะเริ่มต้นประมวลผลคำนวณบนพื้นที่เซสชันที่ว่างเปล่า และหน้าต่างบริบท ([context window](#context-window)) ที่ไร้ร่องรอยประวัติข้อมูลสะสม โดยปกติแล้วกระบวนการนี้จะเกิดขึ้นจากการตัดสินใจและสั่งการโดยตัวผู้ใช้งานเอง (user-driven)

การสั่งทำเรื่อง clearing ถือเป็นยารักษาโรคขนานเอกสำหรับแก้ไขปัญหาพื้นที่ข้อมูลความรู้ ([context](#context)) เกิดอาการปนเปื้อนและมีสัญญาณรบกวนหนาแน่น ภายในเซสชันหนึ่ง ๆ ยิ่งเปิดรันระบบลากยาวนานเท่าใด มันจะยิ่งเก็บรวบรวมเศษขยะข้อมูลสะสมไว้รกรุงรังมากขึ้นเท่านั้น ไม่ว่าจะเป็นร่องรอยความล้มเหลวจากการลองผิดลองถูกในรอบแรก, แนวทางการเขียนโค้ดที่หลงทิศหลงทางและคุณสั่งยกเลิกไปแล้ว, ผลลัพธ์ขาออกจากเครื่องมือเก่า ๆ ที่ล้าสมัย ([tool results](#tool-result)) หรือแม้กระทั่งแผนงานเก่าที่ถูกโยนทิ้ง ตัว [model](#model) จำเป็นต้องคอยกวาดสายตาอ่านข้อความขยะเหล่านั้นซ้ำใหม่ในทุก ๆ รอบสนทนา ([turn](#turn)) และคราบประวัติศาสตร์ที่ย่ำแย่จะคอยฉุดรั้งและชี้นำตรรกะคำตอบของชิ้นงานใหม่ให้หลงทิศตามไปด้วย ยิ่งเซสชันลากยาวลึกเข้าไปเท่าใด ตัว [agent](#agent) จะเริ่มแสดงอาการเบลอ พิมพ์ตอบแบบคลุมเครือ และดื้อดึงไม่ยอมปฏิบัติตามกฎเกณฑ์ — กฎเหล็กที่คุณเคยพิมพ์สำทับไว้ชัดเจนจะเริ่มโดนมองข้าม คุณภาพงานดร็อปลงอย่างเด่นชัด และการพยายามพิมพ์ข้อความแชตดุด่าตักเตือนให้มันทำผลงานให้ดีขึ้นก็มักจะไม่ช่วยให้อะไรดีขึ้น เพราะสัญญาณรบกวนหนาแน่นที่มันต้องคอยแหวกสายตาอ่านยังคงฝังจมอยู่ในพื้นที่บริบท การสั่ง clearing จะช่วยกวาดล้างสัญญาณรบกวนขยะเหล่านั้นออกไปจากระบบทั้งหมดในพริบตา

กระบวนการล้างระบบนี้ไม่ได้เป็นการลบประวัติบันทึกการคุยดั้งเดิมให้หายสาบสูญไปจากเครื่องของคุณ ตัวซอฟต์แวร์ควบคุม ([harness](#harness)) ส่วนใหญ่จะยังคงจัดเก็บไฟล์ประวัติบันทึกการสนทนา (transcript) เอาไว้ในเครื่องคอมพิวเตอร์ของคุณตามปกติ คุณจึงยังคงสามารถเปิดอ่านย้อนหลังหรือสั่งดึงประวัติกลับมารันงานต่อภายหลังได้ สิ่งที่สูญสลายหายไปจริง ๆ มีเพียงแค่ตัว "สถานะทำงานชั่วคราวตรงหน้า" (working state) ของตัวเอเจนต์เท่านั้น เนื่องจากตัวโมเดลทำงานแบบไม่มีการจำสถานะ ([stateless](#stateless)) เซสชันอันใหม่แกะกล่องจึงออกสตาร์ทวิ่งโดยไม่หลงเหลือความรอบรู้ใด ๆ จากเรื่องราวในเซสชันเก่าเลยแม้แต่นิดเดียว หากภายในเซสชันอันเดิมมีข้อสรุปการตัดสินใจหรือความคืบหน้าของงานที่สำคัญ ซึ่งเซสชันอันถัดไปจำเป็นต้องใช้ประมวลผลต่อ ให้สั่งการบอก agent ให้ลงมือเขียนสรุปประเด็นจัดทำเป็นไฟล์ส่งมอบงาน ([handoff artifact](#handoff-artifact)) บันทึกทิ้งไว้บนดิสก์ก่อน จากนั้นค่อยสั่งเปิดเซสชันใหม่อันสะอาดสะอ้านแล้วหยอดไฟล์สรุปชิ้นนั้นป้อนกลับเข้าไปเป็นข้อมูลตั้งต้น

อยากให้ลองเปรียบเทียบสิ่งนี้เข้ากับกระบวนการบีบอัดประวัติบริบท ([compaction](#compaction)) ซึ่งเป็นกลยุทธ์ที่จะใช้วิธีสั่งรันโมเดลให้เขียนข้อความสรุปใจความเซสชันแล้วนำไปหยอดเป็นต้นทุนตั้งต้นในพื้นที่เซสชันใหม่อีกทีหนึ่ง การสั่ง clearing จัดว่าเป็นเครื่องมือที่ดุดันและตัดฉับตรงไปตรงมามากกว่า: ไม่มีข้อมูลใด ๆ ได้รับสิทธิ์สลับข้ามฝั่งผ่านประตูไปได้ทั้งสิ้น ซึ่งนั่นหมายความว่าเศษขยะและสัญญาณรบกวนทั้งหมดก็จะโดนกวาดทิ้งไปจนเกลี้ยงด้วยเช่นกัน

_ตัวอย่างการใช้งาน:_

"มันติดลูปวนรันคำสั่งรันระบบทดสอบแล้วพังที่จุดเดิมซ้ำไปซ้ำมาสี่รอบแล้วครับ สั่งแก้คำสั่งยังไงก็ไม่ยอมหลุดออกจากลูปนี้เลย"

"สั่งเคลียร์ประวัติล้างระบบ (`clear`) ทิ้งไปเลยครับ แล้วเปิดเซสชันใหม่อันสะอาดบริสุทธิ์ โดยป้อนส่งเข้าไปเฉพาะไฟล์ข้อกำหนดแผนงาน (plan doc) กับไฟล์โค้ดทดสอบตัวนั้นพอ ไม่มีความจำเป็นต้องไปนั่งฝืนต่อสู้กับข้อความขยะปนเปื้อนในบริบทอันเก่าแล้วครับ"

### Handoff

#### English

Transferring [agent](#agent) [context](#context) from one [session](#session) to another. The carry mechanism varies — a written [handoff artifact](#handoff-artifact), an in-memory summary ([compaction](#compaction)), and others. Distinct from [clearing](#clearing) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](#afk) run, fanning out to parallel sessions, or freeing up [context window](#context-window) room.

The receiving session starts with zero context — the [model](#model) is [stateless](#stateless), and nothing from the old session is visible to the new one. Whatever the next session needs has to be carried explicitly; everything else is gone. "No return path" is the constraint that shapes the carry: the new session can't ask the old one what it meant, so the carried material has to stand on its own.

| Mechanism        | Form                                        | Properties                                                                               |
| ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Handoff artifact | File in the [environment](#environment) | You can read and correct it before anything depends on it; reusable across many sessions |
| Compaction       | Summary in the context window               | Automatic and cheap; harder to inspect; feeds one successor                              |

The visible failure of a bad handoff is relitigation: the new session re-opens decisions the old one had settled, because the carry recorded what was decided but not why. Judge a handoff by what a session with zero context could do with it.

_Usage:_

"Planning session is getting heavy — should I just keep going?"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."

#### ไทย

กระบวนการส่งต่อและโยกย้ายข้อมูลประเด็นสาระสำคัญรวมถึง[บริบท](#context)ของ [agent](#agent) จากโครงสร้าง [session](#session) หนึ่งข้ามไปสู่เซสชันอันถัดไป โดยกลไกและช่องทางในการหอบหิ้วส่งต่อข้อมูลจะมีความแตกต่างกันไปตามการออกแบบระบบ — เช่น ส่งต่อผ่านการเขียนเขียนข้อมูลลงไฟล์ส่งมอบงานบนดิสก์ ([handoff artifact](#handoff-artifact)), ส่งต่อผ่านระบบเขียนสรุปใจความบนหน่วยความจำย่อส่วน ([compaction](#compaction)) หรือช่องทางรูปแบบอื่น ๆ กระบวนการนี้มีความแตกต่างอย่างสิ้นเชิงจากการสั่งล้างระบบประวัติเก่า ([clearing](#clearing)) เพราะการเคลียร์จะไม่มีการส่งต่อเนื้อหาข้อมูลใด ๆ ข้ามฝั่งไปเลย ส่วนเหตุผลในการเลือกทำเรื่อง handoff มีความหลากหลายมาก: ตั้งแต่การสลับเปลี่ยนบทบาทหน้าที่ของตัวเอเจนต์ (เช่น สลับจากทีมวางแผนสถาปัตยกรรม -> ข้ามไปส่งต่อให้ทีมลงมือเขียนโค้ดจริง), จังหวะเตรียมปล่อยจอรันงานข้ามคืนทิ้งไว้ยาว ๆ ([AFK](#afk)), จังหวะที่ต้องการแตกสายโซ่ออกไปรันเซสชันคู่ขนานพร้อม ๆ กัน (parallel sessions) หรือจังหวะที่ต้องการขยับเพิ่มพื้นที่ว่างภายในหน้าต่างบริบท ([context window](#context-window))

ข้อจำกัดสำคัญของกระบวนการนี้คือ "การเดินทางแบบไม่มีเส้นทางวิ่งย้อนกลับ" (no return path) เซสชันอันใหม่ปลายทางที่ทำหน้าที่รอรับไม้ต่อจะออกสตาร์ทวิ่งจากพิกัดระนาบความรู้ที่ว่างเปล่าเป็นศูนย์ เนื่องจากตัว [model](#model) ทำงานแบบไม่มีการจำสถานะ ([stateless](#stateless)) ข้อมูลประวัติศาสตร์หรือร่องรอยการระดมสมองจากเซสชันเก่าจะไม่มีวันลอยข้ามฝั่งมาให้หน้าต่างอันใหม่มองเห็นได้เลย ข้อมูลทุกสิ่งทุกอย่างที่เซสชันอันถัดไปจำเป็นต้องใช้ประมวลผลงานต่อ จึงจำเป็นต้องถูกบรรจุสะกดระบุตัวอักษรหอบข้ามฝั่งมาอย่างชัดเจนเป็นลายลักษณ์อักษร (explicit) เท่านั้น ข้อมูลส่วนที่เหลือที่ไม่ได้ถูกแพ็กแนบมาจะถือว่าสลายหายสาบสูญไปทันที และข้อจำกัดที่ห้ามวิ่งย้อนกลับมานี่เองที่เป็นตัวตีกรอบรูปทรงของข้อมูลที่ต้องแพ็กข้ามฝั่ง: เซสชันอันใหม่แกะกล่องจะไม่สามารถส่งข้อความแชตวิ่งย้อนกลับไปถามเซสชันอันเก่าได้ว่า 'เฮ้ย ประโยคนี้แกหมายความว่ายังไงนะ?' ดังนั้น ชุดข้อมูลสาระสำคัญที่ถูกหอบหิ้วข้ามฝั่งมาจึงจำเป็นต้องมีความหนักแน่น สมบูรณ์ในตัวเอง และตั้งตระหง่านอยู่ได้โดยไม่ต้องพึ่งพาข้อมูลแวดล้อมอื่น (stand on its own)

| ช่องทางกลไกส่งต่อข้อมูล          | รูปลักษณ์สถาปัตยกรรม                                                                               | คุณสมบัติทางกายภาพและประโยชน์เชิงตรรกะ                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ไฟล์ส่งมอบงาน (Handoff artifact) | บันทึกจัดเก็บในทรงของไฟล์ข้อมูลตั้งตระหง่านอยู่บนสภาพแวดล้อมระบบ ([environment](#environment)) | ตัวคุณสามารถเปิดอ่านตรวจทานและพิมพ์สกัดดัดแปลงแก้ไขข้อความให้ถูกต้องได้ล่วงหน้า ก่อนที่จะปล่อยให้ระบบส่วนอื่นนำข้อมูลชิ้นนี้ไปใช้งานต่อ และสามารถนำไฟล์ข้อความเดิมกลับมาใช้ซ้ำข้ามหลายเซสชันได้สบาย ๆ |
| การบีบอัดประวัติ (Compaction)    | ข้อความสรุปใจความย่อส่วนที่ฝังอยู่ในหน้าต่างบริบทโดยตรง                                            | ทำงานได้โดยอัตโนมัติผ่านระบบหลังบ้านและมีต้นทุนค่านำส่งที่ถูกกว่า แต่ตัวคุณจะเข้าไปตรวจสอบหรือแกะไส้ในฟังก์ชันคำอักษรได้ยากกว่า และสร้างมาเพื่อซัพพอร์ตเซสชันลูกเพียงแค่เซสชันเดียว                   |

ร่องรอยความล้มเหลวที่เด่นชัดที่สุดของการทำระบบ handoff ที่ย่ำแย่และไร้ประสิทธิภาพ คืออาการวนกลับมาถกเถียงในประเด็นเก่าที่เคยจบไปแล้ว (relitigation) เซสชันปลายทางอันใหม่แกะกล่องจะเริ่มแสดงอาการรื้อฟื้น เปิดประเด็นสงสัยและตัดสินใจพลิกแนวทางแก้ไขปัญหาที่เซสชันอันเก่าเคยสรุปตกลงตบแต่งไปจนนิ่งหมดแล้ว สาเหตุเป็นเพราะชุดข้อมูลที่หอบข้ามฝั่งมา ดันเลือกบันทึกจัดเก็บเฉพาะข้อมูลข้อสรุปสุดท้ายว่าทีมเลือกแนวทางไหน แต่กลับหลงลืมละเลยไม่ได้เขียนบันทึกกำกับแนบมาด้วยว่า 'ทำไม' ทีมถึงเลือกแนวทางนั้นและทำไมแนวทางอื่นถึงโดนปัดตก เกณฑ์การตัดสินคุณภาพของงาน handoff จึงวัดกันง่าย ๆ แค่นี้เลยครับ: ลองประเมินดูว่าเซสชันอันใหม่ปลายทางที่ออกสตาร์ทจากความรอบรู้เป็นศูนย์ (zero context) จะสามารถหยิบชุดข้อมูลส่งมอบชิ้นนี้ไปประมวลผลรันงานต่อจนสำเร็จลุล่วงได้ดีเพียงใดโดยไม่มีตัวคุณคอยบอกใบ้ข้าง ๆ

_ตัวอย่างการใช้งาน:_

"เซสชันช่วงระดมสมองวางแผนงานเริ่มมีขนาดข้อมูลประวัติที่หนาและบวมเป่งขึ้นเรื่อย ๆ จนอืดแล้วครับ ผมควรดันทุรังพิมพ์คุยและสั่งงานต่อในหน้าต่างอันเดิมนี้เลยดีไหม"

"ทำเรื่อง handoff ส่งมอบงานข้ามฝั่งเถอะครับ โดยสั่งสั่งการให้เอเจนต์เปิดเขียนรวบรวมข้อสรุปการตัดสินใจทั้งหมดสกัดออกมาเป็นไฟล์เอกสารคู่มือบันทึกทิ้งไว้บนดิสก์ชิ้นหนึ่ง จากนั้นสั่งเคลียร์ประวัติล้างหน้าต่างทิ้งซะ แล้วเปิดเซสชันอันใหม่แกะกล่องขึ้นมาเพื่อลุยขั้นตอนลงมือเขียนโค้ดจริง (implementation) โดยป้อนส่งไฟล์สรุปชิ้นนั้นให้มันอ่านเป็นคำสั่งตั้งต้นครับ"

### Primary source

#### English

A source of truth in its original form — the code, the conversation transcript, the raw log, the actual API response. Not an account of the thing; the thing. Counterpart to [secondary source](#secondary-source).

If you want to know what your codebase does, the code is the primary source. The docs, the architecture diagram, and the README are all descriptions of it — accurate when written, on their own schedule ever since. When an [agent](#agent) confidently asserts something wrong about your project, the question to ask is which source it was working from: an agent that read a doc inherits the doc's staleness; an agent that read the code is reading the current truth.

The cost is what keeps primary sources from being the default. Loading one into the [context window](#context-window) is expensive — the full file, the full transcript, every [token](#token) billed as [input](#input-tokens) and competing for [attention budget](#attention-budget). What you get for the cost is completeness: nothing has been pre-filtered by someone else's judgement about what mattered. A summary written last month can't contain the detail that turned out to matter today; the primary source still does.

Reach for the primary source when precision matters — the exact signature, the actual error, the line that throws. Much of managing [context](#context) is deciding when to pay for the primary source and when a secondary source is good enough.

_Usage:_

"The agent says the retry logic backs off exponentially, but I'm watching it hammer the endpoint."

"It read that out of the design doc. Point it at the actual retry module — work from the primary source when the behaviour matters."

#### ไทย

แหล่งข้อมูลข้อเท็จจริงในรูปลักษณ์ดั้งเดิมแท้ ๆ โดยไม่มีการผ่านกระบวนการคัดกรอง สรุปใจความ หรือดัดแปลงข้อความใด ๆ เช่น ตัวซอร์สโค้ดไฟล์จริง, บันทึกประวัติการพูดคุยดิบ (transcript), ข้อมูลบันทึกเหตุการณ์หลังบ้านเวอร์ชันดิบ (raw log) หรือข้อความตอบกลับดิบเต็มรูปแบบจากระบบ API ข้อมูลปฐมภูมิตัวนี้ไม่ใช่ข้อความบอกเล่าบรรยายสรุปความว่าสิ่งนั้นทำงานอย่างไร แต่มันคือ _ตัวตนของสิ่งนั้นจริง ๆ_ เป็นคำตรงข้ามกับแหล่งข้อมูลสรุปขั้นรอง ([Secondary source](#secondary-source))

หากคุณมีความต้องการอยากจะทราบว่าระบบคลังซอฟต์แวร์ของคุณมีตรรกะพฤติกรรมการทำงานข้างหลังอย่างไร ตัวซอร์สโค้ดไฟล์จริงคือแหล่งข้อมูลปฐมภูมิ primary source ที่ถูกต้องและน่าเชื่อถือที่สุด เอกสารคู่มือวิธีใช้งาน, แผนภาพสถาปัตยกรรมระบบ หรือแม้กระทั่งไฟล์อธิบายภาพรวมอย่าง README ล้วนมีสถานะเป็นเพียงแค่ข้อความบอกเล่าบรรยายสรุปความของสิ่งนั้นอีกทีหนึ่ง — ซึ่งข้อความอธิบายเหล่านั้นอาจจะมีความถูกต้องแม่นยำอยู่จริง ณ วินาทีที่ผู้เขียนจรดปากกาเขียนพิมพ์มันขึ้นมา และหลังจากนั้นข้อมูลเหล่านั้นก็ล้าสมัยไปตามกาลเวลาตามยถากรรมของมันเอง เมื่อใดก็ตามที่คุณพบว่าตัว [agent](#agent) เริ่มแสดงอาการทึกทักยืนยันข้อมูลโปรเจกต์แบบผิด ๆ ถูก ๆ ด้วยความมั่นใจ คำถามสำคัญที่คุณต้องรีบเปิดเช็กดูคือ ตัวมันกำลังเปิดอ่านทำความเข้าใจงานจากแหล่งข้อมูลชั้นไหนอยู่? agent ที่นั่งอ่านเฉพาะไฟล์สรุปคู่มือจะรับเอาคราบความล้าสมัยของไฟล์คู่มือชิ้นนั้นติดตัวตามมาด้วยเสมอ ส่วน agent ที่เลือกวิ่งไปเปิดอ่านจากเนื้อซอร์สโค้ดไฟล์จริงจะกำลังกุมข้อเท็จจริงล่าสุดที่เป็นความจริงสูงสุด ณ วินาทีปัจจุบันบนเครื่องคอมพิวเตอร์ของคุณ

แต่เหตุผลหลักที่ทำให้ข้อมูลปฐมภูมิชั้นต้นนี้ไม่ได้ถูกเลือกใช้งานเป็นค่าเริ่มต้นมาตรฐานของระบบตลอดเวลา เป็นเพราะต้นทุนราคาแพงลิบลิ่วที่คุณต้องจ่ายในยามใช้งาน การสั่งโหลดไฟล์ข้อมูลดิบตัวเต็มเข้าสู่หน้าต่างบริบท ([context window](#context-window)) จะผลาญพื้นที่มหาศาล — ข้อมูลทั้งไฟล์ ประวัติการคุยดิบทุกบรรทัด จะถูกส่งไปนับเป็นจำนวนหน่วยข้อมูลขาเข้า ([input tokens](#input-tokens)) เต็มเม็ดเต็มหน่วย และเข้าไปรุมแย่งชิงพื้นที่งบประมาณความสนใจของโมเดล ([attention budget](#attention-budget)) อยู่ตลอดเวลา สิ่งที่คุณจะได้แลกกลับคืนมาจากค่าใช้จ่ายราคาแพงชิ้นนี้คือ "ความสมบูรณ์แบบของเนื้อหาอย่างครบถ้วน 100%" ข้อมูลเท็จจริงทุกเศษเสี้ยวจะยังคงตั้งอยู่ครบครัน โดยไม่เคยผ่านกระบวนการคัดกรองหรือหั่นทิ้งด้วยมุมมองการตัดสินใจของมนุษย์คนอื่นเลยว่าสิ่งไหนสำคัญสิ่งไหนไร้ค่า ข้อความสรุปย่อที่ถูกเขียนขึ้นเมื่อเดือนก่อนย่อมไม่สามารถหลงเหลือรายละเอียดทางเทคนิคปลีกย่อยที่บังเอิญกลายเป็นหัวใจสำคัญในการดีบั๊กระบบในวันนี้ได้ แต่ในทางกลับกัน แหล่งข้อมูลปฐมภูมิตัวจริงจะยังคงพกพารายละเอียดชิ้นสำคัญนั้นตั้งรอให้สืบค้นอยู่เสมอ

จงเลือกหันมาพึ่งพาแหล่งข้อมูลปฐมภูมิ primary source ทันทีในยามที่ภารกิจตรงหน้าต้องการความถูกต้องแม่นยำในระดับสูงสุดและห้ามมีความผิดพลาดคลาดเคลื่อนเด็ดขาด — เช่น ตรวจสอบโครงสร้างลายเซ็นข้อกำหนดฟังก์ชันที่ถูกต้องเป๊ะ (exact signature), ข้อความรายงานข้อผิดพลาดดิบที่ระบบพ่นออกมาจริง (actual error) หรือบรรทัดคำสั่งโค้ดจุดที่สั่งโยนความล้มเหลวออกมา หัวใจสำคัญของการบริหารจัดการพื้นที่[บริบท](#context)ในแต่ละวัน สรุปเหลือเพียงการตัดสินใจเชิงวิศวกรรมข้อเดียวเท่านั้น: คือการประเมินเลือกจังหวะเวลาที่คุ้มค่าแก่การควักเงินจ่ายเพื่อดึงข้อมูลปฐมภูมิ primary source ตัวเต็มเข้ามาในหน้าต่าง และจังหวะเวลาไหนที่เลือกใช้เพียงข้อมูลสรุปขั้นรอง secondary source ก็เพียงพอต่อการรันงานแล้ว

_ตัวอย่างการใช้งาน:_

"ตัว agent มันคอยบอกยืนยันกับผมว่าตรรกะการรันระบบใหม่อีกรอบ (retry logic) หลังบ้านมีการตั้งค่าหน่วงเวลาแบบทวีคูณ (exponentially backs off) ไว้อย่างถูกต้องดีแล้ว แต่ภาพที่ผมกำลังนั่งเฝ้าดูหน้าจอมอนิเตอร์คือมันกำลังยิงคำสั่งคอมพิวเตอร์ถล่มถล่มใส่ API endpoint รัว ๆ แบบไม่มีการหยุดพักเลยครับ"

"เป็นเพราะมันแอบไปอ่านประโยคอธิบายชิ้นนั้นมาจากไฟล์เอกสารดีไซน์ระบบ (design doc) ครับ ให้สั่งการบอกให้มันหันหน้าไปเปิดเช็กที่เนื้อซอร์สโค้ดไฟล์จริงของโมดูล retry ตัวนั้นโดยตรงเลยครับ ในยามที่พฤติกรรมระบบจริงหลังบ้านเริ่มมีปัญหา จงสั่งให้ทำงานจากแหล่งข้อมูลปฐมภูมิ primary source เสมอครับ"

### Secondary source

#### English

An account of a [primary source](#primary-source), one step removed — documentation describing code, a summary describing a transcript, a report describing search results. Cheaper to load into the [context window](#context-window) than the source it describes, and lossy by construction: whoever wrote it decided what mattered, and whatever they dropped is invisible to a reader who only has the summary.

A lot of [context](#context) engineering is the manufacture of secondary sources. [Compaction](#compaction) turns the [session](#session) history into a summary that seeds the next session. A [subagent](#subagent) burns its own context on a noisy search and returns a short report. A [handoff artifact](#handoff-artifact) condenses a session's decisions into a document the next session reads. [Memory systems](#memory-system) distil what a session learned into notes. Each makes the same trade: fidelity for headroom.

Secondary sources fail in two ways. They're lossy — the compaction summary that lost the schema decision, the report that didn't mention the edge case. And they drift — the primary source changes and the account doesn't follow, so docs describe last quarter's architecture with this quarter's confidence. When an [agent](#agent) acts on a secondary source that has failed either way, it works confidently from wrong information; the fix is sending it back to the primary source.

Neither failure makes secondary sources a mistake. The context window is finite, and primary sources are expensive; without summaries, reports, and handoff documents, nothing large fits. The skill is knowing which details can survive the loss — and verifying against the primary source when one can't. A well-made secondary source carries a [context pointer](#context-pointer) back to its original — the summary that names the transcript it came from, the doc that names the file it describes — so when the account isn't enough, the reader can follow the pointer rather than work from the loss.

_Usage:_

"The handoff doc says auth is done, but the new session keeps finding broken token refresh."

"The doc's a secondary source — the last session wrote down what it believed, not what's true. Have the new session run the auth tests and trust the primary source."

#### ไทย

ข้อมูลบอกเล่าบรรยายหรือข้อความสรุปความที่ถูกสกัดดัดแปลงออกมาจากแหล่งข้อมูลปฐมภูมิ ([Primary source](#primary-source)) อีกทอดหนึ่ง ขยับห่างออกมารวมเป็นข้อมูลขั้นรอง 1 สเตป — เช่น ไฟล์เอกสารคู่มือที่เขียนอธิบายตรรกะซอร์สโค้ด, ข้อความสรุปความย่อส่วนที่บรรยายประวัติบันทึกการพูดคุยดิบ หรือไฟล์รายงานสรุปภาพรวมผลลัพธ์ที่ได้จากการกดสั่งค้นหาข้อมูล ข้อมูลสรุปขั้นรองเหล่านี้มีข้อดีคือมีต้นทุนราคาประหยัดอย่างมากในการหอบหิ้วจัดส่งเข้าสู่หน้าต่างบริบท ([context window](#context-window)) เมื่อเทียบกับขนาดของไฟล์ดิบตัวจริงที่คุณหมวดอธิบาย และตัวโครงสร้างข้อมูลชิ้นนี้จะมีความสูญเสียของรายละเอียดแฝงอยู่ข้างในตั้งแต่แรกเริ่มออกแบบ (lossy by construction): เนื่องจากผู้ใดก็ตามที่เป็นคนจรดปากกาเขียนพิมพ์ข้อความสรุปชิ้นนี้ขึ้นมา จะต้องใช้มุมมองความคิดเห็นส่วนตัวในการตัดสินใจคัดเลือกว่าประเด็นไหนสำคัญและประเด็นไหนไร้ค่า และข้อมูลรายละเอียดปลีกย่อยปลีกย่อยชิ้นใดก็ตามที่พวกเขาเลือกสั่งหั่นทิ้งไปในระหว่างสกัดความ จะกลายสภาพเป็นสิ่งล่องหนที่ไม่มีตัวตนอยู่จริงทันทีในสายตาของผู้อ่านที่ได้เห็นเพียงแค่เอกสารข้อความสรุปย่อชิ้นนี้

ศาสตร์และศิลป์เกือบทั้งหมดของการบริหารจัดการพื้นที่[บริบท](#context) (context engineering) คือการหมุนเวียนรันระบบเพื่อผลิตสร้างข้อมูลสรุปขั้นรองเหล่านี้ขึ้นมาซัพพอร์ตระบบหลังบ้าน กระบวนการบีบอัดประวัติบริบท ([Compaction](#compaction)) คือการสั่งรันโมเดลให้เขียนสรุปย่อใจความประวัติความเป็นมาของ [session](#session) เพื่อใช้เป็นเมล็ดพันธุ์ข้อมูลตั้งต้นส่งมอบต่อให้แก่เซสชันอันถัดไป ตัวระบบควบคุมย่อย ([Subagent](#subagent)) ยอมควักกระเป๋าจ่ายหน่วยโทเค็นของตัวเองจนเกลี้ยงหน้าต่างเพื่อวิ่งออกไปลุยค้นหาข้อมูลที่มีสัญญาณรบกวนหนาแน่นภายนอก แล้วแพ็กสรุปส่งคืนกลับมาให้แก่ระบบแม่ในรูปแบบของไฟล์รายงานสั้น ๆ เพียงไม่กี่บรรทัด ไฟล์ส่งมอบงาน ([Handoff artifact](#handoff-artifact)) คอยทำหน้าที่ช่วยควบแน่นข้อสรุปการตัดสินใจทั้งหมดในเซสชันเก่าให้ย่อส่วนเหลือเพียงไฟล์เอกสารแผ่นเดียวเพื่อให้เซสชันอันถัดไปเปิดอ่านสืบค้นได้ง่าย และ [ระบบความจำ](#memory-system) (memory systems) ทำหน้าที่กลั่นกรองบทเรียนความรู้ที่ได้จากเซสชันเก่าให้เหลือเพียงบันทึกย่อสั้น ๆ จัดเก็บบนดิสก์ ข้อมูลสรุปทุกรูปแบบข้างต้นนี้ล้วนยอมตกลงเลือกใช้เงื่อนไขแลกเปลี่ยนตัวเดียวกันเป๊ะ: คือยอมสละความถูกต้องแม่นยำของรายละเอียดเชิงลึก (fidelity) เพื่อแลกกลับคืนมาเป็นพื้นที่ว่างที่กว้างขวางขึ้นบนหน้าต่างบริบท (headroom)

ข้อมูลสรุปขั้นรอง secondary source มักจะแสดงอาการพังพินาศออกมาใน 2 รูปแบบหลัก รูปแบบแรกคือเกิดสภาวะสูญเสียรายละเอียดสำคัญต่องานไปในระหว่างขั้นตอนสกัดความ (lossy) — เช่น ข้อความสรุปประวัติประมวลผลประวัติบีบอัดดันหลงลืมไม่ได้เขียนบันทึกประเด็นข้อสรุปเงื่อนไขโครงสร้างข้อมูล schema ติดมาด้วย หรือไฟล์รายงานความคืบหน้าหลงลืมไม่ได้เขียนกล่าวถึงเคสปัญหาขอบเขตระบบ (edge case) ที่ละเอียดอ่อน และรูปแบบที่ 2 คือเกิดสภาวะข้อมูลบิดพริ้วล้าสมัยไปจากความเป็นจริงภายนอก (drift) — ซอร์สโค้ดไฟล์จริงที่เป็นข้อมูลปฐมภูมิภายนอกโดนผู้ใช้งานปรับแต่งแก้ตรรกะไปจนไกลแล้ว แต่ข้อความในไฟล์สรุปชิ้นรองไม่ได้ขยับปรับตัวตาม ส่งผลให้ไฟล์เอกสารคู่มือยังคงบรรยายข้อกำหนดสถาปัตยกรรมระบบของไตรมาสก่อนด้วยน้ำเสียงพฤติกรรมที่มั่นใจเต็มเปี่ยมตรงข้ามกับซอร์สโค้ดปัจจุบัน เมื่อใดก็ตามที่ [agent](#agent) เริ่มแสดงอาการทำงานผิดพลาดเนื่องจากการเชื่อฟังข้อมูลจากแหล่งสรุปขั้นรองที่พังพินาศในรูปแบบใดรูปแบบหนึ่งข้างต้น วิธีการดัดแปลงแก้ไขคือการสั่งเบรกระบบและสั่งให้มันหันหน้าเดินกลับไปหยิบข้อมูลจากแหล่งปฐมภูมิ primary source ตัวจริงมาประมวลผลแทน

อย่างไรก็ตาม ข้อบกพร่องทั้งสองฝั่งข้างต้นไม่ได้แปลว่าการเลือกใช้ข้อมูลสรุปขั้นรองเป็นเรื่องที่ผิดพลาดเชิงดีไซน์ เนื่องจากพื้นที่หน้าต่างบริบทมีขีดจำกัดจำกัดตายตัว และไฟล์ข้อมูลดิบปฐมภูมิตัวจริงก็มีราคาแพงลิบลิ่วเกินกว่าจะขนเข้ามาได้ทั้งหมด หากปราศจากความช่วยเหลือของข้อความสรุปย่อ, ไฟล์รายงาน และเอกสารส่งมอบงาน ระบบจะไม่มีพื้นที่ว่างเหลือพอให้ยัดชิ้นงานขนาดใหญ่ยักษ์ใด ๆ ลงไปได้เลย ทักษะความเชี่ยวชาญขั้นครูจึงวัดกันตรงความสามารถในการประเมินแยกแยะว่า รายละเอียดชิ้นไหนสามารถปล่อยให้ล้มหายตายจากไปในขั้นตอนสกัดความได้อย่างปลอดภัย — และคอยจัดตั้งกระบวนการรันระบบวิ่งไปตรวจสอบสอบทานเข้ากับแหล่งข้อมูลปฐมภูมิอยู่เสมอในยามที่รายละเอียดชิ้นนั้นเกิดมีความสำคัญระดับคอขวดขึ้นมา ข้อมูลสรุปขั้นรองที่ได้รับการดีไซน์มาอย่างยอดเยี่ยม มักจะมีการสลักแนบตัวชี้พิกัดบริบท ([context pointer](#context-pointer)) โยงย้อนกลับไปหาไฟล์ดิบต้นฉบับดั้งเดิมติดมาด้วยเสมอ — เช่น ข้อความสรุปประวัติการบีบอัดระบุชื่อไฟล์บันทึกการคุยดิบตัวเต็มที่มันคลอดออกมา หรือไฟล์สรุปเอกสารระบุชื่อพาธซอร์สโค้ดไฟล์จริงที่มันกำลังบรรยาย ซึ่งกลไกนี้จะช่วยเปิดโอกาสให้ในยามที่ข้อความสรุปย่อเริ่มให้รายละเอียดไม่เพียงพอต่อการรันงาน ตัว agent จะสามารถสั่งขยับสายตาเดินตามเส้นตัวชี้พิกัดย้อนกลับไปเปิดอ่านเนื้อหาไฟล์ดิบตัวจริงขึ้นมาสืบค้นดูได้ทันที โดยไม่ต้องทนฝืนทำงานรันบนความสูญเสียของข้อมูลสรุปชิ้นรองอีกต่อไป

_ตัวอย่างการใช้งาน:_

"ในเอกสารไฟล์ส่งมอบงานเขียนระบุไว้ชัดเจนดีอยู่ครับว่าระบบยืนยันสิทธิ์เข้าถึง (auth) ทำเสร็จสมบูรณ์เรียบร้อยแล้ว แต่พอเปิดเซสชันอันใหม่ขึ้นมารันงาน ตัวเอเจนต์มันยังคงวิ่งไปเจอและติดหล่มอยู่กับฟังก์ชันลูปอัปเดตโทเค็น (token refresh) ที่ยังคงพังอยู่เลยครับ"

"เพราะเอกสารชิ้นนั้นมันเป็นเพียงแค่ข้อมูลสรุปขั้นรอง (secondary source) ครับ เซสชันอันเก่ามันเขียนบันทึกทิ้งไว้ตามความเข้าใจและความเชื่อส่วนตัวของมันในวินาทีนั้น ซึ่งอาจจะไม่ตรงกับความจริงสูงสุดบนเครื่อง ให้สั่งการบอกเซสชันอันปัจจุบันสั่งรันเคสทดสอบระบบ auth ดูด่วนเลยครับ แล้วปล่อยให้มันยึดถือข้อเท็จจริงตามแหล่งข้อมูลปฐมภูมิ (primary source) ที่ได้จากผลรันจริงแทนครับ"

### Handoff artifact

#### English

A document used as the carry mechanism for a [handoff](#handoff) — written to the [environment](#environment) by one [session](#session) to be read by another. [Specs](#spec), [tickets](#ticket), and plan docs are all handoff artifacts.

The reason to write one: the [model](#model) is [stateless](#stateless), so nothing in a session survives [clearing](#clearing) it. Decisions, constraints, half-finished plans — all gone with the [context](#context) that held them. The environment persists. Writing the important state into a file moves it somewhere the next session can read it back from.

The artifact is a [secondary source](#secondary-source) — an account of the session's work, not the work itself. That's what makes it small enough to brief a fresh session, and also why it can mislead one: it records what the writing session believed, and anything it left out or got wrong is invisible to the reader. Where a claim matters, the next session should verify it against the [primary source](#primary-source) — the code, the tests — rather than inherit it.

A good artifact is written to be read into a session that has zero context. Concrete file paths rather than "the file we discussed". What was decided and why, so the next session doesn't relitigate it. What's done and what's left. It helps to tell the writing session where the artifact is headed: "write a handoff doc for a fresh session that knows nothing about this work".

The alternative carry mechanism is [compaction](#compaction), which summarises in-memory. The artifact has two advantages: it lives on disk where you can read and correct it before anything depends on it, and it can be reused — the same spec can brief five parallel sessions.

_Usage:_

"How do I split this between the planning [agent](#agent) and the implementing one?"

"Have the planner write a handoff artifact — file paths, decisions, constraints. The implementer's session opens with a pointer to the artifact and works from it as its brief."

#### ไทย

ไฟล์เอกสารข้อความที่ถูกเขียนและจัดเก็บลงสู่สภาพแวดล้อมระบบ ([environment](#environment)) เพื่อทำหน้าที่เป็นเครื่องมือและช่องทางหลักในการหอบหิ้วส่งต่อข้อมูล[บริบท](#context)ข้ามฝั่งระหว่างทำเรื่อง [ส่งมอบงานส่งต่อข้อมูล](#handoff) เพื่อให้ [session](#session) อันถัดไปสามารถเปิดอ่านข้อมูลชิ้นนี้ขึ้นมาประมวลผลต่อได้ ไฟล์เอกสารข้อกำหนดลักษณะของงาน ([Specs](#spec)), ตั๋วส่งงาน ([tickets](#ticket)) หรือไฟล์บันทึกแผนงานสถาปัตยกรรม (เช่น `plan.md`) ล้วนจัดอยู่ในกลุ่มของ handoff artifact ทั้งสิ้น

เหตุผลความจำเป็นที่ต้องลงแรงเขียนไฟล์ลักษณะนี้ขึ้นมา: เกิดจากข้อจำกัดที่ตัว [model](#model) ทำงานแบบไม่มีการจำสถานะ ([stateless](#stateless)) ส่งผลให้ร่องรอยข้อมูลความรู้ทุกสิ่งทุกอย่างที่เคยคุยค้างไว้ในเซสชันจะสลายหายวับไปทันทีที่คุณสั่งล้างระบบประวัติเก่า ([clearing](#clearing)) ข้อสรุปการตัดสินใจ, กฎเหล็กข้อบังคับ หรือแผนงานครึ่ง ๆ กลาง ๆ ที่เคยตกลงกันไว้ — ทั้งหมดจะปลิวหายไปพร้อมกับพื้นที่ข้อความบริบทอันเก่าที่เคยโอบอุ้มมันเอาไว้ แต่สภาพแวดล้อมระบบภายนอกหรือดิสก์คอมพิวเตอร์ของคุณมีคุณสมบัติที่ยังคงตั้งอยู่ถาวรไม่สูญหาย การสั่งให้เอเจนต์เปิดเขียนบันทึกสถานะและสาระสำคัญที่จำเป็นยัดเก็บลงไฟล์ข้อมูลบนดิสก์ จึงเป็นการย้ายพิกัดตำแหน่งข้อมูลไปตั้งไว้ในจุดที่ปลอดภัย เพื่อรอให้เซสชันอันถัดไปในอนาคตสามารถรันระบบเปิดอ่านข้อมูลข้อเท็จจริงชิ้นเดิมกลับเข้าสู่หัวได้อีกครั้ง

ชิ้นงานส่งมอบชิ้นนี้มีสถานะเป็นเพียงแหล่งข้อมูลสรุปขั้นรอง ([Secondary source](#secondary-source)) — มันทำหน้าที่เป็นข้อความบอกเล่าบรรยายสรุปความเกี่ยวกับชิ้นงานในเซสชันเก่า ไม่ใช่ตัวเนื้องานดิบจริง ๆ ด้วยคุณสมบัตินี้เองที่ทำให้ตัวไฟล์มีขนาดที่เล็ก กระทัดรัด และประหยัดพื้นที่พอที่จะนำไปใช้บรีฟส่งต่อคำสั่งให้แก่เซสชันอันใหม่แกะกล่องได้อย่างรวดเร็ว แต่ในขณะเดียวกัน มันก็พร้อมที่จะส่งมอบข้อมูลที่คลาดเคลื่อนชี้นำทิศทางที่ผิดให้แก่หน้าต่างอันใหม่ได้ด้วยเช่นกัน: เพราะมันทำหน้าที่บันทึกเฉพาะสิ่งที่เซสชันผู้เขียน "เชื่อและเข้าใจ" ว่าถูกต้อง ณ วินาทีนั้น และรายละเอียดปลีกย่อยใด ๆ ที่มันหลงลืมไม่ได้เขียนบันทึกกำกับทิ้งไว้ หรือเขียนอธิบายคลาดเคลื่อนไป จะกลายสภาพเป็นสิ่งล่องหนที่หน้าต่างอันใหม่ปลายทางไม่มีวันมองเห็นได้เลย ดังนั้นในประเด็นข้อกำหนดชิ้นใดที่มีความสลักสำคัญระดับคอขวด เซสชันอันใหม่ปลายทางควรจัดตั้งตรรกะวิ่งไปตรวจสอบสอบทานข้อมูลเข้ากับแหล่งข้อมูลปฐมภูมิ ([Primary source](#primary-source)) ตัวจริงบนเครื่องเสมอ — เช่น เปิดเช็กจากตัวซอร์สโค้ดไฟล์จริง หรือรันระบบทดสอบดูผลลัพธ์ — แทนที่จะก้มหน้าก้มตาเชื่อฟังรับเอาคราบความเข้าใจผิดจากไฟล์สรุปชิ้นเก่ามาสืบทอดต่อ

ไฟล์ส่งมอบงาน handoff artifact ที่มีคุณภาพสูง จะต้องได้รับการดีไซน์และเขียนขึ้นมาโดยตั้งเป้าหมายเพื่อให้ผู้อ่านที่เป็นเซสชันอันใหม่แกะกล่องที่มีระดับความรอบรู้เริ่มต้นเป็นศูนย์ (zero context) สามารถอ่านเข้าใจได้ทันที ควรเลือกระบุพิกัดพาธไฟล์ข้อมูลในเครื่องแบบตรงตัวคอนกรีตชัดเจน ดีกว่าการพิมพ์อธิบายแบบลอย ๆ ว่า "ไฟล์ข้อมูลที่เราเคยคุยกันในแชตก่อนหน้านี้" เขียนสะกดระบุลงไปให้ชัดว่าทีมสรุปตัดสินใจเลือกแนวทางไหนและเป็นเพราะเหตุผลอะไร เพื่อป้องกันไม่ให้เซสชันอันใหม่วิ่งกลับมารื้อฟื้นประเด็นสงสัยและถกเถียงในเรื่องเดิม ๆ ซ้ำซาก เขียนสรุปภาพรวมให้ชัดเจนว่ามีงานส่วนไหนบ้างที่ลงมือทำเสร็จสิ้นไปแล้ว และเหลือทาสก์งานชิ้นใดบ้างที่ยังคงค้างเติ่งอยู่ และแนวทางปฏิบัติชั้นยอดคือการพิมพ์บอกใบ้ทิศทางให้แก่เซสชันผู้เขียนรับทราบล่วงหน้าตอนสั่งงาน เช่น สั่งว่า "ช่วยเขียนเอกสารสรุปส่งมอบงานสำหรับเตรียมส่งต่อให้แก่เซสชันอันใหม่แกะกล่องที่ยังไม่รู้อะไรเลยเกี่ยวกับโปรเจกต์นี้ให้หน่อย"

ตัวเลือกกลไกในการหอบหิ้วส่งต่อข้อมูลข้ามฝั่งอีกรูปแบบหนึ่งคือการบีบอัดประวัติบริบท ([Compaction](#compaction)) ซึ่งเป็นกระบวนการสั่งสรุปใจความย่อส่วนบนหน่วยความจำชั่วคราวหลังบ้าน การเลือกสกัดข้อมูลออกมาเป็นไฟล์จัดเก็บบนดิสก์ในทรงของ handoff artifact จะพกพาข้อดีที่เหนือกว่าระบบบีบอัดออโต้หลังบ้านอยู่ 2 ประการหลัก: ประการแรกคือตัวไฟล์จะตั้งตระหง่านอยู่บนดิสก์จริงในเครื่อง ซึ่งเปิดโอกาสให้ตัวคุณสามารถเข้าไปเปิดอ่าน ตรวจทาน และพิมพ์ดัดแปลงแก้ไขข้อความข้อกำหนดให้ถูกต้องตรงใจได้ล่วงหน้า ก่อนที่จะปล่อยให้ระบบส่วนอื่นนำไฟล์นี้ไปใช้ประมวลผลงานต่อ และประการที่ 2 คือมันสามารถถูกนำกลับมาสั่งรันเปิดอ่านซ้ำได้เรื่อย ๆ — ไฟล์เอกสารข้อกำหนดสเปกงาน (spec) ชิ้นเดียว สามารถนำไปใช้บรีฟส่งต่อทาสก์งานให้แก่เซสชันคู่ขนาน 5 หน้าต่างแยกกันรันทำงานพร้อม ๆ กันได้อย่างสบาย ๆ

_ตัวอย่างการใช้งาน:_

"จะจัดสรรแบ่งส่วนแบ่งหน้าที่การทำงานระหว่าง [agent](#agent) ฝั่งวางแผนโครงสร้างระบบ กับ agent ฝั่งลงมือเขียนโค้ดปรับแต่งระบบอย่างไรดีครับ"

"สั่งการให้เอเจนต์ฝั่งวางแผนเขียนรวบรวมข้อสรุปสกัดออกมาเป็นไฟล์ handoff artifact บันทึกไว้บนดิสก์ชิ้นหนึ่งครับ — โดยสะกดระบุพาธไฟล์ข้อมูลที่เกี่ยวข้อง ข้อสรุปการตัดสินใจเชิงเทคนิค และกฎเหล็กข้อบังคับให้ครบถ้วน จากนั้นในเซสชันของเอเจนต์ฝั่งลงมือเขียนโค้ด ตอนเปิดหน้าต่างระบบขึ้นมาก็แค่หย่อนคำสั่งสั้น ๆ ให้มันวิ่งไปเกาะอ่านข้อมูลจากไฟล์สรุปชิ้นนั้นเพื่อใช้เป็นใบสั่งงานบรีฟยืนพื้นประจำตัวได้เลยครับ"

### Spec

#### English

A [handoff artifact](#handoff-artifact) describing a multi-[session](#session) piece of work — what's being built, not how each session does its share. Mutates as work progresses. Made of [tickets](#ticket).

The spec exists because sessions are disposable and big work isn't. Anything that takes more than one [context window](#context-window) of effort needs a home outside the [context](#context) — somewhere in the agent's [environment](#environment) that survives [clearing](#clearing), whether that's a file in the repo, a GitHub issue, or an issue tracker the agent can reach. The spec is that home: the goal, the constraints, the decisions made so far, and the list of tickets with their status. Any fresh session can read it and know where the work stands without inheriting the previous session's accumulated noise.

Specs come in recognisable styles, mostly inherited from how teams already write things down. A _product requirements document_ (PRD) leans toward the user-facing what and why — features, behaviour, acceptance criteria. A _design doc_ or _RFC_ leans technical — the chosen approach, the alternatives rejected, the trade-offs. At the small end, a plain `plan.md` with a checklist of tickets does the same job for a multi-session feature. The style matters less than the role: for the [agent](#agent), each of these is the same thing — the durable statement of intent it reads at the start of every session.

_Usage:_

"Should this all be one session?"

"No, write it up as a spec — break it into tickets, run each one in its own session. Trying to do the whole thing in a single context will hit the [dumb zone](#smart-zone) before you're halfway."

#### ไทย

ไฟล์ส่งมอบงาน ([Handoff artifact](#handoff-artifact)) รูปแบบหนึ่งที่ทำหน้าที่โอบอุ้มและบรรยายข้อกำหนดคุณลักษณะของโครงการชิ้นใหญ่ที่มีความยาวและขอบเขตรันต่อเนื่องข้ามผ่านข้ามหลาย ๆ [session](#session) ทำหน้าที่โฟกัสบันทึกข้อมูลว่า 'เป้าหมายหลักของสิ่งที่เรากำลังร่วมกันสร้างขึ้นมาคืออะไร' ไม่ใช่ทำหน้าที่คอยเฝ้าบอกว่าในแต่ละเซสชันย่อยจะต้องลงแรงเขียนโค้ดและรันคำสั่งเชิงกลไกอย่างไร ตัวไฟล์เอกสารข้อกำหนดนี้จะมีการขยับขยาย ปรับปรุงเนื้อหาข้อความดัดแปลงไปได้เรื่อย ๆ ตามความคืบหน้าของเนื้องานจริง และภายในจะถูกซอยย่อยออกเป็นข้อ ๆ ในทรงของตั๋วส่งงาน ([tickets](#ticket))

ไฟล์เอกสารคุณลักษณะหรือสเปกงาน (spec) ถูกนิยามและสร้างขึ้นมาเพื่อแก้ไขโจทย์ปัญหาใหญ่เชิงสถาปัตยกรรมระบบ: เนื่องจากระบบเซสชันบทสนทนาถูกออกแบบมาให้เป็นสิ่งชั่วคราวที่ใช้แล้วโยนทิ้ง (disposable) แต่ชิ้นงานหรือโครงการขนาดใหญ่ของบริษัทไม่ได้เป็นเช่นนั้น ชิ้นงานใด ๆ ก็ตามที่มีขนาดเนื้อหาและต้องใช้พลังงานประมวลผลลากยาวหนาแน่นเกินกว่าขีดจำกัดสูงสุดของพื้นที่หน้าต่างบริบท ([context window](#context-window)) เพียงกล่องเดียว จำเป็นต้องมีบ้านพักพิงถาวรตั้งตระหง่านอยู่ภายนอกตัวพื้นที่หน้าต่างความรู้ ([context](#context)) — ซึ่งก็คือการจัดเก็บเป็นไฟล์ข้อความแผ่นหนึ่งทิ้งไว้บนสภาพแวดล้อมระบบ ([environment](#environment)) ของตัวเอเจนต์เพื่อให้คงอยู่รอดปลอดภัยข้ามผ่านวงจรกดล้างประวัติเก่า ([clearing](#clearing)) ไม่ว่าจะเป็นไฟล์ข้อความที่เซฟทิ้งไว้ในคลังโปรเจกต์ (เช่น ไฟล์ `plan.md`), ข้อความบนหน้า GitHub issue หรือข้อมูลทาสก์งานบนระบบจัดการบอร์ดทำงานภายนอกที่เอเจนต์สามารถเอื้อมมือไปสืบค้นถึง ตัวไฟล์ spec คือสถานที่ทำหน้าที่เป็นบ้านพักพิงถาวรหลังนั้น: คอยรวบรวมเป้าหมายสูงสุดของโครงการ, กฎเหล็กและเงื่อนไขข้อบังคับต่าง ๆ, ข้อสรุปเชิงเทคนิคที่ทีมเคยตกลงร่วมกันมาทั้งหมดจนถึงปัจจุบัน รวมถึงตารางรายชื่อตั๋วส่งงานย่อย ๆ พร้อมสถานะความคืบหน้า (เสร็จสิ้น / กำลังทำ / ค้างส่ง) เซสชันอันใหม่แกะกล่องทุก ๆ หน้าต่างที่ถูกเปิดขึ้นมาในอนาคตจะสามารถวิ่งเข้ามาเกาะอ่านไฟล์นี้เพื่ออัปเดตรับทราบสถานะล่าสุดของโครงการได้อย่างรวดเร็ว โดยไม่จำเป็นต้องแบกรับสัญญาณรบกวนขยะที่สะสมหลงเหลือมาจากประวัติการคุยของเซสชันเก่าก่อนหน้าเลยแม้แต่นิดเดียว

รูปลักษณ์และสไตล์การเขียนพิมพ์เอกสาร spec มักจะลอกเลียนแบบทรงโครงสร้างมาจากรูปแบบที่บรรดาทีมวิศวกรซอฟต์แวร์นิยมใช้งานกันอยู่แล้วในชีวิตประจำวัน ตัวอย่างเช่น เขียนในทรงของ _เอกสารข้อกำหนดความต้องการผลิตภัณฑ์_ (Product Requirements Document หรือ PRD) ซึ่งจะเอนเอียงไปทางมุมมองฝั่งผู้ใช้งานว่าระบบต้องทำอะไรได้บ้างและทำไปเพื่ออะไร — รายชื่อฟีเจอร์พฤติกรรม, รูปแบบขั้นตอนปฏิบัติของผู้ใช้ และเกณฑ์การยอมรับผลงาน (acceptance criteria) หรือเขียนในทรงของ _เอกสารการออกแบบระบบ_ (Design Doc หรือ RFC) ซึ่งจะเอนเอียงไปทางมุมมองฝั่งวิศวกรรมเทคนิคเชิงลึก — แนวทางการดีไซน์ระบบที่ทีมเลือกใช้, รายชื่อแนวทางทางเลือกอื่น ๆ ที่เคยโดนทีมปัดตกพร้อมเหตุผลประกอบ รวมถึงการประเมินเงื่อนไขข้อดีข้อเสียเชิงแลกเปลี่ยน สำหรับโครงการขนาดเล็กย่อม ๆ การเขียนเป็นไฟล์ข้อความธรรมดาง่าย ๆ อย่าง `plan.md` พร้อมกล่องเช็กลิสต์รายชื่อทาสก์ทาสก์งานย่อย ๆ ก็สามารถทำหน้าที่ตอบโจทย์ข้อเดียวกันนี้ให้แก่โครงการย่อยข้ามเซสชันได้ดีเยี่ยมไม่ต่างกัน ตัวสไตล์รูปลักษณ์ภายนอกจึงมีความสำคัญน้อยกว่าบทบาทหน้าที่เชิงตรรกะหลังบ้านของมัน: สำหรับตัว [agent](#agent) แล้ว เอกสารทุกสไตล์ข้างต้นทำหน้าที่เป็นสิ่งเดียวกันทั้งหมด — มันคือบันทึกข้อความคำสั่งเป้าหมายโครงการที่มีความทนทานถาวร (durable statement of intent) ที่ตัวมันจำเป็นต้องเปิดอ่านทำความเข้าใจเป็นสิ่งแรกสุดในตอนเริ่มต้นเปิดใช้งานทุก ๆ เซสชัน

_ตัวอย่างการใช้งาน:_

"ชิ้นงานปรับปรุงระบบและโยกย้ายฐานข้อมูลขนาดใหญ่รอบนี้ ผมควรสั่งให้มันรันและคุยจบเบ็ดเสร็จภายในเซสชันอันเดียวต่อเนื่องยาว ๆ ไปเลยดีไหมครับ"

"ไม่ควรเด็ดขาดครับ ให้แยกเขียนรวบรวมข้อกำหนดสเปกงานจัดทำเป็นเอกสาร spec ขึ้นมาบนดิสก์ก่อนครับ — จากนั้นหั่นซอยเป้าหมายงานแยกออกเป็นตั๋วส่งงานย่อย ๆ (tickets) แล้วสั่งเปิดเซสชันอันใหม่แยกต่างหากเพื่อรันประมวลผลตั๋วงานทีละใบ การฝืนทนรันเนื้อหาโครงการทั้งหมดรวมกันภายในหน้าต่างบริบทอันเดียว จะส่งผลให้ระบบวิ่งหน้าตั้งไปชนกำแพง [โซนเอ๋อ](#smart-zone) ตั้งแต่เนื้องานยังดำเนินไปได้ไม่ถึงครึ่งทางเลยครับ"

### Ticket

#### English

A [handoff artifact](#handoff-artifact) scoping one [session](#session) of work. Stands alone, or hangs off a [spec](#spec) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

The defining constraint is the size: one session. A ticket should be completable before the session drifts out of the [smart zone](#smart-zone) — and that constraint is testable. If sessions on your tickets routinely degrade before the work is done, the tickets are too big; split them. If each session spends most of its [context](#context) on setup before doing five minutes of work, they're too small; merge them.

A good ticket is written for a reader with no other context. The goal, the acceptance criteria, and [context pointers](#context-pointer) to the relevant files and decisions — enough that the session can start working without re-deriving what the last one knew.

The dependency graph is also what unlocks parallelism. Independent tickets — the leaves of the graph — can each run in their own session at the same time. This is an effective way of running multiple agents at once.

_Usage:_

"Where do I start on the migration spec?"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."

#### ไทย

ไฟล์ส่งมอบงาน ([Handoff artifact](#handoff-artifact)) รูปแบบย่อยที่มีหน้าที่คอยตีกรอบและจำกัดขอบเขตงาน (scope) ของภารกิจให้สามารถรันประมวลผลและจบงานลงได้อย่างสมบูรณ์แบบภายในตัวโครงสร้าง [session](#session) เดียว สามารถตั้งตระหง่านอยู่ได้ด้วยตัวเองเป็นเอกเทศ หรือจะเข้าไปผูกมัดร้อยเรียงอยู่ใต้ร่มเงาของไฟล์เอกสารข้อกำหนดโครงการชิ้นแม่ ([Spec](#spec)) ในฐานะลูกเรือย่อยตัวหนึ่งก็ได้ ตั๋วส่งงานหรือทาสก์งานย่อย (tickets) เหล่านี้สามารถตั้งเงื่อนไขบล็อกการทำงานซึ่งกันและกันได้ (เช่น ตั๋วใบนี้ห้ามรันจนกว่าตั๋วใบข้าง ๆ จะทำเสร็จสิ้น) ส่งผลให้ลำดับและจังหวะก้าวเดินของงานจะถูกคำนวณและคลี่คลายออกมาจากโครงสร้างกราฟความเชื่อมโยงผูกมัดของระบบ (dependency graph) แทนที่จะวิ่งตามแผนภาพตารางเวลาแบบเส้นตรงทื่อ ๆ ดั้งเดิม

ข้อจำกัดข้อบังคับหลักที่ทรงพลังที่สุดในการออกแบบตั๋วส่งงานคือเรื่องของขนาดความหนาของงาน: คือต้องมีขนาดที่พอดีสำหรับจบงานได้ภายใน 1 เซสชันถ้วน ตั๋วส่งงานที่ดีควรได้รับการคำนวณมาแล้วว่าตัวเอเจนต์จะสามารถรันประมวลผลและส่งมอบชิ้นงานได้สำเร็จลุล่วงล่วงหน้า ก่อนที่ตัวระบบประวัติคุยสะสมจะเริ่มเสื่อมถอยและหลุดลอยออกนอกพื้นที่ [โซนฉลาด](#smart-zone) (smart zone) — ซึ่งข้อจำกัดข้อนี้สามารถถูกนำมาใช้ตั้งเกณฑ์ตรวจสอบสอบทานระบบในชีวิตทำงานจริงได้อย่างแม่นยำ หากคุณพบว่าเซสชันบทสนทนาในเครื่องที่รันตามตั๋วส่งงานของคุณ มักจะเกิดอาการเบลอ เป๋ และหลุดโฟกัสอยู่เป็นประจำก่อนที่เนื้องานจะเสร็จสิ้น นั่นคือสัญญาณเตือนเชิงวิศวกรรมว่าขนาดของตั๋วส่งงานใบนั้นมีความใหญ่โตหนาแน่นเกินไปแล้ว ให้รีบสั่งหั่นซอยย่อยตั๋วออกเป็นใบเล็ก ๆ เพิ่มเติมทันที ในทางกลับกัน หากคุณพบว่าในแต่ละเซสชันต้องเสียเวลาผลาญหน่วยพื้นที่บริบท ([Context](#context)) ส่วนใหญ่ไปกับขั้นตอนจัดเตรียมสเปกตั้งค่าระบบ (setup) เพียงเพื่อลงแรงเขียนโค้ดจริงสั้น ๆ แค่ 5 นาทีขยับปิดงาน นั่นแปลว่าตั๋วส่งงานมีขนาดที่กระจิริดเกินไป ให้สั่งควบรวมตั๋วงานใบย่อย ๆ เหล่านั้นเข้าด้วยกันเพื่อให้คุ้มต้นทุนยืนพื้นส่วนหัว

ตั๋วส่งงานย่อยที่มีคุณภาพสูง จะต้องได้รับการเรียบเรียงเขียนอธิบายเนื้อหาขึ้นมาโดยตั้งเป้าหมายเพื่อให้ผู้อ่านปลายทางที่ไม่มีระดับความรอบรู้แวดล้อมอื่นเลยหลงเหลืออยู่ สามารถอ่านแล้วเข้าใจภารกิจได้ทันที ภายในควรบรรจุข้อความระบุเป้าหมายสูงสุดของทาสก์งานชิ้นนั้น, เกณฑ์การยอมรับและตรวจรับมอบผลงาน (acceptance criteria) รวมถึงการหย่อนตัวชี้พิกัดบริบท ([context pointers](#context-pointer)) โยงไปยังพาธไฟล์ข้อมูลจริงบนเครื่องและไฟล์ข้อสรุปเทคนิคที่เกี่ยวข้อง — บรรจุเนื้อหาข้อมูลให้เพียงพอเพื่อให้เซสชันอันใหม่สามารถเปิดฉากเริ่มลงมือลุยงานได้ทันที โดยไม่จำเป็นต้องเสียเวลาไปนั่งรันระบบสืบค้นค้นหาประวัติคำสั่งเก่าเพื่อแกะความเข้าใจย้อนหลังว่าเซสชันอันก่อนหน้านี้เคยรู้อะไรมาบ้าง

โครงสร้างกราฟความเชื่อมโยงผูกมัด (dependency graph) ของบรรดาตั๋วส่งงานย่อยเหล่านี้ ยังเป็นกุญแจสำคัญที่ช่วยปลดล็อกระบบการทำงานแบบคู่ขนาน (parallelism) ให้แก่โครงการ ตั๋วส่งงานใบใดที่มีคุณสมบัติเป็นอิสระต่อกันและกัน — ซึ่งก็คือบรรดาตั๋วใบที่อยู่บริเวณปลายใบของโครงสร้างกราฟความเชื่อมโยง — จะสามารถถูกสั่งเปิดรันแยกหน้าต่างประมวลผลภายในเซสชันของตัวเองไปพร้อม ๆ กันในจังหวะเวลาเดียวกันได้ทันที ซึ่งจัดว่าเป็นแนวทางปฏิบัติที่มีประสิทธิภาพสูงสุดในการสั่งการกองทัพเอเจนต์หลาย ๆ ตัวให้รุมทำงานทลายโปรเจกต์พร้อมกัน

_ตัวอย่างการใช้งาน:_

"ในโปรเจกต์โยกย้ายระบบและการจัดการฐานข้อมูล spec ชิ้นใหญ่ตัวนี้ ผมควรเริ่มสั่งงานและเปิดหน้าต่างเซสชันคุยตรงจุดไหนก่อนดีครับ"

"เปิดไล่ดูโครงสร้างกราฟความเชื่อมโยงผูกมัดของตั๋วส่งงาน (ticket graph) สิครับ — ในแผนระบุชัดเจนว่าทาสก์งานปรับเปลี่ยนโครงสร้างข้อมูล schema กำลังบล็อกคำสั่งรันระบบถ่ายโอนข้อมูล (backfill) อยู่ และคำสั่งถ่ายโอนข้อมูลก็กำลังบล็อกคำสั่งสลับเปลี่ยนระบบ API หลักหลังบ้านอยู่ ให้เลือกหยิบตั๋วส่งงานใบที่เป็นตั๋วปลายใบอิสระ (leaf node) ชิ้นแรกสุดขึ้นมา สั่งเปิดหน้าต่างเซสชันอันใหม่แล้วลุยงานบนตั๋วใบนั้นได้เลยครับ"

### Compaction

#### English

A [handoff](#handoff) done in-memory: the previous [session](#session)'s history is summarised, and the summary seeds a fresh session. Lossy by design: the transcript is a [primary source](#primary-source), the summary a [secondary source](#secondary-source) — detail traded for headroom. Triggered manually by the user, or automatically via [autocompact](#autocompact).

The mechanism: the [context window](#context-window) is finite, and a long session fills it — every [tool result](#tool-result), every file read, every wrong turn stays in history. When it gets heavy, the [harness](#harness) asks the [model](#model) to summarise the session, throws the original history away, and seeds a fresh session with the summary. Whatever didn't make it into the summary is gone from the context. Some harnesses soften this by keeping the old transcript on disk and leaving a [context pointer](#context-pointer) to it in the summary — the secondary source links back to its primary source, so a detail the summary lost can be recovered by re-reading the original.

The summary is written by the model, so it can be prompted. "Preserve the schema decisions" makes the generated artifact more deliberate. Timing matters too — compact at a phase boundary, after the plan is settled, not mid-task.

Contrast with [clearing](#clearing), which drops everything and starts cold: compaction tries to carry the essentials across; clearing bets they're already written down somewhere better.

_Usage:_

"[Context](#context)'s getting heavy and I still have the test pass to do."

"Compact before you start — write what must survive into the summary prompt so the new session keeps the schema decisions and drops the exploration."

#### ไทย

กระบวนการทำเรื่อง [ส่งมอบงานส่งต่อข้อมูล](#handoff) ในรูปแบบดิจิทัลบนหน่วยความจำชั่วคราวหลังบ้าน (in-memory): โดยประวัติความเป็นมาและเนื้อหาบทสนทนาทั้งหมดของ [session](#session) เก่าก่อนหน้าจะถูกจับส่งไปประมวลผลเขียนสรุปใจความย่อส่วน และข้อความสรุปย่อชิ้นนั้นจะถูกนำไปหยอดเป็นเมล็ดพันธุ์คำสั่งตั้งต้น (seed) ให้แก่พื้นที่เซสชันอันใหม่แกะกล่อง กระบวนการนี้จัดว่ามีความสูญเสียของรายละเอียดแฝงอยู่ข้างในตั้งแต่แรกเริ่มดีไซน์ (lossy by design): เพราะตัวประวัติประมวลผลดิบเต็มรูปแบบ (transcript) มีสถานะเป็นแหล่งข้อมูลปฐมภูมิ ([Primary source](#primary-source)) ส่วนข้อความสรุปย่อชิ้นใหม่มีสถานะเป็นแหล่งข้อมูลสรุปขั้นรอง ([Secondary source](#secondary-source)) — มันคือเงื่อนไขการยอมสละรายละเอียดปลีกย่อยในประวัติศาสตร์เพื่อแลกกลับคืนมาเป็นพื้นที่ว่างบนหน้าต่างความรู้ กระบวนการนี้สามารถสั่งรันได้ด้วยตัวเองแมนนวลโดยผู้ใช้งาน หรือปล่อยให้ระบบซอฟต์แวร์ควบคุมรันออโต้หลังบ้านผ่านฟังก์ชัน [ระบบบีบอัดบริบทอัตโนมัติ](#autocompact)

กลไกตรรกะเบื้องหลัง: เนื่องจากพื้นที่หน้าต่างบริบท ([context window](#context-window)) มีขนาดที่จำกัดตายตัว และเซสชันที่เปิดรันลากยาวนานจะส่งผลให้ข้อมูลความรู้ไหลเข้ามากองจนเบียดแน่นเต็มกล่อง — ทุก ๆ ผลลัพธ์จากเครื่องมือที่เคยเรียกใช้งาน ([tool result](#tool-result)), ทุก ๆ ไฟล์ข้อมูลที่เคยเปิดอ่าน หรือร่องรอยความล้มเหลวจากการลองผิดลองถูกจะยังคงฝังจมและกินพื้นที่อยู่ภายในประวัติการคุยตลอดเวลา เมื่อใดก็ตามที่ข้อมูลสะสมเริ่มมีน้ำหนักหนาแน่นและอืดเกินไป ตัวระบบควบคุม ([harness](#harness)) จะทำหน้าที่ส่งข้อความไปสั่งสั่งการให้ตัว [model](#model) ช่วยเขียนสรุปใจความสาระสำคัญของเซสชันที่ผ่านมาทั้งหมดให้หน่อย จากนั้นระบบจะสั่งโยนข้อความประวัติการคุยดิบอันเก่าทิ้งไปทั้งหมด แล้วหันไปออกสตาร์ทเปิดเซสชันอันใหม่แกะกล่องโดยนำข้อความสรุปย่อชิ้นนั้นป้อนเข้าไปเป็นข้อมูลตั้งต้น ข้อมูลรายละเอียดปลีกย่อยใด ๆ ที่ไม่ได้ถูกคัดเลือกและเรียบเรียงระบุอยู่ในข้อความสรุปย่อชิ้นนั้น จะถือว่าสลายหายสาบสูญไปจากพื้นที่รับรู้ของโมเดลทันที ซอฟต์แวร์ harness ยุคใหม่บางตัวมีการลดความแข็งกระด้างตรงจุดนี้ลง โดยใช้วิธีเซฟจัดเก็บไฟล์ประวัติบันทึกการคุยดิบ (transcript) ตัวเต็มเอาไว้บนดิสก์จริงในเครื่องคอมพิวเตอร์ของคุณ แล้วแอบสลักแนบตัวชี้พิกัดบริบท ([context pointer](#context-pointer)) ลิงก์โยงย้อนกลับไปหาไฟล์ดิบตัวจริงฝังไว้ในข้อความสรุปย่อ — เปลี่ยนรูปแบบจากข้อมูลสรุปขั้นรองให้มีเส้นสายโยงกลับไปหาแหล่งข้อมูลปฐมภูมิ เพื่อช่วยเปิดโอกาสให้ในยามที่ข้อความสรุปย่อหลงลืมหรือทำรายละเอียดปลีกย่อยบางชิ้นตกหล่นไป ตัวระบบจะสามารถเดินตามตัวชี้พิกัดย้อนกลับไปเปิดกวาดอ่านเนื้อหาจากไฟล์ประวัติบันทึกดิบตัวจริงกลับเข้ามาในหัวได้อีกครั้ง

เนื่องจากตัวข้อความสรุปย่อชิ้นนี้ถูกเขียนและเรียบเรียงขึ้นโดยตัวโมเดลเอง คุณจึงสามารถพิมพ์ข้อความสำทับดัดแปลงป้อนความต้องการ (prompt) สั่งควบคุมทิศทางในการเขียนสรุปของมันได้ล่วงหน้า การพิมพ์ประโยคคำสั่งกำกับไว้ เช่น "จงคัดเลือกและคงรักษาข้อมูลข้อสรุปเงื่อนไขสถาปัตยกรรมโครงสร้างฐานข้อมูล schema เอาไว้ให้ครบถ้วนห้ามขาดตกเด็ดขาด" จะช่วยให้ไฟล์สรุปที่เจเนอเรตขึ้นมามีความเฉียบคมและตอบโจทย์เป้าหมายโครงการของคุณได้อย่างแม่นยำยิ่งขึ้น และจังหวะเวลาในการสั่งรันระบบบีบอัดก็มีความสำคัญระดับคอขวด — ควรเลือกสั่งบีบอัดข้อมูลในช่วงพิกัดรอยต่อข้ามเฟสงานที่เหมาะสม (phase boundary) เช่น หลังจากที่ขั้นตอนตบแต่งแผนงานเสร็จสิ้นนิ่งหมดแล้ว ห้ามสั่งรันระบบบีบอัดออโต้แบบสุ่มสี่สุ่มห้าในระหว่างที่ภารกิจปรับแก้โค้ดกำลังดำเนินค้างเติ่งอยู่กลางคัน

จงเปรียบเทียบสิ่งนี้เข้ากับกระบวนการล้างระบบประวัติเก่า ([clearing](#clearing)) ซึ่งเป็นกลยุทธ์ที่จะใช้วิธีสั่งตัดฉับโยนสถานะเก่าทิ้งทั้งหมดและออกสตาร์ทระบบจากความว่างเปล่าเป็นศูนย์: กระบวนการบีบอัดประวัติบริบท compaction จะพยายามลงแรงหอบหิ้วสกัดเอาสาระสำคัญที่จำเป็นข้ามฝั่งประตูไปซัพพอร์ตหน้าต่างอันใหม่ด้วย ส่วนการเคลียร์จะเลือกใช้ความเชื่อมั่นว่าข้อมูลที่สำคัญจริง ๆ ควรจะถูกเขียนบันทึกจัดเก็บไว้ในพื้นที่จุดอื่นบนดิสก์ที่ยอดเยี่ยมกว่าประวัติแชตเรียบร้อยแล้ว

_ตัวอย่างการใช้งาน:_

"พื้นที่ข้อมูลความรู้ ([Context](#context)) เริ่มหนาและบวมเป่งจนอืดมากแล้วครับ แต่ผมยังมีทาสก์งานย่อยส่วนของการเขียนเคสทดสอบรันระบบให้ผ่าน (test pass) ค้างอยู่อีกชิ้นหนึ่งที่ต้องสะสางให้เสร็จ"

"สั่งรันระบบบีบอัดข้อมูลประวัติชิ้นงาน (`compact`) ก่อนจะเริ่มต้นลุยทาสก์ถัดไปเลยครับ — โดยพิมพ์คำสั่งป้อนระบุรายละเอียดลงไปในระบบคำสั่งสรุปใจความ (summary prompt) สำทับไว้เลยว่ามีประเด็นข้อสรุปเงื่อนไขดีไซน์โครงสร้างข้อมูล schema ตัวไหนบ้างที่ห้ามทำตกหล่นเด็ดขาด เพื่อบีบให้เซสชันอันใหม่แกะกล่องยอมคงรักษาข้อสรุปสถาปัตยกรรมที่สำคัญเอาไว้ครบถ้วน และสั่งโยนเศษข้อมูลขยะส่วนประวัติการลองผิดลองถูกทิ้งไปให้หมดครับ"

### Autocompact

#### English

[Compaction](#compaction) triggered automatically by the [harness](#harness) when the [context window](#context-window) approaches full.

The harness watches how full the context window is. When it crosses a threshold — often around 80% — it pauses, asks the [model](#model) to summarise the [session](#session) so far, and seeds a fresh session with the summary. Work then continues as if nothing happened.

Except something did happen. Compaction is lossy, and autocompact is lossy at a moment you didn't choose. A manual compact happens at a phase boundary, when you can tell the model what to preserve. Autocompact fires mid-task, whenever the threshold is hit — possibly halfway through a refactor, with the summary deciding for itself which of your decisions were worth keeping. The classic symptom: the [agent](#agent) carries on confidently but has quietly forgotten a constraint you established an hour ago, and you only notice when its work starts contradicting it.

The defence is to not let it fire. Watch the context indicator and compact manually at a natural boundary, or write decisions into a plan doc or [handoff artifact](#handoff-artifact) on disk, where no summary can lose them. Most harnesses also let you customise the buffer — moving the threshold earlier or later, or turning autocompact off entirely — so you can tune how much headroom you keep before it fires.

_Usage:_

"It doesn't seem to remember what we decided about the schema earlier."

"Autocompact fired between [turns](#turn) — the early decisions got summarised and we must have lost something. Reload the plan doc, or compact manually next time so you control what gets kept."

#### ไทย

กระบวนการบีบอัดสรุปข้อมูลประวัติบริบท ([Compaction](#compaction)) ที่ถูกส่งคำสั่งและสั่งรันระบบโดยอัตโนมัติผ่านทางตัวซอฟต์แวร์ควบคุม ([harness](#harness)) ในวินาทีที่พื้นที่ความหนาแน่นภายในหน้าต่างบริบท ([context window](#context-window)) วิ่งเข้าไปใกล้จุดเพดานขีดจำกัดสูงสุดที่ระบบรองรับ

ตัวซอฟต์แวร์ harness จะทำหน้าที่เป็นผู้เฝ้าจับตาดูระดับความหนาแน่นตัวเลขความจุของหน้าต่างบริบทอยู่ตลอดเวลา และเมื่อใดก็ตามที่ปริมาณข้อมูลวิ่งข้ามเส้นพิกัดขีดจำกัดที่ตั้งไว้ (threshold) — ซึ่งมักจะนิยมตั้งค่ามาตรฐานไว้ที่ระดับประมาณ 80% ของความจุสูงสุด — ตัวซอฟต์แวร์จะทำการกดปุ่มสั่งหยุดการทำงานตรงหน้าชั่วคราวทันที จากนั้นส่งข้อความไปสั่งสั่งการให้ตัว [model](#model) ช่วยเขียนสรุปใจความย่อส่วนของ [session](#session) ตั้งแต่เริ่มต้นมาจนถึงปัจจุบันให้เสร็จสิ้น แล้วนำข้อความสรุปย่อชิ้นนั้นไปหยอดเป็นเมล็ดพันธุ์ข้อมูลตั้งต้นเปิดเซสชันอันใหม่แกะกล่องขึ้นมาแทน หลังจากนั้นระบบจะสั่งปล่อยจอรันงานเดินหน้าต่อทันที ราวกับว่าไม่มีสิ่งใดเกิดขึ้นเบื้องหลังหน้าจอเลย

แต่ความจริงแล้วมีเหตุการณ์สำคัญเกิดขึ้นหลังบ้านเรียบร้อยแล้ว กระบวนการบีบอัดข้อมูลประวัติศาสตร์จัดว่าเป็นระบบที่มีความสูญเสียของรายละเอียดแฝงอยู่ข้างใน (lossy) และระบบรันออโต้ autocompact คือการบังคับให้เกิดความสูญเสียข้อมูลชิ้นสำคัญไปในวินาทีและจังหวะเวลาที่ตัวคุณไม่ได้เป็นคนเลือกสรรเอง การกดสั่งบีบอัดข้อมูลด้วยตัวเองแมนนวล (manual compact) จะถูกทำขึ้นตรงพิกัดรอยต่อข้ามเฟสงานที่สมเหตุสมผล ซึ่งเป็นจังหวะที่คุณมีโอกาสเปิดกล่องข้อความพิมพ์กำกับสั่งการบอกโมเดลได้ล่วงหน้าว่ามีประเด็นข้อกำหนดชิ้นไหนที่ห้ามทำตกหล่นเด็ดขาด แต่ระบบรันออโต้ autocompact จะแผลงฤทธิ์สั่งตัดฉับทันทีข้ามหัวคุณในวินาทีใดก็ได้ที่ตัวเลขความจุวิ่งไปชนเส้นกั้นกั้นสิทธิ์ — บ่อยครั้งมันมักจะเลือกยิงคำสั่งกลางคันในระหว่างที่ภารกิจปรับแก้โค้ดชิ้นละเอียดอ่อน (refactor) กำลังดำเนินค้างเติ่งอยู่ครึ่ง ๆ กลาง ๆ ส่งผลให้ข้อความสรุปย่อยื่นสิทธิ์ให้ตัวโมเดลคิดค้นและตัดสินใจเอาเองตามยถากรรมว่ามีข้อสรุปข้อไหนของคุณบ้างที่ควรค่าแก่การจำต่อและข้อไหนที่ควรสั่งโยนทิ้งลงถังขยะ อาการความเสียหายยอดนิยมที่พบเจอได้เป็นประจำ: คือตัว [agent](#agent) จะยังคงก้มหน้าก้มตาทำงานเขียนโค้ดต่อด้วยน้ำเสียงพฤติกรรมที่ดูมั่นใจเป็นมืออาชีพเต็มเปี่ยมตามปกติ แต่ความจริงข้างในมันได้แอบหลงลืมและทำกฎเหล็กเงื่อนไขข้อบังคับสำคัญที่คุณเคยสำทับสั่งตักเตือนไว้เมื่อชั่วโมงก่อนตกหล่นหายสาบสูญไปเรียบร้อยแล้ว และคุณจะระลึกรู้ตัวอีกทีก็ตอนที่เห็นเนื้องานซอร์สโค้ดปลายทางเริ่มแสดงพฤติกรรมขัดแย้งกับสเปกข้อกำหนดที่ทีมตกลงกันไว้

เลเยอร์แนวทางการป้องกันและรับมือกับปัญหานี้คือการห้ามปล่อยให้ระบบรันออโต้ตัวนี้ถูกยิงคำสั่งขึ้นมาทำงานข้ามหัวคุณ คอยหมั่นเปิดสายตาเฝ้าสังเกตแถบตัวเลขแสดงระดับความจุของบริบทอยู่เสมอ และชิงลงมือสั่งกดบีบอัดข้อมูลด้วยตัวเองแมนนวลตรงพิกัดจังหวะที่เป็นรอยต่อเฟสงานตามธรรมชาติ หรือเลือกใช้วิธีเปิดเขียนจัดเก็บข้อสรุปการตัดสินใจและกฎเกณฑ์สำคัญลงสู่ไฟล์ข้อกำหนดแผนงานบนดิสก์จริงในเครื่องคอมพิวเตอร์ของคุณ หรือจัดทำเป็นไฟล์ส่งมอบงาน ([handoff artifact](#handoff-artifact)) บันทึกทิ้งไว้บนดิสก์ ซึ่งเป็นพื้นที่ปลอดภัยที่ไม่มีระบบซอฟต์แวร์เขียนสรุปความย่อส่วนตัวไหนหลังบ้านจะสามารถเอื้อมมือมาทำข้อมูลสูญหายได้ นอกจากนี้ ซอฟต์แวร์ harness ส่วนใหญ่เปิดโอกาสให้คุณสามารถเข้าไปแก้ค่าปรับแต่งขนาดพื้นที่หน่วยความจำสำรองปลอดภัย (buffer) ได้ตามใจชอบ — โดยสามารถขยับปรับเส้นพิกัด threshold ให้ส่งสัญญาณเร็วขึ้นหรือช้าลง หรือจะเลือกสั่งกดปิดฟังก์ชันรันออโต้ autocompact นี้ทิ้งไปเลยอย่างถาวรก็ได้ เพื่อให้คุณสามารถคุมพวงมาลัยบริหารจัดการพื้นที่ว่าง (headroom) ที่หลงเหลืออยู่ได้ตรงตามเป้าหมายงบประมาณของคุณมากที่สุด

_ตัวอย่างการใช้งาน:_

"ตัวระบบมันเริ่มแสดงอาการแปลก ๆ พิมพ์ตอบเหมือนหลงลืมข้อสรุปที่ทีมเราเคยคุยตกลงกันไว้เกี่ยวกับเงื่อนไขดีไซน์โครงสร้างข้อมูล schema ในช่วงต้นเซสชันไปหมดแล้วครับ"

"ระบบรันออโต้ autocompact แอบยิงคำสั่งทำงานเงียบ ๆ หลังบ้านในระหว่างช่วงรอยต่อรันข้ามรอบสนทนา ([turns](#turn)) เรียบร้อยแล้วครับ — ข้อสรุปการตัดสินใจในช่วงแรกเลยโดนรวบรัดเขียนสรุปย่อความและเนื้อหาปลีกย่อยที่สำคัญน่าจะร่วงหล่นหายไปในขั้นตอนนั้นเรียบร้อยแล้ว ให้สั่งโหลดข้อมูลจากไฟล์แผนงาน (plan doc) ป้อนกลับเข้าไปในระบบใหม่อีกรอบครับ และในภารกิจรอบหน้าแนะนำให้ชิงกดสั่งบีบอัดข้อมูลด้วยตัวเองแมนนวลล่วงหน้า เพื่อให้คุณสามารถควบคุมคุมพวงมาลัยเลือกข้อมูลชิ้นที่ต้องการเก็บรักษาไว้ได้ด้วยตัวเองครับ"

## Section 6 — Memory and Steering

### Memory system

#### English

A system that attempts to make an [agent](#agent) [stateful](#stateful) across [sessions](#session). Persists information into the [environment](#environment) during a session and reloads it into the [context window](#context-window) at the start of future ones, so the agent carries continuity beyond the user [clearing](#clearing) the session.

A memory system has two halves. The write path: during a session, the agent records what it learned — a preference you stated, a fact about the project — as files in the environment. The read path: at session start, the [harness](#harness) loads those files, or an index of them, back into the context window. Many harnesses ship their own memory system — Claude Code's `/memory` is one — but you can also build one yourself: a directory of notes plus an instruction in [AGENTS.md](#agentsmd) to consult it.

The same trade-offs as any always-loaded content apply. Memories accumulate, so most systems load a one-line index and leave the bodies behind [context pointers](#context-pointer) rather than inlining everything. And memories are [secondary sources](#secondary-source), so they drift: a fact recorded in March is loaded with equal confidence in June, after the project has moved on. A memory system needs pruning, the same way AGENTS.md does.

_Usage:_

"I keep having to re-tell it I'm on Postgres, not MySQL."

"Wire up a memory system — write what it learns to the [filesystem](#filesystem) on the first [turn](#turn), reload it at session start. The [model](#model) itself is [stateless](#stateless); the memory layer fakes continuity."

#### ไทย

ระบบซอฟต์แวร์หลังบ้านที่ทำหน้าที่พยายามยกระดับขีดความสามารถให้แก่ตัว [agent](#agent) ให้มีคุณสมบัติในการเก็บจำสถานะสะสมข้ามเวลา ([stateful](#stateful)) ข้ามผ่านข้ามแต่ละ [sessions](#session) บทสนทนา โดยใช้วิธีสั่งบันทึกจัดเก็บข้อมูลข้อเท็จจริงต่าง ๆ ลงสู่สภาพแวดล้อมระบบ ([environment](#environment)) ในระหว่างช่วงเวลาการประมวลผลงานของเซสชันปัจจุบัน และทำหน้าที่วิ่งไปเปิดโหลดดึงข้อมูลชิ้นเดิมตัวนั้นกลับมาหยอดใส่เข้าสู่พื้นที่หน้าต่างบริบท ([context window](#context-window)) ให้แบบอัตโนมัติในวินาทีเริ่มต้นเปิดใช้งานเซสชันอันถัด ๆ ไปในอนาคต เพื่อช่วยซัพพอร์ตให้เอเจนต์สามารถรักษาความต่อเนื่องของเนื้องานและบทเรียนความรู้เอาไว้ได้ แม้ว่าผู้ใช้งานจะสั่งกดปุ่มล้างประวัติการคุยเก่า ([clearing](#clearing)) รีเซ็ตหน้าต่างทิ้งไปแล้วก็ตาม

โครงสร้างสถาปัตยกรรมของระบบความจำจะถูกแบ่งแยกออกเป็นสองฝั่งซีกหลักทำหน้าที่ประสานงานร่วมกัน ฝั่งขาเขียนข้อมูล (write path): ในระหว่างช่วงชั่วโมงรันเซสชันทำงาน ทันทีที่ agent ได้เรียนรู้รับทราบข้อมูลบทเรียนใหม่ ๆ — เช่น สไตล์รสนิยมการเขียนโค้ดที่คุณพิมพ์ระบุบอก หรือข้อเท็จจริงเฉพาะทางเกี่ยวกับโครงสร้างระบบของโปรเจกต์ — ตัวระบบจะทำหน้าที่เปิดเขียนบันทึกข้อความเหล่านั้นลงเป็นไฟล์ข้อมูลจัดเก็บไว้บนสภาพแวดล้อมระบบภายนอก และฝั่งขาอ่านข้อมูล (read path): ในวินาทีแรกสุดของการเปิดสตาร์ทใช้งานเซสชันอันใหม่ในอนาคต ตัวโครงซอฟต์แวร์ควบคุม ([harness](#harness)) จะทำหน้าที่วิ่งไปเปิดดาวน์โหลดกวาดอ่านไฟล์ข้อความความจำเหล่านั้น หรืออ่านจากไฟล์ดัชนีชี้พิกัด (index) บรรทัดสรุปของไฟล์เหล่านั้น แล้วป้อนหงายการ์ดกลับคืนเข้าสู่หน้าต่างบริบทให้ทันที ซอฟต์แวร์ harness ยุคปัจจุบันหลายค่ายมักจะดีไซน์และติดตั้งระบบความจำสำเร็จรูปประจำค่ายมาให้พร้อมใช้งานเลยในตัว — เช่น ฟังก์ชันระบบคำสั่ง `/memory` ของแอปพลิเคชัน Claude Code คือตัวอย่างที่เด่นชัด — แต่คุณก็สามารถลงแรงออกแบบและสร้างระบบจำลองลักษณะนี้ขึ้นมาใช้งานส่วนตัวได้ง่าย ๆ เช่นกัน: โดยสร้างโฟลเดอร์สำหรับเก็บไฟล์ข้อความบันทึกย่อ (notes) ทิ้งไว้บนดิสก์ แล้วพิมพ์คำสั่งสำทับกำกับบรรทัดหนึ่งฝังไว้ในไฟล์ข้อบังคับโปรเจกต์ ([AGENTS.md](#agentsmd)) สั่งบอกให้เอเจนต์ต้องคอยวิ่งมาเปิดอ่านข้อมูลจากโฟลเดอร์นี้ทุกครั้งในตอนเริ่มต้นระบบ

อย่างไรก็ตาม การเปิดใช้งานระบบนี้จะพกพาข้อดีข้อเสียเชิงแลกเปลี่ยน (trade-offs) แบบเดียวกันกับข้อมูลทุกชิ้นในโลกที่ถูกตั้งค่าให้โหลดฝังตรรกะค้างไว้ในระบบตลอดเวลา ข้อความบันทึกความจำจะสะสมหนาแน่นและบวมพอกพูนขึ้นเรื่อย ๆ ตามชั่วโมงการคุย ส่งผลให้ระบบความจำส่วนใหญ่เลือกใช้วิธีโหลดข้อความสั้น ๆ เพียงบรรทัดเดียวที่เป็นดัชนีชี้พิกัด (index) เข้ามาในหน้าต่าง และทิ้งเนื้อหาประโยคตัวเต็มซ่อนไว้ข้างหลังเลเยอร์ตัวชี้พิกัดบริบท ([context pointers](#context-pointer)) แทนการดึงข้อความทั้งหมดมาพิมพ์เรียงแถวพ่นลงมาแบบเต็มไฟล์ (inlining) เพื่อช่วยเซฟพื้นที่งบประมาณ และเนื่องจากข้อความบันทึกความจำเหล่านั้นจัดว่าเป็นแหล่งข้อมูลสรุปขั้นรอง ([secondary sources](#secondary-source)) ความรอบรู้ในกล่องชิ้นนี้จึงสามารถเกิดอาการบิดพริ้วล้าสมัยไปจากความเป็นจริงภายนอกได้เช่นกัน (drift) บันทึกข้อเท็จจริงชิ้นหนึ่งที่ระบบเคยจับบันทึกไว้ตั้งแต่ช่วงเดือนมีนาคม จะถูกเปิดโหลดกลับเข้ามาอ่านด้วยน้ำเสียงพฤติกรรมที่มั่นใจเต็มเปี่ยมเท่าเดิมในเดือนมิถุนายน ทั้งที่โครงสร้างซอฟต์แวร์จริงภายนอกโดนทีมงานโมดิฟายรื้อทิ้งเปลี่ยนสเปกไปจนไม่เหลือเค้าเดิมแล้ว ระบบความจำประจำตัวเอเจนต์จึงจำเป็นต้องได้รับการคอยเปิดดูแล หมั่นเข้ามาตัดแต่งกิ่งเนื้อหาข้อความขยะที่ล้าสมัยทิ้งอยู่เป็นประจำ ไม่ต่างไปจากขั้นตอนการคอยสางและดูแลความสะอาดให้แก่ไฟล์ AGENTS.md

_ตัวอย่างการใช้งาน:_

"ผมต้องคอยพิมพ์ข้อความแชตแนะแนวบอกมันอยู่ซ้ำ ๆ ทุกรอบเลยครับว่าระบบฐานข้อมูลในโปรเจกต์ของทีมเราใช้ Postgres นะ ไม่ได้ใช้ MySQL"

"เปิดเชื่อมต่อสายใช้งานระบบความจำ (memory system) สิครับ — โดยสั่งเปิดระบบตั้งค่าให้มันจัดเก็บบทเรียนความรู้ที่ได้ลงสู่ระบบไฟล์ ([filesystem](#filesystem)) ตั้งแต่ในรอบสนทนา ([turn](#turn)) แรกสุด และสั่งโหลดเนื้อหาชิ้นเดิมกลับเข้ามาให้แบบออโต้ตอนเปิดฉากเซสชันใหม่ อย่าลืมความจริงข้อนี้เด็ดขาดว่าตัว [model](#model) เปล่า ๆ เคลื่อนไหวทำงานแบบไม่มีการจำสถานะ ([stateless](#stateless)) เลเยอร์ความจำภายนอกชิ้นนี้ต่างหากที่ทำหน้าที่คอยเฟคสร้างภาพลวงตาเลียนแบบความต่อเนื่องให้แก่เราครับ"

### AGENTS.md

#### English

A file in the [environment](#environment) that the [harness](#harness) loads into the [context window](#context-window) at [session](#session) start — the project's standing brief to the [agent](#agent). Cross-harness convention; some harnesses also have their own variant (Claude Code's is CLAUDE.md).

Because it loads automatically, it's one way to avoid repeating yourself across sessions. The [model](#model) is [stateless](#stateless) — a correction you give in one session is gone in the next, and you end up telling every fresh session that the project uses pnpm, that tests run with a particular flag, that a directory is generated and shouldn't be touched. When you've corrected the agent for the same thing twice, that correction is a candidate line for AGENTS.md.

Suitable content is whatever the agent can't derive from the code: build and test commands, conventions the codebase doesn't make obvious, hard constraints ("never edit the generated client"). Short and declarative — it's a brief, not documentation.

The trade-off is that everything in it is always loaded. Instructions accumulate, most of them irrelevant to any given task, and a long AGENTS.md both costs tokens and dilutes itself — the more instructions in context, the less reliably the model follows any one of them.

_Avoid:_ using AGENTS.md for content that should be [progressively disclosed](#progressive-disclosure) — anything in it pays a [token](#token) cost every [turn](#turn), in every session, whether or not that session needs it. A style guide can go behind a [skill](#skill) or a [context pointer](#context-pointer) instead; keep AGENTS.md for the lines that apply everywhere.

_Usage:_

"Why is every session starting with 4k tokens already burned?"

"Check AGENTS.md — someone pasted the entire style guide in there instead of putting it behind a skill."

#### ไทย

ไฟล์ข้อความกำหนดกฎเกณฑ์ที่ตั้งตระหง่านอยู่บนสภาพแวดล้อมระบบ ([environment](#environment)) ซึ่งตัวโครงสร้างซอฟต์แวร์ควบคุม ([harness](#harness)) จะทำหน้าที่วิ่งไปเปิดกวาดอ่านข้อมูลและโหลดเข้าสู่หน้าต่างบริบท ([context window](#context-window)) ให้แบบอัตโนมัติในวินาทีแรกสุดที่เปิดใช้งาน [session](#session) บทสนทนา — เปรียบเสมือนใบสั่งงานและหนังสือคำสั่งยืนพื้นประจำโครงการ (standing brief) ที่คอยสำทับกำกับแนวทางปฏิบัติให้แก่ตัว [agent](#agent) ถือเป็นข้อตกลงร่วมกันในการตั้งชื่อไฟล์สากลข้ามสายระบบค่ายซอฟต์แวร์ โดยระบบซอฟต์แวร์ harness บางค่ายอาจจะนิยมดีไซน์ดีไซน์ชื่อไฟล์เฉพาะเจาะจงประจำค่ายของตัวเองแยกออกไปบ้าง (เช่น ค่ายแอปพลิเคชัน Claude Code จะเลือกใช้ชื่อไฟล์ว่า CLAUDE.md เป็นหลัก)

เนื่องจากระบบดีไซน์ให้ไฟล์ข้อความชิ้นนี้ถูกวิ่งมาเปิดโหลดข้อมูลให้แบบออโต้ การเขียนสลักกฎเกณฑ์ฝังไว้ในนี้จึงเป็นแนวทางปฏิบัติที่ยอดเยี่ยมที่สุดในการตัดปัญหาความน่ารำคาญที่คุณต้องคอยพิมพ์ข้อความคำสั่งเดิม ๆ ซ้ำซากข้ามแต่ละเซสชัน ตัว [model](#model) เปล่า ๆ ทำงานประมวลผลแบบไม่มีการจำสถานะ ([stateless](#stateless)) — คำตักเตือนดัดแปลงแก้ไขที่คุณเคยแชตสอนมันไว้อย่างดิบดีในเซสชันอันเก่าจะปลิวหายสาบสูญไปทันทีเมื่อขยับขึ้นเซสชันอันใหม่ ส่งผลให้คุณต้องคอยมานั่งพิมพ์บอกใบ้เซสชันใหม่อยู่ร่ำไปว่าโปรเจกต์นี้เลือกใช้ pnpm ในการคุมระบบแพ็กเกจนะ, คำสั่งสั่งรันระบบทดสอบต้องแนบแฟล็กตัวนี้ติดไปด้วยเสมอนะ หรือโฟลเดอร์พิกัดตำแหน่งนี้เป็นโฟลเดอร์ที่ระบบเจเนอเรตขึ้นมาออโต้ ห้ามเอื้อมมือเข้าไปแตะต้องเปิดแก้ไขเด็ดขาดนะ เมื่อใดก็ตามที่คุณพบว่าตัวเองต้องคอยพิมพ์ข้อความตักเตือนสำทับเอเจนต์ในเรื่องเดิมซ้ำเกิน 2 รอบขึ้นไป ข้อความเตือนชิ้นนั้นจัดว่าสอบผ่านเกณฑ์คุณสมบัติและควรถูกคัดเลือกนำมาเขียนสลักฝังไว้ในไฟล์ AGENTS.md ทันที

เนื้อหาข้อมูลที่คู่ควรและสมเหตุสมผลในการเขียนใส่ไว้ในไฟล์นี้ คือข้อมูลข้อเท็จจริงทุกประเภทที่ตัวเอเจนต์ไม่สามารถสืบค้นสกัดความรู้แกะรอยออกมาจากตัวซอร์สโค้ดไฟล์จริงได้ด้วยตัวเอง: เช่น ข้อความคำสั่งคอมมานด์ที่ถูกต้องในการสั่งรันคำสั่งบิลด์และรันเคสทดสอบ, ข้อตกลงร่วมกันในการเขียนโค้ดของทีมที่ตัวเนื้องานไม่ได้บอกใบ้เด่นชัด หรือกฎเหล็กและเงื่อนไขข้อบังคับระดับคอขวดขั้นเด็ดขาด ("ห้ามเปิดแก้ไฟล์โค้ดในโฟลเดอร์ client ที่เจเนอเรตขึ้นมาออโต้เด็ดขาด") รูปแบบการเขียนควรสั้น กระชับ เป็นประโยคบอกเล่าตรงประเด็นเชิงคอนกรีต — เพราะบทบาทหน้าที่ของมันคือหนังสือคำสั่งบรีฟงานย่อย ๆ ไม่ใช่คลังไฟล์เอกสารคู่มือระบบตัวเต็ม

ข้อเสียเชิงแลกเปลี่ยนที่ต้องเผื่อใจรับคือ ทุกสิ่งทุกอย่างที่ถูกเขียนบันทึกไว้ในไฟล์นี้จะถูกนับเป็นต้นทุนขาเข้าที่คอยวิ่งไปเบียดบังพื้นที่ความรู้ตลอดเวลา ข้อความคำสั่งจะพอกพูนและหนาแน่นขึ้นเรื่อย ๆ ตามอายุโครงการ ซึ่งส่วนใหญ่เป็นกฎเกณฑ์ที่ไม่ได้เกี่ยวข้องโดยตรงกับภารกิจย่อยตรงหน้าเลย และไฟล์ AGENTS.md ที่มีความยาวเฟ้อและบวมเกินไป จะคอยผลาญหน่วยโทเค็น ([token](#token)) ขาเข้าฟรีในทุก ๆ รอบสนทนา และคอยเข้าไปเจือจางน้ำหนักสมาธิระบบคำสั่งหลังบ้าน — ยิ่งมีข้อบังคับพิมพ์อัดถมกันอยู่ในบริบทหนาแน่นมากเท่าใด ระดับความน่าเชื่อถือที่ตัวโมเดลจะยอมปฏิบัติตามคำสั่งข้อใดข้อหนึ่งอย่างเคร่งครัดจะยิ่งดิ่งวูบหล่นลงลดน้อยลงตามไปด้วย

_สิ่งที่ควรเลี่ยง:_ การใช้ไฟล์ AGENTS.md เป็นถังขยะสำหรับยัดเยียดเนื้อหาข้อมูลประเภทที่ควรปล่อยให้ระบบใช้วิธีค่อย ๆ เปิดเผยข้อมูลเฉพาะยามที่ต้องการใช้งานจริง ([progressively disclosed](#progressive-disclosure)) — ข้อความใด ๆ ก็ตามที่ฝังอยู่ในไฟล์นี้จะสร้างมูลค่าบิลที่คุณต้องควักเงินจ่ายค่าโทเค็นขาเข้าในทุก ๆ รอบสนทนา ([turn](#turn)) ในทุก ๆ เซสชัน ไม่ว่าเซสชันหน้าต่างอันนั้นจะมีความจำเป็นต้องใช้ข้อมูลชิ้นนั้นในการรันงานตรงหน้าหรือไม่ก็ตาม ไฟล์จำพวกแนวทางการดีไซน์หน้าจอ (style guide) ตัวเต็ม ควรได้รับการโยกย้ายไปซ่อนไว้ข้างหลังเลเยอร์ระบบทักษะแบบแพ็กเกจ ([skill](#skill)) หรือใช้กลไกตัวชี้พิกัดบริบท ([context pointer](#context-pointer)) คอยบอกใบ้พาธแทน ปล่อยพื้นที่ไฟล์ AGENTS.md เอาไว้ให้แก่บรรทัดคำสั่งกฎเหล็กยืนพื้นที่มีผลบังคับใช้ครอบคลุมในวงกว้างข้ามทั่วทั้งโปรเจกต์จริง ๆ เท่านั้นพอ

_ตัวอย่างการใช้งาน:_

"ทำไมเปิดใช้งานเซสชันอันใหม่ขึ้นมารันงานปุ๊บ ตัวเลขมิเตอร์ก็โชว์ฟ้องว่าพื้นที่งบประมาณแอบโดนผลาญทิ้งไปก่อนแล้วตั้ง 4k โทเค็น ทั้งที่ผมยังไม่ได้พิมพ์พิมพ์คำสั่งแชตคุยอะไรกับมันเลยสักคำเลยครับ"

"ลองเปิดคลิกเข้าไปเช็กดูเนื้อหาข้างในไฟล์ AGENTS.md สิครับ — มีทีมงานบางคนแอบก๊อปปี้คู่มือดีไซน์จัดรูปแบบหน้าจอ style guide ตัวเต็มยกฉบับมาวางฝังแบบอินไลน์ไว้ข้างใน แทนที่จะโยกย้ายไฟล์คู่มือชิ้นนั้นไปกั้นแยกไว้ข้างหลังระบบทักษะฝั่ง skill ครับ"

### Progressive disclosure

#### English

Loading only the [context](#context) an [agent](#agent) needs right now, with [context pointers](#context-pointer) to the rest. Borrowed from UI design, where it means showing users only the controls relevant to their current task and hiding the rest behind a click.

The technique exists because context is a cost twice over. Every [token](#token) loaded up front is billed as [input tokens](#input-tokens) on every [turn](#turn), and every token spends [attention budget](#attention-budget) whether the agent needs it or not. An [AGENTS.md](#agentsmd) stuffed with the full style guide, deployment runbook, and database conventions makes the agent worse at all of them — the instructions that matter for the current task are diluted by the ones that don't. The tell is an agent that ignores rules you know are in its context: they're in there, but buried.

Progressive disclosure inverts this. Keep the always-loaded layer small — a sentence per topic and a pointer to where the detail lives. The agent reads the style guide when it's writing a component, the deployment runbook when it's deploying, and neither when it's fixing a test. [Skills](#skill) are the pattern built into the [harness](#harness): a short description loaded every [session](#session), the full instructions only when triggered.

_Usage:_

"Should I dump the entire style guide into AGENTS.md?"

"No — progressive disclosure. Reference the style guide as a skill the agent loads when it actually needs to write a component. AGENTS.md pays the token cost every turn."

#### ไทย

กลยุทธ์เชิงวิศวกรรมในการคัดสรรและสั่งโหลดข้อมูลเข้าสู่พื้นที่[บริบท](#context)เฉพาะส่วนเนื้อหาที่ตัว [agent](#agent) จำเป็นต้องใช้ในการประมวลผลงานตรงหน้า ณ วินาทีนั้นจริง ๆ เท่านั้น และใช้วิธีสลักเขียนฝังตัวชี้พิกัดบริบท ([context pointers](#context-pointer)) บรรทัดสั้น ๆ ทิ้งไว้เพื่อบอกใบ้พิกัดตำแหน่งของเนื้อหาปลีกย่อยส่วนที่เหลือ เป็นแนวคิดหลักที่หยิบยืมดีไซน์มาจากศาสตร์การออกแบบหน้าจอผู้ใช้งาน (UI design) ซึ่งหมายถึงกลยุทธ์การคัดเลือกแสดงผลบนหน้าจอให้ผู้ใช้มองเห็นเฉพาะปุ่มควบคุมที่เกี่ยวข้องโดยตรงกับภารกิจตรงหน้า และซ่อนฟังก์ชันปุ่มกดปลีกย่อยส่วนที่เหลือเอาไว้ข้างหลังเลเยอร์การคลิก

เหตุผลความจำเป็นที่ต้องนำตรรกะศาสตร์ข้อนี้เข้ามาจับงานเขียนโปรแกรมร่วมกับ AI เนื่องจากพื้นที่ข้อมูลบริบทจัดว่าเป็นต้นทุนราคาแพงที่ต้องจ่ายเบิ้ลสองต่อเสมอ ข้อมูล [token](#token) ทุก ๆ ตัวที่คุณเลือกสั่งโหลดถมล่วงหน้าเข้าสู่ระบบ (up front) จะถูกนำไปคิดเงินปัดราคารวมเป็นส่วนของโทเค็นขาเข้า ([input tokens](#input-tokens)) เต็มจำนวนในทุก ๆ รอบสนทนา ([turn](#turn)) และโทเค็นทุกตัวจะคอยเข้าไปเบียดบังใช้พลังงานงบประมาณความสนใจของโมเดล ([attention budget](#attention-budget)) อยู่ตลอดเวลา ไม่ว่าตัวเอเจนต์จะมีความจำเป็นต้องใช้ข้อมูลชิ้นนั้นในการแก้โจทย์ตรงหน้าหรือไม่ก็ตาม ไฟล์ข้อบังคับประจำโครงการ ([AGENTS.md](#agentsmd)) ที่ยัดเยียดเนื้อหาคู่มือจัดแต่งดีไซน์หน้าจอแบบเต็มสูบ, อัดแน่นไปด้วยขั้นตอนคู่มือปล่อยรันซอฟต์แวร์ (deployment runbook) และข้อตกลงตรรกะฐานข้อมูลยกฉบับ จะส่งผลให้เอเจนต์เกิดสภาวะมึนงงและทำผลงานดร็อปลงย่ำแย่ในทุก ๆ ด้าน — สมาธิคำสั่งที่ควรจะโฟกัสกับภารกิจตรงหน้าจะถูกเจือจางหายไปภายใต้สัญญาณรบกวนของกฎเกณฑ์ข้ออื่น ๆ ที่ไม่ได้เกี่ยวข้อง อาการบ่งชี้ที่เด่นชัดคือ ตัวเอเจนต์จะเริ่มแสดงอาการมองข้ามกฎเหล็กบางข้อที่คุณรู้ดีแก่ใจว่ามีสะกดสะกดฝังอยู่ในพื้นที่บริบท: กฎเหล็กชิ้นนั้นมันยังคงตั้งตระหง่านอยู่ข้างในนั่นแหละ แต่มันจมหายไปอยู่ใต้กองทัพข้อความชิ้นอื่นเรียบร้อยแล้ว

กลยุทธ์การค่อย ๆ เปิดเผยข้อมูลหรือ progressive disclosure จะเข้ามาช่วยพลิกวิธีกระบวนการคิดในจุดนี้ใหม่ทั้งหมด จงตีกรอบควบคุมเลเยอร์ข้อความประเภทที่ต้องสั่งโหลดฝังค้างไว้ตลอดเวลาให้มีขนาดที่เล็กและกะทัดรัดที่สุด — เขียนข้อความสรุปสั้น ๆ เพียงประโยคเดียวต่อหนึ่งหัวข้อพอ แล้วสลักตบท้ายด้วยตัวชี้พิกัดพาธคอยบอกใบ้ว่าเนื้อหาปลีกย่อยตัวเต็มจัดเก็บซ่อนอยู่ที่พิกัดไหน ตัวเอเจนต์จะทำหน้าที่ส่งคำสั่งเปิดอ่านไฟล์คู่มือดีไซน์หน้าจอเฉพาะยามที่ภารกิจตรงหน้าคือการลงมือเขียนโค้ดปรับแต่งคอมโพเนนต์, สั่งเปิดอ่านคู่มือขั้นตอนปล่อยซอฟต์แวร์เฉพาะในวินาทีที่เนื้องานพร้อมจะดีพลอยระบบขึ้นคลาวด์ และปล่อยวางละเลยข้อมูลทั้งสองชิ้นนี้ไว้ข้างนอกหน้าต่างในระหว่างที่มันกำลังตั้งสมาธิทำภารกิจดีบั๊กแก้ไขเคสทดสอบหลังบ้าน แพทเทิร์นระบบทักษะแบบแพ็กเกจ ([Skills](#skill)) คือตัวอย่างของกลยุทธ์ข้อนี้ที่ถูกดีไซน์และสร้างมาครอบไว้ภายในระบบควบคุม ([harness](#harness)) โดยอัตโนมัติ: ระบบจะส่งเข้าไปเพียงข้อความระบุชื่อและคำอธิบายบทบาทสั้น ๆ ในทุก ๆ [session](#session) และจะยอมควักเงินจ่ายโควตาพื้นที่ดึงเนื้อหาคำสั่งตัวเต็มเข้ามาอ่านเฉพาะในจังหวะที่มีสัญญาณกระตุ้นเรียกใช้งานจริงเท่านั้น

_ตัวอย่างการใช้งาน:_

"ผมควรจะก๊อปปี้เนื้อหาคู่มือจัดรูปแบบดีไซน์หน้าจอ style guide ตัวเต็มยกฉบับเทรวมใส่ไว้ในไฟล์ AGENTS.md เลยดีไหมครับ"

"ห้ามทำแบบนั้นเด็ดขาดครับ — ให้ยึดหลักกลยุทธ์ค่อย ๆ เปิดเผยข้อมูล progressive disclosure แทนครับ โดยเขียนอ้างอิงพาธไฟล์คู่มือดีไซน์หน้าจอแยกกั้นไว้ข้างหลังโครงสร้างระบบทักษะฝั่ง skill เพื่อปล่อยให้ agent สามารถเลือกวิ่งไปเปิดกวาดอ่านเนื้อหาเฉพาะวินาทีที่ภารกิจชิ้นนั้นจำเป็นต้องลงมือเขียนโค้ดหน้าจอจริง ๆ การยัดเยียดถมฝังไว้ในไฟล์ AGENTS.md โดยตรง จะสร้างมูลค่าบิลโทเค็นขาเข้าที่คุณต้องควักเงินจ่ายฟรีในทุก ๆ รอบสนทนาครับ"

### Context pointer

#### English

A mention in one document that points to another, so the [agent](#agent) can pull it into the [context window](#context-window) only when the task calls for it. The unit [progressive disclosure](#progressive-disclosure) is built from.

The reason to use a pointer (instead of inlining the content) is cost. A pointer is one line in the context window. The document behind it might be thousands of [tokens](#token), but those tokens cost nothing until the agent actually follows the pointer. Inline a 2,000-token runbook in [AGENTS.md](#agentsmd) and every [session](#session) pays for it; replace it with "deploy process: see `internal/deploy.md`" and only the sessions that deploy ever load it. The agent follows the pointer with a [tool call](#tool-call) when the task matches.

A pointer needs two parts to work: a stable path, and enough description for the agent to know when following it is worth it. A bare path is a pointer the agent has no reason to follow; "see `internal/deploy.md`" with no hint of what's inside gets skipped by a session that needed it. Write the line so it matches how tasks present: "release, deploy, or rollback — read `internal/deploy.md` first".

Pointers are everywhere once you look: lines in AGENTS.md, [skill](#skill) descriptions (the harness loads the description; the skill body waits behind it), filenames in a directory listing, links between docs.

A pointer can also tie a [secondary source](#secondary-source) back to the [primary source](#primary-source) it was derived from — the compaction summary that names the original transcript, the doc that names the source file it describes. This makes the secondary source's lossiness recoverable: when the summary turns out not to be enough, the agent follows the pointer and reads the original, instead of working from whatever the summary kept.

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

_Usage:_

"AGENTS.md is getting huge."

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into skills and leave a context pointer behind."

#### ไทย

ข้อความระบุข้อมูลบรรทัดสั้น ๆ ที่ถูกสลักสะกดไว้ภายในไฟล์เอกสารชิ้นหนึ่งเพื่อทำหน้าที่ชี้พิกัดพิกัดตำแหน่งโยงไปยังเอกสารอีกชิ้นหนึ่ง ช่วยเปิดโอกาสให้ [agent](#agent) สามารถประเมินและตัดสินใจส่งคำสั่งไปดึงข้อมูลชิ้นนั้นเข้ามาประมวลผลภายในหน้าต่างบริบท ([context window](#context-window)) เฉพาะยามที่ตรรกะภารกิจตรงหน้าเรียกหาเนื้อหาชิ้นนั้นจริง ๆ เท่านั้น จัดเป็นยูนิตองค์ประกอบพื้นฐานชิ้นสำคัญที่ถูกนำมาใช้ประกอบสร้างกลยุทธ์ค่อย ๆ เปิดเผยข้อมูล ([progressive disclosure](#progressive-disclosure)) ให้เกิดขึ้นในระบบ

เหตุผลเชิงวิศวกรรมที่คนทำงานเลือกใช้กลยุทธ์ตัวชี้พิกัดลักษณะนี้ (แทนการใช้วิธีก๊อปปี้เนื้อหาข้อความทั้งหมดมาวางฝังแบบอินไลน์ลงในไฟล์หลัก) คือเรื่องของต้นทุนงบประมาณ ตัวชี้พิกัดบริบท context pointer ใช้พื้นที่งบประมาณความจุเพียงแค่ 1 บรรทัดถ้วนในหน้าต่างบริบท ข้อความในไฟล์เอกสารปลายทางหลังกำแพงชิ้นนั้นอาจจะมีความหนาแน่นและยาวจุหน่วยโทเค็น ([tokens](#token)) สูงถึงหลายพันตัว แต่โทเค็นเหล่านั้นทั้งหมดจะไม่มีวันมาสร้างภาระค่าใช้จ่ายบิลค่าบริการให้แก่คุณเลยแม้แต่เซนต์เดียว จนกว่าจะมีสัญญาณตรรกะกระตุ้นให้ตัวเอเจนต์ยอมหันหน้าเดินตามเส้นตัวชี้พิกัดเข้าไปเปิดอ่านข้อมูลจริง ๆ การเลือกก๊อปปี้คู่มือปล่อยรันซอฟต์แวร์หนา 2,000 โทเค็น วางอินไลน์ฝังไว้ในไฟล์ข้อบังคับโปรเจกต์ ([AGENTS.md](#agentsmd)) ย่อมหมายความว่าทุก ๆ [session](#session) ที่ถูกเปิดใช้งานในเครื่องจะต้องควักเงินจ่ายค่าพื้นที่ส่วนนี้ฟรีในทุกรอบคำสั่ง แต่ถ้าคุณเลือกปรับสถาปัตยกรรมย่อส่วนเหลือเพียงประโยคสั้น ๆ ว่า "ขั้นตอนการปล่อยซอฟต์แวร์และดีพลอยระบบ: เปิดสืบค้นที่พาธ `internal/deploy.md`" จะส่งผลให้มีเพียงแค่เซสชันหน้าต่างอันที่กำลังทำภารกิจดีพลอยระบบจริง ๆ เท่านั้นที่จะยอมส่งคำสั่งไปโหลดข้อมูลคู่มือฉบับเต็มเข้ามาประมวลผลในหัว ตัวเอเจนต์จะเดินตามตัวชี้พิกัดข้ามฝั่งไปดึงข้อมูลผ่านการเรียกใช้เครื่องมือ ([tool call](#tool-call)) ทันทีในวินาทีที่ลักษณะของเนื้องานตรงหน้าวิ่งเข้าล็อกเงื่อนไขคำอธิบาย

โครงสร้างของตัวชี้พิกัดจะสามารถทำงานได้อย่างราบรื่นและมีประสิทธิภาพสูงสุด จำเป็นต้องประกอบด้วย 2 ส่วนประกอบหลักที่ครบถ้วน: ประการแรกคือพิกัดพาธตำแหน่งของไฟล์ข้อมูลที่คงที่แน่นอน (stable path) และประการที่ 2 คือข้อความคำอธิบายบอกใบ้สรรพคุณย่อส่วนที่หนาแน่นพอเพื่อให้เอเจนต์สามารถประเมินตรรกะได้ล่วงหน้าว่าเนื้อหาหลังกำแพงชิ้นนี้คุ้มค่าแก่การเสียเวลาส่งคำสั่งตามไปเปิดอ่านหรือไม่ การเขียนระบุเพียงแค่พาธตำแหน่งดิบ ๆ ลอย ๆ จัดว่าเป็นตัวชี้พิกัดที่ไร้ประสิทธิภาพเพราะเอเจนต์จะไม่มีข้อมูลตรรกะเพียงพอให้ตัดสินใจตามไปอ่านได้ ประโยคสั้น ๆ อย่าง "ดูข้อมูลที่พาธ `internal/deploy.md`" โดยไม่มีการบอกใบ้คำสำคัญ (keywords) ว่าข้างในบรรจุเนื้อหาอะไรไว้บ้าง จะโดนมองข้ามและละเลยทิ้งไปทันทีในเซสชันที่กำลังต้องการข้อมูลชิ้นนั้น วิธีการดีไซน์และเขียนบรรทัดคำสั่งจึงควรล้อตามรูปทรงของภารกิจที่มักจะวิ่งเข้ามาทักทายระบบ: เช่น เขียนระบุว่า "ภารกิจเตรียมปล่อยซอฟต์แวร์ (release), ดีพลอยระบบ (deploy) หรือการสั่งม้วนโค้ดกลับ (rollback) — ให้สั่งรันเครื่องมือเปิดกวาดอ่านข้อมูลจากพาธ `internal/deploy.md` เป็นสิ่งแรกสุด"

หากคุณเริ่มสังเกตและจับตาดูกลไกคณิตศาสตร์หลังบ้าน คุณจะพบเจอตัวชี้พิกัดลักษณะนี้แฝงตัวสลักอยู่ทั่วทุกแห่งหนในระบบ: ตั้งแต่ข้อความคำสั่งบรรทัดสั้น ๆ ในไฟล์ AGENTS.md, ข้อความประโยคคำอธิบายสรรพคุณในระบบทักษะแบบแพ็กเกจ ([skill](#skill)) (ซึ่งตัวซอฟต์แวร์ harness จะโหลดเฉพาะข้อความคำอธิบายสั้น ๆ เข้าไปในพื้นที่บริบท ส่วนเนื้อคู่มือตัวเต็มจะถูกกั้นซ่อนรออยู่ข้างหลัง), รายชื่อพิกัดพาธไฟล์ข้อมูลดิบจากการกดสั่งลิสต์รายชื่อไดเรกทอรี ไปจนถึงลิงก์เชื่อมโยงข้อความข้ามระหว่างไฟล์เอกสารคู่มือต่าง ๆ

ตัวชี้พิกัดบริบทยังสามารถนำมาใช้ทำหน้าที่ทำเลเยอร์เชื่อมโยงสายสัมพันธ์ดึงข้อมูลข้ามฝั่ง เพื่อช่วยโยงย้อนกลับจากข้อมูลสรุปขั้นรอง ([secondary source](#secondary-source)) วิ่งกลับไปหาไฟล์ข้อมูลดิบปฐมภูมิ ([primary source](#primary-source)) ต้นฉบับดั้งเดิมที่มันถูกเจเนอเรตสกัดความออกมาได้ยอดเยี่ยม — เช่น ข้อความสรุปย่อประวัติการบีบอัดระบุชื่อพาธไฟล์บันทึกการคุยดิบตัวเต็มฉบับจริง หรือไฟล์เอกสารสรุปสเปกงานระบุชื่อพาธไฟล์ซอร์สโค้ดไฟล์จริงที่มันกำลังบรรยาย กลไกเชื่อมสายสืบค้นนี้จะช่วยเปิดโอกาสให้สภาวะสูญเสียรายละเอียดปลีกย่อยในข้อมูลสรุปขั้นรองสามารถกู้คืนระบบกลับมาได้: เมื่อใดก็ตามที่เนื้อความในข้อความสรุปย่อเริ่มให้รายละเอียดไม่เพียงพอต่องานตรงหน้า ตัวเอเจนต์จะสามารถเดินตามตัวชี้พิกัดเปิดอ่านไฟล์ดิบต้นฉบับดั้งเดิมตัวเต็มขึ้นมาสืบค้นดูได้ทันที แทนที่จะทนฝืนทำงานรันบนความเลือนลางของข้อมูล สรุปความย่อส่วน

_สิ่งที่ควรเลี่ยง:_ การเรียกสิ่งนี้ด้วยคำศัพท์ที่แห้งแล้งอย่างคำว่า "การอ้างอิงข้อมูล" (reference) เพราะคำนี้ไม่ได้สื่ออารมณ์เชิงกลไกให้เห็นภาพว่าการเดินตามเส้นทางชิ้นนี้จะสามารถวิ่งไปโหลดดึงข้อมูลบริบทก้อนใหม่ยัดใส่เข้าหัวระบบได้จริง และเลี่ยงการใช้คำศัพท์ที่หรูหราอลังการจนเกินไปอย่างคำว่า "ประตูมิติทะลุผ่าน" (Portal)

_ตัวอย่างการใช้งาน:_

"ไฟล์ข้อบังคับโปรเจกต์ AGENTS.md ในคลังโค้ดเริ่มมีขนาดเนื้อความที่ใหญ่โตหนาแน่นจนบวมเกินไปแล้วครับ"

"เนื้อหาข้อความส่วนใหญ่ในนั้นควรได้รับการปรับสถาปัตยกรรมย่อส่วนให้เปลี่ยนสภาพเป็นตัวชี้พิกัดบริบท (context pointers) แทนการวางเนื้อหาข้อความตัวเต็มครับ คงเหลือไว้เฉพาะกฎเหล็กและเงื่อนไขข้อบังคับยืนพื้นหลักฝังแบบอินไลน์พอ ส่วนไฟล์คู่มือขั้นตอนปล่อยซอฟต์แวร์ยาว ๆ และเอกสารคู่มือจัดรูปแบบดีไซน์หน้าจอ ให้โยกย้ายไปกั้นแยกไว้ข้างหลังระบบทักษะฝั่ง skill แล้วทิ้งบรรทัดตัวชี้พิกัดบริบทสั้น ๆ คอยบอกใบ้พาธตำแหน่งไว้ก็พอครับ"

### Skill

#### English

A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](#environment) until a [context pointer](#context-pointer) pulls it into the [context window](#context-window) for the task at hand. The unit of [progressive disclosure](#progressive-disclosure) in a [harness](#harness).

Skills are an open standard, defined at [agentskills.io](https://agentskills.io) — originally developed by Anthropic and since adopted by most major harnesses, so a skill written once works across them. The format is a folder containing:

- A `SKILL.md` file — metadata (a name and description, at minimum) plus the instructions themselves
- Optionally, scripts the [agent](#agent) can run
- Optionally, templates and reference material the instructions point to

Only the name and description sit in [context](#context) by default. When the agent's task matches, it loads the rest. Until then, the skill takes up almost no room — a sentence or two of [tokens](#token), however large its full instructions are.

This distinguishes skills from [AGENTS.md](#agentsmd), which is loaded into every [session](#session) regardless of the task. A skill is read when a particular kind of work comes up — releasing, scaffolding a new service, writing a migration — and ignored the rest of the time.

_Avoid:_ "[tool](#tool)" — a tool is what the agent _calls_; a skill is instructions it _reads_.

_Usage:_

"Where should I put the deploy runbook?"

"As a skill — the agent loads it only when the task involves deploys. In AGENTS.md it'd burn tokens on every [turn](#turn) for something we use weekly."

#### ไทย

ชุดคู่มือขั้นตอนการปฏิบัติงานและทรัพยากรข้อมูลที่ถูกจัดเก็บและรวมมัดเข้าไว้ด้วยกันเป็นหนึ่งแพ็กเกจสำเร็จรูปเพื่อใช้ในการสอนและสั่งการให้ระบบสามารถดำเนินภารกิจประเภทใดประเภทหนึ่งได้อย่างเชี่ยวชาญ (teachable capability) โดยชุดข้อมูลคำสั่งตัวเต็มจะถูกกั้นแยกและจัดเก็บไว้บนสภาพแวดล้อมระบบ ([environment](#environment)) นอกพื้นที่หน้าต่างบริบท และจะยอมเปิดโหลดดึงข้อมูลเข้าสู่หน้าต่างบริบท ([context window](#context-window)) ก็ต่อเมื่อมีเส้นสายข้อมูลจากตัวชี้พิกัดบริบท ([context pointer](#context-pointer)) วิ่งมาสั่งเรียกใช้งานในยามที่เนื้องานตรงหน้าวิ่งเข้าล็อกเงื่อนไข ถือเป็นยูนิตองค์ประกอบหลักชิ้นสำคัญที่ระบบควบคุม ([harness](#harness)) นำมาใช้ซัพพอร์ตกลยุทธ์ค่อย ๆ เปิดเผยข้อมูล ([progressive disclosure](#progressive-disclosure))

โครงสร้างรูปแบบของ skill ได้รับการออกแบบและพัฒนาขึ้นมาภายใต้มาตรฐานระบบเปิด (open standard) โดยมีคลังข้อมูลกลางตีกรอบเงื่อนไขข้อกำหนดไว้ที่เว็บไซต์ [agentskills.io](https://agentskills.io) — ซึ่งเป็นสเปกมาตรฐานดั้งเดิมที่ถูกดีไซน์และคิดค้นขึ้นโดยค่าย Anthropic และต่อมาได้รับการยอมรับและโอบรับนำไปปรับใช้งานข้ามสายซอฟต์แวร์โดยผู้พัฒนาโครงระบบ harness ค่ายใหญ่เกือบทั้งหมดในโลก ส่งผลให้ไฟล์ skill ที่ถูกเขียนและจัดทำขึ้นมาเพียงครั้งเดียว จะสามารถนำไปเสียบใช้งานข้ามค่ายซอฟต์แวร์ควบคุมได้อย่างราบรื่น ภายในโครงสร้างโฟลเดอร์ของหนึ่ง skill จะประกอบไปด้วยชิ้นส่วนข้อมูลดังต่อไปนี้:

- ไฟล์ข้อมูลหลักชื่อ `SKILL.md` — บรรจุข้อมูลเมทาดาต้า (ระบุชื่อของทักษะชิ้นนั้น และข้อความคำอธิบายสรรพคุณบทบาทหน้าที่สั้น ๆ เป็นเกณฑ์ขั้นต่ำ) พร้อมทั้งบรรจุเนื้อความคู่มือขั้นตอนการปฏิบัติงานฉบับเต็มเอาไว้ข้างใน
- ชุดไฟล์สคริปต์เสริมคำสั่งสำเร็จรูป (สิทธิ์ตัวเลือกเพิ่มเติม) ที่เปิดโอกาสให้ตัว [agent](#agent) สามารถส่งคำสั่งคอมมานด์รันระบบสั่งทำงานได้ทันที
- ชุดไฟล์เทมเพลต โครงสร้างข้อกำหนด หรือไฟล์ข้อมูลอ้างอิงทางเทคนิค (สิทธิ์ตัวเลือกเพิ่มเติม) ที่เนื้อหาภายในไฟล์คู่มือปฏิบัติงานมีการพิมพ์ระบุอ้างอิงพิกัดตำแหน่งโยงมาถึง

ในสภาวะการทำงานปกติในแต่ละ [session](#session) ระบบจะคัดเลือกเฉพาะข้อความระบุชื่อและคำอธิบายสรรพคุณบทบาทหน้าที่สั้น ๆ เท่านั้นไปวางฝังค้างไว้ในหน้าต่างความรู้ ([context](#context)) ส่งผลให้ในวินาทีที่ภารกิจตรงหน้าของผู้ใช้งานไม่ได้มีความเกี่ยวข้องกับความสามารถชิ้นนี้ ตัวไฟล์เนื้อหาคู่มือปฏิบัติงานฉบับเต็มจะนอนนิ่งอยู่บนดิสก์โดยแทบจะไม่เข้ามารุมเบียดบังหรือกินพื้นที่ความจุหน่วยโทเค็น ([tokens](#token)) เลย — กินพื้นที่งบประมาณเพียงแค่ประโยคสั้น ๆ บรรทัดสองบรรทัดเท่านั้น ไม่ว่าเนื้อความคู่มือตัวจริงเบื้องหลังจะมีความหนาแน่นกี่พันบรรทัดก็ตาม แต่เมื่อใดที่ผู้ใช้พิมพ์ส่งคำสั่งแชตเข้ามาแล้วระบบตรวจสอบพบว่าประเภทของเนื้องานวิ่งเข้าล็อกตรงกับคำอธิบายสรรพคุณของทักษะชิ้นนี้ ตัวระบบจะดำเนินการโหลดเนื้อหาคู่มือปฏิบัติงานฉบับเต็มข้ามฝั่งประตูเข้าสู่หัวของเอเจนต์ทันทีเพื่อใช้ประมวลผลงาน

คุณสมบัติเชิงดีไซน์ข้อนี้เองที่เป็นเส้นแบ่งขอบเขตชัดเจนที่แยกโครงสร้างฝั่ง skill ออกมาจากไฟล์ข้อบังคับประจำโปรเจกต์ ([AGENTS.md](#agentsmd)) เพราะเนื้อความข้อมูลในไฟล์ AGENTS.md จะถูกบังคับหอบหิ้วจัดส่งเข้าสู่หน้าต่างประมวลผลในทุก ๆ คำสั่งงานโต้ตอบ โดยไม่มีการสนใจประเภทขอบเขตของทาสก์ตรงหน้าเลย แต่โครงสร้างแบบ skill จะยอมเปิดสิทธิ์กางสมุดคู่มืออ่านทำความเข้าใจเฉพาะในจังหวะที่มีเนื้องานประเภทนั้นวิ่งเข้ามาทักทายระบบจริง ๆ เท่านั้น — เช่น ภารกิจสั่งทำเรื่องปล่อยซอฟต์แวร์เวอร์ชันใหม่ (releasing), ภารกิจสั่งประกอบโครงสร้างพื้นฐานเปิดบริการใหม่ (scaffolding a new service) หรือภารกิจเขียนสคริปต์สั่งย้ายฐานข้อมูล (writing a migration) และจะปล่อยวางละเลยข้อมูลชิ้นนี้ทิ้งไว้นอกหน้าต่างอย่างปลอดภัยในชั่วโมงทำงานชิ้นอื่น ๆ

_สิ่งที่ควรเลี่ยง:_ การเรียกแพ็กเกจชุดทักษะความรู้ชิ้นนี้ด้วยคำศัพท์ว่า "เครื่องมือปฏิบัติงาน" ([tool](#tool)) — เพราะคำว่า tool ในพจนานุกรมฉบับนี้หมายถึงซอฟต์แวร์ฟังก์ชันคอมพิวเตอร์หลังบ้านที่เอเจนต์เป็นผู้ส่งคำสั่งสั่งกดรันใช้งาน (action) ส่วนคำว่า skill หมายถึงชุดข้อความสมุดคู่มือแนวทางปฏิบัติที่เอเจนต์คอยเปิดสายตาอ่านทำความเข้าใจ (knowledge) เป็นชิ้นส่วนคนละฝั่งกัน

_ตัวอย่างการใช้งาน:_

"ผมควรจะนำเอาคู่มือขั้นตอนและรันบุ๊คสำหรับการปล่อยซอฟต์แวร์ดีพลอยระบบขึ้นคลาวด์ (deploy runbook) ไปเซฟจัดเก็บไว้ที่ตำแหน่งพิกัดไหนของโปรเจกต์ดีครับ"

"แพ็กจัดทำให้อยู่ในรูปแบบของโครงสร้างทักษะประจำตัวฝั่ง skill เลยครับ — เพื่อปล่อยให้ระบบคอยเปิดโหลดดึงคู่มือชิ้นนี้เข้ามาอ่านเฉพาะในวินาทีที่ทาสก์งานตรงหน้ามีความเกี่ยวข้องกับขั้นตอนดีพลอยระบบจริง ๆ การเอาไปวางฝังอินไลน์ไว้ในไฟล์ AGENTS.md จะทำให้คุณต้องจ่ายเงินค่าโทเค็นขาเข้าฟรีในทุก ๆ รอบสนทนา ([turn](#turn)) ให้แก่ข้อมูลคู่มือที่คุณอาจจะได้ดึงมาใช้งานจริงเพียงแค่สัปดาห์ละครั้งครับ"

### Subagent

#### English

An [agent](#agent) spawned by another agent via a [tool call](#tool-call). Runs in its own [session](#session) with its own [context window](#context-window), and reports a single [tool result](#tool-result) back. Distinct from a [handoff](#handoff) — the parent specifically expects a return; a handoff has no return path. **Cannot spawn further subagents** — the tree is one level deep. Subagents exist to isolate [context](#context), not to compose hierarchies.

The point is to keep noisy work out of the parent's context. A broad search or a long file-reading expedition produces pages of tool results, most of which matter only long enough to find the answer. Run inside the parent and all of it stays in the parent's context for the rest of the session. Run inside a subagent and the noise fills a disposable window instead — only the final report lands in the parent's context. The report is a [secondary source](#secondary-source): the parent gets the subagent's account of what it found, not the raw results, so anything the report leaves out is invisible to the parent.

Subagents also run concurrently — a parent can fan several out at once over independent pieces of work.

_Usage:_

"The grep results are blowing out my context."

"Spawn a subagent to do the search — it'll burn its own context window on the noise and report back the two file paths you actually need."

#### ไทย

ตัว [agent](#agent) ย่อยเฉพาะกิจที่ถูกให้กำเนิดและสั่งเปิดรันขึ้นมาใช้งานโดยตัวเอเจนต์ผู้เป็นแม่ผ่านช่องทางการเรียกใช้เครื่องมือ ([tool call](#tool-call)) โดยเอเจนต์ย่อยตัวนี้จะแยกย้ายออกไปเปิดใช้งานโครงสร้าง [session](#session) ของตัวเอง มีพื้นที่หน้าต่างบริบท ([context window](#context-window)) ประจำตัวแยกเป็นเอกเทศ และเมื่อปฏิบัติภารกิจเสร็จสิ้นจะทำหน้าที่ส่งข้อความรายงานผลลัพธ์กลับคืนมาให้แก่ระบบแม่ในฐานะข้อมูลผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) เพียงชิ้นเดียวจบ กระบวนการนี้มีความแตกต่างอย่างสิ้นเชิงจากตรรกะการส่งมอบงานระบบ ([handoff](#handoff)) — เพราะโครงสร้างฝั่งระบบแม่จะตั้งตรรกะเปิดประตูสแตนด์บายรอคอยข้อมูลผลงานวิ่งกลับมาส่งมอบคืนเสมอ ส่วนระบบ handoff จะเป็นการส่งไม้ต่อแบบตัดฉับโดยไม่มีเส้นทางวิ่งย้อนกลับ และ **เอเจนต์ย่อยตัวนี้จะไม่ได้รับสิทธิ์ในการสั่งเปิดเจเนอเรตเอเจนต์ย่อยตัวอื่น ๆ ต่อไปอีกเป็นทอด ๆ เด็ดขาด (Cannot spawn further subagents)** — โครงสร้างต้นไม้ของการสปอว์นจะถูกจำกัดวงสิทธิ์ล็อกความลึกไว้ที่ระดับ 1 ชั้นถ้วนเสมอ เหตุผลความจำเป็นในการดีไซน์ระบบเช่นนี้ เพื่อต้องการคัดแยกขอบเขตพื้นที่ความรู้ ([context](#context)) ออกจากกันอย่างเด็ดขาด ไม่ใช่ต้องการสร้างโครงสร้างองค์กรจำลองแบบหลายลำดับชั้นซับซ้อน

เป้าหมายสูงสุดของการสั่งเปิดใช้งานเอเจนต์ย่อยคือการปกป้องและกั้นแยกเนื้องานส่วนที่มีสัญญาณรบกวนขยะหนาแน่น (noisy work) ไม่ให้ไหลทะลักเข้ามาปนเปื้อนพื้นที่หน้าต่างความรู้ของระบบแม่ ภารกิจบางประเภท เช่น การสั่งรันคำสั่งค้นหาคำกว้าง ๆ ทั่วทั้งคลังโค้ดเบส (broad search) หรือภารกิจการเปิดไล่กวาดอ่านเนื้อหาภายในไฟล์ขนาดใหญ่หลาย ๆ ไฟล์พร้อมกัน จะผลิตข้อความขาออกจากเครื่องมือถมกลับเข้ามาเป็นจำนวนมหาศาลหลายหน้ากระดาษ ซึ่งข้อมูลผลลัพธ์เหล่านั้นส่วนใหญ่จะมีมูลค่าและสิ้นเปลืองพลังงานสมองคำนวณอยู่แค่เพียงไม่กี่วินาทีในจังหวะที่กำลังควานหาพิกัดคำตอบ และหลังจากเจอพิกัดคำตอบแล้ว ข้อมูลเหล่านั้นจะกลายสภาพเป็นเศษขยะทันที หากคุณเลือกสั่งรันภารกิจชิ้นนี้ภายในหน้าต่างประมวลผลของระบบแม่โดยตรง ข้อมูลขยะหนาแน่นเหล่านั้นทั้งหมดจะถูกบังคับฝังค้างยึดครองพื้นที่มิเตอร์บริบทของระบบแม่ไปตลอดช่วงเวลาที่เหลือของเซสชัน แต่ถ้าคุณเลือกใช้กลยุทธ์ส่งตัว subagent ข้ามฝั่งออกไปปฏิบัติการแทน สัญญาณรบกวนขยะทั้งหมดจะวิ่งไปถมจนแน่นเต็มหน้าต่างบริบทแบบใช้แล้วทิ้งของตัวมันเองแทน — และจะมีเพียงข้อความรายงานสรุปผลงานฉบับสุดท้ายชิ้นเดียวเน้น ๆ เท่านั้นที่ได้รับสิทธิ์หอบข้ามฝั่งกลับมาวางแปะในพื้นที่บริบทของระบบแม่ ข้อความรายงานชิ้นนี้จะมีคุณสมบัติเป็นแหล่งข้อมูลสรุปขั้นรอง ([secondary source](#secondary-source)): ตัวระบบแม่จะรับรู้ข้อเท็จจริงตามเนื้อความข้อความบอกเล่าบรรยายของตัวเอเจนต์ย่อยเท่านั้น ไม่ได้เห็นชิ้นข้อมูลดิบดั้งเดิมด้วยตาตัวเอง ดังนั้น รายละเอียดและเศษข้อมูลปลีกย่อยชิ้นใดก็ตามที่ตัวรายงานเขียนตกหล่นหายไป จะกลายเป็นสิ่งล่องหนที่ระบบแม่ไม่มีวันรับรู้รับทราบพิกัดข้อมูลชิ้นนั้นได้เลย

นอกจากนี้ บรรดาเอเจนต์ย่อย subagents ยังสามารถถูกสั่งเปิดใช้งานให้รันประมวลผลงานพร้อมกันแบบคู่ขนานได้อีกด้วย (concurrently) — ช่วยเปิดโอกาสให้ระบบแม่สามารถกระจายคำสั่ง แจกจ่ายทาสก์งานย่อย ๆ แยกออกไปให้เอเจนต์ย่อยหลาย ๆ ตัวแยกย้ายกันไปรุมทำงานคนละชิ้นในเวลาเดียวกันได้อย่างมีประสิทธิภาพ

_ตัวอย่างการใช้งาน:_

"ข้อความผลลัพธ์ที่ได้จากการรันคำสั่งค้นหา grep มันยาวเยียดและถมเข้ามาจนพื้นที่งบประมาณบริบทของผมบวมเบ่งระเบิดไปหมดแล้วครับ"

"ส่งคำสั่งคอมมานด์สปอว์นตัว subagent ออกไปลุยปฏิบัติภารกิจค้นหาข้อมูลแทนสิครับ — ปล่อยให้มันจ่ายโควตาหน่วยความจำส่วนตัวของมันเพื่อแหวกสายตาอ่านข้อมูลขยะหนาแน่นเหล่านั้นให้เสร็จสิ้น และเมื่อมันเจอพิกัดสิ่งที่ต้องการแล้ว มันจะส่งพิกัดพาธตำแหน่งไฟล์ข้อมูลจริงแค่ 2 ไฟล์ที่คุณจำเป็นต้องใช้รันงานจริง ๆ หอบกลับมาส่งรายงานคืนให้แก่ระบบแม่เองครับ"

## Section 7 — Patterns of Work

### Human-in-the-loop

#### English

A working pattern where one or more humans pair with the [agent](#agent) during a [session](#session) — reviewing, redirecting, or collaborating in real time. The human is present and engaged, not just gating individual actions.

The contrast is with [AFK](#afk) work, where the agent runs unattended and you judge the result afterwards. Human-in-the-loop means catching problems while they're still cheap: you see the agent reach for the wrong file, misread the requirement, or start down a dead end, and you redirect it in one sentence — rather than discovering twenty minutes of confident work built on that mistake. Agents don't reliably know when they're off track; left alone, they tend to push forward rather than stop and ask.

Which pattern fits depends on the work. Well-specified, low-risk, easy-to-verify tasks suit AFK. Tasks that are ambiguous, irreversible, or where you'd struggle to review the finished result — a schema migration, a tricky design decision, anything touching production — suit staying in the loop. The judgement call is essentially: how expensive is a wrong turn, and how late would you catch it?

Some work is in-the-loop by nature, because your reactions are the input. [Grilling](#grilling) only works with you there to answer the questions; [prototyping](#prototyping) only works with you there to react to the artifact.

Staying in the loop costs your attention, which is the scarce resource. Part of getting better with agents is moving more work safely out of the loop — with plans, [automated checks](#automated-check), and [human review](#human-review) at the end instead of supervision throughout.

_Usage:_

"Run this AFK overnight?"

"No, schema migration — keep it human-in-the-loop. I want to see each step and steer if it picks the wrong column to backfill from."

#### ไทย

รูปแบบหรือแพทเทิร์นการทำงานร่วมกัน (working pattern) ที่กำหนดให้มีมนุษย์อย่างน้อย 1 คนขึ้นไป คอยเข้ามานั่งประกบคู่ทำงานเคียงบ่าเคียงไหล่ไปพร้อม ๆ กับตัว [agent](#agent) ตลอดช่วงชั่วโมงรันใช้งานใน [session](#session) — ทำหน้าที่คอยเปิดสายตาเฝ้าตรวจทานผลงาน, คอยพิมพ์ข้อความดึงพวงมาลัยปรับเปลี่ยนทิศทาง หรือลงมือร่วมกันแก้ไขโจทย์ปัญหาที่ซับซ้อนไปพร้อม ๆ กันแบบเรียลไทม์ ตัวมนุษย์จะอยู่ในสภาวะที่ตื่นตัวและมีส่วนร่วมอย่างใกล้ชิด (engaged) ไม่ใช่ทำหน้าที่เป็นเพียงแค่คนนั่งเฝ้าประตูคอยกดปุ่มอนุมัติผ่านสิทธิ์งานรันคำสั่งคอมพิวเตอร์ทีละชิ้นแยกขาดกัน

แนวคิดนี้ถูกนิยามขึ้นมาเพื่อให้เห็นภาพคอนทราสต์ที่ชัดเจนตรงข้ามกับแพทเทิร์นการปล่อยจอรันงานยาวทิ้งไว้แบบไร้คนดูแลตามลำพัง ([AFK](#afk)) ซึ่งเป็นโหมดที่คุณจะยื่นคำสั่งเป้าหมายทิ้งไว้แล้วเดินหนีออกจากหน้าจอไปทำสิ่งอื่น แล้วค่อยกลับมาตัดสินคุณภาพของผลงานปลายทางที่มันรันเสร็จสิ้นแล้วในภายหลัง การดึงมนุษย์เข้ามาร่วมควบคุมกระบวนการหรือ Human-in-the-loop จะพกพาข้อดีชิ้นโตคือช่วยเปิดโอกาสให้ทีมสามารถดักจับและสกัดกั้นปัญหาความสูญเสียได้ตั้งแต่ตอนที่ต้นทุนค่าเสียหายยังต่ำอยู่: คุณมีโอกาสมองเห็นด้วยตาตัวเองในวินาทีที่ agent กำลังจะเอื้อมมือไปเปิดอ่านไฟล์ข้อมูลผิดตำแหน่ง, มองเห็นอาการตีความโจทย์ข้อกำหนดสเปกงานคลาดเคลื่อน หรือกำลังจะเริ่มสตาร์ทก้าวเดินลงไปในเส้นทางตันที่ไม่มีทางออก แล้วคุณสามารถพิมพ์ข้อความแชตสั้น ๆ เพียงประโยคเดียวเพื่อสั่งดึงพวงมาลัยปรับทิศทางงานให้มันขยับกลับเข้าลู่เข้าทางที่ถูกต้องได้ทันทีในพริบตา — ดีกว่าการปล่อยตัวเดินหนีไปแล้วกลับมาค้นพบข้อผิดพลาดร้ายแรงภายหลัง หลังจากที่มันนั่งรันงานอย่างมั่นใจเต็มเปี่ยมไป 20 นาทีเต็ม ๆ บนฐานของความเข้าใจผิดตั้งแต่ก้าวแรก โดยธรรมชาติแล้ว ตัวเอเจนต์จะไม่สามารถประเมินหรือตระหนักรู้ได้ด้วยตัวเองอย่างน่าเชื่อถือว่า 'เฮ้ย ตอนนี้เนื้องานกำลังเริ่มหลงทิศออกทะเลแล้วนะ' หากปล่อยให้มันทำงานตามลำพัง พฤติกรรมปกติของมันคือการก้มหน้าก้มตาพุ่งตัวเดินหน้าต่อไปเรื่อย ๆ มากกว่าการสั่งหยุดระบบเพื่อหันกลับมาพิมพ์ถามคำถามเพื่อความชัดเจนจากคุณ

การตัดสินใจเลือกใช้แพทเทิร์นไหนในการทำงาน ขึ้นอยู่กับลักษณะความละเอียดอ่อนและระดับความเสี่ยงของภารกิจชิ้นนั้น ชิ้นงานใดที่มีข้อกำหนดสเปกงานระบุไว้ชัดเจนเคลียร์คัด, มีระดับความเสี่ยงต่ำ และสามารถจัดตั้งระบบตรวจสอบความถูกต้องปลายทางได้ง่ายด้วยกลไกคอมพิวเตอร์ จะมีความสมเหตุสมผลในการเลือกปล่อยจอรันยาวแบบโหมด AFK ส่วนทาสก์งานประเภทที่มีความคลุมเครือสูง (ambiguous), งานที่มีผลผูกมัดทางกายภาพร้ายแรงและไม่สามารถกู้คืนระบบกลับมาได้ง่าย (irreversible) หรือเนื้องานประเภทที่คุณจะเหนื่อยและยากลำบากมากในการมานั่งแกะโค้ดตรวจสอบผลลัพธ์หลังจากรันเสร็จสิ้นแล้ว — เช่น ภารกิจการปรับเปลี่ยนโครงสร้างย้ายฐานข้อมูล (schema migration), การตัดสินใจเลือกแนวทางดีไซน์สถาปัตยกรรมระบบจุดที่ละเอียดอ่อน หรือเนื้องานส่วนใด ๆ ก็ตามที่ต้องเอื้อมมือไปแตะต้องเซิร์ฟเวอร์หลักที่เปิดใช้งานจริงหลังบ้าน (production) — ชิ้นงานตระกูลนี้สมควรอย่างยิ่งที่จะต้องตั้งค่ารันงานภายใต้แพทเทิร์นคุมพวงมาลัยร่วมกันในลูปนี้ หลักเกณฑ์ในการประเมินและตัดสินใจเชิงวิศวกรรมสรุปเหลือเพียงคำถามข้อเดียวเท่านั้น: คือต้นทุนค่าเสียหายจากการก้าวเดินหลงทิศทางในงานชิ้นนี้มีมูลค่าแพงขนาดไหน และคุณจะสังเกตดักจับความผิดพลาดชิ้นนั้นได้ช้าเกินไปหรือไม่?

ภารกิจบางประเภทถูกตีกรอบจำกัดให้ต้องรันงานภายใต้แพทเทิร์นในลูปนี้โดยปริยายตามพฤติกรรมธรรมชาติของงาน เนื่องจากปฏิกิริยาความรู้สึกและการตอบกลับของคุณคือข้อมูลอินพุตหลักที่ระบบต้องการใช้ประมวลผล กลยุทธ์การซักไซ้ไล่เลียงป้อนบทสัมภาษณ์ ([Grilling](#grilling)) จะไม่มีวันรันงานได้เลยหากไม่มีตัวคุณคอยนั่งแสตนด์บายคอยตอบคำถามอยู่หน้าจอ และกระบวนการสร้างชิ้นงานจำลองต้นแบบ ([Prototyping](#prototyping)) จะไร้ประโยชน์ทันทีหากไม่มีตัวคุณคอยนั่งจ้องมองเพื่อประเมินความรู้สึกตอบสนองต่อผลงานชิ้นจำลองนั้น

การเลือกนั่งเฝ้าคุมพวงมาลัยในลูปนี้ตลอดเวลา มีต้นทุนราคาสูงที่สุดที่คุณต้องจ่ายนั่นคือ "เวลาสมาธิความสนใจของคุณ" ซึ่งจัดว่าเป็นทรัพยากรที่มีความสดใหม่และขาดแคลนที่สุดในออฟฟิศ หนึ่งในทักษะการยกระดับประสิทธิภาพในการทำงานร่วมกับเอเจนต์ให้เก่งกาจขึ้นเรื่อย ๆ คือความสามารถในการทยอยโยกย้ายและสลัดเนื้องานส่วนที่ปลอดภัยออกไปรันนอกลูปนี้ให้ได้อย่างมั่นใจและไร้กังวล — โดยใช้วิธีวางสเปกข้อกำหนดแผนงานให้ละเอียดเคลียร์, วางระบบตรวจสอบผลลัพธ์อัตโนมัติแบบเด็ดขาด ([Automated check](#automated-check)) รองรับหลังบ้าน และโยนขั้นตอนตรวจทานผลงานทั้งหมดไปอยู่ตรงกระบวนการตรวจสอบโดยมนุษย์ในช่วงท้ายสุด ([Human review](#human-review)) แทนการนั่งเฝ้าดูพฤติกรรมการพิมพ์โค้ดของมันทุกบรรทัดตั้งแต่ต้นจนจบ

_ตัวอย่างการใช้งาน:_

"ชิ้นงานปรับปรุงระบบโยกย้ายฐานข้อมูล (schema migration) ชิ้นนี้ ผมสั่งเปิดโหมด AFK ปล่อยจอรันยาวทิ้งไว้ข้ามคืนเลยดีไหมครับ"

"อย่าหาทำเด็ดขาดครับ งานสเกลระดับ schema migration ต้องตั้งค่าคุมงานในแพทเทิร์น Human-in-the-loop เท่านั้นครับ ผมต้องการให้คุณคอยนั่งประกบจ้องดูผลการก้าวเดินในแต่ละสเตปด้วยตาตัวเอง เพื่อให้มีโอกาสพิมพ์สั่งดึงพวงมาลัยปรับทิศทางได้ทันที ในวินาทีที่มันเริ่มแผลงฤทธิ์เลือกหยิบฟิลด์คอลัมน์ข้อมูลมาทำเรื่อง backfill ผิดตำแหน่งครับ"

### AFK

#### English

Away from keyboard. A working pattern where the user kicks off a [session](#session) and leaves the [agent](#agent) to run unattended. The throughput multiplier of [AI](#ai) coding — many AFK sessions can run in parallel while you sleep, eat, or work on something else. Usually requires a permissive [permission mode](#permission-mode) plus [sandboxing](#sandbox) to be safe.

When you're not there, the agent handles ambiguity differently. While you're watching, an ambiguous decision surfaces as a question and you answer it; once you've walked away, the agent picks a default and keeps going, and every later decision builds on that guess. The characteristic failure is coming back to hours of finished, confident work built on a wrong call made in the first ten minutes. The work isn't sloppy — it's coherent, just coherent about the wrong thing.

Since you can't give input during the run, give it before and after instead. Before: resolve the ambiguity up front — a [grilling](#grilling) session, a written [spec](#spec) — so there are fewer gaps for the agent to fill alone. During: [automated checks](#automated-check) and [automated review](#automated-review) stand in for the attention you're not giving, failing fast on what can be caught mechanically. After: the run ends in something reviewable — a PR, not changes already merged. AFK doesn't remove [human review](#human-review); it defers all of it to the end, which is why what arrives at the end has to be worth reviewing. This is also why [AX](#ax) matters most in AFK runs — with no one watching, the environment is the only support the agent gets.

_Avoid:_ "background agent" — centers the machine ("running in the background") rather than the human pattern ("user has walked away"). AFK names the fact that matters: the user isn't watching.

_Usage:_

"I'm running this AFK — three sandboxed agents on the refactor, reviewing the PRs in the morning."

"[Bypass permissions](#agent-mode)?"

"Yeah, read-only [filesystem](#filesystem), no network."

#### ไทย

**Away From Keyboard** สำนวนติดปากของกลุ่มคนทำงานสายคอมพิวเตอร์ที่หมายถึงสภาวะ "การละสายตาเดินหลีกหนีออกนอกหน้าจอคอมพิวเตอร์" รูปแบบหรือแพทเทิร์นการทำงานร่วมกัน (working pattern) ที่กำหนดให้ตัวผู้ใช้งานพิมพ์ข้อความคำสั่งสั่งงานป้อนเป้าหมายเพื่อเปิดฉากเริ่มต้นรัน [session](#session) ทิ้งไว้ จากนั้นปล่อยจอยเดินหนีออกจากหน้าจอปล่อยปล่อยให้ตัว [agent](#agent) นั่งประมวลผลรันงานตามลำพังแบบไร้คนดูแล จัดเป็นฟังก์ชันตัวปั๊มยอดพลังผลิต (throughput multiplier) ตัวจริงของศาสตร์การสั่งงาน [AI](#ai) เขียนโค้ด — ช่วยเปิดโอกาสให้คุณสามารถเปิดสปอว์นหน้าต่างเซสชันทิ้งไว้พร้อมกันหลาย ๆ หน้าต่างให้มันรุมประมวลผลงานแบบคู่ขนาน (parallel) ในระหว่างที่คุณกำลังนอนหลับพักผ่อน, นั่งทานข้าว หรือกำลังโยกย้ายสายตาไปนั่งเคลียร์ภารกิจชิ้นอื่นที่มีความสำคัญสูงกว่า โดยปกติแล้วการเปิดรันงานในสไตล์ปล่อยจอยชิ้นนี้ จำเป็นต้องได้รับการตั้งค่าระดับโหมดควบคุมสิทธิ์แบบปล่อยผ่านออโต้ ([Permission mode](#permission-mode)) ควบคู่ไปกับการครอบกำแพงพื้นที่ปิดความปลอดภัย ([Sandbox](#sandbox)) เพื่อรองรับความปลอดภัยและป้องกันไม่ให้เกิดความเสียหายแก่ตัวเครื่องจริงภายนอก

ในวินาทีจังหวะเวลาที่คุณไม่ได้คอยนั่งเพ่งสายตาเฝ้าดูหน้าจอ ตัว agent จะมีพฤติกรรมการรับมือและแก้ไขโจทย์ปัญหาความคลุมเครือ (ambiguity) ในเนื้อความคำสั่งที่แตกต่างไปจากเดิมอย่างสิ้นเชิง ในยามที่คุณกำลังนั่งจ้องประกบมันอยู่ ทุก ๆ ประเด็นข้อกำหนดที่แฝงความไม่ชัดเจนจะถูกเด้งเตือนขึ้นมาเป็นคำถามเพื่อขอความชัดเจน และคุณสามารถพิมพ์ตอบเพื่อคุมทิศทางได้ทันที แต่ทันทีที่คุณเลือกสะบัดก้นเดินหนีออกจากหน้าจอ ตัวเอเจนต์จะใช้วิธีเลือกหยิบค่าเริ่มต้นมาตรฐาน (default) ตามสมมติฐานส่วนตัวของมันขึ้นมาสวมรอยแทน แล้วก้มหน้าก้มตาทำงานเดินหน้าต่อไปเรื่อย ๆ โดยคำสั่งและการตัดสินใจในขั้นตอนถัด ๆ ไปทั้งหมดจะถูกสร้างสะสมพอกพูนขึ้นอยู่บนฐานของข้อความคาดเดาในก้าวแรกสุดชิ้นนั้น ร่องรอยความล้มเหลวอันเป็นเอกลักษณ์เฉพาะตัวของโหมดนี้คือ การที่คุณกลับมาเปิดหน้าจอคอมพิวเตอร์อีกครั้งหลังจากปล่อยทิ้งไว้หลายชั่วโมง แล้วตื่นขึ้นมาพบกับกองทัพผลงานซอร์สโค้ดปลายทางมหาศาลที่ถูกสร้างเสร็จสมบูรณ์เรียบร้อยดีด้วยน้ำเสียงพฤติกรรมที่มั่นใจเต็มเปี่ยม แต่เนื้องานทั้งหมดนั้นถูกสร้างขึ้นมาอย่างสมเหตุสมผลและสอดคล้องอยู่บนฐานของการตัดสินใจที่คลาดเคลื่อนหลงทิศทางตั้งแต่ 10 นาทีแรกสุดที่เดินหนีไป เนื้องานปลายทางไม่ได้มีความสะเพร่าหรือเขียนโค้ดชุ่ย — ตัวโค้ดมีความสอดคล้องเรียบร้อยดีมาก (coherent) แค่มันสอดคล้องอยู่บนสิ่งที่ผิดฝาผิดตัวเท่านั้นเอง

เนื่องจากคุณสูญเสียโอกาสในการพิมพ์ป้อนข้อมูลอินพุตเพื่อคุมทิศทางในระหว่างที่เครื่องกำลังประมวลผลรันลูป แนวทางวิศวกรรมในการรับมือคือการสลับไปเน้นลงแรงบริหารจัดการข้อมูลในฝั่ง "ก่อนเริ่มรันงาน" และ "หลังรันเสร็จสิ้น" ให้เข้มงวดรุนแรงขึ้นแทน ขั้นตอนก่อนเริ่มรัน: จงสั่งเคลียร์จัดทำลายความคลุมเครือให้จบสิ้นตั้งแต่ช่วงหัวเสมอก่อนจะปล่อยงาน — โดยสั่งรันเฟสสัมภาษณ์เค้นความต้องการ ([Grilling](#grilling)) ร่วมกันก่อน หรือลงแรงเขียนเขียนไฟล์เอกสารข้อกำหนดคุณลักษณะโครงการ ([Spec](#spec)) บันทึกทิ้งไว้ให้เคลียร์คัด เพื่อจำกัดวงลดช่องว่างไม่ให้เอเจนต์เหลือพื้นที่ไปนั่งเดาสุ่มเอาเองตามลำพัง ขั้นตอนระหว่างรัน: ให้เปิดเชื่อมต่อสายใช้งานระบบตรวจสอบผลลัพธ์อัตโนมัติแบบเด็ดขาด ([Automated check](#automated-check)) และระบบตรวจทานงานอัตโนมัติเชิงคิดวิเคราะห์ ([Automated review](#automated-review)) เข้ามาทำหน้าที่ประจำการแทนสายตาของคุณ คอยทำหน้าที่สั่งสกัดและสั่งยกเลิกงานด่วน (fail fast) ทันทีที่ระบบกลไกคณิตศาสตร์ตรวจสอบพบความผิดปกติ และขั้นตอนหลังรันเสร็จสิ้น: จงตั้งค่าปลายทางให้ภารกิจสิ้นสุดลงในทรงของชิ้นงานที่มีโครงสร้างรองรับการเปิดอ่านตรวจทานได้อย่างสะดวกสบาย — เช่น คลี่คลายออกมาเป็นข้อเสนอการดึงโค้ดปรับแต่ง (Pull Request หรือ PR) บนระบบ git ห้ามตั้งค่าปล่อยปล่อยให้มันรันคำสั่งสั่งรวมโค้ดเข้าสู่สายหลัก (merge) โดยอัตโนมัติเด็ดขาด การเลือกปล่อยจอรันโหมด AFK ไม่ได้แปลว่าคุณสามารถตัดขั้นตอนการตรวจสอบตรวจสอบโดยมนุษย์ ([Human review](#human-review)) ทิ้งออกไปจากโลกได้ แต่อัตราส่วนคือมันแค่เลื่อนตารางเวลา (defers) ของขั้นตอนการตรวจทานทั้งหมดไปกองรวมกันอยู่ที่ช่วงท้ายสุดของภารกิจเท่านั้น ซึ่งนี่คือเหตุผลระดับคอขวดว่าทำไมชิ้นงานปลายทางที่คลอดออกมาตอนเช้า จำเป็นต้องอยู่ในทรงที่มีคุณค่าและสะดวกพอต่อการสละเวลาเปิดอ่าน ตรวจทาน และนี่คือสาเหตุที่ศาสตร์ประสบการณ์ทำงานของเอเจนต์ ([AX](#ax)) ทะยานขึ้นมามีความสำคัญสูงสุดในแพทเทิร์นการปล่อยจอรันโหมด AFK — เพราะในวินาทีที่ไร้ผู้คนคอยนั่งเฝ้าหน้าจอ พื้นที่สภาพแวดล้อมระบบภายนอกคลังโค้ดเบสคืออุปกรณ์ซัพพอร์ตเพียงชิ้นเดียวในโลกที่ตัวเอเจนต์สามารถหันหน้าไปพึ่งพาเพื่อกู้ชีพตัวเองได้

_สิ่งที่ควรเลี่ยง:_ การเรียกแพทเทิร์นปล่อยจอนี้ด้วยคำกว้าง ๆ ว่า "เอเจนต์ทำงานเบื้องหลัง" (background agent) — เพราะคำนี้มุ่งเน้นความสนใจไปที่อาการเคลื่อนไหวของตัวเครื่องจักรซอฟต์แวร์หลังบ้านมากเกินไป บดบังรายละเอียดของแพทเทิร์นธรรมชาติพฤติกรรมฝั่งมนุษย์ที่เลือกเดินสะบัดก้นหนีออกจากโต๊ะทำงาน คำว่า AFK ทำหน้าที่ระบุหัวใจสำคัญของกลไกชิ้นนี้ได้ดีที่สุด: คือคอยฟ้องเตือนสติว่าผู้ใช้งานไม่ได้กำลังนั่งเฝ้าดูหน้าจออยู่

_ตัวอย่างการใช้งาน:_

"ช่วงดึกคืนนี้ผมกะจะเปิดสั่งรันงานโหมด AFK ปล่อยทิ้งไว้ข้ามคืนครับ — โดยสปอว์นเอเจนต์รันใน sandbox พร้อมกัน 3 ตัวแยกย้ายกันไปรุมทาสก์งานปรับปรุงระบบ (refactor) แล้วพรุ่งนี้เช้าผมค่อยตื่นมาเปิดไล่ตรวจทาน PR ครับ"

"แล้วปรับระดับโหมดควบคุมสิทธิ์ไปเปิดใช้งานเป็นโหมดข้ามขั้นตอนยืนยันสิทธิ์สิทธิ์ออโต้ ([Bypass permissions](#agent-mode)) เลยใช่ไหมครับ"

"ใช่ครับ แต่ล็อกเพดานจำกัดวงสิทธิ์ให้ทำงานได้เฉพาะระบบไฟล์ ([Filesystem](#filesystem)) แบบอ่านได้อย่างเดียว และตัดการเชื่อมต่อสายเน็ตเวิร์กขาออกทั้งหมดเพื่อความปลอดภัยสูงสุดครับ"

### Automated check

#### English

A deterministic verification that runs in the [environment](#environment) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](#agent) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic _by design_.

Self-correction works as a loop. The agent makes a change, runs the check as a [tool call](#tool-call), and the failure output lands in its [context window](#context-window) — a type error with a file and line, a failing assertion with expected and actual values. That's enough for the agent to fix the problem and run the check again, around and around until it passes, with no human in the loop. Determinism is what makes the loop trustworthy: the same code always produces the same verdict, so a pass means something. A flaky check poisons this — the agent "fixes" code that was fine, or retries past a real failure.

This is why good checks are a large part of a codebase's [AX](#ax). An agent in a repo with strict types, a fast test suite, and a linter catches most of its own mistakes before you see them; an agent in a repo with none of those ships whatever it produces. The difference matters most in [AFK](#afk) runs, where checks are the only verification happening during the run. But a check only catches what it asserts — green checks mean the asserted properties hold, not that the code is right. The judgement-shaped gaps are what [automated review](#automated-review) and [human review](#human-review) are for.

_Avoid:_ "feedback loop" / "backpressure" — both lump checks together with review. _Avoid:_ "test" — tests are automated checks, but not all automated checks are tests.

_Usage:_

"The agent keeps shipping broken code in the AFK runs."

"What automated checks are wired into the [sandbox](#sandbox)?"

"Just the unit tests."

"Add typecheck and lint — it'll self-correct from those before the PR ever lands."

#### ไทย

กระบวนการรันระบบยืนยันความถูกต้องของผลลัพธ์ซอฟต์แวร์ด้วยกลไกคณิตศาสตร์แบบเด็ดขาด (deterministic verification) ซึ่งทำงานอยู่บนสภาพแวดล้อมระบบ ([environment](#environment)) — เช่น ชุดไฟล์เคสทดสอบระบบ (tests), ระบบเปิดสืบค้นเช็กประเภทตัวแปรข้อมูล (type checks), ซอฟต์แวร์สแกนตรวจสอบไวยากรณ์และดักจับโค้ดขยะ (linters), คำสั่งสั่งรันประกอบโครงสร้างระบบบิลด์ซอฟต์แวร์ (build) หรือสคริปต์ดักดักจับความเรียบร้อยก่อนสลักประวัติบันทึกข้อมูล (pre-commit hooks) ผลการตัดสินประเมินจะพ่นออกมาในทรงของตรรกะหน้ากระดานคำนวณแบบขาวดำตรงไปตรงมาเท่านั้น: คือสอบผ่าน (pass) หรือพังพินาศ (fail) โดยไม่มีการแฝงความคิดเห็นหรือใช้ดุลยพินิจเชิงมนุษย์ (no judgement) แฝงอยู่ข้างในเลย จัดเป็นสัญญาณข้อมูลขาเข้าหลักชั้นยอดที่ช่วยเปิดโอกาสให้ตัว [agent](#agent) สามารถดึงข้อความรายงานความล้มเหลวไปใช้ประมวลผลเพื่อแก้ไขข้อผิดพลาดด้วยตัวเองได้ทันทีหลังบ้าน (self-correct) โดยไม่จำเป็นต้องส่งสัญญาณรบกวนวิ่งมาขัดจังหวะดึงมนุษย์เข้ามาในลูปเลย เคสทดสอบระบบที่มีพฤติกรรมหลุดร่อนติดบ้างพังบ้างแบบสุ่มสี่สุ่มห้า (flaky test) จะถูกจัดสถานะว่าเป็นระบบตรวจสอบที่พังพินาศชำรุดเสียหาย ไม่ใช่ไม่นับว่ามีระบบตรวจสอบ; เพราะโครงสร้างระบบ automated check ถูกจำกัดและออกแบบขึ้นมาเพื่อให้มีพฤติกรรมตรรกะขาออกที่คงที่ตายตัวแน่นอนแม่นยำ _ตั้งแต่แรกเริ่มดีไซน์ (deterministic by design)_

วงจรการแก้ไขข้อผิดพลาดด้วยตัวเองหลังบ้าน (self-correction loop) จะทำงานประสานงานร้อยเรียงต่อกันเป็นวงลูปดังนี้: ตัวเอเจนต์ลงมือขยับปรับปรุงเนื้อหาซอร์สโค้ดเสร็จเรียบร้อย, ส่งคำสั่งเรียกใช้งานเครื่องมือตรวจสอบ ([tool call](#tool-call)) สั่งรันระบบเช็ก, ข้อมูลข้อความรายงานความล้มเหลว (failure output) จะวิ่งกลับมาวางแปะในพื้นที่หน้าต่างบริบท ([context window](#context-window)) ของมัน — เช่น ข้อความรายงานปัญหาประเภทตัวแปรผิดพลาดระบุบรรทัดและพิกัดไฟล์อย่างชัดเจน หรือรหัสฟ้องเคสตรวจสอบพังพร้อมแจกแจงค่าผลลัพธ์จริงเทียบกับค่าที่ระบบคาดหวัง ข้อมูลเทคนิคที่เคลียร์คัดเหล่านั้นมีความหนาแน่นเพียงพอที่จะช่วยชี้นำให้ agent สามารถดัดแปลงแก้ไขโค้ดแก้ไขปัญหาให้ตรงจุดได้ทันที และสั่งยิงคำสั่งกดรันระบบเช็กซ้ำใหม่อีกรอบ วนเวียนทำงานต่อเนื่องไปเรื่อย ๆ รอบแล้วรอบเล่าจนกระทั่งมิเตอร์หน้าจอแปรสภาพเป็นสีเขียวสอบผ่านทั้งหมด โดยไม่มี [human in the loop](#human-in-the-loop) โผล่เข้ามาเกี่ยวข้องเลยแม้แต่วินาทีเดียว คุณสมบัติความเป็น deterministic ของตัวระบบเช็กคือสิ่งเดียวในโลกที่ช่วยค้ำประกันให้วงลูปลักษณะนี้มีความน่าเชื่อถือในวิถีวิศวกรรม: เนื่องจากซอร์สโค้ดชุดเดิมจะต้องผลิตผลการตัดสินคำตอบเดิมออกมาเสมอ คำว่าสอบผ่าน (pass) จึงจะมีมูลค่าและค้ำประกันความรอดปลอดภัยของระบบได้อย่างแท้จริง เคสตรวจสอบระบบตัวไหนที่มีอาการติดบ้างพังบ้างหลุดร่อนสุ่มเดา (flaky check) จะเข้าไปทำลายและปนเปื้อนความน่าเชื่อถือของวงลูปนี้ทันที — ตัวเอเจนต์จะเริ่มแสดงพฤติกรรมสับสน หลงทิศ หันไปลงแรงเปิด "ดัดแปลงแก้ไข" เนื้อหาซอร์สโค้ดส่วนที่ความจริงดีอยู่แล้วให้พังพินาศ หรือก้มหน้าก้มตาพยายามรันวนซ้ำไปเรื่อย ๆ ข้ามผ่านข้อผิดพลาดที่ความจริงเป็นบั๊กระบบตัวจริงเสียงจริง

นี่คือเหตุผลระดับคอขวดว่าทำไมการจัดตั้งวางระบบยืนยันความถูกต้องที่มีคุณภาพสูง จึงกลายสภาพเป็นเสาหลักต้นใหญ่ที่แบกรับตัวเลขความคุ้มค่าค่าประสบการณ์ทำงานของเอเจนต์ ([AX](#ax)) ประจำโครงการ คลังซอฟต์แวร์โปรเจกต์ใดที่มีสเปกการล็อกประเภทตัวแปรอย่างเข้มงวดรุนแรง (strict types), บรรจุชุดไฟล์เคสทดสอบที่รันทำงานได้รวดเร็วทันใจ (fast test suite) และติดตั้งซอฟต์แวร์ linter คอยดักจับความสะอาด ตัวเอเจนต์จะสามารถทำหน้าที่เป็นผู้คัดกรองดักจับความผิดพลาดของตัวเองเกือบทั้งหมดให้เสร็จสิ้นได้ล่วงหน้า ก่อนที่เนื้องานจะเดินทางมาถึงสายตาของคุณ ส่วนคลังโค้ดเบสโปรเจกต์ใดที่ไร้การเหลียวแลระบบเหล่านี้ ปล่อยปละละเลยคลังว่างเปล่า ตัวเอเจนต์จะทำหน้าที่เป็นเพียงแค่ท่อส่งข้อมูลพ่นเนื้องานทุกอย่างที่มันเจเนอเรตเสร็จส่งตรงถึงมือคุณทันทีโดยไม่มีการกรองหลังบ้าน ความแตกต่างของเลเยอร์ระบบจุดนี้จะแผลงฤทธิ์รุนแรงและเห็นผลลัพธ์ต่างกันลิบลับในยามที่คุณสั่งรันงานโหมดปล่อยจอทิ้งไว้ข้ามคืน ([AFK](#afk)) เพราะระบบคำนวณตรวจสอบอัตโนมัติเหล่านี้คือที่พึ่งชิ้นเดียวในโลกทำหน้าที่คอยยืนเคียงข้างตรวจทานผลงานให้คุณในระหว่างชั่วโมงที่คุณหลับพักผ่อน แต่จงพึงระลึกจำข้อจำกัดข้อสำคัญนี้ไว้ให้ขึ้นใจเสมอว่า คำสั่งเช็กจะทำหน้าที่ดักจับได้เฉพาะเงื่อนไขตรรกะในพิกัดจุดที่ตัวมันได้รับการสลักคำสั่งท้าทาย (assert) ไว้ล่วงหน้าเท่านั้น — แถบไฟสีเขียวผ่านฉลุย (green checks) ค้ำประกันได้เพียงแค่ว่า 'เงื่อนไขคณิตศาสตร์ทุกข้อที่ระบุไว้ในระบบเช็กผ่านเกณฑ์ครบถ้วน' ไม่ได้ค้ำประกันว่า 'ซอร์สโค้ดชิ้นนี้มีความถูกต้องตามเจตนาใช้งานจริงเชิงธุรกิจ' ช่องว่างรูโหว่ขนาดใหญ่ที่เหลือที่ต้องอาศัยดุลยพินิจและการคิดวิเคราะห์แยกแยะ จึงเป็นพื้นที่บทบาทหน้าที่รับผิดชอบของระบบตรวจทานงานอัตโนมัติเชิงวิเคราะห์ ([Automated review](#automated-review)) และกระบวนการเปิดอ่านตรวจทานโดยมนุษย์ ([Human review](#human-review)) เข้ามารับไม้ต่อ

_สิ่งที่ควรเลี่ยง:_ การใช้คำศัพท์กว้าง ๆ เชิงวิทยาศาสตร์ระบบอย่างคำว่า "ลูปการป้อนข้อมูลสะท้อนกลับ" (feedback loop) หรือคำว่า "แรงดันต้านกลับหลังระบบ" (backpressure) — เพราะคำเหล่านี้มีความคลุมเครือเกินไป มักนำไปใช้เรียกเหมารวมลวก ๆ ควบเอาทั้งระบบเช็กคณิตศาสตร์ดิบและขั้นตอนวิเคราะห์รีวิวเชิงลึกมารวมอยู่ด้วยกัน และเลี่ยงการใช้คำว่า "ไฟล์เคสทดสอบ" (test) เดี่ยว ๆ — เพราะชุดเคสทดสอบระบบจัดว่าเป็นเพียงแค่ส่วนประกอบย่อยสมาชิกร่วมทีมตัวหนึ่งภายใต้ร่มเงาอันกว้างใหญ่ของโครงสร้างระบบ automated check เท่านั้น ไม่ใช่สมาชิกทั้งหมด

_ตัวอย่างการใช้งาน:_

"ตัว agent มันชอบส่งมอบซอร์สโค้ดที่มีอาการพังพินาศ ชำรุดเสียหาย เล็ดลอดติดเข้ามาในรายงานผลลัพธ์ตอนเช้าหลังจากสั่งรันโหมด AFK ทิ้งไว้ข้ามคืนอยู่เรื่อยเลยครับ"

"ในระบบพื้นที่ปิด ([sandbox](#sandbox)) ของบริษัทเรา มีการเปิดสั่งรันเชื่อมต่อสายใช้งานระบบ automated check ตัวไหนประจำการอยู่บ้างครับ"

"เปิดรันไว้เฉพาะตัวหน่วยทดสอบพื้นฐานยูนิตเทสต์ (unit tests) เฉย ๆ ครับ"

"สั่งเพิ่มฟังก์ชันเปิดตรวจสอบเช็กประเภทตัวแปรข้อมูล (typecheck) และซอฟต์แวร์สแกนไวยากรณ์ (lint) เสริมเข้าไปในระบบทันทีเลยครับ — ปล่อยให้มันทำหน้าที่คอยบีบให้เอเจนต์ลงมือดีบั๊กแก้ไขความสะอาดของโค้ดให้สอบผ่านจนเสร็จสิ้นล่วงหน้า ก่อนที่ข้อเสนอ Pull Request จะเดินทางมาถึงมือคุณครับ"

### Automated review

#### English

An [agent](#agent) reviewing another agent's work, often with a different [model](#model) or [system prompt](#system-prompt). Non-deterministic: it forms a judgement. Runs anywhere — pre-merge on a PR, post-hoc on commit history, mid-session as a [subagent](#subagent). An LLM-as-judge in CI is automated review, not an [automated check](#automated-check); what the assertion _does_ decides the category, not where it runs.

The separation from the working agent is what makes it work. Asking the agent that wrote the code to review its own work gets you very little — the [session](#session) that produced the bug also contains the reasoning that produced it, and the agent reads its own conclusions back as confirmation. A reviewer with a fresh [context window](#context-window) has none of that attachment: it sees the diff the way a stranger would, which is what review depends on. A different model or a review-specific system prompt sharpens this further — different blind spots, and a system prompt scoped to what you actually care about (security, API contracts, performance) rather than a vague "look for problems".

It slots between the other review layers. Automated checks are deterministic and catch what can be asserted mechanically; [human review](#human-review) is expensive and scales worst. Automated review sits in the middle: it catches judgement-shaped problems — a misleading function name, a missed edge case — at machine cost. Because it's non-deterministic, it can miss things and flag non-issues; treat it as a filter that raises the floor before a human looks, not a gate that replaces one.

_Avoid:_ "AI review" / "agent review" — too vague to distinguish from the working agent itself.

_Usage:_

"We're getting too many bad PRs from the [AFK](#afk) runs."

"Add an automated review step before merge — different model, separate system prompt, scoped to security and contract changes."

#### ไทย

กระบวนการรันระบบเพื่อเปิดอ่านและตรวจทานเนื้อหาซอร์สโค้ดผลงานอย่างเป็นระบบด้วยกลไกอัตโนมัติ โดยใช้วิธีสั่งสปอว์น [agent](#agent) อีกตัวหนึ่งขึ้นมาทำหน้าที่เปรียบเสมือนเป็นคณะกรรมการคอยตรวจสอบตรวจสอบผลงานของเอเจนต์ตัวแรก บ่อยครั้งมักได้รับการตั้งค่าระบบให้เลือกใช้งานโครงสร้างของตัวโมเดล ([model](#model)) คนละรุ่นกัน หรือป้อนคำสั่งข้อบังคับในระบบคำสั่งหลัก ([system prompt](#system-prompt)) คนละทรงแยกขาดออกจากกัน มีคุณสมบัติทางกายภาพเด่นชัดเรื่องความไม่แน่นอนของตรรกะข้อความขาออก (non-deterministic): เนื่องจากหน้าที่หลักของมันคือการใช้ตรรกะคิดวิเคราะห์และส่งมอบคำตัดสินประเมินเชิงดุลยพินิจ (forms a judgement) สามารถเปิดสั่งรันระบบประจำการได้ในทุก ๆ พิกัดตำแหน่งของกระบวนการทำงาน — ไม่ว่าจะเป็นขั้นตอนตรวจความเรียบร้อยก่อนกดปุ่มรวมโค้ด (pre-merge) บนหน้าจอเสนอแก้โค้ด (PR), ขั้นตอนการตรวจสอบย้อนหลังตามประวัติการลงบันทึกข้อมูล (commit history) หรือแม้กระทั่งการสั่งรันแบบเรียลไทม์ในระหว่างชั่วโมงทำงานกลาง [session](#session) ในฐานะระบบควบคุมย่อย ([subagent](#subagent)) ระบบการนำเทคโนโลยี LLM มาทำหน้าที่เป็นตุลาการตัดสินผลงาน (LLM-as-judge) ภายในระบบรันส่งงานอัตโนมัติ (CI) จะถูกจัดโครงสร้างให้อยู่ภายใต้ร่มเงาของหมวดหมู่การรีวิวตรวจทานชิ้นนี้เท่านั้น ไม่ใช่ระบบตรวจสอบอัตโนมัติแบบคณิตศาสตร์เด็ดขาด ([Automated check](#automated-check)); เพราะเกณฑ์การแบ่งหมวดหมู่จะวัดกันที่ตัว _พฤติกรรมเชิงลึกว่าฟังก์ชันรันคำสั่งข้อนั้นทำงานประมวลผลอย่างไร_ ไม่ได้วัดกันที่พิกัดตำแหน่งสถานที่สั่งรันโค้ด

หัวใจสำคัญระดับคอขวดที่ช่วยค้ำประกันให้โครงสร้างกลไกชิ้นนี้สามารถทำงานทำหน้าที่ตรวจทานได้อย่างมีประสิทธิภาพและดักจับข้อผิดพลาดได้จริง คือ "หลักการตีกรอบกั้นแยกตัวตนผู้ตรวจสอบออกจากตัวตนผู้ลงมือทำอย่างเด็ดขาด" การเดินหน้าไปตั้งคำถามแชตแนะแนวถามเอเจนต์ตัวเดิมที่เป็นคนนั่งเขียนโค้ดบรรทัดนั้นขึ้นมาว่า 'ช่วยเปิดรีวิวตรวจทานผลงานของตัวเองหน่อยสิว่ามีข้อผิดพลาดตรงไหนไหม' มักจะไม่ได้มูลค่าเชิงวิศวกรรมกลับคืนมาเลยแม้แต่นิดเดียว — เพราะภายในพื้นที่เซสชันประวัติการคุยอันเดิมที่คลอดโค้ดบั๊กชิ้นนั้นออกมา จะบรรจุตรรกะสมมติฐานและเหตุผลเบื้องหลังแนวคิดที่คลาดเคลื่อนฝังจมอยู่ข้างในหัวของมันด้วย และเอเจนต์ตัวเดิมจะทำหน้าที่เพียงแค่เปิดอ่านข้อสรุปความเชื่อส่วนตัวของมันซ้ำใหม่อีกรอบเพื่อใช้เป็นข้อความยืนยันสนับสนุนตัวเองว่าทำถูกต้องแล้ว แต่ในทางกลับกัน ตัวตนผู้รีวิวที่ได้รับการสปอว์นขึ้นมาใหม่พร้อมพื้นที่หน้าต่างบริบทอันใหม่แกะกล่อง ([context window](#context-window)) จะไม่มีพันธะผูกมัดหรือคราบตรรกะความลำเอียงเหล่านั้นหลงเหลืออยู่เลย: มันจะทำหน้าที่สแกนสายตามองดูเนื้อซอร์สโค้ดส่วนที่มีความเปลี่ยนแปลง (diff) ด้วยมุมมองและสายตาแวดล้อมที่บริสุทธิ์ราวกับเป็นคนแปลกหน้าภายนอกคลังโค้ด ซึ่งคุณสมบัตินี้เองคือหลักการแกนกลางพื้นฐานที่ศาสตร์แห่งการรีวิวตรวจทานโค้ด (code review) ทั่วโลกต้องพึ่งพา และแนวทางปฏิบัติให้ทรงพลังยิ่งขึ้นคือการเลือกขยับรุ่นโมเดลไปใช้รุ่นอื่น หรือป้อนคำสั่งระบบคำสั่งหลัก system prompt ที่ถูกตีกรอบขอบเขตมาเพื่องานรีวิวคัดกรองโดยเจาะจง — ช่วยเปิดโอกาสให้ระบบพกพาจุดบอดในสายตา (blind spots) คนละแบบกับเอเจนต์ตัวแรก และสามารถตีกรอบสายตาให้โฟกัสตรวจสอบเฉพาะในประเด็นเทคนิคที่คุณเป็นกังวลและให้ความสำคัญจริง ๆ เชิงลึก (เช่น เรื่องความปลอดภัยหลังบ้านช่องโหว่ระบบ, ข้อตกลงดีไซน์โครงสร้างรอยต่อ API หรือประสิทธิภาพความเร็วเชิงสถาปัตยกรรม performance) ดีกว่าการสั่งสั่งคำสั่งบรีฟงานแบบลอย ๆ กว้าง ๆ ขยะว่า "ช่วยมองหาปัญหาทั่วไปให้หน่อย"

ตำแหน่งพิกัดพิกัดที่ตั้งของกระบวนการนี้จะทำหน้าที่สอดแทรกคั่นกลางคอยประสานรอยต่ออยู่ตรงกลางระหว่างเลเยอร์การตรวจทานชั้นอื่น ๆ โครงสร้างระบบตรวจสอบอัตโนมัติแบบคณิตศาสตร์เด็ดขาด (Automated checks) มีข้อดีคือความแม่นยำรวดเร็วแบบร้อยเปอร์เซ็นต์แต่ทำหน้าที่ดักจับได้เฉพาะปัญหาเชิงกลที่ล็อกเงื่อนไข Assert สำเร็จรูปไว้ล่วงหน้าเท่านั้น ส่วนกระบวนการเปิดอ่านตรวจทานโดยมนุษย์ ([Human review](#human-review)) เป็นแนวทางที่มีต้นทุนราคาแพงลิบลิ่วและยากลำบากที่สุดในการขยายสเกลระบบรองรับปริมาณงานจำนวนมาก ระบบตรวจทานงานอัตโนมัติเชิงวิเคราะห์ Automated review จึงเข้ามายึดพื้นที่ดินแดนตรงกลางอันแสนว่างเปล่าชิ้นนี้: ทำหน้าที่คอยดักจับและคัดกรองโจทย์ปัญหาตระกูลที่ต้องอาศัยการใช้ดุลยพินิจและความคิดแยกแยะเชิงลึกในการตัดสิน — เช่น การตั้งชื่อฟังก์ชันสื่อความหมายคลาดเคลื่อนชวนหลงทิศทาง หรือประเด็นการหลงลืมละเลยมองข้ามเคสปัญหาขอบเขตระบบ (edge case) — ด้วยราคาต้นทุนการประมวลผลต่ำในสเกลราคาเครื่องจักรคอมพิวเตอร์ และเนื่องจากพฤติกรรมธรรมชาติของมันมีความไม่แน่นอนของข้อความขาออกแฝงอยู่ (non-deterministic) ตัวมันจึงสามารถเกิดอาการตาบอดทำปัญหาบางชิ้นหลุดรอดสายตาไปได้ หรือเกิดอาการตระหนกตกใจทักท้วงรายงานในประเด็นที่ความจริงไม่ได้มีปัญหาอะไรเลย (false positives); แนวทางปฏิบัติเชิงสถาปัตยกรรมระบบที่ถูกต้องคือจงป้อนและปฏิบัติต่อระบบตัวนี้ในฐานะ "เลเยอร์ตัวคัดกรองตะแกรงหยาบหลังบ้าน" ที่มีหน้าที่หลักเพื่อคอยยกระดับมาตรฐานเกณฑ์ขั้นต่ำของเนื้องาน (raises the floor) ให้เรียบร้อยเนี๊ยบก่อนจะจัดส่งถึงมือมนุษย์ ห้ามด่วนสรุปทึกทักทักท้วงนำระบบตัวนี้ไปใช้งานเป็นประตูกั้นสิทธิ์ตัวสุดท้ายเพื่อหวังจะนำมาใช้ทดแทนสายตาของมนุษย์โดยเด็ดขาด

_สิ่งที่ควรเลี่ยง:_ การใช้คำศัพท์กว้าง ๆ ไร้ขอบเขตอย่างคำว่า "รีวิวโดยเอไอ" (AI review) หรือคำว่า "เอเจนต์รีวิว" (agent review) — เพราะคำเหล่านี้มีความคลุมเครือเกินไป ไม่สามารถสื่อความชัดเจนเชิงโครงสร้างแยกขาดออกมาให้เห็นพิกัดความต่างระหว่างตัวเอเจนต์ผู้ลงมือเขียนโค้ดกับตัวเอเจนต์ผู้ทำหน้าที่นั่งแท่นรีวิวได้

_ตัวอย่างการใช้งาน:_

"เรากำลังเผชิญหน้ากับโจทย์ปัญหาจำนวนข้อเสนอ Pull Request ที่มีคุณภาพห่วยแตกคลาดเคลื่อนหลงทิศ หลุดเล็ดลอดออกมาจากลูปการปล่อยจอรันงานข้ามคืน ([AFK](#afk)) ในปริมาณที่หนาแน่นหนาตาเกินไปแล้วครับ"

"สั่งเพิ่มสเตปขั้นตอนการรันระบบตรวจทานงานอัตโนมัติเชิงวิเคราะห์ (automated review) คั่นกลางเข้าไปในระบบบอร์ดทำงานล่วงหน้าก่อนจะยอมสิทธิ์ยอมให้กดปุ่มรวมโค้ด (merge) สิครับ — โดยเลือกใช้ตัวโมเดลคนละรุ่น กั้นแยก system prompt ออกไปอีกหนึ่งใบแยกต่างหาก และตีกรอบจำกัดสายตาให้คอยตรวจสอบคัดกรองเฉพาะในประเด็นความปลอดภัยหลังบ้านและร่องรอยการขยับปรับเปลี่ยนดีไซน์โครงสร้างข้อกำหนดสัญญา API ครับ"

### Human review

#### English

The user reading the code the [agent](#agent) produced and forming a judgement on it. Reading the diff or the changed files counts; reading the agent's _description_ of what it did does not — narration is not the artifact. The description is a [secondary source](#secondary-source), written by the party being reviewed; the diff is the [primary source](#primary-source), and review means reading it.

Agents raise the volume of code produced, so review becomes the bottleneck. One useful idea is layering different review strategies. [Automated checks](#automated-check) catch the mechanical failures, [automated review](#automated-review) catches the describable ones, and human review is reserved for what only you can judge — whether the change is the right change, whether the approach fits the codebase, whether this should exist at all.

Review is also cheaper earlier. Reading a plan before work starts, or a small diff mid-flight, takes minutes; excavating a finished branch after an [AFK](#afk) run takes longer. Where you place the review checkpoint is a [human-in-the-loop](#human-in-the-loop) decision, not an afterthought.

_Avoid:_ "code review" alone — ambiguous between human and automated.

_Usage:_

"I human-reviewed the AFK output."

"You read the diff or just the summary?"

"Diff. The summary said it deleted dead code — turned out the function was called from a generated file."

#### ไทย

กระบวนการทำงานที่ตัวผู้ใช้งานทำการเปิดอ่านเนื้อซอร์สโค้ดไฟล์จริงที่ตัว [agent](#agent) ดำเนินการผลิตเจเนอเรตส่งมอบออกมา แล้วใช้ดุลยพินิจตรรกะความคิดเชิงมนุษย์ในการประเมินและตัดสินใจให้คำสั่งคำตัดสินแก่ชิ้นงานนั้น การสละเวลาเปิดอ่านรายละเอียดความเปลี่ยนแปลงของบรรทัดคำสั่งโค้ด (diff) หรือการเปิดไฟล์ข้อมูลที่ถูกแก้ไขปรับแต่งเพื่อไล่กวาดสายตาตรวจสอบตรรกะจริง ๆ ถือว่าสอบผ่านคุณสมบัติได้รับสิทธิ์นับแต้มอยู่ในหมวดหมู่นี้ทั้งหมด; ส่วนการเลือกอ่านเพียงแค่ข้อความประโยคคำอธิบายสรุปความย่อสรรพคุณ (_description_) ของเอเจนต์ที่มันพิมพ์ระบุบอกว่ามันได้ลงมือทำสิ่งใดลงไปบ้าง จะ **ไม่มีสิทธิ์ได้รับสิทธิ์นับแต้มจัดอยู่ในหมวดหมู่นี้เด็ดขาด** — เพราะข้อความคำพูดบอกเล่าเรื่องราวนั้นไม่ใช่ชิ้นงานจริงดั้งเดิม ข้อมูลประโยคคำบรรยายเหล่านั้นมีสถานะเป็นเพียงแหล่งข้อมูลสรุปขั้นรอง ([Secondary source](#secondary-source)) ที่ถูกเรียบเรียงและพิมพ์ขึ้นโดยฝั่งตัวตนผู้ถูกรีวิวตรวจสอบเองข้างหลังแชต; ส่วนตัวไฟล์ diff ต่างหากที่มีสถานะเป็นแหล่งข้อมูลปฐมภูมิ ([Primary source](#primary-source)) ตัวจริงเสียงจริง และศาสตร์แห่งการรีวิวตรวจสอบตรวจทานผลงานย่อมหมายถึงการก้มหน้าก้มตาเปิดอ่านเนื้อหาจากคลังข้อมูลดิบต้นฉบับจริงชิ้นนั้นเท่านั้น

เนื่องจากกองทัพเอเจนต์พกพาขีดความสามารถในการระดมปั๊มกำลังผลิตเจเนอเรตชิ้นส่วนโค้ดซอฟต์แวร์ออกมาได้ในปริมาณที่หนาแน่นและสเกลความเร็วที่สูงมาก ส่งผลให้สเตปขั้นตอนการรีวิวตรวจทานของมนุษย์ทรัพยากรตรงนี้ ทะยานขึ้นมากลายเป็นคอขวดจุดที่ช้าที่สุดของกระบวนการทำงาน (bottleneck) โดยปริยาย แนวทางปฏิบัติเชิงสถาปัตยกรรมระบบที่ชาญฉลาดคือการจัดสรรวางเลเยอร์แบ่งกลยุทธ์การรีวิวแยกตามระดับความลึกซึ้งของงาน โครงสร้างระบบตรวจสอบอัตโนมัติแบบคณิตศาสตร์เด็ดขาด ([Automated checks](#automated-check)) จะรับหน้าที่รับผิดชอบคอยดักจับความล้มเหลวเชิงกลไกทั่วไปหลังบ้าน, ระบบตรวจทานงานอัตโนมัติเชิงวิเคราะห์ ([Automated review](#automated-review)) รับไม้ต่อคอยดักคัดกรองโจทย์ปัญหาตระกูลที่สามารถพิมพ์ระบุอธิบายความชัดเจนเป็นลายลักษณ์อักษรได้ล่วงหน้า และปล่อยวางสงวนทรัพยากรเวลาอันแสนแพงของขั้นตอน human review เอาไว้ให้แก่ประเด็นเฉพาะทางชั้นบนสุดที่มีเพียงแค่ตัวคุณคนเดียวเท่านั้นที่จะสามารถใช้ดุลยพินิจคัดกรองตัดสินได้ — เช่น การประเมินว่าทิศทางการปรับเปลี่ยนโค้ดชิ้นนี้จัดว่าเป็นแนวทางที่ถูกต้องตรงตามเป้าหมายธุรกิจระยะยาวจริงหรือไม่, สไตล์และดีไซน์เชิงโครงสร้างชิ้นนี้มีความสอดคล้องเหมาะสมเข้ากับวัฒนธรรมคลังโค้ดเบสเดิมประจำบริษัทไหม หรือแม้กระทั่งการตั้งคำถามใหญ่ว่า 'ชิ้นงานตัวนี้มันสมควรถูกสร้างขึ้นมามีตัวตนอยู่บนโลกใบนี้ตั้งแต่แรกหรือไม่'

นอกจากนี้ กระบวนการตรวจทานผลงานจะมีต้นทุนราคาประหยัดและเซฟเวลาสมาธิของคุณได้มากยิ่งขึ้น หากคุณเลือกจัดวางพิกัดจุดเช็กพอยต์ (checkpoint) เอาไว้ในช่วงต้น ๆ ของกระบวนการทำงาน การสละเวลาคัดกรองเปิดอ่านไฟล์ข้อกำหนดแผนงาน (plan) บรรทัดสั้น ๆ ก่อนที่จะปล่อยไฟเขียวให้ระบบเริ่มสตาร์ทลงมือลุยงาน หรือการเปิดกวาดสายตาดูไฟล์ diff ขนาดเล็ก ๆ ในระหว่างชั่วโมงรันระบบกลางทาง จะใช้พื้นที่เวลาเพียงแค่ไม่กี่นาทีเท่านั้น; ดีกว่าการต้องมานั่งขุดดินทำประวัติศาสตร์โบราณคดีแหวกสายตาไล่แกะรอยประเมินผลงานบนกิ่งสายพัฒนาโค้ด (branch) ขนาดใหญ่ยักษ์ที่เจเนอเรตเสร็จสมบูรณ์เรียบร้อยแล้วหลังจากปล่อยจอรันโหมดรันงานยาวตามลำพัง ([AFK](#afk)) ทิ้งไว้หลายชั่วโมง การประเมินและคัดเลือกพิกัดจัดตั้งจุด checkpoint เพื่อรีวิวตรวจทานงาน จึงเป็นส่วนหนึ่งของกระบวนการตัดสินใจเชิงดีไซน์ว่าคุณต้องการดึงคนเข้ามาร่วมคุมพวงมาลัยคุมระดับความเสี่ยงมากน้อยเพียงใด ([Human-in-the-loop](#human-in-the-loop)) ห้ามปล่อยปละละเลยมองข้ามเรื่องนี้ว่าเป็นเพียงแค่เรื่องจิปาถะปลีกย่อยที่ค่อยมานั่งคิดเอาดาบหน้าหลังจากงานเสร็จสิ้นแล้วเด็ดขาด

_สิ่งที่ควรเลี่ยง:_ การใช้คำศัพท์คำว่า "รีวิวโค้ด" (code review) ลอย ๆ โดด ๆ โดยไม่มีการระบุสะกดคำสร้อยกำกับคำว่ามนุษย์ข้างหน้า — เพราะคำนี้มีความคลุมเครือเชิงระบบสูงมากในยุคปัจจุบัน ไม่สามารถแยกแยะความต่างระหว่างสายตาของมนุษย์กับระบบรันโมเนิเตอร์ออโต้หลังบ้านได้

_ตัวอย่างการใช้งาน:_

"ผมดำเนินการรันขั้นตอน human review ตรวจรับมอบผลงานขาออกจากโหมดรันยาว AFK เรียบร้อยแล้วครับ"

"คุณได้เปิดอ่านแกะรอยดูรายละเอียดเนื้อโค้ดในไฟล์ diff จริง ๆ หรือเลือกอ่านเฉพาะข้อความพิมพ์สรุปแชตย่อหน้าบนหน้าจอครับ"

"เปิดอ่านในไฟล์ diff ตัวจริงเลยครับ ซึ่งโชคดีมากเพราะในข้อความสรุปแชตมันพิมพ์อธิบายบอกสรรพคุณไว้สั้น ๆ แค่ว่าได้ทำการสั่งลบโค้ดขยะส่วนที่ไม่มีใครใช้งานทิ้งไป (deleted dead code) แต่พอเปิดแกะดูโค้ดจริง ๆ ปรากฏว่าฟังก์ชันคอมพิวเตอร์ชิ้นนั้นเบื้องหลังดันถูกระบบเรียกใช้งานผ่านทางไฟล์ซอฟต์แวร์ที่ถูกเจเนอเรตขึ้นมาออโต้ (generated file) อยู่ครับ เกือบพังพินาศยกเครื่องแล้วครับ"

### Vibe coding

#### English

A working pattern where the user accepts the [agent](#agent)'s code without [human review](#human-review). The diff is treated as opaque — what matters is whether the program behaves, not what's inside. [Automated review](#automated-review) and [automated checks](#automated-check) may still run; vibe coding is silent on both.

The term comes from Andrej Karpathy, who [coined it in early 2025](https://x.com/karpathy/status/1886192184808149383): you "fully give in to the vibes" and "forget that the code even exists" — describe what you want, accept what comes back, and judge it by running it.

Vibe coding trades inspection for speed. Reading diffs is usually the slowest step in agent-driven work, so dropping it removes the main bottleneck. For code whose failures are cheap — [prototypes](#prototyping), one-off scripts, internal tools — that's a reasonable trade. The risk scales with the code's lifespan and stakes.

The cost arrives later. Vibe-coded changes accumulate into a codebase nobody has read, and behaviour was the only thing checked — so anything behaviour doesn't surface, like a secret written to logs, a missing edge case, or quietly wrong data handling, ships unseen. The first time someone debugs the system is the first time anyone reads the code. With human review gone, whatever automated verification still runs — tests, types, automated review — is the only gate the code passes through.

_Avoid:_ "vibe coding" as a synonym for "low-quality AI coding" — the term names the review stance, not the resulting code.

_Usage:_

"Did you read what it changed in the auth flow?"

"Vibe coded it — login still works, that's all I checked."

"Read the diff before you push, vibing on auth is how secrets leak into logs."

#### ไทย

รูปแบบการทำงานที่ผู้ใช้งานเลือกที่จะกดยอมรับซอร์สโค้ดที่สร้างโดย [agent](#agent) เข้าสู่ระบบทันทีโดยไม่มีกระบวนการตรวจสอบจากมนุษย์ ([human review](#human-review)) ข้อมูลส่วนต่างของการแก้ไขโค้ด (diff) จะถูกปฏิบัติในลักษณะของวัตถุทึบแสง (กล่องดำ) สิ่งที่ผู้ใช้ให้ความสำคัญมีเพียงแค่พฤติกรรมภายนอกของโปรแกรมว่าสามารถทำงานตอบสนองได้ตามต้องการหรือไม่ โดยไม่สนใจโครงสร้างโค้ดภายใน ทั้งนี้ ระบบตรวจสอบกึ่งอัตโนมัติ ([automated review](#automated-review)) และระบบยืนยันผลเชิงกลไก ([automated checks](#automated-check)) อาจจะยังคงรันอยู่ตามปกติ ตัวกลไก vibe coding จะไม่ได้เข้าไปยุ่งเกี่ยวหรือเปลี่ยนแปลงกระบวนการอัตโนมัติทั้งสองส่วนนี้

คำศัพท์นี้มีที่มาจากแอนเดรจ คาร์พาที (Andrej Karpathy) ซึ่งเป็นผู้[คิดค้นนิยามคำนี้ขึ้นในช่วงต้นปี ค.ศ. 2025 (พ.ศ. 2568)](https://x.com/karpathy/status/1886192184808149383) โดยอธิบายพฤติกรรมไว้ว่า เป็นสภาวะที่คุณ "ปล่อยใจยอมรับไปกับกระแสและท่วงทำนองอย่างเต็มตัว" (fully give in to the vibes) และ "ลืมไปเลยด้วยซ้ำว่ามีตัวซอร์สโค้ดรันอยู่บนโลก" หน้าที่ของคุณมีเพียงแค่พิมพ์อธิบายสิ่งที่คุณต้องการ กดยอมรับโค้ดทุกอย่างที่ระบบส่งคืนกลับมา แล้วตัดสินคุณภาพของมันผ่านการสั่งรันโปรแกรมดูพฤติกรรมเท่านั้น

vibe coding เป็นการแลกเปลี่ยนโดยยอมละทิ้งกระบวนการตรวจสอบโค้ดอย่างละเอียดเพื่อแลกกับความเร็วในการพัฒนา เนื่องจากขั้นตอนการนั่งเปิดอ่านไฟล์ diff มักจะเป็นคอขวดที่ทำงานได้ช้าที่สุดในการเขียนโค้ดร่วมกับ agent การตัดขั้นตอนนี้ทิ้งไปจึงช่วยทลายคอขวดหลักออกไปได้ทันที สำหรับโค้ดเบสที่มีราคาความเสียหายต่ำหากเกิดความล้มเหลว เช่น โครงสร้างชิ้นงานจำลอง ([prototypes](#prototyping)) สคริปต์สั้น ๆ ที่เขียนขึ้นมาเพื่อใช้งานครั้งเดียว หรือเครื่องมือภายในออฟฟิศ การแลกเปลี่ยนนี้จัดว่าเป็นข้อตกลงที่สมเหตุสมผล ระดับความเสี่ยงจะขยับสเกลสูงขึ้นตามอายุขัยของโค้ดเบสและมูลค่าความเสียหายของระบบ

ต้นทุนที่แท้จริงจะตามมาเรียกเก็บเงินจากคุณในภายหลัง การดัดแปลงโค้ดด้วยแนวทาง vibe coding จะสะสมพอกพูนขึ้นจนกลายเป็นคลังโค้ดเบสขนาดใหญ่ที่ไม่มีมนุษย์คนไหนในบริษัทเคยเปิดอ่านมันเลยแม้แต่บรรทัดเดียว และการที่พฤติกรรมภายนอกเป็นสิ่งเดียวที่ถูกตรวจสอบ ส่งผลให้ช่องโหว่ใด ๆ ก็ตามที่การรันโปรแกรมปกติไม่สามารถสะท้อนขึ้นมาบนหน้าจอได้ เช่น การแอบเขียนข้อมูลความลับหรือรหัสผ่านลงไฟล์บันทึกระบบ (logs) เคสปัญหาขอบเขตที่ขาดหาย หรือตรรกะการจัดการข้อมูลที่ผิดพลาดอย่างเงียบ ๆ จะถูกจัดส่งขึ้นระบบใช้งานจริงไปทั้งอย่างนั้น และครั้งแรกที่มีคนต้องมานั่งดีบั๊กแก้ไขระบบพัง ย่อมกลายเป็นครั้งแรกในประวัติศาสตร์ที่มีมนุษย์เปิดอ่านโค้ดชุดนั้นจริง ๆ เมื่อกระบวนการตรวจทานจากมนุษย์ถูกตดทิ้งไป ด่านปราการด่านสุดท้ายที่จะช่วยปกป้องโค้ดเบสได้จึงเหลือเพียงแค่บรรดาระบบยืนยันผลอัตโนมัติเท่าที่ยังคงเปิดรันอยู่เท่านั้น (เช่น ระบบทดสอบ ไทป์ และระบบตรวจทานอัตโนมัติ)

_สิ่งที่ควรเลี่ยง:_ การใช้คำว่า "vibe coding" ในฐานะคำไวพจน์ที่มีความหมายสื่อถึง "การเขียนโค้ดด้วย AI คุณภาพต่ำ" เพราะคำนี้ถูกนิยามขึ้นเพื่อระบุถึงจุดยืนในการตรวจทานผลงาน (review stance) ไม่ได้หมายถึงคุณภาพของตัวซอร์สโค้ดที่ผลิตออกมา

_ตัวอย่างการใช้งาน:_

"นายได้เปิดเช็กดูไฟล์ diff ไหมว่ามันเข้าไปขยับแก้ไขตรรกะอะไรในระบบยืนยันตัวตน (auth flow) บ้าง"

"สาย vibe coding เลยครับเมื่อกี้ ลองกดทดสอบล็อกอินแล้วยังรันผ่านฉลุยอยู่ ผมเช็กแค่นั้นแหละ"

"กลับไปเปิดอ่านไฟล์ diff ตรวจทานด่วนเลยก่อนจะกดดันโค้ดขึ้นระบบ (push) การไปนั่งปล่อยจอยทำ vibing บนระบบ auth คือช่องทางหลักที่ทำให้ข้อมูลความลับหลุดรั่วลงไฟล์ logs เลยนะ"

### Design concept

#### English

The shared understanding of what's being built, held in common between user and [agent](#agent) but separate from any asset. Brooks' term (_The Design of Design_): the conversation, [handoff artifacts](#handoff-artifact), and the code are all assets that try to capture or reach the design concept, but none of them _are_ it. Quality of the design concept is felt through the quality of the conversation that built it.

The term names the gap behind a familiar frustration: the agent writes exactly what you asked for and it's still wrong. The usual cause is that you hadn't fully figured out what you wanted. The design concept wasn't finished in your own head — your prompt captured the parts you'd worked out, and was silent on the parts you hadn't. The agent filled those silences with its own assumptions, because there was nothing to align with. Nothing malfunctioned. There was no shared design concept, because there wasn't yet a whole one to share.

You can tell a design concept is shared the same way you can with a colleague: the other party starts answering questions you haven't asked yet the way you would. Until then, the work is conversation — [grilling](#grilling) is the deliberate version — and writing a [spec](#spec) too early just captures the misalignment in a more durable asset. The design concept also moves as you learn; assets lag it, which is why a spec faithful to last week's understanding can still mislead this week's session.

_Usage:_

"It's writing exactly what I asked for and it's still wrong."

"You don't share a design concept yet — it's filling gaps with assumptions. Keep talking until cancellation, refunds, and partial fulfilment all line up between you before you let it write a spec."

#### ไทย

ความเข้าใจร่วมกันระหว่างผู้ใช้และ [agent](#agent) เกี่ยวกับสิ่งที่จะสร้างขึ้น โดยแนวคิดนี้จะแยกต่างหากจากชิ้นงานหรือไฟล์ระบบใด ๆ เป็นคำศัพท์ที่เฟรด บรูคส์ (Fred Brooks) เคยนิยามไว้ในหนังสือ _The Design of Design_ ว่า ทั้งบทสนทนา ไฟล์บันทึกส่งงาน ([handoff artifacts](#handoff-artifact)) และตัวซอร์สโค้ดจริง ล้วนเป็นเพียงชิ้นงานที่พยายามจะถอดรหัสหรือเข้าถึงตัว design concept เท่านั้น แต่ไม่มีชิ้นงานไหนเลยที่*ตัวมันเองคือ*แนวคิดการออกแบบนั้น คุณภาพของ design concept จะสัมผัสได้ผ่านคุณภาพของบทสนทนาที่สร้างมันขึ้นมา

คำนี้ถูกหยิบยกขึ้นมาเพื่ออธิบายรากเหง้าของความอึดอัดใจที่พบได้บ่อยในการทำงาน นั่นคือการที่ agent เขียนโค้ดออกมาได้ถูกต้องตรงตามคำสั่งที่คุณพิมพ์ไปทุกประการ แต่ผลงานปลายทางกลับยังไม่ใช่สิ่งที่คุณต้องการ สาเหตุมักเกิดจากการที่คุณเองยังไม่ได้ตกผลึกอย่างแนบเนียนว่าแท้จริงแล้วต้องการอะไร ตัว design concept ยังไม่เสร็จสมบูรณ์ในหัวของคุณเอง ส่งผลให้ prompt ที่ส่งไปสะท้อนเฉพาะส่วนที่คุณคิดตกแล้ว แต่กลับนิ่งเงียบในส่วนที่คุณยังไม่ได้วางแผน ฝั่ง agent จึงเลือกที่จะเติมเต็มความเงียบเหล่านั้นด้วยข้อสมมติฐานและการตั้งค่าเริ่มต้นของมันเอง เพราะไม่มีแนวคิดส่วนกลางให้มันใช้จัดแนวร่วม (align) ด้วย ไม่มีส่วนใดทำงานผิดพลาด แต่เป็นเพราะระบบไม่มี design concept ส่วนกลางที่สมบูรณ์พอที่จะแชร์ร่วมกันตั้งแต่แรก

คุณสามารถรับรู้ได้ว่า design concept นั้นถูกแชร์ร่วมกันอย่างสมบูรณ์แล้วด้วยวิธีเดียวกับที่คุณใช้สังเกตเพื่อนร่วมงาน นั่นคือ เมื่ออีกฝ่ายเริ่มตอบคำถามในสิ่งที่คุณยังไม่ได้เอ่ยปากถามในแนวทางเดียวกับที่คุณคิดไว้เป๊ะ ก่อนจะไปถึงจุดนั้น กระบวนการทำงานทั้งหมดจะเป็นเรื่องของบทสนทนาโต้ตอบ โดยมีกลไก [การซักไซ้ไล่เลียง](#grilling) (grilling) เป็นเวอร์ชันที่ตั้งใจทำขึ้นอย่างเป็นระบบ และการรีบร้อนเขียนเอกสารข้อกำหนดทางเทคนิค ([spec](#spec)) เร็วเกินไป เป็นเพียงการบันทึกความไม่สอดคล้องกันของแนวคิดลงในชิ้นงานที่ถาวรขึ้นเท่านั้น นอกจากนี้ design concept สามารถขยับเขยื้อนเปลี่ยนทิศทางได้เสมอเมื่อคุณเกิดการเรียนรู้เพิ่มขึ้น ตัวชิ้นงานต่างหากที่จะตามหลังแนวคิดอยู่ก้าวหนึ่งเสมอ ซึ่งเป็นเหตุผลว่าทำไม spec ที่สอดคล้องกับความเข้าใจเมื่อสัปดาห์ก่อน จึงสามารถชี้นำ [session](#session) ในสัปดาห์นี้ให้หลงทางได้

_ตัวอย่างการใช้งาน:_

"มันเขียนโค้ดออกมาตรงตามที่สั่งเป๊ะเลยนะ แต่ทำไมผลลัพธ์พอมารันจริงมันยังดูไม่ใช่ก็ไม่รู้"

"เป็นเพราะคุณกับมันยังไม่มี design concept ร่วมกันครับ มันเลยเติมเต็มช่องว่างที่เหลือด้วยการเดาเอาเองทั้งนั้น แนะนำให้คุยเคลียร์กันให้จบก่อนว่าระบบยกเลิกตั๋ว การคืนเงิน และกรอบเวลาทำงานร่วมกันอย่างไรให้เห็นภาพตรงกัน ก่อนที่จะปล่อยให้มันลงมือเขียน spec ครับ"

### Grilling

#### English

A technique for developing a [design concept](#design-concept) with an [agent](#agent): the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each. Slows the rush to a finished plan — no [handoff artifact](#handoff-artifact) is written until the concept stabilises.

The technique exists because agents fill gaps silently. Asked to write a [spec](#spec) from a two-line prompt, the agent doesn't stop at the decisions you haven't made — it picks defaults and writes them in. The result looks complete, and the guesses are indistinguishable from the choices, so you discover them late: at review, or when the built feature handles an edge case in a way you never chose. Grilling inverts this — instead of guessing, the agent has to ask.

It's a [human-in-the-loop](#human-in-the-loop) technique: your answers are the input. When a question can't be answered in conversation — you'd have to see the thing — switch to [prototyping](#prototyping).

_Usage:_

"It went straight to writing the spec and got the cancellation logic wrong."

"Grill it first — make it ask you about partial cancels, refunds, and timing before it commits anything to the doc. Cheaper to resolve in conversation than in code."

#### ไทย

เทคนิคในการพัฒนาแนวคิดการออกแบบ ([design concept](#design-concept)) ร่วมกับ [agent](#agent) โดยตัว agent จะทำหน้าที่สัมภาษณ์ผู้ใช้งานเชิงวิพากษ์แบบโสเครติส (Socratic method) เจาะลึกทีละการตัดสินใจ พร้อมเสนอแนะแนวทางที่แนะนำสำหรับแต่ละหัวข้อไปพร้อมกัน กระบวนการนี้ช่วยชะลอความรีบร้อนในการกระโจนเข้าสู่การเขียนแผนงานสำเร็จรูป โดยจะไม่มีการเขียนไฟล์บันทึกส่งงาน ([handoff artifact](#handoff-artifact)) ใด ๆ ออกมาจนกว่าตัวแนวคิดการออกแบบจะนิ่งและเสถียรพอ

เทคนิคนี้ถูกคิดขึ้นมาเพราะโดยธรรมชาติแล้ว agent มักจะชอบเติมเต็มช่องว่างของข้อมูลอย่างเงียบเชียบ หากคุณสั่งให้มันเขียนเอกสารข้อกำหนด ([spec](#spec)) จาก prompt สั้น ๆ เพียงสองบรรทัด ตัว agent จะไม่หยุดทำงานตรงจุดที่คุณยังไม่ได้ตัดสินใจ แต่มันจะหยิบเอาค่าเริ่มต้น (defaults) ของมันเองใส่เข้าไปแทน ผลลัพธ์ปลายทางที่ได้จะดูสมบูรณ์สละสลวยดี และข้อเท็จจริงที่คุณเลือกกับข้อสมมติฐานที่มันเดาขึ้นมาจะกลืนเนื้อเป็นเนื้อเดียวกันจนแยกไม่ออก ส่งผลให้คุณไปตรวจพบความจริงในจังหวะที่สายเกินไป เช่น ตอนตรวจรับงาน หรือตอนที่ฟีเจอร์นั้นถูกนำไปรันจริงแล้วจัดการเคสปัญหาขอบเขต (edge case) ในแนวทางที่คุณไม่เคยเลือก กระบวนการ grilling จะพลิกกลับตรรกะนี้ แทนที่จะปล่อยให้มันคิดเดาไปเอง บังคับให้ agent ต้องเอ่ยปากถามคุณในทุกจุด

กระบวนการนี้เป็นเทคนิคที่มีมนุษย์คุมพวงมาลัย ([human-in-the-loop](#human-in-the-loop)) โดยคำตอบของคุณจะทำหน้าที่เป็นข้อมูลนำเข้าโดยตรง และเมื่อใดก็ตามที่บทสนทนาเดินทางไปถึงจุดที่คำถามไม่สามารถตอบได้ด้วยคำพูดเพียงอย่างเดียว เช่น งานที่จำเป็นต้องเห็นภาพกราฟิกหรือหน้าจอจริงก่อนจึงจะตัดสินใจได้ ให้สลับโหมดไปใช้เทคนิค [การสร้างชิ้นงานจำลอง](#prototyping) (prototyping) แทน

_ตัวอย่างการใช้งาน:_

"มันกระโดดไปเขียน spec เลยทันที แล้วสรุปตรรกะเงื่อนไขการยกเลิกเคสพังยับเยินเลย"

"จับมันมาทำ grilling ก่อนเลยครับ บังคับให้มันสัมภาษณ์ถามคุณเกี่ยวกับเคสการยกเลิกบางส่วน ระบบคืนเงิน และเงื่อนไขเรื่องเวลาให้เคลียร์ทั้งหมด ก่อนที่มันจะเริ่มเขียนอะไรลงเอกสาร การเคลียร์ประเด็นให้จบในบทสนทนามีต้นทุนที่ถูกกว่าการตามไปแก้ในโค้ดมหาศาลครับ"

### Prototyping

#### English

Having the [agent](#agent) build a quick, rough version of something, for when conversation is too low-fidelity and you need a real artifact to talk about.

[Grilling](#grilling) resolves design decisions in conversation. Conversation is cheap, but it's low-fidelity: some questions can't be answered in words — how an interaction feels, whether an API shape is ergonomic in real calling code, whether the layout works at real data sizes. The interview hits a question and your honest answer is "I don't know, I'd have to see it." Past that point the discussion circles. Instead, have the agent build the thing, look at it, and come back to the conversation with an answer.

Agents lower the cost of building, which is what makes this practical. A rough version that used to take a day to mock up now takes minutes, so it's worth doing routinely. It's a [human-in-the-loop](#human-in-the-loop) technique: the prototype is there for you to react to.

You usually don't stop at one look. Iterate with the prototype — react, ask for a change, react again — so each round resolves another decision against the real artifact, at a higher fidelity than conversation allows.

A prototype doesn't have to be all-scrappy. You can build the pieces you're actually evaluating to production quality, so when the decision lands, the component or API you reacted to can transfer into the real codebase. This makes prototyping essential material for the [spec](#spec) to reference.

_Usage:_

"We've spent half an hour arguing about whether the wizard should be one page or three steps."

"Words won't settle it — have the agent prototype both. We'll click through them and know in five minutes."

#### ไทย

การสั่งให้ [agent](#agent) ลงมือสร้างชิ้นงานเวอร์ชันแรกขึ้นมาอย่างรวดเร็วและหยาบ ๆ สำหรับใช้ในจังหวะที่การพูดคุยโต้ตอบเริ่มมีความละเอียดต่ำเกินไป (low-fidelity) และคุณจำเป็นต้องมีชิ้นงานของจริงมาตั้งตรงหน้าเพื่อประกอบการสนทนาและตัดสินใจ

กระบวนการ [ซักไซ้ไล่เลียง](#grilling) (grilling) ช่วยคลี่คลายประเด็นการออกแบบได้ดีในระดับบทสนทนา การคุยกันมีต้นทุนที่ถูกมากแต่ก็มีข้อจำกัดเรื่องความละเอียด เพราะคำถามบางประเภทไม่สามารถหาคำตอบได้ด้วยคำพูด เช่น ความรู้สึกในจังหวะโต้ตอบกับหน้าจอ (interaction feels) รูปทรงของโครงสร้าง API มีความสะดวกคล่องตัวในการเขียนโค้ดเรียกใช้งานจริงแค่ไหน หรือเลย์เอาต์หน้าจอสามารถรับมือกับขนาดข้อมูลของจริงได้หรือไม่ เมื่อการสัมภาษณ์เดินหน้าไปเจอคำถามที่คำตอบที่แท้จริงของคุณคือ "ไม่รู้แฮะ ต้องขอเห็นของจริงก่อน" บทสนทนาหลังจากนั้นจะเริ่มวนเป็นอ่าง วิธีแก้คือให้สั่ง agent สร้างสิ่งนั้นขึ้นมาเลย เปิดดูมันรันจริง แล้วค่อยกลับมาคุยต่อพร้อมคำตอบในใจ

การที่ agent เข้ามาช่วยลดต้นทุนและเวลาในการสร้างชิ้นงานลงอย่างมหาศาลคือสิ่งทีทำให้แนวคิดนี้ใช้งานได้จริงในชีวิตทำงาน ชิ้นงานจำลองหยาบ ๆ ที่เคยต้องใช้เวลาเต็มวันในการทำขึ้นมา ตอนนี้สามารถเสร็จสิ้นได้ในเวลาไม่กี่นาที มันจึงคุ้มค่าที่จะทำเป็นกิจวัตรปกติ เทคนิคนี้จัดเป็นรูปแบบที่มีมนุษย์คุมพวงมาลัย ([human-in-the-loop](#human-in-the-loop)) โดยชิ้นงานโปรโตไทป์ถูกสร้างขึ้นมาเพื่อให้คุณได้ทดลองใช้และสะท้อนปฏิกิริยากลับไป

โดยปกติแล้วคุณจะไม่ได้หยุดอยู่แค่การดูเพียงครั้งเดียว แต่จะเกิดการวนลูปปรับปรุงชิ้นงานจำลองนั้นร่วมกัน (ดูผลลัพธ์ -> สั่งปรับแก้ -> ดูผลลัพธ์ซ้ำ) เพื่อให้ในแต่ละรอบสามารถคลี่คลายการตัดสินใจบนชิ้นงานจริงได้แม่นยำขึ้น ภายใต้ความละเอียดที่สูงกว่าที่บทสนทนาทั่วไปจะเอื้ออำนวย

นอกจากนี้ ชิ้นงานจำลองไม่จำเป็นต้องเป็นงานเขียนแบบเขี่ย ๆ เสมอไป คุณสามารถเลือกสร้างเฉพาะส่วนที่ต้องการประเมินผลจริงให้มีคุณภาพสูงเทียบเท่าระดับใช้งานจริง (production quality) ได้เลย เพื่อที่เมื่อการตัดสินใจสิ้นสุดลง ชิ้นส่วนคอมโพเนนต์หรือโครงสร้าง API ที่คุณยอมรับแล้ว จะสามารถถูกหยิบโยกย้ายเข้าสู่คลังโค้ดเบสหลักของงานจริงได้ทันที คุณสมบัตินี้ทำให้ prototyping กลายเป็นวัตถุดิบสำคัญที่เอกสารข้อกำหนด ([spec](#spec)) ต้องนำไปใช้อ้างอิง

_ตัวอย่างการใช้งาน:_

"พวกเรานั่งเถียงกันมาครึ่งชั่วโมงแล้วว่าตัวช่วยตั้งค่า (wizard) ควรจะรวบจบในหน้าเดียวหรือแบ่งเป็นสามขั้นตอนดี"

"ใช้คำพูดเถียงกันไม่จบหรอกครับ สั่งให้ agent ทำ prototyping ออกมาทั้งสองแบบเลยดีกว่า เดี๋ยวเราลองกดคลิกเล่นดูแปดบรรทัดก็รู้เรื่องภายในห้านาทีแล้ว"

### DX

#### English

Developer experience — how easy a codebase and its toolchain make it for humans to do good work. Good DX is fast feedback, clear error messages, documentation that answers the question you actually have, and setup that works on the first try. The term long predates AI coding; it's in this dictionary mainly as the contrast for [AX](#ax).

DX is the interaction between the human and the codebase — nothing more. The main difference between the two audiences is that humans are [stateful](#stateful) and agents are [stateless](#stateless). A human learns the codebase once and carries that knowledge into every day after, which is why poor DX is survivable: they route around slow CI by batching their pushes, around missing docs by asking in Slack once, around confusing structure by remembering where things live. The workarounds accumulate, and a team ends up productive in a codebase that fights them.

[Agents](#agent) face the same codebase with none of that accumulation. Stateless across [sessions](#session), an agent re-learns the codebase from scratch every time — it benefits from the fast test suite and the clear error messages, but anything it figured out yesterday is gone unless it was written into the [environment](#environment), which the agent only perceives through [tool results](#tool-result). That's the gap AX names: the parts of DX that survive when the developer is an agent, plus concerns humans don't have, like keeping the [context window](#context-window) free.

The overlap means DX investment often improves AX for free — strict types, fast tests, and predictable structure help both. The divergence means it doesn't always: a beautiful onboarding doc helps a human for a week and an agent not at all unless it's reachable from [AGENTS.md](#agentsmd).

_Usage:_

"Our DX is fine — new hires are productive in a week."

"Productive because someone sits with them for that week. The agent doesn't get that week; check the AX separately."

#### ไทย

Developer experience (ประสบการณ์ของนักพัฒนา) — ระดับความสะดวกสบายในการทำงานที่คลังโค้ดเบสและระบบเครื่องมือแวดล้อมมอบให้แก่ผู้ใช้งานที่เป็นมนุษย์เพื่อผลิตผลงานที่ดี DX ที่ดีหมายถึงระบบสะท้อนผลลัพธ์ที่รวดเร็ว (fast feedback) ข้อความรายงานความผิดพลาดที่เคลียร์ชัดเจน (clear error messages) เอกสารคู่มือที่ตอบคำถามที่คุณสงสัยอยู่จริง ๆ และการตั้งค่าระบบแวดล้อมที่รันผ่านฉลุยตั้งแต่ครั้งแรก คำนี้มีประวัติศาสตร์ยาวนานก่อนยุคสมัยของการเขียนโค้ดด้วย AI โดยในพจนานุกรมฉบับนี้ คำนี้ถูกหยิบยกขึ้นมาเพื่อใช้เป็นตัวเปรียบเทียบขั้วตรงข้ามกับ [AX](#ax)

DX เป็นเรื่องของปฏิสัมพันธ์ระหว่างมนุษย์กับคลังโค้ดเบสเท่านั้น ความแตกต่างที่สำคัญที่สุดระหว่างผู้ใช้งานสองกลุ่มคือ มนุษย์เรามีคุณสมบัติแบบจำสถานะ ([stateful](#stateful)) ในขณะที่ agent ทำงานแบบไม่จำสถานะ ([stateless](#stateless)) มนุษย์ใช้เวลาเรียนรู้และทำความเข้าใจคลังโค้ดเบสเพียงครั้งเดียวแล้วหอบเอาความรู้นั้นติดตัวไปใช้งานต่อในทุก ๆ วันหลังจากนั้น นี่คือเหตุผลว่าทำไมมนุษย์เราจึงอยู่รอดได้ในคลังโค้ดที่มี DX ย่ำแย่ พวกเขาสามารถหลบหลีกระบบรวมโค้ด (CI) ที่แสนอืดอาดด้วยการรวบรวมงานส่งทีเดียวรอบใหญ่ หลบเลี่ยงเอกสารคู่มือที่ขาดหายด้วยการเอ่ยปากถามเพื่อนครั้งเดียวในแอป Slack หรือหลบเลี่ยงโครงสร้างโค้ดที่ชวนสับสนด้วยการจดจำเอาเองว่าอะไรอยู่ที่ไหน ทางหนีทีไล่ชั่วคราวเหล่านี้จะถูกสะสมพอกพูนขึ้น จนทำให้ทีมพัฒนาสามารถผลิตงานได้ในคลังโค้ดที่พยายามขัดขวางพวกเขาอยู่ตลอดเวลา

ในทางกลับกัน ตัว [agent](#agent) ต้องเผชิญหน้ากับคลังโค้ดชุดเดียวกันนั้นโดยไม่มีการสะสมความรู้อะไรเก็บไว้เลย ด้วยคุณสมบัติที่เป็นแบบ stateless ข้ามแต่ละ [session](#session) ส่งผลให้ agent ต้องเริ่มต้นเรียนรู้คลังโค้ดใหม่จากศูนย์ในทุก ๆ ครั้ง มันจะได้รับประโยชน์เต็ม ๆ จากชุดทดสอบที่รันไวและข้อความแจ้งเตือนที่เคลียร์ แต่ข้อมูลอะไรก็ตามที่มันเคยถอดรหัสเข้าใจได้เมื่อวานนี้จะสลายหายไปทั้งหมด เว้นแต่ว่าข้อมูลนั้นจะถูกบันทึกจัดเก็บลงสู่สภาพแวดล้อมระบบ ([environment](#environment)) ซึ่งเป็นช่องทางเดียวที่ agent รับรู้สิ่งต่าง ๆ ผ่านทางผลลัพธ์ของเครื่องมือ ([tool results](#tool-result)) นี่คือช่องว่างที่คำว่า AX นิยามขึ้นมา มันหมายถึงส่วนผสมของ DX ที่ยังคงมีความหมายอยู่เมื่อนักพัฒนาเปลี่ยนสภาพไปเป็น agent บวกเข้ากับประเด็นเฉพาะที่มนุษย์ไม่เคยต้องเจอ เช่น การบริหารจัดการพื้นที่หน้าต่างบริบท ([context window](#context-window)) ให้โล่งและว่างอยู่เสมอ

พื้นที่ที่ทับซ้อนกันส่งผลให้การลงทุนปรับปรุง DX มักจะช่วยยกระดับสถาปัตยกรรม AX ให้ดีขึ้นตามไปด้วยโดยอัตโนมัติ เช่น การเขียนประเภทข้อมูลอย่างเข้มงวด (strict types) การทำระบบทดสอบที่รวดเร็ว และการวางโครงสร้างโค้ดที่คาดเดาได้ ล้วนเป็นประโยชน์ต่อผู้ใช้ทั้งสองกลุ่ม แต่พื้นที่ส่วนที่ฉีกแยกออกจากกันหมายความว่ามันไม่ได้เป็นเช่นนั้นเสมอไป เอกสารแนะนำการเริ่มงาน (onboarding doc) ที่เขียนไว้อย่างสวยงามอาจช่วยชีวิตมนุษย์ได้เป็นสัปดาห์ แต่ไม่มีประโยชน์ใด ๆ เลยสำหรับ agent เว้นแต่ว่าเอกสารชิ้นนั้นจะถูกจัดวางไว้ในพิกัดที่ไฟล์ระบบอย่าง [AGENTS.md](#agentsmd) สามารถเข้าถึงได้

_ตัวอย่างการใช้งาน:_

"ระบบ DX ของคลังโค้ดเราก็ปกติดีนะ พนักงานใหม่ใช้เวลาแค่สัปดาห์เดียวก็เริ่มส่งงานได้แล้ว"

"ส่งงานได้เพราะมีคนรุ่นพี่ไปนั่งประกบสอนงานตลอดทั้งสัปดาห์นั้นต่างหากครับ ตัว agent มันไม่ได้มีเวลาหนึ่งสัปดาห์มานั่งเรียนงานแบบนั้นนะ แนะนำให้แยกไปเช็กสถาปัตยกรรมฝั่ง AX ต่างหากดีกว่าครับ"

### AX

#### English

Agent experience — how well the [environment](#environment) is set up for an [agent](#agent) to do good work in a codebase. The agent-facing counterpart to [DX](#dx). When the same agent performs well in one repo and badly in another — same [model](#model), same [harness](#harness) — the difference is usually AX. The instinct is to blame the model or rewrite the prompt; the fix is more often in the repo.

Good AX has three main dimensions:

| Dimension        | What good AX looks like                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated checks | Fast, deterministic [automated checks](#automated-check) — types, tests, lints — that the agent can self-correct from without a human                                                                                                          |
| Architecture     | A codebase the agent can navigate without reading everything: predictable structure, a lot of behaviour behind small interfaces, names that say what things do                                                                                       |
| Free context     | [AGENTS.md](#agentsmd), [skills](#skill), and [tools](#tool) kept lean, so most of the [context window](#context-window) is available for the task and the agent stays in the [smart zone](#smart-zone) instead of drowning |

AX and DX overlap — good checks and clean architecture help both audiences — but they diverge. Humans tolerate tribal knowledge, slow CI, and "ask Sarah about the billing module"; agents can't. Agents don't benefit from IDE tooltips or pretty dashboards; they need failures as text in a [tool result](#tool-result). A codebase can have good DX and poor AX.

_Avoid:_ treating AX as a synonym for DX — the audiences need different investments.

_Usage:_

"The agent writes great code in the API repo and garbage in the frontend."

"The API repo has strict types and a fast test suite; the frontend has neither and forty always-loaded skills. That's an AX gap, not a model problem."

#### ไทย

Agent experience (ประสบการณ์ของ agent) — ระดับความพร้อมในการจัดเตรียมสภาพแวดล้อมระบบ ([environment](#environment)) ภายในคลังโค้ดเบส เพื่อเอื้อประโยชน์ให้ [agent](#agent) สามารถผลิตผลงานที่ดีออกมาได้ คำนี้เป็นคู่เสมอกันฝั่งตรงข้ามของ [DX](#dx) ที่ใช้ส่องสะท้อนมุมมองของ agent เมื่อใดก็ตามที่คุณพบว่า agent ตัวเดียวกัน สามารถทำผลงานได้ยอดเยี่ยมในคลังเก็บโค้ด (repo) ชุดหนึ่ง แต่กลับพ่นงานระดับขยะออกมาในคลังโค้ดอีกชุด ทั้งที่รันอยู่บนฐานของโมเดลเดียวกัน ([model](#model)) และใช้ระบบควบคุมตัวเดียวกัน ([harness](#harness)) สาเหตุของความต่างมักจะอยู่ที่สถาปัตยกรรม AX สัญชาตญาณแรกของคนส่วนใหญ่มักจะไปก่นด่าตัวโมเดลหรือพยายามนั่งเขียน prompt ใหม่ แต่จุดแก้ไขที่แท้จริงมักจะนอนอยู่ในตัว repo ต่างหาก

โครงสร้าง AX ที่ดีประกอบไปด้วย 3 มิติหลักดังนี้:

| มิติหลัก              | ลักษณะของระบบ AX ที่ยอดเยี่ยม                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ระบบตรวจทานอัตโนมัติ  | มีระบบยืนยันผลแบบตรงไปตรงมาตายตัว ([automated checks](#automated-check)) ที่ทำงานได้รวดเร็ว เช่น ระบบตรวจสอบประเภทข้อมูล (types) เคสทดสอบ (tests) และเครื่องมือตรวจโค้ด (lints) เพื่อให้ agent สามารถอ่านข้อความความล้มเหลวแล้วแก้ไขโค้ดได้ด้วยตัวเองโดยไม่ต้องรบกวนมนุษย์                                                                                                                          |
| โครงสร้างสถาปัตยกรรม  | มีการจัดวางโครงสร้างคลังโค้ดที่ agent สามารถเปิดไล่ดูพิกัดได้ง่ายโดยไม่จำเป็นต้องกวาดอ่านเนื้อหาทั้งหมด โครงสร้างมีความคาดเดาได้ ซ่อนพฤติกรรมซับซ้อนไว้เบื้องหลังอินเทอร์เฟซขนาดเล็ก และตั้งชื่อสื่อสารตรงไปตรงมาว่าสิ่งนั้นทำหน้าที่อะไร                                                                                                                                                                 |
| การจัดสรรพื้นที่บริบท | มีการจัดสรรโครงสร้างไฟล์คู่ประจำโปรเจกต์ ([AGENTS.md](#agentsmd)) ทักษะระบบ ([skills](#skill)) และเครื่องมือ ([tools](#tool)) ไว้อย่างกระชับและลีนที่สุด เพื่อให้พื้นที่ส่วนใหญ่ในหน้าต่างบริบท ([context window](#context-window)) เหลือว่างไว้สำหรับประมวลผลภารกิจตรงหน้า ช่วยให้ agent ปักหลักอยู่ใน [โซนฉลาด](#smart-zone) (smart zone) แทนที่จะจมน้ำหายไปกับปริมาณโทเค็นขยะ |

สถาปัตยกรรม AX และ DX มีพื้นที่ทับซ้อนกันอยู่มาก คลังระบบตรวจทานที่ดีและโครงสร้างสถาปัตยกรรมที่สะอาดสะอ้านล้วนสร้างประโยชน์ให้แก่ผู้รับสารทั้งสองกลุ่ม แต่ข้อมูลจะฉีกขาดออกจากกันในประเด็นเฉพาะทาง มนุษย์เรามีความทนทานต่อระบบข้อมูลแบบมุขปาฐะ (ความรู้ที่ฝังอยู่ในตัวคน) ระบบ CI ที่แสนอืดอาด หรือประโยคประเภท "มีอะไรให้ไปเดินถามซาร่าห์เรื่องโมดูลระบบบิลเรียกเก็บเงินเอาเองนะ" แต่ระบบของ agent ไม่สามารถทนทานต่อสิ่งเหล่านี้ได้ นอกจากนี้ agent ไม่ได้รับประโยชน์ใด ๆ จากกล่องคำแนะนำในโปรแกรมเขียนโค้ด (IDE tooltips) หรือหน้าจอแสดงผลสถิติสวย ๆ (dashboards) สิ่งที่มันต้องการมีเพียงแค่ข้อความรายงานความล้มเหลวที่ส่งกลับมาเป็นเนื้อตัวอักษรดิบ ๆ ภายในผลลัพธ์ของเครื่องมือ ([tool result](#tool-result)) เท่านั้น คลังโค้ดเบสหนึ่งจึงสามารถมีระบบ DX ที่ยอดเยี่ยม ควบคู่ไปกับระบบ AX ที่ย่ำแย่ได้ในเวลาเดียวกัน

_สิ่งที่ควรเลี่ยง:_ การปฏิบัติและใช้คำว่า AX ในฐานะคำไวพจน์ที่มีความหมายเหมือนกับ DX เพราะผู้รับสารทั้งสองกลุ่มต้องการเม็ดเงินและการลงทุนในระบบโครงสร้างที่แตกต่างกัน

_ตัวอย่างการใช้งาน:_

"ตัว agent มันเขียนโค้ดออกมาได้เฉียบคมมากในฝั่ง repo ของระบบ API แต่พอสั่งให้มาทำฝั่งหน้าบ้าน (frontend) มันกลับพ่นโค้ดขยะออกมาเต็มไปหมดเลยครับ"

"เป็นเพราะคลังโค้ดฝั่ง API มีการเขียนไทป์อย่างเข้มงวดและมีชุดทดสอบที่รันไวมากครับ ในขณะที่ฝั่ง frontend ไม่มีทั้งสองอย่าง แถมยังมีการยัดทักษะความรู้แฝงเข้าไปหนาแน่นถึง 40 ชุดตลอดเวลา นี่เป็นปัญหาช่องว่างทางสถาปัตยกรรม AX ครับ ไม่ใช่ความผิดพลาดของตัวโมเดล"

