// Server component — no "use client" needed
// Icons are rendered here as JSX (ReactNode), not passed as function references
import { Cloud, Drum, Headphones, Library } from "lucide-react";
import { FeatureRow } from "./FeatureRow";

const ICON_CLASS = "size-7 shrink-0 text-white md:size-8";

const FEATURES = [
  {
    badge: "Intelligent analysis",
    icon: <Headphones className={ICON_CLASS} strokeWidth={2} aria-hidden />,
    title: "It Listens to Your Music",
    description:
      "ROOTS can analyze what's playing in your DAW or any audio you upload, tempo, groove, and feel. It understands context before suggesting drums, so everything fits naturally.",
    imageSrc: "/rootsGIF/It Listens to Your Music (GIF).mp4",
  },
  {
    badge: "Next gen AI",
    icon: <Cloud className={ICON_CLASS} strokeWidth={2} aria-hidden />,
    title: "Create With Prompts",
    description:
      "Tell ROOTS what you want. From 'mid-tempo abstract groove' to 'dark weapons house' ROOTS your prompt to guide intelligent drum recommendations without forcing creative decisions.",
    imageSrc: "/rootsGIF/Create With Prompts (GIF).mp4",
  },
  {
    badge: "Realistic sounds",
    icon: <Drum className={ICON_CLASS} strokeWidth={2} aria-hidden />,
    title: "Built on Real Drums",
    description:
      "Every drum kit in ROOTS is human-made, professionally produced, and naturally authentic.",
    secondaryText: "No AI-generated fake drums.",
    imageSrc: "/rootsGIF/Built on REAL Drums (GIF).mp4",
  },
  {
    badge: "Curated library",
    icon: <Library className={ICON_CLASS} strokeWidth={2} aria-hidden />,
    title: "A Deep, Curated Drum Library",
    description:
      "Browse with a library of authentic human-made drum packs, curated for tempo, groove, and genre so the right sound is always within reach.",
    imageSrc: "/rootsGIF/A Deep, Curated Drum Library Of Over 2,000+ Drums .mp4",
  },
];

export function WhatMakesRootsSpecialSection() {
  return (
    <section id="features" className="bg-black py-0 md:py-28 lg:mt-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-left font-display text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-white md:text-4xl">
          What makes <span className="text-[#42FF00]">roots</span>{" "}
          special
        </h2>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {FEATURES.map((item, i) => (
            <FeatureRow
              key={item.badge}
              index={i}
              badge={item.badge}
              icon={item.icon}
              title={item.title}
              description={item.description}
              secondaryText={item.secondaryText}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
