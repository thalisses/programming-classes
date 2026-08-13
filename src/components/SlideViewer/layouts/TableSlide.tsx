import type { TableContent } from '../../../types'

interface TableSlideProps {
  title: string
  content: TableContent
}

export default function TableSlide({ title, content }: TableSlideProps) {
  // Tabelas com poucas linhas ganham fonte e espaçamento maiores para ficarem
  // mais visíveis na apresentação, sem estourar tabelas mais densas.
  const sparse = content.rows.length <= 4
  const headerClass = sparse
    ? 'text-left px-4 py-2 font-heading font-semibold text-text-primary text-[20px]'
    : 'text-left px-3 py-1.5 font-heading font-semibold text-text-primary text-[18px]'
  const cellPad = sparse ? 'px-4 py-2 text-[19px]' : 'px-3 py-1.5 text-[18px]'
  const rowHeight = content.rows.length > 0 ? `${100 / content.rows.length}%` : 'auto'

  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-6 gap-4">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-[38px]">{title}</h2>
        <p className="text-accent-indigo font-semibold text-[24px] mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden rounded-xl border border-bg-card-alt">
        <table className="w-full h-full border-collapse">
          <thead>
            <tr className="bg-accent-indigo/10 border-b border-bg-card-alt">
              {content.headers.map((h, i) => (
                <th key={i} className={headerClass}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, ri) => {
              const isLastRow = ri === content.rows.length - 1

              return (
                <tr
                  key={ri}
                  style={{ height: rowHeight }}
                  className={`${isLastRow ? '' : 'border-b border-bg-card-alt'} ${ri % 2 === 0 ? 'bg-bg-card' : 'bg-bg-base'}`}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`${cellPad} leading-snug align-middle ${ci === 0 ? 'font-code text-accent-emerald font-semibold' : 'text-text-primary'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
