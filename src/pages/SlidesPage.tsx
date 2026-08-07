import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FaXmark, FaExpand, FaCompress, FaChevronLeft, FaChevronRight, FaSun, FaMoon } from 'react-icons/fa6'
import SlideRenderer from '../components/SlideViewer/SlideRenderer'
import { getModuleById } from '../data/modules'
import { useTheme } from '../hooks/useTheme'

export default function SlidesPage() {
  const { day, moduleSlug } = useParams<{ day: string; moduleSlug: string }>()
  const navigate = useNavigate()

  const moduleId = `dia-${day}/${moduleSlug}`
  const mod = getModuleById(moduleId)

  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (!mod) navigate('/')
  }, [mod, navigate])

  const total = mod?.slides.length ?? 0
  const closeUrl = `/dia/${day}/${moduleSlug}`

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'Escape' && !isFullscreen) navigate(closeUrl)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, navigate, closeUrl, isFullscreen])

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => null)
    } else {
      document.exitFullscreen().catch(() => null)
    }
  }

  if (!mod) return null

  const slide = mod.slides[current]

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-bg-card border-b border-bg-card-alt shrink-0">
        <Link
          to={closeUrl}
          className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <FaXmark />
          Fechar
        </Link>

        <span className="font-heading font-semibold text-text-primary text-sm">{mod.title}</span>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-xl bg-bg-card-alt hover:bg-accent-indigo/20 flex items-center justify-center text-text-muted hover:text-accent-indigo transition-colors"
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
            aria-label={isFullscreen ? 'Sair do modo tela cheia' : 'Tela cheia'}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 min-h-0 p-4">
        <SlideRenderer slide={slide} />
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-center gap-6 px-5 py-4 bg-bg-card border-t border-bg-card-alt shrink-0">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 bg-bg-card-alt hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed text-text-primary text-sm font-semibold rounded-xl transition-colors"
        >
          <FaChevronLeft className="text-xs" />
          Anterior
        </button>

        <div className="flex items-center gap-2">
          {mod.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current
                  ? 'w-6 h-2.5 bg-accent-indigo'
                  : 'w-2.5 h-2.5 bg-bg-card-alt hover:bg-slate-500'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        <span className="text-text-muted text-sm min-w-[80px] text-center">
          {current + 1} de {total}
        </span>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-5 py-2.5 bg-accent-indigo hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors"
        >
          Próximo
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  )
}
