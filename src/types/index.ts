// ─── Slide content types (discriminated by layout) ──────────────────────────

export interface CoverContent {
  badge: string
  subtitle: string
}

export interface TwoColumnContent {
  heading: string
  text: string[]
  code?: string
  codeLanguage?: string
  image?: { src: string; alt: string }
}

export interface CardsContent {
  heading: string
  items: { icon: string; title: string; description: string }[]
}

export interface TableContent {
  heading: string
  headers: string[]
  rows: string[][]
}

export interface ChecklistContent {
  heading: string
  items: string[]
}

export interface AnimatedDemoContent {
  heading: string
  animationType:
    | 'if-else-flow'
    | 'loop-counter'
    | 'html-tag-preview'
    | 'flexbox-playground'
    | 'grid-playground'
  description: string
}

// ─── Slide discriminated union ───────────────────────────────────────────────

export type Slide =
  | { id: number; layout: 'cover'; title: string; content: CoverContent }
  | { id: number; layout: 'two-column'; title: string; content: TwoColumnContent }
  | { id: number; layout: 'cards'; title: string; content: CardsContent }
  | { id: number; layout: 'table'; title: string; content: TableContent }
  | { id: number; layout: 'checklist'; title: string; content: ChecklistContent }
  | { id: number; layout: 'animated-demo'; title: string; content: AnimatedDemoContent }

// ─── Exercise ────────────────────────────────────────────────────────────────

export interface Exercise {
  label: string
  url?: string
  description?: string
  steps?: string[]
}

// ─── Module ──────────────────────────────────────────────────────────────────

export interface Module {
  id: string
  day: 1 | 2 | 3
  title: string
  summary: string
  tags: string[]
  icon: string
  topics: string[]
  exercises: Exercise[]
  slides: Slide[]
}

// ─── Day group ───────────────────────────────────────────────────────────────

export interface DayGroup {
  day: 1 | 2 | 3
  label: string
  subtitle: string
  modules: Module[]
}
