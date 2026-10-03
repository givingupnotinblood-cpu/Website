import React from 'react';
import { motion } from 'motion/react';
import { Eye, ExternalLink, Play, Sparkles } from 'lucide-react';

interface ReelItem {
  id: string;
  title: string;
  views: string;
  viewsNum: number;
  url: string;
  concept: string;
  badge?: string;
  isHero?: boolean;
  accentColor: string;
  thumbPath: string;
}

const reels: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Selling Hot Wheels Clock',
    views: '11.3M+ views',
    viewsNum: 11300000,
    url: 'https://www.instagram.com/reel/Dc6Ep5XS4fl/?stkn=dnoydnphaHJsNHU0',
    concept: 'Viral street sales experiment crafting and selling a custom Hot Wheels clock to strangers.',
    badge: 'VIRAL HERO · 11.3M VIEWS',
    isHero: true,
    accentColor: '#facc15',
    thumbPath: '/actual_reel_hotwheels.jpg',
  },
  {
    id: 'reel-2',
    title: 'Become a Chaiwala for a Day',
    views: '3.3M+ views',
    viewsNum: 3300000,
    url: 'https://www.instagram.com/reel/Dd6bCuZSFeX/?stkn=eGE4NWd5Z2hrbHg3',
    concept: 'Real-world hustle challenge setting up a street chai stall and serving morning commuters.',
    badge: '3.3M VIEWS',
    isHero: false,
    accentColor: '#f97316',
    thumbPath: '/actual_reel_chaiwala.jpg',
  },
  {
    id: 'reel-3',
    title: 'Selling Rain Water',
    views: '2.2M+ views',
    viewsNum: 2200000,
    url: 'https://www.instagram.com/reel/DcoECZgSXgc/?stkn=dnV2c3IzcDZ1cW93',
    concept: 'Unconventional social experiment testing whether people would purchase bottled monsoon rain.',
    badge: '2.2M VIEWS',
    isHero: false,
    accentColor: '#38bdf8',
    thumbPath: '/actual_reel_rainwater.jpg',
  },
  {
    id: 'reel-4',
    title: 'Kya Tum Ganje Ho Sakte Ho',
    views: '1.6M+ views',
    viewsNum: 1600000,
    url: 'https://www.instagram.com/reel/DdEX5_lSMci/?stkn=MWpyMWhhcXVqcDRkZA==',
    concept: 'High-stakes street dare asking people if they would shave their head on the spot.',
    badge: '1.6M VIEWS',
    isHero: false,
    accentColor: '#e11d48',
    thumbPath: '/actual_reel_ganje.jpg',
  },
  {
    id: 'reel-5',
    title: 'Selling Handmade Lamp',
    views: '643K+ views',
    viewsNum: 643000,
    url: 'https://www.instagram.com/reel/DdwJWdDuPf-/?stkn=MXR6eDdmN2k1Mm5idQ==',
    concept: 'Craftsmanship meets street commerce: building a custom glowing lamp and finding a buyer.',
    badge: '643K+ VIEWS',
    isHero: false,
    accentColor: '#eab308',
    thumbPath: '/actual_reel_lamp.jpg',
  },
];

export const FeaturedReels: React.FC = () => {
  return (
    <section
      id="content"
      aria-label="Featured viral reels"
      className="py-14 sm:py-28 px-3.5 sm:px-6 max-w-5xl mx-auto relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start mb-8 sm:mb-14"
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase mb-2 sm:mb-3">
          <Eye className="w-4 h-4 text-amber-400" />
          <span>Proven Retention · Real Virality</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.04em] leading-tight">
          PEOPLE STOPPED SCROLLING.
        </h2>

        <p className="text-sm sm:text-lg text-zinc-300 mt-2 sm:mt-3 max-w-xl font-normal">
          A few things I&apos;ve made that got people to stop and watch.
        </p>
      </motion.div>

      {/* Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* ========================================================
            HERO CARD: 11.3M+ REEL (HOT WHEELS CLOCK)
            True 9:16 Aspect Ratio Container
            ======================================================== */}
        {reels
          .filter((r) => r.isHero)
          .map((reel) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="md:col-span-2 relative rounded-3xl border border-amber-400/30 bg-gradient-to-br from-[#16140d] via-[#0d0d10] to-[#070708] p-4 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 overflow-hidden shadow-2xl hover:border-amber-400/60 transition-all group"
            >
              {/* Ambient Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none rounded-full"
                aria-hidden="true"
              />

              {/* Exact 9:16 Aspect-Ratio-Corrected Container with object-fit: cover */}
              <div className="w-full md:w-auto flex justify-center shrink-0">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${reel.title} on Instagram`}
                  className="relative w-56 sm:w-64 max-w-[280px] aspect-[9/16] rounded-2xl bg-black overflow-hidden border border-amber-400/40 group-hover:border-amber-400/80 active:scale-95 transition-all shadow-2xl block cursor-pointer"
                >
                  <img
                    src={reel.thumbPath}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Play Button Overlay with Tactile Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-90 transition-transform">
                      <Play className="w-6 h-6 fill-black translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Metrics Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-black/85 px-2.5 py-1 rounded-md border border-amber-400/30 backdrop-blur-sm">
                      11.3M+ VIEWS
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-300 bg-black/70 px-2 py-0.5 rounded">
                      ORIGINAL REEL
                    </span>
                  </div>
                </a>
              </div>

              {/* Details & Action */}
              <div className="w-full flex-1 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    VIRAL SHOWCASE HERO
                  </span>
                  <span className="text-zinc-500 text-xs">·</span>
                  <span className="text-zinc-300 text-xs font-medium">Street Challenge</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                  {reel.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                  {reel.concept}
                </p>

                <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] sm:min-h-[52px] px-6 sm:px-7 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-amber-400/20"
                  >
                    <span>WATCH 11.3M REEL ON INSTAGRAM</span>
                    <ExternalLink className="w-4 h-4 text-black" />
                  </motion.a>

                  <span className="text-[11px] sm:text-xs text-zinc-400 text-center sm:text-left">
                    Authentic 9:16 Instagram Reel
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        {/* ========================================================
            REELS 2 TO 5: GRID CARDS WITH TRUE 9:16 CONTAINERS
            ======================================================== */}
        {reels
          .filter((r) => !r.isHero)
          .map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-4 sm:p-5 flex flex-col justify-between hover:border-white/20 transition-all group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-display font-black text-xl sm:text-2xl text-white tabular-nums tracking-tight">
                    {reel.views}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                    9:16 Reel
                  </span>
                </div>

                {/* Aspect-Ratio-Corrected 9:16 Image Container with object-fit: cover */}
                <div className="w-full flex justify-center mb-4">
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${reel.title} on Instagram`}
                    className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[9/16] rounded-xl bg-black overflow-hidden border border-white/[0.08] group-hover:border-white/25 active:scale-95 transition-all block cursor-pointer shadow-lg"
                  >
                    <img
                      src={reel.thumbPath}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-90 transition-transform">
                        <Play className="w-5 h-5 fill-black translate-x-0.5" />
                      </div>
                    </div>
                  </a>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1.5 tracking-tight group-hover:text-amber-300 transition-colors">
                  {reel.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-normal">
                  {reel.concept}
                </p>
              </div>

              {/* Action Button */}
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] px-4 rounded-xl glass-button text-zinc-200 hover:text-white active:bg-white/[0.2] text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:border-white/30 border border-white/10"
              >
                <span>Watch on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
              </motion.a>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
