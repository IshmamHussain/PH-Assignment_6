"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFitLogStore, type Workout } from '@/store/useFitLogStore';
import { Clock, Flame, Star, Check, X, ArrowRight, Eye, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

type SortOption = 'Duration' | 'Calories' | 'Rating';

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLogStore();
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
  const [mounted, setMounted] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('Duration');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentList = activeTab === 'plan' ? plan : saved;
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'Duration') return a.duration - b.duration;
    if (sortBy === 'Calories') return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === 'Rating') return b.rating - a.rating;
    return 0;
  });

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

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border mb-8 gap-4 sm:gap-0 relative">
        <div className="flex">
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

        <div className="relative mb-2 sm:mb-0 mr-2 sm:mr-0">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 font-semibold">Sort By:</span>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-card border border-border px-4 py-2 rounded-md flex items-center justify-between w-40 hover:border-accent transition-colors"
            >
              <span className="font-semibold">{sortBy}</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-md shadow-lg z-10 overflow-hidden">
              {(['Duration', 'Calories', 'Rating'] as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => { setSortBy(option); setIsDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 hover:bg-border transition-colors ${sortBy === option ? 'text-accent font-bold' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
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
          {sortedList.map((workout: Workout) => (
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
                
                <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                  <Link href={`/workout/${workout.id}`} className="border border-[#2e3038] hover:border-gray-500 bg-transparent text-white px-4 py-2 rounded-full font-semibold transition-colors text-sm">
                    View Details
                  </Link>
                  {activeTab === 'plan' && (
                    <button 
                      onClick={() => handleMarkAsDone(workout.id)}
                      className="flex items-center justify-center gap-2 bg-accent hover:bg-[#aacc00] text-black px-5 py-2 rounded-full font-bold transition-colors text-sm"
                      title="Mark as Done"
                    >
                      <Check size={16} strokeWidth={3} /> Mark as Done
                    </button>
                  )}
                  <button 
                    onClick={() => handleRemove(workout.id, activeTab === 'plan')}
                    className="flex items-center justify-center text-gray-500 hover:text-white p-1 ml-1 rounded-full transition-colors"
                    title="Remove"
                  >
                    <X size={18} />
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
