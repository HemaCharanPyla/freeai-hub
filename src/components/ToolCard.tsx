import React from 'react';
import { motion } from 'motion/react';
import { Tool } from '../types';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const domain = new URL(tool.url).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative h-full flex flex-col p-5 bg-brand-card rounded-2xl border border-white/5 card-glow overflow-hidden"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform">
          <img 
            src={faviconUrl} 
            alt={tool.name} 
            className="w-8 h-8 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-brand-accent transition-colors">
            {tool.name}
          </h3>
          <p className="text-xs text-white/40 font-mono tracking-tight uppercase truncate">
            {domain}
          </p>
        </div>
      </div>
      
      <p className="text-sm text-white/60 mb-6 flex-grow leading-relaxed">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-brand-accent text-white hover:text-white text-sm font-medium rounded-xl transition-all border border-white/10 hover:border-brand-accent/50"
      >
        <span>Visit Tool</span>
        <ExternalLink size={14} />
      </a>
      
      {/* Decorative glow */}
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-brand-accent/5 blur-3xl rounded-full group-hover:bg-brand-accent/20 transition-all" />
    </motion.div>
  );
};
