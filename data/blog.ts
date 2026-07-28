export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  paragraphs: string[]
}

/** Structure only, per spec §8.11 — 3 static placeholder posts, no CMS. */
export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-the-kp-sub-lord-system',
    title: 'What is the KP Sub-Lord system?',
    excerpt:
      'Why Krishnamurti Paddhati subdivides planetary periods, and what that precision is actually for.',
    paragraphs: [
      "Traditional Vedic astrology reads a birth chart through Dasha periods — stretches of years ruled by one planet at a time. That is useful for understanding a life's broad themes, but it is too coarse for a specific, timed decision: \"will this job offer work out\" is not answered well by a five-year window.",
      "Krishnamurti Paddhati, developed by K.S. Krishnamurti, addresses this with Sub-Lord theory. Each house cusp is assigned a Sub-Lord — a finer planetary influence layered inside the broader period — and that Sub-Lord is what actually decides whether a house's matters are promised, delayed, or denied.",
      'In practice, this turns a vague multi-year period into a specific, checkable window. A marriage question is read through the 7th cusp Sub-Lord and the current Dasha–Bhukti; a career question through the 10th. The reading either holds up against what happens or it does not — which is exactly the kind of precision worth paying for.',
      'It is also why we do not deal in broad-strokes yearly forecasts. If a technique cannot narrow a question to a usable window, it is not the technique we reach for.',
    ],
  },
  {
    slug: 'vastu-without-demolition-what-actually-matters',
    title: 'Vastu without demolition: what actually matters',
    excerpt:
      'Most Vastu corrections in an occupied home are about usage and placement — not walls.',
    paragraphs: [
      'A common complaint about Vastu consultations is that they seem to always end the same way: break this wall, move that door, rebuild the kitchen. That is a sign of a consultation optimised for drama, not for the client.',
      'In our experience, the large majority of issues in an occupied home or office are addressed with usage changes — what a room is used for, how furniture and heavy items are placed, where water and fire elements sit relative to the rest of the space — before structural change is ever considered.',
      'Renters, in particular, often assume Vastu has nothing to offer them because they cannot alter walls. That is not true. Sleeping direction, desk orientation, storage placement, and decluttering carry real weight and travel with you to the next home.',
      'Structural change is not off the table — sometimes it is genuinely the right call, and we will say so plainly when it is. But it is the last option we reach for, not the first one we suggest.',
    ],
  },
  {
    slug: 'how-we-check-a-baby-name-against-the-chart',
    title: 'How we check a baby name against the chart',
    excerpt:
      'We start from your family shortlist and the child’s Nakshatra — not a list of strangers’ names.',
    paragraphs: [
      'A common numerology experience is handing over a name and getting back a list of unfamiliar alternatives that score well on paper but that no one in the family actually likes. We take the opposite approach.',
      'We start with the child’s birth chart and derive the Janma Nakshatra and its associated naming syllable. That syllable is the one traditional constraint most families already want honoured.',
      'From there, we work through your own shortlist — names the family has already been considering — and check each one for numerical harmony with the chart. Where a name is close but not quite aligned, a small spelling adjustment is usually enough; we rarely need to suggest a name you have not already thought of.',
      'The result is a name your family would have chosen anyway, now checked rather than guessed.',
    ],
  },
]

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug)
