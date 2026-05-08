---
description: Tudo que o modelo vê em cada requisição ao provedor de modelo. Finita, específica do modelo, a única superfície pela qual o modelo percebe.
---

Tudo que o [modelo](./Modelo.md) vê em cada [requisição ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md). Finita, específica do modelo, e a _única_ superfície pela qual o modelo percebe qualquer coisa.

_Evite:_ "memória" — a janela de contexto é estado de trabalho e não persiste entre [sessões](./Sessão.md). [Memória](./Sistema%20de%20memória.md) é um conceito separado em camada superior.

_Uso:_

"Posso simplesmente colar todo o monorepo no prompt?"

"A janela de contexto tem 200 mil [tokens](./Token.md) — isso é talvez um quinto do repo. Escolha os arquivos que a tarefa toca, deixe o resto atrás de uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md)."
