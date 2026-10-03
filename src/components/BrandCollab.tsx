import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, ExternalLink, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';

export const BrandCollab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('Product Challenge');
  const [brandName, setBrandName] = useState('');

  const email = 'WORKBHAVYAXTREME@GMAIL.COM';
  const instagramUrl = 'https://www.instagram.com/bhavyaxtreme?stkn=eDdtaWZhbjNmeWEx&utm_source=qr';

  const deliverables = [
    'SPONSORED REELS',
    'PRODUCT CHALLENGES',
    'CREATIVE CAMPAIGNS',
    'PRODUCT INTEGRATIONS',
    'EXPERIENCE-BASED CONTENT',
    'YOUTUBE INTEGRATIONS',
    'CUSTOM CREATOR CONCEPTS',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoLink = () => {
    const brand = brandName.trim() || 'Brand Partner';
    const subject = encodeURIComponent(`Collab Inquiry: ${brand} x BhavyaXtreme [${selectedFormat}]`);
    const body = encodeURIComponent(
      `Hey Bhavya,\n\nWe love your content style and real-world viral experiments.\n\nWe represent ${brand} and are interested in discussing a collaboration around: ${selectedFormat}.\n\nHere is a brief idea of what we have in mind:\n\n- Timeline / Budget:\n- Product / Campaign details:\n\nLooking forward to speaking with you!\n\nBest regards,\n${brand}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="collab"
      aria-label="Brand collaboration opportunities"
      className="py-16 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/[0.09] bg-gradient-to-b from-[#121216] via-[#0d0d10] to-[#070708] p-6 sm:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-3xl">
          {/* Section Subtitle with Real Logo Avatar */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 to-sky-400 shrink-0">
              <img
                src="/bhavya-avatar.png"
                alt="BhavyaXtreme"
                className="w-full h-full object-cover rounded-full bg-[#0a0a0d]"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Partnerships & Integrations</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">BhavyaXtreme · Creator Collaborations</span>
            </div>
          </div>

          {/* Heading with Clean Tight Typography */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.04em] leading-tight mb-4">
            YOUR BRAND.
            <br />
            MY NEXT CHALLENGE.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl font-normal leading-relaxed">
            I partner with brands that fit my audience and creative style.
          </p>

          {/* Deliverables Roster */}
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              WHAT WE CAN CREATE TOGETHER
            </span>
            <div className="flex flex-wrap gap-2.5">
              {deliverables.map((item) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  key={item}
                  onClick={() => setSelectedFormat(item)}
                  className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
                    selectedFormat === item
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20 active:bg-amber-500'
                      : 'bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] active:bg-white/[0.15] border border-white/[0.07]'
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Creative Pitch Statement */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-white mb-1">Have a brief?</p>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Send it over. We will assess fit and craft high-retention execution concepts.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Have only an idea?</p>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Let&apos;s build it together into an engaging real-world challenge.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Collab Mail Formatter */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#09090c] border border-white/[0.09] mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-3 font-bold">
              Fast-Track Your Inquiry
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your Brand Name (optional)"
                className="flex-1 min-h-[48px] px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
              />
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href={getMailtoLink()}
                className="min-h-[48px] px-6 rounded-xl bg-white text-black font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-md shadow-white/10"
              >
                <span>Draft Email Brief</span>
                <Send className="w-4 h-4 text-black" />
              </motion.a>
            </div>
          </div>

          {/* Direct Contact Channels with >= 48px touch targets */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[48px] px-5 rounded-xl glass-button text-xs sm:text-sm font-mono text-zinc-200 hover:text-white active:bg-white/[0.2] active:scale-95 inline-flex items-center justify-between sm:justify-center gap-3 cursor-pointer border border-white/10 transition-all"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-400 bg-white/[0.06] px-2 py-0.5 rounded">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </div>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-5 rounded-xl glass-button text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white active:bg-white/[0.2] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer border border-white/10 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>DM on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
