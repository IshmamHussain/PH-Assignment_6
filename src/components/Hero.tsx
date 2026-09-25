import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-card w-full mb-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col items-start gap-4">
          <span className="text-accent font-bold tracking-widest text-sm">WORKOUT LIBRARY</span>
          <h1 className="text-4xl md:text-6xl font-oswald font-extrabold uppercase leading-tight">
            TRAIN WITH INTENT.<br />
            LOG EVERY SET.
          </h1>
          <p className="text-gray-400 text-lg max-w-md mt-2 mb-4">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          <Link href="#library" className="bg-accent text-background px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#aacc00] transition-colors">
            BROWSE WORKOUTS
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
          <Image
            src="/banner.png"
            alt="FitLog Banner"
            fill
            className="object-cover md:object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
