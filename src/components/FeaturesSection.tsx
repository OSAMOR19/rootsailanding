const FEATURES = [
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
];

export function FeaturesSection() {
  return (
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
          {FEATURES.map((item, i) => (
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
  );
}
