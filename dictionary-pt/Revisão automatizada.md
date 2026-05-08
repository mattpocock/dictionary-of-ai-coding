---
description: Um agente revisando o trabalho de outro agente, frequentemente com um modelo ou prompt do sistema diferente. Não-determinístico: forma um julgamento.
---

Um [agente](./Agente.md) revisando o trabalho de outro agente, frequentemente com um [modelo](./Modelo.md) ou [prompt do sistema](./Prompt%20do%20sistema.md) diferente. Não-determinístico: forma um julgamento. Roda em qualquer lugar — pré-merge num PR, pós-facto no histórico de commits, meio da sessão como um [subagente](./Subagente.md). Um LLM-como-juiz em CI é revisão automatizada, não uma [verificação automatizada](./Verificação%20automatizada.md); o que a asserção _faz_ decide a categoria, não onde roda.

_Evite:_ "revisão de IA" / "revisão de agente" — vago demais para distinguir do próprio agente de trabalho.

_Uso:_

"Estamos recebendo PRs ruins demais das execuções [AFK](./AFK.md)."

"Adicione um passo de revisão automatizada antes do merge — modelo diferente, prompt do sistema separado, focado em segurança e mudanças de contrato."
