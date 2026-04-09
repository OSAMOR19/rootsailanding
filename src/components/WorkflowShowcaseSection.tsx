"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export function WorkflowShowcaseSection() {
  const [mounted, setMounted] = useState(false);
  const [headerRef, headerVisible] = useInView();
  const [videoRef, videoVisible] = useInView({ threshold: 0.08 });
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="library" className="bg-black md:py-24 py-16 overflow-hidden">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">

        {/* Heading */}
        <div
          ref={headerRef}
          className={`flex w-full flex-col items-center text-center${mounted ? ` anim-hidden${headerVisible ? " anim-visible fade-up" : ""}` : ""}`}
        >
          <h2 className="font-display text-2xl font-bold uppercase leading-[1.5] tracking-[0.03em] text-white md:text-4xl">
            The smartest way to build afrobeats &amp; modern
            <br />
            <span className="text-[#42FF00]">African drums</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[38rem] text-sm font-normal leading-relaxed text-white/70 md:mt-2 md:text-base">
            See how ROOTS revolutionizes your drum workflow with intelligent AI
            recommendations
          </p>
        </div>

        {/* Video */}
        <div
          ref={videoRef}
          className={`w-[80%] lg:h-[500px] mt-10${mounted ? ` anim-hidden${videoVisible ? " anim-visible scale-in" : ""}` : ""}`}
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <video
            src="/workflow.mp4"
            controls
            loop
            muted
            className="h-auto w-full rounded-[20px] aspect-[800/640] shadow-[0_16px_60px_rgba(66,255,0,0.07)]"
          />
        </div>
      </div>
    </section>
  );
}
