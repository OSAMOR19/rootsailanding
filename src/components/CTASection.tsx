import Link from "next/link";

export function CTASection() {
  return (
    <section id="download" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Ready to supercharge your workflow?
        </h2>
        <p className="mt-4 text-zinc-600">
          Get Root and start creating beautiful wireframes in minutes.
        </p>
        <Link
          href="https://gumroad.com/l/rootwireframe"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-zinc-900 px-10 text-base font-semibold text-white transition hover:bg-zinc-800"
        >
          Download Root UI Kit
        </Link>
      </div>
    </section>
  );
}
