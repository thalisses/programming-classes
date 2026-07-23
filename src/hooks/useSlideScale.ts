import { useState, useEffect } from 'react'

const SLIDE_WIDTH = 1280
const SLIDE_HEIGHT = 720

export function useSlideScale(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function calculateScale() {
      const el = containerRef.current
      if (!el) return
      const availW = el.clientWidth
      const availH = el.clientHeight
      const scaleX = availW / SLIDE_WIDTH
      const scaleY = availH / SLIDE_HEIGHT
      setScale(Math.min(scaleX, scaleY, 1))
    }

    calculateScale()

    const ro = new ResizeObserver(calculateScale)
    if (containerRef.current) ro.observe(containerRef.current)

    const onFullscreen = () => setTimeout(calculateScale, 100)
    document.addEventListener('fullscreenchange', onFullscreen)

    return () => {
      ro.disconnect()
      document.removeEventListener('fullscreenchange', onFullscreen)
    }
  }, [containerRef])

  return { scale, SLIDE_WIDTH, SLIDE_HEIGHT }
}
