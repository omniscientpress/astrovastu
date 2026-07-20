import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and reschedule policy for AstroVastu.",
};

export default function RefundPage() {
  return (
    <Section narrow>
      <h1 className="text-3xl font-bold text-primary-900">Refund &amp; Reschedule Policy</h1>
      <p className="mt-4 text-neutral-600">
        Placeholder — replace with your real policy (Phase 0 input #10) before launch. Typical
        draft: free reschedule with 24+ hours notice; refund rules stated clearly after payment
        confirmation on WhatsApp.
      </p>
    </Section>
  );
}
