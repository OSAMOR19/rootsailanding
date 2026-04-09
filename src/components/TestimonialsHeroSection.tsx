"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";
import { TestimonialCard } from "./TestimonialCard";

const MARCUS_PORTRAITS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face&auto=format",
] as const;

const PAUL_PORTRAITS = [
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=128&h=128&fit=crop&crop=face&auto=format",
  "/mostafa.jpg",
  "/vince.jpg",
] as const;

const CARDS = [
  { accent: "white" as const, quote: "ROOTS changed my workflow completely. The AI understands exactly what I need, and the drum library is incredible.", name: "Marcus Johnson", role: "Grammy Nominated Producer", portraits: MARCUS_PORTRAITS },
  { accent: "green" as const, quote: "ROOTS saves me hours. The prompt feature is genius. I just describe what I want and it delivers.", name: "Paul Ogedengbe", role: "Producer", portraits: PAUL_PORTRAITS },
  { accent: "white" as const, quote: "Finally, a drum tool that gets Afrobeats. The library is deep and the AI matching is on point every time.", name: "Marcus Johnson", role: "Grammy Nominated Producer", portraits: MARCUS_PORTRAITS },
  { accent: "green" as const, quote: "ROOTS saves me hours. The prompt feature is genius. I just describe what I want and it delivers.", name: "Paul Ogedengbe", role: "Producer", portraits: PAUL_PORTRAITS },
  { accent: "white" as const, quote: "ROOTS changed my workflow completely. The AI understands exactly what I need, and the drum library is incredible.", name: "Marcus Johnson", role: "Grammy Nominated Producer", portraits: MARCUS_PORTRAITS },
  { accent: "green" as const, quote: "ROOTS saves me hours. The prompt feature is genius. I just describe what I want and it delivers.", name: "Paul Ogedengbe", role: "Producer", portraits: PAUL_PORTRAITS },
];

export function TestimonialsHeroSection() {
  const [mounted, setMounted] = useState(false);
  const [headerRef, headerVisible] = useInView();
  const [trackRef, trackVisible] = useInView({ threshold: 0.05 });
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="bg-black lg:pt-20 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <header
          ref={headerRef}
          className={`text-center${mounted ? ` anim-hidden${headerVisible ? " anim-visible fade-up" : ""}` : ""}`}
        >
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white md:text-4xl max-w-3xl mx-auto">
            What industry professionals are saying about ROOTS.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:mt-8 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
            Trusted by producers who move culture forward. Here&apos;s what
            they say about working with ROOTS.
          </p>
        </header>
      </div>

      {/* Full-bleed marquee */}
      <div className="relative mt-14 md:mt-20 overflow-hidden">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10" style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10" style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }} />

        <div
          ref={trackRef}
          className={`${mounted ? `anim-hidden${trackVisible ? " anim-visible fade-in" : ""}` : ""}`}
          style={{ "--delay": "150ms" } as React.CSSProperties}
        >
          <div className="marquee-track gap-6 md:gap-8 pb-4 items-stretch">
            {/* Doubled for seamless loop */}
            {[...CARDS, ...CARDS].map((c, i) => (
              <div key={i} className="shrink-0 w-[300px] md:w-[340px]">
                <TestimonialCard
                  accent={c.accent}
                  quote={c.quote}
                  name={c.name}
                  role={c.role}
                  portraits={c.portraits}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
