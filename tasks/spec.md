# Spec: Plataforma Educacional Interativa — Curso de Programação 3 Dias

## Objetivo

Construir uma **SPA (Single Page Application) com React + TypeScript** que sirva como plataforma educacional completa para um curso de programação de 3 dias.

**Usuário-alvo:** Alunos iniciantes em programação que participam de um bootcamp de 3 dias.

**Problema a resolver:** Centralizar todo o conteúdo do curso (módulos, slides, exercícios) em uma aplicação interativa com tipagem forte, componentes reutilizáveis e fácil manutenção de conteúdo.

**Sucesso:** O aluno acessa a aplicação via **GitHub Pages** (URL pública, sem instalação), navega pelos módulos de cada dia, assiste às apresentações de slides interativos e acessa os exercícios práticos — tudo via URL com hash, permitindo link direto para qualquer recurso.

---

## Tech Stack

| Camada          | Tecnologia                                          |
|-----------------|-----------------------------------------------------|
| Framework       | React 18                                           |
| Linguagem       | TypeScript 5                                       |
| Build Tool      | Vite 5                                             |
| Roteamento      | React Router v6 com `HashRouter`                   |
| Estilo          | Tailwind CSS v3                                     |
| Fontes          | Google Fonts — Poppins + Lato (via `index.html`)    |
| Ícones          | `react-icons` (Font Awesome 6 subset)              |
| Syntax Highlight| `react-syntax-highlighter`                         |
| Persistência    | `localStorage` — progresso do aluno (módulos visitados) |
| Deploy          | GitHub Pages (build estático via `npm run build`)  |

> **Decisão de estilo:** **Tailwind CSS v3** — tokens de cor e tipografia configurados em `tailwind.config.ts` com as variáveis do design system.

---

## Commands

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (hot reload)
npm run dev

# Build de produção (output em /dist)
npm run build

# Preview do build de produção localmente
npm run preview

# Lint (ESLint + TypeScript)
npm run lint

# Type check sem emitir arquivos
npx tsc --noEmit

# Deploy para GitHub Pages
npm run deploy   # (via gh-pages: "npm run build && gh-pages -d dist")
```

---

## Project Structure

```
programming-classes/
├── tasks/
│   ├── spec.md               → Esta especificação (fonte da verdade)
│   ├── plan.md               → Plano técnico de implementação
│   └── todo.md               → Lista de tarefas granulares
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx              → Entrypoint React
│   ├── App.tsx               → HashRouter + definição de rotas
│   ├── data/
│   │   └── modules.ts        → Conteúdo hardcoded de todos os 9 módulos
│   ├── types/
│   │   └── index.ts          → Tipos TypeScript (Module, Slide, Day, etc.)
│   ├── components/
│   │   ├── Header/
│   │   ├── ModuleCard/
│   │   ├── SlideViewer/
│   │   └── Breadcrumb/
│   ├── pages/
│   │   ├── Dashboard.tsx     → Rota /#/
│   │   ├── ModulePage.tsx    → Rota /#/dia-N/modulo
│   │   └── SlidesPage.tsx    → Rota /#/dia-N/modulo/slides
│   └── styles/
│       └── global.css        → Reset e variáveis CSS base (Tailwind @base)
├── index.html                → HTML shell com CDN de fontes
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Paleta de Cores

| Token         | Valor     | Uso                          |
|---------------|-----------|------------------------------|
| `bg-base`     | `#0f172a` | Fundo principal da página    |
| `bg-card`     | `#1e293b` | Fundo de cards e painéis     |
| `bg-card-alt` | `#334155` | Bordas, separadores, hover   |
| `accent-indigo`| `#4f46e5`| CTAs primários, destaques    |
| `accent-emerald`| `#10b981`| Badges de sucesso, progresso |
| `text-primary`| `#f1f5f9` | Títulos e texto principal    |
| `text-muted`  | `#94a3b8` | Texto secundário             |
| `white`       | `#ffffff` | Texto sobre fundo colorido   |

