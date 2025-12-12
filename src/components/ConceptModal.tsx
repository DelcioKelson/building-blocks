import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle2, BookOpen, ArrowRight, Lock, MapPin } from 'lucide-react';
import type { Concept } from '../types/concept';
import { categoryColors } from '../types/concept';
import { useProgressStore } from '../store/progressStore';
import { getPrerequisites, getMissingPrerequisites } from '../data/concepts';

interface ConceptModalProps {
  concept: Concept | null;
  onClose: () => void;
  onSelectConcept?: (concept: Concept) => void;
}

export default function ConceptModal({ concept, onClose, onSelectConcept }: ConceptModalProps) {
  const { getConceptStatus, completeConceptAction, completedConcepts } = useProgressStore();
  
  if (!concept) return null;
  
  const status = getConceptStatus(concept.id);
  const colors = categoryColors[concept.category];
  const prerequisites = getPrerequisites(concept.id);
  const missingPrereqs = getMissingPrerequisites(concept.id, completedConcepts);
  const isLocked = status === 'locked';

  const handleComplete = () => {
    completeConceptAction(concept.id);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 max-w-lg w-full border border-gray-700 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                  bg-gradient-to-br ${colors.gradient}
                `}
              >
                {concept.emoji}
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">{concept.title}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-medium
                    ${concept.difficulty === 'beginner' ? 'bg-green-500/30 text-green-300' :
                      concept.difficulty === 'intermediate' ? 'bg-yellow-500/30 text-yellow-300' :
                      'bg-red-500/30 text-red-300'}
                  `}>
                    {concept.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {concept.estimatedTime}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Locked Banner - Show learning path */}
          {isLocked && missingPrereqs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-amber-300">Learn these first!</h3>
              </div>
              <p className="text-sm text-amber-200/70 mb-4">
                Complete these {missingPrereqs.length} concept{missingPrereqs.length > 1 ? 's' : ''} to unlock this topic:
              </p>
              <div className="flex flex-wrap gap-2">
                {missingPrereqs.map((prereq, index) => {
                  const prereqColors = categoryColors[prereq.category];
                  return (
                    <motion.button
                      key={prereq.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => onSelectConcept?.(prereq)}
                      className={`
                        px-3 py-2 rounded-xl text-sm flex items-center gap-2
                        bg-gradient-to-r ${prereqColors.gradient} bg-opacity-20
                        border border-white/10 hover:border-white/30
                        text-white font-medium
                        hover:scale-105 transition-transform cursor-pointer
                      `}
                    >
                      <span className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-full text-xs">
                        {index + 1}
                      </span>
                      {prereq.emoji} {prereq.title}
                    </motion.button>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-200/50">
                <MapPin className="w-3 h-3" />
                <span>Click any concept above to start your learning path</span>
              </div>
            </motion.div>
          )}

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {concept.description}
          </p>

          {/* Prerequisites - only show if not locked (when locked, we show the learning path above) */}
          {!isLocked && prerequisites.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Prerequisites
              </h3>
              <div className="flex flex-wrap gap-2">
                {prerequisites.map(prereq => {
                  const prereqStatus = getConceptStatus(prereq.id);
                  return (
                    <span
                      key={prereq.id}
                      className={`
                        px-3 py-1.5 rounded-full text-sm flex items-center gap-2
                        ${prereqStatus === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-gray-700 text-gray-400'}
                      `}
                    >
                      {prereq.emoji} {prereq.title}
                      {prereqStatus === 'completed' && (
                        <CheckCircle2 className="w-4 h-4" />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Points */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">
              What you'll learn
            </h3>
            <ul className="space-y-2">
              {concept.keyPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <ArrowRight className={`w-4 h-4 mt-1 text-${concept.category === 'mathematics' ? 'blue' : concept.category === 'programming' ? 'purple' : 'pink'}-400`} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          {status === 'completed' ? (
            <div className="flex items-center justify-center gap-2 py-3 bg-emerald-500/20 rounded-xl text-emerald-400 font-medium">
              <CheckCircle2 className="w-5 h-5" />
              Completed!
            </div>
          ) : isLocked ? (
            <div className="flex items-center justify-center gap-2 py-3 bg-gray-700/50 rounded-xl text-gray-400 font-medium">
              <Lock className="w-5 h-5" />
              Complete prerequisites to unlock
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleComplete}
              className={`
                w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r ${colors.gradient}
                hover:shadow-lg hover:shadow-purple-500/25
                transition-shadow
              `}
            >
              Mark as Complete
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
