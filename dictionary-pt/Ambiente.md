---
description: O mundo sobre o qual o agente atua — tudo fora do harness que o agente percebe via resultados de ferramentas e muda via chamadas de ferramentas.
---

O mundo sobre o qual o [agente](./Agente.md) atua — tudo fora do [harness](./Harness.md) que o agente percebe através de [resultados de ferramentas](./Resultado%20de%20ferramenta.md) e muda através de [chamadas de ferramentas](./Chamada%20de%20ferramenta.md). O harness _roda_ o agente; o ambiente é onde o agente _trabalha_. Um arquivo como [`AGENTS.md`](./AGENTS.md.md) vive no ambiente; o harness é o que o carrega na [janela de contexto](./Janela%20de%20contexto.md). Um [sistema de arquivos](./Sistema%20de%20arquivos.md) é o tipo mais comum de ambiente, mas não o único (um banco de dados, uma API remota, uma sessão de navegador podem todos ser ambientes).

_Evite:_ usar "ambiente" para o runtime ou o próprio harness — o harness é o wrapper, o ambiente é o espaço de trabalho.

_Uso:_

"O agente não consegue ver o schema do DB de staging."

"Conecte-o ao ambiente — dê-lhe uma [ferramenta](./Ferramenta.md) `psql` com escopo somente leitura em staging. O harness está bem, só não tem sobre o que atuar."
