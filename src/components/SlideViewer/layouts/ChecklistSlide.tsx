import { FaCircleCheck } from 'react-icons/fa6'
import type { ChecklistContent } from '../../../types'

interface ChecklistSlideProps {
  title: string
  content: ChecklistContent
}

export default function ChecklistSlide({ title, content }: ChecklistSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-6">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-3xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-lg mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3 content-start">
        {content.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <FaCircleCheck className="text-accent-emerald text-lg mt-0.5 shrink-0" />
            <span className="text-text-primary text-base leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
