/**
 * Every user-facing UI string lives here so a Telugu locale can drop in later
 * without refactoring components. Page body copy lives in /data.
 */
export const en = {
  brand: {
    name: 'Divine Jyothi',
    pillars: 'KP Astrology · Vastu · Numerology',
    promise: 'Clear guidance for timing, space, and name decisions.',
    logoAlt: 'Divine Jyothi',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    pricing: 'Pricing',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    testimonials: 'Testimonials',
    blog: 'Blog',
    book: 'Book Consultation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  cta: {
    whatsapp: 'Message on WhatsApp',
    whatsappShort: 'Chat with us',
    whatsappAbout: (service: string) => `Ask about ${service} on WhatsApp`,
    book: 'Book Consultation',
    bookService: (service: string) => `Book ${service}`,
    useForm: 'Use booking form',
    viewPricing: 'View pricing',
    explore: (label: string) => `Explore ${label}`,
    allTestimonials: 'All testimonials',
    fullPricing: 'Full pricing',
    readMore: 'Read more',
  },

  sections: {
    situations: 'I need help with…',
    method: 'The Divine Jyothi method',
    familyCompatibility: 'Family Compatibility',
    howItWorks: 'How consultation works',
    founder: 'About Siva Kola',
    testimonials: 'What clients say',
    packages: 'Packages',
    faq: 'Common questions',
    related: 'Related services',
    isThisForYou: 'Is this for you?',
    whatsIncluded: "What's included",
    whatWeCover: 'What we cover',
    deliverables: "What you'll walk away with",
  },

  labels: {
    from: 'from',
    duration: 'Duration',
    price: 'Price',
    pillar: 'Pillar',
    mostPopular: 'Most popular',
    tier: 'Tier',
    scope: 'Scope',
  },

  pillars: {
    astrology: 'KP Astrology',
    vastu: 'Vastu',
    numerology: 'Numerology',
    astrologyTagline: 'When to act — career, marriage, muhurtham, and timing windows',
    vastuTagline: 'Space that works — home, office, and plot guidance without demolition-first advice',
    numerologyTagline: 'Names and numbers checked against your chart — not random luck',
  },

  trust: {
    languages: 'English · Telugu · Hindi',
    availability: 'Online & in-person, by appointment',
    yearsSuffix: '+ Years Experience',
    googleRating: '4.9★ on Google',
    microline:
      'Hyderabad-based · Online worldwide · By appointment · Practical guidance, not fear-based prediction',
  },

  booking: {
    privacyNote:
      'Your birth details and floor plans stay private. Never shared, never published.',
    afterSubmit:
      "We'll confirm your slot, then share UPI details for payment.",
    policy:
      'Free reschedule or cancellation with 24+ hours notice. Full refund if we cancel.',
    steps: {
      share: 'Share your question',
      confirm: 'Confirm a slot',
      pay: 'Pay via UPI',
      consult: 'Consultation',
    },
    includes:
      'Every consultation includes: a written summary (PDF) · specific recommendations · session recording on request',
  },

  form: {
    name: 'Your name',
    whatsapp: 'WhatsApp number',
    service: 'Service',
    tier: 'Package tier',
    preferredTime: 'Preferred date & time',
    preferredTimeHint: 'Indian Standard Time (IST)',
    question: 'Your question',
    birthDetails: 'Birth details',
    birthDate: 'Date of birth',
    birthTime: 'Time of birth',
    birthPlace: 'Place of birth',
    propertyType: 'Property type',
    namesToCheck: 'Name(s) to check',
    submit: 'Send on WhatsApp',
    required: 'required',
    optional: 'optional',
  },

  home: {
    /** Hero carousel — 4 slides (spec §5). Slide 1 renders in server HTML. */
    slides: [
      {
        id: 'brand',
        badge: 'KP Astrology · Vastu · Numerology',
        title: 'Clear guidance for timing, space, and name decisions.',
        subtitle:
          'Divine Jyothi with Siva Kola in Hyderabad — integrated KP Astrology, Vastu, and Numerology for career, marriage, property, naming, and important life decisions.',
        body: 'One practitioner, three disciplines reviewed together, so the advice you get on timing does not contradict the advice you get on space or name.',
        /** Empty = generic "Message on WhatsApp" label for the brand slide. */
        whatsappService: '',
        secondary: { label: 'Book Consultation', href: '/book' },
      },
      {
        id: 'marriage',
        badge: 'Marriage · Family Compatibility',
        title: 'Marriage matching that looks at the whole family.',
        subtitle:
          "Most matching stops at the couple. We also help you understand the household you're marrying into — in-law dynamics, family expectations, and how to prepare for them.",
        body: 'KP 7th-cusp Sub-Lord matching, marriage timing for both charts, plus our Family Compatibility review — the part most matching leaves out.',
        whatsappService: 'Marriage',
        secondary: { label: 'Explore Marriage & Family', href: '/services/astrology/marriage' },
      },
      {
        id: 'vastu',
        badge: 'Vastu',
        title: 'Space that works — without breaking walls.',
        subtitle:
          'Home, office, and plot assessment with practical remedies. We tell you what actually matters before you buy, build, or renovate.',
        body: 'Assessment first. Where a correction is genuinely needed we will say so, and where it is not, we will tell you that too.',
        whatsappService: 'Vastu',
        secondary: { label: 'Explore Vastu', href: '/services/vastu' },
      },
      {
        id: 'numerology',
        badge: 'Numerology',
        title: 'Names and numbers checked against your chart.',
        subtitle:
          'Name spelling, baby names, business names, and mobile numbers — cross-checked with your birth chart, not chosen from a generic number table.',
        body: 'Numbers are read alongside your chart, so a name that scores well on paper is not recommended if it works against your timing.',
        whatsappService: 'Numerology',
        secondary: { label: 'Explore Numerology', href: '/services/numerology' },
      },
    ],

    carousel: {
      label: 'Divine Jyothi highlights',
      previous: 'Previous slide',
      next: 'Next slide',
      goTo: (n: number) => `Go to slide ${n}`,
      pause: 'Pause',
      play: 'Play',
    },

    situations: {
      heading: 'I need help with…',
      lead: 'Start from the decision in front of you. Each one leads to the service that answers it.',
      items: [
        {
          title: 'Career & education',
          description: 'Course choice, job timing, promotions, or a move between government and private roles.',
          pillar: 'astrology' as const,
          href: '/services/astrology/career',
        },
        {
          title: 'Marriage & relationships',
          description: 'Matching, marriage timing, delayed marriage, and preparing for the family you join.',
          pillar: 'astrology' as const,
          href: '/services/astrology/marriage',
        },
        {
          title: 'Childbirth & family',
          description: 'Progeny timing, conception windows, and muhurtham support for a planned delivery.',
          pillar: 'astrology' as const,
          href: '/services/astrology/childbirth',
        },
        {
          title: 'Property & house planning',
          description: 'Room-by-room assessment for the home you live in, or a plot you are considering.',
          pillar: 'vastu' as const,
          href: '/services/vastu/home-vastu',
        },
        {
          title: 'Business & office',
          description: 'Layout guidance for workspaces, seating, and the flow of a working premises.',
          pillar: 'vastu' as const,
          href: '/services/vastu/office-vastu',
        },
        {
          title: 'Naming & number alignment',
          description: 'Name spelling, a baby name, a business name, or a mobile number worth keeping.',
          pillar: 'numerology' as const,
          href: '/services/numerology/name-analysis',
        },
        {
          title: 'Muhurtham & auspicious timing',
          description: 'Dates for marriage, Gruha Pravesham, a business opening, or a vehicle purchase.',
          pillar: 'astrology' as const,
          href: '/services/astrology/muhurtham',
        },
        {
          title: 'An urgent question',
          description: 'A focused Prashna answer when you do not have birth details to hand.',
          pillar: 'astrology' as const,
          href: '/services/astrology/prashna',
        },
      ],
    },

    method: {
      heading: 'The Divine Jyothi method',
      lead: 'Three disciplines, reviewed together for one decision — so the recommendations do not pull against each other.',
      items: [
        {
          key: 'timing',
          label: 'Timing',
          discipline: 'KP Astrology',
          description:
            'Krishnamurti Paddhati uses Sub-Lord theory to narrow broad planetary periods into finer, more usable segments.',
          uses: [
            'Favourable windows for a job change, marriage, or property purchase',
            'Muhurtham dates for ceremonies and openings',
          ],
        },
        {
          key: 'space',
          label: 'Space',
          discipline: 'Vastu',
          description:
            'Assessment of how a home, office, or plot is actually laid out and used, with corrections that stay proportionate.',
          uses: [
            'Reviewing a plot or property before you commit to it',
            'Practical corrections that do not start with demolition',
          ],
        },
        {
          key: 'name',
          label: 'Name',
          discipline: 'Numerology',
          description:
            'Name and number analysis cross-checked against your birth chart rather than read from a standalone table.',
          uses: [
            'Spelling a personal, baby, or business name before it is registered',
            'Choosing a mobile number you will keep for years',
          ],
        },
      ],
    },

    familyCompatibility: {
      eyebrow: 'Marriage & family',
      heading: 'Family Compatibility',
      lead: "Marriage in India is rarely just two people. We help you understand the household you're joining — the expectations, the rhythms, and where you'll want to be patient — so you go in prepared rather than surprised.",
      points: [
        {
          title: 'Preparation, not prediction',
          description:
            'We describe tendencies and household dynamics. We do not issue verdicts about individuals.',
        },
        {
          title: 'Roles, not personal profiles',
          description:
            'Guidance is framed by role — mother-in-law, father-in-law, sister-in-law, brother-in-law, extended family — and what those relationships typically ask of you.',
        },
        {
          title: 'Consent comes first',
          description:
            "Any family member's chart is reviewed only with that person's knowledge.",
        },
      ],
      honestyNote:
        "We won't tell you a relative will be a problem. We'll help you navigate a family system you're about to join.",
      cta: { label: 'Explore Marriage & Family', href: '/services/astrology/marriage' },
    },

    howItWorks: {
      heading: 'How consultation works',
      lead: 'Four steps, no account to create, and no card details entered on this site.',
      steps: [
        {
          title: 'Share your question',
          description: 'Message us on WhatsApp or send the booking form with your details.',
        },
        {
          title: 'Confirm a slot',
          description: 'We propose times in IST and confirm one that suits you.',
        },
        {
          title: 'Pay via UPI',
          description: 'Payment details are shared after your slot is confirmed.',
        },
        {
          title: 'Consultation',
          description: 'Google Meet, Zoom, phone, or in person in Hyderabad.',
        },
      ],
    },

    founder: {
      eyebrow: 'Who you will be speaking with',
      heading: 'Siva Kola',
      role: 'Founder & Consultant, Hyderabad',
      body: 'Siva Kola practises Krishnamurti Paddhati alongside Vastu and Numerology, and consults in English, Telugu, and Hindi. Sessions are online worldwide, or in person in Hyderabad by appointment.',
      cta: { label: 'About Divine Jyothi', href: '/about' },
    },

    packagesPreview: {
      heading: 'Packages',
      lead: 'Fixed prices per session. Choose a focused question, a fuller review, or the combined Audit.',
    },

    testimonials: {
      heading: 'What clients say',
      lead: 'Reviews from people we have worked with.',
    },

    faq: {
      heading: 'Common questions',
      lead: 'The questions worth asking before you book anyone.',
      cta: { label: 'All questions', href: '/faq' },
    },

    finalCta: {
      heading: 'Ready for clear next steps?',
      lead: 'Send your question on WhatsApp, or use the booking form and we will come back with slot options.',
    },
  },

  pricing: {
    title: 'Pricing',
    metaDescription:
      'Fixed prices for every Divine Jyothi consultation — KP Astrology, Vastu, and Numerology sessions, marriage tiers, and packages. No ranges, no hidden fees.',
    heading: 'Pricing',
    lead: 'Every price on this page is a single fixed figure. No ranges, no quotes, no surprises at the end of a call.',
    perSessionHeading: 'Per-session pricing',
    marriageHeading: 'Marriage tiers',
    marriageLead: 'Choose the scope that matches your situation.',
    packagesHeading: 'Packages',
  },

  about: {
    title: 'About',
    metaDescription:
      'Meet Siva Kola, founder of Divine Jyothi — a Hyderabad-based KP Astrology, Vastu, and Numerology practice built on practical guidance over fear-based prediction.',
    heading: 'About Divine Jyothi',
    meetHeading: 'Siva Kola',
    meetRole: 'Founder & Consultant, Hyderabad',
    meetBody:
      'Siva Kola practises Krishnamurti Paddhati (KP) astrology alongside Vastu and Numerology, consulting in English, Telugu, and Hindi. Sessions run online worldwide, or in person in Hyderabad by appointment.',
    whyHeading: 'Why Divine Jyothi exists',
    whyBody: [
      'Clients kept arriving having already spoken to an astrologer, a Vastu consultant, and a numerologist separately — and coming away with three sets of advice that quietly contradicted each other. A name changed to suit one reading sat against the timing recommended by another.',
      'Divine Jyothi exists to review Timing, Space, and Name together when a decision genuinely touches all three, so the guidance you leave with is coherent rather than three unrelated opinions.',
    ],
    approachHeading: 'Our approach',
    approach: [
      {
        title: 'Practical over theatrical',
        description:
          'Recommendations you can act on this week, stated in plain language — not vague forecasts or dramatic framing.',
      },
      {
        title: 'No promised outcomes',
        description:
          'A chart or assessment indicates tendencies and favourable windows. It does not promise results, and we say so plainly.',
      },
      {
        title: 'Integrated when it matters',
        description:
          'Single-pillar sessions when one question is enough. The combined Audit only when timing, space, and name genuinely affect the same decision.',
      },
      {
        title: 'Confidential by default',
        description:
          'Birth details and floor plans stay private. Recordings only on request.',
      },
    ],
    kpHeading: 'What is the KP System?',
    kpBody: [
      'Krishnamurti Paddhati was developed by the astrologer K.S. Krishnamurti. Its central idea is Sub-Lord theory: instead of reading a birth chart through broad planetary periods that can run for years, KP subdivides each period into much finer segments.',
      'That precision is the whole point. A finer segment gives a window you can actually plan around, and it can be checked against what happened — a specific window either holds or it does not.',
    ],
    howHeading: 'How we work',
    how: [
      'You share your question and, where relevant, birth details or a floor plan.',
      'We review the chart, plan, or name against that specific question — not a generic reading.',
      'You receive a plain-language answer, a written summary, and — where useful — proportionate remedies.',
      'Nothing is sold beyond the consultation itself.',
    ],
    wontHeading: "What we won't do",
    wont: [
      'Frame a period as dangerous to sell a remedy for it',
      'Promise a specific outcome or result',
      'Predict death or catastrophic events',
      'Push remedies you do not need',
      'Deliver a verdict about a person who is not in the room',
    ],
    cta: { label: 'Message Siva Kola', },
  },

  faqPage: {
    title: 'FAQ',
    metaDescription:
      'Answers to the questions worth asking before you book an astrology, Vastu, or numerology consultation — booking, honesty, Family Compatibility, privacy, and method.',
    heading: 'Common questions',
    lead: 'Grouped by what you actually want to know before you book anyone.',
  },

  testimonialsPage: {
    title: 'Testimonials',
    metaDescription: 'Reviews from Divine Jyothi clients across KP Astrology, Vastu, and Numerology consultations.',
    heading: 'What clients say',
    lead: 'Reviews from people we have worked with.',
    empty:
      'We are collecting reviews from recent clients. In the meantime, message us on WhatsApp and we can put you in touch with someone who has used a similar service.',
    filterAll: 'All',
  },

  contactPage: {
    title: 'Contact',
    metaDescription:
      'Contact Divine Jyothi — WhatsApp, phone, and email for KP Astrology, Vastu, and Numerology consultations in Hyderabad and worldwide.',
    heading: 'Contact',
    lead: 'We are here to help. Reach out for a consultation or any question.',
    replyTime: 'We typically reply within a few hours during working hours.',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Hours',
    locationLabel: 'Location',
  },

  bookPage: {
    title: 'Book Consultation',
    metaDescription:
      'Book a Divine Jyothi consultation. Share your details on this form and we will confirm a slot on WhatsApp — no card details, no account needed.',
    heading: 'Book Your Consultation',
    lead: 'Fill in your details below. We will confirm a slot on WhatsApp and share UPI payment details once your time is set.',
    servicePillarLabel: 'Which area is this about?',
  },

  blogPage: {
    title: 'Blog',
    metaDescription: 'Notes on KP Astrology, Vastu, and Numerology from Divine Jyothi.',
    heading: 'Blog',
    lead: 'Short, practical notes on the methods behind our consultations.',
  },

  servicesHub: {
    title: 'Services',
    metaDescription:
      'All Divine Jyothi services across KP Astrology, Vastu, and Numerology — fixed prices, session durations, and what each consultation covers.',
    intro:
      "Start from your situation. We'll recommend KP Astrology, Vastu, Numerology, or the Divine Jyothi Audit when all three matter together.",
    pillarsHeading: 'Three disciplines, one method',
    closing: {
      title: 'Not sure which service fits?',
      lead: "Message us with your question — we'll suggest the right starting point.",
    },
  },

  footer: {
    blurb:
      'Integrated KP Astrology, Vastu, and Numerology guidance from Hyderabad — practical recommendations for timing, space, and name decisions.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refund: 'Refund Policy',
    rights: (year: number) => `© ${year} Divine Jyothi. All rights reserved.`,
  },
} as const

export type Dictionary = typeof en
