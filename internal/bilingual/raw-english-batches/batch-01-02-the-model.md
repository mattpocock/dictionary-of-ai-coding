# batch-01-02-the-model

Batch 2 of 14.

Curriculum section: Section 1 — The Model

Approximate English words: 1937

## Translator Contract

- Read `internal/TRANSLATION_CALIBRATION.md` first.
- Read `internal/bilingual/THAI_TRANSLATION_AI_BRIEF.md` next.
- Translate or rewrite only the assigned target `th.md` files.
- Do not edit English `en.md` files in this batch.
- Preserve concept meaning, first-link-only behavior, tables, and useful dialogue.
- Use natural current Thai, with technical English terms kept where Thai would be forced.
- Leave a handoff note using `internal/bilingual/HANDOFF.md`.

## Assigned Files

| Term                   | English source                            | Thai target                               | Words |
| ---------------------- | ----------------------------------------- | ----------------------------------------- | ----: |
| Next-token prediction  | `dictionary/Next-token prediction/en.md`  | `dictionary/Next-token prediction/th.md`  |   266 |
| Non-determinism        | `dictionary/Non-determinism/en.md`        | `dictionary/Non-determinism/th.md`        |   374 |
| Model provider         | `dictionary/Model provider/en.md`         | `dictionary/Model provider/th.md`         |   252 |
| Harness                | `dictionary/Harness/en.md`                | `dictionary/Harness/th.md`                |   274 |
| Model provider request | `dictionary/Model provider request/en.md` | `dictionary/Model provider request/th.md` |   375 |
| Input tokens           | `dictionary/Input tokens/en.md`           | `dictionary/Input tokens/th.md`           |   202 |
| Output tokens          | `dictionary/Output tokens/en.md`          | `dictionary/Output tokens/th.md`          |   194 |

## Raw English

## Next-token prediction

Source: `dictionary/Next-token prediction/en.md`

Target: `dictionary/Next-token prediction/th.md`

```md
---
description: What the model actually does. Samples one next token from the context, appends it, and runs again. Its only mode of operation.
---

What the [model](./Model.md) actually does. Given a [context](./Context.md), it samples one next [token](./Token.md), appends it, and runs again. Every output — a sentence, a [tool call](./Tool%20call.md), a thousand-line file — is built one token at a time. The model has no other mode of operation.

Each step works the same way: the tokens in the [context window](./Context%20window.md) are run through the [parameters](./Parameters.md), which produce a probability for every token in the vocabulary — this one is very likely next, that one less so. One token is sampled from those probabilities, appended, and the loop runs again with the slightly longer context. That sampling step is why the same prompt produces different output on different runs: [non-determinism](./Non-determinism.md) is built into the mechanism, not a bug layered on top.

Holding onto this mechanism explains behaviour that otherwise looks strange. The model never checks whether a token is _true_ before emitting it — only whether it's _likely_ — which is the root of [hallucination](./Hallucination.md). It commits to each token as it goes, so a confident-sounding opening sentence can steer the rest of the answer wrong. And because [output tokens](./Output%20tokens.md) are produced strictly one at a time, generation speed puts a floor on how fast any [agent](./Agent.md) can work.

_Usage:_

"How does the agent 'decide' to call a tool?"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](./Harness.md) parses out of the output stream."
```

## Non-determinism

Source: `dictionary/Non-determinism/en.md`

Target: `dictionary/Non-determinism/th.md`

```md
---
description: The same input can produce different output. A property of how models generate text and how providers serve requests.
---

The same input can produce different output. Run a [model](./Model.md) twice with identical [context](./Context.md) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.

It's a property of how models generate text, and how [model providers](./Model%20provider.md) serve [requests](./Model%20provider%20request.md). During [inference](./Inference.md), the model produces a probability distribution over possible next [tokens](./Token.md) and one is sampled from it — usually with some randomness on purpose, since always picking the most likely token produces repetitive, lower-quality text. One differently-sampled token early in a response changes every token after it, which is how a single different word becomes a completely different approach. Provider-side serving adds more variation on top: requests are batched together on shared hardware, and tiny floating-point differences between batches can tip a close call between two tokens. There's no setting you can flip to make it all go away.

Expect a spread of results from an [agent](./Agent.md) on the same task. Most responses fall within a reasonable bell curve of quality — that's why the non-determinism is tolerable at all — but the tails are real: some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice. This has two practical consequences. Retrying is a legitimate strategy: a failed attempt is one draw from the distribution, and a fresh attempt at the same task may simply land better. And verification matters more than it would with deterministic tools — you can't test an agent's behaviour once and rely on it repeating, so [automated checks](./Automated%20check.md) have to catch the bad draws.

Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.

_Usage:_

"Claude has been awful today. Did they ship a worse version?"

"Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."
```

