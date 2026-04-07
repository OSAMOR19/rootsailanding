import fs from "node:fs";
import path from "node:path";
import type { LucideIcon } from "lucide-react";
import { Cloud, Drum, Headphones, Library } from "lucide-react";
import { FeatureRow } from "./FeatureRow";

const PLACEHOLDER = "/workflow-ui-placeholder.svg";

function resolveRowImage(rowIndex: number): string {
  const name = `roots-special-row-${rowIndex}.png`;
  const pngPath = path.join(process.cwd(), "public", name);
  if (fs.existsSync(pngPath)) {
    return `/${name}`;
  }
  return PLACEHOLDER;
}

type FeatureItem = {
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  secondaryText?: string;
};

const FEATURES: FeatureItem[] = [
  {
    badge: "Intelligent analysis",
    icon: Headphones,
    title: "It Listens to Your Music",
    description:
      "ROOTS can analyze what's playing in your DAW or any audio you upload, tempo, groove, and feel. It understands context before suggesting drums, so everything fits naturally.",
  },
  {
    badge: "Next gen AI",
    icon: Cloud,
    title: "Create With Prompts",
    description:
      "Tell ROOTS what you want. From 'mid-tempo abstract groove' to 'dark weapons house' ROOTS your prompt to guide intelligent drum recommendations without forcing creative decisions.",
  },
  {
    badge: "Realistic sounds",
    icon: Drum,
    title: "Built on Real Drums",
    description:
      "Every drum kit in ROOTS is human-made, professionally produced, and naturally authentic.",
    secondaryText: "No AI-generated fake drums.",
  },
  {
    badge: "Curated library",
    icon: Library,
    title: "A Deep, Curated Drum Library",
    description:
      "Browse with a library of authentic human-made drum packs, curated for tempo, groove, and genre so the right sound is always within reach.",
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
              badge={item.badge}
              icon={item.icon}
              title={item.title}
              description={item.description}
              secondaryText={item.secondaryText}
              imageSrc={resolveRowImage(i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
