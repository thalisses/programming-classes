import { FaGraduationCap } from 'react-icons/fa6'

interface HeaderProps {
  completedCount: number
  totalModules: number
}

export default function Header({ completedCount, totalModules }: HeaderProps) {
  const pct = Math.round((completedCount / totalModules) * 100)

  return (
    <header className="bg-bg-card border-b border-bg-card-alt sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-indigo rounded-xl flex items-center justify-center shrink-0">
            <FaGraduationCap className="text-white text-lg" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-text-primary text-lg leading-tight">
              Curso de Programação
            </h1>
            <p className="text-text-muted text-sm">3 dias · do zero ao deploy</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 min-w-[160px]">
          <span className="text-text-muted text-xs">
            {completedCount} de {totalModules} módulos concluídos
          </span>
          <div className="w-full h-2 bg-bg-card-alt rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-emerald rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