## Model provider

Source: `dictionary/Model provider/en.md`

Target: `dictionary/Model provider/th.md`

```md
---
description: Whatever serves a model for inference. Usually remote (Anthropic, OpenAI, Google), but can also be local (Ollama, llama.cpp).
---

Whatever serves a [model](./Model.md) for [inference](./Inference.md). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](./Harness.md) doesn't run the model itself; it asks a provider to.

The provider owns the machinery: the [parameters](./Parameters.md) live on its hardware, and every [model provider request](./Model%20provider%20request.md) is the harness sending [tokens](./Token.md) over the network and getting predictions back. That makes the provider the source of a whole category of problems that get misattributed to the model or the harness — rate limits, degraded capacity, and outages all live here. When the [agent](./Agent.md) stalls mid-[session](./Session.md) or errors on every [turn](./Turn.md), the provider's status page is worth checking before anything else.

The provider also sets the commercial terms: per-token pricing for [input](./Input%20tokens.md) and [output tokens](./Output%20tokens.md), [prefix cache](./Prefix%20cache.md) discounts, and which models are available at all. Note that the provider and the model's maker can be different companies — Bedrock, Vertex, and OpenRouter serve other people's models.

Local providers trade capability for control: the models that fit on your own hardware are far smaller than the frontier ones, but nothing leaves the machine and there's no bill per token.

_Usage:_

"Can we run this offline for the air-gapped client?"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."
```

## Harness

Source: `dictionary/Harness/en.md`

Target: `dictionary/Harness/th.md`

```md
---
description: "Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks."
---

Everything around the [model](./Model.md) that turns it into an [agent](./Agent.md): [tools](./Tool.md), [system prompt](./System%20prompt.md), [context-window management](./Context%20window.md), permissions, hooks. **Claude.ai** and **Claude Code** run on the same model but behave differently because their harnesses differ.

The model itself only does one thing: take text in, produce text out. It can't read a file, run a command, or remember the last [turn](./Turn.md). The harness supplies all of that. It assembles the [context](./Context.md) for each [model provider request](./Model%20provider%20request.md), executes the [tool calls](./Tool%20call.md) the model asks for, feeds the [tool results](./Tool%20result.md) back in, stores the [session](./Session.md) history, asks you for permission before risky actions, and decides when to [compact](./Compaction.md). The agent loop — model proposes, harness executes, repeat — is run by the harness.

This matters for diagnosis. When behaviour differs between two products, or between yesterday and today, the model is often not the variable — the harness is. A different system prompt, a different set of tools, a changed permission default, or a new context-management strategy all change behaviour without any change to the model. It also means the harness is where most of your configuration lives: [AGENTS.md](./AGENTS.md.md) files, permission settings, and hooks are all instructions to the harness, not the model.

Examples: Claude Code, Cursor, Codex CLI — and Claude.ai, which is a chat harness rather than a coding one.

_Usage:_

"Same model, why is Claude Code editing files and Claude.ai just answering questions?"

"Different harnesses — Claude Code has [filesystem](./Filesystem.md) tools, a different system prompt, and a permission layer. The model isn't the variable here."
```

## Model provider request

Source: `dictionary/Model provider request/en.md`

Target: `dictionary/Model provider request/th.md`

