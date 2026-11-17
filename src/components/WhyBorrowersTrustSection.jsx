import React from 'react';
import { 
  ShieldCheck, 
  Percent, 
  Clock, 
  IndianRupee 
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: '20+ Banking Partners',
    description: 'Direct tie-ups with leading public/private banks and verified NBFCs across India.',
    accent: 'blue',
    iconBg: 'bg-[#EFF6FF] text-[#174A8B] border border-blue-200/70',
    iconColor: 'text-[#174A8B]',
    waveFill1: '#DBEAFE',
    waveFill2: '#EFF6FF',
    badgeText: 'INSTITUTIONAL ACCESS'
  },
  {
    icon: Percent,
    title: 'Lowest Market Rates',
    description: 'Explore competitive interest rate options matching your financial profile.',
    accent: 'green',
    iconBg: 'bg-[#ECFDF5] text-[#159B69] border border-emerald-200/70',
    iconColor: 'text-[#159B69]',
    waveFill1: '#A7F3D0',
    waveFill2: '#ECFDF5',
    badgeText: 'MULTI-LENDER BENCHMARK'
  },
  {
    icon: Clock,
    title: 'Rapid 24–48 Hr Turnaround',
    description: 'Digital documentation and application assistance to help reduce processing delays.',
    accent: 'blue',
    iconBg: 'bg-[#EFF6FF] text-[#174A8B] border border-blue-200/70',
    iconColor: 'text-[#174A8B]',
    waveFill1: '#DBEAFE',
    waveFill2: '#EFF6FF',
    badgeText: 'PAPERLESS ORIGINATION'
  },
  {
    icon: IndianRupee,
    title: 'Zero Upfront Advisory Fee',
    description: 'Transparent borrowing assistance with no upfront advisory charges.',
    accent: 'green',
    iconBg: 'bg-[#ECFDF5] text-[#159B69] border border-emerald-200/70',
    iconColor: 'text-[#159B69]',
    waveFill1: '#A7F3D0',
    waveFill2: '#ECFDF5',
    badgeText: '100% UNBIASED'
  }
];

