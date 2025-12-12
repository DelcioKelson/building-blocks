import { motion } from 'framer-motion';
import { BookOpen, RotateCcw } from 'lucide-react';
import { useProgressStore } from '../store/progressStore';
import { concepts } from '../data/concepts';

export default function Header() {
  const { completedConcepts, resetProgress } = useProgressStore();
  
  const progressPercentage = (completedConcepts.length / concepts.length) * 100;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
            >
              <span className="text-xl">🧱</span>
            </motion.div>
            <div>
              <h1 className="text-lg font-bold text-white">Building Blocks</h1>
              <p className="text-xs text-gray-400">Learn concepts, step by step</p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            {/* Progress */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <BookOpen className="w-5 h-5 text-purple-400" />
              <div className="w-40">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-purple-400">{completedConcepts.length}/{concepts.length} concepts</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Reset Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={resetProgress}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              title="Reset Progress"
            >
              <RotateCcw className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
