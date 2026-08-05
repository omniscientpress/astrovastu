export { HeroVisual } from './HeroVisual'
export { YantraWatermark } from './YantraWatermark'
export { OrnamentDivider } from './OrnamentDivider'
export {
  SituationArt as SituationIcon,
  PillarArt as PillarIcon,
  StepArt as StepIcon,
  HeroSlideArt,
} from './LineArtSvg'
export type { SituationKey, PillarKey, StepKey, HeroSlideKey, GraphicTheme } from './types'

/** Left-border accent classes per pillar — use on cards only, not section backgrounds. */
export const pillarAccentClass = {
  astrology: 'border-l-gold-400',
  vastu: 'border-l-[#7f9e8b]',
  numerology: 'border-l-cream-500',
} as const

export const pillarIconClass = {
  astrology: 'text-gold-400',
  vastu: 'text-[#7f9e8b]',
  numerology: 'text-cream-500',
} as const