const WhyBorrowersTrustSection = () => {
  return (
    <section className="relative py-20 sm:py-24 my-16 sm:my-20 overflow-hidden bg-gradient-to-b from-[#F2F7FD] via-[#FFFFFF] to-[#EFF6FD]">
      
      {/* ============================================================== */}
      {/* 1. SECTION BACKGROUND ARCHITECTURE (SVG WAVES, DOTS & GRADIENTS) */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Soft Radial Gradients behind Content */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(219, 234, 254, 0.6) 0%, rgba(240, 246, 255, 0.2) 65%, transparent 100%)'
          }}
        />

        {/* Large Flowing Blue Curved Shapes from Top-Left Corner */}
        <svg
          className="absolute -top-12 -left-12 w-[550px] sm:w-[700px] text-blue-100/50"
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-40 -40 C 220 40, 300 240, 140 380 C -20 520, -60 300, -40 -40 Z"
            fill="currentColor"
          />
          <path
            d="M-60 -60 C 160 60, 240 180, 80 320 C -80 460, -100 220, -60 -60 Z"
            fill="rgba(191, 219, 254, 0.4)"
          />
        </svg>

        {/* Top-Right Dotted Pattern Matrix */}
        <div className="absolute top-10 right-8 sm:right-16 opacity-35">
          <svg width="150" height="90" viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="trust-dots-tr" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="1.8" fill="#3B82F6" />
              </pattern>
            </defs>
            <rect width="150" height="90" fill="url(#trust-dots-tr)" />
          </svg>
        </div>

        {/* Left-Side Dotted Pattern Matrix */}
        <div className="absolute bottom-28 left-6 sm:left-12 opacity-30 hidden sm:block">
          <svg width="130" height="80" viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="trust-dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.6" fill="#159B69" />
              </pattern>
            </defs>
            <rect width="130" height="80" fill="url(#trust-dots-bl)" />
          </svg>
        </div>

        {/* Thin Curved Decorative Outlines */}
        <div className="absolute top-20 right-1/4 w-80 h-80 opacity-25 hidden lg:block">
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="150" cy="150" r="130" stroke="#93C5FD" strokeWidth="1" strokeDasharray="5 7" />
            <circle cx="150" cy="150" r="90" stroke="#BFDBFE" strokeWidth="1" />
          </svg>
        </div>

        {/* Layered Flowing Waves Across the Bottom of the Section */}
        <div className="absolute -bottom-1 left-0 right-0 h-44 sm:h-52 w-full opacity-70">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Light-blue wave from the left */}
            <path
              d="M0 60 C 360 140, 720 20, 1100 100 C 1260 135, 1380 65, 1440 50 L 1440 180 L 0 180 Z"
              fill="rgba(219, 234, 254, 0.55)"
            />
            {/* Mint-green and teal wave from the right */}
            <path
              d="M450 180 C 750 170, 1050 80, 1440 110 L 1440 180 Z"
              fill="rgba(209, 250, 229, 0.45)"
            />
            {/* Soft white overlapping wave in the center */}
            <path
              d="M0 110 C 380 70, 800 140, 1440 85 L 1440 180 L 0 180 Z"
              fill="rgba(255, 255, 255, 0.85)"
            />
          </svg>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. FOREGROUND CONTENT WRAPPER                                   */}
      {/* ============================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal type="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            
            {/* Small Rounded Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50/90 border border-blue-200/90 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#174A8B] shadow-2xs backdrop-blur-xs mb-3.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>WHY BORROWERS TRUST FINADVISE</span>
            </div>

            {/* Main Heading with "Digital Simplicity" in Royal Blue */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B2545] tracking-tight leading-[1.2]">
              Unbiased Multi-Bank Advisory &amp;{' '}
              <span className="text-[#2563EB]">Digital Simplicity</span>
            </h2>

            {/* Short Curved Green Accent Underline Below Heading */}
            <div className="flex justify-center mt-3 mb-4">
              <svg
                className="w-20 sm:w-24 h-2 text-[#159B69]"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6C35 2 65 2 98 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#2C4164] leading-relaxed font-normal max-w-[850px] mx-auto">
              We empower Indian borrowers with transparent guidance, competitive interest rate comparison and paperless loan origination.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================================== */}
        {/* 3. FOUR PREMIUM FEATURE CARDS (SINGLE ROW ON DESKTOP)          */}
        {/* ============================================================== */}
        <StaggerContainer 
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch"
        >
          {TRUST_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isBlue = card.accent === 'blue';

            return (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white rounded-[22px] p-7 sm:p-8 border border-blue-100 shadow-[0_4px_24px_rgba(23,74,139,0.06)] hover:shadow-[0_18px_38px_rgba(23,74,139,0.12)] hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden group h-full cursor-default">
                  
                  {/* Decorative Curved Wave in Bottom-Right Corner of each card */}
                  <div className="absolute -bottom-1 -right-1 w-36 h-36 pointer-events-none select-none z-0 transition-transform duration-500 ease-out group-hover:scale-110">
                    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                      <path
                        d="M160 60 C 130 65, 80 100, 60 160 L 160 160 Z"
                        fill={card.waveFill2}
                      />
                      <path
                        d="M160 90 C 140 95, 100 120, 85 160 L 160 160 Z"
                        fill={card.waveFill1}
                        opacity="0.8"
                      />
                    </svg>
                  </div>

                  {/* Card Content (Relative z-10) */}
                  <div className="relative z-10 flex flex-col h-full justify-start items-start text-left">
                    
                    {/* Large Icon Container (around 72–80px) with subtle scale on hover */}
                    <div className={`w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] rounded-[20px] ${card.iconBg} flex items-center justify-center mb-6 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300 ease-out`}>
                      <Icon className={`w-9 h-9 sm:w-10 sm:h-10 ${card.iconColor} stroke-[2]`} />
                    </div>

                    {/* Bold Navy-Blue Card Heading */}
                    <h3 className="font-bold text-[#0B2545] text-lg sm:text-[19px] mb-2.5 leading-snug group-hover:text-[#174A8B] transition-colors duration-200">
                      {card.title}
                    </h3>

                    {/* Muted Blue-Grey Description */}
                    <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                      {card.description}
                    </p>

                  </div>

                  {/* Bottom Accent Line Indicator */}
                  <div className="relative z-10 mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isBlue ? 'text-[#2563EB]' : 'text-[#159B69]'}`}>
                      {card.badgeText}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${isBlue ? 'bg-[#2563EB]' : 'bg-[#159B69]'}`} />
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default WhyBorrowersTrustSection;
