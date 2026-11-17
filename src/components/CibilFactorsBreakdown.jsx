import React, { useState, useEffect, useRef } from 'react';
import { CalendarCheck, Coins, Clock, Layers, Lightbulb } from 'lucide-react';

const FACTORS_DATA = [
  {
    id: 'payment-history',
    title: 'Payment History',
    percent: 35,
    themeColor: '#2563EB', // Blue
    borderClass: 'border-blue-200/90 hover:border-blue-400',
    iconBg: 'bg-blue-50 text-blue-600',
    accentGradient: 'from-blue-50/50 via-white to-blue-50/30',
    icon: CalendarCheck,
    description: 'Timely repayments of credit card bills, overdraft facilities, and active EMI obligations on or before their due dates.',
    insight: 'Even a single 30-day default or delayed payment leaves a negative imprint on your bureau record.',
    insightBg: 'bg-blue-50/80 text-blue-900 border-blue-100',
    insightIconColor: 'text-blue-600',
    decorShapeColor: 'rgba(37, 99, 235, 0.06)'
  },
  {
    id: 'cur',
    title: 'Credit Utilization Ratio (CUR)',
    percent: 30,
    themeColor: '#F59E0B', // Orange
    borderClass: 'border-amber-200/90 hover:border-amber-400',
    iconBg: 'bg-amber-50 text-amber-600',
    accentGradient: 'from-amber-50/50 via-white to-amber-50/30',
    icon: Coins,
    description: 'The proportion of your revolving credit limits utilized each billing cycle across all active credit cards.',
    insight: 'Maintaining utilization below 30% signals disciplined budgeting and prevents perceived credit hunger.',
    insightBg: 'bg-amber-50/80 text-amber-900 border-amber-100',
    insightIconColor: 'text-amber-600',
    decorShapeColor: 'rgba(245, 158, 11, 0.06)'
  },
  {
    id: 'credit-age',
    title: 'Credit Age & History',
    percent: 15,
    themeColor: '#10B981', // Green
    borderClass: 'border-emerald-200/90 hover:border-emerald-400',
    iconBg: 'bg-emerald-50 text-emerald-600',
    accentGradient: 'from-emerald-50/50 via-white to-emerald-50/30',
    icon: Clock,
    description: 'The longevity and vintage of your active credit accounts and your demonstrated repayment consistency over time.',
    insight: 'Older accounts with healthy payment histories demonstrate maturity and financial resilience to lenders.',
    insightBg: 'bg-emerald-50/80 text-emerald-900 border-emerald-100',
    insightIconColor: 'text-emerald-600',
    decorShapeColor: 'rgba(16, 185, 129, 0.06)'
  },
  {
    id: 'credit-mix',
    title: 'Credit Mix & Hard Enquiries',
    percent: 20,
    themeColor: '#8B5CF6', // Purple
    borderClass: 'border-purple-200/90 hover:border-purple-400',
    iconBg: 'bg-purple-50 text-purple-600',
    accentGradient: 'from-purple-50/50 via-white to-purple-50/30',
    icon: Layers,
    description: 'A healthy equilibrium between secured credit (home/auto) and unsecured credit, along with minimal hard checks.',
    insight: 'Applying to multiple banks in short spans creates multiple hard enquiries, pulling your score down temporarily.',
    insightBg: 'bg-purple-50/80 text-purple-900 border-purple-100',
    insightIconColor: 'text-purple-600',
    decorShapeColor: 'rgba(139, 92, 246, 0.06)'
  }
];

// Circular progress indicator component with smooth animation
const CircularProgress = ({ percentage, color, isVisible }) => {
  const radius = 22;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;
  // If visible, strokeDashoffset shrinks from circumference down to target
  const offset = isVisible 
    ? circumference - (percentage / 100) * circumference 
    : circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 56 56">
        {/* Track Circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="text-slate-100"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Animated Progress Circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          style={{
            transition: 'stroke-dashoffset 1600ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </svg>
      {/* Center Percentage Text */}
      <span className="absolute text-xs font-black text-slate-800 tracking-tight">
        {percentage}%
      </span>
    </div>
  );
};

