"use client";

import Image from "next/image";
import { FAQAccordion } from "./FAQAccordion";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export function FAQSection() {
  const [mounted, setMounted] = useState(false);
  const [headingRef, headingVisible] = useInView();
  const [imageRef, imageVisible] = useInView({ threshold: 0.08 });
  const [accordionRef, accordionVisible] = useInView({ threshold: 0.05 });
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="faq" className="bg-black py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="flex flex-col">
          <h2
            ref={headingRef}
            className={`flex flex-row items-center justify-start gap-x-2 gap-y-0 font-display text-left text-2xl font-bold uppercase leading-[1.05] tracking-[0.03em] md:text-4xl md:items-start md:justify-start sm:flex-col sm:gap-x-0 sm:gap-y-2${mounted ? ` anim-hidden${headingVisible ? " anim-visible slide-left" : ""}` : ""}`}
          >
            <span className="whitespace-nowrap text-white">Frequently asked</span>
            <span className="whitespace-nowrap text-[#42FF00]">questions</span>
          </h2>
          <p
            className={`mt-6 max-w-md text-sm leading-relaxed text-white/70 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base${mounted ? ` anim-hidden${headingVisible ? " anim-visible fade-up" : ""}` : ""}`}
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            Got questions? We&apos;ve got answers. Everything you need to know
            about bringing authentic Afrobeat rhythms to your productions.
          </p>

          {/* FAQ side image */}
          <div
            ref={imageRef}
            className={`relative mt-10 aspect-[560/420] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-zinc-900${mounted ? ` anim-hidden${imageVisible ? " anim-visible scale-in" : ""}` : ""}`}
            style={{ "--delay": "60ms" } as React.CSSProperties}
          >
            <Image
              src="/faqimage.avif"
              alt="Producer with headphones in the studio"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
        </div>

        <div
          ref={accordionRef}
          className={`min-w-0 md:pt-2${mounted ? ` anim-hidden${accordionVisible ? " anim-visible slide-right" : ""}` : ""}`}
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
