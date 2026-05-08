---
description: Uma mensagem do usuário mais tudo que o agente faz em resposta, até devolver ao usuário. Contém uma ou mais requisições ao provedor.
---

Uma mensagem do usuário mais tudo que o [agente](./Agente.md) faz em resposta, até devolver ao usuário. Contém uma ou mais [requisições ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md) — muitas, se o agente chama [ferramentas](./Ferramenta.md). Uma pergunta de esclarecimento fecha o turno; sua resposta abre o próximo. A hierarquia é [sessão](./Sessão.md) **> Turno > Requisição ao provedor de modelo**.

_Uso:_

"Um turno levou dois minutos?"

"Ele fez quatorze [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) dentro desse turno — cada uma é uma requisição ao provedor de modelo separada. A latência se acumula antes do agente finalmente devolver para você."
