---
description: Uma verificação determinística que roda no ambiente — testes, checagem de tipos, lints, build, hooks pre-commit. Passa/falha, sem julgamento.
---

Uma verificação determinística que roda no [ambiente](./Ambiente.md) — testes, checagem de tipos, lints, build, hooks pre-commit. Passa/falha, sem julgamento. O sinal de que um [agente](./Agente.md) pode se auto-corrigir sem envolver ninguém mais. Um teste instável é uma verificação quebrada, não uma não-verificação; verificações automatizadas são determinísticas _por design_.

_Evite:_ "loop de feedback" / "contrapressão" — ambos misturam verificações com [revisão](./Revisão%20automatizada.md). _Evite:_ "teste" — testes são verificações automatizadas, mas nem todas verificações automatizadas são testes.

_Uso:_

"O agente fica enviando código quebrado nas execuções [AFK](./AFK.md)."

"Quais verificações automatizadas estão conectadas ao [sandbox](./Sandbox.md)?"

"Só os testes unitários."

"Adicione checagem de tipos e lint — ele vai se auto-corrigir desses antes do PR sequer pousar."
