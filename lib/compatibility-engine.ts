/**
 * Lo Shu / Kua element compatibility for the Relationship Blueprint feature.
 * Pure logic — safe to import from React client or server components.
 */

export type Element = 'water' | 'earth' | 'wood' | 'metal' | 'fire'

export type MatchStatus = 'Excellent' | 'Neutral' | 'Needs Bridging'

export interface CompatibilityRemedies {
  en: string
  te: string
}

export interface CompatibilityResult {
  personA: { number: number; element: Element }
  personB: { number: number; element: Element }
  matchStatus: MatchStatus
  matchPercentage: number
  bridgeElement: Element | null
  remedies: CompatibilityRemedies | null
}

const ELEMENT_LABEL: Record<Element, string> = {
  water: 'Water',
  earth: 'Earth',
  wood: 'Wood',
  metal: 'Metal',
  fire: 'Fire',
}

/** Numbers 1–9 mapped to their Lo Shu element. */
export function getElementFromNumber(num: number): Element {
  if (!Number.isInteger(num) || num < 1 || num > 9) {
    throw new RangeError('Kua/Driver number must be an integer from 1 to 9')
  }
  if (num === 1) return 'water'
  if (num === 2 || num === 5 || num === 8) return 'earth'
  if (num === 3 || num === 4) return 'wood'
  if (num === 6 || num === 7) return 'metal'
  return 'fire'
}

/** Five-element generating (productive) cycle — A nourishes B. */
const GENERATES: Record<Element, Element> = {
  water: 'wood',
  wood: 'fire',
  fire: 'earth',
  earth: 'metal',
  metal: 'water',
}

type ClashKey =
  | 'water|fire'
  | 'wood|earth'
  | 'fire|metal'
  | 'metal|wood'
  | 'earth|water'

interface ClashRule {
  bridge: Element
  remedies: CompatibilityRemedies
  matchPercentage: number
}

const CLASH_RULES: Record<ClashKey, ClashRule> = {
  'water|fire': {
    bridge: 'wood',
    matchPercentage: 52,
    remedies: {
      en: 'Bridge with Wood energy: add green tones, living plants, or wooden decor in shared spaces.',
      te: 'వుడ్ శక్తితో విభజన: పచ్చ రంగులు, జీవించే మొక్కలు లేదా చెక్క అలంకారాలను మీ కలిసి ఉండే ప్రదేశాలలో చేర్చండి.',
    },
  },
  'wood|earth': {
    bridge: 'fire',
    matchPercentage: 48,
    remedies: {
      en: 'Bridge with Fire energy: warm red or orange accents, bright lighting, or candles in shared areas.',
      te: 'ఫైర్ శక్తితో విభజన: ఎరుపు/నారింజ రంగులు, ప్రకాశవంతమైన లైట్లు లేదా కొవ్వొత్తులను మీ కలిసి ఉండే ప్రదేశాలలో ఉపయోగించండి.',
    },
  },
  'fire|metal': {
    bridge: 'earth',
    matchPercentage: 50,
    remedies: {
      en: 'Bridge with Earth energy: yellow or earthy tones, crystals, or clay pots placed together.',
      te: 'ఎర్త్ శక్తితో విభజన: పసుపు/మట్టి రంగులు, క్రిస్టల్స్ లేదా మట్టి కుండలను కలిపి ఉంచండి.',
    },
  },
  'metal|wood': {
    bridge: 'water',
    matchPercentage: 46,
    remedies: {
      en: 'Bridge with Water energy: blue or black accents, a small water fountain, or glass elements at home.',
      te: 'వాటర్ శక్తితో విభాజన: నీలం/నలుపు రంగులు, చిన్న నీటి ఫౌంటెన్ లేదా గాజు అలంకారాలను ఇంటిలో చేర్చండి.',
    },
  },
  'earth|water': {
    bridge: 'metal',
    matchPercentage: 44,
    remedies: {
      en: 'Bridge with Metal energy: white or gold tones, metal wind chimes, or metallic objects in shared rooms.',
      te: 'మెటల్ శక్తితో విభాజన: తెలుపు/బంగారు రంగులు, మెటల్ గాలి మోగులు లేదా మెటల్ వస్తువులను కలిసి ఉండే గదులలో ఉంచండి.',
    },
  },
}

function findClashRule(a: Element, b: Element): ClashRule | null {
  const key1 = `${a}|${b}` as ClashKey
  const key2 = `${b}|${a}` as ClashKey
  return CLASH_RULES[key1] ?? CLASH_RULES[key2] ?? null
}

function isProductivePair(a: Element, b: Element): boolean {
  return GENERATES[a] === b || GENERATES[b] === a
}

function neutralPercentage(a: Element, b: Element): number {
  const seed = (ELEMENT_LABEL[a].length + ELEMENT_LABEL[b].length) % 9
  return 70 + seed // 70–78%
}

/**
 * Compare two Kua or Driver numbers (1–9) and return compatibility status,
 * percentage, and bridging remedies when elements clash.
 */
export function getCompatibility(num1: number, num2: number): CompatibilityResult {
  const elementA = getElementFromNumber(num1)
  const elementB = getElementFromNumber(num2)

  const clash = findClashRule(elementA, elementB)
  if (clash) {
    return {
      personA: { number: num1, element: elementA },
      personB: { number: num2, element: elementB },
      matchStatus: 'Needs Bridging',
      matchPercentage: clash.matchPercentage,
      bridgeElement: clash.bridge,
      remedies: clash.remedies,
    }
  }

  if (elementA === elementB) {
    return {
      personA: { number: num1, element: elementA },
      personB: { number: num2, element: elementB },
      matchStatus: 'Excellent',
      matchPercentage: 96,
      bridgeElement: null,
      remedies: null,
    }
  }

  if (isProductivePair(elementA, elementB)) {
    return {
      personA: { number: num1, element: elementA },
      personB: { number: num2, element: elementB },
      matchStatus: 'Neutral',
      matchPercentage: neutralPercentage(elementA, elementB),
      bridgeElement: null,
      remedies: null,
    }
  }

  return {
    personA: { number: num1, element: elementA },
    personB: { number: num2, element: elementB },
    matchStatus: 'Neutral',
    matchPercentage: neutralPercentage(elementA, elementB),
    bridgeElement: null,
    remedies: null,
  }
}

export function elementLabel(element: Element): string {
  return ELEMENT_LABEL[element]
}

export { ELEMENT_LABEL }
