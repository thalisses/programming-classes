# Tasks — Plataforma Educacional (React + TypeScript)

> Ordenadas por dependência. Não pule tarefas — cada uma tem verificação.

---

## FASE 1 — Setup & Infraestrutura

- [ ] **T-01** — Scaffolding do projeto com Vite
  - Acceptance: `npm create vite@latest` com template `react-ts` dentro de `programming-classes/`
  - Verify: `npm run dev` abre `localhost:5173` sem erros
  - Files: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`

- [ ] **T-02** — Instalar e configurar Tailwind CSS v3
  - Acceptance: Classes Tailwind funcionam nos componentes; `bg-slate-900` aplica cor correta
  - Verify: Elemento com `className="bg-slate-900 text-white p-4"` renderiza com fundo escuro
  - Files: `tailwind.config.ts`, `postcss.config.js`, `src/styles/global.css`

- [ ] **T-03** — Configurar tokens do design system no Tailwind
  - Acceptance: Cores customizadas disponíveis como classes (`bg-indigo-600`, `text-emerald-400` já existem; adicionar `bg-slate-950` para `#0f172a`)
  - Verify: `npx tsc --noEmit` sem erros após configuração
  - Files: `tailwind.config.ts`

- [ ] **T-04** — Configurar Google Fonts e ícones no `index.html`
  - Acceptance: Poppins e Lato carregadas via `<link>` no `<head>`; `react-icons` instalado
  - Verify: `document.fonts` no console mostra as duas fontes carregadas
  - Files: `index.html`, `package.json`

- [ ] **T-05** — Instalar dependências restantes
  - Acceptance: `react-router-dom`, `react-syntax-highlighter`, `@types/react-syntax-highlighter`, `gh-pages` instalados
  - Verify: `npm install` sem erros; `package.json` lista todas as deps
  - Files: `package.json`

- [ ] **T-06** — Configurar ESLint com TypeScript
  - Acceptance: `npm run lint` retorna sem erros no projeto vazio
  - Verify: Arquivo com `const x: any = 1` gera warning de lint
  - Files: `.eslintrc.cjs` ou `eslint.config.js`

- [ ] **T-07** — Configurar `HashRouter` e rotas esqueleto em `App.tsx`
  - Acceptance: Rotas `"/"`, `"/dia-:day/:moduleSlug"`, `"/dia-:day/:moduleSlug/slides"` e `"*"` definidas com placeholders
  - Verify: Navegar para `/#/dia-1/html` não dá erro 404 (mostra placeholder)
  - Files: `src/App.tsx`

- [ ] **T-08** — Configurar `vite.config.ts` para GitHub Pages
  - Acceptance: `base` definido como `'./'` (relativo, funciona tanto local quanto em subpath do GH Pages)
  - Verify: `npm run build` gera `/dist` com `index.html` com paths relativos
  - Files: `vite.config.ts`

- [ ] **T-09** — Adicionar script `deploy` no `package.json`
  - Acceptance: `"deploy": "npm run build && gh-pages -d dist"` presente
  - Verify: `npm run build` funciona sem erros TypeScript
  - Files: `package.json`

---

## FASE 2 — Tipos & Dados

- [ ] **T-10** — Definir interfaces TypeScript
  - Acceptance: `Module`, `Slide`, `SlideContent`, `Exercise`, `Day` exportados sem `any`
  - Verify: `npx tsc --noEmit` passa; tipos importáveis em qualquer arquivo
  - Files: `src/types/index.ts`

- [ ] **T-11** — Criar dados do módulo `dia-1/html` (modelo base)
  - Acceptance: Objeto com `id`, `day`, `title`, `summary`, `tags`, `icon`, `topics`, `exercises`, `slides` (5 slides com layouts distintos)
  - Verify: TypeScript valida o objeto contra a interface `Module` sem erros
  - Files: `src/data/modules.ts`

- [ ] **T-12** — Criar dados dos módulos `dia-1/css` e `dia-1/terminal`
  - Acceptance: Ambos com 5 slides e exercícios preenchidos; `dia-1/css` com links para Grid Garden e Flexbox Froggy
  - Verify: `MODULES.length === 3` após adição
  - Files: `src/data/modules.ts`

- [ ] **T-13** — Criar dados dos módulos `dia-2/*` (3 módulos JS)
  - Acceptance: `javascript-variaveis` (7 slides), `javascript-condicionais` (7 slides com `animated-demo` tipo `if-else-flow`), `javascript-loops` (7 slides com `animated-demo` tipo `loop-counter`); exercícios embutidos em todos
  - Verify: `MODULES.length === 6` após adição; TypeScript valida `animationType` correto
  - Files: `src/data/modules.ts`

- [ ] **T-14** — Criar dados dos módulos `dia-3/*` (3 módulos)
  - Acceptance: `github`, `codespaces-ia` (com placeholder de URL), `github-pages` com conteúdo completo
  - Verify: `MODULES.length === 9`; `npx tsc --noEmit` sem erros
  - Files: `src/data/modules.ts`

