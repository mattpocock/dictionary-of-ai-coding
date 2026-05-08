---
description: A unidade atômica que um modelo lê e escreve. Aproximadamente do tamanho de uma palavra, mas não exatamente. Tamanho da janela de contexto, custo e latência contam tokens.
---

A unidade atômica que um [modelo](./Modelo.md) lê e escreve. Aproximadamente do tamanho de uma palavra, mas não exatamente — palavras comuns são um token, raras ou longas dividem-se em vários. O tamanho da [janela de contexto](./Janela%20de%20contexto.md), custo e latência são todos contados em tokens.

_Evite:_ "palavra" — limites de tokens não correspondem a limites de palavras, e tokens por segundo / tokens por dólar são as unidades que realmente importam.

_Uso:_

"Quão grande vai ser este prompt?"

"Execute-o pelo tokenizador — o esquema é compacto mas as chaves JSON são estranhas, então elas vão se dividir em mais tokens do que você pensa."
