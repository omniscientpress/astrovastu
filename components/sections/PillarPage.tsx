import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Faq, ServicePillar, Specialty, Testimonial } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const accentText: Record<ServicePillar["accent"], string> = {
  gold: "text-pillar-gold",
  teal: "text-pillar-teal",
  lime: "text-pillar-lime",
};

const waPage: Record<ServicePillar["slug"], "kp-astrology" | "vastu" | "numerology"> = {
  "kp-astrology": "kp-astrology",
  vastu: "vastu",
  numerology: "numerology",
};

const faqCategory: Record<ServicePillar["slug"], Faq["category"]> = {
  "kp-astrology": "astrology",
  vastu: "vastu",
  numerology: "numerology",
};

const testimonialService: Record<ServicePillar["slug"], Testimonial["service"]> = {
  "kp-astrology": "kp",
  vastu: "vastu",
  numerology: "numerology",
};

type PillarPageProps = {
  service: ServicePillar;
  faqs: Faq[];
  testimonials: Testimonial[];
  specialties?: Specialty[];
};

export function PillarPage({ service, faqs, testimonials, specialties = [] }: PillarPageProps) {
  const wa = buildWaLink({ page: waPage[service.slug] });
  const pillarFaqs = faqs.filter((f) => f.category === faqCategory[service.slug]).slice(0, 6);
  const pillarTestimonials = testimonials
    .filter((t) => t.service === testimonialService[service.slug])
    .slice(0, 3);
  const showSpecialties = specialties.length > 0;
  const specialtyHeading =
    service.slug === "kp-astrology"
      ? "KP specialty consultations"
      : service.slug === "vastu"
        ? "Vastu specialty consultations"
        : "Numerology specialty consultations";
  const specialtySub =
    service.slug === "kp-astrology"
      ? "Choose a focused topic — same KP system, dedicated page for each life area."
      : service.slug === "vastu"
        ? "Home, office, plot, and remedies — dedicated pages for each focus."
        : "Name, baby name, business name, and mobile number — dedicated pages for each focus.";

  return (
    <>
      <PageHero
        badge={service.shortTitle}
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        whatsappHref={wa}
        whatsappLabel={`Book ${service.shortTitle} on WhatsApp`}
        secondaryHref="/pricing/"
        secondaryLabel="View pricing"
        iconSrc={service.icon}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary-900">Is this for you?</h2>
            <ul className="mt-5 space-y-3">
              {service.forYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accentText[service.accent])} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-900">What you&apos;ll receive</h2>
            <ul className="mt-5 space-y-3">
              {service.youReceive.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ProcessSteps
        title="How it works"
        subtitle="A clear 4-step consultation process — no mystifying fluff."
        steps={service.process}
      />

      {showSpecialties ? (
        <Section tone="muted">
          <h2 className="mb-3 text-3xl font-bold text-primary-900">{specialtyHeading}</h2>
          <p className="mb-8 max-w-2xl text-neutral-600">{specialtySub}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors hover:border-accent-400"
              >
                <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-700">
                  {s.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{s.tagline}</p>
                <p className="mt-3 text-xs font-medium text-neutral-500">
                  {s.priceLabel} · {s.duration}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                  Open page{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : (
        <Section tone="muted">
          <h2 className="mb-8 text-3xl font-bold text-primary-900">What we cover</h2>
          <div className="space-y-6">
            {service.sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-xl font-bold text-primary-900">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {section.body}
                </p>
                <Button
                  href={wa}
                  variant="ghost"
                  className="mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask about {section.title}
                </Button>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="rounded-2xl border border-accent-300 bg-accent-50 p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-primary-900">Ready to book this consultation?</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            See transparent packages on the pricing page, or message us on WhatsApp to confirm a
            slot. Payment via UPI after confirmation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp to book
            </Button>
            <Button href="/book/" variant="primary">
              Use booking form
            </Button>
            <Button href="/pricing/" variant="ghost">
              View pricing
            </Button>
          </div>
        </div>
      </Section>

      <TestimonialGrid
        title={`${service.shortTitle} client experiences`}
        subtitle="Placeholder quotes until permission-cleared reviews replace them."
        testimonials={pillarTestimonials.length ? pillarTestimonials : testimonials.slice(0, 3)}
      />

      <FaqSection faqs={pillarFaqs} />

      <CtaBanner
        title={`Book your ${service.shortTitle} consultation`}
        description="Share your question on WhatsApp — we'll confirm the slot and UPI payment next."
        whatsappHref={wa}
        secondaryHref="/book/"
        secondaryLabel="Book a slot"
      />
    </>
  );
}
