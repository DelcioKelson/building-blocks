import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { concepts } from '../data/concepts';
import type { Concept } from '../types/concept';
import { categoryColors } from '../types/concept';

interface SearchBarProps {
  onSelectConcept: (concept: Concept) => void;
}

export default function SearchBar({ onSelectConcept }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return concepts.filter(
      c =>
        c.title.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.keyPoints.some(kp => kp.toLowerCase().includes(lowerQuery))
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (concept: Concept) => {
    onSelectConcept(concept);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search for any concept... (e.g., monoids, recursion, functions)"
          className="w-full pl-12 pr-12 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden shadow-2xl z-50"
          >
            {results.map((concept, index) => {
              const colors = categoryColors[concept.category];
              return (
                <motion.button
                  key={concept.id}
                  onClick={() => handleSelect(concept)}
                  className={`w-full px-4 py-3 flex items-center gap-4 text-left transition-colors ${
                    index === selectedIndex ? 'bg-purple-500/20' : 'hover:bg-gray-700/50'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${colors.gradient}`}>
                    {concept.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white">{concept.title}</div>
                    <div className="text-sm text-gray-400 truncate">{concept.description}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && query && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 p-6 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-2xl text-center"
        >
          <p className="text-gray-400">No concepts found for "{query}"</p>
          <p className="text-sm text-gray-500 mt-1">Try searching for something else</p>
        </motion.div>
      )}
    </div>
  );
}
