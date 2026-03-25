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
  "https://images.unsplash.com/photo-1504257432389-52343af06eab?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1531384441138-2736e62e0915?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop&crop=face&auto=format",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=128&h=128&fit=crop&crop=face&auto=format",
] as const;

export function TestimonialsHeroSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-wid text-white md:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
            What industry professionals are saying about <br/>ROOTS.
          </h2>
          <p
            className="mx-auto mt-6 text-sm leading-relaxed text-zinc-400 md:mt-8 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]"
          >
            Got questions? We&apos;ve got answers. Everything you need to know
            about bringing authentic Afrobeat rhythms to your productions.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
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
        </div>
      </div>
    </section>
  );
}
