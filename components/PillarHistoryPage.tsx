import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Section } from './Section'
import { BookingBand } from './BookingBand'
import { BrandText } from './BrandText'
import type { HistoryBlock, PillarHistory } from '@/data/pillar-history'

function HistoryBlockView({ block }: { block: HistoryBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 text-2xl font-semibold text-navy-700 first:mt-0">{block.text}</h2>
    case 'h3':
      return <h3 className="mt-8 text-xl font-semibold text-navy-700">{block.text}</h3>
    case 'p':
      return (
        <p className="mt-4 leading-relaxed text-navy-600">
          <BrandText>{block.text!}</BrandText>
        </p>
      )
    case 'ul':
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-navy-600">
          {block.items!.map((item) => (
            <li key={item.slice(0, 40)} className="leading-relaxed">
              <BrandText>{item}</BrandText>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-navy-600">
          {block.items!.map((item) => (
            <li key={item.slice(0, 40)} className="leading-relaxed">
              <BrandText>{item}</BrandText>
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-cream-300">
                {block.headers!.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-navy-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows!.map((row) => (
                <tr key={row[0]} className="border-b border-cream-300">
                  {row.map((cell) => (
                    <td key={cell.slice(0, 24)} className="px-4 py-3 text-navy-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export function PillarHistoryPage({ history }: { history: PillarHistory }) {
  return (
    <>
      <Section tone="navy">
        <Link
          href={history.backHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {history.backLabel}
        </Link>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {history.title}
        </h1>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          {history.blocks.map((block, i) => (
            <HistoryBlockView key={i} block={block} />
          ))}
        </div>
      </Section>

      <BookingBand service={history.backLabel} />
    </>
  )
}
