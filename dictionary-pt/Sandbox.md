---
description: Um ambiente isolado dentro do qual o agente roda — container, VM ou shell restrito. Limita o raio de explosão das ações do agente.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

Um [ambiente](./Ambiente.md) isolado dentro do qual o [agente](./Agente.md) roda — um container, VM, [sistema de arquivos](./Sistema%20de%20arquivos.md) efêmero, ou shell com permissões restritas. Limita o raio de explosão das ações do agente: mesmo se o agente rodar comandos destrutivos ou buscar algo malicioso, o dano fica contido. O substrato de segurança que torna [AFK](./AFK.md) prático.

_Uso:_

"Quero deixá-lo rodar [ignorar-permissões](./Modo%20de%20agente.md) durante a noite mas não estou pronto para isso."

"Coloque-o num sandbox — container fresco, sem credenciais montadas, sem rede externa. Na pior das hipóteses ele explode seu próprio sistema de arquivos e você descarta o container."
