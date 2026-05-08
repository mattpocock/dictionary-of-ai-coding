---
description: Um preset empacotando um modo de permissão com instruções comportamentais injetadas no prompt do sistema. Pode trocar no meio da sessão.
aliases:
  - modo de planejamento
  - aceitar-edições
  - ignorar permissões
  - modo YOLO
---

Um preset que molda como o [agente](./Agente.md) opera em runtime — empacota um [modo de permissão](./Modo%20de%20permissão.md) com instruções comportamentais injetadas no [prompt do sistema](./Prompt%20do%20sistema.md). Exemplos: um padrão que pede confirmação em chamadas arriscadas, um **modo de planejamento** que bloqueia edições e direciona o agente para pesquisa, um modo **aceitar-edições** que auto-aprova edições, um modo **ignorar permissões** (coloquialmente **modo YOLO**) que auto-aprova tudo. Pode trocar [no meio da sessão](./Sessão.md).

_Termos de vendedores:_ Claude Code chama estes de "modos de permissão", Codex os chama "modos de aprovação" — ambos precedem o empacotamento comportamental.

_Uso:_

"Ele fica editando arquivos quando só quero um plano."

"Mude para modo de planejamento — ele bloqueará escritas e ficará em pesquisa."

"E para a execução [AFK](./AFK.md) depois?"

"Modo ignorar permissões, mas só dentro do [sandbox](./Sandbox.md)."
