import React from 'react';

/**
 * KnowledgeCentreBackground
 * Premium abstract financial-themed background for the Knowledge Centre / Insights section:
 * - Soft layered gradient (sky-blue to soft teal/white)
 * - Delicate flowing vector waves across corners
 * - Precision dot matrix grids (top-left and bottom-right)
 * - Fine-line geometric accents and curved contour tracks
 * - Clean central reading zone ensuring blog cards remain crisp and readable
 */
const KnowledgeCentreBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      
      {/* 1. Base Gradient Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F9FD] via-[#F8FBFE] to-white" />

      {/* 2. Soft Ambient Lighting */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#70B7F5]/25 via-[#EAF4FF]/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#70B7F5]/20 via-[#B9F1D5]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-36 left-1/3 w-[700px] h-[500px] bg-gradient-to-t from-[#EAF4FF]/45 via-white/50 to-transparent rounded-full blur-3xl" />

      {/* 3. Top-Left Flowing Organic Wave */}
      <div className="absolute -top-16 -left-16 w-[520px] sm:w-[650px] lg:w-[750px] h-[400px]">
        <svg viewBox="0 0 750 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M-50 -50 C 220 20, 320 200, 180 320 C 60 420, -40 260, -50 -50 Z"
            fill="rgba(219, 234, 254, 0.45)"
          />
          <path
            d="M-80 -80 C 160 50, 240 160, 100 280 C -20 380, -90 220, -80 -80 Z"
            fill="rgba(191, 219, 254, 0.35)"
          />
          {/* Subtle curved arc */}
          <path
            d="M20 120 C 140 80, 280 180, 360 300"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 4. Top-Left Delicate Dot Matrix */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-14 opacity-35">
        <svg width="130" height="80" viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kc-dot-grid-tl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.8" fill="#60A5FA" />
            </pattern>
          </defs>
          <rect width="130" height="80" fill="url(#kc-dot-grid-tl)" />
        </svg>
      </div>

      {/* 5. Top-Right Abstract Curved Financial Accents */}
      <div className="hidden lg:block absolute -top-8 -right-8 w-[480px] h-[400px] opacity-60">
        <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M120 -20 C 260 50, 360 160, 480 120 L 480 -20 Z"
            fill="rgba(219, 234, 254, 0.5)"
          />
          <path
            d="M200 -40 C 320 80, 400 160, 480 180 L 480 -40 Z"
            fill="rgba(185, 241, 213, 0.35)"
          />
          {/* Subtle curved dotted line */}
          <path
            d="M80 80 C 220 160, 360 130, 460 240"
            stroke="#70B7F5"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 6. Bottom-Right Delicate Dot Matrix */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 opacity-35">
        <svg width="130" height="80" viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kc-dot-grid-br" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.8" fill="#38BDF8" />
            </pattern>
          </defs>
          <rect width="130" height="80" fill="url(#kc-dot-grid-br)" />
        </svg>
      </div>

      {/* 7. Bottom Flowing Waves */}
      <div className="absolute -bottom-6 left-0 right-0 h-40 sm:h-48 w-full">
        <svg
          className="w-full h-full preserve-3d text-blue-100/45"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 110 C 320 180, 580 30, 920 120 C 1200 190, 1360 100, 1440 80 L 1440 200 L 0 200 Z"
            fill="rgba(224, 242, 254, 0.55)"
          />
          <path
            d="M0 145 C 360 75, 680 185, 1040 115 C 1260 55, 1380 130, 1440 140 L 1440 200 L 0 200 Z"
            fill="rgba(239, 246, 255, 0.85)"
          />
        </svg>
      </div>

    </div>
  );
};

export default KnowledgeCentreBackground;
