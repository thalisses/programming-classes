# Plano Técnico — Plataforma Educacional (React + TypeScript)

> Gerado após aprovação do spec em `tasks/spec.md`.

---

## Visão Geral

A implementação é dividida em **6 fases sequenciais**. Cada fase entrega algo funcional e verificável antes de avançar.

```
FASE 1: Setup & Infraestrutura
  └── Projeto Vite + React + TypeScript + Tailwind configurado e rodando

FASE 2: Tipos & Dados
  └── Todos os 9 módulos com conteúdo e slides hardcoded e tipados

FASE 3: Componentes Base
  └── Header, ModuleCard, Breadcrumb e SlideViewer isolados e estilizados

FASE 4: Páginas & Roteamento
  └── Dashboard, ModulePage e SlidesPage conectados ao HashRouter

FASE 5: Features Complementares
  └── Fullscreen, navegação por teclado, progresso com localStorage

FASE 6: Build & Deploy
  └── Build de produção limpo, deploy no GitHub Pages configurado
```

---

## Fase 1 — Setup & Infraestrutura

**Objetivo:** Ter o projeto rodando com todas as dependências configuradas.

**O que será criado:**
- `package.json` com scripts `dev`, `build`, `preview`, `lint`, `deploy`
- `vite.config.ts` com `base` configurado para GitHub Pages
- `tsconfig.json` com `strict: true`
- `tailwind.config.ts` com tokens do design system (cores, fontes)
- `index.html` com Google Fonts (Poppins + Lato)
- `src/main.tsx` e `src/App.tsx` com `HashRouter` e rotas esqueleto
- `src/styles/global.css` com `@tailwind` directives

**Dependências a instalar:**
```
react react-dom react-router-dom
react-icons react-syntax-highlighter
tailwindcss @tailwindcss/typography autoprefixer postcss
typescript @types/react @types/react-dom @types/react-syntax-highlighter
vite @vitejs/plugin-react
eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
gh-pages
```

**Verificação:** `npm run dev` → tela em branco sem erros no console.

---

## Fase 2 — Tipos & Dados

**Objetivo:** Definir o modelo de dados TypeScript e popular todos os 9 módulos.

**O que será criado:**
- `src/types/index.ts` — interfaces `Module`, `Slide`, `SlideContent`, `Exercise`, `Day`
- `src/data/modules.ts` — array `MODULES` com os 9 módulos completos

**Estrutura de `SlideContent` por layout:**

| Layout | Campos |
|---|---|
| `cover` | `title`, `subtitle`, `badge` |
| `two-column` | `heading`, `text`, `code` (opcional), `codeLanguage` |
| `cards` | `heading`, `items: [{icon, title, description}]` |
| `table` | `heading`, `headers`, `rows` |
| `checklist` | `heading`, `items: string[]` |

**Conteúdo de slides por módulo:**
- Módulos Dia 1 e Dia 3: **5 slides** cada
- Módulos JS (Dia 2): **7 slides** cada (exemplos expandidos + animated-demo)
2. `dia-1/css`
3. `dia-1/terminal`
4. `dia-2/javascript-variaveis`
5. `dia-2/javascript-condicionais`
6. `dia-2/javascript-loops`
7. `dia-3/github`
8. `dia-3/codespaces-ia`
9. `dia-3/github-pages`

**Verificação:** `npx tsc --noEmit` sem erros.

---

## Fase 3 — Componentes Base

**Objetivo:** Construir os componentes reutilizáveis isoladamente.

### Ordem de implementação (sem dependências cruzadas entre si):

#### 3a. `Header`
- Props: `title`, `subtitle`
- Ícone `FaGraduationCap` + texto do curso
- Barra fixa no topo com `bg-slate-900 border-b border-slate-700`

#### 3b. `ModuleCard`
- Props: `module: Module`, `isCompleted: boolean`
- Ícone + título + resumo + tags
- Badge verde se `isCompleted`
- Botões: "Ver Módulo" (Link) e "Abrir Slides" (Link)

#### 3c. `Breadcrumb`
- Props: `items: {label, href}[]`
- Link `← Voltar aos Módulos` para `/#/`

#### 3d. `SlideRenderer`
- Props: `slide: Slide`
- Switch por `slide.layout` → renderiza o layout correto
- Usa `react-syntax-highlighter` para blocos de código no layout `two-column`
- Dimensão fixa 1280×720px com `transform: scale()` via hook `useSlideScale`

