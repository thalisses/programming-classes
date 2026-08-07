# Spec: Light Mode + Theme Switch

## Objetivo

Adicionar suporte a **light mode** em toda a aplicação e um **switch de tema** visível em todas as páginas, permitindo ao usuário alternar entre dark e light mode. A preferência deve ser persistida no `localStorage`.

**Usuário-alvo:** Alunos que preferem interface clara em ambientes iluminados.

**Sucesso:** O usuário consegue alternar entre dark e light mode em qualquer página. A preferência é lembrada ao recarregar. Todas as telas (Dashboard, ModulePage, SlidesPage) ficam visualmente coerentes nos dois modos.

---

## Tech Stack

Mesmo stack existente. Acréscimos:
- `darkMode: 'class'` no `tailwind.config.ts`
- CSS variables no `global.css` para os tokens de cor
- `React.createContext` para o estado do tema

---

## Commands

```bash
npm run dev    # verificar visualmente os dois modos
npm run build  # garantir que o build de produção não quebra
npm run lint   # sem novos erros de lint
```

---

## Estrutura de Arquivos Tocados

```
tailwind.config.ts          → darkMode: 'class' + cores via CSS vars
src/styles/global.css       → :root (light) e :root.dark (dark) tokens
src/context/ThemeContext.tsx → ThemeProvider + useTheme hook (NOVO)
src/App.tsx                 → envolve com ThemeProvider + aplica classe no <html>
src/components/Header/Header.tsx     → botão ThemeToggle
src/pages/SlidesPage.tsx    → botão ThemeToggle na barra superior
```

---

## Decisões de Design

- **Estratégia:** CSS variables + `darkMode: 'class'` do Tailwind. Os tokens (`bg-bg-base`, `bg-bg-card`, etc.) continuam os mesmos — apenas seus valores mudam via variável CSS. Sem alterar classes nos componentes existentes.
- **Padrão:** dark mode continua como padrão; light mode é opt-in.
- **Persistência:** `localStorage.getItem('theme')` → `'light'` | `'dark'`.
- **Classe no DOM:** `dark` adicionada/removida em `<html>`.
- **Switch:** ícone de sol (light) / lua (dark) no Header e na barra da SlidesPage.

---

## Paleta Light Mode

| Token | Dark | Light |
|---|---|---|
| `--bg-base` | `#0f172a` | `#f8fafc` |
| `--bg-card` | `#1e293b` | `#ffffff` |
| `--bg-card-alt` | `#334155` | `#e2e8f0` |
| `--text-primary` | `#f1f5f9` | `#0f172a` |
| `--text-muted` | `#94a3b8` | `#64748b` |
| `--accent-indigo` | `#4f46e5` | `#4f46e5` |
| `--accent-emerald` | `#10b981` | `#059669` |

---

## Success Criteria

- [ ] Alternância dark/light funciona em todas as 3 páginas sem reload
- [ ] Preferência persiste no localStorage entre sessões
- [ ] Switch visível e acessível no Header e na SlidesPage
- [ ] Sem regressão visual no dark mode existente
- [ ] `npm run build` e `npm run lint` passam sem erros

## Boundaries

- **Always:** manter os tokens de cor existentes (sem renomear classes)
- **Ask first:** mudanças na paleta de cores além das listadas acima
- **Never:** alterar classes de cor individualmente nos componentes existentes

---

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
// content.animationType:
//   'loop-counter' | 'if-else-flow'          → animações passo a passo (existentes)
//   'html-tag-preview'                        → NOVO: código HTML + render ao vivo lado a lado
//   'flexbox-playground'                      → NOVO: controles interativos de Flexbox
//   'grid-playground'                         → NOVO: controles interativos de CSS Grid
// Componente React autônomo por tipo; os 3 novos são INTERATIVOS (o aluno altera controles
// e vê o resultado renderizado em tempo real dentro do slide).

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
| `/#/dia-1/introducao`           | Página interna — Introdução        |
| `/#/dia-1/introducao/slides`    | Slides — Introdução (Boas-vindas) |
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

