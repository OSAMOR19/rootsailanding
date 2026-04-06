import Image from "next/image";

type Accent = "white" | "green";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  portraits: readonly [string, string, string, string, string];
  accent: Accent;
};

const ringByAccent: Record<Accent, string> = {
  white: "ring-2 ring-white ring-offset-4 ring-offset-[#0c0c0c]",
  green:
    "ring-2 ring-[#2DDB16] ring-offset-4 ring-offset-[#0c0c0c]",
};

export function TestimonialCard({
  quote,
  name,
  role,
  portraits,
  accent,
}: TestimonialCardProps) {
  const ring = ringByAccent[accent];

  return (
    <div className="flex flex-col rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-[#1c1c1c] from-0% via-[#0f0f0f] to-black px-6 py-8 md:px-10 md:py-10">
      <div className="flex items-end justify-center gap-1.5 md:gap-2.5">
        {portraits.map((src, i) => {
          const isCenter = i === 2;
          return (
            <div
              key={src}
              className={`relative shrink-0 overflow-hidden rounded-full bg-zinc-800 ${
                isCenter
                  ? `h-14 w-14 md:h-[4.5rem] md:w-[4.5rem] ${ring}`
                  : "h-9 w-9 opacity-85 md:h-11 md:w-11"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes={isCenter ? "72px" : "44px"}
              />
            </div>
          );
        })}
      </div>

      <blockquote className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-zinc-300 md:mt-10 md:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-10 flex flex-col items-center md:mt-12">
        <div
          className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-full md:h-[5.5rem] md:w-[5.5rem] ${ring}`}
        >
          <Image
            src={portraits[2]}
            alt={name}
            fill
            className="object-cover"
            sizes="88px"
          />
        </div>
        <p className="mt-4 text-center font-semibold text-white">{name}</p>
        <p className="mt-1 text-center text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  );
}
