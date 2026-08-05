import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { HeroSlideKey } from './types'

const HERO_IMAGE: Record<HeroSlideKey, { src: string; position: string }> = {
  brand: {
    src: '/graphics/hero/hero-integrated-guidance.webp',
    position: 'object-center',
  },
  marriage: {
    src: '/graphics/hero/hero-marriage-family.webp',
    position: 'object-[68%_center]',
  },
  vastu: {
    src: '/graphics/hero/hero-vastu-space.webp',
    position: 'object-center',
  },
  numerology: {
    src: '/graphics/hero/hero-numerology-name.webp',
    position: 'object-[62%_center]',
  },
}

type HeroVisualProps = {
  slideId: HeroSlideKey
  visualAlt: string
  priority?: boolean
  className?: string
}

export function HeroVisual({ slideId, visualAlt, priority, className }: HeroVisualProps) {
  const image = HERO_IMAGE[slideId]

  return (
    <figure
      className={cn(
        'group relative aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-gold-300/35 bg-navy-800 shadow-[0_28px_80px_rgba(7,5,24,0.45)]',
        className
      )}
    >
      <Image
        src={image.src}
        alt={visualAlt}
        fill
        priority={priority}
        sizes="(max-width: 1023px) 92vw, 500px"
        className={cn(
          'object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.015]',
          image.position
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-gold-200/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-cream-100/10"
        aria-hidden="true"
      />
    </figure>
  )
}
