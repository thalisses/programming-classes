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
    ? 'text-left px-7 py-5 font-heading font-semibold text-text-primary text-2xl'
    : 'text-left px-5 py-3 font-heading font-semibold text-text-primary text-lg'
  const cellPad = sparse ? 'px-7 py-5 text-xl' : 'px-5 py-3 text-base'

  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-6">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-4xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-xl mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 overflow-hidden rounded-xl border border-bg-card-alt">
        <table className="w-full">
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
            {content.rows.map((row, ri) => (
              <tr
                key={ri}
                className={`border-b border-bg-card-alt last:border-0 ${ri % 2 === 0 ? 'bg-bg-card' : 'bg-bg-base'}`}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`${cellPad} leading-relaxed ${ci === 0 ? 'font-code text-accent-emerald font-semibold' : 'text-text-primary'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