- [ ] **T-15** — Criar função helper `getModuleById`
  - Acceptance: `getModuleById('dia-1/html')` retorna o módulo correto; `getModuleById('invalido')` retorna `undefined`
  - Verify: TypeScript infere tipo de retorno como `Module | undefined`
  - Files: `src/data/modules.ts`

---

## FASE 3 — Componentes Base

- [ ] **T-16** — Componente `Header`
  - Acceptance: Renderiza título do curso, ícone `FaGraduationCap`, barra de progresso com "X de 9 módulos"
  - Verify: Exibe "0 de 9 módulos" quando localStorage vazio
  - Files: `src/components/Header/Header.tsx`

- [ ] **T-17** — Componente `ModuleCard`
  - Acceptance: Ícone, título, resumo, tags, badge "✓ Concluído" (se `isCompleted`), botões "Ver Módulo" e "Abrir Slides"
  - Verify: Badge verde aparece quando `isCompleted=true`; links apontam para rotas corretas
  - Files: `src/components/ModuleCard/ModuleCard.tsx`

- [ ] **T-18** — Componente `Breadcrumb`
  - Acceptance: Renderiza `← Voltar aos Módulos` com link para `/#/`
  - Verify: Clicar navega para o Dashboard
  - Files: `src/components/Breadcrumb/Breadcrumb.tsx`

- [ ] **T-19** — Hook `useProgress`
  - Acceptance: `markCompleted(id)` salva no localStorage; `isCompleted(id)` lê corretamente; `completedCount` retorna número correto
  - Verify: Após `markCompleted('dia-1/html')`, `isCompleted('dia-1/html')` retorna `true` sem recarregar
  - Files: `src/hooks/useProgress.ts`

- [ ] **T-20** — Hook `useSlideScale`
  - Acceptance: Retorna fator de escala baseado em `window.innerWidth / 1280`; atualiza no `resize`
  - Verify: Em viewport 640px, retorna `0.5`; cleanup do listener funciona
  - Files: `src/hooks/useSlideScale.ts`

- [ ] **T-21** — Layouts de slide: `CoverSlide`
  - Acceptance: Badge do dia, título grande (Poppins 700), subtítulo
  - Verify: Renderiza sem overflow em 1280×720px
  - Files: `src/components/SlideViewer/layouts/CoverSlide.tsx`

- [ ] **T-21b** — Componente `AnimatedDemoSlide` — `if-else-flow`
  - Acceptance: Fluxograma com caixas (condição, true, false), setas e destaque progressivo via CSS `@keyframes`; loop infinito com delay entre etapas
  - Verify: Animação roda sem travar; sem overflow dentro do slide 1280×720px
  - Files: `src/components/SlideViewer/layouts/AnimatedDemoSlide.tsx`

- [ ] **T-21c** — Componente `AnimatedDemoSlide` — `loop-counter`
  - Acceptance: Array de 5 células que acendem sequencialmente; contador `i` atualiza a cada passo via `animation-delay` escalonado
  - Verify: Cada célula acende na ordem correta; contador visível e sincronizado
  - Files: `src/components/SlideViewer/layouts/AnimatedDemoSlide.tsx`

- [ ] **T-22** — Layouts de slide: `TwoColumnSlide`
  - Acceptance: Coluna de texto + coluna de código com `react-syntax-highlighter` (tema `atomOneDark`)
  - Verify: Código com syntax highlighting visível; sem scroll interno
  - Files: `src/components/SlideViewer/layouts/TwoColumnSlide.tsx`

- [ ] **T-23** — Layouts de slide: `CardsSlide`
  - Acceptance: Grid 2×2 com 4 cards, cada um com ícone react-icons, título e descrição
  - Verify: 4 cards visíveis sem overflow
  - Files: `src/components/SlideViewer/layouts/CardsSlide.tsx`

- [ ] **T-24** — Layouts de slide: `TableSlide`
  - Acceptance: Tabela com cabeçalhos e linhas renderizadas dinamicamente
  - Verify: Tabela estilizada com `bg-slate-800` nas linhas alternadas
  - Files: `src/components/SlideViewer/layouts/TableSlide.tsx`

- [ ] **T-25** — Layouts de slide: `ChecklistSlide`
  - Acceptance: Lista com checkboxes visuais (ícone `FaCheckCircle` em verde), cada item em linha
  - Verify: Todos os itens visíveis sem overflow em 1280×720px
  - Files: `src/components/SlideViewer/layouts/ChecklistSlide.tsx`

- [ ] **T-26** — Componente `SlideRenderer`
  - Acceptance: Switch por `slide.layout` inclui `animated-demo` → renderiza `AnimatedDemoSlide` com `animationType` correto; todos os 6 layouts funcionam
  - Verify: Slides de condicionais e loops mostram animação; sem erro de TypeScript
  - Files: `src/components/SlideViewer/SlideRenderer.tsx`

---

