import React from 'react';

/**
 * Premium Fintech Abstract Background for FinAdvise Loan Detail Hero
 * Deep corporate navy #0B2345 / #102B52 to #174F91 with subtle glowing accents
 */
const LoanHeroBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Gradient Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #091D3E 0%, #0F3260 45%, #174F91 100%)'
        }}
      />

      {/* Subtle radial highlights for depth */}
      <div 
        className="absolute -top-[20%] right-[-10%] w-[650px] h-[650px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, rgba(16, 185, 129, 0.15) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute -bottom-[30%] left-[-10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(23, 79, 145, 0.8) 0%, rgba(255, 137, 28, 0.12) 50%, transparent 80%)'
        }}
      />

      {/* Elegant SVG Geometric Waves and Arcs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C320,300 480,50 800,200 C1120,350 1280,180 1440,240 L1440,600 L0,600 Z"
          fill="rgba(255, 255, 255, 0.4)"
        />
        <path
          d="M0,280 C360,180 540,360 900,220 C1200,100 1320,290 1440,310 L1440,600 L0,600 Z"
          fill="rgba(255, 255, 255, 0.25)"
        />
      </svg>

      {/* Tech Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};

export default LoanHeroBackground;
