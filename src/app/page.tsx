import {
  Header,
  HeroSection,
  TestimonialsHeroSection,
  WorkflowShowcaseSection,
  WhatMakesRootsSpecialSection,
  PricingSection,
  FAQSection,
  Footer,
} from "@/components";
import Authentic from "@/components/Authentic";
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TestimonialsHeroSection />
        <WorkflowShowcaseSection />
        <WhatMakesRootsSpecialSection />
        <Authentic />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
