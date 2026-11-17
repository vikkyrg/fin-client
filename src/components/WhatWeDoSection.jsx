import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BriefcaseBusiness, 
  Handshake, 
  FileCheck, 
  ArrowRight, 
  MessagesSquare, 
  Layers,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const FINANCIAL_SERVICES = [
  {
    number: '01',
    title: 'Personal & Home Loans',
    description: 'Explore suitable financing options for personal needs, home purchases and important life goals.',
    icon: Home,
    link: '/loans/personal-loan',
    // Back Face Details (Theme 1: Deep Royal Blue)
    backTheme: {
      bg: 'bg-gradient-to-br from-[#174A8B] via-[#143F77] to-[#0F3463]',
      border: 'border-[#174A8B]',
      badgeBg: 'bg-white/15 text-sky-200 border-white/20',
      badgeText: 'Low Interest Rates',
      accentColor: 'text-sky-300',
      iconBoxBg: 'bg-white/15 text-sky-200',
      features: [
        'Up to 30 yrs flexible repayment tenure',
        'Multi-bank interest rate comparison',
        'Fast digital eligibility & sanction',
        'Doorstep documentation support',
        'Zero prepayment penalty on floating rates'
      ],
      linkText: 'Explore Personal & Home Loans',
    }
  },
  {
    number: '02',
    title: 'Business Financing',
    description: 'Understand available funding options to support business expansion, working capital and growth.',
    icon: BriefcaseBusiness,
    link: '/loans/business-loan',
    // Back Face Details (Theme 2: Forest Emerald)
    backTheme: {
      bg: 'bg-gradient-to-br from-[#0D5C3A] via-[#107047] to-[#159B69]',
      border: 'border-[#107047]',
      badgeBg: 'bg-white/15 text-emerald-100 border-white/20',
      badgeText: 'Growth Capital',
      accentColor: 'text-emerald-200',
      iconBoxBg: 'bg-white/15 text-emerald-100',
      features: [
        'Unsecured & collateral-free options',
        'Working capital, term loans & MSME',
        'Flexible credit lines & overdraft',
        'Quick turnaround & custom structure',
        'Tax-deductible interest benefits'
      ],
      linkText: 'Explore Business Loans',
    }
  },
  {
    number: '03',
    title: 'Loan Consultation',
    description: 'Get personalised assistance based on your financial requirements and repayment capacity.',
    icon: Handshake,
    link: '/contact-us',
    // Back Face Details (Theme 3: Deep Navy Indigo)
    backTheme: {
      bg: 'bg-gradient-to-br from-[#1E293B] via-[#0F2847] to-[#1E3A8A]',
      border: 'border-[#1E3A8A]',
      badgeBg: 'bg-white/15 text-cyan-200 border-white/20',
      badgeText: '100% Free Advisory',
      accentColor: 'text-cyan-300',
      iconBoxBg: 'bg-white/15 text-cyan-200',
      features: [
        'Unbiased comparison of top lenders',
        'CIBIL score analysis & profiling',
        'Zero upfront advisory charges',
        'Transparent processing fee guidance',
        'Dedicated personal loan advisor'
      ],
      linkText: 'Get Expert Advisory',
    }
  },
  {
    number: '04',
    title: 'Application Assistance',
    description: 'Receive guidance with documentation, application requirements and the next steps.',
    icon: FileCheck,
    link: '/contact-us',
    // Back Face Details (Theme 4: Warm Deep Teal / Cyan Ocean)
    backTheme: {
      bg: 'bg-gradient-to-br from-[#0E4B5B] via-[#0F6072] to-[#155E75]',
      border: 'border-[#0F6072]',
      badgeBg: 'bg-white/15 text-teal-100 border-white/20',
      badgeText: 'End-to-End Support',
      accentColor: 'text-teal-200',
      iconBoxBg: 'bg-white/15 text-teal-100',
      features: [
        'Pre-submission document verification',
        'Direct coordination with bank managers',
        'Real-time status updates & tracking',
        'Fast-track query & hold clearance',
        'Post-disbursement guidance support'
      ],
      linkText: 'Start Application Assistance',
    }
  },
];

const WhatWeDoSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#F4F9FD] overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. PURE CSS & SVG ABSTRACT BACKGROUND ARCHITECTURE             */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-blue-200/50 via-sky-100/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] bg-gradient-to-t from-blue-100/45 via-sky-50/30 to-transparent rounded-full blur-3xl" />

        {/* Large Flowing Organic Wave at Top-Left */}
        <svg
          className="absolute -top-12 -left-12 w-[600px] sm:w-[750px] lg:w-[900px] text-blue-100/60"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 -50 C 250 50, 320 280, 150 420 C -20 560, -80 320, -50 -50 Z"
            fill="currentColor"
          />
          <path
            d="M-80 -80 C 180 80, 260 220, 80 360 C -100 500, -120 260, -80 -80 Z"
            fill="rgba(191, 219, 254, 0.45)"
          />
        </svg>

        {/* Top-Left Subtle Dotted Pattern Matrix */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-12 opacity-40">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-grid-tl" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2.2" fill="#60A5FA" />
              </pattern>
            </defs>
            <rect width="140" height="90" fill="url(#dot-grid-tl)" />
          </svg>
        </div>

        {/* Top-Right Abstract Curved Financial Graphic Accents */}
        <div className="hidden lg:block absolute -top-10 -right-10 w-[550px] h-[450px]">
          <svg className="w-full h-full text-blue-100/40" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 -20 C 250 60, 360 180, 480 140 C 600 100, 520 300, 520 420 L 520 -20 Z"
              fill="rgba(219, 234, 254, 0.55)"
            />
            <path
              d="M180 -40 C 300 80, 420 160, 520 200 L 520 -40 Z"
              fill="rgba(191, 219, 254, 0.4)"
            />
            <path
              d="M80 60 C 220 140, 340 100, 460 220"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <path
              d="M140 30 C 260 90, 380 70, 500 160"
              stroke="#60A5FA"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Layered Flowing Waves at the Bottom */}
        <div className="absolute -bottom-8 left-0 right-0 h-40 sm:h-48 w-full">
          <svg
            className="w-full h-full text-blue-100/50"
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120 C 320 200, 580 40, 920 130 C 1220 210, 1380 110, 1440 90 L 1440 220 L 0 220 Z"
              fill="rgba(224, 242, 254, 0.6)"
            />
            <path
              d="M0 160 C 380 80, 680 200, 1040 120 C 1280 60, 1400 140, 1440 150 L 1440 220 L 0 220 Z"
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
        {/* HEADER: BADGE, HEADING & INTRO PARAGRAPH                       */}
        {/* ============================================================== */}
        <ScrollReveal type="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            
            {/* Small Badge: "OUR FINANCIAL SERVICES" */}
            <div className="inline-flex items-center space-x-1.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#174A8B] bg-white/95 border border-blue-200/90 px-3.5 py-1 rounded-full shadow-[0_2px_8px_rgba(23,74,139,0.06)] backdrop-blur-xs mb-3">
              <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>OUR FINANCIAL SERVICES</span>
            </div>

            {/* Main Heading with "Your Journey" in Royal Blue */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B2545] tracking-tight leading-[1.2]">
              Financial Guidance for Every Step{' '}
              <span className="block sm:inline">of{' '}
                <span className="text-[#2563EB]">Your Journey</span>
              </span>
            </h2>

            {/* Short Green Curved Accent Line */}
            <div className="flex justify-center mt-2.5 mb-3">
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

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              From choosing the right financing option to completing your loan application, we help simplify the process with personalised guidance, transparent information and access to multiple lending solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================================== */}
        {/* 3. FOUR 3D FLIP SERVICE CARDS (EQUAL SIZE, DIFFERENT COLORS)   */}
        {/* ============================================================== */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch mb-9 sm:mb-11" 
          staggerDelay={0.08}
        >
          {FINANCIAL_SERVICES.map((card, idx) => {
            const Icon = card.icon;
            const theme = card.backTheme;
            const isFlipped = !!flippedCards[idx];

            return (
              <StaggerItem key={idx} className="h-full [perspective:1000px]">
                {/* 3D Flip Container: Flips 180 degrees horizontally on desktop hover or mobile tap */}
                <div 
                  onClick={() => toggleCard(idx)}
                  className="group relative w-full h-[330px] xs:h-[325px] sm:h-[335px] [perspective:1000px] cursor-pointer select-none"
                >
                  <div className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-[22px] shadow-[0_4px_20px_rgba(23,74,139,0.06)] group-hover:shadow-[0_16px_36px_rgba(23,74,139,0.16)] group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    
                    {/* ==================================================== */}
                    {/* FRONT FACE: Crisp Clean White with Mint/Green Icon   */}
                    {/* ==================================================== */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-[22px] p-5 sm:p-5.5 border border-blue-100/90 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
                      {/* Top Header & Content */}
                      <div>
                        {/* Number Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] sm:text-xs font-black text-[#2563EB] bg-blue-50/90 border border-blue-100 px-2.5 py-0.5 rounded-md tracking-wider">
                            {card.number}
                          </span>
                        </div>

                        {/* Light Green Rounded Square with Green Outline Icon */}
                        <div className="w-11 h-11 rounded-[13px] bg-[#E8F7F0] border border-emerald-100/80 text-[#159B69] flex items-center justify-center mb-3.5 shrink-0 shadow-2xs">
                          <Icon className="w-5.5 h-5.5 text-[#159B69] stroke-[2]" />
                        </div>

                        {/* Bold Navy Card Title */}
                        <h3 className="font-bold text-[#0B2545] text-[15.5px] sm:text-[16px] mb-2 leading-snug">
                          {card.title}
                        </h3>

                        {/* Readable Blue-Grey Description */}
                        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>

                      {/* Bottom Footer: Green Accent Line & Circular Light-Blue Arrow Button */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="w-8 h-1 bg-[#159B69] rounded-full" />
                        <div className="w-7.5 h-7.5 rounded-full bg-[#EBF4FE] text-[#2563EB] flex items-center justify-center shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* ==================================================== */}
                    {/* BACK FACE: Distinct Vibrant Rich Theme Color per Card */}
                    {/* ==================================================== */}
                    <div className={`absolute inset-0 w-full h-full ${theme.bg} text-white rounded-[22px] p-4 sm:p-5 border ${theme.border} [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-hidden shadow-inner`}>
                      
                      {/* Top Header on Back Face */}
                      <div className="min-h-0 flex-1 flex flex-col justify-start">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2 shrink-0">
                          {/* Mini Icon Box */}
                          <div className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg ${theme.iconBoxBg} flex items-center justify-center shrink-0`}>
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          </div>

                          {/* Distinct Feature Tag Badge */}
                          <span className={`text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${theme.badgeBg}`}>
                            {theme.badgeText}
                          </span>
                        </div>

                        {/* Same Heading in Crisp White */}
                        <h3 className="font-bold text-white text-[13.5px] sm:text-[15px] mb-1.5 sm:mb-2 leading-tight shrink-0">
                          {card.title}
                        </h3>

                        {/* 5 Tailored Value Highlights with comfortable compact mobile sizing */}
                        <div className="space-y-1 sm:space-y-1.5 pt-0.5 flex-1 flex flex-col justify-center">
                          {theme.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-1.5 text-[10.5px] sm:text-[11.5px] text-white/95 leading-tight">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${theme.accentColor} shrink-0`} />
                              <span className="leading-tight">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Link on Back Face */}
                      <div className="pt-2 sm:pt-2.5 border-t border-white/15 flex items-center justify-between shrink-0 mt-1">
                        <Link
                          to={card.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center space-x-1 text-xs font-bold text-white hover:underline transition-all"
                        >
                          <span>Explore loan</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                        </Link>
                        <span className={`text-xs font-black ${theme.accentColor}`}>
                          {card.number}
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* ============================================================== */}
        {/* 4. BOTTOM CTA SECTION (WIDE ROUNDED CONTAINER)                 */}
        {/* ============================================================== */}
        <ScrollReveal type="fade-up" delay={0.16}>
          <div className="w-full bg-white/95 rounded-[20px] p-4 sm:p-5 lg:px-6 lg:py-4.5 border border-blue-200/90 shadow-[0_6px_24px_rgba(23,74,139,0.05)] backdrop-blur-xs flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-50/60 to-transparent pointer-events-none" />

            {/* Left Content with Dual Chat Bubble Icon */}
            <div className="flex items-center space-x-3.5 sm:space-x-4 text-left w-full md:w-auto relative z-10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200/70 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                <MessagesSquare className="w-5 h-5 text-[#2563EB]" />
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B2545] tracking-tight leading-snug">
                  Not sure which loan option is right for you?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Our team can help you understand your available financing options.
                </p>
              </div>
            </div>

            {/* Right Button: "Talk to Our Team ->" */}
            <div className="w-full md:w-auto shrink-0 relative z-10">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-[#174A8B] to-[#2563EB] hover:from-[#0F3463] hover:to-[#1D4ED8] transition-all duration-300 shadow-[0_3px_12px_rgba(37,99,235,0.22)] hover:shadow-[0_5px_18px_rgba(37,99,235,0.30)] active:scale-95 group"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
