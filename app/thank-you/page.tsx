import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Section narrow className="text-center">
      <h1 className="text-3xl font-bold text-primary-900">Thank you</h1>
      <p className="mt-3 text-neutral-600">
        We received your message and will reply on WhatsApp shortly.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Back to home
      </Button>
    </Section>
  );
}
