import type { Metadata } from 'next'
import { PillarPage } from '@/components/PillarPage'
import { getPillar } from '@/data/pillars'

const info = getPillar('numerology')!

export const metadata: Metadata = {
  title: info.name,
  description: info.metaDescription,
}

export default function NumerologyPillarPage() {
  return <PillarPage info={info} />
}
