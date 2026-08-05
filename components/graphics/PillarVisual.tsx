import Image from 'next/image'
import { cn } from '@/lib/utils'

const PILLAR_IMAGE: Record<string, { src: string; alt: string }> = {
  astrology: {
    src: '/graphics/pillar/astrology.png',
    alt: 'Astronomy-inspired KP Astrology visual',
  },
  vastu: {
    src: '/graphics/pillar/vastu.png',
    alt: 'Illuminated home and Vastu grid visual',
  },
  numerology: {
    src: '/graphics/pillar/numerology.png',
    alt: 'Numerology number grid visual',
  },
}

export function PillarVisual({ pillar, className }: { pillar: string; className?: string }) {
  const image = PILLAR_IMAGE[pillar]
  if (!image) return null

  return (
    <figure
      className={cn(
        'group relative aspect-[3/1] w-full overflow-hidden rounded-2xl border border-gold-300/40 bg-navy-800 shadow-[0_24px_60px_rgba(7,5,24,0.35)]',
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1023px) 92vw, 420px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
      />
      <div
        className="pointer-events-none absolute inset-2 rounded-xl border border-cream-100/15"
        aria-hidden="true"
      />
    </figure>
  )
}
