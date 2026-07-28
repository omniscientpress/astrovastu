/**
 * Telugu vocabulary — harvested from the v1 site and the build spec so it is not
 * lost. Telugu pages ship post-launch; nothing here is rendered in this phase.
 */

/** Domain terms clients actually use in conversation. */
export const teluguGlossary = {
  pelliKoothuru: { term: 'Pelli Koothuru', te: 'పెళ్లి కూతురు', en: 'bride' },
  pelliKoduku: { term: 'Pelli Koduku', te: 'పెళ్లి కొడుకు', en: 'groom' },
  athagaru: { term: 'Athagaru', te: 'అత్తగారు', en: 'mother-in-law' },
  mavagaru: { term: 'Mavagaru', te: 'మావగారు', en: 'father-in-law' },
  maradalu: { term: 'Maradalu', te: 'మరదలు', en: 'sister-in-law' },
  bava: { term: 'Bava', te: 'బావ', en: 'brother-in-law' },
  muhurtham: { term: 'Muhurtham', te: 'ముహూర్తం', en: 'auspicious timing' },
  gruhaPravesham: { term: 'Gruha Pravesham', te: 'గృహ ప్రవేశం', en: 'house-warming' },
} as const

/** Service names as they appeared on the v1 site. */
export const teluguServiceNames = {
  muhurtham: 'ముహూర్తం',
  career: 'ఉద్యోగం & విద్య',
  marriage: 'వివాహం & బంధాలు',
  childbirth: 'సంతానం',
  finance: 'ధనం & ఆస్తి',
  health: 'ఆరోగ్యం',
  prashna: 'ప్రశ్న శాస్త్రం',
} as const

/** Partial UI dictionary — filled out when Telugu pages are built. */
export const te = {
  nav: {
    home: 'హోమ్',
    services: 'సేవలు',
    about: 'మా గురించి',
    testimonials: 'అభిప్రాయాలు',
    blog: 'బ్లాగ్',
    contact: 'సంప్రదింపు',
    book: 'బుక్ చేయండి',
  },
  booking: {
    steps: {
      share: 'మీ వివరాలు పంచుకోండి',
      confirm: 'మీ స్లాట్ బుక్ చేయండి',
      pay: 'చెల్లింపు చేయండి',
      consult: 'సంప్రదింపు పొందండి',
    },
  },
} as const
