import type { AnimatedDemoContent } from '../../../types'
import IfElseFlow from './animations/IfElseFlow'
import LoopCounter from './animations/LoopCounter'
import HtmlTagPreview from './animations/HtmlTagPreview'
import FlexboxPlayground from './animations/FlexboxPlayground'
import GridPlayground from './animations/GridPlayground'

interface AnimatedDemoSlideProps {
  title: string
  content: AnimatedDemoContent
}

export default function AnimatedDemoSlide({ title, content }: AnimatedDemoSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-4">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-4xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-xl mt-1">{content.heading}</p>
      </div>
      <div className="flex-1 min-h-0">
        {content.animationType === 'if-else-flow' && <IfElseFlow />}
        {content.animationType === 'loop-counter' && <LoopCounter />}
        {content.animationType === 'html-tag-preview' && <HtmlTagPreview />}
        {content.animationType === 'flexbox-playground' && <FlexboxPlayground />}
        {content.animationType === 'grid-playground' && <GridPlayground />}
      </div>
      <p className="text-text-muted text-lg text-center">{content.description}</p>
    </div>
  )
}
