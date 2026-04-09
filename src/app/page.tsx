import {
  Header,
  HeroSection,
  TestimonialsHeroSection,
  WorkflowShowcaseSection,
  WhatMakesRootsSpecialSection,
  PricingSection,
  DownloadSection,
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
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
