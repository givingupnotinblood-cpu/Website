import React from 'react';
import { motion } from 'motion/react';
import { Compass, Flame, Shuffle, ShoppingBag, Target, Trophy } from 'lucide-react';

export const ContentIdentity: React.FC = () => {
  const formats = [
    {
      index: '01',
      title: 'Challenge Reels',
      description: 'High-stakes, real-world dares and street trials that spark instant organic engagement.',
      icon: Trophy,
    },
    {
      index: '02',
      title: 'Real-World Experiments',
      description: 'Curiosity-fueled social tests and psychological street experiments that keep viewers watching.',
      icon: Flame,
    },
    {
      index: '03',
      title: 'Unique Experiences',
      description: 'Stepping into unexpected daily professions and documenting authentic human interactions.',
      icon: Compass,
    },
    {
      index: '04',
      title: 'Exploration',
      description: 'Uncovering untold city stories, hidden corners, and spontaneous public encounters.',
      icon: Target,
    },
    {
      index: '05',
      title: 'Product/Selling Challenges',
      description: 'Turning unconventional items into irresistible street sales through sheer charisma and hustle.',
      icon: ShoppingBag,
    },
    {
      index: '06',
      title: 'Spin-the-Wheel Challenges',
      description: 'Randomized luck mechanics where stranger decisions dictate the outcome in real time.',
      icon: Shuffle,
    },
  ];

  return (
    <section
      id="identity"
      aria-label="Creator content categories"
      className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/[0.07] bg-[#08080a] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-3 block">
            Content Formats
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-[-0.04em] leading-tight">
            CHALLENGE.<br className="sm:hidden" /> EXPLORE.<br className="sm:hidden" /> EXPERIMENT.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-4">
            Engineered around audience curiosity, genuine human reactions, and high-retention storytelling.
          </p>
        </motion.div>

        {/* 6 Formats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-amber-400 transition-colors">
                      {item.index}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
