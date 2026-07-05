"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/auth.service';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await loginUser(form);
      const payload = res?.data?.data;
      if (payload?.token) {
        login(payload.user, payload.token);
        router.push('/');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to sign in right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-6 py-16 lg:px-8">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Sign in to MediNova</h1>
        <p className="mt-3 text-sm text-slate-400">Access your appointments and care updates from one secure place.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" required className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" required className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" />
          </div>
          {error ? <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p> : null}
          <button type="submit" disabled={loading} className="w-full rounded-full bg-cyan-400 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          New here? <Link href="/register" className="font-medium text-cyan-300">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
