"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useFitLogStore } from '@/store/useFitLogStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLogStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-background border-b border-border px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.png" alt="FitLog Logo" fill className="object-contain" />
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

        <div className="flex items-center gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <span>Plan</span>
            <span className="bg-accent text-background rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {mounted ? plan.length : 0}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <span>Saved</span>
            <span className="border border-border text-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {mounted ? saved.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
