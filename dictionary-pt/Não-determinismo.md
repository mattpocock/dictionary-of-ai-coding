---
description: A mesma entrada pode produzir saídas diferentes. Uma propriedade de como os modelos geram texto e como provedores atendem requisições.
---

A mesma entrada pode produzir saídas diferentes. Execute um [modelo](./Modelo.md) duas vezes com [contexto](./Contexto.md) idêntico e você pode obter duas respostas diferentes — às vezes uma palavra, às vezes uma abordagem completamente diferente. Nada no seu código precisa mudar para isso acontecer.

É uma propriedade de como os modelos geram texto, e como [provedores de modelo](./Provedor%20de%20modelo.md) atendem [requisições](./Requisição%20ao%20provedor%20de%20modelo.md). Não há configuração que você possa ajustar para fazer isso desaparecer.

Espere uma distribuição de resultados de um [agente](./Agente.md) na mesma tarefa. Alguns dias o modelo parecerá afiado; alguns dias parecerá que perdeu o rumo. Mesma tarefa, diferentes lançamentos de dados.

Tenha cuidado para não narrativizar demais isso. Humanos são máquinas de reconhecimento de padrões, e uma sequência de execuções ruins pode parecer prova de que "o modelo piorou esta semana". Geralmente é apenas a distribuição.

_Uso:_

"Claude tem estado horrível hoje. Eles lançaram uma versão pior?"

"Provavelmente não — a saída do modelo é não-determinística. Você terá dias bons e ruins na mesma tarefa. Tente novamente amanhã antes de procurar uma causa."
