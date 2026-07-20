import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { buildWaLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Request a consultation slot for KP Astrology, Vastu, or Numerology.",
};

export default function BookPage() {
  const wa = buildWaLink({ page: "book" });

  return (
    <Section narrow>
      <Badge>Phase 1 stub</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Book a consultation</h1>
      <p className="mt-3 text-neutral-600">
        Full booking form (service → date → time → details → DB save) lands in Phase 2.
        For now, reach us on WhatsApp and we&apos;ll confirm your slot.
      </p>
      <Card className="mt-8">
        <h2 className="font-semibold text-primary-900">Coming in Phase 2</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600">
          <li>Service &amp; package selection</li>
          <li>Available time slots (IST)</li>
          <li>Client details saved to Postgres</li>
          <li>WhatsApp prefill with booking reference</li>
        </ul>
        <Button
          href={wa}
          variant="whatsapp"
          className="mt-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          Message on WhatsApp
        </Button>
      </Card>
    </Section>
  );
}
