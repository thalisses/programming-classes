import type { AnimatedDemoContent } from '../../../types'
import IfElseFlow from './animations/IfElseFlow'
import LoopCounter from './animations/LoopCounter'

interface AnimatedDemoSlideProps {
  title: string
  content: AnimatedDemoContent
}

export default function AnimatedDemoSlide({ title, content }: AnimatedDemoSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-4">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-3xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-lg mt-1">{content.heading}</p>
      </div>
      <div className="flex-1 min-h-0">
        {content.animationType === 'if-else-flow' && <IfElseFlow />}
        {content.animationType === 'loop-counter' && <LoopCounter />}
      </div>
      <p className="text-text-muted text-sm text-center">{content.description}</p>
    </div>
  )
}
