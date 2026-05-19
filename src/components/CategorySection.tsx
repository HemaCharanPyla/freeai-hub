import React from 'react';
import { motion } from 'motion/react';
import { Category, Tool } from '../types';
import { ToolCard } from './ToolCard';
import * as Icons from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  tools: Tool[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, tools }) => {
  if (tools.length === 0) return null;

  // Dynamically get the icon from lucide-react
  // @ts-ignore
  const IconComponent = Icons[category.icon.charAt(0).toUpperCase() + category.icon.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())] || Icons.Zap;

  return (
    <section id={category.id} className="py-12 scroll-mt-32">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
          <IconComponent size={20} />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{category.name}</h2>
        <div className="flex-grow h-px bg-white/5 ml-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};
