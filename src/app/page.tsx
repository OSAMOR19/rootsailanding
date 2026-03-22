import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-[#fafafa]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="#"
            className="font-display text-xl font-semibold tracking-tight text-zinc-900"
          >
            Root
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              FAQ
            </Link>
            <Link
              href="#download"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Download
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Compatible Sketch & Figma
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 md:text-6xl">
            Wireframe and Design
            <br />
            Starter Kit
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            Speed up your design process with the most innovative UI Kit — Root.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Download Root UI Kit
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100"
            >
              See what&apos;s inside
            </Link>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Rated 5★ based on Gumroad reviews
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="border-y border-zinc-200 bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            What&apos;s inside
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Root has everything you need to create wireframes, prototypes,
            presentations, or your own design system.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Style Guides",
                desc: "2 Auto-updatable style guides to help customize your designs.",
              },
              {
                title: "Components",
                desc: "300 Vanilla-like components to create a solid UI design.",
              },
              {
                title: "Wireframe Layouts",
                desc: "120 Wireframe layouts to quickly grab and map your project.",
              },
              {
                title: "Illustrations",
                desc: "24 character & 100 Illustration details to beautify your work.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <h3 className="font-display text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Level up your design inventory
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Use a perfectly organized design library to speed up your design
            project development.
          </p>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Design faster",
                desc: "Use a vast collection of responsive layouts to create wireframes and prototypes quickly.",
                extra: "Includes Smart + Auto Layout",
              },
              {
                title: "Make your work standout",
                desc: "Use stylish illustrations to enrich your prototypes and presentations with more fun.",
                extra: "Includes 24 customizable illustrations",
              },
              {
                title: "Easily customize",
                desc: "Create diverse and beautiful wireframes utilizing a minimal weight style guide.",
                extra: "12 Colors • 4 Text Styles • Accessible contrasts",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-display text-xl font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-zinc-600">{item.desc}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Root Section */}
      <section className="border-y border-zinc-200 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Why you should use Root
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Perfect Starting Point",
                desc: "Start your project with a robust fundament to save yourself time and money.",
              },
              {
                title: "Wireframes → Final Design",
                desc: "Move from wireframes to final designs in no time with organized overrides.",
              },
              {
                title: "Responsive Resize",
                desc: "Accelerate your workflow with resizable elements, Smart & Auto layout features.",
              },
              {
                title: "Industry Standards",
                desc: "All elements are based on Bootstrap layout & 8-pt grid to fit any screen perfectly.",
              },
              {
                title: "Mini Design System",
                desc: "Build your project upon organized assets and perfectly-structured elements.",
              },
              {
                title: "Useful Resources",
                desc: "Enrich your wireframes with a specially designed 24px icon set and free fonts.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200 p-6 transition hover:border-zinc-300"
              >
                <h3 className="font-display font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Supercharge your wireframe workflow with Root
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                plan: "for Sketch",
                price: "$58",
                features: [
                  "Auto-updatable Style Guide",
                  "300 Components",
                  "120 Wireframe layouts",
                  "24 Illustrations",
                  "Free Updates",
                ],
                cta: "Buy for Sketch",
                featured: false,
              },
              {
                plan: "for Figma",
                price: "$58",
                features: [
                  "Auto-updatable Style Guide",
                  "300 Components",
                  "120 Wireframe layouts",
                  "24 Illustrations",
                  "Free Updates",
                ],
                cta: "Buy for Figma",
                featured: true,
              },
              {
                plan: "for Teams",
                price: "from $88",
                features: [
                  "Auto-updatable Style Guide",
                  "300 Components",
                  "120 Wireframe layouts",
                  "24 Illustrations",
                  "Free Updates",
                ],
                cta: "Choose Your License",
                featured: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 ${
                  item.featured
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                  {item.plan}
                </p>
                <p className="mt-4 font-display text-4xl font-bold">{item.price}</p>
                <ul className="mt-6 space-y-3">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-emerald-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#download"
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full font-semibold transition ${
                    item.featured
                      ? "bg-white text-zinc-900 hover:bg-zinc-100"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="border-t border-zinc-200 bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Popular questions
          </h2>
          <div className="mt-16 space-y-8">
            {[
              {
                q: "What is Root?",
                a: "It's a set of Sketch and Figma files, containing illustrations, wireframes & components synced with a minimal weight style guide.",
              },
              {
                q: "How does it work?",
                a: "Root is a UI kit with finely-tuned assets, crafted to help designers and developers create prototypes, websites, design systems, and presentations by its example.",
              },
              {
                q: "Can I get a discount?",
                a: "You can get a 50% discount if you are a student or a teacher. Contact us with proof of your occupation.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-zinc-200 pb-8">
                <h3 className="font-display text-lg font-semibold text-zinc-900">
                  {item.q}
                </h3>
                <p className="mt-2 text-zinc-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="download"
        className="py-24 md:py-32"
      >
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

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-500">
              Designed with Frames X UI Kit
            </p>
            <div className="flex gap-6">
              <Link
                href="mailto:support@example.com"
                className="text-sm text-zinc-600 transition hover:text-zinc-900"
              >
                Support
              </Link>
              <Link
                href="#"
                className="text-sm text-zinc-600 transition hover:text-zinc-900"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
