import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

/** Styled brand name — Cinzel serif, bold, slightly tracked. */
export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn('font-brand font-bold tracking-wide', className)}>
      {en.brand.name}
    </span>
  )
}
