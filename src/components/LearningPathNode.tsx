import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Lock, Star } from 'lucide-react';
import type { Concept } from '../types/concept';
import { categoryColors } from '../types/concept';

interface LearningPathNodeProps {
  data: {
    concept: Concept;
    status: 'locked' | 'available' | 'completed';
    isTarget: boolean;
    stepNumber: number;
    onClick: (concept: Concept) => void;
  };
}

function LearningPathNode({ data }: LearningPathNodeProps) {
  const { concept, status, isTarget, stepNumber, onClick } = data;
  const colors = categoryColors[concept.category];

  const getStatusIcon = () => {
    if (status === 'completed') return <CheckCircle2 className="w-4 h-4" />;
    if (status === 'available') return <Play className="w-4 h-4" />;
    return <Lock className="w-4 h-4" />;
  };

  const getStatusColor = () => {
    if (status === 'completed') return 'bg-emerald-500 border-emerald-400';
    if (status === 'available') return 'bg-purple-500 border-purple-400';
    return 'bg-gray-600 border-gray-500';
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-transparent !border-0"
      />
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(concept)}
        className={`
          relative p-3 rounded-xl cursor-pointer
          min-w-[140px] max-w-[160px]
          ${isTarget 
            ? `bg-gradient-to-br ${colors.gradient} border-2 border-white/30 shadow-lg shadow-purple-500/30` 
            : status === 'completed'
              ? 'bg-emerald-500/20 border border-emerald-500/50'
              : status === 'available'
                ? 'bg-purple-500/20 border border-purple-500/50'
                : 'bg-gray-800/80 border border-gray-600'}
          transition-all duration-200
        `}
      >
        {/* Step number badge */}
        <div className={`
          absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
          ${getStatusColor()} text-white
        `}>
          {status === 'completed' ? getStatusIcon() : stepNumber}
        </div>

        {/* Target star */}
        {isTarget && (
          <div className="absolute -top-2 -right-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-xl">{concept.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className={`font-medium text-sm truncate ${isTarget ? 'text-white' : 'text-gray-200'}`}>
              {concept.title}
            </div>
            {status === 'available' && !isTarget && (
              <div className="text-xs text-purple-300">Start here</div>
            )}
          </div>
        </div>
      </motion.div>

      <Handle
        type="source"
        position={Position.Right}
        className="!bg-transparent !border-0"
      />
    </>
  );
}

export default memo(LearningPathNode);
