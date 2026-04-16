import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  rating: number;
  accent: "white" | "green";
};

function StarIcon({ filled, delay }: { filled: boolean; delay: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "#2DDB16" : "none"}
      stroke={filled ? "#2DDB16" : "#555"}
      strokeWidth="2"
      className="star-shimmer"
      style={{ animationDelay: delay }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  rating,
  accent,
}: TestimonialCardProps) {
  const borderColor = accent === "green" ? "border-[#2DDB16]/30" : "border-white/[0.08]";
  const glowShadow =
    accent === "green"
      ? "hover:shadow-[0_0_30px_rgba(45,219,22,0.08)]"
      : "hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]";

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border ${borderColor} bg-[#111111] p-6 transition-all duration-300 hover:border-white/20 ${glowShadow} hover:-translate-y-1`}
    >
      {/* Green accent line at top for green cards */}
      {accent === "green" && (
        <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2DDB16]/60 to-transparent" />
      )}

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < rating} delay={`${i * 200}ms`} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300 md:text-[15px] [font-family:ui-sans-serif,system-ui,sans-serif]">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <div
          className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ${
            accent === "green" ? "ring-[#2DDB16]/40" : "ring-white/10"
          }`}
        >
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white [font-family:ui-sans-serif,system-ui,sans-serif]">
            {name}
          </p>
          <p className="text-xs text-zinc-500 [font-family:ui-sans-serif,system-ui,sans-serif]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
