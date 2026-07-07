# batch-01-03-the-model

Batch 3 of 14.

Curriculum section: Section 1 — The Model

Approximate English words: 693

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term         | English source                  | Thai target                     | Words |
| ------------ | ------------------------------- | ------------------------------- | ----: |
| Prefix cache | `dictionary/Prefix cache/en.md` | `dictionary/Prefix cache/th.md` |   262 |
| Cache tokens | `dictionary/Cache tokens/en.md` | `dictionary/Cache tokens/th.md` |   431 |

## Raw English

## Prefix cache

Source: `dictionary/Prefix cache/en.md`

Target: `dictionary/Prefix cache/th.md`

```md
---
description: The provider-side store that lets consecutive requests skip re-processing a shared prefix, billing those tokens at a lower rate.
---

The [provider](./Model%20provider.md)-side store that lets consecutive [model provider requests](./Model%20provider%20request.md) skip re-processing a shared prefix. When the start of a request matches the start of a recent one — same [system prompt](./System%20prompt.md), same history up to some point — the provider reuses its prior work and bills those [tokens](./Token.md) as [cache tokens](./Cache%20tokens.md) at a much lower rate.

The cache pays off because sessions grow append-only. Every request re-sends the whole history as [input tokens](./Input%20tokens.md) (see that entry for why), and in a normal [session](./Session.md) the history only changes at the end — each request is the previous one plus a few new messages. The provider processes the long shared beginning once, stores the result, and picks up from where the prefix ends. Without the cache, a 50-[turn](./Turn.md) session would pay to re-process turn one fifty times.

Caches also expire. How long an entry stays warm varies per model provider — typically minutes, not hours. Leave a session idle past the window and the next request rebuilds the prefix at full price once before caching resumes. This is mostly a [harness](./Harness.md) builder's concern; as a user, the visible effect is that requests after a long pause cost more than the ones before it.

_Usage:_

"Why did the bill spike halfway through the session?"

"Harness started injecting the current time into the system prompt every turn. Prefix cache breaks at the first changed token, so every request after that billed at full rate."
```

## Cache tokens

Source: `dictionary/Cache tokens/en.md`

Target: `dictionary/Cache tokens/th.md`

```md
---
description: Input tokens the provider has cached from a previous request via its prefix cache, billed at a much lower rate.
---

[Input tokens](./Input%20tokens.md) the [provider](./Model%20provider.md) has cached from a previous [model provider request](./Model%20provider%20request.md) so it doesn't have to re-process them. When consecutive requests share a prefix, the provider reuses the work via its [prefix cache](./Prefix%20cache.md) and bills the cached portion at a much lower rate. The lever that makes long [sessions](./Session.md) affordable — without it, every [turn](./Turn.md) re-pays for the whole history.

The reason this matters is how sessions are billed. The [model](./Model.md) is [stateless](./Stateless.md), so every request resends the entire conversation — [system prompt](./System%20prompt.md), every message, every [tool result](./Tool%20result.md) — as input tokens. By turn fifty, each request carries fifty turns of history, and you'd pay full rate on all of it, every time. The cache changes the maths: tokens the provider has already processed in an identical prefix are billed as cache tokens, often at a tenth of the input rate or less. On a long session, most of what you send is cache tokens, and the bill stays sane.

An example shows when tokens are cached and when they're not. Each letter stands for a block of conversation content; each request sends the conversation so far:

| Request sends | Cached  | Billed at full rate | Why                                               |
| ------------- | ------- | ------------------- | ------------------------------------------------- |
| `AB`          | nothing | `AB`                | First request — nothing to match against          |
| `ABC`         | `AB`    | `C`                 | `AB` is an exact prefix of the previous request   |
| `ABCD`        | `ABC`   | `D`                 | Prefix still intact                               |
| `AXCD`        | `A`     | `XCD`               | An edit changed `B` to `X`; the match fails there |

The cache is fragile in a specific way: it matches exact prefixes. If anything changes earlier in the conversation — the [harness](./Harness.md) reorders content, a timestamp updates, a file's representation shifts — the cache misses from that point onward and everything after it is billed at full input rate. Caches also expire after a few minutes of inactivity, so a session resumed after a long pause re-pays its history once. When a session's cost jumps without an obvious cause, compare cache tokens to input tokens in the usage report — a broken cache shows up there first.

_Usage:_

"Cost on long sessions is brutal — eight bucks for a refactor."

"Check the cache tokens. If the harness is reordering the system prompt or files between turns, the prefix breaks and you re-pay full input rate every request."
```
