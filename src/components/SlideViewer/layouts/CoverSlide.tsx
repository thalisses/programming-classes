import type { CoverContent } from '../../../types'

interface CoverSlideProps {
  title: string
  content: CoverContent
}

export default function CoverSlide({ title, content }: CoverSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-accent-indigo/20 rounded-full blur-3xl top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-16 gap-6">
        <span className="inline-flex items-center px-5 py-2 bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40 rounded-full text-lg font-heading font-semibold tracking-widest uppercase">
          {content.badge}
        </span>

        <h1 className="font-heading font-bold text-text-primary text-6xl leading-tight">
          {title}
        </h1>

        <p className="text-text-muted text-2xl max-w-2xl leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full ${i === 0 ? 'w-8 bg-accent-indigo' : 'w-3 bg-bg-card-alt'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