```md
---
description: One round-trip from the harness to the model provider. The harness sends context; the provider returns one response.
---

One round-trip from the [harness](./Harness.md) to the [model provider](./Model%20provider.md). The harness sends the current [context](./Context.md); the provider returns one response (a [tool call](./Tool%20call.md) or a final answer). A single user message can spawn many model provider requests if the [agent](./Agent.md) calls [tools](./Tool.md) — each [tool result](./Tool%20result.md) triggers another request.

Each request carries everything: the [system prompt](./System%20prompt.md), the full conversation so far, every tool result. The [model](./Model.md) is [stateless](./Stateless.md), so the provider keeps nothing between requests — request forty re-sends what request thirty-nine sent, plus one more tool result. The [prefix cache](./Prefix%20cache.md) exists to make this repetition affordable.

The request is also the unit of billing. [Input tokens](./Input%20tokens.md), [output tokens](./Output%20tokens.md), and cache discounts are all counted per request, which is why an innocuous-looking question can cost a surprising amount: the cost isn't proportional to your message, it's proportional to the number of requests times the size of the context each one carries.

It's worth keeping the request distinct from the [turn](./Turn.md). A turn is one exchange with you, and a single turn — "fix the failing test" — plays out as a chain of requests:

| Request | Model returns                     | Harness then                          |
| ------- | --------------------------------- | ------------------------------------- |
| 1       | Tool call: run the tests          | Runs them, appends the failure output |
| 2       | Tool call: read the test file     | Appends the file contents             |
| 3       | Tool call: read the source file   | Appends the file contents             |
| 4       | Tool call: edit the source file   | Applies the edit, appends the result  |
| 5       | Tool call: run the tests again    | Runs them, appends the pass output    |
| 6       | Final answer: "fixed, tests pass" | Shows it to you                       |

Six requests for one turn — each one re-sending the whole context. When you wonder where the [tokens](./Token.md) went, count the requests, not the turns.

_Usage:_

"One question burned forty thousand tokens?"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole [session](./Session.md) prefix re-sends every time."
```

## Input tokens

Source: `dictionary/Input tokens/en.md`

Target: `dictionary/Input tokens/th.md`

```md
---
description: Tokens the harness sends on each model provider request. Billed at a lower rate than output tokens.
---

[Tokens](./Token.md) the [harness](./Harness.md) sends on each [model provider request](./Model%20provider%20request.md) — the [system prompt](./System%20prompt.md), the conversation history, [tool results](./Tool%20result.md), everything the [model](./Model.md) reads before it writes. Billed at a lower rate than [output tokens](./Output%20tokens.md), because they are less expensive to process than output tokens.

When doing [AI](./AI.md) coding, input tokens make up most of your bill. The model is [stateless](./Stateless.md), so each [turn](./Turn.md) re-sends the entire [session](./Session.md) as input: your first message, every response, every tool result since. The input for turn fifty contains the previous forty-nine turns. A single model provider request might produce a few hundred output tokens but re-send a hundred thousand input tokens of accumulated history.

The [prefix cache](./Prefix%20cache.md) reduces the cost: history that exactly matches a previous request is billed as cheap [cache tokens](./Cache%20tokens.md) rather than full-price input. When input costs still hurt, the fix is to shrink what gets re-sent — [clearing](./Clearing.md) or [compacting](./Compaction.md) between tasks.

_Usage:_

"Bill's high but the [agent](./Agent.md)'s barely writing anything."

"It's the input tokens — every turn re-sends the whole session. Without the prefix cache you re-pay for the history each request."
```

## Output tokens

Source: `dictionary/Output tokens/en.md`

Target: `dictionary/Output tokens/th.md`

```md
---
description: Tokens the model generates back. Billed at a higher rate than input tokens, since they cost more compute to produce.
---

[Tokens](./Token.md) the [model](./Model.md) generates back. Billed at a higher rate than [input tokens](./Input%20tokens.md) — commonly around five times the rate — since they cost more compute to produce.

Everything the model writes counts: the prose you read, the code it emits, [tool calls](./Tool%20call.md), and any extended thinking the model does before answering. That last one surprises people — reasoning tokens are billed as output even when the [harness](./Harness.md) often doesn't show them to you, and turning up [effort](./Effort.md) spends more of them.

Output tokens also set the pace of a [session](./Session.md). The model reads input quickly but generates output one token at a time, so when a [turn](./Turn.md) feels slow, it's almost always the output being written, not the input being read. A long wait usually means a long answer is coming.

_Usage:_

"The refactor session is burning through credit even though the inputs are small."

"Agent's rewriting whole files instead of patching. Output tokens cost roughly five times the input rate — get it emitting edits and the bill drops."
```
