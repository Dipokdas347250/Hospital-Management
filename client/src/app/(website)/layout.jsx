"use client";

import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function WebsiteLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
}