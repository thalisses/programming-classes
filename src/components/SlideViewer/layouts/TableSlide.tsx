import type { TableContent } from '../../../types'

interface TableSlideProps {
  title: string
  content: TableContent
}

export default function TableSlide({ title, content }: TableSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-6">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-3xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-lg mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 overflow-hidden rounded-xl border border-bg-card-alt">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-accent-indigo/10 border-b border-bg-card-alt">
              {content.headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-5 py-3 font-heading font-semibold text-text-primary"
                >
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
                    className={`px-5 py-3 leading-relaxed ${ci === 0 ? 'font-code text-accent-emerald font-semibold' : 'text-text-primary'}`}
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
