---
description: Padrão de trabalho onde o usuário inicia uma sessão e deixa o agente rodar sem supervisão. Precisa de sandbox mais permissões permissivas.
aliases:
  - longe do teclado
  - AFK (longe do teclado)
---

Um padrão de trabalho onde o usuário inicia uma [sessão](./Sessão.md) e deixa o [agente](./Agente.md) rodar sem supervisão. O multiplicador de throughput da codificação com IA — muitas sessões AFK podem rodar em paralelo enquanto você dorme, come ou trabalha em outra coisa. Geralmente requer um [modo de permissão](./Modo%20de%20permissão.md) permissivo mais [sandboxing](./Sandbox.md) para ser seguro.

_Evite:_ "agente de fundo" — centraliza a máquina ("rodando em fundo") ao invés do padrão humano ("usuário foi embora"). AFK é o fato essencial: o usuário não está olhando.

_Uso:_

"Estou rodando isso AFK — três agentes em sandbox na refatoração, revisando os PRs de manhã."

"[Ignorar permissões](./Modo%20de%20agente.md)?"

"Sim, [sistema de arquivos](./Sistema%20de%20arquivos.md) somente leitura, sem rede."
