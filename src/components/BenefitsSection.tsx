const BENEFITS = [
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
];

export function BenefitsSection() {
  return (
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
          {BENEFITS.map((item, i) => (
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
  );
}
