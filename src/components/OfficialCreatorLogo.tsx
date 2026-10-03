import React, { useState } from 'react';

interface OfficialCreatorLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showLabel?: boolean;
}

export const OfficialCreatorLogo: React.FC<OfficialCreatorLogoProps> = ({
  className = '',
  size = 'md',
  showLabel = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Pixel and dimension scaling
  const sizeMap = {
    sm: { box: 'w-9 h-9', px: 36, text: 'text-sm' },
    md: { box: 'w-14 h-14', px: 56, text: 'text-base' },
    lg: { box: 'w-24 h-24', px: 96, text: 'text-lg' },
    xl: { box: 'w-36 h-36', px: 144, text: 'text-xl' },
    hero: { box: 'w-48 h-48 sm:w-60 sm:h-60', px: 240, text: 'text-2xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Outer circular badge container with dual rim glow */}
      <div className="relative group shrink-0">
        {/* Subtle dual-color ambient backlight (Amber on left, Cyan on right - matching Bhavya's logo) */}
        <div
          className="absolute -inset-1 rounded-full opacity-60 blur-md group-hover:opacity-90 transition-opacity pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(250, 204, 21, 0.4) 0%, rgba(14, 165, 233, 0.3) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Circular Avatar Shell with white border */}
        <div
          className={`relative ${currentSize.box} rounded-full overflow-hidden border-[2.5px] sm:border-[3px] border-white shadow-2xl bg-[#0c0c0e] flex items-center justify-center`}
        >
          {/* The official photographic asset downloaded in /public */}
          {!imageError ? (
            <img
              src="/bhavya-avatar.png"
              alt="BhavyaXtreme Official Creator Logo - Challenge Explore Experiment"
              className="w-full h-full object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Pristine High-Fidelity SVG Recreation of BhavyaXtreme's Official Logo */
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="BhavyaXtreme Logo"
            >
              <defs>
                {/* Background Dark Radial Gradient */}
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a1a22" />
                  <stop offset="85%" stopColor="#08080a" />
                  <stop offset="100%" stopColor="#040405" />
                </radialGradient>

                {/* Left Yellow Energy Glow */}
                <radialGradient id="yellowAura" cx="25%" cy="35%" r="45%">
                  <stop offset="0%" stopColor="#facc15" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#eab308" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                </radialGradient>

                {/* Right Cyan Rim Lighting */}
                <radialGradient id="cyanAura" cx="78%" cy="55%" r="40%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                  <stop offset="60%" stopColor="#0284c7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>

                {/* Clip Path for Inner Circular Content */}
                <clipPath id="circleClip">
                  <circle cx="200" cy="200" r="195" />
                </clipPath>
              </defs>

              {/* Base Circle */}
              <circle cx="200" cy="200" r="198" fill="url(#bgGrad)" />

              <g clipPath="url(#circleClip)">
                {/* Left Yellow Energy Splash */}
                <circle cx="90" cy="150" r="160" fill="url(#yellowAura)" />
                {/* Right Electric Blue Energy Splash */}
                <circle cx="310" cy="230" r="140" fill="url(#cyanAura)" />

                {/* ========================================================
                    LEFT YELLOW PAINT BRUSH SLASH: "CHALLENGE"
                    ======================================================== */}
                <g transform="rotate(-32 100 160)">
                  {/* Textured Yellow Paint Stroke */}
                  <path
                    d="M-40 140 C20 120, 110 115, 220 135 L215 195 C140 180, 40 185, -45 200 Z"
                    fill="#facc15"
                  />
                  <path
                    d="M-30 130 C40 122, 130 128, 205 142 L200 165 C130 152, 30 148, -35 155 Z"
                    fill="#fbbf24"
                    opacity="0.8"
                  />
                  {/* Black Brush Text: CHALLENGE */}
                  <text
                    x="2"
                    y="172"
                    fill="#0a0a0c"
                    fontFamily="'Syne', 'Arial Black', sans-serif"
                    fontWeight="900"
                    fontSize="31"
                    fontStyle="italic"
                    letterSpacing="1.5"
                  >
                    CHALLENGE
                  </text>
                </g>

                {/* Map Pin with dashed navigation trail on the left */}
                <g transform="translate(85, 210)">
                  {/* Dashed trail */}
                  <path
                    d="M-30 40 Q -10 20, 5 10"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.8"
                  />
                  {/* White Map Pin */}
                  <path
                    d="M6 -5 C0 -5, -5 0, -5 6 C-5 13, 6 22, 6 22 C6 22, 17 13, 17 6 C17 0, 12 -5, 6 -5 Z"
                    fill="#ffffff"
                  />
                  <circle cx="6" cy="5" r="3.5" fill="#09090b" />
                </g>

                {/* ========================================================
                    CENTER: BHAVYA'S SILHOUETTE & PORTRAIT
                    With black glasses, beard, dark hoodie & rim lighting
                    ======================================================== */}
                <g id="portraitGroup">
                  {/* Dark Hoodie Torso */}
                  <path
                    d="M80 395 C90 320, 130 260, 200 255 C270 260, 310 320, 320 395 Z"
                    fill="#151822"
                  />
                  {/* Left Yellow Rim Light on Hoodie */}
                  <path
                    d="M80 395 C88 325, 125 265, 185 258 C170 268, 125 325, 115 395 Z"
                    fill="#facc15"
                    opacity="0.65"
                  />
                  {/* Right Blue Rim Light on Hoodie */}
                  <path
                    d="M320 395 C312 325, 275 265, 215 258 C230 268, 275 325, 285 395 Z"
                    fill="#38bdf8"
                    opacity="0.7"
                  />

                  {/* Hoodie Collar V & Strings */}
                  <path d="M165 260 L200 310 L235 260 Z" fill="#0d0f14" />
                  <path d="M185 285 L180 345" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                  <path d="M215 285 L220 345" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

                  {/* Neck */}
                  <path d="M175 220 L175 270 L225 270 L225 220 Z" fill="#b47458" />

                  {/* Head / Face */}
                  <ellipse cx="200" cy="190" rx="60" ry="72" fill="#c68466" />
                  {/* Left Face Yellow Rim */}
                  <path
                    d="M142 165 C140 210, 160 250, 195 260 C170 255, 145 220, 142 165 Z"
                    fill="#facc15"
                    opacity="0.5"
                  />
                  {/* Right Face Blue Rim */}
                  <path
                    d="M258 165 C260 210, 240 250, 205 260 C230 255, 255 220, 258 165 Z"
                    fill="#38bdf8"
                    opacity="0.55"
                  />

                  {/* Dark Hair (volumetric fade top) */}
                  <path
                    d="M135 165 C135 110, 165 85, 200 85 C235 85, 265 110, 265 165 C255 140, 240 125, 200 125 C160 125, 145 140, 135 165 Z"
                    fill="#0f0f12"
                  />
                  {/* Hair texture top */}
                  <path
                    d="M145 130 C160 100, 185 90, 205 90 C235 90, 255 110, 260 135 C245 118, 225 108, 195 108 C170 108, 155 118, 145 130 Z"
                    fill="#1a1a20"
                  />

                  {/* Signature Beard & Mustache */}
                  <path
                    d="M152 205 C150 248, 175 262, 200 262 C225 262, 250 248, 248 205 C238 215, 222 218, 200 218 C178 218, 162 215, 152 205 Z"
                    fill="#121216"
                  />
                  {/* Mustache */}
                  <path
                    d="M174 212 C184 207, 195 210, 200 214 C205 210, 216 207, 226 212 C218 219, 205 221, 200 220 C195 221, 182 219, 174 212 Z"
                    fill="#0d0d10"
                  />

                  {/* Smiling Mouth */}
                  <path d="M185 228 Q 200 236, 215 228" stroke="#78351f" strokeWidth="2.5" fill="none" />

                  {/* Nose */}
                  <path d="M198 178 L195 198 L205 198" stroke="#8c4e38" strokeWidth="2" fill="none" strokeLinecap="round" />

                  {/* ========================================================
                      SIGNATURE BLACK SQUARE GLASSES
                      ======================================================== */}
                  <g id="glasses">
                    {/* Bridge */}
                    <path d="M191 168 L209 168" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
                    {/* Left Frame */}
                    <rect
                      x="152"
                      y="152"
                      width="38"
                      height="30"
                      rx="7"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                    />
                    {/* Left Lens Glare */}
                    <path
                      d="M156 156 L175 156"
                      stroke="#ffffff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                    {/* Right Frame */}
                    <rect
                      x="210"
                      y="152"
                      width="38"
                      height="30"
                      rx="7"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                    />
                    {/* Right Lens Glare */}
                    <path
                      d="M214 156 L233 156"
                      stroke="#ffffff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                    {/* Frame Sides */}
                    <line x1="152" y1="165" x2="138" y2="162" stroke="#000000" strokeWidth="4" />
                    <line x1="248" y1="165" x2="262" y2="162" stroke="#000000" strokeWidth="4" />
                  </g>
                </g>

                {/* ========================================================
                    RIGHT SIDE TEXT: "EXPLORE" & "EXPERIMENT"
                    ======================================================== */}
                {/* White Cross '×' */}
                <g transform="translate(325, 95)">
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="8" y1="-8" x2="-8" y2="8" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                </g>

                {/* White Brush Caps: EXPLORE */}
                <g transform="rotate(-12 335 155)">
                  <text
                    x="250"
                    y="160"
                    fill="#ffffff"
                    fontFamily="'Syne', 'Impact', sans-serif"
                    fontWeight="900"
                    fontSize="32"
                    fontStyle="italic"
                    letterSpacing="1.5"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                  >
                    EXPLORE
                  </text>
                </g>

                {/* Yellow Brush Caps: EXPERIMENT */}
                <g transform="rotate(-10 330 205)">
                  {/* Yellow underline / brush strike */}
                  <path
                    d="M240 220 C270 216, 330 215, 375 222 L370 230 C325 225, 265 224, 238 226 Z"
                    fill="#facc15"
                    opacity="0.8"
                  />
                  <text
                    x="235"
                    y="215"
                    fill="#facc15"
                    fontFamily="'Syne', 'Impact', sans-serif"
                    fontWeight="900"
                    fontSize="30"
                    fontStyle="italic"
                    letterSpacing="1"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    EXPERIMENT
                  </text>
                </g>

                {/* Yellow Lightning Bolt */}
                <g transform="translate(345, 255)">
                  <path
                    d="M12 -18 L-2 4 L8 4 L-6 26 L18 0 L6 0 Z"
                    fill="#facc15"
                    stroke="#000000"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Small Ember Particles */}
                <circle cx="370" cy="290" r="1.8" fill="#facc15" opacity="0.8" />
                <circle cx="340" cy="315" r="1.2" fill="#f97316" opacity="0.7" />
                <circle cx="380" cy="235" r="1.5" fill="#facc15" opacity="0.9" />
              </g>

              {/* Crisp Outer Border */}
              <circle
                cx="200"
                cy="200"
                r="196"
                stroke="#ffffff"
                strokeWidth="7"
                fill="none"
              />
            </svg>
          )}
        </div>
      </div>

      {showLabel && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold text-white tracking-wider uppercase ${currentSize.text}`}>
            BHAVYA<span className="text-amber-400">XTREME</span>
          </span>
          <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono">
            CHALLENGE · EXPLORE · EXPERIMENT
          </span>
        </div>
      )}
    </div>
  );
};
