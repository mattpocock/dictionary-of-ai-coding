---
description: O que o modelo realmente faz. Amostra um próximo token do contexto, o anexa e executa novamente. Seu único modo de operação.
---

O que o [modelo](./Modelo.md) realmente faz. Dado um [contexto](./Contexto.md), ele amostra um próximo [token](./Token.md), o anexa e executa novamente. Cada saída — uma frase, uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md), um arquivo de mil linhas — é construída um token por vez. O modelo não tem outro modo de operação.

_Uso:_

"Como o [agente](./Agente.md) 'decide' chamar uma ferramenta?"

"Ele não decide — é predição do próximo token até o fim. A chamada de ferramenta é apenas uma string estruturada que o [harness](./Harness.md) analisa do fluxo de saída."
