import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

/** `text` — wordmark for header; `full` — emblem + wordmark; `mark` — emblem only. */
type LogoVariant = 'text' | 'full' | 'mark'
type LogoTheme = 'light' | 'dark'

interface LogoProps {
  variant?: LogoVariant
  theme?: LogoTheme
  /**
   * Logo height. Sizing flows from the `--logo-size` CSS variable so a single
   * instance can be responsive, e.g. className="[--logo-size:40px] lg:[--logo-size:44px]".
   */
  size?: number
  href?: string
  className?: string
  priority?: boolean
}

const LOGO_ASSETS = {
  text: { src: '/brand/text-logo.png', ratio: 638 / 217 },
  full: { src: '/brand/logo-full.png', ratio: 639 / 600 },
  mark: { src: '/brand/logo-mark.webp', ratio: 440 / 375 },
} as const

export function Logo({
  variant = 'text',
  theme = 'light',
  size,
  href,
  className,
  priority = false,
}: LogoProps) {
  const onDark = theme === 'dark'
  const asset = LOGO_ASSETS[variant]
  const defaultHeight = variant === 'full' ? 120 : 96
  const style = size ? ({ '--logo-size': `${size}px` } as React.CSSProperties) : undefined

  const logoImage = (
    <Image
      src={asset.src}
      alt={en.brand.logoAlt}
      width={Math.round(defaultHeight * asset.ratio)}
      height={defaultHeight}
      priority={priority}
      sizes={
        variant === 'text'
          ? '(max-width: 640px) 180px, 240px'
          : variant === 'full'
            ? '(max-width: 640px) 140px, 200px'
            : '(max-width: 1024px) 40px, 44px'
      }
      unoptimized
      className={cn(
        'w-auto select-none',
        variant === 'full'
          ? 'h-[var(--logo-size,120px)]'
          : 'h-[var(--logo-size,96px)]',
        variant === 'text' && 'brightness-105 contrast-110'
      )}
    />
  )

  /** Black-backed logo assets sit on a navy pill when the page background is light. */
  const content =
    onDark || variant === 'mark' ? (
      logoImage
    ) : (
      <span className="inline-flex rounded-xl bg-navy-900/90 px-3 py-1.5 shadow-[0_4px_24px_rgba(30,27,75,0.18)] ring-1 ring-gold-400/25">
        {logoImage}
      </span>
    )

  if (href) {
    return (
      <Link
        href={href}
        aria-label={en.brand.logoAlt}
        style={style}
        className={cn('inline-flex items-center', className)}
      >
        {content}
      </Link>
    )
  }

  return (
    <span style={style} className={cn('inline-flex items-center', className)}>
      {content}
    </span>
  )
}
