"use client";

import Link from "next/link";
import { FaApple, FaWindows } from "react-icons/fa";

// ─── GitHub Release download URLs ─────────────────────────────────────────────
// Update these URLs after each new release on GitHub.
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

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle green glow backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-[#2DDB16]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <p className="mb-6 inline-block text-sm font-medium rounded-[20px] bg-[#2DDB161A] py-1 px-4 uppercase tracking-widest text-[#2DDB16]">
          Available Now
        </p>

        {/* Headline */}
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Get{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #2DDB16 0%, #ffffff 60%, #2DDB16 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ROOTS Desktop
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          Download the native desktop app and drag African-inspired drum loops
          directly into your DAW — Ableton, FL Studio, Logic & more.
        </p>

        {/* Download Cards */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {DOWNLOADS.map(({ os, label, sublabel, href, icon: Icon, id }) => (
            <Link
              key={os}
              id={id}
              href={href}
              aria-label={label}
              className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left transition hover:border-[#2DDB16]/50 hover:bg-[#2DDB16]/10 sm:w-auto sm:min-w-[220px]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#2DDB16] text-black transition group-hover:scale-110">
                <Icon className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  {label}
                </span>
                <span className="block text-xs text-white/50">{sublabel}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Version note */}
        <p className="mt-8 text-xs text-white/30">
          Version 1.0.0 · Free to download · Requires a Roots account
        </p>
      </div>
    </section>
  );
}
