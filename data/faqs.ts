import type { FaqGroup } from './types'

/** Grouped FAQ accordions (spec §8.9). Populated in Phase 4. */
export const faqGroups: FaqGroup[] = []

/** Slice shown on the homepage preview (5 items). */
export const featuredFaqs = () => faqGroups.flatMap((g) => g.items).slice(0, 5)
