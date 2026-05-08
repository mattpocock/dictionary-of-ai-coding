---
description: Saída do modelo confiantemente errada. Dois sabores: factualidade (fatos inventados) e fidelidade (deriva do contexto carregado).
---

Saída do [modelo](./Modelo.md) confiantemente errada. Dois sabores com causas e correções diferentes:

- _Alucinação de factualidade_ — fatos inventados ou errados sobre o mundo (uma função que não existe, uma assinatura de API errada, uma citação falsa). Causada por lacunas no [conhecimento paramétrico](./Conhecimento%20paramétrico.md), frequentemente após o [corte de conhecimento](./Corte%20de%20conhecimento.md). Correção: carregue o [conhecimento contextual](./Conhecimento%20contextual.md) correto.
- _Alucinação de fidelidade_ — saída deriva do **conhecimento contextual** que está carregado, das instruções do usuário, ou do raciocínio prévio do próprio modelo. Sintoma de [degradação de atenção](./Degradação%20de%20atenção.md); piora na [zona burra](./Zona%20inteligente.md). Correção: [limpe](./Limpeza.md) ou [compacte](./Compactação.md).

_Evite:_ "alucinação" como sinônimo puro de "errado" — sem nomear o sabor, o termo não tem valor diagnóstico.

_Uso:_

"Ele alucinou um método `parseAsync` no schema."

"Factualidade ou fidelidade?"

"O método existe nos docs que colei — ele só parou de lê-los depois do [turno](./Turno.md) quarenta."

"Fidelidade então. Compacte e recarregue, não perca tempo adicionando mais docs."
