import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_32%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-20 text-slate-100 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">MediNova Hospital</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Modern care that feels personal, calm, and intelligent.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Book appointments, discover specialties, and manage your care experience through a beautifully designed portal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
              Create account
            </Link>
            <Link href="/login" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-100 transition hover:border-cyan-400/50">
              Login
            </Link>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 p-8 lg:min-w-[320px]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Why patients choose us</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>• 24/7 support and instant appointment updates</li>
            <li>• Expert teams across key specialties</li>
            <li>• A seamless digital experience from check-in to follow-up</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
