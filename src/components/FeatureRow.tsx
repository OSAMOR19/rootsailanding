import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type FeatureRowProps = {
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  secondaryText?: string;
  imageSrc: string;
};

function FeatureRowImage({ src }: { src: string }) {
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
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
        // fill
        className="object-contain object-top"
        // sizes="(width: 1500px) 100vw, 600px"
        width={1700}
        height={740}
      />
    </div>
  );
}

export function FeatureRow({
  badge,
  icon: Icon,
  title,
  description,
  secondaryText,
  imageSrc,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
      <div className="flex flex-col gap-4 md:max-w-xl">
        <span className="inline-flex w-fit rounded-full bg-[#2DDB161A] font-light px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#2DDB16] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-xs">
          {badge}
        </span>
        <h3 className="flex items-center gap-3 font-display text-xl font-bold uppercase leading-tight tracking-wide text-white md:gap-4 md:text-2xl">
          <Icon
            className="size-7 shrink-0 text-white md:size-8"
            strokeWidth={2}
            aria-hidden
          />
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
      <div className="min-w-0">
        <FeatureRowImage src={"/image1.webp"} />
      </div>
    </div>
  );
}
