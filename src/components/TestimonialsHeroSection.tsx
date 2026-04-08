
"use client" 
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

export function TestimonialsHeroSection() {
  return (
    <section className="bg-black lg:pt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white md:text-4xl max-w-3xl mx-auto">
            What industry professionals are saying about ROOTS.
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:mt-8 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]"
          >
            Got questions? We&apos;ve got answers. Everything you need to know
            about bringing authentic Afrobeat rhythms to your productions.
          </p>
        </header>

        <div className="mt-14 flex gap-6 md:mt-20 md:flex md:gap-8 justify-center items-center"
         style={{
          minWidth: "fit-content",
          animation: "scroll-left 16s linear infinite",
        }}>
          <TestimonialCard
            accent="white"
            quote="ROOTS change my workflow completely. The AI understands exactly what I need, and the drum library is incredible."
            name="Marcus Johnson"
            role="Grammy Nominated Producer"
            portraits={MARCUS_PORTRAITS}
          />
          <TestimonialCard
            accent="green"
            quote="ROOTS save me hours. The prompt features is genius. I just describe what I want and it delivers."
            name="Paul Ogedengbe"
            role="Producer"
            portraits={PAUL_PORTRAITS}
          />
          <TestimonialCard
            accent="white"
            quote="ROOTS change my workflow completely. The AI understands exactly what I need, and the drum library is incredible."
            name="Marcus Johnson"
            role="Grammy Nominated Producer"
            portraits={MARCUS_PORTRAITS}
          />
          <TestimonialCard
            accent="green"
            quote="ROOTS save me hours. The prompt features is genius. I just describe what I want and it delivers."
            name="Paul Ogedengbe"
            role="Producer"
            portraits={PAUL_PORTRAITS}
          />
          <TestimonialCard
            accent="green"
            quote="ROOTS save me hours. The prompt features is genius. I just describe what I want and it delivers."
            name="Paul Ogedengbe"
            role="Producer"
            portraits={PAUL_PORTRAITS}
          />
          <TestimonialCard
            accent="green"
            quote="ROOTS save me hours. The prompt features is genius. I just describe what I want and it delivers."
            name="Paul Ogedengbe"
            role="Producer"
            portraits={PAUL_PORTRAITS}
          />
           <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
