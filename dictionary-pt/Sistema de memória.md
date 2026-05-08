---
description: Um sistema que tenta tornar um agente com estado entre sessões persistindo no ambiente e recarregando no início da sessão.
---

Um sistema que tenta tornar um [agente](./Agente.md) [com estado](./Com%20estado.md) entre [sessões](./Sessão.md). Persiste informações no [ambiente](./Ambiente.md) durante uma sessão e as recarrega na [janela de contexto](./Janela%20de%20contexto.md) no início de futuras, para que o agente carregue continuidade além do usuário [limpar](./Limpeza.md) a sessão.

_Uso:_

"Fico tendo que re-avisar que estou no Postgres, não MySQL."

"Configure um sistema de memória — escreva o que ele aprende no [sistema de arquivos](./Sistema%20de%20arquivos.md) no primeiro [turno](./Turno.md), recarregue no início da sessão. O [modelo](./Modelo.md) em si é [sem estado](./Sem%20estado.md); a camada de memória simula continuidade."
