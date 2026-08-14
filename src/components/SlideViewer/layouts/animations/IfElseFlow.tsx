import './IfElseFlow.css'

export default function IfElseFlow() {
  return (
    <div className="w-full h-full flex items-center justify-center px-2">
      <div className="w-full max-w-[1200px] flex items-center justify-between gap-10 xl:gap-16">
        {/* Left: code snippet */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[620px] bg-bg-card rounded-xl p-5 font-code text-[24px] leading-[1.8] border border-bg-card-alt shadow-sm">
            <div className="ife-line ife-line--1 text-text-muted">// nota = 7.5</div>
            <div className="ife-line ife-line--2 text-amber-600">if (nota &gt;= 9) {'{'}</div>
            <div className="ife-line ife-line--3 text-text-muted pl-4">&quot;Nota A&quot;</div>
            <div className="ife-line ife-line--4 text-amber-600">{'}'} else if (nota &gt;= 7) {'{'}</div>
            <div className="ife-line ife-line--5 text-accent-emerald pl-4 font-bold">→ &quot;Nota B&quot; ✓</div>
            <div className="ife-line ife-line--6 text-amber-600">{'}'} else {'{'}</div>
            <div className="ife-line ife-line--7 text-text-muted pl-4">&quot;Reprovado&quot;</div>
            <div className="ife-line ife-line--8 text-amber-600">{'}'}</div>
          </div>
        </div>

        {/* Right: flowchart */}
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col items-center gap-2 min-w-[260px]">
            {/* Start */}
            <div className="ife-node ife-node--start bg-accent-indigo text-white px-6 py-2 rounded-full font-heading font-semibold text-[22px] leading-none">
              nota = 7.5
            </div>
            <div className="ife-arrow text-text-muted text-[28px]">↓</div>

            {/* Condition 1 */}
            <div className="ife-node ife-node--cond1 bg-[#f5d77a] border-[3px] border-[#d49b00] text-[#6b4a00] px-6 py-2 rounded-lg font-code text-[22px] leading-none shadow-sm">
              nota &gt;= 9?
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="ife-arrow-side text-red-400 text-[20px] font-semibold">✗ false</div>
            </div>
            <div className="ife-arrow text-text-muted text-[28px]">↓</div>

            {/* Condition 2 */}
            <div className="ife-node ife-node--cond2 bg-[#f5d77a] border-[3px] border-[#d49b00] text-[#6b4a00] px-6 py-2 rounded-lg font-code text-[22px] leading-none shadow-sm">
              nota &gt;= 7?
            </div>
            <div className="ife-arrow text-text-muted text-[28px]">↓</div>
            <div className="ife-label text-accent-emerald text-[22px] font-semibold">✓ true</div>
            <div className="ife-arrow text-text-muted text-[28px]">↓</div>

            {/* Result */}
            <div className="ife-node ife-node--result bg-accent-emerald/20 border-2 border-accent-emerald text-accent-emerald px-6 py-3 rounded-xl font-heading font-bold text-[24px] leading-none">
              &quot;Nota B&quot; 🎉
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