## FASE 4 — Páginas & Roteamento

- [ ] **T-27** — Página `Dashboard`
  - Acceptance: 3 blocos (DIA 1, DIA 2, DIA 3) com grid de `ModuleCard`; `useProgress` passado para cada card
  - Verify: 9 cards visíveis em `/#/`; progresso reflete localStorage
  - Files: `src/pages/Dashboard.tsx`

- [ ] **T-28** — Página `ModulePage`
  - Acceptance: `useParams` extrai `day` + `moduleSlug`; `getModuleById` encontra o módulo; `markCompleted` chamado no mount; redireciona para `/#/` se módulo não encontrado
  - Verify: `/#/dia-1/html` renderiza conteúdo correto; `/#/dia-9/inexistente` redireciona para `/#/`
  - Files: `src/pages/ModulePage.tsx`

- [ ] **T-29** — Seção de exercícios em `ModulePage`
  - Acceptance:
    - Exercícios com URL abrem em nova aba com `rel="noopener noreferrer"`
    - Exercícios embutidos renderizam steps numerados com ícones de passo
    - Módulo CSS: renderiza card destacado com os 4 steps do exercício TODO List
    - Módulo Terminal: renderiza "Missão CLI" com 9 steps numerados, comandos em destaque `<code>` com variante Mac/Linux vs Windows
  - Verify: Links do CSS Grid Garden e Flexbox Froggy abrem em nova aba (SC-14)
  - Files: `src/pages/ModulePage.tsx`

- [ ] **T-30** — Página `SlidesPage` — estrutura base
  - Acceptance: `currentSlide` state (0-indexed); renderiza `SlideRenderer`; botões anterior/próximo funcionais; contador "Slide X de 5"
  - Verify: Navegar entre slides atualiza contador corretamente
  - Files: `src/pages/SlidesPage.tsx`

- [ ] **T-31** — `SlidesPage` — botão fechar
  - Acceptance: Botão `✕` navega de volta para `/#/dia-N/modulo` via `useNavigate`
  - Verify: Fechar slides preserva histórico (botão Voltar do browser funciona)
  - Files: `src/pages/SlidesPage.tsx`

- [ ] **T-32** — Verificar todas as 19 rotas do spec
  - Acceptance: Cada URL da tabela de roteamento no spec renderiza a view correta
  - Verify: Testar manualmente as 19 rotas no Chrome; zero erros no console
  - Files: `src/App.tsx` (ajustes se necessário)

---

## FASE 5 — Features Complementares

- [ ] **T-33** — Navegação por teclado nos slides
  - Acceptance: `ArrowRight` → próximo slide; `ArrowLeft` → anterior; `Escape` → fechar (navega para módulo)
  - Verify: Funciona em Chrome e Firefox; listener removido no cleanup do `useEffect`
  - Files: `src/pages/SlidesPage.tsx`

- [ ] **T-34** — Botão Fullscreen
  - Acceptance: Chama `requestFullscreen()`; ícone alterna entre `FaExpand`/`FaCompress`; `useSlideScale` recalcula na mudança de fullscreen
  - Verify: Slides preenchem a tela em fullscreen sem overflow
  - Files: `src/pages/SlidesPage.tsx`

- [ ] **T-35** — Barra de progresso no Header
  - Acceptance: Exibe "X de 9 módulos concluídos" com barra visual proporcional
  - Verify: Após visitar um módulo, contador atualiza sem recarregar a página
  - Files: `src/components/Header/Header.tsx`

---

## FASE 6 — Build & Deploy

- [ ] **T-36** — Validação final de TypeScript
  - Acceptance: `npx tsc --noEmit` passa sem nenhum erro ou warning
  - Verify: Saída do comando é vazia (exit code 0)
  - Files: todos os arquivos `.tsx` e `.ts`

- [ ] **T-37** — Build de produção
  - Acceptance: `npm run build` completa sem erros; `/dist` gerado com `index.html` e assets
  - Verify: `npm run preview` → aplicação funcional em `localhost:4173`
  - Files: `vite.config.ts` (ajustes se necessário)

- [ ] **T-38** — Atualizar URL do repositório Codespaces
  - Acceptance: Substituir placeholder `https://github.com/template-curso` pela URL real
  - Verify: Link no módulo `dia-3/codespaces-ia` abre o repositório correto em nova aba
  - Files: `src/data/modules.ts`

---

## Resumo

| Fase | Tasks | Entrega |
|------|-------|---------|
| 1 — Setup | T-01 a T-09 | Projeto rodando com Tailwind + Router |
| 2 — Dados | T-10 a T-15 | 9 módulos tipados e populados |
| 3 — Componentes | T-16 a T-26c | Todos os componentes + animações |
| 4 — Páginas | T-27 a T-32 | App completo com roteamento |
| 5 — Features | T-33 a T-35 | Teclado, fullscreen, progresso |
| 6 — Deploy | T-36 a T-38 | Build limpo e URL corrigida |
| **Total** | **38 tasks** | |
