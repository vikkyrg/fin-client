import React from 'react';

/**
 * GeometricBackground
 * Premium financial-themed geometric background with:
 * - Layered diagonal panels & gradients in the top-left (light blue, sky blue, mint green)
 * - Large abstract translucent curved panels on the right
 * - Subtle financial growth illustration on the left (vertical bars + trending arrow)
 * - Layered flowing blue curved waves at bottom-left
 * - Mint-green & teal geometric composition rising from bottom-right
 * - Delicate dot matrix patterns (top-right & top-left)
 * - Clean bright central zone to keep content 100% legible
 */
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      
      {/* 1. Base Ambient Radial Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F4F9FD] via-[#F8FBFE] to-white" />
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-[#70B7F5]/20 via-[#EAF4FF]/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#70B7F5]/25 via-[#B9F1D5]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[750px] h-[550px] bg-gradient-to-t from-[#EAF4FF]/50 via-white/40 to-transparent rounded-full blur-3xl" />

      {/* 2. Top-Left Geometric Design (Layered diagonal panels & gradients) */}
      <div className="absolute -top-12 -left-12 w-[480px] sm:w-[620px] lg:w-[720px] h-[400px] sm:h-[480px]">
        <svg viewBox="0 0 720 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Broad Sky Blue Diagonal Panel */}
          <path
            d="M-50 -50 L 380 -50 C 420 -50, 440 -30, 420 20 L 180 340 C 160 370, 130 380, 90 380 L -50 380 Z"
            fill="url(#tl-diag-1)"
          />
          {/* Overlapping Mint-Green Panel */}
          <path
            d="M-30 40 L 260 40 C 290 40, 310 55, 295 90 L 130 360 C 115 390, 85 410, 50 410 L -30 410 Z"
            fill="url(#tl-diag-2)"
          />
          {/* Subtle Royal Blue Accent Shover */}
          <path
            d="M-40 -40 L 160 -40 L -40 260 Z"
            fill="url(#tl-diag-3)"
            opacity="0.35"
          />

          <defs>
            <linearGradient id="tl-diag-1" x1="-50" y1="-50" x2="380" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="#70B7F5" stopOpacity="0.35" />
              <stop offset="0.6" stopColor="#EAF4FF" stopOpacity="0.45" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="tl-diag-2" x1="-30" y1="40" x2="260" y2="410" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B9F1D5" stopOpacity="0.4" />
              <stop offset="0.7" stopColor="#EAF4FF" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tl-diag-3" x1="-40" y1="-40" x2="160" y2="260" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2879D8" stopOpacity="0.25" />
              <stop offset="1" stopColor="#70B7F5" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Dotted Patterns in Top-Right Corner */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-16 opacity-35">
        <svg width="150" height="96" viewBox="0 0 150 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-tr" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="2.2" fill="#70B7F5" />
            </pattern>
          </defs>
          <rect width="150" height="96" fill="url(#dot-grid-tr)" />
        </svg>
      </div>

      {/* Top-Left Dotted Pattern Accent */}
      <div className="absolute top-28 left-6 sm:top-36 sm:left-12 opacity-30">
        <svg width="110" height="70" viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-tl2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.8" fill="#2879D8" />
            </pattern>
          </defs>
          <rect width="110" height="70" fill="url(#dot-grid-tl2)" />
        </svg>
      </div>

      {/* 4. Right-Side Decoration (Large abstract translucent curved panels) */}
      <div className="hidden lg:block absolute top-16 -right-12 w-[580px] h-[700px]">
        <svg viewBox="0 0 580 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Main Flowing Translucent Curve */}
          <path
            d="M200 40 C 380 120, 480 320, 360 520 C 280 640, 440 680, 580 700 L 580 0 L 280 0 C 220 0, 180 15, 200 40 Z"
            fill="url(#right-curve-1)"
          />
          {/* Secondary Overlapping Accent Wave */}
          <path
            d="M320 80 C 460 160, 520 340, 420 480 C 370 560, 450 620, 580 660 L 580 40 Z"
            fill="url(#right-curve-2)"
          />
          {/* Geometric Trajectory Arc */}
          <path
            d="M150 160 C 320 280, 400 420, 300 620"
            stroke="#70B7F5"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            opacity="0.4"
          />

          <defs>
            <linearGradient id="right-curve-1" x1="200" y1="40" x2="580" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EAF4FF" stopOpacity="0.75" />
              <stop offset="0.6" stopColor="#70B7F5" stopOpacity="0.25" />
              <stop offset="1" stopColor="#B9F1D5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="right-curve-2" x1="320" y1="80" x2="580" y2="660" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B9F1D5" stopOpacity="0.3" />
              <stop offset="0.7" stopColor="#70B7F5" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Left-Side Financial Growth Illustration (Minimal vertical bar chart + upward arrow) */}
      <div className="hidden xl:block absolute top-[44%] left-6 w-36 h-48 opacity-45">
        <svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Translucent Bar 1 */}
          <rect x="15" y="110" width="16" height="50" rx="4" fill="#70B7F5" fillOpacity="0.45" />
          {/* Translucent Bar 2 */}
          <rect x="42" y="85" width="16" height="75" rx="4" fill="#70B7F5" fillOpacity="0.55" />
          {/* Translucent Bar 3 */}
          <rect x="69" y="60" width="16" height="100" rx="4" fill="#2879D8" fillOpacity="0.5" />
          {/* Translucent Bar 4 */}
          <rect x="96" y="35" width="16" height="125" rx="4" fill="#17A98A" fillOpacity="0.6" />
          
          {/* Upward Trending Arrow in Soft Mint-Green / Teal */}
          <path
            d="M12 120 C 40 100, 70 65, 115 25"
            stroke="#17A98A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Arrow Head */}
          <path
            d="M98 23 L 117 23 L 117 42"
            stroke="#17A98A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle Glow Node at Arrow Peak */}
          <circle cx="116" cy="24" r="4.5" fill="#B9F1D5" stroke="#17A98A" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 6. Bottom Background Composition (Layered flowing blue waves from left + Mint/Teal rising from right) */}
      <div className="absolute -bottom-4 left-0 right-0 h-48 sm:h-56 lg:h-64 w-full">
        <svg
          className="w-full h-full preserve-3d"
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Large Flowing Blue Curve from Bottom-Left */}
          <path
            d="M0 140 C 320 230, 560 60, 900 160 C 1180 240, 1340 130, 1440 110 L 1440 260 L 0 260 Z"
            fill="url(#bot-wave-blue)"
          />
          
          {/* Overlapping Translucent Sky-Blue Middle Layer */}
          <path
            d="M0 190 C 360 110, 680 230, 1040 150 C 1240 100, 1380 180, 1440 170 L 1440 260 L 0 260 Z"
            fill="rgba(234, 244, 255, 0.85)"
          />

          {/* Mint-Green & Teal Curved Shape Rising from Bottom-Right */}
          <path
            d="M840 260 C 960 180, 1120 120, 1320 140 C 1380 146, 1420 155, 1440 165 L 1440 260 Z"
            fill="url(#bot-wave-teal)"
          />

          <defs>
            <linearGradient id="bot-wave-blue" x1="0" y1="140" x2="1440" y2="260" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EAF4FF" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#70B7F5" stopOpacity="0.25" />
              <stop offset="1" stopColor="#EAF4FF" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="bot-wave-teal" x1="840" y1="260" x2="1440" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#17A98A" stopOpacity="0.25" />
              <stop offset="0.6" stopColor="#B9F1D5" stopOpacity="0.4" />
              <stop offset="1" stopColor="#B9F1D5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
};

export default GeometricBackground;
