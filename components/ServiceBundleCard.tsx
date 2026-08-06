import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { withBrand } from './Copy'

interface ServiceBundleCardProps {
  title: string
  description: string
  href: string
  includes: string[]
  flagship?: boolean
}

export function ServiceBundleCard({
  title,
  description,
  href,
  includes,
  flagship = false,
}: ServiceBundleCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col rounded-2xl border bg-cream-50 p-7 transition-colors hover:border-gold-400',
        flagship
          ? 'border-2 border-gold-300 shadow-[0_0_28px_rgba(233,193,99,0.28)]'
          : 'border border-cream-300'
      )}
    >
      {flagship && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-800">
          Flagship
        </span>
      )}
      <h3 className="text-xl font-semibold text-navy-700">{title}</h3>
      <p className="mt-3 leading-relaxed text-navy-600">{withBrand(description)}</p>
      <ul className="mt-5 flex-1 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-navy-600">
            <span aria-hidden="true" className="font-semibold text-gold-600">
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-700">
        Explore bundle
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
