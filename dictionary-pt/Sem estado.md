---
description: Não carrega informações adiante. O modelo não tem estado entre requisições; um agente não tem estado entre sessões por padrão.
---

Não carrega informações adiante. O [modelo](./Modelo.md) não tem estado entre [requisições ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md) — cada requisição reenvia a [janela de contexto](./Janela%20de%20contexto.md) completa, porque o modelo não tem como ver nada além disso. Um [agente](./Agente.md) não tem estado entre [sessões](./Sessão.md) por padrão: uma nova sessão começa vazia, sem traço das anteriores. Contraponto de [com estado](./Com%20estado.md).

_Uso:_

"Por que ele esquece a convenção toda vez que eu [limpo](./Limpeza.md)?"

"O modelo não tem estado — a nova sessão começa vazia. Se você quer que seja mantido, escreva em [AGENTS.md](./AGENTS.md.md) ou num arquivo de memória que o [harness](./Harness.md) carrega no início da sessão."
