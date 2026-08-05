import { cn } from '@/lib/utils'
import { Logo } from '@/components/Logo'
import { HeroSlideArt } from './LineArtSvg'
import type { HeroSlideKey } from './types'

type HeroVisualProps = {
  slideId: HeroSlideKey
  visualAlt: string
  priority?: boolean
  className?: string
}

export function HeroVisual({ slideId, visualAlt, priority, className }: HeroVisualProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-square w-[min(100%,220px)] items-center justify-center sm:w-[min(100%,260px)] lg:w-[220px]',
        className
      )}
    >
      <div
        className="absolute inset-4 rounded-3xl border border-gold-400/20 bg-navy-600/30"
        aria-hidden="true"
      />
      <HeroSlideArt
        id={slideId}
        theme="dark"
        className="relative z-[1] h-[78%] w-[78%]"
      />
      <Logo
        variant="mark"
        theme="dark"
        priority={priority}
        className="absolute bottom-2 right-2 z-[2] [--logo-size:44px] opacity-80 sm:[--logo-size:48px]"
      />
      <span className="sr-only">{visualAlt}</span>
    </div>
  )
}
