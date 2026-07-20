import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getAllServices, getSite, getTestimonials } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const site = getSite();
  const services = getAllServices();
  const featured = getTestimonials({ featuredOnly: true }).slice(0, 3);
  const wa = buildWaLink({ page: "home" });

  return (
    <>
      <Section tone="primary" className="relative overflow-hidden !py-20 md:!py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <Badge tone="accent" className="mb-5 bg-accent-500/20 text-accent-200">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            {site.tagline}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Timing. Space. Name.
            <span className="block text-accent-400">One integrated consultation.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-300">
            AstroVastu bridges KP Astrology&apos;s timing precision, Vastu&apos;s spatial wisdom,
            and Numerology&apos;s vibrational alignment — clear guidance without mystifying fluff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </Button>
            <Button href="/pricing/" variant="ghost" className="border-white/20 text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>

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
          <Badge>Services</Badge>
          <h2 className="mt-3 text-3xl font-bold text-primary-900">Three pillars. One brand.</h2>
          <p className="mt-3 text-neutral-600">
            Choose a focused consultation — or the AstroVastu Combo for integrated guidance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <h3 className="text-xl font-bold text-primary-900">{service.shortTitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                {service.tagline}
              </p>
              <Link
                href={`/services/${service.slug}/`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-600"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="mb-10 text-center">
          <Badge>Testimonials</Badge>
          <h2 className="mt-3 text-3xl font-bold text-primary-900">What clients say</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Placeholder quotes for scaffolding — replace with permission-cleared reviews before launch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <Card key={t.id}>
              <div className="mb-3 text-accent-500">{"★".repeat(t.rating)}</div>
              <p className="text-sm leading-relaxed text-neutral-700">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 text-sm font-semibold text-primary-900">{t.name}</div>
              <div className="text-xs text-neutral-500">{t.location}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Ready to book?</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-300">
            Message us on WhatsApp with your question, or pick a slot on the booking page.
            Payment via UPI after slot confirmation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </Button>
            <Button href="/book/" variant="secondary">
              Book a slot
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
