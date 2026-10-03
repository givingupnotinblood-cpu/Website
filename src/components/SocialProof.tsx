import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const stats = [
    {
      value: '11.3M+',
      label: 'Highest Reel Views',
      highlight: true,
      sublabel: 'Hot Wheels Clock Viral Challenge',
    },
    {
      value: '11K+',
      label: 'YouTube Subscribers',
      highlight: false,
      sublabel: '@bhavyaxtreme channel',
    },
    {
      value: '4K+',
      label: 'Instagram Followers',
      highlight: false,
      sublabel: '@bhavyaxtreme audience',
    },
  ];

  return (
    <section
      id="proof"
      aria-label="Verified creator statistics"
      className="py-12 sm:py-16 px-4 sm:px-6 border-y border-white/[0.08] bg-[#09090c]/70 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all relative ${
                stat.highlight
                  ? 'bg-gradient-to-b from-amber-500/10 via-amber-500/[0.03] to-transparent border border-amber-400/30 shadow-lg shadow-amber-500/5'
                  : 'bg-white/[0.02] border border-white/[0.07] hover:border-white/20'
              }`}
            >
              {stat.highlight && (
                <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20 mb-2">
                  <Trophy className="w-3 h-3" />
                  <span>RECORD VIEWS</span>
                </div>
              )}

              <span
                className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl tabular-nums tracking-[-0.03em] mb-1 ${
                  stat.highlight ? 'text-amber-400' : 'text-white'
                }`}
              >
                {stat.value}
              </span>

              <span className="text-sm sm:text-base font-bold text-zinc-200 tracking-tight mb-1">
                {stat.label}
              </span>

              <span className="text-xs text-zinc-400 font-normal">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