### Tipografia

- **Títulos:** `'Poppins', sans-serif` — pesos 600 e 700
- **Corpo:** `'Lato', sans-serif` — pesos 400 e 700
- **Código:** `'Courier New', monospace`

### Ícones

Font Awesome 6 Free via CDN. Classes usadas: `fa-solid fa-*`, `fa-brands fa-*`.

### Tamanho dos Slides

Cada slide: **1280px × 720px** fixo, `overflow: hidden`, centralizado com `transform: scale()` responsivo.

---

## Code Style

### Tipos principais (`src/types/index.ts`)

```typescript
export interface Slide {
  id: number;
  layout: 'cover' | 'two-column' | 'cards' | 'table' | 'checklist' | 'animated-demo';
  title: string;
  content: SlideContent;
}

// Para layout 'animated-demo':
// content.animationType: 'loop-counter' | 'if-else-flow' | 'switch-flow'
// Componente React autônomo com animação CSS por tipo

export interface Module {
  id: string;               // ex: 'dia-1/html'
  day: 1 | 2 | 3;
  title: string;
  summary: string;
  tags: string[];
  icon: string;             // nome do ícone react-icons
  topics: string[];
  exercises: Exercise[];
  slides: Slide[];
}

export interface Exercise {
  label: string;
  url?: string;             // se undefined, exercício é embutido
  description?: string;
}
```

### Convenções

- Componentes funcionais com `React.FC<Props>` ou tipagem explícita de retorno
- Props sempre tipadas com `interface`, nunca `type` para objetos de componente
- Tailwind: classes utilitárias diretamente no JSX; sem arquivos `.module.css`
- Dados em `camelCase` nos objetos; constantes de array em `UPPER_SNAKE_CASE`
- IDs de módulo em `kebab-case` (ex: `dia-1/html`, `dia-2/javascript-variaveis`)
- Nenhum `any` — usar `unknown` e type guards quando necessário
- `useNavigate` do React Router para navegação programática

---

## Roteamento (HashRouter — React Router v6)

O `HashRouter` do React Router gerencia todas as rotas. Nenhuma configuração de servidor é necessária, tornando o deploy no GitHub Pages direto.

| Hash URL                        | View renderizada                 |
|---------------------------------|----------------------------------|
| `/#/` ou `/#`                   | Dashboard (3 dias de módulos)    |
| `/#/dia-1/html`                 | Página interna do módulo HTML    |
| `/#/dia-1/html/slides`          | Visualizador de slides — HTML    |
| `/#/dia-1/css`                  | Página interna do módulo CSS     |
| `/#/dia-1/css/slides`           | Visualizador de slides — CSS     |
| `/#/dia-1/terminal`             | Página interna — Terminal CLI    |
| `/#/dia-1/terminal/slides`      | Slides — Terminal CLI            |
| `/#/dia-2/javascript-variaveis` | Página interna — JS Variáveis    |
| `/#/dia-2/javascript-variaveis/slides` | Slides — JS Variáveis     |
| `/#/dia-2/javascript-condicionais` | Página interna — JS Condicionais |
| `/#/dia-2/javascript-condicionais/slides` | Slides — Condicionais  |
| `/#/dia-2/javascript-loops`     | Página interna — JS Loops        |
| `/#/dia-2/javascript-loops/slides` | Slides — Loops                |
| `/#/dia-3/github`               | Página interna — GitHub          |
| `/#/dia-3/github/slides`        | Slides — GitHub                  |
| `/#/dia-3/codespaces-ia`        | Página interna — Codespaces + IA |
| `/#/dia-3/codespaces-ia/slides` | Slides — Codespaces + IA         |
| `/#/dia-3/github-pages`         | Página interna — GitHub Pages    |
| `/#/dia-3/github-pages/slides`  | Slides — GitHub Pages            |
| `/#/*` (inválido)               | Redirect para `/#/`              |

**Link Direto:** `hashchange` + `load` event garantem que qualquer URL abre a view correta.

---

