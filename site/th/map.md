---
layout: page
title: AI Coding Map
lang: th
---

<script setup>
import DictionaryMap from '../.vitepress/theme/DictionaryMap.vue'

const sections = [
  {
    "heading": "The Model",
    "terms": [
      {
        "slug": "ai",
        "title": "AI",
        "description": "ป้ายกำกับที่เปลี่ยนความหมายไปตามยุคสมัย ไม่ใช่ชื่อเทคโนโลยีเจาะจง แต่ใช้เรียกสิ่งที่คอมพิวเตอร์เพิ่งทำได้จนน่าทึ่ง ซึ่งปัจจุบันคือ LLM"
      },
      {
        "slug": "model",
        "title": "Model",
        "description": "ชุดพารามิเตอร์ ทำงานแบบ Stateless คาดเดา token ถัดไปเท่านั้น ไม่สามารถดำเนินการใดๆ เองได้หากไม่มีระบบควบคุม (harness)"
      },
      {
        "slug": "parameters",
        "title": "Parameters",
        "description": "ตัวเลขภายใน model (มักมีหลายพันล้านตัว) ที่ถูกปรับแต่งระหว่างการฝึกฝน ทุกสิ่งที่ model รู้จะถูกเก็บไว้ในนี้ เรียกอีกอย่างว่า weights"
      },
      {
        "slug": "training",
        "title": "Training",
        "description": "กระบวนการกำหนดค่า parameters ของ model โดยการป้อนข้อความมหาศาล เพื่อปรับแต่งให้การคาดเดา token ถัดไปมีความแม่นยำขึ้น"
      },
      {
        "slug": "inference",
        "title": "การอนุมาน",
        "description": "การรัน model ที่ผ่านการเทรนแล้วเพื่อสร้างผลลัพธ์ เกิดขึ้นทุกครั้งที่มีการเรียกใช้งานผ่าน request โดยที่พารามิเตอร์จะคงที่ไม่มีการเปลี่ยน"
      },
      {
        "slug": "effort",
        "title": "Effort",
        "description": "ระดับการคิดวิเคราะห์ของ model ก่อนตอบ ยิ่งปรับไว้สูงยิ่งใช้ output token มากขึ้นเพื่อให้ได้ผลลัพธ์ที่ดีขึ้นในการแก้โจทย์ยาก"
      },
      {
        "slug": "token",
        "title": "Token",
        "description": "หน่วยย่อยที่สุดที่ model ใช้ในการอ่านและเขียน มีขนาดใกล้เคียงกับคำแต่ไม่ตรงกันเป๊ะ ใช้สำหรับวัดขนาด context window ค่าใช้จ่าย และความหน่วง"
      },
      {
        "slug": "next-token-prediction",
        "title": "Next-token prediction",
        "description": "กลไกการทำงานหลักของ model โดยการสุ่มคาดเดา token ถัดไปจากบริบทที่มีอยู่ นำมาต่อท้ายแล้วรันซ้ำทีละหนึ่งตัวจนได้ผลลัพธ์ทั้งหมด"
      },
      {
        "slug": "non-determinism",
        "title": "Non-determinism",
        "description": "คุณสมบัติที่ข้อมูลนำเข้าชุดเดิมสามารถให้ผลลัพธ์ที่เปลี่ยนไปได้ เกิดจากกลไกการสุ่ม token และความต่างของฮาร์ดแวร์ฝั่งผู้ให้บริการ"
      },
      {
        "slug": "model-provider",
        "title": "Model provider",
        "description": "ผู้ให้บริการระบบรัน model เพื่อการอนุมาน มีทั้งแบบคลาวด์ทางไกล เช่น Anthropic, OpenAI หรือแบบรันในเครื่องตัวเอง เช่น Ollama"
      },
      {
        "slug": "harness",
        "title": "Harness",
        "description": "ระบบแวดล้อมรอบ model ที่เปลี่ยนให้กลายเป็น agent ประกอบด้วย tools, system prompt, การบริหาร context window และสิทธิ์การเข้าถึงระบบ"
      },
      {
        "slug": "model-provider-request",
        "title": "Model provider request",
        "description": "รอบการรับส่งข้อมูลไปกลับหนึ่งครั้งจาก harness ไปยังผู้ให้บริการ โดยส่งบริบททั้งหมดไปและรับคำตอบหรือการร้องขอเรียกใช้เครื่องมือกลับมา"
      },
      {
        "slug": "input-tokens",
        "title": "Input tokens",
        "description": "จำนวน token ที่ระบบ harness ส่งไปให้ผู้ให้บริการในแต่ละ request ประกอบด้วย system prompt ประวัติการคุย และผลลัพธ์ของเครื่องมือ"
      },
      {
        "slug": "output-tokens",
        "title": "Output tokens",
        "description": "จำนวน token ที่ model สร้างส่งกลับมา มีราคาแพงกว่าข้อมูลขาเข้าประมาณ 5 เท่า เนื่องจากต้องใช้พลังการประมวลผลสูงในการผลิตออกมารายตัว"
      },
      {
        "slug": "prefix-cache",
        "title": "Prefix cache",
        "description": "ระบบจัดเก็บข้อมูลฝั่งผู้ให้บริการ ช่วยให้คำขอที่ส่งเข้ามาติดต่อกันสามารถข้ามขั้นตอนคำนวณข้อความส่วนหัวที่ซ้ำเดิมได้ และคิดราคาถูกลง"
      },
      {
        "slug": "cache-tokens",
        "title": "Cache tokens",
        "description": "จำนวนโทเค็นข้อมูลขาเข้าที่ผู้ให้บริการจัดเก็บไว้จากคำขอก่อนหน้าผ่าน prefix cache ช่วยให้ประหยัดค่าใช้จ่ายใน session ยาวได้มหาศาล"
      }
    ]
  },
  {
    "heading": "Sessions, Context Windows & Turns",
    "terms": [
      {
        "slug": "stateless",
        "title": "Stateless",
        "description": "คุณสมบัติไม่มีการส่งต่อหรือเก็บจำข้อมูลข้ามรอบการทำงาน โดย model และ agent จะทำงานแบบนี้เป็นค่าเริ่มต้น"
      },
      {
        "slug": "context",
        "title": "บริบท",
        "description": "ข้อมูลสำคัญและเกี่ยวข้องกับงานตรงหน้าที่ agent สามารถเข้าถึงได้ในปัจจุบัน ช่วยกำหนดขอบเขตความรู้ของระบบ"
      },
      {
        "slug": "context-window",
        "title": "context window",
        "description": "พื้นที่รับข้อมูลทั้งหมดที่ model เปิดอ่านต่อหนึ่งคำขอ มีขนาดจำกัดเฉพาะตามรุ่น และเป็นช่องทางเดียวที่โมเดลใช้รับรู้"
      },
      {
        "slug": "stateful",
        "title": "Stateful",
        "description": "คุณสมบัติการเก็บจำและส่งต่อข้อมูลไปข้างหน้า เช่น เซสชันคุยโต้ตอบ หรือ agent ที่จำข้อมูลข้ามเซสชันผ่านระบบความจำ"
      },
      {
        "slug": "agent",
        "title": "agent",
        "description": "ระบบโมเดลที่ประกอบเข้ากับเครื่องมือ คำสั่งหลัก และพื้นที่รับข้อมูลเพื่อทำงานโต้ตอบกับผู้ใช้ เปรียบเหมือนโมเดลที่เคลื่อนไหวได้จริง"
      },
      {
        "slug": "system-prompt",
        "title": "system prompt",
        "description": "คำสั่งหลักที่ระบบคำนวณแนบไว้ส่วนหัวสุดของทุกคำขอ เป็นกรอบพฤติกรรมและการใช้เครื่องมือของ agent ตลอดทั้งเซสชัน"
      },
      {
        "slug": "session",
        "title": "session",
        "description": "รอบการทำงานของการโต้ตอบกับ agent เริ่มจากว่างเปล่า สะสมประวัติ และจบเมื่อสั่งล้าง ปิด หรือบีบอัดข้อมูลขึ้นเซสชันใหม่"
      },
      {
        "slug": "turn",
        "title": "turn",
        "description": "รอบการสนทนาที่นับจากข้อความผู้ใช้หนึ่งครั้ง รวมกับทุกการทำงานของ agent จนกว่าจะส่งสิทธิ์คืน ประกอบด้วยหนึ่งคำขอขึ้นไป"
      }
    ]
  },
  {
    "heading": "Tools & Environment",
    "terms": [
      {
        "slug": "environment",
        "title": "Environment",
        "description": "โลกภายนอกระบบควบคุมที่ agent เข้าไปปฏิบัติการ รับรู้ข้อมูลผ่าน tool results และสร้างการเปลี่ยนแปลงผ่าน tool calls"
      },
      {
        "slug": "filesystem",
        "title": "Filesystem",
        "description": "โครงสร้างต้นไม้ของไฟล์และโฟลเดอร์ที่ agent ใช้เปิดอ่าน เขียนข้อมูล และรันระบบ ซึ่งเป็นสภาพแวดล้อมหลักของ agent สายเขียนโค้ด"
      },
      {
        "slug": "tool",
        "title": "Tool",
        "description": "ฟังก์ชันที่ harness เปิดให้ agent สั่งรัน เช่น Read, Write, Bash, Search เป็นช่องทางเดียวที่ใช้รับรู้และปรับเปลี่ยนโลกภายนอก"
      },
      {
        "slug": "tool-call",
        "title": "Tool call",
        "description": "ข้อความข้อกำหนดที่ model พ่นออกมาเพื่อระบุชื่อเครื่องมือและพารามิเตอร์ เป็นเพียงเท็กซ์มีโครงสร้างที่รอให้ harness นำไปรันจริง"
      },
      {
        "slug": "tool-result",
        "title": "Tool result",
        "description": "ข้อมูลผลลัพธ์ที่ harness ส่งคืนให้ model หลังรัน tool call เสร็จ เป็นช่องทางเดียวที่โมเดลใช้มองเห็นสภาพแวดล้อมระบบ"
      },
      {
        "slug": "mcp",
        "title": "MCP",
        "description": "โปรโตคอลมาตรฐานสำหรับเสียบต่อปลั๊กเครื่องมือ (tool servers) จากภายนอกเข้าสู่ซอฟต์แวร์ harness เพื่อเพิ่มขีดความสามารถให้ agent"
      },
      {
        "slug": "permission-request",
        "title": "Permission request",
        "description": "หน้าต่างยืนยันสิทธิ์ที่ harness แสดงให้ผู้ใช้กดอนุมัติก่อนรัน tool call ที่มีความเสี่ยง เป็นกลไกหลักในการคุมทิศทางงาน"
      },
      {
        "slug": "permission-mode",
        "title": "Permission mode",
        "description": "ระดับการควบคุมสิทธิ์ภายในโหมดการทำงาน คอยกำหนดว่า tool calls ตัวใดสามารถรันได้ทันทีและตัวใดต้องเด้งถามก่อน"
      },
      {
        "slug": "agent-mode",
        "title": "Agent mode",
        "description": "ค่าพรีเซ็ตสำเร็จรูปที่รวมระดับการคุมสิทธิ์ (permission mode) เข้ากับชุดคำสั่งปรับพฤติกรรมใน system prompt สลับโหมดได้กลางเซสชัน"
      },
      {
        "slug": "sandbox",
        "title": "Sandbox",
        "description": "ระบบพื้นที่ปิดและแยกโดเมนออกไปอย่างเด็ดขาดที่ใช้รัน agent เช่น คอนเทนเนอร์ หรือ VM เพื่อจำกัดวงความเสียหายของคำสั่งคอมพิวเตอร์"
      }
    ]
  },
  {
    "heading": "Failure Modes",
    "terms": [
      {
        "slug": "sycophancy",
        "title": "Sycophancy",
        "description": "ผลลัพธ์ของโมเดลที่แสดงอาการเออออห่อหมกตามผู้ใช้อย่างมั่นใจ เกิดจากการเทรนแบบ RLHF ที่สปอยล์โมเดลให้ตอบในสิ่งที่มนุษย์ชอบฟัง"
      },
      {
        "slug": "hallucination",
        "title": "Hallucination",
        "description": "ผลลัพธ์ของโมเดลที่ผิดพลาดอย่างมั่นใจ แบ่งเป็นสองสายคือ Factuality (มโนเนื้อหาภายนอก) และ Faithfulness (หลุดหลงทิศจากบริบทในหน้าต่าง)"
      },
      {
        "slug": "parametric-knowledge",
        "title": "Parametric knowledge",
        "description": "ความรู้ที่ฝังในตัวเลขพารามิเตอร์ของโมเดลจากการเทรน แช่แข็งถาวร เป็นต้นตอของความฉลาดในเรื่องทั่วไปและความมโนในเรื่องเฉพาะทาง"
      },
      {
        "slug": "knowledge-cutoff",
        "title": "Knowledge cutoff",
        "description": "วันที่ตัดข้อมูลความรู้ของโมเดล ข้อมูลเทคโนโลยีหรือ API ใด ๆ ที่งอกหลังจากจุดเวลานี้ จะเสี่ยงต่อการโดนโมเดลมโนคำตอบใส่สูงมาก"
      },
      {
        "slug": "contextual-knowledge",
        "title": "Contextual knowledge",
        "description": "ข้อเท็จจริงที่ agent สามารถเปิดอ่านตรง ๆ ได้จากหน้าต่างบริบทในปัจจุบัน มีความแม่นยำสูงและอยู่ภายใต้การควบคุมของคุณ"
      },
      {
        "slug": "attention-relationship",
        "title": "Attention relationship",
        "description": "ค่าจับคู่ความเชื่อมโยงระหว่างสอง token ในบริบท โดยโทเค็นคู่ที่มีความหมายสัมพันธ์กันจะส่งอิทธิพลต่อกันสูงมากในการสุ่มคำตอบ"
      },
      {
        "slug": "attention-budget",
        "title": "Attention budget",
        "description": "โควตาพลังการเชื่อมโยงข้อมูลที่แต่ละ token มีจำกัดอย่างตายตัว การสาดข้อมูลขยะป้อนเพิ่มจะเข้าไปรุมหารเบียดบังคำสั่งสำคัญให้จมหาย"
      },
      {
        "slug": "attention-degradation",
        "title": "Attention degradation",
        "description": "อาการความสนใจเสื่อมถอยใน session ยาว โควตาพลังงานของแต่ละ token โดนรุมหารเบียดบังจากข้อความรอบข้างจนสมาธิหลักจมหาย"
      },
      {
        "slug": "smart-zone",
        "title": "Smart zone",
        "description": "ช่วงต้นเซสชันที่ agent เฉียบคม สมาธิดีRecallแม่นยำ ก่อนจะค่อย ๆ ล้าและหลุดเข้าสู่โซนเอ๋อ (dumb zone) ยามบริบทสะสมเริ่มบวมหนา"
      }
    ]
  },
  {
    "heading": "Handoffs",
    "terms": [
      {
        "slug": "clearing",
        "title": "Clearing",
        "description": "การสั่งปิดวงจรเซสชันปัจจุบันเพื่อออกสตาร์ทเซสชันใหม่อันแกะกล่อง ทำให้คำขอถัดไปเริ่มจากความว่างเปล่าไร้ประวัติขยะสะสม"
      },
      {
        "slug": "handoff",
        "title": "Handoff",
        "description": "การโยกย้ายและส่งต่อข้อมูลบริบทจากเซสชันหนึ่งข้ามไปสู่อีกเซสชันหนึ่ง โดยไม่มีการวิ่งย้อนกลับ ผ่านไฟล์ส่งมอบงานหรือการบีบอัด"
      },
      {
        "slug": "primary-source",
        "title": "Primary source",
        "description": "แหล่งข้อมูลดิบต้นฉบับในทรงดั้งเดิม เช่น ซอร์สโค้ด หรือล็อกระบบ มีความถูกต้องแม่นยำสูงสุดแต่กินพื้นที่โทเค็นหนาแน่น"
      },
      {
        "slug": "secondary-source",
        "title": "Secondary source",
        "description": "ข้อมูลสรุปขั้นรองที่อธิบายจาก primary source อีกที เช่น คู่มือ หรือสรุป compaction จุโทเค็นน้อย ประหยัดพื้นที่แต่ข้อมูลมีตกหล่น"
      },
      {
        "slug": "handoff-artifact",
        "title": "Handoff artifact",
        "description": "ไฟล์เอกสารสรุปที่เขียนจัดเก็บบนดิสก์เพื่อใช้ส่งต่อบริบทข้ามเซสชัน ช่วยให้เซสชันถัดไปที่สตาร์ทจากศูนย์สามารถนำไปอ่านเป็นคำสั่งตั้งต้น"
      },
      {
        "slug": "spec",
        "title": "Spec",
        "description": "ไฟล์เอกสารข้อกำหนดคุณลักษณะของงานที่โอบอุ้มโครงการขนาดใหญ่ข้ามหลายเซสชัน บันทึกเป้าหมายและข้อสรุป คอยควบคุมตั๋วส่งงานย่อย"
      },
      {
        "slug": "ticket",
        "title": "Ticket",
        "description": "ไฟล์ส่งมอบงานย่อยที่ตีกรอบควบคุมขอบเขตงานให้จบได้ภายใน 1 เซสชัน สามารถตั้งค่ากราฟความเชื่อมโยงผูกมัดต่อกันได้"
      },
      {
        "slug": "compaction",
        "title": "Compaction",
        "description": "การส่งมอบงานบนหน่วยความจำชั่วคราวหลังบ้าน โดยสั่งรันโมเดลให้เขียนสรุปประวัติเซสชันเก่าไปหยอดเป็นทุนตั้งต้นในเซสชันใหม่"
      },
      {
        "slug": "autocompact",
        "title": "Autocompact",
        "description": "ระบบบีบอัดประวัติบริบทอัตโนมัติที่รันโดย harness เมื่อพื้นที่หน้าต่างบริบทใกล้เต็ม เสี่ยงต่อข้อมูลสำคัญตกหล่นกลางคัน"
      }
    ]
  },
  {
    "heading": "Memory and Steering",
    "terms": [
      {
        "slug": "memory-system",
        "title": "ระบบความจำ",
        "description": "ระบบที่พยายามสร้างให้ agent จำข้อมูลข้ามเซสชันได้ โดยบันทึกข้อมูลลงสภาพแวดล้อมระบบและโหลดกลับมาใหม่เมื่อเริ่มเซสชันถัดไป"
      },
      {
        "slug": "agents-md",
        "title": "AGENTS.md",
        "description": "ไฟล์ข้อบังคับในโปรเจกต์ที่ harness จะโหลดเข้าสู่หน้าต่างบริบทตอนเริ่มเซสชัน เปรียบเสมือนใบสั่งงานยืนพื้นประจำโครงการ"
      },
      {
        "slug": "progressive-disclosure",
        "title": "progressive disclosure",
        "description": "กลยุทธ์ค่อย ๆ เปิดเผยข้อมูลเฉพาะส่วนที่จำเป็นตรงหน้า และทิ้งเนื้อหาปลีกย่อยที่เหลือซ่อนไว้หลังตัวชี้พิกัดบริบทเพื่อประหยัดพื้นที่"
      },
      {
        "slug": "context-pointer",
        "title": "Context pointer",
        "description": "บรรทัดข้อความสั้น ๆ ในเอกสารที่ระบุพาธและคำอธิบายสั้น ๆ ช่วยให้ agent ทราบพิกัดและเลือกโหลดข้อมูลเข้าหัวเฉพาะยามที่จำเป็น"
      },
      {
        "slug": "skill",
        "title": "Skill",
        "description": "แพ็กเกจชุดคำสั่งและทรัพยากรสำหรับทำหนึ่งภารกิจให้สำเร็จ ถูกกั้นไว้นอกหน้าต่างบริบทจนกว่าตัวชี้พิกัดจะสั่งโหลดใช้งานตามงาน"
      },
      {
        "slug": "subagent",
        "title": "Subagent",
        "description": "Agent ย่อยที่ถูกสร้างโดย agent แม่ผ่าน tool call รันแยกเซสชันเพื่อทำงานที่มีข้อมูลขยะหนาแน่น ไม่ให้สัญญาณรบกวนไหลไปปนเปื้อนระบบแม่"
      }
    ]
  },
  {
    "heading": "Patterns of Work",
    "terms": [
      {
        "slug": "human-in-the-loop",
        "title": "Human-in-the-loop",
        "description": "รูปแบบการทำงานที่มนุษย์คอยประกบคู่จับตาดูกับ agent ตลอดเซสชัน เพื่อคอยตรวจทาน ปรับทิศทาง หรือร่วมแก้โจทย์แบบเรียลไทม์"
      },
      {
        "slug": "afk",
        "title": "AFK",
        "description": "โหมดปล่อยจอรันงานทิ้งไว้แบบไร้คนดูแล (Away From Keyboard) ช่วยปั๊มผลผลิตด้วยการเปิดรันหลายเซสชันคู่ขนานพร้อมกัน"
      },
      {
        "slug": "automated-check",
        "title": "Automated check",
        "description": "ระบบตรวจสอบผลลัพธ์อัตโนมัติแบบเด็ดขาด (Deterministic) เช่น เคสทดสอบ หรือ linter พ่นผลลัพธ์ผ่าน/พังแบบไร้ความคิดเห็นส่วนตัว"
      },
      {
        "slug": "automated-review",
        "title": "Automated review",
        "description": "ระบบตรวจทานงานอัตโนมัติที่ใช้ agent อีกตัวช่วยคิดวิเคราะห์และประเมินผลงานของ agent แรก มีคุณสมบัติเด่นเรื่องใช้ดุลยพินิจเชิงลึก"
      },
      {
        "slug": "human-review",
        "title": "Human review",
        "description": "การที่ผู้ใช้เปิดอ่านซอร์สโค้ดไฟล์จริงและใช้ดุลยพินิจคัดกรองผลงาน การอ่านตัวสรุป description ไม่นับว่าเป็นการรีวิว"
      },
      {
        "slug": "vibe-coding",
        "title": "Vibe coding",
        "description": "รูปแบบการทำงานที่ผู้ใช้กดยอมรับโค้ดจาก agent เข้าสู่ระบบทันทีโดยไม่มีการตรวจทานจากมนุษย์ มองโครงสร้างโค้ดภายในเป็นกล่องดำ"
      },
      {
        "slug": "design-concept",
        "title": "Design concept",
        "description": "ความเข้าใจร่วมกันระหว่างผู้ใช้และ agent เกี่ยวกับสิ่งที่จะสร้าง โดยแยกต่างหากจากชิ้นงาน โค้ด หรือเอกสารทางเทคนิคใด ๆ"
      },
      {
        "slug": "grilling",
        "title": "Grilling",
        "description": "เทคนิคพัฒนา design concept โดยให้ agent สัมภาษณ์ผู้ใช้เชิงวิพากษ์ทีละการตัดสินใจ เพื่อสกัดไม่ให้ระบบคิดทึกทักเอาเอง"
      },
      {
        "slug": "prototyping",
        "title": "Prototyping",
        "description": "การสั่งให้ agent สร้างชิ้นงานจำลองรุ่นแรกอย่างรวดเร็ว เมื่อบทสนทนาเริ่มเห็นภาพไม่ชัดเจนและต้องการชิ้นงานจริงมาประกอบการตัดสินใจ"
      },
      {
        "slug": "dx",
        "title": "DX",
        "description": "ประสบการณ์ของนักพัฒนา: ความง่ายในการทำงานร่วมกับคลังโค้ดและเครื่องมือต่าง ๆ เช่น ความเร็วระบบทดสอบ และความชัดเจนของข้อความแจ้งเตือน"
      },
      {
        "slug": "ax",
        "title": "AX",
        "description": "ประสบการณ์ของ agent: ระดับความพร้อมของสภาพแวดล้อมในคลังโค้ดที่เอื้อให้ agent ทำงานได้ดี เช่น ระบบตรวจทาน และโครงสร้างสถาปัตยกรรม"
      }
    ]
  }
]
</script>

<DictionaryMap :sections="sections" />
