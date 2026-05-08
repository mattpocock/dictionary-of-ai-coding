---
description: Carrega informações adiante. Sessões têm estado entre turnos; agentes podem ter estado entre sessões via sistema de memória.
---

Carrega informações adiante. Uma [sessão](./Sessão.md) tem estado entre [turnos](./Turno.md) — [contexto](./Contexto.md) se acumula conforme a sessão roda, razão pela qual sessões longas derivam para a [zona burra](./Zona%20inteligente.md). Um [agente](./Agente.md) pode ter estado entre **sessões** adicionando um [sistema de memória](./Sistema%20de%20memória.md) que persiste informações no [ambiente](./Ambiente.md) e as recarrega no início de sessões futuras. O [modelo](./Modelo.md) nunca tem estado; qualquer continuidade aparente é o [harness](./Harness.md) re-alimentando contexto. Contraponto de [sem estado](./Sem%20estado.md).

_Uso:_

"Ele lembrou minhas preferências de ontem — isso significa que o modelo as aprendeu?"

"Não, o agente tem estado porque o harness as escreveu num arquivo de memória e as recarregou no início da sessão. O modelo em si não viu nada de ontem."
