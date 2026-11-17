import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedScoreBar
 * Ultra-smooth CSS-transition driven animation with requestAnimationFrame counter.
 * CSS transition runs entirely on the browser's compositor thread (guaranteed 60+ FPS without lag).
 */
const AnimatedScoreBar = ({ targetScore = 785 }) => {
  const [animated, setAnimated] = useState(false);
  const [currentScore, setCurrentScore] = useState(300);
  const containerRef = useRef(null);

  // Scale: 300 to 900 (span = 600)
  const targetPercent = Math.min(100, Math.max(0, ((targetScore - 300) / 600) * 100));

  // Determine current tier from numerical score
  const getTierData = (score) => {
    if (score < 550) {
      return {
        name: 'Poor',
        color: '#EF4444',
        badgeBg: 'bg-red-50 text-red-700 border-red-200',
        borderColor: '#EF4444',
        textColor: '#B91C1C'
      };
    }
    if (score < 650) {
      return {
        name: 'Average',
        color: '#F59E0B',
        badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
        borderColor: '#F59E0B',
        textColor: '#B45309'
      };
    }
    if (score < 750) {
      return {
        name: 'Good',
        color: '#3B82F6',
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        borderColor: '#3B82F6',
        textColor: '#1D4ED8'
      };
    }
    return {
      name: 'Excellent',
      color: '#10B981',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      borderColor: '#10B981',
      textColor: '#065F46'
    };
  };

  useEffect(() => {
    let animId = null;

    const startAnimation = () => {
      setAnimated(true);

      const startScore = 300;
      const endScore = targetScore;
      const duration = 2200; // 2.2s matching the CSS transition duration
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // cubic-bezier(0.16, 1, 0.3, 1) approximation (smooth ease out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(startScore + (endScore - startScore) * easeOut);
        
        setCurrentScore(val);

        if (progress < 1) {
          animId = requestAnimationFrame(updateCounter);
        }
      };

      animId = requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Safety fallback: if user is already at this scroll position on initial load, trigger after 150ms
    const fallbackTimer = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          startAnimation();
        }
      }
    }, 200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [targetScore]);

  const activeTier = getTierData(currentScore);

  return (
    <div ref={containerRef} className="space-y-3 pt-2">
      {/* Top Labels Row: 300 Min, Smooth Tooltip, 900 Max */}
      <div className="flex items-center justify-between text-xs font-black relative min-h-[34px]">
        {/* Min Badge */}
        <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 select-none z-10">
          300 Min
        </span>

        {/* Dynamic Flying Tooltip Aligned with Bar Cursor */}
        <div 
          className="absolute -top-1 pointer-events-none will-change-transform z-20"
          style={{
            left: animated ? `${Math.max(6, Math.min(targetPercent, 94))}%` : '6%',
            transform: 'translateX(-50%)',
            transition: 'left 2200ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="flex flex-col items-center">
            <div 
              className={`px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm border flex items-center space-x-1.5 select-none transition-colors duration-300 ${activeTier.badgeBg}`}
            >
              <span 
                className="w-1.5 h-1.5 rounded-full animate-ping" 
                style={{ backgroundColor: activeTier.color }} 
              />
              <span>Score: {currentScore}</span>
              <span className="opacity-80">({activeTier.name})</span>
            </div>
            {/* Small downward caret */}
            <div 
              className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] transition-colors duration-300"
              style={{ borderTopColor: activeTier.color }}
            />
          </div>
        </div>

        {/* Max Badge */}
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 select-none z-10">
          900 Max
        </span>
      </div>

      {/* Main Bar Track */}
      <div className="relative w-full h-4 sm:h-5 rounded-full bg-slate-200/90 shadow-inner p-0.5 border border-slate-300/70 overflow-hidden">
        
        {/* Full Colorful Spectrum Track in the background (faded when empty) */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#EF4444] via-[#F59E0B] via-[#3B82F6] via-[#0D9488] to-[#10B981] opacity-25"
        />

        {/* Active Animated Fill: hardware-accelerated CSS transition */}
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-[#EF4444] via-[#F59E0B] via-[#3B82F6] via-[#0D9488] to-[#10B981] shadow-sm will-change-[width]"
          style={{ 
            width: animated ? `${targetPercent}%` : '0%',
            transition: 'width 2200ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Glowing cursor head at the trailing edge */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-md border-2 transition-colors duration-300"
            style={{ borderColor: activeTier.color }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedScoreBar;
