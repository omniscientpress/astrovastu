import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and reschedule policy for AstroVastu consultations.",
};

export default function RefundPage() {
  return (
    <Section narrow>
      <h1 className="text-3xl font-bold text-primary-900">Refund &amp; Reschedule Policy</h1>
      <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
        <p>
          We understand plans change. Here is how rescheduling and refunds work for AstroVastu
          consultations:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-primary-900">Reschedule:</strong> Free with at least{" "}
            <strong className="text-primary-900">24 hours&apos; notice</strong> before your
            confirmed slot.
          </li>
          <li>
            <strong className="text-primary-900">Refund:</strong> Full refund if you cancel{" "}
            <strong className="text-primary-900">24 hours or more</strong> before the confirmed
            slot.
          </li>
          <li>
            <strong className="text-primary-900">Within 24 hours:</strong> Cancellations inside
            the 24-hour window are non-refundable. We will still try to reschedule subject to
            availability.
          </li>
        </ul>
        <p>
          Payment is collected via UPI after slot confirmation on WhatsApp. For refund or
          reschedule requests, message us on WhatsApp with your booking details.
        </p>
      </div>
    </Section>
  );
}
