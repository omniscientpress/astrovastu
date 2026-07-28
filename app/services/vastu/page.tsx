import type { Metadata } from 'next'
import { PillarPage } from '@/components/PillarPage'
import { getPillar } from '@/data/pillars'

const info = getPillar('vastu')!

export const metadata: Metadata = {
  title: info.name,
  description: info.metaDescription,
}

export default function VastuPillarPage() {
  return <PillarPage info={info} />
}
