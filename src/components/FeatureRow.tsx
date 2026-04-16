"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export type FeatureRowProps = {
  badge: string;
  /** Pass rendered JSX — e.g. <Headphones className="size-7 …" /> */
  icon: React.ReactNode;
  title: string;
  description: string;
  secondaryText?: string;
  imageSrc: string;
  /** Even index → text left, image right. Odd → image left, text right */
  index?: number;
};

function FeatureRowImage({ src }: { src: string }) {
  if (src.endsWith(".mp4")) {
    return (
      <div className="relative aspect-[1200/640] w-full overflow-hidden rounded-[16px] border border-white/[0.06] bg-black">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (src.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        className="h-auto w-full rounded-[16px] border border-white/[0.06]"
        width={1200}
        height={640}
      />
    );
  }

  return (
    <div className="relative aspect-[1200/640] w-full overflow-hidden rounded-[16px] border border-white/[0.06] bg-black">
      <Image
        src={src}
        alt=""
        className="object-contain object-top"
        width={1700}
        height={740}
      />
    </div>
  );
}

export function FeatureRow({
  badge,
  icon,
  title,
  description,
  secondaryText,
  imageSrc,
  index = 0,
}: FeatureRowProps) {
  const [mounted, setMounted] = useState(false);
  const [ref, visible] = useInView({ threshold: 0.08 });
  useEffect(() => { setMounted(true); }, []);

  const isOdd = index % 2 !== 0;
  const textOrder = isOdd ? "md:order-2" : "md:order-1";
  const imgOrder  = isOdd ? "md:order-1" : "md:order-2";
  const textAnim  = isOdd ? "slide-right" : "slide-left";
  const imgAnim   = isOdd ? "slide-left"  : "slide-right";

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
    >
      {/* Text column */}
      <div
        className={`${textOrder} flex flex-col gap-4 md:max-w-xl${mounted ? ` anim-hidden${visible ? ` anim-visible ${textAnim}` : ""}` : ""}`}
        style={{ "--delay": "0ms" } as React.CSSProperties}
      >
        <span className="inline-flex w-fit rounded-full bg-[#2DDB161A] font-light px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#2DDB16] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-xs">
          {badge}
        </span>
        <h3 className="flex items-center gap-3 font-display text-xl font-bold uppercase leading-tight tracking-wide text-white md:gap-4 md:text-2xl">
          {icon}
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70 md:text-base [font-family:ui-sans-serif,system-ui,sans-serif]">
          {description}
        </p>
        {secondaryText ? (
          <p className="text-sm md:text-base font-light block text-[#42FF00] [font-family:ui-sans-serif,system-ui,sans-serif]">
            {secondaryText}
          </p>
        ) : null}
      </div>

      {/* Image column */}
      <div
        className={`${imgOrder} min-w-0${mounted ? ` anim-hidden${visible ? ` anim-visible ${imgAnim}` : ""}` : ""}`}
        style={{ "--delay": "120ms" } as React.CSSProperties}
      >
        <FeatureRowImage src={imageSrc} />
      </div>
    </div>
  );
}
