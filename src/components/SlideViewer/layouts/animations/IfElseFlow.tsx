import './IfElseFlow.css'

export default function IfElseFlow() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex gap-16 items-center">
        {/* Left: code snippet */}
        <div className="bg-slate-800 rounded-xl p-5 font-code text-sm leading-loose w-64 border border-slate-700">
          <div className="ife-line ife-line--1 text-slate-500">// nota = 7.5</div>
          <div className="ife-line ife-line--2 text-yellow-300">if (nota &gt;= 9) {'{'}</div>
          <div className="ife-line ife-line--3 text-slate-400 pl-4">&quot;Nota A&quot;</div>
          <div className="ife-line ife-line--4 text-yellow-300">{'}'} else if (nota &gt;= 7) {'{'}</div>
          <div className="ife-line ife-line--5 text-accent-emerald pl-4 font-bold">→ &quot;Nota B&quot; ✓</div>
          <div className="ife-line ife-line--6 text-yellow-300">{'}'} else {'{'}</div>
          <div className="ife-line ife-line--7 text-slate-400 pl-4">&quot;Reprovado&quot;</div>
          <div className="ife-line ife-line--8 text-yellow-300">{'}'}</div>
        </div>

        {/* Right: flowchart */}
        <div className="flex flex-col items-center gap-2">
          {/* Start */}
          <div className="ife-node ife-node--start bg-accent-indigo text-white px-6 py-2 rounded-full font-heading font-semibold text-sm">
            nota = 7.5
          </div>
          <div className="ife-arrow text-text-muted text-xl">↓</div>

          {/* Condition 1 */}
          <div className="ife-node ife-node--cond1 bg-yellow-500/20 border-2 border-yellow-500 text-yellow-300 px-6 py-2 rounded-lg font-code text-sm">
            nota &gt;= 9?
          </div>
          <div className="flex gap-12 items-start">
            <div className="flex flex-col items-center gap-1">
              <div className="ife-arrow-side text-red-400 text-xs font-semibold">✗ false</div>
            </div>
          </div>
          <div className="ife-arrow text-text-muted text-xl">↓</div>

          {/* Condition 2 */}
          <div className="ife-node ife-node--cond2 bg-yellow-500/20 border-2 border-yellow-500 text-yellow-300 px-6 py-2 rounded-lg font-code text-sm">
            nota &gt;= 7?
          </div>
          <div className="ife-arrow text-text-muted text-xl">↓</div>
          <div className="ife-label text-accent-emerald text-xs font-semibold">✓ true</div>
          <div className="ife-arrow text-text-muted text-xl">↓</div>

          {/* Result */}
          <div className="ife-node ife-node--result bg-accent-emerald/20 border-2 border-accent-emerald text-accent-emerald px-6 py-3 rounded-xl font-heading font-bold text-base">
            &quot;Nota B&quot; 🎉
          </div>
        </div>
      </div>
    </div>
  )
}
