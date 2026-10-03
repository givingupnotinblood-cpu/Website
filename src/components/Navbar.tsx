import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Instagram, RotateCcw, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-2.5 sm:top-4 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto min-h-[52px] sm:min-h-[56px] px-3 sm:px-5 rounded-2xl glass-nav flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/80 transition-all border border-white/[0.1] relative">
        {/* Zone 1: Brand lockup with >= 44x44px touch area */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="min-h-[44px] min-w-[44px] flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl py-1 text-left shrink-0 active:scale-95 transition-transform"
          aria-label="BhavyaXtreme Home"
        >
          <BrandLogo size="sm" showText={true} />
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-tight text-zinc-300">
          <button
            type="button"
            onClick={() => handleNavClick('content')}
            className="min-h-[44px] px-3 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:text-amber-400 flex items-center active:scale-95"
          >
            CONTENT
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('collab')}
            className="min-h-[44px] px-3 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:text-amber-400 flex items-center active:scale-95"
          >
            COLLAB
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="min-h-[44px] px-3 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:text-amber-400 flex items-center active:scale-95"
          >
            CONTACT
          </button>
        </div>

        {/* Zone 3: Primary Action & Touch-Optimized Affordances (All >= 44x44px) */}
        <div className="flex items-center gap-2 shrink-0">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              title="Replay intro screen"
              aria-label="Replay intro screen"
              className="min-h-[44px] min-w-[44px] rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] active:bg-white/[0.12] active:scale-95 transition-all cursor-pointer hidden md:flex items-center justify-center"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <a
            href="https://www.instagram.com/bhavyaxtreme?stkn=eDdtaWZhbjNmeWEx&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow BhavyaXtreme on Instagram"
            className="min-h-[44px] min-w-[44px] px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:bg-white/[0.18] active:scale-95 text-zinc-200 hover:text-white transition-all text-xs font-semibold inline-flex items-center justify-center gap-1.5 cursor-pointer border border-white/[0.08]"
          >
            <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          <button
            type="button"
            onClick={() => handleNavClick('collab')}
            className="min-h-[44px] px-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 active:scale-95 text-black text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Collab</span>
            <Send className="w-3.5 h-3.5 text-black hidden sm:inline" />
          </button>

          {/* Mobile Menu Trigger (44x44px minimum) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden min-h-[44px] min-w-[44px] rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.08] active:bg-white/[0.18] active:scale-95 transition-all cursor-pointer border border-white/[0.08] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown with >= 48px Touch Targets and Instant Feedback */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-4xl mx-auto rounded-2xl glass-nav p-3 flex flex-col gap-2 border border-white/[0.1] shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => handleNavClick('content')}
            className="min-h-[48px] px-4 rounded-xl bg-white/[0.04] active:bg-white/[0.15] active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-between text-left cursor-pointer transition-all"
          >
            <span>FEATURED CONTENT</span>
            <span className="text-amber-400 text-xs font-mono font-bold">11.3M+</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('collab')}
            className="min-h-[48px] px-4 rounded-xl bg-white/[0.04] active:bg-white/[0.15] active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-between text-left cursor-pointer transition-all"
          >
            <span>BRAND COLLABORATIONS</span>
            <span className="text-zinc-400 text-xs font-mono">Work With Me</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="min-h-[48px] px-4 rounded-xl bg-white/[0.04] active:bg-white/[0.15] active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-between text-left cursor-pointer transition-all"
          >
            <span>DIRECT CONTACT</span>
            <span className="text-zinc-400 text-xs font-mono">Email / DM</span>
          </button>
          {onReplayIntro && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="min-h-[44px] px-4 rounded-xl text-zinc-400 active:text-white active:bg-white/[0.08] active:scale-[0.98] text-xs font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Replay Intro Experience</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
