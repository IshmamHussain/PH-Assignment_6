import { notFound } from 'next/navigation';
import WorkoutDetailsClient from './WorkoutDetailsClient';
import type { Workout } from '@/store/useFitLogStore';

export default async function WorkoutDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${resolvedParams.id}`, { cache: 'no-store' });
  
  let workout: Workout;

  if (!res.ok) {
    const { mockWorkouts } = await import('@/data/workouts');
    const fallbackWorkout = mockWorkouts.find(w => w.id.toString() === resolvedParams.id);
    
    if (fallbackWorkout) {
      workout = fallbackWorkout;
    } else {
      if (res.status === 404) return notFound();
      return <div className="text-center py-20 text-red-500">Failed to load workout details</div>;
    }
  } else {
    workout = await res.json();
  }
  
  return <WorkoutDetailsClient workout={workout} />;
}
