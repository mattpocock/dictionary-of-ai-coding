---
title: "Turn"
description: "One user message plus everything the agent does in response, up until it yields back to the user. Contains one or more provider requests."
editLink: false
---

# Turn

One user message plus everything the [agent](/en/agent) does in response, up until it yields back to the user. Contains one or more [model provider requests](/en/model-provider-request) — many, if the agent calls [tools](/en/tool). A clarifying question closes the turn; your reply opens the next one. The hierarchy is [session](/en/session) **> Turn > Model provider request**.

What makes the turn worth naming is that its length is the agent's decision, not yours. You hand over one message; the agent decides how many tool calls to chain before yielding. A turn can be a one-sentence answer or twenty minutes of reading, editing, and running tests. That's the same property from two angles: long turns are what make [AFK](/en/afk) work possible, and long turns are also where things go wrong unsupervised — by the time the agent yields, it may have drifted a long way from what you meant.

The turn is also the natural unit for steering. Everything inside a turn happens without you; the gaps between turns are where you redirect. Most [harnesses](/en/harness) soften this: you can interrupt mid-turn to stop the agent and redirect it, or type a message while it works, which gets read once the turn completes. If you find yourself repeatedly unhappy with where turns end up, the fix is usually to ask for smaller ones — a plan first, one step at a time — trading autonomy for more frequent gaps to steer in.

_Usage:_

"One turn took two minutes?"

"It made fourteen [tool calls](/en/tool-call) inside that turn — each one is a separate model provider request. Latency stacks up before the agent finally yields back to you."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/turn" class="VPLink">Read in ไทย →</a>
</div>
