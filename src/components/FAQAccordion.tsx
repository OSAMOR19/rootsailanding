"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is ROOTS",
    a: "ROOTS is an AI-powered drum plugin that listens to your track and recommends authentic, human-recorded African and Afrobeat-inspired drum loops that fit your groove, tempo, and vibe.",
  },
  {
    q: "Does ROOTS work in a DAW or as a standalone plugin?",
    a: "ROOTS is built to run inside your DAW as a plugin so it can analyze your session in context. Standalone support may vary by release—check your installer notes for the latest supported hosts.",
  },
  {
    q: "How does ROOTS use AI?",
    a: "AI is used to understand your audio and prompts, then match you to the right loops from a curated, human-made library—without generating fake drum audio.",
  },
  {
    q: "What is included in ROOTS?",
    a: "You get access to the drum library, AI matching, downloads based on your plan, and regular content drops. Pro unlocks unlimited generations, full library access, and stems where available.",
  },
  {
    q: "Does ROOTS require an internet connection to work?",
    a: "An internet connection is typically required for AI analysis, licensing checks, and library updates. Offline playback of already-downloaded material may be possible depending on your setup.",
  },
  {
    q: "Are your samples royalty-free?",
    a: "Yes—library samples are provided royalty-free for use in your productions within the license terms. Always review the EULA for broadcast, redistribution, and commercial limits.",
  },
  {
    q: "How do I manage my plan?",
    a: "Manage billing, upgrades, and cancellation from your account portal or the platform where you purchased ROOTS. Pro is billed monthly unless you switch billing options when available.",
  },
  {
    q: "Can I upload my own samples?",
    a: "Upload support depends on the product version. Many builds let you reference external audio for analysis; check in-app settings or release notes for your build.",
  },
  {
    q: "How often is the drum library updated?",
    a: "New drops ship on a regular cadence—Pro members get new packs and loops as they’re added, with highlights called out in-app and via release notes.",
  },
  {
    q: "Does ROOTS work on Mac and Windows?",
    a: "ROOTS targets both Mac and Windows for major DAWs. Verify your OS version and plugin format (AU, VST3, etc.) against the download page before installing.",
  },
  {
    q: "Is ROOTS beginner-friendly?",
    a: "Yes. Start with prompts or browse the library, preview loops in context, and download what fits. Tooltips and a shallow learning curve help you move fast without sound-design overhead.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-zinc-600">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:text-white/90"
            >
              <span className="text-[15px] font-medium leading-snug text-white [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base">
                {item.q}
              </span>
              <span className="mt-0.5 shrink-0 text-white">
                {isOpen ? (
                  <Minus className="size-5" strokeWidth={2} aria-hidden />
                ) : (
                  <Plus className="size-5" strokeWidth={2} aria-hidden />
                )}
              </span>
            </button>
            {isOpen ? (
              <div className="pb-5 text-sm leading-relaxed text-zinc-400 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-[15px]">
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
