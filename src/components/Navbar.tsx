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
    <nav className="border-b border-border bg-background py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.png" alt="FitLog Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-oswald font-bold tracking-wider">FITLOG</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="/" className={`${pathname === '/' ? 'text-accent' : 'text-foreground hover:text-accent transition-colors'}`}>
            Workout
          </Link>
          <Link href="/my-plan" className={`${pathname === '/my-plan' ? 'text-accent' : 'text-foreground hover:text-accent transition-colors'}`}>
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/my-plan" className="flex items-center gap-2 bg-accent text-background px-3 py-1.5 rounded-full text-sm font-bold">
            <span>Plan</span>
            <span className="bg-background text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {mounted ? plan.length : 0}
            </span>
          </Link>
          <Link href="/my-plan?tab=saved" className="flex items-center gap-2 border border-border px-3 py-1.5 rounded-full text-sm font-bold hover:border-foreground transition-colors">
            <span>Saved</span>
            <span className="bg-border rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {mounted ? saved.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