#### Módulo: `dia-1/introducao` (NOVO)
- **Título:** Boas-vindas — HTML, CSS & JavaScript
- **Tag:** Dia 1
- **Resumo:** O que é desenvolvimento web e o papel de cada uma das 3 linguagens.
- **Tópicos:**
  - Como a web funciona (browser, servidor, HTML/CSS/JS)
  - A tríade: HTML = estrutura, CSS = estilo, JavaScript = comportamento
  - Analogia: esqueleto (HTML), roupa/aparência (CSS), músculos/ações (JS)
  - Ferramentas do curso: navegador, VS Code, DevTools (F12), Terminal, Git/GitHub
  - Roteiro dos 3 dias: o que será visto em cada dia
- **Exercício embutido (leve):** Abrir o navegador, abrir o DevTools (F12), reconhecer as abas
  Elements/Console; criar a pasta `curso-dev` que será usada no curso.
- **Slides:** 7 slides

  | Slide | Layout | Conteúdo |
  |-------|--------|----------|
  | 1 | `cover` | Capa — Boas-vindas ao curso |
  | 2 | `two-column` | Como a web funciona (texto + diagrama/código simples) |
  | 3 | `cards` | A tríade: HTML, CSS, JS — o papel de cada um |
  | 4 | `two-column` | Mesma página evoluindo: só HTML → + CSS → + JS |
  | 5 | `table` | Roteiro dos 3 dias (Dia → temas) |
  | 6 | `cards` | Ferramentas: navegador, VS Code, DevTools, Terminal |
  | 7 | `checklist` | Como aproveitar o curso + primeiro passo prático |

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

**Contagem de slides por módulo (alvo após enriquecimento — cada módulo ≈ 1h):**

| Módulo | Slides | Observação |
|--------|--------|------------|
| `dia-1/introducao` | 7 | **NOVO** — Boas-vindas rápida (~15min): visão geral de HTML/CSS/JS + roteiro dos 3 dias |
| `dia-1/html` | 10 | Expandido: formatação de texto, mídia, semântica, tabelas/forms + demo `html-tag-preview` |
| `dia-1/css` | 11 | Expandido: cores, fontes, box model + demos `flexbox-playground` e `grid-playground` |
| `dia-1/terminal` | 5 | Mais curto (não precisa de 1h) |
| `dia-2/javascript-variaveis` | 9 | + interações (`alert`/`prompt`/`confirm`) e template literals |
| `dia-2/javascript-condicionais` | 8 | Inclui `animated-demo` (fluxograma `if-else-flow`) |
| `dia-2/javascript-loops` | 8 | Inclui `animated-demo` (`loop-counter` step-by-step) |
| `dia-3/github` | 6 | Atualizado: branch `main`, `git switch`, fluxo atual |
| `dia-3/codespaces-ia` | 6 | Atualizado: nomenclatura atual do Copilot/Codespaces |
| `dia-3/github-pages` | 6 | Polido |

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

#### `animationType: 'html-tag-preview'` (NOVO — usado em: HTML)
- Seletor de tags comuns (títulos, parágrafo, listas, link, imagem, tabela, form, semânticas)
- Ao selecionar uma tag: painel esquerdo mostra o **código HTML** (syntax highlight),
  painel direito mostra o **render ao vivo** daquele HTML
- Interativo: o aluno clica/troca a tag e vê a diferença imediatamente

#### `animationType: 'flexbox-playground'` (NOVO — usado em: CSS)
- Container flex com 3–5 caixas coloridas renderizadas ao vivo
- Controles (botões/selects) para: `flex-direction`, `justify-content`,
  `align-items`, `flex-wrap`, `gap`
