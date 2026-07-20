import { getSite } from "./content";

export type WaContext = {
  page:
    | "home"
    | "about"
    | "services"
    | "kp-astrology"
    | "vastu"
    | "numerology"
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
