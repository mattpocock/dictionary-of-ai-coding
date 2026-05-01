Whatever serves a [model](./Model.md) for [inference](./Inference.md). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](./Harness.md) doesn't run the model itself; it asks a provider to.

*Usage:*

"Can we run this offline for the air-gapped client?"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."
