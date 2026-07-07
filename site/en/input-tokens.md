---
title: "Input tokens"
description: "Tokens the harness sends on each model provider request. Billed at a lower rate than output tokens."
editLink: false
---

# Input tokens

[Tokens](/en/token) the [harness](/en/harness) sends on each [model provider request](/en/model-provider-request) — the [system prompt](/en/system-prompt), the conversation history, [tool results](/en/tool-result), everything the [model](/en/model) reads before it writes. Billed at a lower rate than [output tokens](/en/output-tokens), because they are less expensive to process than output tokens.

When doing [AI](/en/ai) coding, input tokens make up most of your bill. The model is [stateless](/en/stateless), so each [turn](/en/turn) re-sends the entire [session](/en/session) as input: your first message, every response, every tool result since. The input for turn fifty contains the previous forty-nine turns. A single model provider request might produce a few hundred output tokens but re-send a hundred thousand input tokens of accumulated history.

The [prefix cache](/en/prefix-cache) reduces the cost: history that exactly matches a previous request is billed as cheap [cache tokens](/en/cache-tokens) rather than full-price input. When input costs still hurt, the fix is to shrink what gets re-sent — [clearing](/en/clearing) or [compacting](/en/compaction) between tasks.

_Usage:_

"Bill's high but the [agent](/en/agent)'s barely writing anything."

"It's the input tokens — every turn re-sends the whole session. Without the prefix cache you re-pay for the history each request."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/input-tokens" class="VPLink">Read in ไทย →</a>
</div>
