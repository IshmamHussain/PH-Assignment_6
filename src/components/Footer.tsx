import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0d0e10] py-6 sm:py-8 mt-16 w-full flex justify-center">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image src="/logo.png" alt="FitLog Logo" fill sizes="24px" className="object-contain" />
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
