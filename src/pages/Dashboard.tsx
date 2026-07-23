import Header from '../components/Header/Header'
import ModuleCard from '../components/ModuleCard/ModuleCard'
import { MODULES } from '../data/modules'
import { useProgress } from '../hooks/useProgress'

const DAYS = [
  { day: 1 as const, label: 'DIA 1', subtitle: 'Fundamentos Web' },
  { day: 2 as const, label: 'DIA 2', subtitle: 'JavaScript' },
  { day: 3 as const, label: 'DIA 3', subtitle: 'Desenvolvimento com IA' },
]

const DAY_ACCENT: Record<number, string> = {
  1: 'border-orange-500/40 text-orange-400',
  2: 'border-yellow-500/40 text-yellow-400',
  3: 'border-accent-emerald/40 text-accent-emerald',
}

export default function Dashboard() {
  const { isCompleted, completedCount } = useProgress()

  return (
    <div className="min-h-screen bg-bg-base">
      <Header completedCount={completedCount} totalModules={MODULES.length} />

      <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-12">
        {DAYS.map(({ day, label, subtitle }) => {
          const dayModules = MODULES.filter((m) => m.day === day)
          return (
            <section key={day}>
              <div className={`inline-flex items-center gap-3 border-l-4 pl-4 mb-6 ${DAY_ACCENT[day]}`}>
                <h2 className="font-heading font-bold text-text-primary text-2xl">{label}</h2>
                <span className="text-text-muted text-lg">— {subtitle}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {dayModules.map((mod) => (
                  <ModuleCard key={mod.id} module={mod} isCompleted={isCompleted(mod.id)} />
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
