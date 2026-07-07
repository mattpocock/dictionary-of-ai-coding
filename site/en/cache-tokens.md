---
title: "Cache tokens"
description: "Input tokens the provider has cached from a previous request via its prefix cache, billed at a much lower rate."
editLink: false
---

# Cache tokens

[Input tokens](/en/input-tokens) the [provider](/en/model-provider) has cached from a previous [model provider request](/en/model-provider-request) so it doesn't have to re-process them. When consecutive requests share a prefix, the provider reuses the work via its [prefix cache](/en/prefix-cache) and bills the cached portion at a much lower rate. The lever that makes long [sessions](/en/session) affordable — without it, every [turn](/en/turn) re-pays for the whole history.

The reason this matters is how sessions are billed. The [model](/en/model) is [stateless](/en/stateless), so every request resends the entire conversation — [system prompt](/en/system-prompt), every message, every [tool result](/en/tool-result) — as input tokens. By turn fifty, each request carries fifty turns of history, and you'd pay full rate on all of it, every time. The cache changes the maths: tokens the provider has already processed in an identical prefix are billed as cache tokens, often at a tenth of the input rate or less. On a long session, most of what you send is cache tokens, and the bill stays sane.

An example shows when tokens are cached and when they're not. Each letter stands for a block of conversation content; each request sends the conversation so far:

| Request sends | Cached  | Billed at full rate | Why                                               |
| ------------- | ------- | ------------------- | ------------------------------------------------- |
| `AB`          | nothing | `AB`                | First request — nothing to match against          |
| `ABC`         | `AB`    | `C`                 | `AB` is an exact prefix of the previous request   |
| `ABCD`        | `ABC`   | `D`                 | Prefix still intact                               |
| `AXCD`        | `A`     | `XCD`               | An edit changed `B` to `X`; the match fails there |

The cache is fragile in a specific way: it matches exact prefixes. If anything changes earlier in the conversation — the [harness](/en/harness) reorders content, a timestamp updates, a file's representation shifts — the cache misses from that point onward and everything after it is billed at full input rate. Caches also expire after a few minutes of inactivity, so a session resumed after a long pause re-pays its history once. When a session's cost jumps without an obvious cause, compare cache tokens to input tokens in the usage report — a broken cache shows up there first.

_Usage:_

"Cost on long sessions is brutal — eight bucks for a refactor."

"Check the cache tokens. If the harness is reordering the system prompt or files between turns, the prefix breaks and you re-pay full input rate every request."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/cache-tokens" class="VPLink">Read in ไทย →</a>
</div>
