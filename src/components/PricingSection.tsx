import Link from "next/link";
import { Check, X } from "lucide-react";
import { PricingBillingToggle } from "./PricingBillingToggle";

const PRO_FEATURES = [
  "Unlimited AI generations",
  "Unlimited downloads",
  "Full library access",
  "Stems download",
  "New drops daily",
  "Royalty free",
  "Cancel anytime",
];

const LITE_FEATURES: { text: string; included: boolean }[] = [
  { text: "Free Forever", included: true },
  { text: "5 AI generations/month", included: true },
  { text: "5 free downloads/month", included: true },
  { text: "No stems download", included: false },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42FF00] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-sm">
            Our plans
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-white md:text-4xl">
            Get rooted today!
          </h2>
        </header>

        <div className="mx-auto mt-10 grid max-w-xl gap-4 md:mt-14 md:grid-cols-2 md:items-stretch md:gap-5 lg:max-w-4xl">
          {/* ROOTS PRO */}
          <div className="relative flex h-full flex-col rounded-2xl bg-[#165E0C] p-5 ring-1 ring-white/10 md:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <PricingBillingToggle />
              <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-black [font-family:ui-sans-serif,system-ui,sans-serif]">
                Intro price
              </span>
            </div>

            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
              ROOTS PRO
            </h3>
            <p className="mt-1 text-sm text-[#6ee7a8]/90 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base">
              Full power, unlimited access
            </p>

            <div className="mt-5">
              <p className="font-display text-3xl font-bold text-white md:text-4xl">
                $5.00{" "}
                <span className="text-base font-bold uppercase md:text-lg">
                  P/Month
                </span>
              </p>
              <p className="mt-0.5 text-xs text-[#6ee7a8]/80 [font-family:ui-sans-serif,system-ui,sans-serif]">
                Billed monthly
              </p>
            </div>

            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {PRO_FEATURES.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-2 text-sm text-white [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base"
                >
                  <Check
                    className="size-3.5 shrink-0 text-white"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>

            <Link
              href="#download"
              className="mt-6 inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#2DDB16] text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#26c414] [font-family:ui-sans-serif,system-ui,sans-serif] md:h-12 md:text-sm"
            >
              Start pro trial
            </Link>
          </div>

          {/* ROOTS LITE */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-white/10 md:p-6">
            {/* <div className="mb-4 flex items-start justify-between gap-3"></div> */}
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
              ROOTS LITE
            </h3>
            <p className="mt-1 text-sm text-zinc-500 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base">
              Try before you commit
            </p>

            <div className="mt-5">
              <p className="font-display text-3xl font-bold text-black md:text-4xl">
                Free <span className="font-light text-sm">Forever</span>
              </p>
            </div>

            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {LITE_FEATURES.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-black [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base"
                >
                  {item.included ? (
                    <Check
                      className="size-3.5 shrink-0 text-[#249415]"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : (
                    <X
                      className="size-3.5 shrink-0 text-red-500"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  )}
                  {item.text}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-6 inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#2DDB16] text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#26c414] [font-family:ui-sans-serif,system-ui,sans-serif] md:h-12 md:text-sm md:mt-auto"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
