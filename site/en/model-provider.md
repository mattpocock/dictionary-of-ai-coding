---
title: "Model provider"
description: "Whatever serves a model for inference. Usually remote (Anthropic, OpenAI, Google), but can also be local (Ollama, llama.cpp)."
editLink: false
---

# Model provider

Whatever serves a [model](/en/model) for [inference](/en/inference). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](/en/harness) doesn't run the model itself; it asks a provider to.

The provider owns the machinery: the [parameters](/en/parameters) live on its hardware, and every [model provider request](/en/model-provider-request) is the harness sending [tokens](/en/token) over the network and getting predictions back. That makes the provider the source of a whole category of problems that get misattributed to the model or the harness — rate limits, degraded capacity, and outages all live here. When the [agent](/en/agent) stalls mid-[session](/en/session) or errors on every [turn](/en/turn), the provider's status page is worth checking before anything else.

The provider also sets the commercial terms: per-token pricing for [input](/en/input-tokens) and [output tokens](/en/output-tokens), [prefix cache](/en/prefix-cache) discounts, and which models are available at all. Note that the provider and the model's maker can be different companies — Bedrock, Vertex, and OpenRouter serve other people's models.

Local providers trade capability for control: the models that fit on your own hardware are far smaller than the frontier ones, but nothing leaves the machine and there's no bill per token.

_Usage:_

"Can we run this offline for the air-gapped client?"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/model-provider" class="VPLink">Read in ไทย →</a>
</div>
