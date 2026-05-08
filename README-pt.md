<!--
  ARQUIVO GERADO — NÃO EDITE.
  Fonte: dictionary-pt/*.md, internal/Curriculum-pt.md, internal/README.template-pt.md
  Regenerar: npm run generate:pt
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="Dicionário de Codificação com IA" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# Dicionário de Codificação com IA

**Codificação com IA pode parecer que é só para especialistas**. Jargão não explicado. Falhas misteriosas. Contas que não parecem corresponder ao trabalho.

Mas não é, realmente. Muita confusão é fabricada: **há toda uma economia financiada por capital de risco que se beneficia de manter isso difícil de entender**.

Os termos básicos de engajamento podem ser aprendidos em uma tarde. Uma vez que você os tem, a coisa toda para de parecer adivinhação.

Por que o contexto degrada? Por que a conta é tão alta? Por que o mesmo prompt se comporta diferentemente de um dia para o outro?

Cada um tem uma resposta clara, uma vez que alguém te diga as palavras para usar.

É para isso que serve este dicionário. **O vocabulário da codificação com IA, traduzido para português simples**.

**Quer mais que o vocabulário?** Junte-se a 62.000+ desenvolvedores em **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** para minhas últimas habilidades, pensamentos sobre engenharia de IA e os recursos que vão te manter à frente da curva.

---

## Índice

<details>
<summary>Seção 1 — O Modelo</summary>

- [Modelo](#modelo)
- [Parâmetros](#parâmetros)
- [Treinamento](#treinamento)
- [Inferência](#inferência)
- [Token](#token)
- [Predição do próximo token](#predição-do-próximo-token)
- [Não-determinismo](#não-determinismo)
- [Provedor de modelo](#provedor-de-modelo)
- [Harness](#harness)
- [Requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo)
- [Tokens de entrada](#tokens-de-entrada)
- [Tokens de saída](#tokens-de-saída)
- [Cache de prefixo](#cache-de-prefixo)
- [Tokens de cache](#tokens-de-cache)

</details>

## Seção 1 — O Modelo

### Modelo

Os [parâmetros](#parâmetros). [Stateless](#stateless) — faz [predição do próximo token](#predição-do-próximo-token) e nada mais. "Claude Opus 4.7" e "GPT-5" são modelos. Por si só, um modelo não pode fazer nada agêntico; ele precisa ser [harnessado](#harness).

_Uso:_

"Devemos trocar o modelo de Sonnet para Opus para a etapa de planejamento?"

"Tente — mas o harness está fazendo a maior parte do trabalho pesado nesta tarefa. A troca de modelo não vai ajudar se o [prompt de sistema](#prompt-de-sistema) e as [ferramentas](#ferramenta) estiverem errados."

### Parâmetros

Os números dentro de um [modelo](#modelo) — frequentemente bilhões deles — ajustados durante o [treinamento](#treinamento). Tudo que o modelo "sabe" vive neles. O treinamento os define; a [inferência](#inferência) os usa sem alteração. Também chamados _pesos_ (weights).

_Uso:_

"Podemos fazer fine-tuning dele na nossa base de código?"

"Isso atualizaria os parâmetros — modelo diferente depois. Para um projeto, quase sempre é mais barato carregar a base de código como [contexto](#contexto) do que retreinar."

### Treinamento

O processo que define os [parâmetros](#parâmetros) de um [modelo](#modelo), expondo-o a grandes quantidades de texto e ajustando parâmetros para melhorar a [predição do próximo token](#predição-do-próximo-token). Um processo único e caro feito pelo [provedor de modelo](#provedor-de-modelo). Engloba tanto pré-treinamento (a execução em massa) quanto pós-treinamento (refinamentos posteriores como seguir instruções e segurança); a distinção não importa no nível deste glossário.

_Uso:_

"Podemos fazer ele conhecer nossa API interna?"

"Não via treinamento — isso é um processo de meses pelo provedor de modelo. Carregue a documentação da API no [contexto](#contexto) ao invés disso, essa é a alavanca que você realmente tem."

### Inferência

Executar um [modelo](#modelo) treinado para gerar saída — o que acontece em cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). Os [parâmetros](#parâmetros) permanecem fixos; o modelo apenas faz [predição do próximo token](#predição-do-próximo-token) sobre o [contexto](#contexto) que lhe é dado. Barato em relação ao [treinamento](#treinamento), mas cobrado por [token](#token) e o custo dominante de usar um modelo.

_Uso:_

"Por que a conta escala com o uso ao invés de ser uma licença fixa?"

"Você está pagando pela inferência — cada requisição ao provedor de modelo executa o modelo no hardware do provedor. O treinamento já aconteceu, mas os custos de inferência acumulam por requisição, e um único [turno](#turno) pode se expandir em muitas requisições quando [ferramentas](#ferramenta) são chamadas."

### Token

A unidade atômica que um [modelo](#modelo) lê e escreve. Aproximadamente do tamanho de uma palavra, mas não exatamente — palavras comuns são um token, raras ou longas dividem-se em vários. O tamanho da [janela de contexto](#janela-de-contexto), custo e latência são todos contados em tokens.

_Evite:_ "palavra" — limites de tokens não correspondem a limites de palavras, e tokens por segundo / tokens por dólar são as unidades que realmente importam.

_Uso:_

"Quão grande vai ser este prompt?"

"Execute-o pelo tokenizador — o esquema é compacto mas as chaves JSON são estranhas, então elas vão se dividir em mais tokens do que você pensa."

### Predição do próximo token

O que o [modelo](#modelo) realmente faz. Dado um [contexto](#contexto), ele amostra um próximo [token](#token), o anexa e executa novamente. Cada saída — uma frase, uma [chamada de ferramenta](#chamada-de-ferramenta), um arquivo de mil linhas — é construída um token por vez. O modelo não tem outro modo de operação.

_Uso:_

"Como o [agente](#agente) 'decide' chamar uma ferramenta?"

"Ele não decide — é predição do próximo token até o fim. A chamada de ferramenta é apenas uma string estruturada que o [harness](#harness) analisa do fluxo de saída."

### Não-determinismo

A mesma entrada pode produzir saídas diferentes. Execute um [modelo](#modelo) duas vezes com [contexto](#contexto) idêntico e você pode obter duas respostas diferentes — às vezes uma palavra, às vezes uma abordagem completamente diferente. Nada no seu código precisa mudar para isso acontecer.

É uma propriedade de como os modelos geram texto, e como [provedores de modelo](#provedor-de-modelo) atendem [requisições](#requisição-ao-provedor-de-modelo). Não há configuração que você possa ajustar para fazer isso desaparecer.

Espere uma distribuição de resultados de um [agente](#agente) na mesma tarefa. Alguns dias o modelo parecerá afiado; alguns dias parecerá que perdeu o rumo. Mesma tarefa, diferentes lançamentos de dados.

Tenha cuidado para não narrativizar demais isso. Humanos são máquinas de reconhecimento de padrões, e uma sequência de execuções ruins pode parecer prova de que "o modelo piorou esta semana". Geralmente é apenas a distribuição.

_Uso:_

"Claude tem estado horrível hoje. Eles lançaram uma versão pior?"

"Provavelmente não — a saída do modelo é não-determinística. Você terá dias bons e ruins na mesma tarefa. Tente novamente amanhã antes de procurar uma causa."

### Provedor de modelo

O que serve um [modelo](#modelo) para [inferência](#inferência). Geralmente um serviço remoto (Anthropic, OpenAI, Google), mas também pode ser local — Ollama, LM Studio, llama.cpp rodando na sua própria máquina. O [harness](#harness) não executa o modelo em si; ele pede a um provedor para fazer isso.

_Uso:_

"Podemos executar isso offline para o cliente air-gapped?"

"Troque o provedor de modelo para um local — Ollama ou llama.cpp na máquina deles. O harness não se importa, apenas acessa um endpoint diferente."

### Harness

Tudo ao redor do [modelo](#modelo) que o transforma em um [agente](#agente): [ferramentas](#ferramenta), [prompt de sistema](#prompt-de-sistema), [gerenciamento da janela de contexto](#janela-de-contexto), permissões, hooks. **Claude.ai** e **Claude Code** rodam no mesmo modelo mas se comportam diferentemente porque seus harnesses diferem.

_Uso:_

"Mesmo modelo, por que Claude Code está editando arquivos e Claude.ai apenas respondendo perguntas?"

"Harnesses diferentes — Claude Code tem ferramentas de [sistema de arquivos](#sistema-de-arquivos), um prompt de sistema diferente e uma camada de permissões. O modelo não é a variável aqui."

### Requisição ao provedor de modelo

Uma ida e volta do [harness](#harness) ao [provedor de modelo](#provedor-de-modelo). O harness envia o [contexto](#contexto) atual; o provedor retorna uma resposta (uma [chamada de ferramenta](#chamada-de-ferramenta) ou uma resposta final). Uma única mensagem do usuário pode gerar muitas requisições ao provedor de modelo se o [agente](#agente) chamar [ferramentas](#ferramenta) — cada [resultado de ferramenta](#resultado-de-ferramenta) dispara outra requisição.

_Uso:_

"Uma pergunta queimou quarenta mil [tokens](#token)?"

"Olhe as chamadas de ferramentas — doze grep, oito read, quatro edits. Cada resultado de ferramenta gera outra requisição ao provedor de modelo, e todo o prefixo da [sessão](#sessão) é reenviado toda vez."

### Tokens de entrada

[Tokens](#token) que o [harness](#harness) envia em cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). Cobrados a uma taxa menor que [tokens de saída](#tokens-de-saída).

_Uso:_

"A conta está alta mas o [agente](#agente) mal está escrevendo nada."

"São os tokens de entrada — cada [turno](#turno) reenvia toda a [sessão](#sessão). Sem o [cache de prefixo](#cache-de-prefixo) você paga novamente pelo histórico a cada requisição."

### Tokens de saída

[Tokens](#token) que o [modelo](#modelo) gera de volta. Cobrados a uma taxa maior que [tokens de entrada](#tokens-de-entrada), pois custam mais computação para produzir.

_Uso:_

"A [sessão](#sessão) de refatoração está queimando crédito mesmo que as entradas sejam pequenas."

"[Agente](#agente) está reescrevendo arquivos inteiros ao invés de fazer patches. Tokens de saída custam aproximadamente cinco vezes a taxa de entrada — faça-o emitir edições e a conta cai."

### Cache de prefixo

O armazenamento do lado do [provedor](#provedor-de-modelo) que permite [requisições consecutivas ao provedor de modelo](#requisição-ao-provedor-de-modelo) pularem o reprocessamento de um prefixo compartilhado. Quando o início de uma requisição corresponde ao início de uma recente — mesmo [prompt de sistema](#prompt-de-sistema), mesmo histórico até certo ponto — o provedor reutiliza seu trabalho anterior e cobra esses [tokens](#token) como [tokens de cache](#tokens-de-cache) a uma taxa muito menor.

Qualquer coisa que mude o prefixo (reordenar arquivos, reescrever o prompt de sistema no meio da [sessão](#sessão), injetar um timestamp perto do topo) invalida o cache daquele ponto em diante, e o resto da requisição é cobrado à taxa completa de [token de entrada](#tokens-de-entrada).

_Uso:_

"Por que a conta disparou no meio da sessão?"

"[Harness](#harness) começou a injetar a hora atual no prompt de sistema a cada [turno](#turno). O cache de prefixo quebra no primeiro token alterado, então cada requisição depois disso foi cobrada à taxa completa."

### Tokens de cache

[Tokens de entrada](#tokens-de-entrada) que o [provedor](#provedor-de-modelo) tem em cache de uma [requisição anterior ao provedor de modelo](#requisição-ao-provedor-de-modelo) para não ter que reprocessá-los. Quando requisições consecutivas compartilham um prefixo, o provedor reutiliza o trabalho via seu [cache de prefixo](#cache-de-prefixo) e cobra a porção em cache a uma taxa muito menor. A alavanca que torna [sessões](#sessão) longas acessíveis — sem ela, cada [turno](#turno) paga novamente por todo o histórico.

_Uso:_

"Custo em sessões longas é brutal — oito dólares por uma refatoração."

"Verifique os tokens de cache. Se o [harness](#harness) está reordenando o [prompt de sistema](#prompt-de-sistema) ou arquivos entre turnos, o prefixo quebra e você paga novamente a taxa de entrada completa a cada requisição."
