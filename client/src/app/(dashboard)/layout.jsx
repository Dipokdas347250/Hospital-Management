import { AuthProvider } from '@/context/AuthContext';

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">{children}</div>
    </AuthProvider>
  );
}
