---
description: Um artefato de transferência delimitando uma sessão de trabalho. Sozinho ou pendurado numa especificação. Pode bloquear ou ser bloqueado por tickets irmãos.
---

Um [artefato de transferência](./Artefato%20de%20transferência.md) delimitando uma [sessão](./Sessão.md) de trabalho. Sozinho, ou pendurado numa [especificação](./Especificação.md) como um de seus filhos. Tickets podem bloquear ou ser bloqueados por tickets irmãos, então a ordem do trabalho sai de seu grafo de dependências ao invés de um plano linear.

_Uso:_

"Por onde começo na especificação da migração?"

"Olhe o grafo de tickets — a mudança de schema bloqueia o backfill, o backfill bloqueia a troca da API. Pegue uma folha e rode uma sessão nela."
