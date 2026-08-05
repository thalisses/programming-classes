import { useState } from 'react'

type Option<T> = { value: T; label: string }

interface ControlGroupProps<T extends string | number> {
  label: string
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
}

function ControlGroup<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: ControlGroupProps<T>) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-code text-xs text-text-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`rounded-lg px-2.5 py-1 font-code text-xs transition-colors ${
                active
                  ? 'bg-accent-indigo text-white'
                  : 'bg-bg-card text-text-muted hover:bg-bg-card-alt'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const COLUMNS: Option<number>[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
]

const GAPS: Option<number>[] = [
  { value: 0, label: '0' },
  { value: 8, label: '8px' },
  { value: 16, label: '16px' },
  { value: 24, label: '24px' },
]

const ITEMS: Option<number>[] = [
  { value: 3, label: '3' },
  { value: 6, label: '6' },
  { value: 9, label: '9' },
]

const BOX_COLORS = [
  '#4f46e5',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#8b5cf6',
  '#ec4899',
  '#22c55e',
  '#eab308',
]

export default function GridPlayground() {
  const [columns, setColumns] = useState<number>(3)
  const [gap, setGap] = useState<number>(16)
  const [itemCount, setItemCount] = useState<number>(6)

  const items = Array.from({ length: itemCount }, (_, i) => i)

  return (
    <div className="w-full h-full grid grid-cols-[300px_1fr] gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 overflow-auto pr-1">
        <ControlGroup
          label="grid-template-columns (nº de colunas)"
          value={columns}
          options={COLUMNS}
          onChange={setColumns}
        />
        <ControlGroup label="gap" value={gap} options={GAPS} onChange={setGap} />
        <ControlGroup
          label="quantidade de itens"
          value={itemCount}
          options={ITEMS}
          onChange={setItemCount}
        />
      </div>

      {/* Preview + CSS */}
      <div className="flex flex-col gap-3 min-h-0">
        <div
          className="flex-1 rounded-xl border-2 border-dashed border-bg-card-alt bg-bg-card p-4 min-h-0 overflow-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
        >
          {items.map((i) => (
            <div
              key={i}
              className="rounded-lg flex items-center justify-center font-heading font-bold text-white text-xl shadow-lg"
              style={{ background: BOX_COLORS[i % BOX_COLORS.length], minHeight: 56 }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <pre className="rounded-xl bg-slate-800 border border-slate-700 p-4 font-code text-xs text-text-primary leading-relaxed">
          <span className="text-cyan-300">.container</span> {'{'}
          {'\n'}  display: <span className="text-accent-emerald">grid</span>;
          {'\n'}  grid-template-columns:{' '}
          <span className="text-accent-emerald">repeat({columns}, 1fr)</span>;
          {'\n'}  gap: <span className="text-accent-emerald">{gap}px</span>;
          {'\n'}
          {'}'}
        </pre>
      </div>
    </div>
  )
}
