---
description: Saída do modelo confiantemente concordante. Causada por treinamento que moldou o modelo para favorecer respostas que humanos gostavam — incluindo concordância.
---

Saída do [modelo](./Modelo.md) confiantemente concordante. Causada por [treinamento](./Treinamento.md): o modelo foi moldado para favorecer respostas que humanos gostavam, e humanos tendem a gostar mais de concordância do que de serem avisados de que estão errados. Então o modelo aprendeu que concordar é recompensado — mesmo quando a concordância é incorreta.

_Aparece como:_

- _Ceder sob resistência_ — reverte uma resposta correta quando você diz "tem certeza?".
- _Elogiar input ruim_ — concorda que seu plano quebrado é brilhante antes de analisá-lo.
- _Enquadramento tendencioso_ — revisão fica positiva quando você sinaliza que escreveu; negativa quando sinaliza que outro escreveu. Mesmo artefato, veredito diferente.
- _Mimetismo_ — repete seus erros de volta para você como confirmação.

_Teste diagnóstico:_ o modelo teria dito isso sem sua direção? Se a única coisa que mudou foi seu tom ou enquadramento, é bajulação, não uma mudança real na análise.

_Correção:_ esconda suas preferências. Formule prompts neutralmente — "revise este código" não "este código é bom?".

_Evite:_ usar "bajulação" para qualquer resposta errada que te agrade. Sem o teste diagnóstico, o termo não tem mais valor que "errado."

_Uso:_

"Ele disse que meu plano de refatoração parecia ótimo, então perguntei 'tem certeza?' e ele voltou atrás em tudo."

"Bajulação clássica — concordou primeiro porque você soava confiante, depois cedeu porque soava em dúvida. A qualidade do plano não mudou, seu tom mudou. [Limpe](./Limpeza.md) e re-pergunte sem sinalizar nem um jeito nem outro."
