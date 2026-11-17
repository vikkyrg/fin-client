import React from 'react';

/**
 * EditorialFinancialBackground
 * Premium financial-services editorial background designed specifically for Home Page About FinAdvise:
 * - Sophisticated combination of blue (left) and mint-green (right) gradients
 * - Layered translucent organic shapes with subtle movement
 * - Fine-line geometric accents & celestial coordinate lines
 * - Elegant dotted matrices
 * - High readability for foreground text and cards
 */
const EditorialFinancialBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      
      {/* 1. Base Gradient Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FD] to-[#F2FBF6]" />

      {/* 2. Left-Side Atmospherics: Deep Sky & Royal Blue Gradients */}
      <div className="absolute -top-24 -left-28 w-[580px] h-[580px] bg-gradient-to-br from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[450px] bg-gradient-to-r from-blue-100/35 via-blue-50/20 to-transparent rounded-full blur-2xl" />

      {/* 3. Right-Side Atmospherics: Mint-Green & Emerald Gradients behind Feature Cards */}
      <div className="absolute -top-20 -right-24 w-[620px] h-[620px] bg-gradient-to-bl from-emerald-100/35 via-teal-50/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[450px] bg-gradient-to-tl from-emerald-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl" />

      {/* 4. Left-Side Organic Abstract Shapes & Editorial Line Work */}
      <div className="absolute -top-10 -left-10 w-[520px] h-[520px] opacity-70">
        <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Flowing Organic Translucent Contour */}
          <path
            d="M50 80 C 180 30, 320 120, 360 250 C 400 380, 260 460, 140 440 C 20 420, -20 300, 10 180 C 25 120, -10 100, 50 80 Z"
            fill="url(#organic-blue-1)"
          />

          {/* Thin Geometric Arc Accent Line */}
          <path
            d="M30 200 C 120 140, 240 180, 320 300 C 360 360, 420 400, 480 380"
            stroke="#93C5FD"
            strokeWidth="1.25"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Precision Crosshairs / Coordinate Point */}
          <circle cx="320" cy="300" r="3" fill="#60A5FA" opacity="0.7" />
          <circle cx="320" cy="300" r="8" stroke="#93C5FD" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

          <defs>
            <linearGradient id="organic-blue-1" x1="0" y1="50" x2="400" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DBEAFE" stopOpacity="0.45" />
              <stop offset="0.6" stopColor="#EFF6FF" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Left-Side Delicate Dot Matrix */}
      <div className="absolute top-24 left-8 sm:left-14 opacity-35">
        <svg width="120" height="72" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="editorial-dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.75" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="120" height="72" fill="url(#editorial-dots-left)" />
        </svg>
      </div>

      {/* 6. Right-Side Background Geometric Atmosphere behind the 4 Cards */}
      <div className="hidden lg:block absolute top-6 right-0 w-[640px] h-[560px] opacity-75">
        <svg viewBox="0 0 640 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Large Translucent Mint-Green Organic Aura */}
          <path
            d="M320 60 C 460 20, 580 90, 620 220 C 660 360, 540 480, 390 510 C 240 540, 160 450, 180 320 C 200 180, 200 90, 320 60 Z"
            fill="url(#organic-mint-1)"
          />

          {/* Delicate Mathematical Curve Lines */}
          <path
            d="M160 220 C 260 120, 420 140, 520 280 C 580 360, 620 400, 640 420"
            stroke="#A7F3D0"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.7"
          />
          <path
            d="M200 320 C 300 240, 450 260, 540 380"
            stroke="#6EE7B7"
            strokeWidth="1"
            opacity="0.4"
          />

          {/* Subtle Ring Marker */}
          <circle cx="520" cy="280" r="4" fill="#34D399" opacity="0.6" />
          <circle cx="520" cy="280" r="11" stroke="#A7F3D0" strokeWidth="1" opacity="0.4" />

          <defs>
            <linearGradient id="organic-mint-1" x1="160" y1="50" x2="620" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D1FAE5" stopOpacity="0.4" />
              <stop offset="0.65" stopColor="#ECFDF5" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 7. Right-Side Delicate Dot Matrix */}
      <div className="hidden lg:block absolute bottom-12 right-12 opacity-30">
        <svg width="130" height="78" viewBox="0 0 130 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="editorial-dots-right" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.75" fill="#10B981" />
            </pattern>
          </defs>
          <rect width="130" height="78" fill="url(#editorial-dots-right)" />
        </svg>
      </div>

      {/* 8. Bottom Center Subtle Ambient Transition Horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />

    </div>
  );
};

export default EditorialFinancialBackground;
