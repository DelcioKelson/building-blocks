# Building Blocks - Copilot Instructions

## Project Overview
An interactive educational platform that visualizes learning concepts as interconnected building blocks.

## Tech Stack
- React 18 with TypeScript
- Vite for bundling
- React Flow for graph visualization
- Framer Motion for animations
- Tailwind CSS for styling
- Zustand for state management

## Key Files
- `src/data/concepts.ts` - All learning concepts and their prerequisites
- `src/types/concept.ts` - TypeScript types for concepts
- `src/store/progressStore.ts` - User progress state management
- `src/components/ConceptGraph.tsx` - Main graph visualization
- `src/components/ConceptNode.tsx` - Custom node component for React Flow
- `src/components/ConceptModal.tsx` - Modal for concept details

## Development Guidelines
- Use TypeScript strict mode
- Follow React best practices with hooks
- Use Tailwind CSS for all styling
- Prefer functional components
- Use Zustand for global state

## Adding New Concepts
Add to `src/data/concepts.ts` with required fields:
- id, title, description, emoji, category, difficulty, prerequisites, estimatedTime, keyPoints

## Running the Project
```bash
npm run dev
```
