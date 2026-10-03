import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Flame, Sparkles, TrendingUp } from 'lucide-react';

export type OpeningPath = 'collab_focus' | 'explore_focus' | 'direct';

interface OpeningExperienceProps {
  onComplete: (path: OpeningPath) => void;
}

type Stage = 'question' | 'yes_transition' | 'no_missing' | 'no_reveal';

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('question');
  const [yesSubStep, setYesSubStep] = useState<1 | 2>(1);

  // Auto-progress the YES flow with cinematic timing
  useEffect(() => {
    if (stage === 'yes_transition') {
      const stepTimer = setTimeout(() => {
        setYesSubStep(2);
      }, 1500);

      const finishTimer = setTimeout(() => {
        onComplete('collab_focus');
      }, 3400);

      return () => {
        clearTimeout(stepTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [stage, onComplete]);

  const handleYesClick = () => {
    setStage('yes_transition');
    setYesSubStep(1);
  };

  const handleNoClick = () => {
    setStage('no_missing');
  };

  const handleNoContinueToPeek = () => {
    setStage('no_reveal');
  };

  return (
    <div
      role="dialog"
      aria-label="Welcome interactive experience"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070708] text-white p-4 sm:p-10 select-none overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Dynamic Background Ambient Breathing Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/20 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <header className="w-full flex items-center justify-between max-w-4xl mx-auto pt-2 z-10">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white uppercase">
            BHAVYA<span className="text-amber-400">XTREME</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </div>

        <span className="text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase font-mono">
          Ahmedabad · Surat
        </span>
      </header>

      {/* Main Interactive Stage with Animated Transitions */}
      <main className="w-full max-w-lg mx-auto flex flex-col items-center justify-center my-auto text-center px-2 z-10">
        <AnimatePresence mode="wait">
          {/* ========================================================
              STAGE 1: THE INITIAL QUESTION
              ======================================================== */}
          {stage === 'question' && (
            <motion.div
              key="stage-question"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              {/* Creator Official Logo with Glowing Aura */}
              <div className="relative mb-5 sm:mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.85, 0.5],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-2 rounded-full blur-xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, rgba(14, 165, 233, 0.35) 100%)',
                  }}
                />

                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-white to-sky-400 shadow-2xl">
                  <img
                    src="/bhavya-avatar.png"
                    alt="BhavyaXtreme"
                    className="w-full h-full object-cover rounded-full bg-[#0d0d12]"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 border border-white/20 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  <span>11.3M+ VIRAL</span>
                </div>
              </div>

              {/* Subtitle Kicker */}
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-2 sm:mb-3">
                CHALLENGE · EXPLORE · EXPERIMENT
              </span>

              {/* Razor-sharp Typography Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-6xl tracking-[-0.04em] text-white leading-none mb-6 sm:mb-10">
                WANT TO COLLAB?
              </h1>

              {/* Dual Premium Buttons with >= 48px Touch Targets & Instant Active Feedback */}
              <div className="w-full max-w-sm flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="w-full sm:flex-1 min-h-[52px] sm:min-h-[58px] px-6 rounded-2xl bg-white text-black font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <span>YES</span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNoClick}
                  className="w-full sm:flex-1 min-h-[52px] sm:min-h-[58px] px-6 rounded-2xl glass-button text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-white/[0.08] active:bg-white/[0.18] active:scale-95 transition-all cursor-pointer border border-white/15 focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                  <span>NO</span>
                  <ArrowRight className="w-5 h-5 text-zinc-400" />
                </motion.button>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 tracking-wide font-normal flex items-center gap-1.5">
                <span>Be honest.</span>
                <span className="text-base">👀</span>
              </p>
            </motion.div>
          )}

          {/* ========================================================
              STAGE 2: YES PATH (SMOOTH CINEMATIC TRANSITION)
              ======================================================== */}
          {stage === 'yes_transition' && (
            <motion.div
              key="stage-yes"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center justify-center text-center"
            >
              {yesSubStep === 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    CONFIRMED
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-6xl text-white tracking-tight">
                    GOOD CHOICE. 👀
                  </h2>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                    THE FORMULA
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-md mx-auto leading-tight">
                    LET&apos;S MAKE SOMETHING PEOPLE WANT TO WATCH.
                  </h2>
                  <div className="mt-8 flex items-center gap-2.5 text-xs text-amber-400 font-mono">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>Opening creator portfolio...</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ========================================================
              STAGE 3: NO PATH — FOMO INTRO
              ======================================================== */}
          {stage === 'no_missing' && (
            <motion.div
              key="stage-no-missing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center justify-center text-center"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-4">
                SECOND THOUGHTS?
              </span>

              <h2 className="font-display font-black text-3xl sm:text-6xl text-white tracking-tight mb-4">
                YOU&apos;RE MISSING OUT. 👀
              </h2>

              <p className="text-sm sm:text-lg text-zinc-300 max-w-sm mx-auto mb-6 sm:mb-8 font-normal">
                But okay... we&apos;ll let you see what you&apos;re missing.
              </p>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNoContinueToPeek}
                className="min-h-[50px] sm:min-h-[56px] px-8 rounded-2xl bg-white text-black font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-lg shadow-white/10 focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>SEE WHAT YOU&apos;RE MISSING</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </motion.button>
            </motion.div>
          )}

          {/* ========================================================
              STAGE 4: NO PATH — REVEAL STRONG CONTENT NUMBERS
              ======================================================== */}
          {stage === 'no_reveal' && (
            <motion.div
              key="stage-no-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45 }}
              className="w-full flex flex-col items-center justify-center text-center"
            >
              {/* Quick Proof Metrics with Glow */}
              <div className="w-full max-w-md mb-6 sm:mb-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-white/10 my-2">
                  <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl bg-amber-400/[0.06] border border-amber-400/20">
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-amber-400 tabular-nums">
                      11.3M+
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                      Hot Wheels Clock
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-white tabular-nums">
                      3.3M+
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                      Chaiwala For A Day
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-white tabular-nums">
                      2.2M+
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                      Selling Rain Water
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-3xl text-white mb-1.5 tracking-tight">
                  STILL JUST EXPLORING?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Fair enough. 😌
                </p>
              </div>

              {/* Decision Controls with >= 48px Touch Targets */}
              <div className="w-full max-w-sm flex flex-col gap-2.5 sm:gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onComplete('explore_focus')}
                  className="w-full min-h-[48px] px-6 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <TrendingUp className="w-4 h-4 text-black" />
                  <span>SHOW ME WHAT YOU DO</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onComplete('collab_focus')}
                  className="w-full min-h-[48px] px-5 rounded-xl glass-button text-zinc-200 hover:text-white active:bg-white/[0.18] active:scale-95 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/10"
                >
                  <span>OKAY, I CHANGED MY MIND</span>
                  <Flame className="w-4 h-4 text-amber-400" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Subtle Footer Anchor */}
      <footer className="w-full flex items-center justify-between max-w-4xl mx-auto pb-2 text-[11px] text-zinc-500 z-10">
        <span>© BhavyaXtreme</span>
        <span className="text-zinc-500">Ahmedabad · Surat, India</span>
      </footer>
    </div>
  );
};
