"use client";

import { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';
import type { Workout } from '@/store/useFitLogStore';
import { ChevronDown, Search } from 'lucide-react';

type SortOption = 'Duration' | 'Calories' | 'Rating';

export default function LibraryList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('Duration');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data: Workout[] = await res.json();
        setWorkouts(data);
      } catch (err) {
        import('@/data/workouts').then((module) => {
          setWorkouts(module.mockWorkouts);
        }).catch(() => {
          setError('Failed to load workouts');
        });
      } finally {
        setLoading(false);
      }
    }
    fetchWorkouts();
  }, []);

  const filteredWorkouts = workouts.filter((workout) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      workout.name.toLowerCase().includes(query) ||
      workout.muscleGroups.some(group => group.toLowerCase().includes(query)) ||
      workout.equipment.toLowerCase().includes(query)
    );
  });

  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
    if (sortBy === 'Duration') return a.duration - b.duration;
    if (sortBy === 'Calories') return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === 'Rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="library" className="w-full py-8 flex justify-center">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-oswald font-bold uppercase">THE LIBRARY</h2>
            <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search workouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-card border border-border pl-9 pr-4 py-2 rounded-md w-48 sm:w-56 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="relative">
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
        </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-12">{error}</div>
      ) : sortedWorkouts.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-oswald font-bold uppercase mb-2">NO RESULTS</h2>
          <p className="text-gray-400">No workouts match &quot;{searchQuery}&quot;. Try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedWorkouts.map(workout => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
