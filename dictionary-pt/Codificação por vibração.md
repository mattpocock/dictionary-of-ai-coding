---
description: Um padrão de trabalho onde o usuário aceita o código do agente sem revisão humana. O diff é tratado como opaco.
---

Um padrão de trabalho onde o usuário aceita o código do [agente](./Agente.md) sem [revisão humana](./Revisão%20humana.md). O diff é tratado como opaco — o que importa é se o programa se comporta, não o que está dentro. [Revisão automatizada](./Revisão%20automatizada.md) e [verificações automatizadas](./Verificação%20automatizada.md) ainda podem rodar; codificação por vibração é silenciosa sobre ambas.

_Evite:_ "codificação por vibração" como sinônimo de "codificação de IA de baixa qualidade" — o termo nomeia a postura de revisão, não o código resultante.

_Uso:_

"Você leu o que ele mudou no fluxo de auth?"

"Codifiquei por vibração — login ainda funciona, isso é tudo que chequei."

"Leia o diff antes de fazer push, vibrar em auth é como segredos vazam para logs."
