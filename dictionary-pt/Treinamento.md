---
description: O processo que define os parâmetros de um modelo expondo-o a grandes quantidades de texto e ajustando para melhorar a predição do próximo token.
---

O processo que define os [parâmetros](./Parâmetros.md) de um [modelo](./Modelo.md), expondo-o a grandes quantidades de texto e ajustando parâmetros para melhorar a [predição do próximo token](./Predição%20do%20próximo%20token.md). Um processo único e caro feito pelo [provedor de modelo](./Provedor%20de%20modelo.md). Engloba tanto pré-treinamento (a execução em massa) quanto pós-treinamento (refinamentos posteriores como seguir instruções e segurança); a distinção não importa no nível deste glossário.

_Uso:_

"Podemos fazer ele conhecer nossa API interna?"

"Não via treinamento — isso é um processo de meses pelo provedor de modelo. Carregue a documentação da API no [contexto](./Contexto.md) ao invés disso, essa é a alavanca que você realmente tem."
