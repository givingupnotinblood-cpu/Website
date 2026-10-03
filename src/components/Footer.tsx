import React from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { ExternalLink, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const email = 'WORKBHAVYAXTREME@GMAIL.COM';

  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bhavyaxtreme?stkn=eDdtaWZhbjNmeWEx&utm_source=qr',
      icon: Instagram,
      primary: true,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@bhavyaxtreme?si=fSxUWFyVpyQSld0d',
      icon: Youtube,
      primary: false,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/r/19dg4PzDM5/',
      icon: Facebook,
      primary: false,
    },
  ];

  return (
    <footer
      aria-label="Footer"
      className="py-14 sm:py-20 px-4 sm:px-6 border-t border-white/[0.08] bg-[#060608] text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Mark */}
        <div className="mb-4">
          <BrandLogo size="md" showText={true} />
        </div>

        {/* Brand Philosophy */}
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-zinc-400 mb-6">
          CHALLENGE <span className="text-amber-400">•</span> EXPLORE <span className="text-amber-400">•</span> EXPERIMENT
        </p>

        {/* Social Links with Motion */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[44px] inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all px-4 py-2 rounded-xl border border-white/[0.08] active:scale-95 ${
                  social.primary
                    ? 'text-white bg-white/[0.05] hover:text-amber-400 active:bg-white/[0.18] hover:border-amber-400/40'
                    : 'text-zinc-400 hover:text-white active:bg-white/[0.12] hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{social.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </motion.a>
            );
          })}
        </div>

        {/* Business Email with >= 44px touch target */}
        <div className="mb-6">
          <a
            href={`mailto:${email}`}
            className="min-h-[44px] inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-amber-400 active:text-amber-300 active:scale-95 transition-all px-3 rounded-lg"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{email}</span>
          </a>
        </div>

        {/* Replay Intro Affordance with >= 44px touch target */}
        {onReplayIntro && (
          <div className="mb-6">
            <button
              type="button"
              onClick={onReplayIntro}
              className="min-h-[44px] px-3 inline-flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-300 active:text-white active:scale-95 transition-all underline underline-offset-4 cursor-pointer"
            >
              Replay interactive opening experience
            </button>
          </div>
        )}

        {/* Copyright */}
        <div className="text-xs text-zinc-500 font-normal">
          © {new Date().getFullYear()} BhavyaXtreme. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
