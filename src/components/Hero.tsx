import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onWorkWithMe: () => void;
  onWatchContent: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkWithMe, onWatchContent }) => {
  return (
    <section
      id="hero"
      aria-label="Creator introduction"
      className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Dynamic Ambient Color Halos */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[540px] h-80 sm:h-[540px] bg-amber-500/20 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Creator Official Avatar Centerpiece with Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="relative mb-4 group">
            {/* Ambient Halo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.75, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2.5 rounded-full blur-xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(14, 165, 233, 0.4) 100%)',
              }}
            />

            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-white to-sky-400 shadow-2xl overflow-hidden">
              <img
                src="/bhavya-avatar.png"
                alt="BhavyaXtreme"
                className="w-full h-full object-cover rounded-full bg-[#0d0d12]"
              />
            </div>

            <div className="absolute -bottom-2 right-1 whitespace-nowrap bg-black/90 border border-white/20 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>OFFICIAL</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl sm:text-3xl tracking-tight text-white uppercase">
              BHAVYA<span className="text-amber-400">XTREME</span>
            </span>
          </div>
        </motion.div>

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-300 font-medium tracking-wide mb-6 bg-white/[0.04] border border-white/[0.08] px-3.5 sm:px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Ahmedabad · Surat, India</span>
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-amber-400 font-semibold font-mono">11.3M+ Viral Reach</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-white leading-[1.04] sm:leading-[0.98] mb-5 sm:mb-6"
        >
          CHALLENGE.
          <br />
          <span className="text-zinc-300">EXPLORE.</span>
          <br />
          <span className="text-white">EXPERIMENT.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-xl text-zinc-300 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          I create high-quality challenge, experiment and experience-based content people want to watch.
        </motion.p>

        {/* Dual Primary / Secondary CTAs with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onWorkWithMe}
            className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-8 rounded-2xl bg-white active:bg-zinc-200 active:scale-95 text-black font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all cursor-pointer shadow-xl shadow-white/10"
          >
            <span>WORK WITH ME</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onWatchContent}
            className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-7 rounded-2xl glass-button text-white active:bg-white/[0.18] active:scale-95 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-white/[0.08] transition-all cursor-pointer border border-white/15"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>WATCH MY CONTENT</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