## Dados dos Módulos (Conteúdo Hardcoded)

### DIA 1

#### Módulo: `dia-1/html`
- **Título:** HTML — Fundamentos
- **Tag:** Dia 1
- **Resumo:** Estrutura básica de uma página web com HTML5.
- **Tópicos:**
  - O que é HTML e para que serve
  - Estrutura: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
  - Tags essenciais: `<h1>`–`<h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, `<div>`, `<span>`
  - Hello World: Criar o primeiro `index.html`
- **Exercício:** Criar arquivo `index.html` com estrutura completa e conteúdo pessoal
- **Links externos:** nenhum
- **Slides:** 5 slides (ver estrutura abaixo)

#### Módulo: `dia-1/css`
- **Título:** CSS — Estilo & Layout
- **Tag:** Dia 1
- **Tópicos:**
  - Seletores: tag, `.classe`, `#id`, pseudo-classes
  - Box Model: margin, padding, border
  - Flexbox: `display: flex`, `justify-content`, `align-items`
  - CSS Grid: `display: grid`, `grid-template-columns`, `gap`
  - Cores, fontes e unidades (`px`, `%`, `rem`, `vh`)
- **Exercícios:**
  - **Embutido — TODO List:** Criar uma lista de tarefas estilizada com CSS puro. Steps:
    1. Criar `todo.html` com uma `<ul>` de tarefas
    2. Estilizar a lista: fundo escuro, bordas arredondadas, hover state
    3. Adicionar estilo `.done` com `text-decoration: line-through` e cor apagada
    4. Usar Flexbox para alinhar o ícone de check com o texto
  - **Externo** — CSS Grid Garden: `https://cssgridgarden.com/`
  - **Externo** — Flexbox Froggy: `https://flexboxfroggy.com/`
- **Slides:** 5 slides

#### Módulo: `dia-1/terminal`
- **Título:** Terminal — CLI Básico
- **Tag:** Dia 1
- **Tópicos:**
  - O que é o Terminal/Prompt de Comando
  - `pwd` — mostrar diretório atual
  - `ls` / `dir` — listar arquivos
  - `cd nome-da-pasta` — navegar entre pastas
  - `mkdir nome` — criar pasta
  - `touch arquivo.txt` — criar arquivo (Mac/Linux)
  - `echo "texto" > arquivo.txt` — criar arquivo (Windows)
  - `rm arquivo.txt` — remover arquivo (Mac/Linux)
  - `rmdir nome` — remover pasta vazia
  - `rm -rf nome` — remover pasta com conteúdo (Mac/Linux)
- **Exercício embutido — Missão CLI:** Steps numerados obrigatórios:
  1. Abra o Terminal (Mac: `Cmd + Espaço` → "Terminal"; Windows: `Win + R` → "cmd")
  2. `mkdir meu-projeto` — criar a pasta do projeto
  3. `cd meu-projeto` — entrar na pasta
  4. `touch index.html` (Mac/Linux) ou `echo. > index.html` (Windows) — criar o arquivo
  5. `ls` (Mac/Linux) ou `dir` (Windows) — verificar que o arquivo existe
  6. `rm index.html` (Mac/Linux) ou `del index.html` (Windows) — remover o arquivo
  7. `cd ..` — sair da pasta
  8. `rmdir meu-projeto` — remover a pasta
  9. `ls` — confirmar que a pasta foi removida
- **Slides:** 5 slides

---

### DIA 2

#### Módulo: `dia-2/javascript-variaveis`
- **Título:** JavaScript — Variáveis & Tipos
- **Tag:** Dia 2
- **Tópicos:**
  - O que é JavaScript e onde roda (browser + Node.js)
  - `var` — escopo de função, hoisting, evitar em código moderno
  - `let` — escopo de bloco, reatribuível, uso recomendado
  - `const` — escopo de bloco, não reatribuível, preferência default
  - Tipos primitivos: `String`, `Number`, `Boolean`, `null`, `undefined`
  - Arrays: `[1, 2, 3]`, métodos `push`, `pop`, `length`, `indexOf`
  - Objetos: `{ chave: valor }`, acesso por `.` e `['chave']`
  - `typeof` e conversão implícita vs explícita (`String()`, `Number()`, `Boolean()`)
