import { AuthProvider } from '@/context/AuthContext';

export default function AuthLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_40%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
        {children}
      </div>
    </AuthProvider>
  );
}