import { PillarPage } from "@/components/sections/PillarPage";
import { getFaqs, getService, getTestimonials } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numerology Consultation",
  description:
    "Blended numerology for name correction, baby names, business names, and mobile numbers — cross-checked with your birth chart.",
};

export default function NumerologyPage() {
  return (
    <PillarPage
      service={getService("numerology")}
      faqs={getFaqs()}
      testimonials={getTestimonials()}
    />
  );
}
