"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const roots = (
    <div className="font-display flex items-center gap-2 text-white text-xl font-semibold tracking-tight">
      <Image src="/logo.avif" alt="ROOTS" width={50} height={50} className="w-10 h-10" />
      ROOTS
    </div>
  );

  return (
    <section className="relative pt-20 bg-black md:pt-20 pb-20 overflow-hidden">
      {/* ── Animated floating green orbs ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Large central glow */}
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full hero-orb-1"
          style={{ background: "radial-gradient(ellipse at center, rgba(45,219,22,0.14) 0%, transparent 70%)" }}
        />
        {/* Top-left orb */}
        <div
          className="absolute top-[5%] left-[8%] h-[350px] w-[350px] rounded-full hero-orb-2"
          style={{ background: "radial-gradient(circle at center, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
        />
        {/* Right orb */}
        <div
          className="absolute top-[15%] right-[5%] h-[400px] w-[400px] rounded-full hero-orb-3"
          style={{ background: "radial-gradient(circle at center, rgba(45,219,22,0.1) 0%, transparent 65%)" }}
        />
        {/* Bottom-left small orb */}
        <div
          className="absolute bottom-[10%] left-[15%] h-[250px] w-[250px] rounded-full hero-orb-3"
          style={{ background: "radial-gradient(circle at center, rgba(34,197,94,0.09) 0%, transparent 70%)", animationDelay: "-8s" }}
        />
        {/* Bottom-right small orb */}
        <div
          className="absolute bottom-[20%] right-[12%] h-[300px] w-[300px] rounded-full hero-orb-1"
          style={{ background: "radial-gradient(circle at center, rgba(45,219,22,0.08) 0%, transparent 65%)", animationDelay: "-4s" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <p
          className={`mb-4 text-sm font-medium rounded-[20px] bg-[#2DDB161A] py-1 px-4 max-w-fit mx-auto uppercase tracking-widest text-[#2DDB16] anim-hidden${mounted ? " anim-visible fade-in" : ""}`}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          AI-POWERED DRUM PLUGIN
        </p>

        {/* H1 */}
        <h1
          className={`font-display text-2xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl anim-hidden${mounted ? " anim-visible fade-up" : ""}`}
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          FIND THE DRUMS <span className="text-[#2DDB16]">INSTANTLY</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/70 md:text-base anim-hidden${mounted ? " anim-visible fade-up" : ""}`}
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          ROOTS is a smart AI-powered drum plugin that understands your track
          and helps you find the right African inspired drum loops from a real,
          handcrafted library, so your drums fit perfectly every time
        </p>

        {/* CTA */}
        <div
          className={`my-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center anim-hidden${mounted ? " anim-visible fade-up" : ""}`}
          style={{ "--delay": "320ms" } as React.CSSProperties}
        >
          <Link
            href="https://rootsai.space/"
            className="group relative inline-flex h-12 items-center justify-center rounded-[15px] bg-[#249415] px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2DDB16] hover:shadow-[0_0_30px_rgba(45,219,22,0.45)] hover:scale-[1.03]"
          >
            GET ROOTED
          </Link>
        </div>

        {/* Hero image */}
        <div
          className={`anim-hidden${mounted ? " anim-visible scale-in" : ""}`}
          style={{ "--delay": "440ms" } as React.CSSProperties}
        >
          <Image
            src="/heroimg.jpg"
            alt="ROOTS"
            width={1000}
            height={1000}
            className="rounded-2xl shadow-[0_24px_80px_rgba(45,219,22,0.08)]"
            priority
          />
        </div>
      </div>

      {/* Marquee logo strip */}
      <div className="flex max-w-4xl mx-auto items-start pt-7 justify-center gap-4 bg-black w-full h-[100px] overflow-hidden relative">
        {/* Gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }} />

        <div className="w-full overflow-hidden">
          <div className="marquee-track gap-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i}>{roots}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
