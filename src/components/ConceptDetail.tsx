import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, BookOpen, Code } from 'lucide-react';
import type { Concept } from '../types/concept';
import { categoryColors } from '../types/concept';
import { useProgressStore } from '../store/progressStore';
import { getMissingPrerequisites } from '../data/concepts';
import LearningPathGraph from './LearningPathGraph';
import CodeBlock from './CodeBlock';

interface ConceptDetailProps {
  concept: Concept;
  onSelectConcept: (concept: Concept) => void;
  onBack: () => void;
  onGoToGraph: () => void;
  previousConcept: Concept | null;
}

export default function ConceptDetail({ concept, onSelectConcept, onBack, onGoToGraph, previousConcept }: ConceptDetailProps) {
  const { getConceptStatus, completeConceptAction, completedConcepts } = useProgressStore();
  const status = getConceptStatus(concept.id);
  const colors = categoryColors[concept.category];
  const missingPrereqs = getMissingPrerequisites(concept.id, completedConcepts);
  const isLocked = status === 'locked';

  return (
    <div className="min-h-screen">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          {/* Back button - goes to previous concept or graph */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {previousConcept ? (
              <span className="flex items-center gap-1">
                <span>{previousConcept.emoji}</span>
                <span className="hidden sm:inline">{previousConcept.title}</span>
                <span className="sm:hidden">Back</span>
              </span>
            ) : (
              'Back to Graph'
            )}
          </motion.button>
          
          {/* Home button - always goes to graph */}
          {previousConcept && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGoToGraph}
              className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors text-sm"
              title="Back to Graph"
            >
              🏠 Graph
            </motion.button>
          )}
          
          <div className="flex-1" />
          <span className={`px-3 py-1 rounded-full text-sm ${colors.bg} ${colors.border} border`}>
            {concept.category}
          </span>
        </div>
      </header>

      <div className="pt-24 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Concept Card */}
          <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 ${isLocked ? 'border-amber-500/50' : colors.border} shadow-2xl`}>
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
              >
                {concept.emoji}
              </motion.div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{concept.title}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    concept.difficulty === 'beginner' ? 'bg-green-500/30 text-green-300' :
                    concept.difficulty === 'intermediate' ? 'bg-yellow-500/30 text-yellow-300' :
                    'bg-red-500/30 text-red-300'
                  }`}>
                    {concept.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    {concept.estimatedTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {concept.description}
            </p>

            {/* Full Explanation */}
            <div className="mb-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">📖 Full Explanation</h3>
              <div className="prose prose-invert prose-gray max-w-none">
                {concept.explanation.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed whitespace-pre-line">
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Code Examples */}
            {concept.codeExamples && concept.codeExamples.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Code Examples</h3>
                </div>
                <div className="space-y-4">
                  {concept.codeExamples.map((example, index) => (
                    <CodeBlock
                      key={index}
                      code={example.code}
                      language={example.language}
                      title={example.title}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Learning Path Graph - Show prominently if locked */}
            {isLocked && missingPrereqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-amber-400" />
                  <h2 className="text-xl font-bold text-amber-300">Your Learning Path</h2>
                  <span className="text-amber-200/70 text-sm">
                    ({missingPrereqs.length} concept{missingPrereqs.length > 1 ? 's' : ''} to learn first)
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  Click any concept below to learn more. Start with the first available one!
                </p>
                <LearningPathGraph 
                  targetConcept={concept} 
                  onSelectConcept={onSelectConcept} 
                />
              </motion.div>
            )}

            {/* What you'll learn */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">What you'll learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {concept.keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <ArrowRight className={`w-5 h-5 mt-0.5 flex-shrink-0`} style={{ color: `var(--tw-gradient-from)` }} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action */}
            {status === 'completed' ? (
              <div className="flex items-center justify-center gap-3 py-4 bg-emerald-500/20 rounded-xl text-emerald-400 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6" />
                You've completed this concept!
              </div>
            ) : status === 'available' ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => completeConceptAction(concept.id)}
                className={`w-full py-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r ${colors.gradient} hover:shadow-lg hover:shadow-purple-500/25 transition-shadow`}
              >
                Mark as Complete
              </motion.button>
            ) : (
              <div className="text-center py-4 text-gray-500">
                Complete the learning path above to unlock this concept
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