- O CSS aplicado é exibido em tempo real (ex: `justify-content: center;`)
- Interativo: mudar um controle reposiciona as caixas instantaneamente

#### `animationType: 'grid-playground'` (NOVO — usado em: CSS)
- Container grid com N itens renderizados ao vivo
- Controles para: número de colunas (`grid-template-columns: repeat(N, 1fr)`),
  `gap`, `justify-items`/`align-items`
- O CSS aplicado (`grid-template-columns`, `gap`) é exibido em tempo real
- Interativo: alterar colunas/gap re-desenha a grade instantaneamente

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
│  [Card Introdução] [Card HTML] [Card CSS] [Card Terminal] │
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

## Escopo — Iteração 2 (Enriquecimento de Conteúdo)

**Objetivo desta iteração:** aprofundar o conteúdo pedagógico de cada módulo (cada módulo ≈ 1h,
alunos com computador em mãos), adicionar exemplos visuais e exercícios práticos em aula, e
corrigir conteúdo desatualizado — usando os PDFs em `html-css-aulas/aulas-pdf/` e
`javascript-aulas/aulas-pdf/` como material de apoio.

### Entregas

1. **Novo módulo `dia-1/introducao`** — módulo de boas-vindas explicando o que são HTML, CSS e
   JavaScript e o roteiro dos 3 dias (7 slides). Dia 1 passa a ter 4 módulos.
2. **3 novos tipos interativos de `animated-demo`:**
   - `html-tag-preview` — código HTML + render ao vivo (no módulo HTML)
   - `flexbox-playground` — controles interativos de Flexbox (no módulo CSS)
   - `grid-playground` — controles interativos de CSS Grid (no módulo CSS)
3. **Slides expandidos** em todos os módulos conforme a tabela "Contagem de slides".
4. **Exercícios de aula** ampliados para HTML, CSS e JavaScript (steps numerados embutidos).
5. **Correção de conteúdo desatualizado:**
   - HTML: `<meta viewport>`, tags semânticas HTML5, `loading="lazy"`, `<picture>`/`<audio>`/`<video>`
   - CSS: `gap` em Flexbox, `rem`/`clamp()`, `:focus-visible`, fontes via Google Fonts
   - JavaScript: `const`/`let` como padrão (`var` como legado), template literals, arrow functions
   - Git/GitHub: branch padrão `main` (não `master`), `git switch`/`git restore`, fluxo atual
   - Codespaces/Copilot: nomenclatura atual (GitHub Copilot, Codespaces)

### Novos Success Criteria

- [ ] **SC-16:** Dashboard exibe 10 módulos; Dia 1 mostra 4 cards (Introdução, HTML, CSS, Terminal)
- [ ] **SC-17:** Módulo `dia-1/introducao` acessível e com 7 slides renderizados
- [ ] **SC-18:** Demo `html-tag-preview` renderiza HTML ao vivo e troca de tag ao interagir
- [ ] **SC-19:** Demo `flexbox-playground` reposiciona as caixas ao alterar os controles
- [ ] **SC-20:** Demo `grid-playground` re-desenha a grade ao alterar colunas/gap
- [ ] **SC-21:** Nenhum slide tem overflow/scroll interno em 1280×720 (demos interativas incluídas)
- [ ] **SC-22:** `npx tsc --noEmit` e `npm run lint` passam sem erros após as mudanças
- [ ] **SC-23:** Conteúdo desatualizado listado acima foi revisado e corrigido

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
| 7 | Duração | **Cada módulo ≈ 1h** (curso mais longo, não 1h/dia total) |
| 8 | Módulo introdutório | **Novo módulo separado** `dia-1/introducao` no início do Dia 1 |
| 9 | Demos visuais | **Interativas com controles** (aluno altera e vê resultado ao vivo) |
| 10 | Fonte de conteúdo | **Hardcoded** em `modules.ts`, enriquecido pelos PDFs das pastas de aulas |
