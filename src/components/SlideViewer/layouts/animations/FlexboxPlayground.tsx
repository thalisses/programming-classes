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
      <span className="font-code text-[24px] text-text-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`rounded-lg px-2.5 py-1 font-code text-[24px] transition-colors ${
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

const DIRECTIONS: Option<'row' | 'row-reverse' | 'column' | 'column-reverse'>[] = [
  { value: 'row', label: 'row' },
  { value: 'row-reverse', label: 'row-reverse' },
  { value: 'column', label: 'column' },
  { value: 'column-reverse', label: 'column-reverse' },
]

const JUSTIFY: Option<
  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
>[] = [
  { value: 'flex-start', label: 'flex-start' },
  { value: 'center', label: 'center' },
  { value: 'flex-end', label: 'flex-end' },
  { value: 'space-between', label: 'space-between' },
  { value: 'space-around', label: 'space-around' },
  { value: 'space-evenly', label: 'space-evenly' },
]

const ALIGN: Option<'stretch' | 'flex-start' | 'center' | 'flex-end'>[] = [
  { value: 'stretch', label: 'stretch' },
  { value: 'flex-start', label: 'flex-start' },
  { value: 'center', label: 'center' },
  { value: 'flex-end', label: 'flex-end' },
]

const WRAP: Option<'nowrap' | 'wrap'>[] = [
  { value: 'nowrap', label: 'nowrap' },
  { value: 'wrap', label: 'wrap' },
]

const GAPS: Option<number>[] = [
  { value: 0, label: '0' },
  { value: 8, label: '8px' },
  { value: 16, label: '16px' },
  { value: 32, label: '32px' },
]

const BOX_COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >('row')
  const [justify, setJustify] = useState<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  >('flex-start')
  const [align, setAlign] = useState<'stretch' | 'flex-start' | 'center' | 'flex-end'>(
    'stretch',
  )
  const [wrap, setWrap] = useState<'nowrap' | 'wrap'>('nowrap')
  const [gap, setGap] = useState<number>(16)

  return (
    <div className="w-full h-full grid grid-cols-[300px_1fr] gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 overflow-auto pr-1">
        <ControlGroup
          label="flex-direction"
          value={direction}
          options={DIRECTIONS}
          onChange={setDirection}
        />
        <ControlGroup
          label="justify-content"
          value={justify}
          options={JUSTIFY}
          onChange={setJustify}
        />
        <ControlGroup label="align-items" value={align} options={ALIGN} onChange={setAlign} />
        <ControlGroup label="flex-wrap" value={wrap} options={WRAP} onChange={setWrap} />
        <ControlGroup label="gap" value={gap} options={GAPS} onChange={setGap} />
      </div>

      {/* Preview + CSS */}
      <div className="flex flex-col gap-3 min-h-0">
        <div
          className="flex-1 rounded-xl border-2 border-dashed border-bg-card-alt bg-bg-card p-4 min-h-0 overflow-auto"
          style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: `${gap}px`,
          }}
        >
          {BOX_COLORS.map((color, i) => (
            <div
              key={color}
              className="rounded-lg flex items-center justify-center font-heading font-bold text-white text-[26px] shadow-lg"
              style={{
                background: color,
                width: 72,
                height: 48 + (i % 3) * 24,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <pre className="rounded-xl bg-slate-800 border border-slate-700 p-5 font-code text-[26px] text-text-primary leading-relaxed">
          <span className="text-cyan-300">.container</span> {'{'}
          {'\n'}  display: <span className="text-accent-emerald">flex</span>;
          {'\n'}  flex-direction: <span className="text-accent-emerald">{direction}</span>;
          {'\n'}  justify-content: <span className="text-accent-emerald">{justify}</span>;
          {'\n'}  align-items: <span className="text-accent-emerald">{align}</span>;
          {'\n'}  flex-wrap: <span className="text-accent-emerald">{wrap}</span>;
          {'\n'}  gap: <span className="text-accent-emerald">{gap}px</span>;
          {'\n'}
          {'}'}
        </pre>
      </div>
    </div>
  )
}
