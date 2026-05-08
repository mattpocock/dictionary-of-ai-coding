---
description: O armazenamento do lado do provedor que permite requisições consecutivas pularem o reprocessamento de um prefixo compartilhado, cobrando esses tokens a uma taxa menor.
---

O armazenamento do lado do [provedor](./Provedor%20de%20modelo.md) que permite [requisições consecutivas ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md) pularem o reprocessamento de um prefixo compartilhado. Quando o início de uma requisição corresponde ao início de uma recente — mesmo [prompt de sistema](./Prompt%20de%20sistema.md), mesmo histórico até certo ponto — o provedor reutiliza seu trabalho anterior e cobra esses [tokens](./Token.md) como [tokens de cache](./Tokens%20de%20cache.md) a uma taxa muito menor.

Qualquer coisa que mude o prefixo (reordenar arquivos, reescrever o prompt de sistema no meio da [sessão](./Sessão.md), injetar um timestamp perto do topo) invalida o cache daquele ponto em diante, e o resto da requisição é cobrado à taxa completa de [token de entrada](./Tokens%20de%20entrada.md).

_Uso:_

"Por que a conta disparou no meio da sessão?"

"[Harness](./Harness.md) começou a injetar a hora atual no prompt de sistema a cada [turno](./Turno.md). O cache de prefixo quebra no primeiro token alterado, então cada requisição depois disso foi cobrada à taxa completa."
