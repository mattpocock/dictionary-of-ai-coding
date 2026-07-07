---
title: "Grilling"
description: "'A technique for developing a design concept: the agent interviews the user Socratically, one decision at a time.'"
editLink: false
---

# Grilling

A technique for developing a [design concept](/en/design-concept) with an [agent](/en/agent): the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each. Slows the rush to a finished plan — no [handoff artifact](/en/handoff-artifact) is written until the concept stabilises.

The technique exists because agents fill gaps silently. Asked to write a [spec](/en/spec) from a two-line prompt, the agent doesn't stop at the decisions you haven't made — it picks defaults and writes them in. The result looks complete, and the guesses are indistinguishable from the choices, so you discover them late: at review, or when the built feature handles an edge case in a way you never chose. Grilling inverts this — instead of guessing, the agent has to ask.

It's a [human-in-the-loop](/en/human-in-the-loop) technique: your answers are the input. When a question can't be answered in conversation — you'd have to see the thing — switch to [prototyping](/en/prototyping).

_Usage:_

"It went straight to writing the spec and got the cancellation logic wrong."

"Grill it first — make it ask you about partial cancels, refunds, and timing before it commits anything to the doc. Cheaper to resolve in conversation than in code."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/grilling" class="VPLink">Read in ไทย →</a>
</div>
