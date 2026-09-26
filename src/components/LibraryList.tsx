"use client";

import { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';
import type { Workout } from '@/store/useFitLogStore';

export default function LibraryList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        let res;
        try {
          res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        } catch (error) {
          console.warn("Primary API fetch failed (likely CORS or network error). Trying backup...");
        }

        if (!res || !res.ok) {
          res = await fetch('https://api.api-store.workers.dev/api/fitlog');
        }

        if (!res || !res.ok) throw new Error('Failed to fetch data');
        const data: Workout[] = await res.json();
        setWorkouts(data);
      } catch (err) {
        setError('Failed to load workouts');
      } finally {
        setLoading(false);
      }
    }
    fetchWorkouts();
  }, []);


  return (
    <section id="library" className="w-full py-8 flex justify-center">
      <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1232px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-oswald font-bold uppercase">THE LIBRARY</h2>
            <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
          </div>
        </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-12">{error}</div>
      ) : workouts.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-oswald font-bold uppercase mb-2">NO RESULTS</h2>
          <p className="text-gray-400">No workouts available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map(workout => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
