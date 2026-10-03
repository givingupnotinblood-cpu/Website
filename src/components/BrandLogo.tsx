import React from 'react';
import { OfficialCreatorLogo } from './OfficialCreatorLogo';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const textSizes = {
    sm: 'text-sm tracking-tight',
    md: 'text-base sm:text-lg tracking-tight',
    lg: 'text-xl sm:text-2xl tracking-tight',
    xl: 'text-2xl sm:text-3xl tracking-tight',
    hero: 'text-3xl sm:text-4xl tracking-tight',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <OfficialCreatorLogo size={size} showLabel={false} />

      {showText && (
        <span className={`font-display font-extrabold text-white uppercase select-none ${textSizes[size]}`}>
          BHAVYA<span className="text-amber-400">XTREME</span>
        </span>
      )}
    </div>
  );
};

