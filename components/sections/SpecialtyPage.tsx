import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Specialty } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { Check, Clock, IndianRupee, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

type SpecialtyPageProps = {
  specialty: Specialty;
};

export function SpecialtyPage({ specialty }: SpecialtyPageProps) {
  const wa = buildWaLink({
    page: specialty.slug,
  });

  return (
    <>
      <PageHero
        badge="KP Astrology"
        title={specialty.title}
        tagline={specialty.tagline}
        description={specialty.description}
        whatsappHref={wa}
        whatsappLabel={`Book ${specialty.shortTitle} on WhatsApp`}
        secondaryHref="/pricing/"
        secondaryLabel="View pricing"
        iconSrc="/images/services/astrology.svg"
      />

      <Section>
        <Link
          href="/services/kp-astrology/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary-800 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          All KP Astrology services
        </Link>

        <div className="mb-10 flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
            <IndianRupee className="h-4 w-4 text-accent-600" />
            <span className="font-semibold text-primary-900">{specialty.priceLabel}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
            <Clock className="h-4 w-4 text-accent-600" />
            <span>{specialty.duration}</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary-900">Is this for you?</h2>
            <ul className="mt-5 space-y-3">
              {specialty.forYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-pillar-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-900">What&apos;s included</h2>
            <ul className="mt-5 space-y-3">
              {specialty.features.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <h2 className="mb-8 text-3xl font-bold text-primary-900">What we cover</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialty.topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-primary-900">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{topic.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-accent-300 bg-accent-50 p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-primary-900">
            Book {specialty.shortTitle} consultation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            Message on WhatsApp with your question, or use the booking form. Payment via UPI after
            slot confirmation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp to book
            </Button>
            <Button href="/book/" variant="primary">
              Use booking form
            </Button>
            <Button href="/services/kp-astrology/" variant="ghost">
              More KP services
            </Button>
          </div>
        </div>
      </Section>

      <CtaBanner
        title={`Ask about ${specialty.shortTitle}`}
        description="Share birth details (or your Prashna question) — we'll confirm the slot next."
        whatsappHref={wa}
        secondaryHref="/book/"
        secondaryLabel="Book a slot"
      />
    </>
  );
}
