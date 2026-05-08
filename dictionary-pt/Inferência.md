---
description: Executar um modelo treinado para gerar saída — o que acontece em cada requisição ao provedor de modelo. Os parâmetros permanecem fixos.
---

Executar um [modelo](./Modelo.md) treinado para gerar saída — o que acontece em cada [requisição ao provedor de modelo](./Requisição%20ao%20provedor%20de%20modelo.md). Os [parâmetros](./Parâmetros.md) permanecem fixos; o modelo apenas faz [predição do próximo token](./Predição%20do%20próximo%20token.md) sobre o [contexto](./Contexto.md) que lhe é dado. Barato em relação ao [treinamento](./Treinamento.md), mas cobrado por [token](./Token.md) e o custo dominante de usar um modelo.

_Uso:_

"Por que a conta escala com o uso ao invés de ser uma licença fixa?"

"Você está pagando pela inferência — cada requisição ao provedor de modelo executa o modelo no hardware do provedor. O treinamento já aconteceu, mas os custos de inferência acumulam por requisição, e um único [turno](./Turno.md) pode se expandir em muitas requisições quando [ferramentas](./Ferramenta.md) são chamadas."
