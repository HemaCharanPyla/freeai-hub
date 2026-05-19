import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-48 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-radial from-brand-accent/20 to-transparent blur-3xl opacity-50 -z-10" />
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={12} />
            <span>Curated for 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Every Free AI Tool <br className="hidden md:block" />
            <span className="text-brand-accent">You'll Ever Need.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light">
            Stop searching. We've handpicked the best 100% free AI tools and agents across every category. Updated daily, no fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                const firstSection = document.getElementById(document.querySelectorAll('section[id]')[0]?.id);
                if (firstSection) firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl hover:shadow-brand-accent/20 active:scale-95 flex items-center justify-center gap-2"
            >
              Explore the Hub
              <ChevronDown size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all active:scale-95">
              Submit a Free Tool
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative SVG Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};
