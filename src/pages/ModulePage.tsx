import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  FaPlay, FaArrowUpRightFromSquare, FaListCheck, FaBookOpen, FaChevronRight,
} from 'react-icons/fa6'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { getModuleById, MODULES } from '../data/modules'
import { useProgress } from '../hooks/useProgress'

export default function ModulePage() {
  const { day, moduleSlug } = useParams<{ day: string; moduleSlug: string }>()
  const navigate = useNavigate()
  const { isCompleted, markCompleted, completedCount } = useProgress()

  const moduleId = `dia-${day}/${moduleSlug}`
  const mod = getModuleById(moduleId)

  useEffect(() => {
    if (!mod) { navigate('/'); return }
    markCompleted(mod.id)
  }, [mod, navigate, markCompleted])

  if (!mod) return null

  const slidesPath = `/dia/${day}/${moduleSlug}/slides`

  return (
    <div className="min-h-screen bg-bg-base">
      <Header completedCount={completedCount} totalModules={MODULES.length} />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumb items={[{ label: mod.title }]} />

        {/* Module header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/30">
              Dia {mod.day}
            </span>
            {mod.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-bg-card-alt text-text-muted">
                {t}
              </span>
            ))}
            {isCompleted(mod.id) && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30">
                ✓ Concluído
              </span>
            )}
          </div>
          <h1 className="font-heading font-bold text-text-primary text-4xl mb-3">{mod.title}</h1>
          <p className="text-text-muted text-lg leading-relaxed">{mod.summary}</p>
        </div>

        {/* Topics */}
        <section className="bg-bg-card border border-bg-card-alt rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FaBookOpen className="text-accent-indigo" />
            <h2 className="font-heading font-semibold text-text-primary text-lg">
              O que você vai aprender
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mod.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2.5 text-text-primary text-sm leading-relaxed">
                <FaChevronRight className="text-accent-indigo mt-0.5 shrink-0 text-xs" />
                <span dangerouslySetInnerHTML={{ __html: topic }} />
              </li>
            ))}
          </ul>
        </section>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to={slidesPath}
            className="flex items-center gap-2 px-6 py-3 bg-accent-indigo hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
          >
            <FaPlay />
            Ver Slides Interativos
          </Link>
        </div>

        {/* Exercises */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <FaListCheck className="text-accent-emerald" />
            <h2 className="font-heading font-semibold text-text-primary text-lg">
              Exercícios Práticos
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {mod.exercises.map((ex, ei) => (
              <div key={ei} className="bg-bg-card border border-bg-card-alt rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-text-primary text-base mb-3">
                  {ex.label}
                </h3>

                {ex.description && (
                  <p className="text-text-muted text-sm mb-4">{ex.description}</p>
                )}

                {ex.url && (
                  <a
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/30 rounded-lg text-sm font-semibold hover:bg-accent-indigo/30 transition-colors mb-4"
                  >
                    <FaArrowUpRightFromSquare className="text-xs" />
                    Abrir exercício externo
                  </a>
                )}

                {ex.steps && (
                  <ol className="flex flex-col gap-3">
                    {ex.steps.map((step, si) => (
                      <li key={si} className="flex gap-3 items-start">
                        <span className="w-7 h-7 rounded-full bg-accent-indigo/20 text-accent-indigo text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {si + 1}
                        </span>
                        <span
                          className="text-text-primary text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
