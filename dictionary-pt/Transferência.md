---
description: Transferir contexto do agente de uma sessão para outra, sem caminho de retorno. Mecanismo de transporte varia — artefato, compactação, outros.
---

Transferir [contexto](./Contexto.md) do [agente](./Agente.md) de uma [sessão](./Sessão.md) para outra, sem caminho de retorno. O mecanismo de transporte varia — um [artefato de transferência](./Artefato%20de%20transferência.md) escrito, um resumo em memória ([compactação](./Compactação.md)), e outros. Distinto de [limpeza](./Limpeza.md) (sem transferência alguma). Razões variam: trocar papéis (planejador → implementador), iniciar uma execução [AFK](./AFK.md), distribuir em sessões paralelas, ou liberar espaço na [janela de contexto](./Janela%20de%20contexto.md).

_Uso:_

"Sessão de planejamento está ficando pesada — devo continuar?"

"Faça uma transferência. Escreva as decisões num doc, limpe, comece a implementação numa sessão nova lendo dele."
