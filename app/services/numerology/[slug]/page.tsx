import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailPage } from '@/components/ServiceDetailPage'
import { getService, servicesByPillar } from '@/data/services'

const PILLAR = 'numerology' as const

export function generateStaticParams() {
  return servicesByPillar(PILLAR).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service || service.pillar !== PILLAR) return {}
  return { title: service.title, description: service.metaDescription }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service || service.pillar !== PILLAR) notFound()
  return <ServiceDetailPage service={service} />
}