- **Exercício embutido:**
  1. Declare uma variável `nome` com seu nome usando `const`
  2. Declare uma variável `idade` usando `let` e mude o valor
  3. Crie um array `frutas` com 3 frutas e adicione uma 4ª com `push`
  4. Crie um objeto `aluno` com `nome`, `idade` e `curso`
  5. Use `typeof` para verificar o tipo de cada variável criada
- **Slides:** 7 slides (expandido com exemplos de código)

  | Slide | Layout | Conteúdo |
  |-------|--------|----------|
  | 1 | `cover` | Capa — JavaScript: Variáveis & Tipos |
  | 2 | `two-column` | `var` vs `let` vs `const` com código comentado lado a lado |
  | 3 | `two-column` | Tipos primitivos com exemplos: `typeof "oi"` → `"string"`, etc. |
  | 4 | `two-column` | Arrays — declaração + métodos `push`/`pop`/`length` com output |
  | 5 | `two-column` | Objetos — criação + acesso por `.` e `[]` com exemplos |
  | 6 | `table` | Cheat sheet: tipo → exemplo → `typeof` → uso comum |
  | 7 | `checklist` | Lista de exercícios práticos |

#### Módulo: `dia-2/javascript-condicionais`
- **Título:** JavaScript — Condicionais
- **Tag:** Dia 2
- **Tópicos:**
  - O problema da tomada de decisão no código
  - `if`, `else if`, `else` — estrutura e indentação
  - Operadores de comparação: `===`, `!==`, `>`, `<`, `>=`, `<=`
  - Diferença entre `==` (loose) e `===` (strict equality)
  - Operadores lógicos: `&&` (E), `||` (OU), `!` (NÃO)
  - Operador ternário: `condição ? valorTrue : valorFalse`
  - `switch case` — quando usar no lugar do `if/else if`
- **Exercício embutido:**
  1. Escreva um `if/else` que verifica se um número é positivo, negativo ou zero
  2. Use operadores lógicos: verifique se um número está entre 10 e 20
  3. Converta o exercício 1 para operador ternário
  4. Crie um `switch` para os dias da semana retornando "dia útil" ou "fim de semana"
- **Slides:** 7 slides (inclui animação de fluxograma)

  | Slide | Layout | Conteúdo |
  |-------|--------|----------|
  | 1 | `cover` | Capa — Condicionais: Tomando Decisões |
  | 2 | `two-column` | `if/else if/else` — código com exemplo de nota escolar (A/B/C/F) |
  | 3 | `animated-demo` | **Animação:** fluxograma interativo mostrando o fluxo de decisão (if → true/false → bloco executado) |
  | 4 | `table` | Tabela de operadores: símbolo → significado → exemplo → resultado |
  | 5 | `two-column` | Operador ternário vs `if/else` — comparação lado a lado com código |
  | 6 | `two-column` | `switch case` — código de exemplo com dias da semana |
  | 7 | `checklist` | Lista de exercícios práticos |

#### Módulo: `dia-2/javascript-loops`
- **Título:** JavaScript — Loops
- **Tag:** Dia 2
- **Tópicos:**
  - Por que precisamos de repetição no código
  - `for (let i = 0; i < n; i++)` — anatomia: init / condição / incremento
  - `while (condição)` — quando a quantidade de iterações é desconhecida
  - `do...while` — executa pelo menos uma vez
  - `for...of` — iterar em arrays (valor direto)
  - `for...in` — iterar nas chaves de objetos
  - `Array.forEach(callback)` — iteração funcional sem índice manual
  - `break` e `continue` — controle de fluxo dentro do loop
  - Loops infinitos: como identificar e evitar
