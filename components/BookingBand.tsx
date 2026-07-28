import Link from 'next/link'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'
import { WhatsAppButton } from './WhatsAppButton'
import { Section } from './Section'

interface BookingBandProps {
  title?: string
  lead?: string
  /** Folded into the pre-filled WhatsApp message. */
  service?: string
  /** Label for the secondary (gold) action. */
  secondaryLabel?: string
  secondaryHref?: string
  tone?: 'navy' | 'cream'
  className?: string
}

/**
 * Exactly two booking actions: one green WhatsApp, one gold.
 * Never add a third (spec §8.4.6).
 */
export function BookingBand({
  title = 'Ready for clear next steps?',
  lead,
  service,
  secondaryLabel = en.cta.book,
  secondaryHref = '/book',
  tone = 'navy',
  className,
}: BookingBandProps) {
  const onNavy = tone === 'navy'
  return (
    <Section tone={tone} className={className}>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={cn(
            'text-3xl font-semibold sm:text-4xl',
            onNavy ? 'text-cream-50' : 'text-navy-700'
          )}
        >
          {title}
        </h2>
        {lead && (
          <p className={cn('mt-4 text-lg', onNavy ? 'text-cream-200/90' : 'text-navy-600')}>
            {lead}
          </p>
        )}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton service={service} />
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-lg bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-300"
          >
            {secondaryLabel}
          </Link>
        </div>
        <p className={cn('mt-6 text-sm', onNavy ? 'text-cream-300/70' : 'text-navy-500')}>
          {en.booking.policy}
        </p>
      </div>
    </Section>
  )
}
