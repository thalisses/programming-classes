import './LoopCounter.css'

const TOTAL = 5
const CELLS = Array.from({ length: TOTAL }, (_, i) => i)

export default function LoopCounter() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Code snippet */}
        <div className="bg-bg-card rounded-xl px-8 py-5 font-code text-[24px] leading-loose border border-bg-card-alt min-w-[420px]">
          <span className="text-amber-600">for</span>
          <span className="text-text-primary"> (</span>
          <span className="text-cyan-700">let</span>
          <span className="text-text-primary"> i = 0; </span>
          <span className="lc-counter text-accent-emerald font-bold">i &lt; {TOTAL}</span>
          <span className="text-text-primary">; i++) {'{'}</span>
          <br />
          <span className="text-text-primary pl-8">array.</span>
          <span className="text-amber-600">push</span>
          <span className="text-text-primary">(i)</span>
          <br />
          <span className="text-text-primary">{'}'}</span>
        </div>

        {/* Counter display */}
        <div className="flex items-center gap-4">
          <span className="text-text-muted font-code text-[24px]">i =</span>
          {CELLS.map((n) => (
            <div
              key={n}
              className={`lc-i lc-i--${n} w-12 h-12 rounded-xl border-2 border-bg-card-alt flex items-center justify-center font-heading font-bold text-[28px] text-text-muted`}
            >
              {n}
            </div>
          ))}
        </div>

        {/* Array visualization */}
        <div className="flex items-center gap-2">
          <span className="text-text-muted font-code text-[24px] mr-2">array =</span>
          <span className="text-text-muted font-code text-[28px]">[</span>
          {CELLS.map((n) => (
            <div
              key={n}
              className={`lc-cell lc-cell--${n} w-14 h-14 rounded-xl border-2 border-bg-card-alt bg-bg-card flex items-center justify-center font-heading font-bold text-[28px] text-text-muted`}
            >
              {n}
            </div>
          ))}
          <span className="text-text-muted font-code text-[28px]">]</span>
        </div>
      </div>
    </div>
  )
}
