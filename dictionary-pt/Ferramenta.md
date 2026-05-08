---
description: Uma função que o harness expõe para o agente chamar — Read, Write, Bash, Search. Como um agente percebe e atua no ambiente.
---

Uma função que o [harness](./Harness.md) expõe para o [agente](./Agente.md) chamar — Read, Write, Bash, Search. Ferramentas são como um agente percebe e atua no [ambiente](./Ambiente.md): ele não consegue ver o ambiente exceto através de [resultados de ferramentas](./Resultado%20de%20ferramenta.md), e não consegue mudá-lo exceto através de [chamadas de ferramentas](./Chamada%20de%20ferramenta.md). Cada chamada de ferramenta custa uma [requisição ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md) extra, já que o resultado tem que voltar ao modelo antes que ele possa decidir o que fazer depois.

_Uso:_

"O agente pode consultar staging diretamente?"

"Adicione uma ferramenta `psql` ao harness, com escopo somente leitura em staging. Sem uma ferramenta para isso, o agente é cego a tudo fora do [sistema de arquivos](./Sistema%20de%20arquivos.md)."
