import { PillarPage } from "@/components/sections/PillarPage";
import { getFaqs, getService, getTestimonials } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP Astrology Consultation",
  description:
    "Expert KP astrology consultations for career, marriage, muhurtham, finance, health, and Prashna. Precise timing guidance with Siva Kola.",
};

export default function KpAstrologyPage() {
  return (
    <PillarPage
      service={getService("kp-astrology")}
      faqs={getFaqs()}
      testimonials={getTestimonials()}
    />
  );
}
