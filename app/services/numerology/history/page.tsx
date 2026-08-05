import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PillarHistoryPage } from '@/components/PillarHistoryPage'
import { getPillarHistory } from '@/data/pillar-history'

const PILLAR = 'numerology'
const history = getPillarHistory(PILLAR)!

export const metadata: Metadata = {
  title: history.title,
  description: history.metaDescription,
}

export default function NumerologyHistoryPage() {
  const data = getPillarHistory(PILLAR)
  if (!data) notFound()
  return <PillarHistoryPage history={data} />
}
