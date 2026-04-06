import Link from "next/link";
import {
  FaApple,
  FaInstagram,
  FaWindows,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
  { label: "X", href: "#", Icon: FaXTwitter },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "Instagram", href: "#", Icon: FaInstagram },
] as const;

export function Footer() {
  return (
    <footer className="bg-black pb-10 pt-5 md:pb-14 md:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-sm">
            <Link href="#" className="inline-flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#22C55E]">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 size-5 fill-black"
                  aria-hidden
                >
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
              <span className="font-display text-xl font-bold tracking-wide text-white">
                ROOTS
              </span>
            </Link>
            <p className="mt-4 text-sm lg:max-w-[70%] leading-relaxed text-white [font-family:ui-sans-serif,system-ui,sans-serif]">
              Ready to elevate your Afrobeat production? Start creating authentic
              rhythms today.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
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
              <p className="text-sm font-semibold text-white [font-family:ui-sans-serif,system-ui,sans-serif]">
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
              <p className="text-sm font-semibold text-white [font-family:ui-sans-serif,system-ui,sans-serif]">
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
            className="text-center font-inter tracking-[5px] text-3xl md:text-5xl text-[#252525] md:text-7xl lg:text-8xl bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent"
          >
            <span
              style={{
                background: "linear-gradient(to right, #000 0%, rgba(255,245,245,0.72) 50%, #000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Download ON
            </span>
          </h2>
          <div className="mt-8 flex justify-center gap-4 md:mt-10">
            <Link
              href="#"
              aria-label="Download for Windows"
              className="flex size-14 items-center justify-center rounded-xl bg-[#22C55E] text-white transition hover:bg-[#16a34a] md:size-16"
            >
              <FaWindows className="size-7 md:size-8" aria-hidden />
            </Link>
            <Link
              href="#"
              aria-label="Download for Mac"
              className="flex size-14 items-center justify-center rounded-xl bg-[#22C55E] text-white transition hover:bg-[#16a34a] md:size-16"
            >
              <FaApple className="size-7 md:size-8" aria-hidden />
            </Link>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-zinc-500 [font-family:ui-sans-serif,system-ui,sans-serif] md:mt-20">
          All rights reserved Roots 2026
        </p>
      </div>
    </footer>
  );
}
