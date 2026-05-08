---
description: Uma ida e volta do harness ao provedor de modelo. O harness envia contexto; o provedor retorna uma resposta.
---

Uma ida e volta do [harness](./Harness.md) ao [provedor de modelo](./Provedor%20de%20modelo.md). O harness envia o [contexto](./Contexto.md) atual; o provedor retorna uma resposta (uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) ou uma resposta final). Uma única mensagem do usuário pode gerar muitas requisições ao provedor de modelo se o [agente](./Agente.md) chamar [ferramentas](./Ferramenta.md) — cada [resultado de ferramenta](./Resultado%20de%20ferramenta.md) dispara outra requisição.

_Uso:_

"Uma pergunta queimou quarenta mil [tokens](./Token.md)?"

"Olhe as chamadas de ferramentas — doze grep, oito read, quatro edits. Cada resultado de ferramenta gera outra requisição ao provedor de modelo, e todo o prefixo da [sessão](./Sessão.md) é reenviado toda vez."
