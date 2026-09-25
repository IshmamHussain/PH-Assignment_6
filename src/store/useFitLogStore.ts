import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface FitLogState {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveForLater: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
}

export const useFitLogStore = create<FitLogState>()(
  persist(
    (set, get) => ({
      plan: [],
      saved: [],
      addToPlan: (workout) => {
        const currentPlan = get().plan;
        if (currentPlan.length >= 5) return;
        if (!currentPlan.find(w => w.id === workout.id)) {
          set({ plan: [...currentPlan, workout] });
        }
      },
      removeFromPlan: (id) => {
        set({ plan: get().plan.filter(w => w.id !== id) });
      },
      saveForLater: (workout) => {
        const currentSaved = get().saved;
        if (!currentSaved.find(w => w.id === workout.id)) {
          set({ saved: [...currentSaved, workout] });
        }
      },
      removeFromSaved: (id) => {
        set({ saved: get().saved.filter(w => w.id !== id) });
      }
    }),
    {
      name: 'fitlog-storage',
    }
  )
);
