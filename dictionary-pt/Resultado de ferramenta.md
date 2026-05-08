---
description: O que o harness envia de volta após executar uma chamada de ferramenta — conteúdo do arquivo, saída ou erro. A única janela do agente para o ambiente.
---

O que o [harness](./Harness.md) envia de volta após executar uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) — o conteúdo do arquivo, a saída do comando, o erro. A única janela do [agente](./Agente.md) para o [ambiente](./Ambiente.md). Viaja de volta ao [modelo](./Modelo.md) na _próxima_ [requisição ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md), onde o modelo decide o que fazer com ela. Chamada de ferramenta e resultado de ferramenta são duas pontas da mesma troca, ambas dentro de um [turno](./Turno.md).

_Uso:_

"Ele está raciocinando sobre o arquivo como se estivesse vazio."

"O resultado da ferramenta voltou como negação de permissão, não o conteúdo. O modelo só viu a string de erro — ele não tem outra janela para o arquivo."
