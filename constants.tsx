
import { Exercise, DietPlan, YogaPose, SoundCard, Mentor } from './types';

export const WORKOUT_CATEGORIES = [
  'Biceps', 'Triceps', 'Chest', 'Shoulders', 'Back', 'Legs', 'Abs/Core', 'Cardio'
];

export const EXERCISES: Record<string, Exercise[]> = {
  Biceps: [
    { 
      id: 'b1', 
      name: 'Barbell Curls', 
      category: 'Biceps', 
      description: 'Classic mass builder for biceps.', 
      sets: '4', 
      reps: '8-12', 
      difficulty: 'Beginner', 
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Biceps Brachii', 'Brachialis'],
      equipment: 'Barbell',
      videoUrl: 'https://www.youtube.com/results?search_query=barbell+curls+form'
    },
    { 
      id: 'b2', 
      name: 'Hammer Curls', 
      category: 'Biceps', 
      description: 'Targets the brachialis and brachioradialis.', 
      sets: '3', 
      reps: '12', 
      difficulty: 'Beginner', 
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Brachialis', 'Brachioradialis'],
      equipment: 'Dumbbells',
      videoUrl: 'https://www.youtube.com/results?search_query=hammer+curls+form'
    },
    { 
      id: 'b3', 
      name: 'Preacher Curls', 
      category: 'Biceps', 
      description: 'Isolates the biceps peak by eliminating momentum.', 
      sets: '3', 
      reps: '10', 
      difficulty: 'Intermediate', 
      image: 'https://images.unsplash.com/photo-1590239068512-6c17e882c30e?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Biceps Brachii (Short Head)'],
      equipment: 'Preacher Bench, EZ Bar',
      videoUrl: 'https://www.youtube.com/results?search_query=preacher+curls+form'
    },
    { 
      id: 'b4', 
      name: 'Incline Dumbbell Curls', 
      category: 'Biceps', 
      description: 'Full stretch on the long head of the biceps.', 
      sets: '3', 
      reps: '12', 
      difficulty: 'Intermediate', 
      image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Biceps Brachii (Long Head)'],
      equipment: 'Incline Bench, Dumbbells',
      videoUrl: 'https://www.youtube.com/results?search_query=incline+dumbbell+curls+form'
    },
    { 
      id: 'b5', 
      name: 'Concentration Curls', 
      category: 'Biceps', 
      description: 'Strict form peaking exercise to build the bicep peak.', 
      sets: '3', 
      reps: '15', 
      difficulty: 'Beginner', 
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Biceps Brachii'],
      equipment: 'Dumbbell',
      videoUrl: 'https://www.youtube.com/results?search_query=concentration+curls+form'
    }
  ],
  Legs: [
    { 
      id: 'l1', 
      name: 'Barbell Back Squat', 
      category: 'Legs', 
      description: 'The king of leg exercises for overall lower body development.', 
      sets: '4', 
      reps: '6-10', 
      difficulty: 'Advanced', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
      equipment: 'Squat Rack, Barbell',
      videoUrl: 'https://www.youtube.com/results?search_query=barbell+back+squat+form'
    },
    { 
      id: 'l2', 
      name: 'Leg Press', 
      category: 'Legs', 
      description: 'Good for building volume without stressing the lower back.', 
      sets: '4', 
      reps: '12', 
      difficulty: 'Intermediate', 
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Quadriceps', 'Glutes'],
      equipment: 'Leg Press Machine',
      videoUrl: 'https://www.youtube.com/results?search_query=leg+press+form'
    },
    { 
      id: 'l3', 
      name: 'Romanian Deadlift', 
      category: 'Legs', 
      description: 'Targets hamstrings and glutes through a hip hinge movement.', 
      sets: '3', 
      reps: '10', 
      difficulty: 'Advanced', 
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Hamstrings', 'Glutes', 'Erector Spinae'],
      equipment: 'Barbell or Dumbbells',
      videoUrl: 'https://www.youtube.com/results?search_query=romanian+deadlift+form'
    },
    { 
      id: 'l4', 
      name: 'Lunges', 
      category: 'Legs', 
      description: 'Unilateral leg strength and stability builder.', 
      sets: '3', 
      reps: '12', 
      difficulty: 'Beginner', 
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      equipment: 'Bodyweight or Dumbbells',
      videoUrl: 'https://www.youtube.com/results?search_query=lunges+form'
    },
    { 
      id: 'l5', 
      name: 'Calf Raises', 
      category: 'Legs', 
      description: 'Building the gastrocnemius and soleus muscles.', 
      sets: '5', 
      reps: '15', 
      difficulty: 'Beginner', 
      image: 'https://images.unsplash.com/photo-1594737625785-a6bad33ff69b?auto=format&fit=crop&q=80&w=800',
      targetMuscles: ['Gastrocnemius', 'Soleus'],
      equipment: 'Calf Raise Machine or Step',
      videoUrl: 'https://www.youtube.com/results?search_query=calf+raises+form'
    }
  ],
};

