import type { Faq, FaqGroup } from './types'

/**
 * Grouped FAQ accordions (spec §8.9). The skeptic-facing questions are the
 * strongest content on the site — they are answered plainly, not deflected.
 *
 * Note: the spec drafts the outcomes question using a term on the banned-phrase
 * list in CLAUDE.md. It is asked here with compliant wording that addresses
 * exactly the same concern.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: 'booking',
    title: 'Booking & sessions',
    items: [
      {
        question: 'Are sessions online or in person?',
        answer:
          'Both. Most consultations run on Google Meet, Zoom, or a phone call, and we work with clients worldwide. In-person sessions in Hyderabad are available by appointment.',
      },
      {
        question: 'What details do you need from me?',
        answer:
          'For astrology, your date, time, and place of birth. For Vastu, a floor plan or clear photographs and the property address. For numerology, the name or number you want reviewed. Your question matters as much as the data — the more specific it is, the more useful the session.',
      },
      {
        question: 'How do I prepare?',
        answer:
          'Write down the decision you are actually facing and any dates that are fixed. If you are unsure of your birth time, tell us what you know and where it came from; we will factor the uncertainty in rather than pretending it is not there.',
      },
      {
        question: 'How quickly will you reply?',
        answer:
          'We reply to WhatsApp messages within working hours, Monday to Saturday, 9:00 AM to 9:00 PM IST.',
      },
      {
        question: 'What if I need to reschedule?',
        answer:
          'Free reschedule or cancellation with 24+ hours notice. Full refund if we cancel.',
      },
      {
        question: 'How do I pay?',
        answer:
          'By UPI, after your slot is confirmed. There is no card checkout on this site and no payment is taken before a time is agreed.',
      },
    ],
  },
  {
    id: 'approach',
    title: 'Approach & honesty',
    items: [
      {
        question: 'Do you promise specific outcomes?',
        answer:
          'No. A chart or an assessment indicates tendencies and favourable windows — it does not promise results. Anyone telling you otherwise is selling certainty that astrology cannot provide.',
      },
      {
        question: 'Do you predict death or catastrophic events?',
        answer:
          'No. We do not make predictions of that kind, and we will not frame a period as dangerous in order to sell a remedy for it.',
      },
      {
        question: 'What if a reading does not match what happens?',
        answer:
          'It happens, and we would rather say so plainly than explain it away. Timing indicates when conditions are more favourable, not what you or anyone else will choose to do. If something significant is off, tell us — it is useful information for your chart, and we will look again.',
      },
      {
        question: 'Will you pressure me to buy remedies?',
        answer:
          'No. Where a remedy is genuinely useful we will explain it and you can decide. We do not sell gemstones, yantras, or pooja packages, and there is nothing to buy beyond the consultation itself.',
      },
    ],
  },
  {
    id: 'family-compatibility',
    title: 'Family Compatibility',
    items: [
      {
        question: 'Do you analyse my in-laws without telling them?',
        answer:
          "No. Family Compatibility works from role-based dynamics — what households of a particular shape tend to expect, and where friction commonly sits. Any specific person's chart is reviewed only with that person's knowledge.",
      },
      {
        question: 'Will you tell me if a relative is going to be a problem?',
        answer:
          "No. We will not deliver a verdict about someone who is not in the room. What we will do is help you understand the family system you are joining, so you go in prepared rather than surprised.",
      },
      {
        question: 'What do I actually get from it?',
        answer:
          'A clear picture of the household you are marrying into, communication approaches that tend to work in that kind of family, and sensible timing for first visits and ceremonies.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    items: [
      {
        question: 'What happens to my birth details and floor plans?',
        answer:
          'They stay private. They are used to prepare your chart or assessment and are never shared or published.',
      },
      {
        question: 'Is the session recorded?',
        answer:
          'Only if you ask for it. Recordings are shared with you and not used for anything else.',
      },
    ],
  },
  {
    id: 'method',
    title: 'Method',
    items: [
      {
        question: 'What is the KP system?',
        answer:
          'Krishnamurti Paddhati is a method developed by K.S. Krishnamurti. Its distinguishing idea is Sub-Lord theory, which subdivides each planetary period into finer segments — useful when the question is about timing rather than general character.',
      },
      {
        question: 'Why Sub-Lord theory?',
        answer:
          'Broad planetary periods can run for years, which is too coarse to act on. Sub-divisions narrow that to a window you can actually plan around, and they make a reading falsifiable — a specific window either holds or it does not.',
      },
      {
        question: 'How is your Vastu different?',
        answer:
          'We assess first and recommend proportionately. Structural change is a last resort, not an opening suggestion, and if a property is broadly fine we will tell you that rather than manufacture a list of corrections.',
      },
      {
        question: 'Is numerology checked against my chart?',
        answer:
          'Yes. A name or number is read alongside your birth chart rather than from a standalone table, so a name that looks good numerically is not recommended if it works against your chart.',
      },
    ],
  },
]

/** Curated 5 for the homepage preview — the questions worth asking before booking anyone. */
const FEATURED_QUESTIONS = [
  'Do you promise specific outcomes?',
  'Will you pressure me to buy remedies?',
  'Do you analyse my in-laws without telling them?',
  'What is the KP system?',
  'How do I pay?',
]

export const featuredFaqs = (): Faq[] =>
  FEATURED_QUESTIONS.map((q) =>
    faqGroups.flatMap((g) => g.items).find((i) => i.question === q)
  ).filter((i): i is Faq => Boolean(i))
