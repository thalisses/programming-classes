import './LoopCounter.css'

const TOTAL = 5
const CELLS = Array.from({ length: TOTAL }, (_, i) => i)

export default function LoopCounter() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Code snippet */}
        <div className="bg-slate-800 rounded-xl px-8 py-4 font-code text-sm leading-loose border border-slate-700">
          <span className="text-yellow-300">for</span>
          <span className="text-white"> (</span>
          <span className="text-cyan-300">let</span>
          <span className="text-white"> i = 0; </span>
          <span className="lc-counter text-accent-emerald font-bold">i &lt; {TOTAL}</span>
          <span className="text-white">; i++) {'{'}</span>
          <br />
          <span className="text-white pl-8">array.</span>
          <span className="text-yellow-200">push</span>
          <span className="text-white">(i)</span>
          <br />
          <span className="text-white">{'}'}</span>
        </div>

        {/* Counter display */}
        <div className="flex items-center gap-4">
          <span className="text-text-muted font-code text-lg">i =</span>
          {CELLS.map((n) => (
            <div
              key={n}
              className={`lc-i lc-i--${n} w-12 h-12 rounded-xl border-2 border-bg-card-alt flex items-center justify-center font-heading font-bold text-xl text-text-muted`}
            >
              {n}
            </div>
          ))}
        </div>

        {/* Array visualization */}
        <div className="flex items-center gap-2">
          <span className="text-text-muted font-code text-sm mr-2">array =</span>
          <span className="text-text-muted font-code text-xl">[</span>
          {CELLS.map((n) => (
            <div
              key={n}
              className={`lc-cell lc-cell--${n} w-14 h-14 rounded-xl border-2 border-bg-card-alt bg-bg-card flex items-center justify-center font-heading font-bold text-2xl text-text-muted`}
            >
              {n}
            </div>
          ))}
          <span className="text-text-muted font-code text-xl">]</span>
        </div>
      </div>
    </div>
  )
}
