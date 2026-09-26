import { notFound } from 'next/navigation';
import WorkoutDetailsClient from './WorkoutDetailsClient';
import type { Workout } from '@/store/useFitLogStore';

export default async function WorkoutDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  let res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${resolvedParams.id}`, { cache: 'no-store' });
  
  if (!res.ok) {
    res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${resolvedParams.id}`, { cache: 'no-store' });
  }

  let workout: Workout;

  if (!res.ok) {
    if (res.status === 404) return notFound();
    return <div className="text-center py-20 text-red-500">Failed to load workout details</div>;
  }
  
  workout = await res.json();
  
  return <WorkoutDetailsClient workout={workout} />;
}
