---
title: "Output tokens"
description: "Tokens the model generates back. Billed at a higher rate than input tokens, since they cost more compute to produce."
editLink: false
---

# Output tokens

[Tokens](/en/token) the [model](/en/model) generates back. Billed at a higher rate than [input tokens](/en/input-tokens) — commonly around five times the rate — since they cost more compute to produce.

Everything the model writes counts: the prose you read, the code it emits, [tool calls](/en/tool-call), and any extended thinking the model does before answering. That last one surprises people — reasoning tokens are billed as output even when the [harness](/en/harness) often doesn't show them to you, and turning up [effort](/en/effort) spends more of them.

Output tokens also set the pace of a [session](/en/session). The model reads input quickly but generates output one token at a time, so when a [turn](/en/turn) feels slow, it's almost always the output being written, not the input being read. A long wait usually means a long answer is coming.

_Usage:_

"The refactor session is burning through credit even though the inputs are small."

"Agent's rewriting whole files instead of patching. Output tokens cost roughly five times the input rate — get it emitting edits and the bill drops."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/output-tokens" class="VPLink">Read in ไทย →</a>
</div>