export const DIET_PLANS: Record<string, DietPlan> = {
  Cutting: {
    category: 'Cutting',
    meals: {
      breakfast: { name: 'Oatmeal with Berries', calories: '350', macros: 'P: 20g, C: 50g, F: 5g', benefits: 'Satiating, high fiber', image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800' },
      lunch: { name: 'Grilled Chicken Salad', calories: '450', macros: 'P: 45g, C: 15g, F: 20g', benefits: 'Lean protein, low carb', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800' },
      dinner: { name: 'Baked Salmon & Asparagus', calories: '500', macros: 'P: 40g, C: 10g, F: 30g', benefits: 'Omega-3 fats, low insulin spike', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800' },
      snacks: { name: 'Greek Yogurt', calories: '150', macros: 'P: 15g, C: 10g, F: 0g', benefits: 'High protein, probiotics', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800' }
    }
  },
  Bulking: {
    category: 'Bulking',
    meals: {
      breakfast: { name: 'Peanut Butter Toast & Eggs', calories: '700', macros: 'P: 35g, C: 80g, F: 25g', benefits: 'High calorie energy', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800' },
      lunch: { name: 'Beef & Rice Bowl', calories: '850', macros: 'P: 50g, C: 100g, F: 30g', benefits: 'Creatine rich, carb loading', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800' },
      dinner: { name: 'Pasta with Meatballs', calories: '900', macros: 'P: 45g, C: 120g, F: 30g', benefits: 'High carbohydrate', image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800' },
      snacks: { name: 'Mass Gainer Shake', calories: '500', macros: 'P: 40g, C: 60g, F: 10g', benefits: 'Fast absorption', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800' }
    }
  },
  Balanced: {
    category: 'Balanced',
    meals: {
      breakfast: { name: 'Avocado Toast & Eggs', calories: '500', macros: 'P: 25g, C: 40g, F: 25g', benefits: 'Healthy fats, stable energy', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800' },
      lunch: { name: 'Turkey Sandwich & Apple', calories: '600', macros: 'P: 35g, C: 60g, F: 15g', benefits: 'Balanced macros', image: 'https://images.unsplash.com/photo-1524859330668-c357331384f5?auto=format&fit=crop&q=80&w=800' },
      dinner: { name: 'Stir-fry Chicken & Veggies', calories: '650', macros: 'P: 40g, C: 60g, F: 20g', benefits: 'Micronutrient dense', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800' },
      snacks: { name: 'Mixed Nuts & Fruit', calories: '300', macros: 'P: 10g, C: 30g, F: 15g', benefits: 'Sustained energy', image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800' }
    }
  }
};

export const YOGA_POSES: YogaPose[] = [
  { name: 'Padmasana', description: 'Lotus position for meditation.', benefits: 'Improves posture, calms mind.', image: 'https://images.unsplash.com/photo-1545389336-cf092699405d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Vajrasana', description: 'Thunderbolt pose for digestion.', benefits: 'Aids digestion, relieves lower back.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800' },
  { name: 'Sukhasana', description: 'Easy pose for relaxation.', benefits: 'Stretches knees and ankles.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800' },
  { name: 'Child Pose', description: 'Resting pose for decompression.', benefits: 'Relaxes spine, reduces stress.', image: 'https://images.unsplash.com/photo-1510894347713-fc3ad6cb03a2?auto=format&fit=crop&q=80&w=800' },
  { name: 'Cobra Pose', description: 'Back-bending pose for strength.', benefits: 'Strengthens spine, opens chest.', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800' },
  { name: 'Surya Namaskar', description: 'Sun Salutation sequence.', benefits: 'Full body workout, flexibility.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800' }
];

export const SOUND_LIBRARY: SoundCard[] = [
  { id: 's1', name: 'Rain', category: 'Nature', icon: 'fa-cloud-showers-heavy', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', bgGradient: 'from-blue-400 to-indigo-600' },
  { id: 's2', name: 'Ocean Waves', category: 'Nature', icon: 'fa-water', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', bgGradient: 'from-cyan-400 to-blue-500' },
  { id: 's3', name: 'Forest Ambience', category: 'Nature', icon: 'fa-tree', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', bgGradient: 'from-green-400 to-emerald-600' },
  { id: 's4', name: 'Soft Instrumental', category: 'Meditation', icon: 'fa-music', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', bgGradient: 'from-purple-400 to-pink-500' },
  { id: 's5', name: 'Tibetan Bowl', category: 'Meditation', icon: 'fa-bell', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', bgGradient: 'from-amber-400 to-orange-500' }
];

export const MENTORS: Mentor[] = [
  { id: 'm1', name: 'Dr. Sarah Wilson', photo: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800', specialization: 'Nutrition Specialist', bio: 'Helping people achieve sustainable weight loss through science-based diet plans.' },
  { id: 'm2', name: 'James Chen', photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', specialization: 'Bodybuilding Coach', bio: '10+ years of experience in hyper-trophy and strength training.' },
  { id: 'm3', name: 'Elena Rodriguez', photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', specialization: 'Yoga & Mindfulness', bio: 'Certified Yoga instructor focusing on mental clarity and flexibility.' }
];
