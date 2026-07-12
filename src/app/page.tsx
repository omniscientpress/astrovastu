import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
