import React from 'react';

/**
 * LoansMarketplaceBackground
 * A tailored, high-end financial-themed background matching the reference design:
 * - Soft white and light-blue gradient (#F5F9FF -> #FFFFFF -> #EFF6FF)
 * - Subtle blue radial gradients on the left
 * - Very light mint-green radial gradient behind the right-side illustration
 * - Thin circular decorative outlines and fine curved lines
 * - Small dotted matrix patterns in corners
 * - Layered blue and mint-green curved shapes along the bottom
 */
const LoansMarketplaceBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FD] via-[#FFFFFF] to-[#EFF6FD]" />

      {/* 2. Left Subtle Blue Radial Gradient */}
      <div 
        className="absolute top-10 left-[8%] w-[680px] h-[550px] rounded-full opacity-65 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.6) 0%, rgba(239, 246, 255, 0.25) 60%, transparent 100%)'
        }}
      />

      {/* 3. Right Side Mint-Green Radial Gradient behind the illustration */}
      <div 
        className="absolute top-16 right-[5%] w-[600px] h-[600px] rounded-full opacity-55 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(209, 250, 229, 0.55) 0%, rgba(224, 242, 254, 0.35) 55%, transparent 100%)'
        }}
      />

      {/* 4. Fine Thin Circular Geometric Outlines (Left & Center) */}
      <div className="absolute -top-16 left-1/3 w-[520px] h-[520px] opacity-25 hidden md:block">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="250" cy="250" r="230" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="250" cy="250" r="170" stroke="#BFDBFE" strokeWidth="1" />
          <circle cx="250" cy="250" r="110" stroke="#60A5FA" strokeWidth="0.8" strokeDasharray="3 5" />
        </svg>
      </div>

      {/* 5. Top-Left Dotted Pattern Matrix */}
      <div className="absolute top-8 left-8 sm:left-14 opacity-40">
        <svg width="150" height="90" viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="loans-hero-dots-tl" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.8" fill="#60A5FA" />
            </pattern>
          </defs>
          <rect width="150" height="90" fill="url(#loans-hero-dots-tl)" />
        </svg>
      </div>

      {/* 6. Top-Right Dotted Pattern Matrix */}
      <div className="absolute top-6 right-8 sm:right-16 opacity-35">
        <svg width="160" height="90" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="loans-hero-dots-tr" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.8" fill="#159B69" />
            </pattern>
          </defs>
          <rect width="160" height="90" fill="url(#loans-hero-dots-tr)" />
        </svg>
      </div>

      {/* 7. Fine Curved Decorative Accent Lines */}
      <div className="absolute top-28 left-4 w-72 h-80 opacity-30 hidden lg:block">
        <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-200">
          <path 
            d="M 20 270 C 100 240, 180 180, 280 80" 
            stroke="#2563EB" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            opacity="0.45" 
          />
          <path 
            d="M 40 290 C 120 260, 200 200, 290 110" 
            stroke="#159B69" 
            strokeWidth="1.2" 
            strokeDasharray="4 6" 
            strokeLinecap="round" 
            opacity="0.4" 
          />
        </svg>
      </div>

      {/* 8. Layered Blue and Mint-Green Curved Shapes Along the Bottom */}
      <div className="absolute -bottom-1 left-0 right-0 h-36 w-full opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Light-blue back wave */}
          <path
            d="M0 60 C 380 120, 760 10, 1140 80 C 1300 110, 1390 50, 1440 40 L 1440 140 L 0 140 Z"
            fill="rgba(219, 234, 254, 0.45)"
          />
          {/* Mint-green subtle rising accent from right */}
          <path
            d="M500 140 C 800 130, 1100 60, 1440 80 L 1440 140 Z"
            fill="rgba(209, 250, 229, 0.4)"
          />
          {/* Foreground soft white/blue transition */}
          <path
            d="M0 90 C 400 50, 800 110, 1440 65 L 1440 140 L 0 140 Z"
            fill="rgba(248, 250, 252, 0.85)"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoansMarketplaceBackground;
