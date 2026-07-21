import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  getAllServices,
  getFaqs,
  getPricing,
  getSite,
  getTestimonials,
  getUseCases,
} from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { getLogoSrc } from "@/lib/brand";
import { PillarsBanner } from "@/components/sections/PillarsBanner";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Home, Type } from "lucide-react";

export default function HomePage() {
  const site = getSite();
  const services = getAllServices();
  const useCases = getUseCases();
  const pricing = getPricing();
  const featuredPackages = pricing.packages.filter((p) => p.highlighted || p.pillar === "kp").slice(0, 3);
  const featured = site.showTestimonials
    ? getTestimonials({ featuredOnly: true }).slice(0, 3)
    : [];
  const faqs = getFaqs("general").slice(0, 5);
  const wa = buildWaLink({ page: "home" });
  const logoSrc = getLogoSrc();

  return (
    <>
      <PageHero
        badge={site.serviceDescriptor}
        title="Clear guidance for timing, space, and name decisions."
        tagline={site.differentiator}
        description={`Divine Jyothi with ${site.consultantName} in ${site.city} — integrated KP Astrology, Vastu, and Numerology for career, marriage, property, naming, and important life decisions.`}
        whatsappHref={wa}
        whatsappLabel="Message on WhatsApp"
        secondaryHref="/book/"
        secondaryLabel="Book Consultation"
        iconSrc={logoSrc}
      >
        <p className="mt-6 text-sm text-neutral-400">
          Hyderabad-based · Online worldwide · By appointment · Practical guidance, not fear-based
          prediction
        </p>
      </PageHero>

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

      <Section>
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-900">I need help with…</h2>
          <p className="mt-3 text-neutral-600">
            Start from your situation — we&apos;ll map it to KP Astrology, Vastu, Numerology, or a
            combined consultation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <Link
              key={uc.id}
              href={uc.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-accent-400"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-accent-700">{uc.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{uc.description}</p>
              <p className="mt-3 text-xs text-neutral-500">{uc.pillars.join(" · ")}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="primary" className="!py-16 md:!py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">The Divine Jyothi method</h2>
          <p className="mt-3 text-neutral-300">
            One integrated framework — Timing, Space, and Name — so recommendations do not fight
            each other.
          </p>
        </div>
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Timing",
              subtitle: "KP Astrology",
              body: "When to act — career windows, marriage timing, muhurtham, and Prashna for urgent questions.",
            },
            {
              icon: Home,
              title: "Space",
              subtitle: "Vastu",
              body: "Where life unfolds — home, office, and plot guidance with remedies that avoid demolition-first advice.",
            },
            {
              icon: Type,
              title: "Name",
              subtitle: "Numerology",
              body: "How identity is spelled and numbered — names and mobile numbers cross-checked with your chart.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <item.icon className="mb-4 h-8 w-8 text-accent-300" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent-300">{item.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.body}</p>
            </div>
          ))}
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
          <h2 className="text-3xl font-bold text-primary-900">How consultation works</h2>
          <p className="mt-3 text-neutral-600">A clear path from question to confirmed session.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Share your question", "WhatsApp or booking form with birth, space, or name details."],
            ["02", "Confirm a slot", "We propose available IST times; you confirm."],
            ["03", "Pay via UPI", "After slot confirmation — no card checkout on the site."],
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

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Founder
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary-900">
              {site.consultantName}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-500">{site.founderTitle}</p>
            <p className="mt-4 leading-relaxed text-neutral-600">{site.philosophy}</p>
            <p className="mt-4 text-sm text-neutral-600">
              Languages: {site.languages.join(" · ")} · Based in {site.city}
            </p>
            <Button href="/about/" variant="ghost" className="mt-6">
              About {site.brandName} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <Image
              src={logoSrc}
              alt=""
              width={160}
              height={160}
              className="mx-auto h-40 w-40 object-contain"
            />
            <p className="mt-4 text-sm text-neutral-500">
              Practitioner-led consultations — calm, precise, and non-sensational.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-primary-900">Packages</h2>
            <p className="mt-2 text-neutral-600">Transparent pricing — pay via UPI after slot confirmation.</p>
          </div>
          <Link href="/pricing/" className="text-sm font-semibold text-accent-700 hover:underline">
            Full pricing →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-primary-900">{pkg.name}</h3>
              <div className="mt-2 text-2xl font-bold text-accent-700">{pkg.priceLabel}</div>
              <p className="mt-2 text-sm text-neutral-600">{pkg.bestFor}</p>
              <p className="mt-3 text-xs text-neutral-500">
                {pkg.duration} · {pkg.deliveryMode}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {featured.length > 0 ? <TestimonialGrid testimonials={featured} /> : null}
      <FaqSection faqs={faqs} />
      <CtaBanner
        title="Ready for clear next steps?"
        description="Message on WhatsApp with your question, or book a slot online."
        whatsappHref={wa}
        secondaryHref="/book/"
        secondaryLabel="Book a slot"
      />
    </>
  );
}
