const REASONS = [
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
];

export function WhyRootSection() {
  return (
    <section className="border-y border-zinc-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Why you should use Root
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item, i) => (
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
  );
}
