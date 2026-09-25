"use client";
import Image from 'next/image';
import { Bookmark, Plus, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { useFitLogStore, type Workout } from '@/store/useFitLogStore';
import { useEffect, useState } from 'react';

export default function WorkoutDetailsClient({ workout }: { workout: Workout }) {
  const { plan, saved, addToPlan, saveForLater } = useFitLogStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isPlanFull = plan.length >= 5;
  const isInPlan = plan.some(w => w.id === workout.id);
  const isInSaved = saved.some(w => w.id === workout.id);

  const handleAddToPlan = () => {
    if (isPlanFull && !isInPlan) {
      toast.error('Your plan is full! Maximum 5 lifts allowed.');
      return;
    }
    if (isInPlan) {
      toast('Already in today\\'s plan');
      return;
    }
    addToPlan(workout);
    toast.success('Added to today\\'s plan');
  };

  const handleSaveForLater = () => {
    if (isInSaved) {
      toast('Already saved for later');
      return;
    }
    saveForLater(workout);
    toast.success('Saved for later');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-border bg-[#0a0a0a]">
        <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-oswald font-extrabold uppercase mb-2">{workout.name}</h1>
          <p className="text-gray-400 text-lg mb-4">{workout.description}</p>
          <div className="flex gap-2 flex-wrap mb-6">
            {workout.muscleGroups.map(group => (
              <span key={group} className="bg-card text-sm font-bold px-3 py-1 rounded-full border border-border text-gray-300">
                {group.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
          <div><p className="text-gray-500 text-xs font-bold mb-1">EQUIPMENT</p><p className="font-semibold">{workout.equipment}</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">DIFFICULTY</p><p className="font-semibold">{workout.difficulty}</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">SETS</p><p className="font-semibold">{workout.sets}</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">REPS</p><p className="font-semibold">{workout.reps}</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">DURATION</p><p className="font-semibold">{workout.duration} min</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">CALORIES</p><p className="font-semibold">{workout.caloriesBurned} kcal</p></div>
          <div><p className="text-gray-500 text-xs font-bold mb-1">RATING</p><p className="font-semibold text-accent">{workout.rating}</p></div>
        </div>

        <div className="mt-4">
          <h3 className="font-oswald text-2xl font-bold uppercase mb-4">INSTRUCTIONS</h3>
          <ol className="space-y-4">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-border flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-300 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            onClick={handleAddToPlan}
            disabled={!mounted || (isPlanFull && !isInPlan)}
            className="flex-1 bg-accent text-background px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#aacc00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mounted && isInPlan ? <Check size={20} /> : <Plus size={20} />}
            {mounted && isInPlan ? "ADDED TO PLAN" : "ADD TO TODAY'S PLAN"}
          </button>
          
          <button 
            onClick={handleSaveForLater}
            className="flex-1 bg-card border border-border text-foreground px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:border-foreground transition-colors"
          >
            {mounted && isInSaved ? <Check size={20} /> : <Bookmark size={20} />}
            {mounted && isInSaved ? "SAVED" : "SAVE FOR LATER"}
          </button>
        </div>
      </div>
    </div>
  );
}
