import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, Play, Clock, Sparkles } from 'lucide-react';
import type { Concept } from '../types/concept';
import { categoryColors } from '../types/concept';
import { useProgressStore } from '../store/progressStore';

interface ConceptNodeData {
  concept: Concept;
  onClick: (concept: Concept) => void;
}

interface ConceptNodeProps {
  data: ConceptNodeData;
}

function ConceptNode({ data }: ConceptNodeProps) {
  const { concept, onClick } = data;
  const status = useProgressStore(state => state.getConceptStatus(concept.id));
  const colors = categoryColors[concept.category];

  const statusConfig = {
    locked: {
      icon: Lock,
      bgClass: 'bg-gray-800/60',
      borderClass: 'border-gray-600',
      textClass: 'text-gray-400',
      scale: 0.95,
    },
    available: {
      icon: Play,
      bgClass: colors.bg,
      borderClass: colors.border,
      textClass: 'text-white',
      scale: 1,
    },
    completed: {
      icon: CheckCircle2,
      bgClass: 'bg-emerald-500/20',
      borderClass: 'border-emerald-500',
      textClass: 'text-emerald-400',
      scale: 1,
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-transparent !border-0 !w-4 !h-2"
      />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: config.scale, 
          opacity: status === 'locked' ? 0.7 : 1 
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: status === 'locked' 
            ? '0 0 20px rgba(100, 100, 100, 0.3)' 
            : '0 0 30px rgba(79, 70, 229, 0.4)',
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(concept)}
        className={`
          relative p-4 rounded-2xl border-2 backdrop-blur-sm
          min-w-[180px] max-w-[200px]
          ${config.bgClass} ${config.borderClass}
          cursor-pointer
          transition-all duration-300
        `}
      >
        {/* Glow effect for available concepts */}
        {status === 'available' && (
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-20 blur-xl`}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        )}

        {/* Sparkles for completed */}
        {status === 'completed' && (
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>
        )}

        <div className="relative z-10">
          {/* Header with emoji and status */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{concept.emoji}</span>
            <StatusIcon className={`w-5 h-5 ${config.textClass}`} />
          </div>

          {/* Title */}
          <h3 className={`font-bold text-sm mb-1 ${config.textClass}`}>
            {concept.title}
          </h3>

          {/* Time estimate */}
          <div className={`flex items-center gap-1 text-xs ${config.textClass} opacity-70`}>
            <Clock className="w-3 h-3" />
            <span>{concept.estimatedTime}</span>
          </div>

          {/* Difficulty badge */}
          <div className="mt-2">
            <span className={`
              inline-block px-2 py-0.5 rounded-full text-xs
              ${concept.difficulty === 'beginner' ? 'bg-green-500/30 text-green-300' :
                concept.difficulty === 'intermediate' ? 'bg-yellow-500/30 text-yellow-300' :
                'bg-red-500/30 text-red-300'}
            `}>
              {concept.difficulty}
            </span>
          </div>
        </div>
      </motion.div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-transparent !border-0 !w-4 !h-2"
      />
    </>
  );
}

export default memo(ConceptNode);
