---
description: Uma execução delimitada de interação com um agente. Começa vazia, acumula, termina quando limpa, fechada ou compactada em nova sessão.
---

Uma execução delimitada de interação com um [agente](./Agente.md). Começa vazia, acumula mensagens, [resultados de ferramentas](./Resultado%20de%20ferramenta.md) e arquivos lidos, e termina quando [limpa](./Limpeza.md), fechada ou [compactada](./Compactação.md) em uma nova sessão. A sessão é o que _preenche_ a [janela de contexto](./Janela%20de%20contexto.md): se a janela de contexto é a caixa, a sessão é o conteúdo lentamente a preenchendo. Trabalho grande demais para uma única janela de contexto deve ser dividido entre sessões.

_Uso:_

"Quanto tempo uma sessão pode rodar antes de desmoronar?"

"Depende do trabalho — uma refatoração focada permanece afiada por mais tempo que uma pesquisa aberta. Quando a sessão incha, [transfira](./Transferência.md) ou compacte, não force."
