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

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsHeroSection />
        <WorkflowShowcaseSection />
        <WhatMakesRootsSpecialSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
