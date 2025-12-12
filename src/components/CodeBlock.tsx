import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const languageColors: Record<string, { bg: string; text: string; label: string }> = {
  javascript: { bg: 'bg-yellow-500/20', text: 'text-yellow-300', label: 'JavaScript' },
  typescript: { bg: 'bg-blue-500/20', text: 'text-blue-300', label: 'TypeScript' },
  python: { bg: 'bg-green-500/20', text: 'text-green-300', label: 'Python' },
  java: { bg: 'bg-orange-500/20', text: 'text-orange-300', label: 'Java' },
  cpp: { bg: 'bg-purple-500/20', text: 'text-purple-300', label: 'C++' },
  rust: { bg: 'bg-orange-600/20', text: 'text-orange-300', label: 'Rust' },
  go: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', label: 'Go' },
  pseudo: { bg: 'bg-gray-500/20', text: 'text-gray-300', label: 'Pseudocode' },
};

// Simple syntax highlighting
function highlightCode(code: string, language: string): ReactNode[] {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Keywords for different languages
    const keywords = language === 'python' 
      ? /\b(def|return|if|else|elif|for|while|in|and|or|not|True|False|None|class|import|from|as|try|except|with|lambda|yield|pass|break|continue|raise|finally|global|nonlocal|assert|async|await)\b/g
      : /\b(function|const|let|var|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|class|extends|import|export|from|async|await|yield|true|false|null|undefined|this|super|static|public|private|protected|void|int|string|boolean|float|double|fn|mut|pub|impl|struct|enum|match|loop|use|mod)\b/g;
    
    const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g;
    const comments = language === 'python' ? /#.*$/g : /\/\/.*$|\/\*[\s\S]*?\*\//g;
    const numbers = /\b\d+(\.\d+)?\b/g;
    
    let highlighted = line;
    const replacements: { start: number; end: number; html: string }[] = [];
    
    // Find comments first (highest priority)
    let match;
    while ((match = comments.exec(line)) !== null) {
      replacements.push({
        start: match.index,
        end: match.index + match[0].length,
        html: `<span class="text-gray-500 italic">${escapeHtml(match[0])}</span>`
      });
    }
    
    // Find strings
    while ((match = strings.exec(line)) !== null) {
      if (!isOverlapping(match.index, match.index + match[0].length, replacements)) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span class="text-emerald-400">${escapeHtml(match[0])}</span>`
        });
      }
    }
    
    // Find keywords
    while ((match = keywords.exec(line)) !== null) {
      if (!isOverlapping(match.index, match.index + match[0].length, replacements)) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span class="text-purple-400 font-semibold">${escapeHtml(match[0])}</span>`
        });
      }
    }
    
    // Find numbers
    while ((match = numbers.exec(line)) !== null) {
      if (!isOverlapping(match.index, match.index + match[0].length, replacements)) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span class="text-orange-400">${escapeHtml(match[0])}</span>`
        });
      }
    }
    
    // Sort replacements by start position (descending) to replace from end to start
    replacements.sort((a, b) => b.start - a.start);
    
    for (const rep of replacements) {
      highlighted = highlighted.slice(0, rep.start) + rep.html + highlighted.slice(rep.end);
    }
    
    // Escape remaining HTML but preserve our spans
    const parts = highlighted.split(/(<span[^>]*>.*?<\/span>)/g);
    highlighted = parts.map(part => {
      if (part.startsWith('<span')) return part;
      return escapeHtml(part);
    }).join('');
    
    return (
      <div key={lineIndex} className="flex">
        <span className="text-gray-600 select-none w-8 text-right pr-4 flex-shrink-0">
          {lineIndex + 1}
        </span>
        <span 
          className="flex-1"
          dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }}
        />
      </div>
    );
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isOverlapping(start: number, end: number, replacements: { start: number; end: number }[]): boolean {
  return replacements.some(r => 
    (start >= r.start && start < r.end) || (end > r.start && end <= r.end)
  );
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const langConfig = languageColors[language] || languageColors.pseudo;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden bg-gray-950 border border-gray-800"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/80 border-b border-gray-800">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && <span className="text-gray-400 text-sm">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${langConfig.bg} ${langConfig.text}`}>
            {langConfig.label}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>
      
      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-gray-300">
          {highlightCode(code.trim(), language)}
        </pre>
      </div>
    </motion.div>
  );
}