- **Exercício embutido:**
  1. Use `for` para imprimir os números de 1 a 10 no console
  2. Use `while` para contar regressivamente de 5 até 1
  3. Use `for...of` para percorrer um array de nomes e exibir cada um
  4. Use `forEach` para calcular a soma de todos os números de um array
  5. Use `for` com `break` para encontrar o primeiro número par maior que 7
- **Slides:** 7 slides (inclui animação de execução do loop)

  | Slide | Layout | Conteúdo |
  |-------|--------|----------|
  | 1 | `cover` | Capa — Loops: Repetição com Controle |
  | 2 | `two-column` | `for` clássico — código com anatomia comentada (init/condição/incremento) |
  | 3 | `animated-demo` | **Animação:** visualização step-by-step de um `for` de 0 a 4 — contador incrementa, array vai sendo preenchido |
  | 4 | `two-column` | `while` e `do...while` — código com exemplos de uso real |
  | 5 | `cards` | 4 cards: `for`, `for...of`, `for...in`, `forEach` — quando usar cada um |
  | 6 | `two-column` | `break` e `continue` — código lado a lado mostrando diferença de comportamento |
  | 7 | `checklist` | Lista de exercícios práticos |

---

### DIA 3

#### Módulo: `dia-3/github`
- **Título:** GitHub — Versionamento
- **Tag:** Dia 3
- **Tópicos:**
  - O que é Git e controle de versão
  - O que é GitHub e por que usar
  - Criar conta no GitHub (passo-a-passo)
  - Comandos básicos: `git init`, `git add`, `git commit`, `git push`
  - Criar um repositório e fazer o primeiro commit
- **Slides:** 5 slides

#### Módulo: `dia-3/codespaces-ia`
- **Título:** GitHub Codespaces + IA
- **Tag:** Dia 3
- **Tópicos:**
  - O que é o GitHub Codespaces (VS Code na nuvem)
  - Abrindo um Codespace a partir de um repositório template
  - GitHub Copilot: autocomplete e geração de código com IA
  - Prompt engineering básico para gerar a página pessoal do aluno
  - Revisão e ajuste do código gerado
- **Exercício:** Link para repositório template (placeholder: `https://github.com/template-curso`)
- **Slides:** 5 slides

#### Módulo: `dia-3/github-pages`
- **Título:** Deploy com GitHub Pages
- **Tag:** Dia 3
- **Tópicos:**
  - O que é hospedagem e DNS
  - GitHub Pages: hospedagem gratuita a partir de repositório público
  - Configuração: Settings → Pages → Source
  - URL do resultado: `https://usuario.github.io/repositorio`
  - Atualizando o site com novo `git push`
- **Slides:** 5 slides

---

## Estrutura dos Slides (por módulo)

**Contagem de slides por módulo:**

| Módulo | Slides | Observação |
|--------|--------|------------|
| `dia-1/html` | 5 | Padrão |
| `dia-1/css` | 5 | Padrão |
| `dia-1/terminal` | 5 | Padrão |
| `dia-2/javascript-variaveis` | 7 | Exemplos de código expandidos |
| `dia-2/javascript-condicionais` | 7 | Inclui slide `animated-demo` (fluxograma) |
| `dia-2/javascript-loops` | 7 | Inclui slide `animated-demo` (counter step-by-step) |
| `dia-3/github` | 5 | Padrão |
| `dia-3/codespaces-ia` | 5 | Padrão |
| `dia-3/github-pages` | 5 | Padrão |

**Layouts disponíveis:**

| Layout | Descrição |
|--------|-----------|
| `cover` | Capa/Título: Nome do módulo, Badge do Dia, subtítulo motivacional |
| `two-column` | Conceito (texto) + código de exemplo com syntax highlight |
| `cards` | 4 cards pareados com ícones e descrição curta |
| `table` | Cheat sheet, comparativo ou tabela de referência |
| `checklist` | Lista de tarefas práticas a realizar |
| `animated-demo` | Animação CSS/React mostrando execução de código em tempo real |

### Layout `animated-demo` — Especificação

