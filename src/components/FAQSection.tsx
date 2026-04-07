import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { FAQAccordion } from "./FAQAccordion";

const PNG_NAME = "roots-faq-side.png";
const PLACEHOLDER = "/faq-side-placeholder.svg";

function resolveFaqSideImage():
  | "/roots-faq-side.png"
  | "/faq-side-placeholder.svg" {
  const pngPath = path.join(process.cwd(), "public", PNG_NAME);
  if (fs.existsSync(pngPath)) {
    return "/roots-faq-side.png";
  }
  return PLACEHOLDER;
}

function FAQSideImage({ src }: { src: string }) {
  // const isSvg = src.endsWith(".svg");

  // if (isSvg) {
  //   return (
  //     // eslint-disable-next-line @next/next/no-img-element -- SVG asset; avoids next/image SVG quirks
  //     <img
  //       src={src}
  //       alt=""
  //       className="mt-10 h-auto w-full rounded-[20px] border border-white/[0.08]"
  //       width={560}
  //       height={420}
  //     />
  //   );
  // }

  return (
    <div className="relative mt-10 aspect-[560/420] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-zinc-900">
      <Image
        src={"/faqimage.avif"}
        alt="Producer with headphones in the studio"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 560px"
      />
    </div>
  );
}

export function FAQSection() {
  const imageSrc = resolveFaqSideImage();

  return (
    <section id="faq" className="bg-black py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="flex flex-col">
          <h2 className="flex flex-row items-center justify-start gap-x-2 gap-y-0 font-display text-left text-2xl font-bold uppercase leading-[1.05] tracking-[0.03em] md:text-4xl md:items-start md:justify-start sm:flex-col sm:gap-x-0 sm:gap-y-2">
            <span className="whitespace-nowrap text-white">Frequently asked</span>
            <span className="whitespace-nowrap text-[#42FF00]">questions</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-base">
            Got questions? We&apos;ve got answers. Everything you need to know
            about bringing authentic Afrobeat rhythms to your productions.
          </p>
          <FAQSideImage src={imageSrc} />
        </div>

        <div className="min-w-0 md:pt-2">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
