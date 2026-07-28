import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PriceChip } from './PriceChip'
import type { Pillar } from '@/data/types'
import { en } from '@/locales/en'

const PILLAR_LABEL: Record<Pillar, string> = {
  astrology: en.pillars.astrology,
  vastu: en.pillars.vastu,
  numerology: en.pillars.numerology,
}

interface ServiceCardProps {
  title: string
  /** One-line scope. */
  description: string
  href: string
  pillar?: Pillar
  price?: number
  duration?: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  href,
  pillar,
  price,
  duration,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6 transition-colors hover:border-gold-400',
        className
      )}
    >
      {pillar && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-600">
          {PILLAR_LABEL[pillar]}
        </span>
      )}
      <h3 className="text-lg font-semibold text-navy-700 group-hover:text-navy-600">{title}</h3>
      <p className="mt-2 flex-1 text-navy-600">{description}</p>
      {price !== undefined && (
        <div className="mt-4">
          <PriceChip price={price} duration={duration} />
        </div>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
        View
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
