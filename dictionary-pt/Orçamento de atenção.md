---
description: Cada token tem uma quantidade finita de influência para distribuir pelo resto do contexto. Por token, não cresce quando o contexto cresce.
---

Cada [token](./Token.md) tem uma quantidade finita de influência para distribuir pelo resto do [contexto](./Contexto.md). Influência pesada em [um relacionamento](./Relacionamento%20de%20atenção.md) deixa menos para outros. O orçamento é por token e não cresce quando o contexto cresce, razão pela qual [sessões](./Sessão.md) longas diluem.

_Uso:_

"Por que ele fica ignorando o schema que colei no topo?"

"Estamos bem dentro da [zona burra](./Zona%20inteligente.md) — o orçamento de atenção de cada token é fixo, mas o contexto continuou crescendo. O sinal no schema agora está competindo com milhares de tokens mais novos."
