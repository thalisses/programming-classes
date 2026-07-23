import { useRef } from 'react'
import { useSlideScale } from '../../hooks/useSlideScale'
import type { Slide } from '../../types'
import CoverSlide from './layouts/CoverSlide'
import TwoColumnSlide from './layouts/TwoColumnSlide'
import CardsSlide from './layouts/CardsSlide'
import TableSlide from './layouts/TableSlide'
import ChecklistSlide from './layouts/ChecklistSlide'
import AnimatedDemoSlide from './layouts/AnimatedDemoSlide'

interface SlideRendererProps {
  slide: Slide
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scale, SLIDE_WIDTH, SLIDE_HEIGHT } = useSlideScale(containerRef)

  function renderLayout() {
    switch (slide.layout) {
      case 'cover':
        return <CoverSlide title={slide.title} content={slide.content} />
      case 'two-column':
        return <TwoColumnSlide title={slide.title} content={slide.content} />
      case 'cards':
        return <CardsSlide title={slide.title} content={slide.content} />
      case 'table':
        return <TableSlide title={slide.title} content={slide.content} />
      case 'checklist':
        return <ChecklistSlide title={slide.title} content={slide.content} />
      case 'animated-demo':
        return <AnimatedDemoSlide title={slide.title} content={slide.content} />
    }
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <div
        style={{
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          overflow: 'hidden',
          borderRadius: '16px',
          flexShrink: 0,
        }}
      >
        {renderLayout()}
      </div>
    </div>
  )
}
