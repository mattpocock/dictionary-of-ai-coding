---
description: O que serve um modelo para inferência. Geralmente remoto (Anthropic, OpenAI, Google), mas também pode ser local (Ollama, llama.cpp).
---

O que serve um [modelo](./Modelo.md) para [inferência](./Inferência.md). Geralmente um serviço remoto (Anthropic, OpenAI, Google), mas também pode ser local — Ollama, LM Studio, llama.cpp rodando na sua própria máquina. O [harness](./Harness.md) não executa o modelo em si; ele pede a um provedor para fazer isso.

_Uso:_

"Podemos executar isso offline para o cliente air-gapped?"

"Troque o provedor de modelo para um local — Ollama ou llama.cpp na máquina deles. O harness não se importa, apenas acessa um endpoint diferente."
