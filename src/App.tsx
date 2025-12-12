import { useState, useCallback } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import Header from './components/Header';
import ConceptGraph from './components/ConceptGraph';
import SearchBar from './components/SearchBar';
import ConceptDetail from './components/ConceptDetail';
import { concepts } from './data/concepts';
import type { Concept } from './types/concept';

function App() {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<Concept[]>([]);

  // Navigate to a concept, adding current to history (avoid duplicates)
  const navigateToConcept = useCallback((concept: Concept) => {
    // Don't navigate to the same concept
    if (selectedConcept?.id === concept.id) return;
    
    if (selectedConcept) {
      setNavigationHistory(prev => {
        // Don't add if it's already the last item in history
        if (prev.length > 0 && prev[prev.length - 1].id === selectedConcept.id) {
          return prev;
        }
        return [...prev, selectedConcept];
      });
    }
    setSelectedConcept(concept);
  }, [selectedConcept]);

  // Go back to previous concept
  const goBack = useCallback(() => {
    if (navigationHistory.length > 0) {
      const newHistory = [...navigationHistory];
      const previousConcept = newHistory.pop()!;
      setNavigationHistory(newHistory);
      setSelectedConcept(previousConcept);
    } else {
      setSelectedConcept(null);
    }
  }, [navigationHistory]);

  // Go back to main graph (clear history)
  const goToGraph = useCallback(() => {
    setSelectedConcept(null);
    setNavigationHistory([]);
  }, []);

  const handlePopularClick = (name: string) => {
    const concept = concepts.find(c => c.title === name);
    if (concept) navigateToConcept(concept);
  };

  // If a concept is selected, show the full page detail view
  if (selectedConcept) {
    return (
      <ReactFlowProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
          <ConceptDetail
            concept={selectedConcept}
            onSelectConcept={navigateToConcept}
            onBack={goBack}
            onGoToGraph={goToGraph}
            previousConcept={navigationHistory[navigationHistory.length - 1] || null}
          />
        </div>
      </ReactFlowProvider>
    );
  }

  return (
    <ReactFlowProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <Header />
        
        <main className="pt-20 h-screen flex flex-col">
          {/* Search Section */}
          <div className="px-4 py-6 flex-shrink-0">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Learn <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">anything</span> step by step
              </h1>
              <p className="text-gray-400 mb-6">
                Search for any concept to see what you need to learn first
              </p>
              
              <SearchBar onSelectConcept={navigateToConcept} />
              
              {/* Popular Concepts */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Monoids', 'Recursion', 'Category Theory', 'Algorithms'].map(name => (
                  <button
                    key={name}
                    onClick={() => handlePopularClick(name)}
                    className="px-3 py-1 text-sm bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-full text-gray-400 hover:text-white transition-all"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Concept Graph */}
          <div className="flex-1 relative">
            <ConceptGraph onSelectConcept={navigateToConcept} />
          </div>
        </main>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
