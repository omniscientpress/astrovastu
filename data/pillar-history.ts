import type { Pillar } from './types'

export interface HistoryBlock {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'table'
  text?: string
  items?: string[]
  headers?: string[]
  rows?: string[][]
}

export interface PillarHistory {
  pillar: Pillar
  path: string
  title: string
  metaDescription: string
  backHref: string
  backLabel: string
  linkLabel: string
  blocks: HistoryBlock[]
}

export const pillarHistories: PillarHistory[] = [
  {
    pillar: 'astrology',
    path: 'astrology',
    title: 'What is the KP System (Krishnamurti Paddhati)? A Complete Guide',
    metaDescription:
      'A complete guide to the KP System (Krishnamurti Paddhati): Sub-Lord theory, Placidus houses, significators, Ruling Planets, Prashna, and how it differs from traditional Vedic astrology.',
    backHref: '/services/astrology',
    backLabel: 'KP Astrology',
    linkLabel: 'Know more about the KP System',
    blocks: [
      {
        type: 'p',
        text: 'In the vast world of astrology, pinpointing the exact timing of an event has always been the ultimate challenge. While traditional Vedic astrology provides a profound roadmap of life, karma, and personality, many seekers and astrologers often find themselves wanting more precise, definitive answers. Enter the KP System, or Krishnamurti Paddhati — a logic-driven astrological method renowned for its surgical precision, clear yes-or-no answers, and specific timing of life events.',
      },
      {
        type: 'p',
        text: 'Whether you are an astrology enthusiast, a practising astrologer, or someone seeking precise answers about your future, understanding the KP System can completely transform how you view astrological predictions. Here is a comprehensive guide into what the KP System is, how it works, and why it is considered one of the most precise predictive systems in use today.',
      },
      { type: 'h2', text: 'The Origin: Who Developed the KP System?' },
      {
        type: 'p',
        text: 'The Krishnamurti Paddhati (KP System) was developed in the mid-20th century by the legendary Indian astrology master, Prof. K.S. Krishnamurti (1902–1972). Drawing from his deep knowledge of ancient Vedic texts and Western astrological concepts, Prof. Krishnamurti realised that traditional methods sometimes offered too many broad alternatives, making exact predictions difficult.',
      },
      {
        type: 'p',
        text: 'To solve this, he undertook decades of research, synthesising the Nakshatra-based (stellar) predictions of Hindu astrology with the precise house division methods of Western astrology. The result was the KP System — a highly structured, scientific, and rule-based framework that eliminates guesswork and ambiguity.',
      },
      { type: 'h2', text: 'Core Principles of the KP System (Krishnamurti Paddhati)' },
      {
        type: 'p',
        text: 'The genius of KP Astrology lies in its departure from generic planetary placements. Instead of just looking at which zodiac sign a planet is in, KP astrology digs much deeper. Here are the foundational pillars of the system:',
      },
      { type: 'h3', text: '1. The Sub-Lord Theory: The Game Changer' },
      {
        type: 'p',
        text: 'In traditional Vedic astrology, the zodiac is divided into 27 Nakshatras (constellations or stars), each spanning 13 degrees and 20 minutes. Prof. Krishnamurti took this a step further by dividing each Nakshatra into 9 unequal sub-divisions, proportional to the years allocated to planets in the Vimshottari Dasha system.',
      },
      {
        type: 'p',
        text: 'This created 249 unique Sub-Lords across the zodiac. In the KP System, a planet is judged based on three levels:',
      },
      {
        type: 'ul',
        items: [
          'The Planet (Source): Indicates what is likely to happen.',
          'The Star Lord (Effect): The planetary ruler of the Nakshatra dictates the primary results and activates the houses.',
          'The Sub-Lord (Final Determinant): The ultimate deciding factor. It dictates whether the promised event will actually materialise, be delayed, or be denied.',
        ],
      },
      { type: 'h3', text: '2. The Placidus House System (Cuspal System)' },
      {
        type: 'p',
        text: 'While traditional Vedic astrology often uses the Whole Sign house system (where one zodiac sign equals one house), KP astrology uses the Western Placidus House System.',
      },
      {
        type: 'p',
        text: 'Because the Earth is a sphere, houses are not actually perfectly equal in size depending on your latitude and the time of birth. In the Placidus system, a house (Bhava) starts at a specific degree (the Cusp) and can span more or less than 30 degrees. Therefore, the Cuspal Sub-Lord — the Sub-Lord of the exact degree where a house begins — is the ultimate authority on all matters related to that house. For example, the Sub-Lord of your 7th house cusp will definitively answer questions about marriage.',
      },
      { type: 'h3', text: '3. Planetary Significators (The 4-Step Theory)' },
      {
        type: 'p',
        text: 'In KP astrology, planets do not give results merely based on their natural benefic or malefic nature. They act as Significators for specific houses through a strict, four-level hierarchy:',
      },
      {
        type: 'ol',
        items: [
          'A planet in the star of an occupant of a house (strongest).',
          'The occupant of a house itself.',
          'A planet in the star of the lord of a house.',
          'The lord of the house (weakest).',
        ],
      },
      {
        type: 'p',
        text: 'This chain provides unmatched specificity, revealing exactly which areas of life a planet will trigger during its Dasha (planetary period).',
      },
      { type: 'h3', text: '4. Ruling Planets (RPs)' },
      {
        type: 'p',
        text: 'Prof. Krishnamurti introduced the concept of Ruling Planets as guidance at the exact moment of judgment. The planets ruling the Ascendant sign, Ascendant star, Moon sign, Moon star, and the Day Lord at the time an astrologer is analysing a chart act as a charting compass. RPs are incredibly useful for verifying predictions, narrowing the timing of an event, and rectifying unknown birth times.',
      },
      { type: 'h2', text: 'KP System vs. Traditional Vedic Astrology' },
      {
        type: 'p',
        text: 'While KP Astrology is a branch born out of Vedic astrology, its predictive execution is vastly different. Here is a quick breakdown of how they compare:',
      },
      {
        type: 'table',
        headers: ['Feature', 'Traditional Vedic Astrology', 'KP System (Krishnamurti Paddhati)'],
        rows: [
          ['House Division', 'Whole Sign System (Equal Houses)', 'Placidus House System (Unequal Houses)'],
          ['Ayanamsa', 'Lahiri (Chitrapaksha)', 'KP Ayanamsa (slightly different calculation)'],
          ['Primary Focus', 'Zodiac Signs, Planetary Dignity, Yogas', 'Nakshatras, Star Lords, and Sub-Lords'],
          ['Core Determinant', 'Planetary Placements & Aspects', 'The Cuspal Sub-Lord'],
          ['Strengths', 'Broad life patterns, psychology, spirituality', 'Pinpoint event timing, specific yes/no questions'],
          ['Divisional Charts', 'Relies heavily on Navamsa, Dasamsa, etc.', 'Discards divisional charts; relies on Sub-Lords'],
        ],
      },
      { type: 'h2', text: 'Horary Astrology (Prashna) in the KP System' },
      {
        type: 'p',
        text: 'One of the most celebrated features of the Krishnamurti Paddhati is its mastery of Horary Astrology (Prashna Shastra). Often, people do not know their exact birth time, making precise astrological predictions nearly impossible. The KP System solves this elegantly with the 1 to 249 Number System.',
      },
      {
        type: 'p',
        text: 'When a client has a burning question (e.g., "Will I get this job?" or "Will my lost item be found?"), they are asked to pick a random number between 1 and 249. This number corresponds to one of the 249 Sub-Lords in the zodiac, which becomes the Ascendant for the Horary chart. The astrologer then erects a chart for the exact time and location of the query.',
      },
      {
        type: 'p',
        text: 'If the Sub-Lord of the relevant house (like the 10th house for a job) signifies favourable houses (2, 6, 10, 11), the answer is a definitive Yes. If it signifies denying houses (1, 5, 9), the answer is No.',
      },
      { type: 'h2', text: 'Why is the KP System So Popular? (Key Benefits)' },
      {
        type: 'p',
        text: 'For modern astrology seekers, the KP System offers several distinct advantages:',
      },
      {
        type: 'ul',
        items: [
          'Precision in timing: By combining the Sub-Lord theory with the Vimshottari Dasha and Ruling Planets, KP astrologers can often predict specific months, days, or narrower windows when an event is likely to transpire.',
          'No more ambiguity: Traditional astrology can sometimes be vague due to conflicting Yogas (planetary combinations). KP uses strict mathematical logic. The Sub-Lord either promises an event, or it denies it.',
          'Birth time rectification: Because the Ascendant Sub-Lord changes every 4 to 6 minutes, KP astrologers can meticulously reverse-engineer and correct a client\'s birth time by matching it with past life events.',
          'Practical application: It is highly suited for the modern world, perfectly equipped to answer specific micro-questions regarding career shifts, litigation outcomes, foreign travel, and medical recoveries.',
        ],
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'The KP System (Krishnamurti Paddhati) is a masterpiece of astrological engineering. By stripping away the confusing ambiguities of classical rules and focusing strictly on the macro (Constellations) and the micro (Sub-Lords), Prof. K.S. Krishnamurti gifted the world an exceptionally sharp predictive tool.',
      },
      {
        type: 'p',
        text: 'While traditional Vedic astrology remains valuable for understanding the soul\'s journey and karmic patterns, the KP System is the ultimate high-definition GPS for navigating the specific milestones of human life. For anyone looking for clear, precise, and logically sound astrological guidance, Krishnamurti Paddhati is undeniably the gold standard.',
      },
    ],
  },
  {
    pillar: 'vastu',
    path: 'vastu',
    title: 'What is Vastu Shastra? A Complete Guide to the Science of Space',
    metaDescription:
      'A complete guide to Vastu Shastra: its ancient origins, the five elements and directions, Vastu Purusha, how assessment works today, and how it differs from demolition-first advice.',
    backHref: '/services/vastu',
    backLabel: 'Vastu',
    linkLabel: 'Know more about Vastu Shastra',
    blocks: [
      {
        type: 'p',
        text: 'Long before floor plans and building codes, Indian architecture was guided by a single question: does this space support the people who live and work in it? Vastu Shastra — literally "the science of dwelling" — is the ancient Indian system of spatial design that maps how direction, proportion, and the five elements interact with human life.',
      },
      {
        type: 'p',
        text: 'Whether you are buying a plot, renovating a home, or laying out an office, understanding Vastu gives you a structured framework for assessing whether a space is working for you — and what proportionate corrections might help when it is not.',
      },
      { type: 'h2', text: 'The Origin: Where Did Vastu Shastra Come From?' },
      {
        type: 'p',
        text: 'Vastu Shastra is one of the oldest architectural sciences in the world, with roots stretching back thousands of years to the Vedic period. Its principles appear in texts such as the Matsya Purana, Vishwakarma Vastu Shastra, and Mayamata — treatises that describe how temples, palaces, and homes were to be oriented, proportioned, and placed on the land.',
      },
      {
        type: 'p',
        text: 'The legendary architect Vishwakarma is credited as the divine craftsman who codified many of these rules. Over centuries, regional schools developed — particularly in South India and Maharashtra — but the core framework remained consistent: align human dwellings with the natural forces of the earth, sun, wind, and water.',
      },
      { type: 'h2', text: 'Core Principles of Vastu Shastra' },
      {
        type: 'p',
        text: 'Vastu is not superstition dressed as architecture. At its heart is a practical observation: the direction a room faces, the flow of light and air, and the placement of key activities all affect how comfortable and functional a space feels. Here are the foundational concepts:',
      },
      { type: 'h3', text: '1. The Five Elements (Pancha Mahabhuta)' },
      {
        type: 'p',
        text: 'Every space is understood through five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash). Each element is associated with a direction and a zone of the building. Imbalance — too much fire in the south-east corner, stagnant water in the north-east — is read as a source of discomfort or blocked energy in that area of life.',
      },
      { type: 'h3', text: '2. The Eight Directions and Their Rulers' },
      {
        type: 'p',
        text: 'Vastu divides the compass into eight directions, each governed by a deity and linked to specific life domains:',
      },
      {
        type: 'ul',
        items: [
          'North (Kubera): Wealth and career growth.',
          'North-East (Ishanya): Spirituality, clarity, and the main entrance in many traditions.',
          'East (Indra): Health, social standing, and morning light.',
          'South-East (Agni): Fire, kitchen placement, and energy.',
          'South (Yama): Stability and rest — bedrooms often assessed here.',
          'South-West (Nirriti): Strength, ownership, and the master bedroom zone.',
          'West (Varuna): Gains, fulfilment, and evening light.',
          'North-West (Vayu): Movement, travel, and guest areas.',
        ],
      },
      { type: 'h3', text: '3. Vastu Purusha and the Brahmasthan' },
      {
        type: 'p',
        text: 'The Vastu Purusha is the symbolic body laid over the floor plan — his head in the north-east, feet in the south-west. The centre of any building, the Brahmasthan, is considered the energetic heart and is ideally kept open, uncluttered, and free of heavy structures. Blocking the centre with a staircase, toilet, or pillar is one of the most commonly flagged Vastu issues.',
      },
      { type: 'h3', text: '4. Proportion and Measurement (Ayadi Shadvarga)' },
      {
        type: 'p',
        text: 'Ancient Vastu texts prescribe specific ratios and measurements for rooms, doors, and plots using a system called Ayadi calculations. While modern practice often focuses on directional placement rather than exact cubit measurements, the underlying principle remains: proportions that feel balanced tend to function better.',
      },
      { type: 'h2', text: 'Vastu Shastra vs. Modern Architecture' },
      {
        type: 'table',
        headers: ['Feature', 'Traditional Vastu', 'Modern Architecture'],
        rows: [
          ['Primary Focus', 'Direction, elements, and energy flow', 'Structural engineering, aesthetics, and building codes'],
          ['Assessment Method', 'Compass orientation, plot shape, room placement', 'Floor area, ventilation standards, material specs'],
          ['Corrections', 'Placement changes, colours, elements, minor works', 'Renovation, demolition, or redesign'],
          ['Scope', 'Residential, commercial, temples, and plots', 'All building types with regulatory compliance'],
          ['Philosophy', 'Space should support the occupant\'s wellbeing', 'Space should be functional, safe, and efficient'],
        ],
      },
      { type: 'h2', text: 'How Vastu Assessment Works in Practice' },
      {
        type: 'p',
        text: 'A proper Vastu review does not start with fear. It starts with the floor plan. The assessor maps the compass directions onto the layout, identifies which rooms fall in which zones, and evaluates whether the current use matches the directional strengths.',
      },
      {
        type: 'p',
        text: 'Corrections are ranked by proportion: repositioning furniture or changing room use comes before painting walls or installing mirrors. Structural demolition is a last resort — not a first recommendation. If a property is broadly fine, a honest assessor will say so.',
      },
      { type: 'h2', text: 'Why Vastu Matters Today (Key Benefits)' },
      {
        type: 'ul',
        items: [
          'Pre-purchase clarity: Evaluate a plot or flat before you commit, not after you have signed.',
          'Proportionate corrections: Fix what matters without unnecessary structural work.',
          'Room-by-room guidance: Understand why a specific area feels off and what to do about it.',
          'Commercial application: Offices, shops, and factories benefit from directional assessment as much as homes.',
          'Integration with timing: When combined with KP Astrology, Vastu corrections can be timed to align with favourable periods in your chart.',
        ],
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'Vastu Shastra is not about superstition or demolition. It is a time-tested framework for reading how a space interacts with the people inside it. Used well, it offers practical, proportionate guidance — the kind you can act on without tearing down walls.',
      },
      {
        type: 'p',
        text: 'For anyone buying property, renovating a home, or setting up a business premises, a clear Vastu assessment is one of the most practical investments you can make before committing to a space.',
      },
    ],
  },
  {
    pillar: 'numerology',
    path: 'numerology',
    title: 'What is Numerology? A Complete Guide to Names, Numbers, and Charts',
    metaDescription:
      'A complete guide to numerology: Chaldean and Pythagorean systems, name and birth numbers, how numbers are cross-checked with your birth chart, and practical naming guidance.',
    backHref: '/services/numerology',
    backLabel: 'Numerology',
    linkLabel: 'Know more about Numerology',
    blocks: [
      {
        type: 'p',
        text: 'From the moment we are named to the phone number we carry, numbers shape how we identify ourselves and how others reach us. Numerology is the study of how names and numbers carry vibrational patterns — and how those patterns interact with the timing and tendencies revealed in your birth chart.',
      },
      {
        type: 'p',
        text: 'Whether you are choosing a baby name, registering a business, or questioning a spelling you have carried for years, numerology offers a structured way to evaluate whether a name or number supports the life you are building — not as random luck, but as a cross-check against your chart.',
      },
      { type: 'h2', text: 'The Origin: A Brief History of Numerology' },
      {
        type: 'p',
        text: 'Numerology has roots in several ancient traditions. The Greek philosopher Pythagoras (c. 570–495 BCE) is often credited with formalising the idea that numbers are the building blocks of the universe. His system assigns numerical values to letters and derives meaning from their sums.',
      },
      {
        type: 'p',
        text: 'The Chaldean system, originating in ancient Babylon, uses a different letter-to-number mapping and is considered by many practitioners to be older and more intuitive. In India, numerology has long been integrated with astrology — a name is rarely evaluated in isolation, but always read alongside the birth chart and current planetary periods.',
      },
      { type: 'h2', text: 'Core Principles of Numerology' },
      { type: 'h3', text: '1. The Core Numbers' },
      {
        type: 'p',
        text: 'Every numerology reading revolves around a handful of key numbers derived from your name and date of birth:',
      },
      {
        type: 'ul',
        items: [
          'Life Path Number: Calculated from your full date of birth. Describes the broad arc of your life journey and natural tendencies.',
          'Expression Number: Calculated from the full birth name. Reflects your talents, ambitions, and how you present yourself.',
          'Soul Urge (Heart\'s Desire) Number: Derived from the vowels in your name. Reveals inner motivation and what you truly want.',
          'Personality Number: Derived from the consonants. How others perceive you at first glance.',
          'Birth Day Number: The day of the month you were born, offering additional nuance.',
        ],
      },
      { type: 'h3', text: '2. Chaldean vs. Pythagorean Systems' },
      {
        type: 'table',
        headers: ['Feature', 'Pythagorean', 'Chaldean'],
        rows: [
          ['Origin', 'Ancient Greece (Pythagoras)', 'Ancient Babylon / Chaldea'],
          ['Number Range', '1 to 9 (all letters mapped)', '1 to 8 (9 reserved for sacred use)'],
          ['Letter Mapping', 'Sequential A=1, B=2, C=3…', 'Based on sound vibration, not alphabet order'],
          ['Common Use', 'Western numerology, life path readings', 'Name analysis, business names, Indian practice'],
          ['Strengths', 'Simple, widely taught, easy to calculate', 'Considered more nuanced for name evaluation'],
        ],
      },
      { type: 'h3', text: '3. Name Numerology: Why Spelling Matters' },
      {
        type: 'p',
        text: 'A single letter change can shift the Expression Number entirely. That is why numerologists pay close attention to spelling — not for superstition, but because the vibrational sum of a name changes with every character. When a family debates between "Aarav" and "Arav", the numerological difference can be significant.',
      },
      {
        type: 'p',
        text: 'Business names, brand names, and mobile numbers are evaluated the same way: what is the total vibration, and does it align with the purpose of the venture or the chart of the person behind it?',
      },
      { type: 'h3', text: '4. Cross-Checking with Your Birth Chart' },
      {
        type: 'p',
        text: 'Standalone numerology can tell you what a name means in isolation. Integrated numerology — the approach used at Divine Jyothi — asks a harder question: does this name work with your chart right now?',
      },
      {
        type: 'p',
        text: 'A name that scores beautifully in a numerology table can still sit against unfavourable planetary periods in your birth chart. The cross-check is the whole point. Numbers and chart timing are read together, not separately.',
      },
      { type: 'h2', text: 'Numerology in Practice: What Can It Answer?' },
      {
        type: 'ul',
        items: [
          'Personal name analysis: Is your current name spelling supporting or working against your chart?',
          'Baby naming: Evaluate the family shortlist before registration, not after.',
          'Business naming: Check a proposed company or brand name before you print cards and file paperwork.',
          'Mobile numbers: Compare the numerological vibration of numbers you can actually buy and keep.',
          'Name corrections: Minimal spelling adjustments that shift the number without changing how the name sounds.',
        ],
      },
      { type: 'h2', text: 'Why Numerology Matters Today (Key Benefits)' },
      {
        type: 'ul',
        items: [
          'Low-cost, high-impact decisions: A name or number change is one of the simplest course corrections available.',
          'Pre-registration clarity: Settle naming debates before documents are filed, not after.',
          'Chart integration: Numbers read alongside KP Astrology timing for a coherent recommendation.',
          'Practical recommendations: Suggestions you can actually register, buy, or live with — not dramatic renames.',
          'Portable across life stages: The same framework applies to personal names, businesses, and phone numbers.',
        ],
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'Numerology is not about lucky numbers or random superstition. It is a structured system for evaluating whether the names and numbers you carry align with the life you are building — especially when cross-checked against your birth chart.',
      },
      {
        type: 'p',
        text: 'For anyone facing a naming decision — a newborn, a business launch, or a spelling you have questioned for years — a numerology review paired with chart analysis is one of the most practical steps you can take before committing.',
      },
    ],
  },
]

export const getPillarHistory = (path: string) =>
  pillarHistories.find((h) => h.path === path)
