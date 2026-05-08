---
description: O que o harness mostra ao usuário antes de executar uma chamada de ferramenta não pré-aprovada. O mecanismo para colocar um humano no loop.
---

O que o [harness](./Harness.md) mostra ao usuário antes de executar uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) não pré-aprovada. O [modelo](./Modelo.md) produz uma chamada de ferramenta; em vez de rodá-la imediatamente, o harness pausa e pergunta. Aprove e ela roda; negue e o harness reporta a negação de volta ao modelo como um [resultado de ferramenta](./Resultado%20de%20ferramenta.md). O mecanismo pelo qual um harness coloca um humano no [loop](./Humano-no-loop.md) para ações arriscadas ou sensíveis.

_Uso:_

"Está bloqueado numa requisição de permissão há dez minutos — eu estava numa reunião."

"Esse é o custo do humano-no-loop. Pré-aprove as [ferramentas](./Ferramenta.md) seguras para que a requisição só dispare nas chamadas realmente arriscadas."
