import { getSite } from "./content";
import type { SpecialtySlug } from "./content";

export type WaContext = {
  page:
    | "home"
    | "about"
    | "services"
    | "kp-astrology"
    | "vastu"
    | "numerology"
    | SpecialtySlug
    | "pricing"
    | "testimonials"
    | "faq"
    | "contact"
    | "book"
    | "other";
  service?: "kp" | "vastu" | "numerology" | "combo";
  packageName?: string;
  bookingRef?: string;
  extra?: string;
};

const PREFILLS: Record<WaContext["page"], string> = {
  home: "Hi, I'd like to book a consultation.",
  about: "Hi, I'd like to know more about AstroVastu consultations.",
  services: "Hi, I'd like help choosing the right consultation.",
  "kp-astrology": "Hi, I'd like a KP Astrology consultation.",
  vastu: "Hi, I'd like a Vastu consultation for my home/office.",
  numerology: "Hi, I'd like a Numerology consultation.",
  career: "Hi, I'd like a Career & Education consultation.",
  marriage: "Hi, I'd like a Marriage & Relationships consultation.",
  childbirth: "Hi, I'd like a Childbirth & Progeny consultation.",
  finance: "Hi, I'd like a Finance & Property consultation.",
  health: "Hi, I'd like a Health consultation.",
  muhurtham: "Hi, I'd like a Muhurtham (auspicious timing) consultation.",
  prashna: "Hi, I'd like a Prashna (horary) consultation.",
  "home-vastu": "Hi, I'd like a Home Vastu consultation.",
  "office-vastu": "Hi, I'd like an Office / Shop Vastu consultation.",
  "plot-vastu": "Hi, I'd like a Plot / Site Vastu consultation.",
  "vastu-remedies": "Hi, I'd like Vastu remedies guidance (without demolition).",
  "name-numerology": "Hi, I'd like a Name Numerology / correction consultation.",
  "baby-name": "Hi, I'd like help choosing a baby name.",
  "business-name": "Hi, I'd like a Business / Brand name numerology consultation.",
  "mobile-numerology": "Hi, I'd like Mobile Number numerology guidance.",
  pricing: "Hi, I'd like to book a consultation. Please share available slots.",
  testimonials: "Hi, I'd like to book a consultation after reading the reviews.",
  faq: "Hi, I have a question before booking a consultation.",
  contact: "Hi, I'd like to get in touch about a consultation.",
  book: "Hi, I just submitted a booking request on the website.",
  other: "Hi, I'd like to book a consultation.",
};

/**
 * Build a WhatsApp deep link with a context-aware prefilled message.
 * Always route WhatsApp CTAs through this helper — never hardcode wa.me URLs.
 */
export function buildWaLink(ctx: WaContext): string {
  const site = getSite();
  let text = PREFILLS[ctx.page];

  if (ctx.packageName) {
    text = `Hi, I'd like to book the ${ctx.packageName} consultation.`;
  }
  if (ctx.bookingRef) {
    text = `Hi, I just booked online. Booking ref: ${ctx.bookingRef}. Please confirm my slot.`;
  }
  if (ctx.extra) {
    text = `${text} ${ctx.extra}`;
  }

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function getPhoneTelHref(): string {
  const site = getSite();
  return `tel:${site.phone.replace(/\s+/g, "")}`;
}
