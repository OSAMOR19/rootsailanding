"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";
import { TestimonialCard } from "./TestimonialCard";

const CARDS = [
  {
    accent: "green" as const,
    quote:
      "ROOTS changed my workflow completely. The AI understands exactly what I need, and the drum library is incredible. It's like having a session drummer who knows every African rhythm.",
    name: "Beatsbyhcien",
    role: "Producer & Beat-maker",
    avatarSrc: "/beatsbyhcien.jpeg",
    rating: 5,
  },
  {
    accent: "white" as const,
    quote:
      "ROOTS saves me hours. The prompt feature is genius. I just describe what I want and it delivers every single time, no tweaking needed.",
    name: "Paul Ogedengbe",
    role: "Producer & Beat-maker",
    avatarSrc: "/mostafa.jpg",
    rating: 5,
  },
  {
    accent: "green" as const,
    quote:
      "Finally, a drum tool that gets Afrobeats. The library is deep and the AI matching is on point. This is a game changer for my production sessions.",
    name: "Sanmi Matthew",
    role: "Music Producer",
    avatarSrc: "/sanmi_matthew.jpeg",
    rating: 5,
  },
  {
    accent: "white" as const,
    quote:
      "The quality of the drum samples is unmatched. Real human-made drums that actually sound authentic — not the same recycled loops everyone else uses.",
    name: "Vince Onyeka",
    role: "Music Producer",
    avatarSrc: "/vince.jpg",
    rating: 4,
  },
  {
    accent: "green" as const,
    quote:
      "I've tried every drum plugin out there. ROOTS is the only one that truly understands the African sound. The AI recommendations are scary accurate.",
    name: "Producer Mykah",
    role: "Afrobeats Producer",
    avatarSrc: "/producer_mykah.jpeg",
    rating: 5,
  },
  {
    accent: "white" as const,
    quote:
      "From the drag-and-drop workflow to the smart recommendations, everything about ROOTS feels premium. It's become my secret weapon in the studio.",
    name: "Rvmen",
    role: "Music Producer",
    avatarSrc: "/rvmen.jpeg",
    rating: 5,
  },
];

export function TestimonialsHeroSection() {
  const [mounted, setMounted] = useState(false);
  const [headerRef, headerVisible] = useInView();
  const [trackRef, trackVisible] = useInView({ threshold: 0.05 });
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-black py-20 lg:py-28 overflow-hidden relative">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full glow-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(45,219,22,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <header
          ref={headerRef}
          className={`text-center${
            mounted
              ? ` anim-hidden${headerVisible ? " anim-visible fade-up" : ""}`
              : ""
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2DDB16] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white md:text-4xl max-w-3xl mx-auto">
            What industry professionals are saying about ROOTS.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:mt-8 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
            Trusted by producers who move culture forward. Here&apos;s what they
            say about working with ROOTS.
          </p>
        </header>
      </div>

      {/* Full-bleed marquee */}
      <div className="relative mt-14 md:mt-20 overflow-hidden">
        {/* Gradient masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{
            background: "linear-gradient(to right, #000 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{
            background: "linear-gradient(to left, #000 0%, transparent 100%)",
          }}
        />

        <div
          ref={trackRef}
          className={`${
            mounted
              ? `anim-hidden${trackVisible ? " anim-visible fade-in" : ""}`
              : ""
          }`}
          style={{ "--delay": "150ms" } as React.CSSProperties}
        >
          <div className="marquee-track gap-5 md:gap-6 pb-4 items-stretch">
            {/* Doubled for seamless loop */}
            {[...CARDS, ...CARDS].map((c, i) => (
              <div key={i} className="shrink-0 w-[320px] md:w-[360px]">
                <TestimonialCard
                  accent={c.accent}
                  quote={c.quote}
                  name={c.name}
                  role={c.role}
                  avatarSrc={c.avatarSrc}
                  rating={c.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
