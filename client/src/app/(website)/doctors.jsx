const doctors = [
  { name: 'Dr. Maya Chen', role: 'Cardiology', badge: '10+ years' },
  { name: 'Dr. Daniel Brooks', role: 'Pediatrics', badge: 'Award-winning' },
  { name: 'Dr. Sara Hassan', role: 'Neurology', badge: 'Research lead' },
];

export default function DoctorsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Doctors</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Meet the specialists guiding your care.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-lg font-semibold text-cyan-300">
              {doctor.name.split(' ')[1][0]}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{doctor.name}</h3>
            <p className="mt-2 text-slate-400">{doctor.role}</p>
            <span className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              {doctor.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
