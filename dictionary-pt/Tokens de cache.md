---
description: Tokens de entrada que o provedor tem em cache de uma requisição anterior via seu cache de prefixo, cobrados a uma taxa muito menor.
---

[Tokens de entrada](./Tokens%20de%20entrada.md) que o [provedor](./Provedor%20de%20modelo.md) tem em cache de uma [requisição anterior ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md) para não ter que reprocessá-los. Quando requisições consecutivas compartilham um prefixo, o provedor reutiliza o trabalho via seu [cache de prefixo](./Cache%20de%20prefixo.md) e cobra a porção em cache a uma taxa muito menor. A alavanca que torna [sessões](./Sessão.md) longas acessíveis — sem ela, cada [turno](./Turno.md) paga novamente por todo o histórico.

_Uso:_

"Custo em sessões longas é brutal — oito dólares por uma refatoração."

"Verifique os tokens de cache. Se o [harness](./Harness.md) está reordenando o [prompt de sistema](./Prompt%20de%20sistema.md) ou arquivos entre turnos, o prefixo quebra e você paga novamente a taxa de entrada completa a cada requisição."
