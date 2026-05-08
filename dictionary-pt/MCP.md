---
description: Um protocolo para conectar servidores de ferramentas externos a um harness — como um agente obtém ferramentas além das que vêm com o harness.
---

**Model Context Protocol.** Um protocolo para conectar servidores de ferramentas externos a um [harness](./Harness.md) — como um [agente](./Agente.md) obtém [ferramentas](./Ferramenta.md) além das que vêm com o harness. O agente nunca "chama MCP"; ele chama uma ferramenta, e o harness por acaso obteve aquela ferramenta de um servidor MCP. Também expõe recursos (dados somente leitura) e prompts (templates reutilizáveis), mas provisão de ferramentas é o uso primário.

_Uso:_

"O agente precisa ler tickets do Linear."

"Configure o harness para usar o servidor MCP do Linear — ele expõe a API do Linear como ferramentas que o agente pode chamar. Economiza você escrever wrappers de ferramentas personalizados."
