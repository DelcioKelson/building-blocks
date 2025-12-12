import { useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { concepts } from '../data/concepts';
import type { Concept, Category } from '../types/concept';
import { useProgressStore } from '../store/progressStore';
import ConceptNode from './ConceptNode';

const nodeTypes = {
  concept: ConceptNode,
};

// Position concepts in a hierarchical layout
function calculateNodePositions(concepts: Concept[]): Node[] {
  const levels: Map<string, number> = new Map();
  const categoryColumns: Record<Category, number> = {
    mathematics: 0,
    programming: 1,
    logic: 2,
    science: 3,
    language: 4,
  };

  // Calculate level for each concept based on prerequisites
  function getLevel(conceptId: string, visited: Set<string> = new Set()): number {
    if (visited.has(conceptId)) return 0;
    visited.add(conceptId);

    const cached = levels.get(conceptId);
    if (cached !== undefined) return cached;

    const concept = concepts.find(c => c.id === conceptId);
    if (!concept || concept.prerequisites.length === 0) {
      levels.set(conceptId, 0);
      return 0;
    }

    const maxPrereqLevel = Math.max(
      ...concept.prerequisites.map(prereq => getLevel(prereq, visited))
    );
    const level = maxPrereqLevel + 1;
    levels.set(conceptId, level);
    return level;
  }

  concepts.forEach(c => getLevel(c.id));

  // Group concepts by category and level
  const categoryLevelCounts: Record<string, Map<number, number>> = {};
  
  concepts.forEach(concept => {
    const key = concept.category;
    if (!categoryLevelCounts[key]) {
      categoryLevelCounts[key] = new Map();
    }
    const level = levels.get(concept.id) || 0;
    categoryLevelCounts[key].set(level, (categoryLevelCounts[key].get(level) || 0) + 1);
  });

  const categoryLevelIndexes: Record<string, Map<number, number>> = {};

  return concepts.map(concept => {
    const level = levels.get(concept.id) || 0;
    const col = categoryColumns[concept.category];
    
    // Track index within category-level group
    const key = concept.category;
    if (!categoryLevelIndexes[key]) {
      categoryLevelIndexes[key] = new Map();
    }
    const currentIndex = categoryLevelIndexes[key].get(level) || 0;
    categoryLevelIndexes[key].set(level, currentIndex + 1);

    const xSpacing = 280;
    const ySpacing = 180;
    const xOffset = currentIndex * 60; // Stagger within same level

    return {
      id: concept.id,
      type: 'concept',
      position: {
        x: col * xSpacing + xOffset,
        y: level * ySpacing + 100,
      },
      data: { concept },
    };
  });
}

function createEdges(concepts: Concept[]): Edge[] {
  const edges: Edge[] = [];

  concepts.forEach(concept => {
    concept.prerequisites.forEach(prereqId => {
      const prereqConcept = concepts.find(c => c.id === prereqId);
      if (prereqConcept) {
        edges.push({
          id: `${prereqId}-${concept.id}`,
          source: prereqId,
          target: concept.id,
          animated: true,
          style: {
            stroke: `url(#gradient-${prereqConcept.category})`,
            strokeWidth: 2,
          },
        });
      }
    });
  });

  return edges;
}

interface ConceptGraphProps {
  onSelectConcept?: (concept: Concept) => void;
}

export default function ConceptGraph({ onSelectConcept }: ConceptGraphProps) {
  const getConceptStatus = useProgressStore(state => state.getConceptStatus);

  const handleNodeClick = useCallback((concept: Concept) => {
    onSelectConcept?.(concept);
  }, [onSelectConcept]);

  const initialNodes = useMemo(() => {
    const nodes = calculateNodePositions(concepts);
    return nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        onClick: handleNodeClick,
      },
    }));
  }, [handleNodeClick]);

  const initialEdges = useMemo(() => createEdges(concepts), []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Update node data when status changes
  const nodesWithStatus = useMemo(() => {
    return nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        onClick: handleNodeClick,
      },
    }));
  }, [nodes, handleNodeClick]);

  return (
    <div className="w-full h-full">
      {/* SVG Gradients for edges */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gradient-mathematics" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient-programming" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient-science" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="gradient-language" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="gradient-logic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>

      <ReactFlow
        nodes={nodesWithStatus}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1}
          color="rgba(79, 70, 229, 0.2)"
        />
        <Controls 
          showInteractive={false}
          position="bottom-left"
        />
        <MiniMap
          nodeColor={(node) => {
            const concept = node.data?.concept as Concept | undefined;
            if (!concept) return '#666';
            const status = getConceptStatus(concept.id);
            if (status === 'completed') return '#10b981';
            if (status === 'available') return '#8b5cf6';
            return '#4b5563';
          }}
          maskColor="rgba(15, 15, 35, 0.8)"
          position="bottom-right"
        />
      </ReactFlow>
    </div>
  );
}
