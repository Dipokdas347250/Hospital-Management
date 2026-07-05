const departments = [
  { name: 'Cardiology', description: 'Advanced diagnostic care for heart health and prevention.' },
  { name: 'Pediatrics', description: 'Care plans tailored to children and growing families.' },
  { name: 'Neurology', description: 'Precision treatment for neurological conditions and recovery.' },
  { name: 'Orthopedics', description: 'Mobilizing patients with surgical and non-surgical musculoskeletal care.' },
];

export default function DepartmentsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Departments</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Comprehensive care across every stage of life.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {departments.map((dept) => (
          <div key={dept.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
            <p className="mt-3 text-slate-400">{dept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
