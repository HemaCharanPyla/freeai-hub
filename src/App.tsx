import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { CATEGORIES, TOOLS } from './constants';
import { Twitter, Github, Heart, Globe, ExternalLink } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || tool.categoryId === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const displayedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      return CATEGORIES.filter(c => c.id === activeCategory);
    }
    return CATEGORIES;
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main>
        <Hero />

        <div className="container mx-auto px-6 py-12">
          {filteredTools.length > 0 ? (
            <AnimatePresence mode="popLayout">
              {displayedCategories.map((category) => {
                const toolsInCategory = filteredTools.filter(t => t.categoryId === category.id);
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CategorySection 
                      category={category} 
                      tools={toolsInCategory} 
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={40} className="text-white/20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No tools found</h3>
              <p className="text-white/40">Try searching for something else or check another category.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-6 text-brand-accent hover:underline font-medium"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-brand-accent flex items-center justify-center text-white">
                  <Heart size={12} fill="currentColor" />
                </div>
                <span className="text-xl font-bold tracking-tighter">FreeAI Hub</span>
              </div>
              <p className="text-white/40 text-sm max-w-sm">
                The ultimate directory for free AI resources. Helping you build the future without breaking the bank.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
                <Twitter size={20} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
                <Github size={20} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
                <Globe size={20} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/20 pt-8 border-t border-white/5">
            <p>© 2025 FREEAI HUB. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors uppercase">Privacy</a>
              <a href="#" className="hover:text-white transition-colors uppercase">Terms</a>
              <a href="#" className="hover:text-white transition-colors uppercase">Contribute</a>
            </div>
            <p className="flex items-center gap-1">
              BUILT WITH <Heart size={10} className="text-red-500/50" /> FOR THE OPEN WEB
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