#### 3d². `AnimatedDemoSlide`
- Componente dedicado para `layout: 'animated-demo'`
- **`if-else-flow`:** Fluxograma animado com CSS `@keyframes` — caixas e setas destacando a condição → verdadeiro/falso → bloco executado, em loop
- **`loop-counter`:** Array visual com células que acendem progressivamente, contador `i` incrementando via `animation-delay` escalonado

#### 3e. Hook `useSlideScale`
- Calcula o fator de escala com base no `window.innerWidth`
- Escuta `resize` com `useEffect` + cleanup

#### 3f. Hook `useProgress`
- Lê/escreve no `localStorage` o `Set<string>` de IDs visitados
- Expõe `isCompleted(id)` e `markCompleted(id)`

**Verificação:** Cada componente renderiza isoladamente sem erros de TypeScript.

---

## Fase 4 — Páginas & Roteamento

**Objetivo:** Conectar tudo em 3 páginas com roteamento funcional.

### 4a. `App.tsx` — Roteamento completo

```
<HashRouter>
  <Routes>
    <Route path="/"                          → <Dashboard />
    <Route path="/dia-:day/:moduleSlug"       → <ModulePage />
    <Route path="/dia-:day/:moduleSlug/slides"→ <SlidesPage />
    <Route path="*"                          → <Navigate to="/" />
  </Routes>
</HashRouter>
```

### 4b. `Dashboard.tsx`
- Usa `useProgress` para passar `isCompleted` para cada `ModuleCard`
- Agrupa módulos por dia com título da seção (DIA 1, DIA 2, DIA 3)
- Grid de cards: `grid grid-cols-1 md:grid-cols-3 gap-6`

### 4c. `ModulePage.tsx`
- Extrai `day` + `moduleSlug` via `useParams`
- Busca módulo em `MODULES` por ID → 404 redirect se não encontrar
- Chama `markCompleted(module.id)` no `useEffect`
- Renderiza: Breadcrumb → Header do módulo → Tópicos → Seção de exercícios

### 4d. `SlidesPage.tsx`
- Estado: `currentSlide` (número, 0-indexed)
- Renderiza `SlideRenderer` com o slide atual
- Barra de controle: fechar, fullscreen, anterior/próximo, contador

**Verificação:** Todas as 19 rotas do spec navegam para a view correta.

---

## Fase 5 — Features Complementares

**Objetivo:** Implementar features de UX definidas no spec.

#### 5a. Navegação por teclado nos slides
- `useEffect` com `keydown` listener em `SlidesPage`
- `ArrowRight` → próximo, `ArrowLeft` → anterior, `Escape` → fechar

#### 5b. Fullscreen
- Botão chama `document.documentElement.requestFullscreen()`
- Ícone alterna entre `FaExpand` / `FaCompress` com `document.fullscreenElement`

#### 5c. Progresso no Dashboard
- Badge "✓ Concluído" em verde nos cards visitados
- Barra de progresso no Header: `X de 9 módulos concluídos`

**Verificação:** SC-05, SC-06 e SC-02 do spec satisfeitos.

---

## Fase 6 — Build & Deploy

**Objetivo:** Garantir build limpo e configuração de deploy.

- `vite.config.ts`: `base: '/nome-do-repo/'` para GitHub Pages
- `package.json`: script `deploy: "npm run build && gh-pages -d dist"`
- Verificar `npm run build` sem warnings de TypeScript
- Verificar `npm run preview` com todas as rotas funcionando

**Verificação:** SC-15 satisfeito.

---

## Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| Slides com `transform: scale()` quebrando em fullscreen | Testar `useSlideScale` no evento `fullscreenchange` |
| `react-syntax-highlighter` aumentando bundle demais | Usar import lazy: `import { Light as SyntaxHighlighter }` |
| HashRouter com `base` no Vite — conflito de paths | Usar `HashRouter` (não `BrowserRouter`); nenhum `base` de path afeta hashes |
| Conteúdo de 9 módulos × 5 slides = arquivo `modules.ts` grande | Aceito — é proposital e hardcoded; sem lazy loading necessário |

---

## Ordem de Commits Sugerida

```
feat: setup vite + react + typescript + tailwind
feat: add types and module data (9 modules)
feat: implement Header, ModuleCard, Breadcrumb components
feat: implement SlideRenderer with all 5 layouts
feat: add useSlideScale and useProgress hooks
feat: implement Dashboard page with day groupings
feat: implement ModulePage with topics and exercises
feat: implement SlidesPage with navigation controls
feat: add keyboard navigation and fullscreen support
feat: add progress tracking with localStorage
feat: configure vite base for github pages deploy
```
