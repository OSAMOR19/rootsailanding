"use client";

import Link from "next/link";
import {
  FaApple,
  FaInstagram,
  FaWindows,
  FaYoutube,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image"

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Library", href: "#library" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const supportLinks = [
  { label: "About us", href: "#" },
  { label: "How it works", href: "#" },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@manifxtaudio", Icon: FaYoutube },
  { label: "Instagram", href: "https://instagram.com/manifxt.audio", Icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com/@manifxtaudio", Icon: FaTiktok },
] as const;

export function Footer() {
  return (
    <footer className="bg-black pb-10 pt-5 md:pb-14 md:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-sm">
            <Link href="#" className="inline-flex items-center gap-2.5">
            <Image src="/logo.avif" alt="ROOTS" width={50} height={50} className="w-10 h-10" />

              <span className="font-display text-xl font-bold tracking-wide text-white">
                ROOTS
              </span>
            </Link>
            <p className="mt-4 text-sm lg:max-w-[70%] leading-relaxed text-white/70 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
              Ready to elevate your Afrobeat production? Start creating authentic
              rhythms today.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white transition hover:text-[#22C55E]"
                >
                  <Icon className="size-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-20 md:justify-end">
            <div>
              <p className="text-sm font-semibold text-white md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
                Product
              </p>
              <ul className="mt-4 space-y-3">
                {productLinks.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-400 transition hover:text-white [font-family:ui-sans-serif,system-ui,sans-serif]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
                Support
              </p>
              <ul className="mt-4 space-y-3">
                {supportLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-400 transition hover:text-white [font-family:ui-sans-serif,system-ui,sans-serif]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          id="download"
          className="md:mt-10 mt-2 border-t border-white/5 md:pt-16 md:pt-10"
        >
          <h2
            className="text-center font-inter tracking-[5px] text-2xl md:text-4xl lg:text-8xl bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent"
          >
            <span
              style={{
                background: "linear-gradient(to right, #000 0%, rgba(255,245,245,0.72) 50%, #000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coming soon to
            </span>
          </h2>
          <div className="mt-8 flex justify-center gap-4 md:mt-10">
            <button
              onClick={() => alert("Coming soon! The ROOTS Desktop app is currently in development.")}
              aria-label="Download for Windows"
              className="flex size-14 items-center justify-center rounded-xl bg-[#22C55E] text-white transition hover:bg-[#16a34a] md:size-16"
            >
              <FaWindows className="size-7 md:size-8" aria-hidden />
            </button>
            <button
              onClick={() => alert("Coming soon! The ROOTS Desktop app is currently in development.")}
              aria-label="Download for Mac"
              className="flex size-14 items-center justify-center rounded-xl bg-[#22C55E] text-white transition hover:bg-[#16a34a] md:size-16"
            >
              <FaApple className="size-7 md:size-8" aria-hidden />
            </button>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-zinc-500 [font-family:ui-sans-serif,system-ui,sans-serif] md:mt-20">
          All rights reserved Roots 2026
        </p>
      </div>
    </footer>
  );
}
