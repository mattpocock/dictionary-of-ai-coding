---
description: O pareamento entre dois tokens — pares significativos influenciam um ao outro mais que os não relacionados. Um contexto de N tokens tem ~N² desses.
---

Ao predizer cada [token](./Token.md), o [modelo](./Modelo.md) leva em conta todos os outros tokens no [contexto](./Contexto.md) — alguns pesadamente, outros quase nada. O pareamento entre dois tokens é um **relacionamento de atenção**, e pares significativos ("ela" com "Sarah", ou uma chamada `getUser()` com sua definição `function getUser`) influenciam um ao outro mais que os não relacionados. Um contexto de N tokens tem na ordem de N² relacionamentos.

_Uso:_

"Ele fica confundindo os dois símbolos `user` através do diff — parece que estamos na [zona burra](./Zona%20inteligente.md)."

"Sim, o relacionamento de atenção entre cada site de chamada e sua declaração está brigando com o outro — mesma forma de token, bindings diferentes. Renomeie um e os pareamentos se afinam."
