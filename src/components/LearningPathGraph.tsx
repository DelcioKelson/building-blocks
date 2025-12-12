import { useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
} from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { Concept } from '../types/concept';
import { useProgressStore } from '../store/progressStore';
import { getMissingPrerequisites } from '../data/concepts';
import LearningPathNode from './LearningPathNode';

const nodeTypes = {
  learningPath: LearningPathNode,
};

interface LearningPathGraphProps {
  targetConcept: Concept;
  onSelectConcept: (concept: Concept) => void;
}

export default function LearningPathGraph({ targetConcept, onSelectConcept }: LearningPathGraphProps) {
  const { completedConcepts, getConceptStatus } = useProgressStore();
  const missingPrereqs = getMissingPrerequisites(targetConcept.id, completedConcepts);
  
  // Build the learning path including the target
  const learningPath = [...missingPrereqs, targetConcept];

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    // Position nodes in a horizontal line with some vertical offset for variety
    const xSpacing = 200;
    const startX = 50;
    
    learningPath.forEach((concept, index) => {
      const status = getConceptStatus(concept.id);
      const isTarget = concept.id === targetConcept.id;
      
      nodes.push({
        id: concept.id,
        type: 'learningPath',
        position: {
          x: startX + index * xSpacing,
          y: 80 + (index % 2) * 30, // Slight zigzag
        },
        data: {
          concept,
          status,
          isTarget,
          stepNumber: index + 1,
          onClick: onSelectConcept,
        },
      });

      // Create edge to next node
      if (index > 0) {
        const prevConcept = learningPath[index - 1];
        edges.push({
          id: `${prevConcept.id}-${concept.id}`,
          source: prevConcept.id,
          target: concept.id,
          animated: true,
          style: {
            stroke: status === 'completed' ? '#10b981' : '#6b7280',
            strokeWidth: 2,
          },
        });
      }
    });

    return { nodes, edges };
  }, [learningPath, getConceptStatus, targetConcept.id, onSelectConcept]);

  const handleNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const concept = node.data.concept as Concept;
    onSelectConcept(concept);
  }, [onSelectConcept]);

  return (
    <ReactFlowProvider>
      <div className="w-full h-[250px] bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.5}
          maxZoom={1.2}
          panOnDrag={true}
          zoomOnScroll={false}
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
        >
          <Background 
            variant={BackgroundVariant.Dots} 
            gap={16} 
            size={1}
            color="rgba(79, 70, 229, 0.15)"
          />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
