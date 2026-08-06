import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { HeroSlideKey } from './types'

const HERO_IMAGE: Record<HeroSlideKey, { src: string; position: string }> = {
  brand: {
    src: '/graphics/hero/hero-integrated-guidance.webp',
    position: 'object-center lg:object-[62%_center]',
  },
  marriage: {
    src: '/graphics/hero/hero-marriage-family.webp',
    position: 'object-center lg:object-[58%_center]',
  },
  vastu: {
    src: '/graphics/hero/hero-vastu-space.webp',
    position: 'object-center',
  },
  numerology: {
    src: '/graphics/hero/hero-numerology-name.webp',
    position: 'object-center lg:object-[55%_center]',
  },
}

type HeroVisualProps = {
  slideId: HeroSlideKey
  visualAlt: string
  priority?: boolean
  className?: string
}

/** Full-bleed hero background image with a left-heavy scrim for readable text. */
export function HeroVisual({ slideId, visualAlt, priority, className }: HeroVisualProps) {
  const image = HERO_IMAGE[slideId]

  return (
    <div className={cn('absolute inset-0', className)} aria-hidden={false}>
      <Image
        src={image.src}
        alt={visualAlt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn('object-cover', image.position)}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/88 to-navy-900/35 lg:via-navy-900/82 lg:to-navy-900/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/20 lg:from-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
