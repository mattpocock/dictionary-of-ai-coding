---
description: Fatos que o agente pode ler diretamente do contexto agora. Contraponto ao conhecimento paramétrico.
---

Fatos que o [agente](./Agente.md) pode ler diretamente do [contexto](./Contexto.md) agora — a tarefa do usuário, arquivos que o agente leu, [resultados de ferramentas](./Resultado%20de%20ferramenta.md), conteúdo do [AGENTS.md](./AGENTS.md.md) carregado no início da [sessão](./Sessão.md). Contraponto ao [conhecimento paramétrico](./Conhecimento%20paramétrico.md): paramétrico é _lembrado_ dos parâmetros; contextual é _lido_ da [janela](./Janela%20de%20contexto.md). [Alucinações](./Alucinação.md) são muito menos comuns quando o agente trabalha a partir do conhecimento contextual — a resposta está bem na frente dele, não dragada de uma memória borrada.

_Use este termo_ apenas quando contrastando com conhecimento paramétrico; caso contrário apenas diga **contexto**.

_Evite:_ "memória de trabalho" — conhecimento contextual é o que está na janela _agora_; um [sistema de memória](./Sistema%20de%20memória.md) é o que coloca conteúdo entre sessões nela. Escalas diferentes, não confunda.

_Uso:_

"Por que ele acerta a API quando colo os docs e a fabrica quando não colo?"

"Com os docs, é conhecimento contextual — lendo da página. Sem eles, é paramétrico e os endpoints raros ficam borrados."
