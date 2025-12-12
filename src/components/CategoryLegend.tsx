import { motion } from 'framer-motion';
import { useProgressStore } from '../store/progressStore';
import { concepts } from '../data/concepts';
import { categoryColors } from '../types/concept';
import type { Category } from '../types/concept';

const categories: { id: Category; label: string; emoji: string }[] = [
  { id: 'mathematics', label: 'Mathematics', emoji: '🔢' },
  { id: 'programming', label: 'Programming', emoji: '💻' },
  { id: 'logic', label: 'Logic', emoji: '🧠' },
];

export default function CategoryLegend() {
  const getConceptStatus = useProgressStore(state => state.getConceptStatus);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-4 top-24 z-30 bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 border border-gray-800"
    >
      <h3 className="text-sm font-semibold text-gray-400 mb-3">Categories</h3>
      <div className="space-y-2">
        {categories.map(category => {
          const colors = categoryColors[category.id];
          const categoryConcepts = concepts.filter(c => c.category === category.id);
          const completedCount = categoryConcepts.filter(
            c => getConceptStatus(c.id) === 'completed'
          ).length;

          return (
            <div key={category.id} className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.gradient}`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white">{category.emoji}</span>
                  <span className="text-sm text-gray-300">{category.label}</span>
                </div>
                <div className="text-xs text-gray-500">
                  {completedCount}/{categoryConcepts.length}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend for status */}
      <div className="mt-4 pt-4 border-t border-gray-800">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">Status</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <span className="text-xs text-gray-400">Locked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-400">Completed</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
