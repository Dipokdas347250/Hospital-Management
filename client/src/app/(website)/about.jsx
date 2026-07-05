const pillars = [
  'Patient-first philosophy with transparent communication.',
  'Integrated care teams that coordinate everything seamlessly.',
  'Modern facilities designed to feel calm, safe, and efficient.',
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About our hospital</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A modern care center rooted in human connection.</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-slate-300">
          <p className="leading-8">
            Our team blends clinical excellence with a warm, digital-first experience so patients can feel informed, supported, and cared for at every step.
          </p>
          <ul className="mt-6 space-y-3">
            {pillars.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
