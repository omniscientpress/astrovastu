import { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services - KP Jyotish",
  description: "Explore our comprehensive KP astrology services including Muhurtham, Career, Marriage, Childbirth, Finance, Health, and Horary consultations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Expert consultations using the Krishnamurti Paddhati (KP) system for precise predictions and life guidance.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </div>
  );
}
