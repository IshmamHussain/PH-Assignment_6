import type { Workout } from '@/store/useFitLogStore';

export const mockWorkouts: Workout[] = [
  {
    id: 1,
    name: "Bench Press",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: 15,
    caloriesBurned: 120,
    sets: 4,
    reps: "8-12",
    rating: 4.8,
    description: "A foundational upper body exercise that builds pectoral, tricep, and anterior deltoid strength.",
    instructions: [
      "Lie flat on the bench with eyes under the bar",
      "Grip the bar slightly wider than shoulder width",
      "Unrack the bar and lower it to your mid-chest",
      "Press the bar back up to the starting position"
    ]
  },
  {
    id: 2,
    name: "Squats",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Quads", "Glutes", "Hamstrings", "Core"],
    equipment: "Barbell, Squat Rack",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 180,
    sets: 4,
    reps: "8-10",
    rating: 4.9,
    description: "The king of lower body exercises. Essential for building leg size and overall functional strength.",
    instructions: [
      "Rest the bar on your upper back/traps",
      "Stand with feet shoulder-width apart",
      "Bend at the knees and hips to lower your body",
      "Drive back up through your heels"
    ]
  },
  {
    id: 3,
    name: "Deadlift",
    image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Hamstrings", "Lower Back", "Glutes", "Core"],
    equipment: "Barbell",
    difficulty: "Advanced",
    duration: 20,
    caloriesBurned: 200,
    sets: 3,
    reps: "5-8",
    rating: 4.9,
    description: "A full-body compound movement that develops serious posterior chain strength.",
    instructions: [
      "Stand with mid-foot under the bar",
      "Bend over and grip the bar outside your legs",
      "Bend knees until shins touch the bar",
      "Lift your chest up and straighten your lower back",
      "Take a big breath, hold it, and stand up with the weight"
    ]
  },
  {
    id: 4,
    name: "Pull-ups",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Lats", "Biceps", "Upper Back"],
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    duration: 10,
    caloriesBurned: 80,
    sets: 3,
    reps: "To failure",
    rating: 4.7,
    description: "The ultimate bodyweight exercise for developing a wide back and strong biceps.",
    instructions: [
      "Grab the bar with a pronated (overhand) grip",
      "Hang completely with straight arms",
      "Pull yourself up until your chin clears the bar",
      "Lower yourself back down with control"
    ]
  },
  {
    id: 5,
    name: "Overhead Press",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Shoulders", "Triceps", "Core"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 15,
    caloriesBurned: 110,
    sets: 4,
    reps: "8-10",
    rating: 4.6,
    description: "A staple compound exercise for shoulder hypertrophy and pressing power.",
    instructions: [
      "Hold the bar at shoulder level",
      "Press the bar overhead until arms are fully locked out",
      "Push your head forward slightly at the top",
      "Lower the bar back to your shoulders"
    ]
  },
  {
    id: 6,
    name: "Dumbbell Rows",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Lats", "Rhomboids", "Biceps"],
    equipment: "Dumbbell, Bench",
    difficulty: "Beginner",
    duration: 15,
    caloriesBurned: 100,
    sets: 3,
    reps: "10-12 per arm",
    rating: 4.5,
    description: "An excellent unilateral exercise for fixing strength imbalances and building a thick back.",
    instructions: [
      "Place one knee and same-side hand on a bench",
      "Hold dumbbell in the other hand",
      "Pull the dumbbell up to your hip",
      "Lower it with control"
    ]
  },
  {
    id: 7,
    name: "Leg Press",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Quads", "Glutes", "Hamstrings"],
    equipment: "Leg Press Machine",
    difficulty: "Beginner",
    duration: 15,
    caloriesBurned: 130,
    sets: 3,
    reps: "10-15",
    rating: 4.4,
    description: "A machine-based alternative to squats that heavily targets the quads with less lower back strain.",
    instructions: [
      "Sit on the machine and place feet on the platform",
      "Lower the weight by bending your knees to 90 degrees",
      "Press the weight back up without locking your knees"
    ]
  },
  {
    id: 8,
    name: "Bicep Curls",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Biceps"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    duration: 10,
    caloriesBurned: 60,
    sets: 3,
    reps: "12-15",
    rating: 4.6,
    description: "The classic isolation exercise for building peak bicep size.",
    instructions: [
      "Stand holding dumbbells at your sides with palms facing forward",
      "Curl the weights up to shoulder level, keeping elbows stationary",
      "Squeeze biceps at the top",
      "Lower the weights slowly"
    ]
  },
  {
    id: 9,
    name: "Tricep Pushdowns",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Triceps"],
    equipment: "Cable Machine, Rope Attachment",
    difficulty: "Beginner",
    duration: 10,
    caloriesBurned: 60,
    sets: 3,
    reps: "12-15",
    rating: 4.5,
    description: "An isolation exercise that constant tension on the triceps throughout the movement.",
    instructions: [
      "Stand facing the cable machine and grab the rope",
      "Keep elbows tucked to your sides",
      "Push the rope down until arms are fully extended",
      "Return to the starting position slowly"
    ]
  },
  {
    id: 10,
    name: "Lateral Raises",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Shoulders (Lateral Deltoid)"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    duration: 10,
    caloriesBurned: 50,
    sets: 4,
    reps: "15-20",
    rating: 4.7,
    description: "The best exercise for targeting the side delts to create broader-looking shoulders.",
    instructions: [
      "Stand holding light dumbbells by your sides",
      "Raise arms straight out to the sides until shoulder level",
      "Pause briefly at the top",
      "Lower the weights with control"
    ]
  },
  {
    id: 11,
    name: "Plank",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Core", "Abs"],
    equipment: "None",
    difficulty: "Beginner",
    duration: 5,
    caloriesBurned: 30,
    sets: 3,
    reps: "60 seconds",
    rating: 4.4,
    description: "An isometric core exercise that builds stability and endurance in the abdominal muscles.",
    instructions: [
      "Get into a push-up position, but rest on your forearms",
      "Keep your body in a straight line from head to heels",
      "Brace your core tightly",
      "Hold the position for the target time"
    ]
  },
  {
    id: 12,
    name: "Bulgarian Split Squats",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    muscleGroups: ["Quads", "Glutes", "Hamstrings"],
    equipment: "Dumbbells, Bench",
    difficulty: "Advanced",
    duration: 15,
    caloriesBurned: 140,
    sets: 3,
    reps: "10 per leg",
    rating: 4.8,
    description: "A brutal but effective unilateral leg exercise that heavily isolates each quad and glute.",
    instructions: [
      "Stand a couple of feet in front of a bench",
      "Place one foot behind you on the bench",
      "Hold dumbbells in each hand",
      "Lower your body until your front thigh is parallel to the floor",
      "Drive back up to the starting position"
    ]
  }
];
