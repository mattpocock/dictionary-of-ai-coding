---
description: Uma árvore de arquivos e diretórios da qual o agente lê, escreve e executa — o ambiente padrão para um agente de código.
---

Uma árvore de arquivos e diretórios da qual o [agente](./Agente.md) lê, escreve e executa — o tipo padrão de [ambiente](./Ambiente.md) para um agente de código. [AGENTS.md](./AGENTS.md.md), [habilidades](./Habilidade.md), código-fonte, scripts de build e configs de [ferramentas](./Ferramenta.md) todos vivem num sistema de arquivos. Quando um [harness](./Harness.md) "inicia no seu projeto", está apontando o agente para um sistema de arquivos.

_Uso:_

"Por que ele não está pegando meu AGENTS.md?"

"Está rodando contra um sistema de arquivos diferente — o [sandbox](./Sandbox.md) montou o diretório pai, não a raiz do projeto. Reaponte o harness."
