import { PillarPage } from "@/components/sections/PillarPage";
import { getFaqs, getService, getTestimonials } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vastu Consultant in Hyderabad",
  description:
    "Vastu consultation for home, office, shop, and plot — remedies without demolition. Online worldwide, in-person in Hyderabad by appointment.",
};

export default function VastuPage() {
  return (
    <PillarPage
      service={getService("vastu")}
      faqs={getFaqs()}
      testimonials={getTestimonials()}
    />
  );
}
