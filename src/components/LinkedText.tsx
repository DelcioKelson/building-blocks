import { useMemo, type ReactNode } from 'react';
import { concepts } from '../data/concepts';
import type { Concept } from '../types/concept';

interface LinkedTextProps {
  text: string;
  currentConceptId: string;
  onConceptClick: (concept: Concept) => void;
}

// Build a map of concept titles (and common variations) to concepts
function buildConceptMap() {
  const map = new Map<string, Concept>();
  
  for (const concept of concepts) {
    // Add the exact title
    map.set(concept.title.toLowerCase(), concept);
    
    // Add common variations
    const title = concept.title.toLowerCase();
    
    // Plural/singular variations
    if (title.endsWith('s')) {
      map.set(title.slice(0, -1), concept); // Remove 's'
    } else {
      map.set(title + 's', concept); // Add 's'
    }
    
    // Special cases for common terms
    if (title === 'arrays') map.set('array', concept);
    if (title === 'objects') map.set('object', concept);
    if (title === 'functions') map.set('function', concept);
    if (title === 'variables') map.set('variable', concept);
    if (title === 'loops') map.set('loop', concept);
    if (title === 'conditionals') map.set('conditional', concept);
    if (title === 'classes') map.set('class', concept);
    if (title === 'promises') map.set('promise', concept);
    if (title === 'closures') map.set('closure', concept);
    if (title === 'recursion') map.set('recursive', concept);
    if (title === 'algorithms') map.set('algorithm', concept);
    if (title === 'trees') map.set('tree', concept);
    if (title === 'graphs') map.set('graph', concept);
    if (title === 'stacks') map.set('stack', concept);
    if (title === 'queues') map.set('queue', concept);
    if (title === 'hash tables') {
      map.set('hash table', concept);
      map.set('hashmap', concept);
      map.set('hash map', concept);
    }
    if (title === 'linked lists') {
      map.set('linked list', concept);
    }
    if (title === 'binary operations') {
      map.set('binary operation', concept);
    }
    if (title === 'higher-order functions') {
      map.set('higher-order function', concept);
      map.set('higher order function', concept);
      map.set('higher order functions', concept);
    }
    if (title === 'async/await') {
      map.set('async', concept);
      map.set('await', concept);
    }
  }
  
  return map;
}

const conceptMap = buildConceptMap();

// Get sorted concept terms by length (longest first) to match multi-word terms first
const sortedTerms = Array.from(conceptMap.keys()).sort((a, b) => b.length - a.length);

export default function LinkedText({ text, currentConceptId, onConceptClick }: LinkedTextProps) {
  const linkedContent = useMemo(() => {
    const result: ReactNode[] = [];
    let remaining = text;
    let keyCounter = 0;
    
    while (remaining.length > 0) {
      let foundMatch = false;
      
      // Try to find a concept term at the current position
      for (const term of sortedTerms) {
        // Check if the remaining text starts with this term (case-insensitive)
        const lowerRemaining = remaining.toLowerCase();
        
        if (lowerRemaining.startsWith(term)) {
          // Make sure it's a word boundary (not part of a larger word)
          const nextChar = remaining[term.length];
          const prevChar = result.length > 0 ? 
            (typeof result[result.length - 1] === 'string' ? 
              (result[result.length - 1] as string).slice(-1) : '') : '';
          
          const isWordBoundaryBefore = !prevChar || /[\s.,;:!?()\[\]{}'"<>\/\-]/.test(prevChar);
          const isWordBoundaryAfter = !nextChar || /[\s.,;:!?()\[\]{}'"<>\/\-]/.test(nextChar);
          
          if (isWordBoundaryBefore && isWordBoundaryAfter) {
            const concept = conceptMap.get(term);
            
            // Don't link to the current concept
            if (concept && concept.id !== currentConceptId) {
              const matchedText = remaining.slice(0, term.length);
              
              result.push(
                <button
                  key={keyCounter++}
                  onClick={() => onConceptClick(concept)}
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/50 hover:decoration-purple-300 underline-offset-2 transition-colors cursor-pointer font-medium"
                  title={`Learn about ${concept.title}`}
                >
                  {matchedText}
                </button>
              );
              
              remaining = remaining.slice(term.length);
              foundMatch = true;
              break;
            }
          }
        }
      }
      
      if (!foundMatch) {
        // No match found, add the next character to the result
        const lastResult = result[result.length - 1];
        if (typeof lastResult === 'string') {
          result[result.length - 1] = lastResult + remaining[0];
        } else {
          result.push(remaining[0]);
        }
        remaining = remaining.slice(1);
      }
    }
    
    return result;
  }, [text, currentConceptId, onConceptClick]);
  
  return <>{linkedContent}</>;
}
