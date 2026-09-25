import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full px-6 pt-10 pb-12">
      <div className="max-w-7xl mx-auto bg-[#1c1d22] border border-[#27272a] rounded-[24px] flex flex-col md:flex-row items-center justify-between p-12 md:p-16 relative overflow-hidden">
        <div className="w-full md:w-[65%] flex flex-col items-start gap-4 z-10">
          <span className="text-accent font-bold tracking-widest text-xs uppercase">WORKOUT LIBRARY</span>
          <h1 className="text-5xl md:text-[64px] lg:text-[76px] font-oswald font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-white">
            <span className="whitespace-nowrap">TRAIN WITH INTENT. LOG</span><br />
            EVERY SET.
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-[460px] leading-relaxed mt-2 mb-4">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          <Link href="#library" className="bg-accent text-background px-8 py-3.5 rounded font-bold text-sm hover:bg-[#aacc00] transition-colors">
            BROWSE WORKOUTS
          </Link>
        </div>
        <div className="w-full md:w-[35%] relative h-[300px] md:h-[500px] mt-10 md:mt-0 flex justify-end">
          <Image
            src="/banner.png"
            alt="FitLog Banner"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
