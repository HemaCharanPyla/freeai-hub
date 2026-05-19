import React from 'react';
import { motion } from 'motion/react';

interface CategoryPillProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
        ${isActive 
          ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20 border-brand-accent/50' 
          : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border-white/5'}
        border
      `}
    >
      {name}
    </button>
  );
};
