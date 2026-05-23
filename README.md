# Permissões do Sistema SAIPOS

Ferramenta interna de consulta das permissões de usuário do sistema SAIPOS. O objetivo é simples: qualquer pessoa da equipe consegue abrir, buscar uma permissão e entender exatamente o que ela faz — e o que ela **não** faz.

---

## Estrutura do projeto

```
saipos-permissoes/
├── index.html           # Página principal (standalone — tudo embutido)
├── style.css            # Estilos da interface
├── script.js            # Lógica de renderização, filtros e comportamento
├── permisoes.js         # Base de dados com todas as permissões
├── assets/
│   ├── allen_nobg.png       # Logo do Allen sem fundo
│   └── Design_sem_nome.png  # Imagem de fundo do wallpaper
└── README.md            # Este arquivo
```

> O `index.html` é **standalone**: CSS, imagens e scripts estão todos embutidos em base64. Isso significa que ele abre direto no navegador, sem precisar de servidor, sem dependências externas.

---

## Onde ficam os dados

Toda a base de permissões está em `permisoes.js`, num array chamado `permissoes`. Cada item representa uma permissão e tem a seguinte estrutura:

```js
{
  name:       "Nome da permissão no sistema",
  session:    "Módulo ao qual pertence",
  category:   "Categoria dentro do módulo",
  nivel:      "operacional" | "sensivel" | "critica",
  confianca:  "✅" | "⚠️" | "❓",
  objetivo:   "O que essa permissão se propõe a bloquear/controlar",
  oQueFaz:    "O comportamento real e confirmado",
  oQueNaoFaz: "O que NÃO acontece, apesar do nome sugerir"
}
```

O campo `confianca` vem direto da análise manual feita no PDF de referência:
- **✅** — comportamento testado e confirmado
- **⚠️** — testado, mas com dúvidas
- **❓** — não foi possível testar

### Cobertura atual

| Sessão | Permissões |
|---|---|
| Vendas | 18 |
| Financeiro | 13 |
| Produtos | 8 |
| Relacionamento com Cliente | 2 |
| Opções da Loja | 1 |
| Aplicativo | 1 |
| **Total** | **43** |

Por nível de acesso: 10 operacionais, 26 sensíveis, 7 críticas.

---

## Como o sistema funciona

### Carregamento inicial

1. O navegador carrega o `index.html`
2. `permisoes.js` é executado — o array `permissoes` fica disponível globalmente
3. `script.js` roda em seguida:
   - passa o array por `mergePermissoes()`, que normaliza e valida cada item
   - popula os dropdowns de filtro com as sessões e categorias únicas
   - renderiza todos os cards na tela

### Busca e filtros

Os três controles do header filtram em tempo real:

- **Campo de texto** — busca por nome da permissão, com normalização de string (ignora acentos, maiúsculas e pontuação)
- **Sessão** — filtra por módulo do sistema (Vendas, Financeiro, etc.)
- **Categoria** — filtra pela subcategoria dentro do módulo

Os filtros funcionam juntos. Se você selecionar "Financeiro" no dropdown e digitar "caixa", só aparecem as permissões que atendem aos dois critérios ao mesmo tempo.

### Card de permissão

Cada permissão é renderizada como um card com:

- Nome da permissão + badge de nível (cor indica criticidade)
- Sessão e categoria
- Badge de confiança da análise
- Botão **"Ver detalhes"** que expande o card com animação suave

O painel expandido mostra três campos:
- 🎯 **Objetivo** — o que a permissão foi criada para controlar
- ⚙️ **O que faz** — o comportamento real, como foi observado nos testes
- 🚫 **O que não faz** — as exceções que o nome pode sugerir mas que não existem

Se uma permissão existir no sistema mas não tiver sido analisada no PDF, o card exibe a mensagem *"Detalhamento não encontrado na análise"* em vez de informação incorreta.

### Animação do toggle

O expand/collapse usa `grid-template-rows: 0fr → 1fr` em vez de `max-height`. A diferença prática: a transição acompanha o tamanho real do conteúdo, então não tem aquele efeito de "espaço vazio aparecendo antes do texto".

---

## Como adicionar ou editar permissões

Tudo fica em `permisoes.js`. Para adicionar uma nova permissão, basta incluir um novo objeto no array seguindo a estrutura acima:

```js
{
  name: "Nome exato como aparece no sistema",
  session: "Vendas",          // precisa bater com as opções já existentes
  category: "Delivery",
  nivel: "sensivel",
  confianca: "✅",
  objetivo: "...",
  oQueFaz: "...",
  oQueNaoFaz: "..."
},
```

Não é necessário mexer em `script.js` ou `style.css` — o sistema lê o array e renderiza tudo automaticamente.

---

**Vercel (recomendado):**
```bash
npx vercel --prod
```
