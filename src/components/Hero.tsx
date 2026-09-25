import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full pt-6 sm:pt-10 pb-8 sm:pb-12 flex justify-center">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px] bg-[#1c1d22] border border-[#27272a] rounded-2xl sm:rounded-[24px] flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="w-full md:w-[60%] flex flex-col items-start gap-4 z-10">
          <span className="text-accent font-bold tracking-widest text-xs uppercase">WORKOUT LIBRARY</span>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-oswald font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-white">
            TRAIN WITH INTENT. LOG<br />
            EVERY SET.
          </h1>
          <p className="text-[#a1a1aa] text-base sm:text-lg max-w-[560px] leading-relaxed mt-2 mb-4">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href="#library" className="bg-accent text-background px-6 sm:px-8 py-3 sm:py-3.5 rounded font-bold text-sm hover:bg-[#aacc00] transition-colors">
            BROWSE WORKOUTS
          </Link>
        </div>
        <div className="w-full md:w-[40%] relative h-[250px] sm:h-[300px] md:h-[500px] mt-8 md:mt-0 flex justify-end">
          <Image
            src="/banner.png"
            alt="FitLog Banner"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
