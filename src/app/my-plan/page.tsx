"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFitLogStore, type Workout } from '@/store/useFitLogStore';
import { Clock, Flame, Star, Check, X, ArrowRight, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLogStore();
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentList = activeTab === 'plan' ? plan : saved;

  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((acc, curr) => acc + curr.duration, 0);
  const totalCalories = plan.reduce((acc, curr) => acc + curr.caloriesBurned, 0);

  const handleMarkAsDone = (id: number) => {
    removeFromPlan(id);
    toast.success('Workout marked as done! Great job!');
  };

  const handleRemove = (id: number, isPlan: boolean) => {
    if (isPlan) {
      removeFromPlan(id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.success('Removed from saved');
    }
  };

  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-oswald text-gray-400">Loading workouts...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center py-8 sm:py-12">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px]">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-extrabold uppercase mb-2">MY PLAN</h1>
        <p className="text-gray-400 text-lg">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <p className="text-gray-400 text-sm font-bold mb-1">EXERCISES</p>
          <p className="text-4xl font-oswald font-bold text-accent">{totalExercises}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <p className="text-gray-400 text-sm font-bold mb-1">MINUTES</p>
          <p className="text-4xl font-oswald font-bold text-white">{totalMinutes}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <p className="text-gray-400 text-sm font-bold mb-1">CALORIES</p>
          <p className="text-4xl font-oswald font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      <div className="flex border-b border-border mb-8">
        <button
          onClick={() => setActiveTab('plan')}
          className={`pb-4 px-6 font-bold text-lg transition-colors ${activeTab === 'plan' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
        >
          Today's Plan
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`pb-4 px-6 font-bold text-lg transition-colors ${activeTab === 'saved' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
        >
          Saved
        </button>
      </div>

      {currentList.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-oswald font-bold uppercase mb-2">NOTHING HERE YET</h2>
          <p className="text-gray-400 mb-6">Browse the library and add a lift to get today moving.</p>
          <Link href="/" className="bg-accent text-background px-6 py-3 rounded-md font-bold hover:bg-[#aacc00] transition-colors">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {currentList.map((workout: Workout) => (
            <div key={workout.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col sm:flex-row items-center pr-4">
              <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 bg-[#0a0a0a]">
                <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 640px) 100vw, 192px" className="object-contain" />
              </div>
              <div className="flex-1 p-4 sm:p-6 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase">{workout.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{workout.equipment}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1"><Clock size={16} /><span>{workout.duration} min</span></div>
                    <div className="flex items-center gap-1"><Flame size={16} /><span>{workout.caloriesBurned} kcal</span></div>
                    <div className="flex items-center gap-1 text-accent"><Star size={16} fill="currentColor" /><span className="text-white">{workout.rating}</span></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link href={`/workout/${workout.id}`} className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-[#2e3038] hover:bg-[#3e404a] text-white px-4 py-2 rounded-md font-semibold transition-colors text-sm">
                    <Eye size={16} /> Details
                  </Link>
                  {activeTab === 'plan' && (
                    <button 
                      onClick={() => handleMarkAsDone(workout.id)}
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-colors"
                      title="Mark as Done"
                    >
                      <Check size={20} />
                    </button>
                  )}
                  <button 
                    onClick={() => handleRemove(workout.id, activeTab === 'plan')}
                    className="flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors"
                    title="Remove"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
