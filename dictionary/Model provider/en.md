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
