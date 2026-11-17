import React from 'react';

/**
 * BlogHeroBackground
 * A rich, alive, premium fintech editorial background featuring:
 * 1. Radiant ambient lighting: Royal blue on the right (focal glow behind laptop) and fresh mint-green on the left.
 * 2. Animated floating financial chart paths, coordinate markers, and glowing accent rings.
 * 3. Multi-layer flowing translucent blue & mint-green bottom waves with continuous gentle motion.
 * 4. Micro-dots and architectural grid accents that give visual texture and life to the hero section.
 */
const BlogHeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none -z-0">
      
      {/* 1. Base Gradient Canvas - Crisp White into subtle Blue & Mint atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FE] to-[#F0FAF5]" />

      {/* 2. Vibrant Atmospheric Radial Glows */}
      {/* Right Glow: Royal Blue behind the laptop illustration */}
      <div 
        className="absolute top-1/2 right-4 lg:right-20 -translate-y-1/2 w-[620px] h-[620px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 60% 50%, rgba(40, 100, 240, 0.15) 0%, rgba(18, 63, 122, 0.08) 40%, rgba(14, 165, 233, 0.04) 65%, transparent 80%)',
          animation: 'glowPulseRight 10s ease-in-out infinite alternate'
        }}
      />

      {/* Left Glow: Soft Mint-Green & Cyan behind headline and badge */}
      <div 
        className="absolute top-10 -left-20 w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.12) 0%, rgba(13, 148, 136, 0.06) 45%, transparent 75%)',
          animation: 'glowPulseLeft 12s ease-in-out infinite alternate'
        }}
      />

      {/* 3. Dynamic Abstract FinTech Graphics & Vector Accents */}
      {/* Upper-Left Financial Chart Curve & Coordinate Pulse */}
      <svg 
        className="absolute top-6 left-12 w-[340px] h-[220px] opacity-40 hidden sm:block" 
        viewBox="0 0 340 220" 
        fill="none"
      >
        {/* Curved financial trendline */}
        <path 
          d="M10 180 C 80 160, 140 90, 200 110 C 260 130, 290 60, 330 30" 
          stroke="url(#trendGrad)" 
          strokeWidth="2" 
          strokeDasharray="4 4" 
        />
        {/* Glow node along the curve */}
        <circle cx="200" cy="110" r="4" fill="#2864F0" />
        <circle cx="200" cy="110" r="10" stroke="#2864F0" strokeWidth="1" opacity="0.4" className="animate-ping" />
        <circle cx="330" cy="30" r="4" fill="#10B981" />
        <circle cx="330" cy="30" r="12" stroke="#10B981" strokeWidth="1" opacity="0.4" />
        <defs>
          <linearGradient id="trendGrad" x1="0" y1="180" x2="330" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="0.6" stopColor="#2864F0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dot Grid Accents */}
      {/* Top-Right Dotted Pattern */}
      <svg className="absolute top-8 right-8 w-36 h-36 opacity-30 hidden md:block" viewBox="0 0 140 140" fill="none">
        <defs>
          <pattern id="blog-hero-dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#2864F0" />
          </pattern>
        </defs>
        <rect width="140" height="140" fill="url(#blog-hero-dots-tr)" />
      </svg>

      {/* Bottom-Left Dotted Pattern */}
      <svg className="absolute bottom-8 left-8 w-28 h-28 opacity-25 hidden md:block" viewBox="0 0 120 120" fill="none">
        <defs>
          <pattern id="blog-hero-dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#10B981" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#blog-hero-dots-bl)" />
      </svg>

      {/* 4. Elegant Multi-Layered Flowing Blue & Mint Waves */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-0">
        
        {/* Back Wave (Mint to Blue Translucent Flow) */}
        <svg 
          viewBox="0 0 1440 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[65px] sm:h-[95px] lg:h-[120px] opacity-60"
          preserveAspectRatio="none"
          style={{ animation: 'waveFlow1 16s ease-in-out infinite alternate' }}
        >
          <path 
            d="M0 70C240 20 480 120 720 75C960 30 1200 100 1440 60V140H0V70Z" 
            fill="url(#wave-back-grad)" 
          />
          <defs>
            <linearGradient id="wave-back-grad" x1="0" y1="0" x2="1440" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A7F3D0" stopOpacity="0.45" />
              <stop offset="0.4" stopColor="#BAE6FD" stopOpacity="0.5" />
              <stop offset="1" stopColor="#BFDBFE" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Middle Wave (Vibrant Soft Cyan/Sky) */}
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[75px] lg:h-[95px] opacity-75"
          preserveAspectRatio="none"
          style={{ animation: 'waveFlow2 12s ease-in-out infinite alternate' }}
        >
          <path 
            d="M0 60C320 100 580 30 860 65C1140 100 1320 50 1440 75V120H0V60Z" 
            fill="url(#wave-mid-grad)" 
          />
          <defs>
            <linearGradient id="wave-mid-grad" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" stopOpacity="0.6" />
              <stop offset="0.6" stopColor="#C7D2FE" stopOpacity="0.4" />
              <stop offset="1" stopColor="#A7F3D0" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Foreground Crest Wave (Blends smoothly into content area) */}
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-[35px] sm:h-[55px] lg:h-[70px] opacity-90"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 45C360 15 680 70 1040 35C1240 15 1380 50 1440 40V90H0V45Z" 
            fill="url(#wave-front-grad)" 
          />
          <defs>
            <linearGradient id="wave-front-grad" x1="0" y1="0" x2="1440" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DBEAFE" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#EFF6FF" stopOpacity="0.85" />
              <stop offset="1" stopColor="#F5F8FC" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* Fluid CSS Animations */}
      <style>{`
        @keyframes glowPulseRight {
          0% { transform: translateY(-50%) scale(0.96); opacity: 0.85; }
          100% { transform: translateY(-48%) scale(1.06); opacity: 1; }
        }
        @keyframes glowPulseLeft {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes waveFlow1 {
          0% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-5px) scaleY(1.06); }
          100% { transform: translateY(3px) scaleY(0.95); }
        }
        @keyframes waveFlow2 {
          0% { transform: translateY(0px) scaleX(1); }
          50% { transform: translateY(-4px) scaleX(1.02); }
          100% { transform: translateY(3px) scaleX(0.98); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

    </div>
  );
};

export default BlogHeroBackground;
