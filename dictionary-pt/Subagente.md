---
description: Um agente criado por outro agente via chamada de ferramenta. Roda em sua própria sessão, reporta um único resultado de ferramenta. Não pode criar mais subagentes.
---

Um [agente](./Agente.md) criado por outro agente via [chamada de ferramenta](./Chamada%20de%20ferramenta.md). Roda em sua própria [sessão](./Sessão.md) com sua própria [janela de contexto](./Janela%20de%20contexto.md), e reporta um único [resultado de ferramenta](./Resultado%20de%20ferramenta.md) de volta. Distinto de uma [transferência](./Transferência.md) — o pai especificamente espera um retorno; uma transferência não tem caminho de retorno. **Não pode criar mais subagentes** — a árvore tem um nível de profundidade. Subagentes existem para isolar [contexto](./Contexto.md), não para compor hierarquias.

_Uso:_

"Os resultados do grep estão explodindo meu contexto."

"Crie um subagente para fazer a busca — ele queimará sua própria janela de contexto no ruído e reportará de volta os dois caminhos de arquivo que você realmente precisa."
