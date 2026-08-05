import { Link } from 'react-router-dom'
import {
  FaHtml5, FaCss3Alt, FaTerminal, FaJs, FaGithub, FaGlobe, FaRobot,
  FaCodeBranch, FaArrowsRotate, FaCheck, FaPlay, FaCircleCheck, FaGraduationCap,
} from 'react-icons/fa6'
import type { Module } from '../../types'

const ICON_MAP: Record<string, React.ReactNode> = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaTerminal: <FaTerminal />,
  FaJs: <FaJs />,
  FaGithub: <FaGithub />,
  FaGlobe: <FaGlobe />,
  FaRobot: <FaRobot />,
  FaCodeBranch: <FaCodeBranch />,
  FaArrowsRotate: <FaArrowsRotate />,
  FaGraduationCap: <FaGraduationCap />,
}

const DAY_COLORS: Record<number, string> = {
  1: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  2: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  3: 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30',
}

interface ModuleCardProps {
  module: Module
  isCompleted: boolean
}

export default function ModuleCard({ module, isCompleted }: ModuleCardProps) {
  const modulePath = `/dia/${module.day}/${module.id.split('/')[1]}`
  const slidesPath = `${modulePath}/slides`

  return (
    <div className="bg-bg-card border border-bg-card-alt rounded-2xl p-5 flex flex-col gap-4 hover:border-accent-indigo/50 transition-all duration-200 relative">
      {isCompleted && (
        <div className="absolute top-3 right-3 flex items-center gap-1 text-accent-emerald text-xs font-semibold">
          <FaCircleCheck />
          <span>Concluído</span>
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-accent-indigo/20 text-accent-indigo rounded-xl flex items-center justify-center text-xl shrink-0">
          {ICON_MAP[module.icon] ?? <FaPlay />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${DAY_COLORS[module.day]}`}>
              Dia {module.day}
            </span>
          </div>
          <h3 className="font-heading font-semibold text-text-primary text-sm leading-snug">
            {module.title}
          </h3>
        </div>
      </div>

      <p className="text-text-muted text-xs leading-relaxed">{module.summary}</p>

      <div className="flex flex-wrap gap-1.5">
        {module.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-bg-card-alt text-text-muted rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-2 border-t border-bg-card-alt">
        <Link
          to={modulePath}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-accent-indigo hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <FaPlay className="text-xs" />
          Ver Módulo
        </Link>
        <Link
          to={slidesPath}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-bg-card-alt hover:bg-slate-600 text-text-primary text-xs font-semibold rounded-lg transition-colors"
        >
          <FaCheck className="text-xs" />
          Ver Slides
        </Link>
      </div>
    </div>
  )
}
