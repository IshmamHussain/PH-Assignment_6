import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0d0e10] py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image src="/logo.png" alt="FitLog Logo" fill className="object-contain" />
          </div>
          <span className="text-lg font-oswald font-bold tracking-widest text-white">FITLOG</span>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
