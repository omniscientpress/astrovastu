/**
 * Flagship extras for the Marriage page (spec §8.5).
 *
 * Family Compatibility follows the mandatory reframe in spec §6: role-based
 * dynamics and preparation for the client — never verdicts about individuals,
 * no conflict matrix, no crisis prediction, no power-dynamics map. Any
 * relative's chart is reviewed only with that person's knowledge.
 */

export const familyRoles = [
  {
    role: 'Mother-in-law',
    telugu: 'అత్తగారు (Athagaru)',
    description:
      'Often the keeper of the household’s rhythms — kitchens, festivals, and daily standards. We help you read which traditions carry weight in this family and how to build your own place alongside them rather than against them.',
  },
  {
    role: 'Father-in-law',
    telugu: 'మావగారు (Mavagaru)',
    description:
      'Frequently the household’s decision anchor on money and property. We look at how families of this shape tend to make big calls, and where a new member’s voice usually enters that process.',
  },
  {
    role: 'Sister-in-law',
    telugu: 'మరదలు (Maradalu)',
    description:
      'Often your first peer in the new family — and the relationship with the most room to become an alliance. We cover the early-days dynamics that tend to set its tone.',
  },
  {
    role: 'Brother-in-law',
    telugu: 'బావ (Bava)',
    description:
      'Sibling bonds shape how a household absorbs a newcomer. We help you understand the existing loyalties you are joining, and the patience the first year usually asks for.',
  },
  {
    role: 'Extended family',
    telugu: 'బంధువులు',
    description:
      'Grandparents, uncles, aunts — the wider circle that surfaces at ceremonies and decisions. We map which occasions matter most in families like the one you are joining, and how to show up well for them.',
  },
] as const

export const analysisFactors = [
  {
    title: '7th cusp Sub-Lord',
    description:
      'The KP factor that speaks to the marriage itself — examined in both charts and checked for agreement.',
  },
  {
    title: 'Venus & Jupiter placement',
    description:
      'The classical significators for partnership and blessing, read for strength and affliction in each chart.',
  },
  {
    title: 'Dasha periods for both charts',
    description:
      'Whether the two charts’ running and upcoming periods support marriage in an overlapping window.',
  },
  {
    title: 'Kuja / Mangal Dosha',
    description:
      'Assessed for intensity and cancellation factors, and stated as analysis — a factor to weigh, never a threat to fear.',
  },
  {
    title: 'Nakshatra compatibility',
    description:
      'Star-level matching read with context: what a low or high score actually means for these two charts.',
  },
  {
    title: 'Ashtakoota with KP cross-check',
    description:
      'The traditional 36-point count, combined with Sub-Lord analysis so a bare score never decides the question alone.',
  },
] as const

export const marriageHonestyNote =
  'Matching indicates compatibility tendencies and favourable timing. It does not predict whether a marriage will succeed — that depends on the people in it.'

export const familyConsentNote =
  "Family Compatibility describes household dynamics by role — it is preparation for you, not a report card on your in-laws. Any family member's chart is reviewed only with that person's knowledge."
