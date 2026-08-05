import { cn } from '@/lib/utils'
import { BrandText } from './BrandText'

function withBrand(node: React.ReactNode): React.ReactNode {
  return typeof node === 'string' ? <BrandText>{node}</BrandText> : node
}

type Tone = 'navy' | 'cream' | 'white'

interface SectionProps {
  tone?: Tone
  as?: 'section' | 'div' | 'footer' | 'header'
  className?: string
  innerClassName?: string
  children: React.ReactNode
  id?: string
  /**
   * Defer layout/paint until the section nears the viewport. Use on sections
   * below the fold; never on the hero, which is the LCP candidate.
   */
  deferOffscreen?: boolean
}

const TONES: Record<Tone, string> = {
  navy: 'bg-navy-700 text-cream-100 on-navy',
  cream: 'bg-cream-100 text-navy-800',
  white: 'bg-cream-50 text-navy-800',
}

/** Alternating navy/cream band with a consistent content container. */
export function Section({
  tone = 'white',
  as: Tag = 'section',
  className,
  innerClassName,
  children,
  id,
  deferOffscreen = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        TONES[tone],
        'px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
        deferOffscreen && 'defer-offscreen',
        className
      )}
    >
      <div className={cn('mx-auto w-full max-w-content', innerClassName)}>{children}</div>
    </Tag>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  lead?: string
  tone?: Tone
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'white',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const onNavy = tone === 'navy'
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-sm font-semibold uppercase tracking-widest',
            onNavy ? 'text-gold-300' : 'text-gold-600'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold leading-tight sm:text-4xl',
          onNavy ? 'text-cream-50' : 'text-navy-700'
        )}
      >
        {withBrand(title)}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            onNavy ? 'text-cream-200/90' : 'text-navy-600'
          )}
        >
          {withBrand(lead)}
        </p>
      )}
    </div>
  )
}
