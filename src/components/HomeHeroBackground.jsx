import React from 'react';

const HomeHeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Base Light Blue to White Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2F8FE] via-[#F8FBFE] to-white" />

      {/* Soft Blue Radial Glow (Top-Left) */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(23, 74, 139, 0.08) 0%, rgba(23, 74, 139, 0.02) 60%, transparent 80%)'
        }}
      />

      {/* Subtle Mint-Green / Cyan Radial Glow behind Enquiry Form (Right) */}
      <div 
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(21, 155, 105, 0.07) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 75%)'
        }}
      />

      {/* Modern Financial Dot Matrix (Top-Right) */}
      <svg className="absolute top-6 right-12 w-48 h-48 opacity-[0.25]" viewBox="0 0 160 160" fill="none">
        <defs>
          <pattern id="dot-pattern-home-hero" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.5" fill="#174A8B" />
          </pattern>
        </defs>
        <rect width="160" height="160" fill="url(#dot-pattern-home-hero)" />
      </svg>

      {/* Subtle Dot Matrix (Bottom-Left) */}
      <svg className="absolute bottom-6 left-8 w-36 h-36 opacity-[0.2]" viewBox="0 0 120 120" fill="none">
        <rect width="120" height="120" fill="url(#dot-pattern-home-hero)" />
      </svg>

      {/* Layered Flowing Blue and Mint-Green Bottom Waves - Crisp & Flush with bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[45px] max-h-[75px]"
          preserveAspectRatio="none"
        >
          {/* Back Soft Blue Wave */}
          <path 
            d="M0,35 C320,80 540,5 900,55 C1180,90 1340,30 1440,45 L1440,90 L0,90 Z" 
            fill="rgba(191, 219, 254, 0.7)" 
          />
          {/* Middle Mint-Green Wave */}
          <path 
            d="M0,55 C260,20 600,75 980,30 C1240,0 1360,50 1440,55 L1440,90 L0,90 Z" 
            fill="rgba(167, 243, 208, 0.75)" 
          />
          {/* Front Light Sky/Blue Curve */}
          <path 
            d="M0,70 C380,40 720,85 1100,55 C1290,40 1380,65 1440,65 L1440,90 L0,90 Z" 
            fill="rgba(239, 246, 255, 0.9)" 
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeHeroBackground;
