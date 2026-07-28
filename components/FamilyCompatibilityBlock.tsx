import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

/**
 * Preparation, not prediction (spec §6). Describes household dynamics and
 * tendencies only — never verdicts about individuals, no conflict matrix,
 * no crisis prediction, no power-dynamics map. The consent note is mandatory.
 */
export function FamilyCompatibilityBlock({ className }: { className?: string }) {
  const fc = en.home.familyCompatibility
  return (
    <div className={cn('grid gap-10 lg:grid-cols-2 lg:gap-16', className)}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-700">
          {fc.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy-700 sm:text-4xl">
          {fc.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-navy-600">{fc.lead}</p>

        <p className="mt-6 flex gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5 text-navy-700">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
          <span>{fc.honestyNote}</span>
        </p>

        <Link
          href={fc.cta.href}
          className="group mt-6 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800"
        >
          {fc.cta.label}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul className="space-y-4">
        {fc.points.map((point) => (
          <li
            key={point.title}
            className="rounded-2xl border border-cream-300 bg-cream-50 p-6"
          >
            <h3 className="font-semibold text-navy-700">{point.title}</h3>
            <p className="mt-2 leading-relaxed text-navy-600">{point.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
