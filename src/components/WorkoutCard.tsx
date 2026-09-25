import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star } from 'lucide-react';
import type { Workout } from '@/store/useFitLogStore';

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="block group">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-colors h-full flex flex-col">
        <div className="relative w-full h-48 bg-[#0a0a0a]">
          <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex gap-2 flex-wrap">
            {workout.muscleGroups.map(group => (
              <span key={group} className="bg-background text-xs font-bold px-2 py-1 rounded border border-border text-gray-300">
                {group.toUpperCase()}
              </span>
            ))}
          </div>
          <div>
            <h3 className="font-oswald text-xl font-bold uppercase">{workout.name}</h3>
            <p className="text-gray-400 text-sm">{workout.equipment}</p>
          </div>
          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1"><Clock size={16} /><span>{workout.duration} min</span></div>
            <div className="flex items-center gap-1"><Flame size={16} /><span>{workout.caloriesBurned} kcal</span></div>
            <div className="flex items-center gap-1 text-accent"><Star size={16} fill="currentColor" /><span className="text-white">{workout.rating}</span></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