O componente `AnimatedDemoSlide` recebe `animationType` e renderiza uma das 2 animações:

#### `animationType: 'if-else-flow'` (usado em: condicionais)
- Diagrama de fluxo animado com caixas e setas
- Destaque progressivo: condição → avaliação → bloco executado
- Pseudo-código ao lado: `if (nota >= 7) { ... } else { ... }`
- Animação em loop com `CSS @keyframes` (delay entre etapas)

#### `animationType: 'loop-counter'` (usado em: loops)
- Visualização de um array sendo preenchido item a item
- Contador `i` visível incrementando a cada iteração
- Cada célula do array acende quando preenchida (verde → fade)
- Exibe `i = 0`, `i = 1`, ..., `i = 4` com animação step (CSS `animation-delay`)

### Navegação dos Slides

- Botões `← Anterior` / `Próximo →`
- Contador: `Slide X de 5`
- Atalhos de teclado: `←` (slide anterior), `→` (slide seguinte), `Esc` (fechar)
- Botão Fullscreen (API nativa `requestFullscreen`)
- Botão `✕ Fechar` → volta para `/#/dia-N/modulo`

---

## Páginas em Detalhe

### Dashboard (`/#/`)

```
┌─────────────────────────────────────────────┐
│  HEADER: Título do Curso + Subtítulo         │
│  "Curso de Programação — 3 dias"             │
├─────────────────────────────────────────────┤
│  BLOCO DIA 1 — Fundamentos Web              │
│  [Card HTML] [Card CSS] [Card Terminal]      │
├─────────────────────────────────────────────┤
│  BLOCO DIA 2 — JavaScript                   │
│  [Card Variáveis] [Card Condicionais] [Card Loops] │
├─────────────────────────────────────────────┤
│  BLOCO DIA 3 — Desenvolvimento com IA       │
│  [Card GitHub] [Card Codespaces+IA] [Card Pages] │
└─────────────────────────────────────────────┘
```

Cada Card contém:
- Ícone Font Awesome
- Título do módulo
- Resumo em 1 linha
- Tags (ex: `HTML` `Fundamentos`)
- Botão primário: `Ver Módulo` → `/#/dia-N/modulo`
- Botão secundário: `Abrir Slides` → `/#/dia-N/modulo/slides`

### Página de Módulo (`/#/dia-N/modulo`)

```
← Voltar aos Módulos
─────────────────────
[Badge Dia N]  TÍTULO DO MÓDULO
─────────────────────
📖 Sobre este módulo
   Resumo conceitual em 2-3 frases.

📌 O que você vai aprender:
   • Tópico 1
   • Tópico 2
   • Tópico 3
   ...

🎯 Ações:
   [🟢 Ver Slides Interativos]  [🔵 Ir para os Exercícios]
```

- `← Voltar` navega para `/#/`
- `Ver Slides` navega para `/#/dia-N/modulo/slides`
- `Ir para Exercícios` abre link externo (se houver) ou rola para seção de exercícios embutida

### Visualizador de Slides (`/#/dia-N/modulo/slides`)

```
┌───────────────────────────────────────────────┐
│  [✕ Fechar]  Módulo: HTML         [⛶ Fullscreen] │
│ ─────────────────────────────────────────────── │
│                                                 │
│          ┌─────────────────────────┐            │
│          │   SLIDE (1280×720px)    │            │
│          │   overflow: hidden      │            │
│          └─────────────────────────┘            │
│                                                 │
│  [← Anterior]   Slide 1 de 5   [Próximo →]     │
└───────────────────────────────────────────────┘
```

---

## Testing Strategy

| Nível        | Ferramenta        | Abordagem                                                         |
|--------------|-------------------|-------------------------------------------------------------------|
| Tipos        | TypeScript (`tsc`)| `npx tsc --noEmit` deve passar sem erros antes de qualquer PR     |
| Lint         | ESLint            | `npm run lint` sem warnings                                       |
| Manual       | Chrome DevTools   | Testar cada rota hash, navegação de slides, keyboard nav          |
| Manual       | Firefox           | Verificar compatibilidade cross-browser                          |
| Manual       | Mobile 375px      | Verificar responsividade no viewport mínimo                      |
| Manual       | Desktop 1280px    | Verificar slides em resolução nativa                             |

