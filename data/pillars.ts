import type { Pillar } from './types'

export interface PillarInfo {
  pillar: Pillar
  /** Route segment under /services/. */
  path: string
  name: string
  /** One-sentence navy hero line: what this discipline answers. */
  heroLine: string
  /** Plain-voice tagline used on the hub cards (spec §8.2). */
  tagline: string
  metaDescription: string
  /** "Best for" situation list (spec §8.3). */
  bestFor: string[]
  /** "How {pillar} works here" explainer. */
  explainer: {
    heading: string
    paragraphs: string[]
  }
}

export const pillars: PillarInfo[] = [
  {
    pillar: 'astrology',
    path: 'astrology',
    name: 'KP Astrology',
    heroLine: 'When to act — and when to wait — on career, marriage, family, and money decisions.',
    tagline: 'When to act — career, marriage, muhurtham, and timing windows',
    metaDescription:
      'KP (Krishnamurti Paddhati) astrology consultations: career, marriage, childbirth, finance, health timing, muhurtham, and Prashna — Sub-Lord analysis with fixed fees.',
    bestFor: [
      'Timing a job change, marriage, or property purchase',
      'Matching charts before families commit',
      'Choosing muhurtham dates that agree with your own chart',
      'A focused Prashna answer when there are no birth details to hand',
    ],
    explainer: {
      heading: 'How KP Astrology works here',
      paragraphs: [
        'Krishnamurti Paddhati, developed by K.S. Krishnamurti, refines traditional astrology with Sub-Lord theory: each planetary period is subdivided into finer segments, which turns a vague multi-year window into something you can actually plan around.',
        'That precision cuts both ways — a specific window either holds or it does not. We consider that a feature. You get named periods and the chart factors behind them, not unfalsifiable generalities.',
      ],
    },
  },
  {
    pillar: 'vastu',
    path: 'vastu',
    name: 'Vastu',
    heroLine: 'Whether a space — home, office, or bare land — is working for the people in it.',
    tagline: 'Space that works — home, office, and plot guidance without demolition-first advice',
    metaDescription:
      'Vastu assessments for homes, offices, and plots: floor-plan review, placement corrections, and proportionate remedies — demolition treated as a last resort.',
    bestFor: [
      'Assessing a home before you move in or renovate',
      'Laying out an office or shop around the seats that matter',
      'Evaluating a plot before the purchase, not after',
      'Fixing a flagged issue without structural work',
    ],
    explainer: {
      heading: 'How Vastu works here',
      paragraphs: [
        'Assessment comes first. We review the plan and how the space is actually used, then rank corrections by cost: usage changes and placements before minor works, and structural change only where it genuinely earns its place.',
        'If a property is broadly fine, we say so. A Vastu review that manufactures a correction list for every client is selling anxiety, not assessment.',
      ],
    },
  },
  {
    pillar: 'numerology',
    path: 'numerology',
    name: 'Numerology',
    heroLine: 'Whether a name or number — personal, baby, business, or mobile — supports the chart behind it.',
    tagline: 'Names and numbers checked against your chart — not random luck',
    metaDescription:
      'Numerology cross-checked with your birth chart: name analysis, baby names, business names, and mobile numbers — practical recommendations you can actually use.',
    bestFor: [
      'Settling a name spelling you have doubted for years',
      'Verifying the family’s baby-name shortlist',
      'Checking a business name before registration and branding',
      'Choosing a mobile number from the options you actually have',
    ],
    explainer: {
      heading: 'How Numerology works here',
      paragraphs: [
        'Every name and number is read against your birth chart, not from a standalone table. A spelling that scores well in isolation can still work against your chart’s timing — the cross-check is the whole point.',
        'Recommendations stay practical: minimal spelling adjustments over dramatic renames, and candidates you can actually register, buy, or live with.',
      ],
    },
  },
]

export const getPillar = (path: string) => pillars.find((p) => p.path === path)
