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
