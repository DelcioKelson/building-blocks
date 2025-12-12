export interface Concept {
  id: string;
  title: string;
  description: string;
  explanation: string; // Full educational content
  emoji: string;
  category: Category;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  estimatedTime: string;
  keyPoints: string[];
}

export type Category = 
  | 'mathematics'
  | 'programming'
  | 'science'
  | 'language'
  | 'logic';

export interface ConceptProgress {
  conceptId: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  completedAt?: Date;
}

export interface UserProgress {
  completedConcepts: string[];
  currentStreak: number;
  totalXP: number;
}

export const categoryColors: Record<Category, { bg: string; border: string; gradient: string }> = {
  mathematics: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
  },
  programming: {
    bg: 'bg-purple-500/20',
    border: 'border-purple-500',
    gradient: 'from-purple-500 to-pink-500',
  },
  science: {
    bg: 'bg-green-500/20',
    border: 'border-green-500',
    gradient: 'from-green-500 to-emerald-500',
  },
  language: {
    bg: 'bg-orange-500/20',
    border: 'border-orange-500',
    gradient: 'from-orange-500 to-yellow-500',
  },
  logic: {
    bg: 'bg-pink-500/20',
    border: 'border-pink-500',
    gradient: 'from-pink-500 to-rose-500',
  },
};
