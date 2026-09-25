"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useFitLogStore } from '@/store/useFitLogStore';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLogStore();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-background sticky top-0 z-50 w-full flex flex-col items-center">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px] flex items-center justify-between py-4 md:py-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.png" alt="FitLog Logo" fill sizes="32px" className="object-contain" />
          </div>
          <span className="text-xl font-oswald font-bold tracking-wider">FITLOG</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="/" className={`${pathname === '/' ? 'bg-[#1e240c] text-accent px-4 py-1.5 rounded-full' : 'text-gray-400 hover:text-white transition-colors'}`}>
            Workouts
          </Link>
          <Link href="/my-plan" className={`${pathname === '/my-plan' ? 'bg-[#1e240c] text-accent px-4 py-1.5 rounded-full' : 'text-gray-400 hover:text-white transition-colors'}`}>
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors">
            <span>Plan</span>
            <span className="bg-accent text-background rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {mounted ? plan.length : 0}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors">
            <span>Saved</span>
            <span className="border border-border text-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {mounted ? saved.length : 0}
            </span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px] border-b border-border bg-background py-4 flex flex-col gap-2">
          <Link href="/" className={`px-4 py-3 rounded-lg text-sm font-semibold ${pathname === '/' ? 'bg-[#1e240c] text-accent' : 'text-gray-400 hover:text-white hover:bg-card'} transition-colors`}>
            Workouts
          </Link>
          <Link href="/my-plan" className={`px-4 py-3 rounded-lg text-sm font-semibold ${pathname === '/my-plan' ? 'bg-[#1e240c] text-accent' : 'text-gray-400 hover:text-white hover:bg-card'} transition-colors`}>
            My Plan
          </Link>
        </div>
      )}
    </nav>
  );
}
