"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const roots = [
    {
      val: (
        <div className="font-display flex items-center gap-2 text-white text-xl font-semibold tracking-tight">
          <Image
            src="/logo.avif"
            alt="ROOTS"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          ROOTS
        </div>
      ),
    },
  ];
  return (
    <section className="relative pt-20 bg-black md:pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium rounded-[20px] bg-[#2DDB161A] py-1 px-4 max-w-fit mx-auto uppercase tracking-widest text-[#2DDB16]">
          AI-POWERED DRUM PLUGIN
        </p>
        <h1 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-white md:text-3xl">
          FIND THE DRUMS <span className="text-[#2DDB16]">INSTANTLY</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-[#FFFFFF]/70 md:text-sm">
          ROOTS is a smart AI-powered drum plugin that understands your track
          and helps you find the right African inspired drum loops from a real,
          handcrafted library, so your drums fit perfectly eveytime
        </p>
        <div className="my-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-[15px] bg-[#249415] px-8 text-sm font-semibold text-white transition hover:bg-[#249415]/80"
          >
            GET ROOTED
          </Link>
        </div>
        <Image
          src="/heroimg.jpg"
          alt="ROOTS"
          width={1000}
          height={1000}
       />
      </div>

      <div className="flex absolute max-w-4xl mx-auto right-0 left-0 items-start pt-7 justify-center gap-4 bg-black w-full h-[100px]">
        <div className="w-full overflow-hidden relative">
          <div
            className="flex gap-20 animate-scroll-left"
            style={{
              minWidth: "fit-content",
              animation: "scroll-left 16s linear infinite",
            }}
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>{roots[0].val}</div>
            ))}
          </div>
          <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