**Testes unitários automatizados (Vitest):** fora do escopo desta versão — o conteúdo é hardcoded e a lógica de negócio é mínima. Adicionar se escopo crescer.

---

## Boundaries

### Always do
- Usar `rel="noopener noreferrer"` em todos os links `target="_blank"`
- Nunca usar `dangerouslySetInnerHTML` com dados do usuário ou da URL
- Manter todos os slides com `overflow: hidden` — sem scroll interno nos slides
- Usar `transform: scale()` para escala responsiva dos slides (não `zoom`)
- `npx tsc --noEmit` sem erros antes de commitar

### Ask first
- Adicionar localStorage para persistência de progresso do aluno
- Adicionar módulos novos além dos 9 especificados
- Alterar o conteúdo textual dos slides
- Adicionar animações CSS complexas (podem aumentar o bundle)
- Adicionar suporte a modo claro (light mode)
- Adicionar testes unitários automatizados (Vitest + Testing Library)

### Never do
- Usar `eval()` ou `dangerouslySetInnerHTML` com dados do usuário (XSS)
- Usar `any` no TypeScript sem justificativa documentada
- Fazer chamadas de rede para conteúdo (conteúdo é hardcoded)
- Remover o suporte a link direto via hash
- Commitar `node_modules/` ou arquivos de build `/dist`

---

## Success Criteria

- [ ] **SC-01:** `npm run dev` inicia sem erros e o Dashboard com 9 cards é visível em `http://localhost:5173/#/`
- [ ] **SC-02:** Clicar em "Ver Módulo" muda o hash para `/#/dia-N/modulo` e renderiza a página correta
- [ ] **SC-03:** Clicar em "Abrir Slides" muda o hash para `/#/dia-N/modulo/slides` e exibe o visualizador
- [ ] **SC-04:** Acessar `index.html#/dia-1/html/slides` diretamente abre os slides de HTML (link direto)
- [ ] **SC-05:** A navegação pelos slides com setas `←→` do teclado funciona corretamente
- [ ] **SC-06:** O botão Fullscreen aciona `requestFullscreen` sem erro
- [ ] **SC-07:** Hash inválido (`/#/pagina-que-nao-existe`) redireciona para `/#/` sem erro
- [ ] **SC-08:** Zero erros no console e `npx tsc --noEmit` passa sem erros
- [ ] **SC-09:** Todos os 9 módulos têm sua página interna com conteúdo completo
- [ ] **SC-10:** Todos os 9 módulos têm seus 5 slides renderizados com layouts distintos
- [ ] **SC-11:** Design dark mode com cores corretas (`#0f172a`, `#4f46e5`, `#10b981`) em todas as views
- [ ] **SC-12:** Fontes Poppins e Lato carregadas do Google Fonts e aplicadas corretamente
- [ ] **SC-13:** Ícones react-icons visíveis nos cards e botões
- [ ] **SC-14:** Links externos (CSS Grid Garden, Flexbox Froggy) abrem em nova aba
- [ ] **SC-15:** `npm run build` gera `/dist` sem erros e o build é funcional via `npm run preview`

---

## Decisões Confirmadas

| # | Questão | Decisão |
|---|---------|----------|
| 1 | Estilo | **Tailwind CSS v3** |
| 2 | Progresso visual | **Sim** — `localStorage` com Set de IDs visitados |
| 3 | Syntax highlighting | **`react-syntax-highlighter`** |
| 4 | Template Codespaces | **Pendente** — URL a ser fornecida pelo instrutor |
| 5 | Logo/Branding | **Apenas texto + ícone** (`FaGraduationCap`) |
| 6 | Exercícios HTML/Terminal | **Steps numerados embutidos** na página do módulo |
