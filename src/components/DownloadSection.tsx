"use client";

import Link from "next/link";
import { FaApple, FaWindows } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

const RELEASE_BASE =
  "https://github.com/OSAMOR19/rootsDESKTOP/releases/latest/download";

const DOWNLOADS = [
  {
    os: "macOS",
    label: "Download for Mac",
    sublabel: "macOS 10.12+ (Intel & Apple Silicon)",
    href: `${RELEASE_BASE}/Roots-1.0.0.dmg`,
    icon: FaApple,
    id: "download-mac",
  },
  {
    os: "Windows",
    label: "Download for Windows",
    sublabel: "Windows 10+ (64-bit)",
    href: `${RELEASE_BASE}/Roots-Setup-1.0.0.exe`,
    icon: FaWindows,
    id: "download-windows",
  },
];

function anim(mounted: boolean, visible: boolean, type: string, delay = "0ms") {
  if (!mounted) return { className: "", style: {} };
  return {
    className: `anim-hidden${visible ? ` anim-visible ${type}` : ""}`,
    style: { "--delay": delay } as React.CSSProperties,
  };
}

export function DownloadSection() {
  const [mounted, setMounted] = useState(false);
  const [ref, visible] = useInView({ threshold: 0.1 });
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="download"
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Animated ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[400px] w-[600px] rounded-full glow-pulse"
          style={{ background: "radial-gradient(ellipse at center, rgba(45,219,22,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <p {...anim(mounted, visible, "fade-in", "0ms")}
          className={`mb-6 inline-block text-sm font-medium rounded-[20px] bg-yellow-500/10 py-1 px-4 uppercase tracking-widest text-yellow-500 ${anim(mounted, visible, "fade-in", "0ms").className}`}
        >
          Coming Soon
        </p>

        {/* Headline */}
        <h2
          className={`font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl ${anim(mounted, visible, "fade-up", "80ms").className}`}
          style={anim(mounted, visible, "fade-up", "80ms").style}
        >
          Get{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #2DDB16 0%, #ffffff 60%, #2DDB16 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ROOTS Desktop
          </span>
        </h2>

        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base ${anim(mounted, visible, "fade-up", "160ms").className}`}
          style={anim(mounted, visible, "fade-up", "160ms").style}
        >
          Download the native desktop app and drag African-inspired drum loops
          directly into your DAW — Ableton, FL Studio, Logic &amp; more.
        </p>

        {/* Download Cards */}
        <div
          className={`mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${anim(mounted, visible, "fade-up", "260ms").className}`}
          style={anim(mounted, visible, "fade-up", "260ms").style}
        >
          {DOWNLOADS.map(({ os, label, sublabel, icon: Icon, id }) => (
            <button
              key={os}
              id={id}
              onClick={() => alert("Coming soon! The ROOTS Desktop app is currently in development.")}
              aria-label={label}
              className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left transition-all duration-300 hover:border-[#2DDB16]/50 hover:bg-[#2DDB16]/10 hover:shadow-[0_0_28px_rgba(45,219,22,0.15)] hover:-translate-y-0.5 sm:w-auto sm:min-w-[220px]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#2DDB16] text-black transition-transform duration-200 group-hover:scale-110">
                <Icon className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{label}</span>
                <span className="block text-xs text-white/50">{sublabel}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Version note */}
        <p
          className={`mt-8 text-xs text-white/30 ${anim(mounted, visible, "fade-in", "420ms").className}`}
          style={anim(mounted, visible, "fade-in", "420ms").style}
        >
          Version 1.0.0 · Free to download · Requires a Roots account
        </p>
      </div>
    </section>
  );
}
