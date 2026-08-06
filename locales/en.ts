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
    about: 'Profile',
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
    submitting: 'Sending…',
    intakeReceived: 'Details received — opening WhatsApp to confirm your slot.',
    intakeSkipped: 'Opening WhatsApp — add birth details there if you have not already.',
    required: 'required',
    optional: 'optional',
  },

  home: {
    /** Hero carousel — 4 slides (spec §5). Slide 1 renders in server HTML. */
    slides: [
      {
        id: 'brand',
        visualAlt: 'Three disciplines — timing, space, and name — reviewed together',
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
        visualAlt: 'Family compatibility — couple and household roles',
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
        visualAlt: 'Floor plan layout for home or office Vastu assessment',
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
        visualAlt: 'Name and number alignment checked against your chart',
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
      heading: 'Are you looking for a solution to your problem?',
      lead: 'Pick the decision in front of you — career, marriage, property, naming, or timing — and we will point you to the consultation that fits.',
      items: [
        {
          id: 'career',
          title: 'Career & education',
          description: 'Course choice, job timing, promotions, or a move between government and private roles.',
          pillar: 'astrology' as const,
          href: '/services/astrology/career',
        },
        {
          id: 'marriage',
          title: 'Marriage & relationships',
          description: 'Matching, marriage timing, delayed marriage, and preparing for the family you join.',
          pillar: 'astrology' as const,
          href: '/services/astrology/marriage',
        },
        {
          id: 'childbirth',
          title: 'Childbirth & family',
          description: 'Progeny timing, conception windows, and muhurtham support for a planned delivery.',
          pillar: 'astrology' as const,
          href: '/services/astrology/childbirth',
        },
        {
          id: 'property',
          title: 'Property & house planning',
          description: 'Room-by-room assessment for the home you live in, or a plot you are considering.',
          pillar: 'vastu' as const,
          href: '/services/vastu/home-vastu',
        },
        {
          id: 'business',
          title: 'Business & office',
          description: 'Layout guidance for workspaces, seating, and the flow of a working premises.',
          pillar: 'vastu' as const,
          href: '/services/vastu/office-vastu',
        },
        {
          id: 'naming',
          title: 'Naming & number alignment',
          description: 'Name spelling, a baby name, a business name, or a mobile number worth keeping.',
          pillar: 'numerology' as const,
          href: '/services/numerology/name-analysis',
        },
        {
          id: 'muhurtham',
          title: 'Muhurtham & auspicious timing',
          description: 'Dates for marriage, Gruha Pravesham, a business opening, or a vehicle purchase.',
          pillar: 'astrology' as const,
          href: '/services/astrology/muhurtham',
        },
        {
          id: 'prashna',
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
          key: 'share',
          title: 'Share your question',
          description: 'Message us on WhatsApp or send the booking form with your details.',
        },
        {
          key: 'confirm',
          title: 'Confirm a slot',
          description: 'We propose times in IST and confirm one that suits you.',
        },
        {
          key: 'pay',
          title: 'Pay via UPI',
          description: 'Payment details are shared after your slot is confirmed.',
        },
        {
          key: 'consult',
          title: 'Consultation',
          description: 'Google Meet, Zoom, phone, or in person in Hyderabad.',
        },
      ],
    },

    founder: {
      eyebrow: 'Who you will be speaking with',
      heading: 'Siva Kola',
      role: 'Founder & Consultant, Hyderabad',
      body: 'A software engineer before he was a full-time practitioner, Siva Kola was drawn to Krishnamurti Paddhati for the same reason he liked engineering: it makes specific, checkable claims. He is certified in KP Astrology, Numerology, and Vastu, and consults in English, Telugu, and Hindi — online worldwide, or in person in Hyderabad by appointment.',
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
    title: 'Profile',
    metaDescription:
      'Meet Siva Kola — KP Astrology, Vastu, Numerology, and Lo Shu Grid consultant at Divine Jyothi. Software engineer, Reiki Grand Master, and certified yoga trainer based in Hyderabad.',
    heading: 'Your Guide & Consultant',
    subtitle: 'The Expert Behind Divine Jyothi',
    name: 'Siva Kola',
    paragraphs: [
      'Hello, and welcome to Divine Jyothi. My journey into the world of astrology began from a very different background—software engineering. As a tech professional, I was always driven by logic, data, and mathematical precision. That is exactly why I was drawn to Krishnamurti Paddhati (KP Astrology). Unlike systems that sometimes rely on vague predictions, KP Astrology appeals to me precisely because it is based on complex mathematics and makes specific, checkable claims.',
      "I don't just practice this science; as a software engineer, I am currently building my own custom KP astrology software, implementing these exact calculations by hand to ensure absolute accuracy for my clients.",
      'Beyond the mathematical charts, I believe in a holistic approach to guiding people. I am professionally certified in KP Astrology, Numerology, Vastu, and Lo Shu Grid analysis. To balance the logical with the spiritual, I am also a Reiki Grand Master and a certified trainer in Kundalini and Kayakalpa yoga. My goal is to use these diverse sciences to provide genuine, practical solutions to your career, financial, and life challenges. I offer consultations in English, Telugu, and Hindi. We can connect online from anywhere in the world, or in person by appointment here in Hyderabad.',
    ],
    credentialsHeading: 'Background & Training',
    credentials: [
      {
        title: 'KP Astrology, Numerology, Vastu & Lo Shu Grid',
        detail:
          'Certified across all four disciplines to provide comprehensive, multi-dimensional life predictions and remedies.',
      },
      {
        title: 'Software Engineer by Training',
        detail:
          'Now building custom KP astrology software — ensuring the calculations behind this practice are executed with pin-point accuracy.',
      },
      {
        title: 'Reiki Grand Master',
        detail:
          'Advanced certification in the Reiki lineage to help clients with energetic healing and mental peace.',
      },
      {
        title: 'Kundalini & Kayakalpa Yoga',
        detail:
          'Certified trainer in both ancient traditions, guiding individuals towards spiritual and physical well-being.',
      },
    ],
    cta: {
      whatsapp: 'Book a Consultation via WhatsApp',
      chart: 'Generate Your Free Basic KP Chart',
      chartMessage:
        "Hi Divine Jyothi, I'd like to generate my free basic KP chart. My birth details are:",
    },
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
