import Link from 'next/link';

export default function AppointmentPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-emerald-500/10 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Book an appointment</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Schedule your visit with confidence.</h2>
          <p className="mt-4 text-lg text-slate-300">
            Whether you need a routine checkup or specialist follow-up, our team is ready to help.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/register" className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
            Register now
          </Link>
          <Link href="/login" className="rounded-full border border-white/15 bg-slate-950/70 px-6 py-3 font-medium text-white transition hover:border-cyan-400/40">
            Login to continue
          </Link>
        </div>
      </div>
    </section>
  );
}
