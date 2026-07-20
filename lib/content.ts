import { z } from "zod";
import { readFileSync } from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function loadJson<T>(relativePath: string, schema: z.ZodType<T>): T {
  const fullPath = path.join(contentDir, relativePath);
  const raw = JSON.parse(readFileSync(fullPath, "utf-8"));
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(
      `Invalid content file ${relativePath}:\n${parsed.error.toString()}`,
    );
  }
  return parsed.data;
}

/* ---------- schemas ---------- */

export const siteSchema = z.object({
  brandName: z.string(),
  tagline: z.string(),
  consultantName: z.string(),
  phone: z.string(),
  whatsapp: z.string().regex(/^\d+$/, "WhatsApp must be digits only, country code included"),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  serviceArea: z.string(),
  hours: z.string(),
  social: z.object({
    facebook: z.string().url().or(z.literal("")),
    instagram: z.string().url().or(z.literal("")),
    youtube: z.string().url().or(z.literal("")),
  }),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  geo: z.object({
    lat: z.number().nullable(),
    lng: z.number().nullable(),
  }),
});

export const servicePillarSchema = z.object({
  slug: z.enum(["kp-astrology", "vastu", "numerology"]),
  title: z.string(),
  shortTitle: z.string(),
  tagline: z.string(),
  description: z.string(),
  icon: z.string(),
  accent: z.enum(["gold", "teal", "lime"]),
  forYou: z.array(z.string()),
  youReceive: z.array(z.string()),
  process: z.array(
    z.object({
      step: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  ),
  sections: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      body: z.string(),
    }),
  ),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const specialtySlugSchema = z.enum([
  "career",
  "marriage",
  "childbirth",
  "finance",
  "health",
  "muhurtham",
  "prashna",
  "home-vastu",
  "office-vastu",
  "plot-vastu",
  "vastu-remedies",
  "name-numerology",
  "baby-name",
  "business-name",
  "mobile-numerology",
]);

export const specialtySchema = z.object({
  slug: specialtySlugSchema,
  pillar: z.enum(["kp-astrology", "vastu", "numerology"]),
  title: z.string(),
  shortTitle: z.string(),
  tagline: z.string(),
  description: z.string(),
  priceLabel: z.string(),
  duration: z.string(),
  features: z.array(z.string()),
  topics: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),
  forYou: z.array(z.string()),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  service: z.enum(["kp", "vastu", "numerology"]),
  rating: z.number().min(1).max(5),
  text: z.string(),
  resultSummary: z.string().optional(),
  date: z.string(),
  featured: z.boolean(),
  approved: z.boolean(),
});

export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum(["general", "astrology", "vastu", "numerology", "pricing"]),
});

export const pricingPackageSchema = z.object({
  id: z.string(),
  name: z.string(),
  pillar: z.enum(["kp", "vastu", "numerology", "combo"]),
  price: z.number(),
  priceLabel: z.string(),
  duration: z.string(),
  inclusions: z.array(z.string()),
  deliveryMode: z.string(),
  turnaround: z.string(),
  highlighted: z.boolean().default(false),
});

export const pricingSchema = z.object({
  note: z.string(),
  packages: z.array(pricingPackageSchema),
});

export type Site = z.infer<typeof siteSchema>;
export type ServicePillar = z.infer<typeof servicePillarSchema>;
export type Specialty = z.infer<typeof specialtySchema>;
export type SpecialtySlug = z.infer<typeof specialtySlugSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type Faq = z.infer<typeof faqSchema>;
export type Pricing = z.infer<typeof pricingSchema>;
export type PricingPackage = z.infer<typeof pricingPackageSchema>;

/* ---------- loaders ---------- */

export function getSite(): Site {
  return loadJson("site.json", siteSchema);
}

export function getService(slug: ServicePillar["slug"]): ServicePillar {
  return loadJson(`services/${slug}.json`, servicePillarSchema);
}

export function getAllServices(): ServicePillar[] {
  return [
    getService("kp-astrology"),
    getService("vastu"),
    getService("numerology"),
  ];
}

export function getAllSpecialties(): Specialty[] {
  return loadJson("specialties.json", z.array(specialtySchema));
}

export function getSpecialtiesByPillar(
  pillar: ServicePillar["slug"],
): Specialty[] {
  return getAllSpecialties().filter((s) => s.pillar === pillar);
}

export function getSpecialty(slug: SpecialtySlug): Specialty {
  const found = getAllSpecialties().find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown specialty: ${slug}`);
  return found;
}

export function isSpecialtySlug(value: string): value is SpecialtySlug {
  return specialtySlugSchema.safeParse(value).success;
}

export function getTestimonials(opts?: {
  featuredOnly?: boolean;
  service?: Testimonial["service"];
}): Testimonial[] {
  const all = loadJson("testimonials.json", z.array(testimonialSchema));
  return all
    .filter((t) => t.approved)
    .filter((t) => (opts?.featuredOnly ? t.featured : true))
    .filter((t) => (opts?.service ? t.service === opts.service : true));
}

export function getFaqs(category?: Faq["category"]): Faq[] {
  const all = loadJson("faqs.json", z.array(faqSchema));
  return category ? all.filter((f) => f.category === category) : all;
}

export function getPricing(): Pricing {
  return loadJson("pricing.json", pricingSchema);
}
