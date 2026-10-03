import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'WORKBHAVYAXTREME@GMAIL.COM';
  const instagramUrl = 'https://www.instagram.com/bhavyaxtreme?stkn=eDdtaWZhbjNmeWEx&utm_source=qr';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${email}?subject=Brand%20Collaboration%20Inquiry%20-%20BhavyaXtreme&body=Hey%20Bhavya%2C%0A%0AWe%20would%20love%20to%20discuss%20a%20campaign%20collaboration%20with%20you.%0A%0ABrand%3A%0ABudget%2FTimeline%3A%0AIdea%3A%0A%0ALooking%20forward%20to%20connecting%21`;

  return (
    <section
      id="contact"
      aria-label="Direct contact call to action"
      className="py-24 sm:py-36 px-4 sm:px-6 relative overflow-hidden text-center bg-gradient-to-b from-[#070708] via-[#0d0d10] to-[#070708]"
    >
      {/* Background Soft Breathing Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[650px] h-96 sm:h-[650px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 mb-4 block font-bold">
          LET&apos;S TALK
        </span>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-[-0.04em] leading-tight mb-4">
          HAVE A BRAND IDEA?
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-lg mx-auto mb-10 font-normal leading-relaxed">
          Let&apos;s turn it into something people actually want to watch.
        </p>

        {/* Primary Action Button */}
        <div className="w-full max-w-md flex flex-col gap-3.5 mb-8">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={mailtoUrl}
            className="w-full min-h-[56px] sm:min-h-[60px] px-8 rounded-2xl bg-white active:bg-zinc-200 active:scale-95 text-black font-extrabold text-base sm:text-lg inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all cursor-pointer shadow-xl shadow-white/10"
          >
            <span>WORK WITH ME</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[48px] px-4 rounded-xl glass-button text-xs font-mono text-zinc-200 hover:text-white active:bg-white/[0.2] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer border border-white/10 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{copied ? 'Email Copied!' : 'Copy Business Email'}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-zinc-400" />
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-4 rounded-xl glass-button text-xs font-semibold text-zinc-200 hover:text-white active:bg-white/[0.2] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer border border-white/10 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Instagram DM</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </motion.a>
          </div>
        </div>

        {/* Direct Email Address Display */}
        <div className="pt-2">
          <span className="text-xs text-zinc-500 block mb-1">Direct inquiries:</span>
          <a
            href={`mailto:${email}`}
            className="min-h-[44px] inline-flex items-center justify-center text-xs sm:text-sm font-mono tracking-wider text-zinc-300 hover:text-amber-400 active:text-amber-300 active:scale-95 transition-all"
          >
            {email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};
