---
title: "Model provider request"
description: "One round-trip from the harness to the model provider. The harness sends context; the provider returns one response."
editLink: false
---

# Model provider request

One round-trip from the [harness](/en/harness) to the [model provider](/en/model-provider). The harness sends the current [context](/en/context); the provider returns one response (a [tool call](/en/tool-call) or a final answer). A single user message can spawn many model provider requests if the [agent](/en/agent) calls [tools](/en/tool) — each [tool result](/en/tool-result) triggers another request.

Each request carries everything: the [system prompt](/en/system-prompt), the full conversation so far, every tool result. The [model](/en/model) is [stateless](/en/stateless), so the provider keeps nothing between requests — request forty re-sends what request thirty-nine sent, plus one more tool result. The [prefix cache](/en/prefix-cache) exists to make this repetition affordable.

The request is also the unit of billing. [Input tokens](/en/input-tokens), [output tokens](/en/output-tokens), and cache discounts are all counted per request, which is why an innocuous-looking question can cost a surprising amount: the cost isn't proportional to your message, it's proportional to the number of requests times the size of the context each one carries.

It's worth keeping the request distinct from the [turn](/en/turn). A turn is one exchange with you, and a single turn — "fix the failing test" — plays out as a chain of requests:

| Request | Model returns                     | Harness then                          |
| ------- | --------------------------------- | ------------------------------------- |
| 1       | Tool call: run the tests          | Runs them, appends the failure output |
| 2       | Tool call: read the test file     | Appends the file contents             |
| 3       | Tool call: read the source file   | Appends the file contents             |
| 4       | Tool call: edit the source file   | Applies the edit, appends the result  |
| 5       | Tool call: run the tests again    | Runs them, appends the pass output    |
| 6       | Final answer: "fixed, tests pass" | Shows it to you                       |

Six requests for one turn — each one re-sending the whole context. When you wonder where the [tokens](/en/token) went, count the requests, not the turns.

_Usage:_

"One question burned forty thousand tokens?"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole [session](/en/session) prefix re-sends every time."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/model-provider-request" class="VPLink">Read in ไทย →</a>
</div>
