import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { withBrand } from './Copy'
import { en } from '@/locales/en'
import { SituationIcon, pillarAccentClass, pillarIconClass } from '@/components/graphics'
import type { Pillar } from '@/data/types'
import type { SituationKey } from '@/components/graphics/types'

const PILLAR_LABEL: Record<Pillar, string> = {
  astrology: en.pillars.astrology,
  vastu: en.pillars.vastu,
  numerology: en.pillars.numerology,
}

/** Shared by Home (§8.1.3) and the Services hub (§8.2). */
export function SituationCards({ className }: { className?: string }) {
  return (
    <ul className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {en.home.situations.items.map((item) => {
        const featured = 'featured' in item && item.featured === true

        return (
          <li
            key={item.id}
            className={cn('h-full', featured && 'sm:col-span-2 lg:col-span-2')}
          >
            <Link
              href={item.href}
              className={cn(
                'group flex h-full flex-col rounded-2xl border border-l-4 bg-cream-50 p-5 transition-colors hover:border-gold-400',
                pillarAccentClass[item.pillar],
                featured
                  ? 'border-2 border-gold-300 border-l-4 border-l-gold-400 p-6 shadow-[0_0_24px_rgba(233,193,99,0.3)] sm:p-7'
                  : 'border-cream-300'
              )}
            >
              <SituationIcon
                id={item.id as SituationKey}
                className={cn('h-12 w-12', featured && 'h-14 w-14', pillarIconClass[item.pillar])}
                theme="light"
              />
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-700">
                {featured ? 'Most recommended' : PILLAR_LABEL[item.pillar]}
              </span>
              <h3 className={cn('mt-2 font-semibold text-navy-700', featured && 'text-lg')}>
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                {withBrand(item.description)}
              </p>
              <ArrowRight
                className="mt-4 h-4 w-4 text-gold-700 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