const CibilFactorsBreakdown = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety fallback
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    }, 250);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F2F7FD] via-[#F8FBFE] to-[#FFFFFF] border-b border-blue-100/60 overflow-hidden"
    >
      {/* Abstract Curved Shapes in Top-Left and Bottom-Right Corners */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/35 to-indigo-100/20 blur-3xl pointer-events-none" 
      />
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl from-emerald-100/35 to-blue-100/25 blur-3xl pointer-events-none" 
      />

      {/* Decorative Dotted Patterns Near Edges */}
      {/* Top Left Dots */}
      <svg 
        className="absolute top-8 left-8 w-32 h-32 opacity-25 hidden md:block pointer-events-none" 
        viewBox="0 0 120 120" 
        fill="none"
      >
        <defs>
          <pattern id="factors-dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#factors-dots-left)" />
      </svg>

      {/* Bottom Right Dots */}
      <svg 
        className="absolute bottom-8 right-8 w-32 h-32 opacity-25 hidden md:block pointer-events-none" 
        viewBox="0 0 120 120" 
        fill="none"
      >
        <defs>
          <pattern id="factors-dots-right" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#factors-dots-right)" />
      </svg>

      {/* Center Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          {/* Centered Pill Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#2563EB] bg-white border border-blue-200/90 px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.06)]">
              SCORE BREAKDOWN
            </span>
          </div>

          {/* Main Heading with Royal Blue Highlight & Green Curved Underline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B2545] tracking-tight leading-[1.2]">
            Key Factors That Determine{' '}
            <span className="text-[#2563EB] relative inline-block whitespace-nowrap">
              Your Score
              {/* Green Curved Underline */}
              <svg 
                className="absolute -bottom-2.5 left-0 w-full h-3 text-[#10B981] overflow-visible pointer-events-none"
                viewBox="0 0 180 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 8C50 2.5 130 2 178 7" 
                  stroke="#10B981" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal pt-1">
            Understanding the relative weight of each metric helps you focus on high-impact financial habits.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. FOUR PROFESSIONAL CARDS (1 row on desktop, 2 on tablet, 1 on mobile)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {FACTORS_DATA.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`relative bg-gradient-to-br ${card.accentGradient} rounded-[24px] p-6 border ${card.borderClass} shadow-[0_4px_20px_rgba(23,74,139,0.05)] hover:shadow-[0_16px_36px_rgba(23,74,139,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 120}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 120}ms, box-shadow 300ms ease, border-color 300ms ease`
                }}
              >
                {/* Subtle colored decorative curved shape in bottom-right */}
                <div 
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: card.decorShapeColor }}
                />

                {/* Soft Radial Glow behind card content */}
                <div 
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40"
                  style={{ backgroundColor: card.decorShapeColor }}
                />

                {/* Main Card Content */}
                <div className="relative z-10 space-y-4">
                  
                  {/* Top Area: Icon inside pastel rounded square (Left) & Circular Percentage (Right) */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center ${card.iconBg} shadow-sm border border-white/60 transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <CircularProgress 
                      percentage={card.percent} 
                      color={card.themeColor} 
                      isVisible={isInView}
                    />
                  </div>

                  {/* Card Heading */}
                  <h3 className="text-lg sm:text-[19px] font-black text-[#0B2545] tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-slate-600 leading-[1.65] font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Area: Expert Insight Panel */}
                <div className="relative z-10 mt-6 pt-2">
                  <div className={`rounded-xl p-3.5 border ${card.insightBg} flex items-start space-x-2.5 transition-transform duration-200 group-hover:translate-x-0.5`}>
                    <div className={`shrink-0 mt-0.5 ${card.insightIconColor}`}>
                      <Lightbulb className="w-4 h-4 fill-current opacity-90" />
                    </div>
                    <div className="text-xs leading-relaxed font-normal">
                      <span className="font-extrabold text-[#0B2545]">Expert Insight: </span>
                      <span className="text-slate-700">{card.insight}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CibilFactorsBreakdown;
