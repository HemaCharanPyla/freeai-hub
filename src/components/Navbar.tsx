import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, Rocket } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { CategoryPill } from './CategoryPill';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl p-2 pl-6 pr-4 flex items-center justify-between gap-4 shadow-2xl overflow-hidden`}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white">
              <Rocket size={18} fill="currentColor" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tighter">FreeAI Hub</span>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-full max-w-md focus-within:border-brand-accent/50 focus-within:bg-white/10 transition-all">
            <Search size={18} className="text-white/40" />
            <input 
              type="text"
              placeholder="Search 70+ AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm px-3 w-full text-white placeholder:text-white/20"
            />
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Submit Tool</a>
            <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>
            <button className="bg-brand-accent hover:bg-brand-accent/80 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-lg shadow-brand-accent/20">
              Join Hub
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide pb-2 mask-linear"
        >
          <CategoryPill 
            id="all" 
            name="All Tools" 
            isActive={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')} 
          />
          {CATEGORIES.map((cat) => (
            <CategoryPill 
              key={cat.id} 
              id={cat.id} 
              name={cat.name} 
              isActive={activeCategory === cat.id} 
              onClick={() => {
                setActiveCategory(cat.id);
                // Simple smooth scroll to category
                const element = document.getElementById(cat.id);
                if (element) {
                  const headerOffset = 180;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }} 
            />
          ))}
        </motion.div>
      </div>
    </nav>
  );
};
