import React from 'react';
import { motion } from 'motion/react';
import { Camera, Lightbulb, Plane, Sliders } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const points = [
    {
      title: 'CREATIVE',
      description: 'I can develop concepts around a product, campaign or idea.',
      icon: Lightbulb,
    },
    {
      title: 'PRODUCTION',
      description: 'I create high-quality Reels with a dedicated cameraman and editor.',
      icon: Camera,
    },
    {
      title: 'FLEXIBLE',
      description: 'I can work from a brand brief or develop the concept myself.',
      icon: Sliders,
    },
    {
      title: 'ON THE MOVE',
      description: 'Open to travelling for campaigns and shoots.',
      icon: Plane,
    },
  ];

  return (
    <section
      id="why"
      aria-label="Why collaborate with BhavyaXtreme"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.07]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="text-left mb-10 sm:mb-12"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2 font-semibold">
          The Advantage
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-[-0.04em] leading-tight">
          MORE THAN JUST A CREATOR.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {points.map((point, idx) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-lg text-white tracking-tight">
                  {point.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {point.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
