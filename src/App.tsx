/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpeningExperience, OpeningPath } from './components/OpeningExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { FeaturedReels } from './components/FeaturedReels';
import { ContentIdentity } from './components/ContentIdentity';
import { BrandCollab } from './components/BrandCollab';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const SESSION_KEY = 'bhavyaxtreme_opening_completed';

export default function App() {
  const [showOpening, setShowOpening] = useState<boolean>(true);
  const [hasCheckedSession, setHasCheckedSession] = useState<boolean>(false);

  useEffect(() => {
    try {
      const alreadyCompleted = sessionStorage.getItem(SESSION_KEY);
      if (alreadyCompleted === 'true') {
        setShowOpening(false);
      }
    } catch {
      // Ignore sessionStorage errors in restricted environments
    } finally {
      setHasCheckedSession(true);
    }
  }, []);

  const handleOpeningComplete = (path: OpeningPath) => {
    setShowOpening(false);
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
      // Ignore
    }

    // Smoothly route viewport based on decision
    setTimeout(() => {
      if (path === 'collab_focus') {
        const collabEl = document.getElementById('collab');
        if (collabEl) {
          collabEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else if (path === 'explore_focus') {
        const contentEl = document.getElementById('content');
        if (contentEl) {
          contentEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      // Default YES path: starts at proof or hero smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // Ignore
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    setShowOpening(true);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!hasCheckedSession) {
    return <div className="min-h-screen bg-[#070708]" />;
  }

  return (
    <div className="min-h-screen bg-[#070708] text-[#f4f4f5] flex flex-col relative selection:bg-amber-400 selection:text-black">
      {/* 1. Full-Screen Minimal Premium Opening Screen */}
      {showOpening && (
        <OpeningExperience onComplete={handleOpeningComplete} />
      )}

      {/* 2. Main Creator Experience */}
      {!showOpening && (
        <div className="flex flex-col min-h-screen animate-in fade-in duration-700">
          {/* Subtle Floating Glass Navigation */}
          <Navbar
            onNavigate={scrollToSection}
            onReplayIntro={handleReplayIntro}
          />

          <main className="flex-1">
            {/* Creator Hero */}
            <Hero
              onWorkWithMe={() => scrollToSection('collab')}
              onWatchContent={() => scrollToSection('content')}
            />

            {/* Compact Proof Section */}
            <SocialProof />

            {/* Featured Reels Section (11.3M+ Hero) */}
            <FeaturedReels />

            {/* What I Create / Content Pillars */}
            <ContentIdentity />

            {/* Brand Collaboration Section */}
            <BrandCollab />

            {/* Why Work With Me */}
            <WhyWorkWithMe />

            {/* Final Cinematic CTA */}
            <FinalCTA />
          </main>

          {/* Minimal Footer */}
          <Footer onReplayIntro={handleReplayIntro} />
        </div>
      )}
    </div>
  );
}
