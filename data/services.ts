import type { Service } from './types'

/**
 * All 15 services. Populated in Phase 3 from spec §8.6.
 * Every entry must carry a non-empty `deliverables` array (spec §8.4.5).
 */
export const services: Service[] = []

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const servicesByPillar = (pillar: Service['pillar']) =>
  services.filter((s) => s.pillar === pillar)
