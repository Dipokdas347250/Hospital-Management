import Link from 'next/link';

const highlights = [
  { title: '24/7 Care', text: 'Rapid access to medical support and emergency coordination.' },
  { title: 'Specialist Doctors', text: 'Trusted professionals across cardiology, pediatrics, and more.' },
  { title: 'Smart Scheduling', text: 'Book appointments in seconds with instant confirmations.' },
];

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Modern care, reimagined
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compassionate hospital experiences built for every patient.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Discover a smarter way to manage care, book visits, and connect with clinicians through a beautifully crafted digital experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                Create account
              </Link>
              <Link href="/login" className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 font-medium text-slate-100 transition hover:border-cyan-400/60">
                Sign in
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Today&apos;s overview</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">98%</p>
                  <p className="mt-1 text-sm text-slate-400">Patient satisfaction</p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">15+</p>
                  <p className="mt-1 text-sm text-slate-400">Specialties available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
