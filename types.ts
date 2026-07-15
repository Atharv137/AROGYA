
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  description: string;
  sets: string;
  reps: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  targetMuscles: string[];
  equipment: string;
  videoUrl: string;
}

export interface Meal {
  name: string;
  calories: string;
  macros: string;
  benefits: string;
  image: string;
}

export interface DietPlan {
  category: 'Cutting' | 'Bulking' | 'Balanced';
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks: Meal;
  };
}

export interface YogaPose {
  name: string;
  description: string;
  benefits: string;
  image: string;
}

export interface SoundCard {
  id: string;
  name: string;
  category: string;
  icon: string;
  audioUrl: string;
  bgGradient: string;
}

export interface Mentor {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  bio: string;
}

export interface Booking {
  id: string;
  mentorId: string;
  mentorName: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed';
  notes: string;
}
