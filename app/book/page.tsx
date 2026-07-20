import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { BookingForm } from "@/components/forms/BookingForm";
import { buildWaLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Book a KP Astrology, Vastu, or Numerology consultation with Siva Kola. Confirm on WhatsApp after submitting your preferred slot.",
};

type SearchParams = Promise<{ service?: string }>;

export default async function BookPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const map: Record<string, string> = {
    "kp-astrology": "KP",
    kp: "KP",
    astrology: "KP",
    vastu: "VASTU",
    numerology: "NUMEROLOGY",
    combo: "COMBO",
  };
  const initial = params.service ? map[params.service] || params.service.toUpperCase() : "";
  const wa = buildWaLink({ page: "book" });

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <Badge>Book online</Badge>
        <h1 className="mt-3 text-3xl font-bold text-primary-900">Book a consultation</h1>
        <p className="mt-3 text-neutral-600">
          Choose your service, share details, and pick a preferred IST slot. After submit,
          confirm on WhatsApp — payment via UPI once the slot is confirmed.
        </p>
        <div className="mt-4">
          <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Or message WhatsApp directly
          </Button>
        </div>
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <BookingForm initialService={["KP", "VASTU", "NUMEROLOGY", "COMBO"].includes(initial) ? initial : ""} />
        </div>
      </div>
    </Section>
  );
}
