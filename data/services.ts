import type { Service } from './types'
import { PRICES } from './pricing'

/**
 * All 15 services (spec §8.6). Body copy follows the voice rules in CLAUDE.md:
 * name the real technique, state what the client walks away with, promise no
 * outcomes. Every entry carries a non-empty `deliverables` array (spec §8.4.5).
 */
export const services: Service[] = [
  // ─── KP Astrology ────────────────────────────────────────────────
  {
    slug: 'career',
    pillar: 'astrology',
    title: 'Career & Education',
    subtitle: 'Job timing, course choice, and career moves — read from your chart, not from optimism.',
    description:
      'The 10th cusp Sub-Lord and your running Dasha–Bhukti periods indicate when career effort tends to convert into results. We use them to time job changes, weigh government against private roles, and pick between study paths — so you push hardest in the windows that support you.',
    metaDescription:
      'KP astrology career consultation: job change timing, course selection, promotions, government vs private, and competitive exam windows. Fixed fee, Hyderabad & online.',
    isThisForYou: [
      'You are choosing between courses or career streams and want more than a coin flip.',
      'You have been waiting on a promotion or a job change and want to know which periods favour the move.',
      'You are weighing a government post against a private offer, or a job against your own business.',
      'You are preparing for competitive exams and want to plan attempts around supportive periods.',
    ],
    included: [
      'Analysis of the 10th cusp Sub-Lord and its significators for your profession',
      'Current and upcoming Dasha–Bhukti review for career results',
      'Course and stream suitability read from the 4th, 9th, and 11th houses',
      'Government vs private indication from your chart',
      'Foreign career prospects, where the chart supports the question',
      'Timing windows for job changes and interviews',
      'Business vs employment inclination',
      'Your specific questions answered directly',
    ],
    covered: [
      {
        title: 'Course & study decisions',
        points: [
          'Stream selection after school or graduation',
          'Higher studies vs starting work',
          'Competitive exam attempt planning',
        ],
      },
      {
        title: 'Job timing',
        points: [
          'Windows where a change tends to work in your favour',
          'Promotion and increment periods',
          'Notice-period and switch timing',
        ],
      },
      {
        title: 'Direction calls',
        points: [
          'Government vs private',
          'Employment vs own business',
          'Staying in India vs a foreign role',
        ],
      },
    ],
    deliverables: [
      'Named time windows for your career question — when to push and when to hold',
      'A clear reading on the direction you asked about, with the chart factors behind it',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.career,
    duration: '30–45 min',
    related: ['muhurtham', 'business-name', 'prashna'],
  },

  {
    slug: 'marriage',
    pillar: 'astrology',
    title: 'Marriage & Relationships',
    subtitle: 'Matching, timing, and preparation for the family you are about to join.',
    description:
      'We match charts using the 7th cusp Sub-Lord — the KP factor that speaks to the marriage itself — alongside Nakshatra compatibility and the traditional Ashtakoota count, and we time marriage windows from both charts, not just one. Our Family Compatibility review then helps you prepare for the household you are joining.',
    metaDescription:
      'KP marriage matching beyond guna counting: 7th cusp Sub-Lord analysis, marriage timing for both charts, delayed marriage, Kuja Dosha, and Family Compatibility. Hyderabad & online.',
    isThisForYou: [
      'You have a match in hand and want it examined properly before families commit.',
      'Your marriage is delayed and you want to understand the timing rather than fear it.',
      'You are deciding between love and arranged paths, or weighing a second marriage.',
      'You want to understand the family you are marrying into, not just the person.',
    ],
    included: [
      'Kundali matching by 7th cusp Sub-Lord — beyond bare guna counting',
      'Ashtakoota (36-point) compatibility combined with the KP reading',
      'Marriage timing windows from both charts',
      'Delayed marriage analysis with the factors that are actually causing it',
      'Kuja / Mangal Dosha assessed for intensity and cancellation — analysis, not alarm',
      'Love vs arranged clarity where the question applies',
      'Second marriage possibility, handled respectfully',
      'Post-marriage harmony guidance',
    ],
    covered: [
      {
        title: 'Matching that goes deeper',
        points: [
          '7th cusp Sub-Lord agreement between the two charts',
          'Nakshatra compatibility read with context, not a bare score',
          'Where the charts genuinely differ, and whether it matters',
        ],
      },
      {
        title: 'Timing for both people',
        points: [
          'Marriage-supporting Dasha periods in each chart',
          'Windows where both charts align',
          'Sensible sequencing for engagement and ceremony',
        ],
      },
      {
        title: 'When marriage is delayed',
        points: [
          'The specific chart factors behind the delay',
          'Which periods change the picture',
          'Remedies proportionate to the situation — nothing sold, nothing pushed',
        ],
      },
      {
        title: 'Family Compatibility',
        points: [
          'The household you are joining, by role — not verdicts on individuals',
          'Communication approaches that tend to work in that family shape',
          'Timing for first visits and ceremonies',
        ],
      },
    ],
    deliverables: [
      'A clear matching assessment with the specific chart factors behind it',
      'Marriage timing windows drawn from both charts',
      'Written summary (PDF) within 24 hours, including preparation notes for the family you are joining',
    ],
    price: PRICES.marriageIndividual,
    duration: '45–90 min',
    tiers: [
      {
        id: 'individual',
        name: 'Individual',
        scope: 'One chart — 7th house analysis, marriage timing, Kuja Dosha analysis, basic compatibility.',
        price: PRICES.marriageIndividual,
        duration: '45 min',
      },
      {
        id: 'couple',
        name: 'Couple',
        scope: 'Both charts — detailed kundali matching, timing for both, Dasha alignment, post-marriage guidance.',
        price: PRICES.marriageCouple,
        duration: '60–75 min',
        highlight: true,
      },
      {
        id: 'family',
        name: 'Family',
        scope: 'Everything in Couple, plus the Family Compatibility review — role-based dynamics, household preparation, ceremony timing.',
        price: PRICES.marriageFamily,
        duration: '90 min',
      },
    ],
    related: ['baby-name', 'home-vastu', 'muhurtham'],
  },

  {
    slug: 'childbirth',
    pillar: 'astrology',
    title: 'Childbirth & Progeny',
    subtitle: 'Timing and clarity for one of the most personal questions a couple carries.',
    description:
      'The 5th cusp Sub-Lord and the Dasha periods of both parents indicate the windows that favour conception and childbirth. We read them carefully and tell you what the charts actually show — including where medical guidance, not astrology, is the right next step.',
    metaDescription:
      'KP astrology for childbirth and progeny: conception windows, obstacle analysis, muhurtham support for planned deliveries, and both-chart timing. Handled with care.',
    isThisForYou: [
      'You are planning for a child and want to know which periods favour conception.',
      'You have been trying for some time and want an honest reading of the chart factors involved.',
      'You have a planned C-section ahead and want muhurtham support for the date and time.',
      'You want a considered look at what your chart indicates about your children.',
    ],
    included: [
      '5th cusp Sub-Lord analysis in both charts',
      'Dasha–Bhukti windows that favour conception',
      'Obstacle analysis — what the charts indicate, stated plainly and kindly',
      'Muhurtham support for planned C-section deliveries',
      'Remedies where they are proportionate and appropriate',
      'Guidance on where astrology ends and medicine begins',
    ],
    covered: [
      {
        title: 'Conception timing',
        points: [
          'Favourable windows read from both parents’ charts',
          'Periods where waiting is the kinder plan',
          'How the current Dasha shapes the picture',
        ],
      },
      {
        title: 'When there are obstacles',
        points: [
          'The specific factors the charts show',
          'What can be supported with remedies, and what cannot',
          'A clear line: we complement medical care, never replace it',
        ],
      },
      {
        title: 'Planned deliveries',
        points: [
          'Muhurtham windows within the medically safe range your doctor gives',
          'The doctor’s advice always comes first',
        ],
      },
    ],
    deliverables: [
      'Named windows that favour your question, drawn from both charts',
      'A plain-spoken account of any obstacles the charts indicate',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.childbirth,
    duration: '45–60 min',
    related: ['baby-name', 'muhurtham', 'marriage'],
  },

  {
    slug: 'finance',
    pillar: 'astrology',
    title: 'Finance & Property',
    subtitle: 'Money flow, property timing, and dispute periods — read before you sign anything.',
    description:
      'The 2nd, 6th, and 11th cusp Sub-Lords describe how money tends to move through your chart; the 4th speaks to property. We use them to time purchases, understand unstable stretches, and read loan and inheritance questions before you commit.',
    metaDescription:
      'KP astrology for finance and property: purchase timing, money-flow analysis, loan clearance windows, inheritance, and property dispute periods. Fixed fee.',
    isThisForYou: [
      'You are close to a property purchase and want the timing checked first.',
      'Money comes in but does not stay, and you want to understand the pattern.',
      'You are carrying loans and want to know which periods support clearing them.',
      'You are in — or heading toward — a property dispute and want the timing read honestly.',
    ],
    included: [
      'Money-flow analysis from the 2nd, 6th, and 11th cusp Sub-Lords',
      'Property purchase timing from the 4th cusp and running Dasha',
      'Financially unstable periods identified in advance',
      'Loan clearance windows',
      'Inheritance indications, where the chart speaks to them',
      'Property dispute timing — when matters tend to move and when they stall',
    ],
    covered: [
      {
        title: 'Property decisions',
        points: [
          'Purchase timing that fits your chart, not just the market',
          'Sale timing when you are the one exiting',
          'Registration and Gruha Pravesham sequencing with Muhurtham',
        ],
      },
      {
        title: 'Money patterns',
        points: [
          'Why some periods leak money regardless of income',
          'Windows that support savings and investment decisions',
          'Debt clearance planning around supportive periods',
        ],
      },
      {
        title: 'Disputes & inheritance',
        points: [
          'Periods when a dispute tends to progress rather than drag',
          'What the chart indicates about inherited assets',
        ],
      },
    ],
    deliverables: [
      'Timing windows for the specific purchase, loan, or dispute you asked about',
      'A money-flow reading of your chart with the periods to watch',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.finance,
    duration: '30–45 min',
    related: ['plot-vastu', 'muhurtham', 'career'],
  },

  {
    slug: 'health',
    pillar: 'astrology',
    title: 'Health & Well-being',
    subtitle: 'Chart insight that works alongside your doctor — never instead of one.',
    description:
      'The 6th, 8th, and 12th cusp Sub-Lords describe stress-prone stretches and recovery-friendly windows in a chart. We read them to help you plan — timing a scheduled procedure, understanding a difficult patch — while your medical team leads on everything medical.',
    metaDescription:
      'KP astrology health consultation: stress patterns, recovery-supportive windows, and timing support for planned procedures. Complements medical care — never replaces it.',
    isThisForYou: [
      'You have a planned, non-urgent procedure and want supportive timing within the dates your doctor offers.',
      'You are going through a physically or mentally heavy stretch and want to understand its shape and duration.',
      'You want to know which upcoming periods ask for more care and rest.',
    ],
    included: [
      'Analysis of the 6th, 8th, and 12th cusp Sub-Lords',
      'Stress-prone and recovery-friendly periods in your current Dasha',
      'Timing support for planned procedures — always within medically approved dates',
      'Well-being patterns: sleep, stress, and energy tendencies the chart describes',
      'Proportionate remedies where appropriate',
      'A written note of periods that ask for extra care',
    ],
    covered: [
      {
        title: 'Planning around your chart',
        points: [
          'Periods that tend to tax you, so you can lighten the load in advance',
          'Recovery-friendly windows after a procedure or illness',
        ],
      },
      {
        title: 'Procedure timing',
        points: [
          'Choosing among the dates your doctor has already approved',
          'Muhurtham support where families want it',
        ],
      },
      {
        title: 'Stress & mind',
        points: [
          'What the chart says about your stress pattern',
          'Practical, non-commercial remedies — rest, routine, and timing',
        ],
      },
    ],
    deliverables: [
      'A calendar of periods that ask for extra care, and windows that support recovery',
      'Timing input for any planned procedure, within your doctor’s approved dates',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.health,
    duration: '30 min',
    disclaimer:
      'This is not medical advice or diagnosis. Always consult a qualified doctor. Astrological input here is limited to timing and general well-being patterns, and your medical team’s guidance always takes precedence.',
    related: ['prashna', 'muhurtham', 'home-vastu'],
  },

  {
    slug: 'muhurtham',
    pillar: 'astrology',
    title: 'Muhurtham',
    subtitle: 'Dates and times chosen from your chart — not from a generic panchang list.',
    description:
      'A muhurtham worth using has to clear two bars: the moment itself must be sound, and it must agree with the charts of the people acting in it. We select windows for marriages, Gruha Pravesham, business openings, vehicle purchases, naming ceremonies, and travel against both.',
    metaDescription:
      'Personalised muhurtham selection: marriage, Gruha Pravesham, business opening, vehicle purchase, naming ceremony, and travel dates checked against your own chart.',
    isThisForYou: [
      'You have a ceremony ahead and the family wants dates that are genuinely checked, not copied from a calendar.',
      'You are opening a business or moving into a new home and want the timing to work with your chart.',
      'You need a date range narrowed to specific, usable time slots.',
    ],
    included: [
      'Muhurtham windows selected against the principal’s own chart',
      'Marriage muhurtham for both charts',
      'Gruha Pravesham timing',
      'Business opening and first-transaction timing',
      'Vehicle purchase and first-drive timing',
      'Namakaranam (naming ceremony) dates',
      'Travel departure windows for significant journeys',
    ],
    covered: [
      {
        title: 'Ceremonies',
        points: [
          'Marriage, engagement, and Namakaranam',
          'Gruha Pravesham for a new or renovated home',
        ],
      },
      {
        title: 'Beginnings',
        points: [
          'Business openings and registrations',
          'Vehicle purchase and delivery timing',
          'Journey departures that matter',
        ],
      },
      {
        title: 'How we select',
        points: [
          'Panchang factors screened first',
          'Then checked against the charts of the people involved',
          'Practical constraints respected — venue, family, season',
        ],
      },
    ],
    deliverables: [
      'A favourable date range plus specific time slots — and dates to avoid',
      'The reasoning for each recommended window, stated plainly',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.muhurtham,
    duration: '30–45 min',
    related: ['home-vastu', 'marriage', 'business-name'],
  },

  {
    slug: 'prashna',
    pillar: 'astrology',
    title: 'Horary / Prashna',
    subtitle: 'A focused answer when you do not have birth details — or time to wait.',
    description:
      'KP horary works from a number you give between 1 and 249, which fixes the chart for your question at the moment you ask it. It suits urgent, well-defined questions — a yes/no decision, a lost item, whether a stuck matter will move — without needing your birth details at all.',
    metaDescription:
      'KP Prashna (horary) reading: urgent yes/no questions, lost items, and result timing answered from a 1–249 number — no birth details needed. 15-minute session.',
    isThisForYou: [
      'You need an answer to one specific question, quickly.',
      'You do not know your birth time, or the question concerns someone whose details you do not have.',
      'Something is lost — an item, a document, a response — and you want to know if it returns.',
    ],
    included: [
      'One clearly framed question, answered',
      'KP horary chart cast from your 1–249 number',
      'Yes/no verdict where the question allows one',
      'Result timing, where the chart indicates it',
      'A short written note of the answer and its basis',
    ],
    covered: [
      {
        title: 'Good Prashna questions',
        points: [
          'Will this deal / transfer / approval go through?',
          'Will the lost item be recovered?',
          'Is this offer worth pursuing?',
        ],
      },
      {
        title: 'How it works',
        points: [
          'You give a number between 1 and 249',
          'The chart for that number and moment is read for your question',
          'The narrower the question, the sharper the answer',
        ],
      },
    ],
    deliverables: [
      'A direct answer to your question, with timing where the chart shows it',
      'A short written note of the reading',
    ],
    price: PRICES.prashna,
    duration: '15 min',
    related: ['career', 'finance', 'muhurtham'],
  },

  // ─── Vastu ───────────────────────────────────────────────────────
  {
    slug: 'home-vastu',
    pillar: 'vastu',
    title: 'Home Vastu',
    subtitle: 'A room-by-room assessment of the home you actually live in.',
    description:
      'We review your floor plan and how the house is really used — entrances, kitchen, bedrooms, water and fire placements, storage and clutter — and recommend corrections in proportion. Most homes need adjustment, not demolition, and we will tell you which is which.',
    metaDescription:
      'Home Vastu assessment from your floor plan: entrances, kitchen, bedrooms, and placements reviewed room by room, with practical remedies that do not start with demolition.',
    isThisForYou: [
      'You are moving into a new home and want it assessed before the Gruha Pravesham.',
      'Something has felt persistently off — sleep, health, money — since you moved in.',
      'You are renovating anyway and want Vastu input while changes are still cheap.',
    ],
    included: [
      'Full floor-plan review with directional analysis',
      'Entrance, kitchen, bedroom, and pooja room placement assessment',
      'Water and fire element positions checked',
      'Room-by-room usage recommendations',
      'Corrections ranked: free changes first, then minor works, structural last',
      'Follow-up clarifications on WhatsApp after the session',
    ],
    covered: [
      {
        title: 'The load-bearing rooms',
        points: [
          'Main entrance direction and what actually enters through it',
          'Kitchen and fire placement',
          'Master bedroom and sleep direction',
        ],
      },
      {
        title: 'Placements & elements',
        points: [
          'Water sources and storage — borewell, tanks, aquariums',
          'Heavy storage and clutter zones',
          'Pooja room positioning',
        ],
      },
      {
        title: 'Proportionate remedies',
        points: [
          'Usage and furniture changes that cost nothing',
          'Minor corrections where they earn their keep',
          'A straight answer when something is fine as it is',
        ],
      },
    ],
    deliverables: [
      'A room-by-room written assessment of your floor plan',
      'A prioritised correction list — free changes first, structural work only if genuinely warranted',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.homeVastu,
    duration: '45–60 min',
    related: ['muhurtham', 'plot-vastu', 'vastu-remedies'],
  },

  {
    slug: 'office-vastu',
    pillar: 'vastu',
    title: 'Office Vastu',
    subtitle: 'Layout guidance for the place your work and money actually happen.',
    description:
      'Workspaces respond to layout: where the owner sits, where cash is handled, how staff and customers flow through the space. We assess your office, shop, or unit from its plan and usage, and recommend changes that respect the fact that you have a business to run.',
    metaDescription:
      'Office and shop Vastu: owner cabin placement, cash counter position, staff seating, and customer flow assessed from your layout — corrections that fit a working business.',
    isThisForYou: [
      'You are fitting out a new office or shop and the layout is still on paper.',
      'The business works hard but retention — of staff, customers, or cash — feels leaky.',
      'You are choosing between units in a building and want them compared.',
    ],
    included: [
      'Layout review with directional analysis',
      'Owner / decision-maker seating position',
      'Cash counter, safe, and accounts placement',
      'Staff seating and department arrangement',
      'Customer entry and flow assessment',
      'Corrections ranked by cost and disruption',
    ],
    covered: [
      {
        title: 'The seats that matter',
        points: [
          'Owner cabin direction and facing',
          'Finance and cash-handling positions',
          'Sales and reception placement',
        ],
      },
      {
        title: 'Flow',
        points: [
          'Customer entry path and what greets it',
          'Stock and storage zones',
          'Pantry, washrooms, and utilities',
        ],
      },
      {
        title: 'Working-business remedies',
        points: [
          'Rearrangements before renovations',
          'Corrections sequenced so trade is not interrupted',
        ],
      },
    ],
    deliverables: [
      'A written layout assessment with specific seating and placement recommendations',
      'A prioritised correction plan sequenced around business hours',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.officeVastu,
    duration: '45–60 min',
    related: ['business-name', 'plot-vastu', 'muhurtham'],
  },

  {
    slug: 'plot-vastu',
    pillar: 'vastu',
    title: 'Plot Vastu',
    subtitle: 'Evaluate the land before the money leaves your account.',
    description:
      'A plot’s shape, slope, orientation, and surroundings are the one part of a property you can never renovate. We assess land before you buy or build — including comparing shortlisted plots — so the biggest purchase of your life starts on ground that works for you.',
    metaDescription:
      'Plot Vastu before you buy: shape, slope, orientation, road position, and surroundings assessed — including side-by-side comparison of shortlisted plots.',
    isThisForYou: [
      'You are shortlisting plots and want them compared before booking.',
      'You already own land and are deciding how to orient the construction.',
      'A plot is priced suspiciously well and you want to know what the ground says.',
    ],
    included: [
      'Shape and proportion analysis',
      'Slope and level assessment',
      'Road position and approach direction',
      'Surroundings review — water bodies, structures, and what borders the land',
      'Construction orientation guidance if you build',
      'Side-by-side comparison when you bring more than one plot',
    ],
    covered: [
      {
        title: 'The land itself',
        points: [
          'Shape: what is workable, what to avoid, what can be corrected at boundary',
          'Slope and drainage direction',
          'Soil and site context as far as a plan shows it',
        ],
      },
      {
        title: 'Position',
        points: [
          'Road-facing direction and cut positions',
          'T-junctions and approach lines',
          'Neighbouring structures and water bodies',
        ],
      },
      {
        title: 'If you build',
        points: [
          'Placement of the built mass on the plot',
          'Entrance and gate orientation',
          'Sequencing with Muhurtham for ground-breaking',
        ],
      },
    ],
    deliverables: [
      'A clear buy / avoid / workable-with-corrections reading for each plot reviewed',
      'Orientation guidance for any future construction',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.plotVastu,
    duration: '30–45 min',
    related: ['finance', 'home-vastu', 'muhurtham'],
  },

  {
    slug: 'vastu-remedies',
    pillar: 'vastu',
    title: 'Vastu Remedies',
    subtitle: 'Fix what can be fixed — without breaking walls.',
    description:
      'Most Vastu issues in an occupied property can be reduced with usage changes, placement corrections, and element balancing; only a minority justify construction. This session takes a known issue — yours or one flagged in an earlier assessment — and builds a remedy plan that is proportionate to it.',
    metaDescription:
      'Practical Vastu remedies for occupied homes and offices: usage changes, placement corrections, and element balancing — demolition treated as a last resort.',
    isThisForYou: [
      'An assessment (ours or another’s) flagged issues and you want a workable fix list.',
      'You rent, so structural change is off the table — you need remedies that move with you.',
      'You were told something needs demolition and want a second, calmer opinion.',
    ],
    included: [
      'Review of the flagged issue and its actual severity',
      'Usage and room-function corrections',
      'Placement remedies — mirrors, heavy items, water, and light',
      'Element balancing appropriate to the direction involved',
      'Renter-safe options where structure cannot change',
      'A straight answer on whether construction is genuinely warranted',
    ],
    covered: [
      {
        title: 'No-cost corrections',
        points: [
          'Changing what a room is used for',
          'Sleeping, seating, and desk direction changes',
          'Decluttering the zones that carry weight',
        ],
      },
      {
        title: 'Low-cost corrections',
        points: [
          'Placement of water, plants, and heavy objects',
          'Lighting and colour adjustments by direction',
        ],
      },
      {
        title: 'When structure is real',
        points: [
          'The few cases where construction genuinely helps',
          'Sequencing structural work with Muhurtham',
        ],
      },
    ],
    deliverables: [
      'A prioritised remedy plan for the specific issue, cheapest effective option first',
      'An honest severity assessment — including when no action is needed',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.vastuRemedies,
    duration: '30–45 min',
    related: ['home-vastu', 'office-vastu', 'muhurtham'],
  },

  // ─── Numerology ──────────────────────────────────────────────────
  {
    slug: 'name-analysis',
    pillar: 'numerology',
    title: 'Name Analysis',
    subtitle: 'A spelling that supports your chart — checked, not guessed.',
    description:
      'Your name’s numbers are read against your birth chart, not from a standalone table: a spelling that scores well in isolation can still work against your chart’s timing. We analyse your current name, and where a change helps, we keep it small — a spelling adjustment you can actually live with.',
    metaDescription:
      'Name numerology cross-checked with your birth chart: current-name analysis and minimal spelling adjustments that you can actually use on documents.',
    isThisForYou: [
      'You have wondered for years whether your name spelling works for you.',
      'A previous numerologist suggested a drastic change you never adopted.',
      'You are at a turning point — new career, new city — and want the name checked first.',
    ],
    included: [
      'Full analysis of your current name’s numbers',
      'Cross-check against your birth chart and current Dasha',
      'Minimal-change spelling options, if change helps at all',
      'Practical rollout advice — documents, signatures, daily use',
      'A straight answer when your existing name is fine',
    ],
    covered: [
      {
        title: 'Your name as it stands',
        points: [
          'Read from expression numbers and chart fit — not a one-line score from a table',
          'Where the current spelling supports you and where it rubs',
        ],
      },
      {
        title: 'If a change helps',
        points: [
          'Spelling adjustments over wholesale renames',
          'Options ranked by chart fit and practicality',
        ],
      },
      {
        title: 'Living with it',
        points: [
          'Which documents matter and which do not',
          'Signature and daily-use guidance',
        ],
      },
    ],
    deliverables: [
      'A written verdict on your current name — keep, adjust, or change, with reasons',
      'Ranked spelling options where adjustment helps',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.nameAnalysis,
    duration: '30–45 min',
    related: ['baby-name', 'business-name', 'career'],
  },

  {
    slug: 'baby-name',
    pillar: 'numerology',
    title: 'Baby Name',
    subtitle: 'Names parents actually want to use, with number harmony built in.',
    description:
      'We start from the child’s birth chart and Nakshatra syllables, then work with names your family already loves — checking each against the chart rather than handing you a list of strangers’ names. The result is a shortlist you would have been happy with anyway, now verified.',
    metaDescription:
      'Baby name numerology from the child’s birth chart and Nakshatra syllables: your family’s shortlist checked and refined, not replaced with a generic list.',
    isThisForYou: [
      'A baby has arrived — congratulations — and the family shortlist needs a verdict.',
      'You want the Nakshatra syllable honoured without being limited to odd choices.',
      'The Namakaranam is scheduled and you want the name settled with confidence.',
    ],
    included: [
      'Child’s birth chart and Nakshatra syllable derivation',
      'Analysis of every name on your family’s shortlist',
      'Spelling refinements that improve number harmony',
      'Additional suggestions only if the shortlist genuinely falls short',
      'Sibling and parent name harmony check on request',
      'Namakaranam muhurtham coordination if needed',
    ],
    covered: [
      {
        title: 'Starting from the chart',
        points: [
          'Janma Nakshatra and pada syllables',
          'The chart factors a name should support',
        ],
      },
      {
        title: 'Your shortlist, checked',
        points: [
          'Each candidate name scored against the chart',
          'Spelling variants that lift a near-miss into a good fit',
        ],
      },
      {
        title: 'The practical bits',
        points: [
          'How the name reads, shortens, and travels',
          'Birth certificate and document spelling locked early',
        ],
      },
    ],
    deliverables: [
      'A verified shortlist with each name’s chart fit explained',
      'Final spelling recommendation for documents',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.babyName,
    duration: '30–45 min',
    related: ['childbirth', 'name-analysis', 'muhurtham'],
  },

  {
    slug: 'business-name',
    pillar: 'numerology',
    title: 'Business Name',
    subtitle: 'Check the name against your chart before it goes on the board.',
    description:
      'A business name is checked three ways: its own numbers, its fit with the founder’s chart, and its fit with the launch timing. We run all three before you print, register, or file — because changing a name after the branding exists is expensive in every sense.',
    metaDescription:
      'Business name numerology: candidate names checked against their own numbers, the founder’s birth chart, and launch timing — before registration and branding.',
    isThisForYou: [
      'You are naming a new venture and have two or three candidates on the table.',
      'You are rebranding and want the new name checked before the expense.',
      'A partnership needs a name that sits well with more than one founder’s chart.',
    ],
    included: [
      'Analysis of each candidate name’s numbers',
      'Cross-check against the founder’s (or founders’) chart',
      'Launch timing fit with your current Dasha',
      'Spelling and styling variants that improve the fit',
      'Registration sequencing with Muhurtham if wanted',
      'A clear ranking of your candidates with reasons',
    ],
    covered: [
      {
        title: 'The name itself',
        points: [
          'Expression numbers of each candidate',
          'How the trading name differs from the registered name, and which matters when',
        ],
      },
      {
        title: 'Fit with the founder',
        points: [
          'Your chart’s business houses and what supports them',
          'Multi-founder harmony where there are partners',
        ],
      },
      {
        title: 'Fit with the moment',
        points: [
          'Launch window compatibility',
          'Sequencing naming, registration, and opening',
        ],
      },
    ],
    deliverables: [
      'A ranked verdict on your candidate names with the reasoning for each',
      'Final spelling recommendation for registration and branding',
      'Written summary (PDF) within 24 hours of the session',
    ],
    price: PRICES.businessName,
    duration: '30–45 min',
    related: ['office-vastu', 'career', 'muhurtham'],
  },

  {
    slug: 'mobile-number',
    pillar: 'numerology',
    title: 'Mobile Number',
    subtitle: 'A method-first read on the number you will give out for years.',
    description:
      'A mobile number is the number strangers, clients, and family use to reach you daily — worth ten minutes of method before you commit to it. We reduce and read candidate numbers against your chart, and rank the options you actually have available, not a fantasy number you cannot buy.',
    metaDescription:
      'Mobile number numerology checked against your birth chart: candidate numbers ranked with reasons — practical selection, not superstition about single digits.',
    isThisForYou: [
      'You are taking a new number and the operator offered you a list to choose from.',
      'You use one number for business and want it aligned with that purpose.',
      'You are sceptical of number-picking mysticism but curious what a method-first read says.',
    ],
    included: [
      'Reduction and reading of each candidate number',
      'Cross-check against your birth chart',
      'Purpose fit — personal, business, or both',
      'Ranking of your available candidates with reasons',
      'A straight answer when your current number is fine',
    ],
    covered: [
      {
        title: 'How a number is read',
        points: [
          'Full-number reduction, not just the last digit',
          'Repeating patterns and what they emphasise',
        ],
      },
      {
        title: 'Fit with you',
        points: [
          'Your chart’s communication and business factors',
          'Personal vs business number division',
        ],
      },
    ],
    deliverables: [
      'A ranked list of your candidate numbers with plain-language reasons',
      'A keep-or-change verdict on your existing number',
    ],
    price: PRICES.mobileNumber,
    duration: '20–30 min',
    related: ['name-analysis', 'business-name', 'career'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const servicesByPillar = (pillar: Service['pillar']) =>
  services.filter((s) => s.pillar === pillar)
