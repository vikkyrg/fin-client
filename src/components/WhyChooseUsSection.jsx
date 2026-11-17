import React from 'react';
import { 
  ShieldCheck, 
  Landmark, 
  UserRoundCheck, 
  FileText, 
  Timer, 
  Handshake,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Trusted Guidance',
    description: 'Understand available financing options with clear and helpful information.',
    icon: ShieldCheck,
    waveType: 'blue', // cards 01, 03, 05 have subtle blue wave
  },
  {
    number: '02',
    title: 'Multiple Lending Options',
    description: 'Explore loan products from different banks and financial institutions.',
    icon: Landmark,
    waveType: 'green', // cards 02, 04, 06 have subtle light-green wave
  },
  {
    number: '03',
    title: 'Personalised Solutions',
    description: 'Explore options based on your financial needs and eligibility.',
    icon: UserRoundCheck,
    waveType: 'blue',
  },
  {
    number: '04',
    title: 'Documentation Assistance',
    description: 'Get guidance in preparing and organising application documents.',
    icon: FileText,
    waveType: 'green',
  },
  {
    number: '05',
    title: 'Time-Saving Process',
    description: 'Simplify the initial loan discovery and enquiry process.',
    icon: Timer,
    waveType: 'blue',
  },
  {
    number: '06',
    title: 'Responsible Borrowing',
    description: 'Understand repayment terms and make informed borrowing decisions.',
    icon: Handshake,
    waveType: 'green',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-20 lg:py-26 bg-[#F4F9FD] overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. PURE CSS & SVG ABSTRACT BACKGROUND ARCHITECTURE             */}
      {/* (No building images or photographs - layered blue waves & dots) */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Soft Radial Ambient Lighting behind cards */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-blue-200/50 via-sky-100/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[500px] bg-gradient-to-t from-blue-100/45 via-sky-50/30 to-transparent rounded-full blur-3xl" />

        {/* Large Flowing Blue Wave Shapes at Top-Left Corner */}
        <svg
          className="absolute -top-16 -left-16 w-[600px] sm:w-[750px] lg:w-[920px] text-blue-100/60"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 -50 C 260 50, 340 300, 160 440 C -20 580, -90 340, -50 -50 Z"
            fill="currentColor"
          />
          <path
            d="M-80 -80 C 190 90, 270 230, 90 370 C -90 510, -120 270, -80 -80 Z"
            fill="rgba(191, 219, 254, 0.45)"
          />
        </svg>

        {/* Subtle Dotted Pattern in Top-Left Corner */}
        <div className="absolute top-8 left-8 sm:top-12 sm:left-14 opacity-40">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="why-dot-grid-tl" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2.2" fill="#60A5FA" />
              </pattern>
            </defs>
            <rect width="140" height="90" fill="url(#why-dot-grid-tl)" />
          </svg>
        </div>

        {/* Subtle Dotted Pattern in Bottom-Right Corner */}
        <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-14 opacity-35">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="why-dot-grid-br" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2.2" fill="#38BDF8" />
              </pattern>
            </defs>
            <rect width="140" height="90" fill="url(#why-dot-grid-br)" />
          </svg>
        </div>

        {/* Layered Flowing Waves along the Bottom Edge */}
        <div className="absolute -bottom-8 left-0 right-0 h-44 sm:h-52 w-full">
          <svg
            className="w-full h-full text-blue-100/50"
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 130 C 340 210, 600 50, 940 140 C 1220 210, 1380 110, 1440 90 L 1440 220 L 0 220 Z"
              fill="rgba(224, 242, 254, 0.55)"
            />
            <path
              d="M0 165 C 380 85, 700 205, 1060 125 C 1280 65, 1400 140, 1440 150 L 1440 220 L 0 220 Z"
              fill="rgba(239, 246, 255, 0.9)"
            />
          </svg>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. FOREGROUND CONTENT WRAPPER                                   */}
      {/* ============================================================== */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: BADGE, HEADING, ACCENT & SUBTITLE             */}
        {/* ============================================================== */}
        <ScrollReveal type="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            
            {/* Small Rounded Badge: WHY CHOOSE US */}
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#123B75] bg-white/95 border border-blue-200/90 px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(18,59,117,0.06)] backdrop-blur-xs mb-3.5">
              <span>WHY CHOOSE US</span>
            </div>

            {/* Main Heading with "FinAdvise" in Royal Blue */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#123B75] tracking-tight leading-[1.2]">
              Why Choose <span className="text-[#1769E8]">FinAdvise?</span>
            </h2>

            {/* Short Green Curved Accent Line */}
            <div className="flex justify-center mt-3 mb-4">
              <svg
                className="w-20 sm:w-24 h-2 text-[#0CA36C]"
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

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
              A supportive partner throughout your loan discovery and application journey.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================================== */}
        {/* 3. SIX SERVICE CARDS (3-COLUMN × 2-ROW GRID)                    */}
        {/* ============================================================== */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch" 
          staggerDelay={0.08}
        >
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isBlueWave = item.waveType === 'blue';

            return (
              <StaggerItem key={idx} className="h-full">
                <div className="h-full min-h-[190px] sm:min-h-[235px] bg-white rounded-[22px] p-5 sm:p-7 border border-blue-100/90 shadow-[0_4px_22px_rgba(18,59,117,0.05)] hover:shadow-[0_16px_36px_rgba(18,59,117,0.11)] hover:border-[#1769E8]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-start relative overflow-hidden group cursor-default">
                  
                  {/* Alternating Subtle Decorative Curved Wave in Bottom-Right Corner */}
                  <div className="absolute -bottom-1 -right-1 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none select-none z-0 transition-transform duration-500 ease-out group-hover:scale-110">
                    {isBlueWave ? (
                      /* Blue Wave (Cards 01, 03, 05) */
                      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                        <path
                          d="M160 60 C 130 65, 80 100, 60 160 L 160 160 Z"
                          fill="#EFF6FF"
                        />
                        <path
                          d="M160 90 C 140 95, 100 120, 85 160 L 160 160 Z"
                          fill="#DBEAFE"
                          opacity="0.8"
                        />
                      </svg>
                    ) : (
                      /* Light-Green Wave (Cards 02, 04, 06) */
                      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                        <path
                          d="M160 60 C 130 65, 80 100, 60 160 L 160 160 Z"
                          fill="#ECFDF5"
                        />
                        <path
                          d="M160 90 C 140 95, 100 120, 85 160 L 160 160 Z"
                          fill="#D1FAE5"
                          opacity="0.8"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Card Content (Relative z-10 over decorative waves) */}
                  <div className="relative z-10 flex flex-col h-full justify-start items-start">
                    
                    {/* Light Mint-Green Rounded Square with Green Outline Icon (30-36px icon) */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] sm:rounded-[16px] bg-[#ECFBF4] border border-[#0CA36C]/20 text-[#0CA36C] flex items-center justify-center mb-4 sm:mb-4.5 shrink-0 shadow-2xs group-hover:bg-[#DCF7EA] group-hover:scale-105 transition-all duration-300 ease-out">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0CA36C] stroke-[2]" />
                    </div>

                    {/* Bold Dark Navy-Blue Card Title */}
                    <h3 className="font-bold text-[#123B75] text-[15px] sm:text-[17px] mb-2 leading-snug group-hover:text-[#1769E8] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Muted Blue-Grey Description Text */}
                    <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>

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

export default WhyChooseUsSection;
