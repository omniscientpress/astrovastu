import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Section } from "@/components/ui/Section";
import { getAllServices, getFaqs, getSite, getTestimonials } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { getLogoSrc } from "@/lib/brand";
import { PillarsBanner } from "@/components/sections/PillarsBanner";

export default function HomePage() {
  const site = getSite();
  const services = getAllServices();
  const featured = getTestimonials({ featuredOnly: true }).slice(0, 3);
  const faqs = getFaqs("general").slice(0, 4);
  const wa = buildWaLink({ page: "home" });
  const logoSrc = getLogoSrc();

  return (
    <>
      <PageHero
        badge={site.tagline}
        title="Timing. Space. Name."
        tagline="One integrated consultation."
        description={`With ${site.consultantName} in ${site.city} — KP Astrology's timing precision, Vastu's spatial wisdom, and Numerology's vibrational alignment.`}
        whatsappHref={wa}
        secondaryHref="/pricing/"
        secondaryLabel="View pricing"
        iconSrc={logoSrc}
      />

      <Section tone="muted">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-900 md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="primary" className="!py-16 md:!py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Three pillars. One brand.</h2>
          <p className="mt-3 text-neutral-300">
            Astrology, Numerology, and Vastu — or the AstroVastu Combo for integrated guidance.
          </p>
        </div>
        <PillarsBanner className="mb-8" priority />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} dark />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-900">How it works</h2>
          <p className="mt-3 text-neutral-600">Simple path from question to confirmed consultation.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Share your question", "WhatsApp us or use the booking form with birth/space/name details."],
            ["02", "Confirm a slot", "We propose available IST times; you confirm."],
            ["03", "Pay via UPI", "After slot confirmation — no on-site card checkout needed."],
            ["04", "Consultation", "Video/phone online, or in-person in Hyderabad by appointment."],
          ].map(([step, title, desc]) => (
            <div key={step} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-sm font-bold text-accent-300">
                {step}
              </div>
              <h3 className="text-lg font-semibold text-primary-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <TestimonialGrid testimonials={featured} />
      <FaqSection faqs={faqs} />
      <CtaBanner
        title="Ready to book?"
        description="Message us on WhatsApp with your question, or pick a slot online."
        whatsappHref={wa}
        secondaryHref="/book/"
        secondaryLabel="Book a slot"
      />
    </>
  );
}
