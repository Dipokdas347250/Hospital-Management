export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 MediNova Hospital. Trusted care, beautifully delivered.</p>
        <div className="flex gap-4">
          <span>Call: +1 (800) 555-0199</span>
          <span>care@medinova.com</span>
        </div>
      </div>
    </footer>
  );
}
