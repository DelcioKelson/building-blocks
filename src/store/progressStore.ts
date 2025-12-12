import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { concepts } from '../data/concepts';

interface ProgressState {
  completedConcepts: string[];
  completeConceptAction: (conceptId: string) => void;
  isConceptAvailable: (conceptId: string) => boolean;
  getConceptStatus: (conceptId: string) => 'locked' | 'available' | 'completed';
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedConcepts: [],

      completeConceptAction: (conceptId: string) => {
        set(state => ({
          completedConcepts: state.completedConcepts.includes(conceptId)
            ? state.completedConcepts
            : [...state.completedConcepts, conceptId],
        }));
      },

      isConceptAvailable: (conceptId: string) => {
        const concept = concepts.find(c => c.id === conceptId);
        if (!concept) return false;

        const { completedConcepts } = get();
        
        // If already completed, it's available
        if (completedConcepts.includes(conceptId)) return true;
        
        // If no prerequisites, it's available
        if (concept.prerequisites.length === 0) return true;
        
        // Check if all prerequisites are completed
        return concept.prerequisites.every(prereq => 
          completedConcepts.includes(prereq)
        );
      },

      getConceptStatus: (conceptId: string) => {
        const { completedConcepts, isConceptAvailable } = get();
        
        if (completedConcepts.includes(conceptId)) return 'completed';
        if (isConceptAvailable(conceptId)) return 'available';
        return 'locked';
      },

      resetProgress: () => {
        set({
          completedConcepts: [],
        });
      },
    }),
    {
      name: 'building-blocks-progress',
    }
  )
);
