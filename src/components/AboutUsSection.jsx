import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Landmark, 
  Handshake, 
  MapPin, 
  Quote,
  CheckCircle2,
  TrendingUp,
  Percent
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import corporateOfficeImg from '../assets/corporate-office-clean.jpg';

const SERVICE_HIGHLIGHTS = [
  {
    icon: UserCheck,
    title: 'Personalised',
    subtitle: 'Guidance',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent',
    subtitle: 'Process',
  },
  {
    icon: Landmark,
    title: 'Multiple Loan',
    subtitle: 'Solutions',
  },
  {
    icon: Handshake,
    title: 'Trusted',
    subtitle: 'Assistance',
  },
];

const AboutUsSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Subtle organic light-blue gradient background decorations */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-blue-100/50 via-sky-50/40 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -right-36 w-[600px] h-[600px] bg-gradient-to-tl from-sky-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-blue-50/20 via-sky-50/30 to-blue-50/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">

        {/* Three-Column Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">

          {/* ============================================================== */}
          {/* 1. LEFT COLUMN: OFFICE IMAGE CARD (lg:col-span-4)               */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 flex flex-col">
            <ScrollReveal type="fade-up" delay={0.08} className="h-full">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-full min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(23,74,139,0.07)] border border-blue-100/80 group bg-slate-100 flex flex-col justify-end">
                {/* Office Building Image with subtle hover zoom */}
                <img
                  src={corporateOfficeImg}
                  alt="FinAdvise Corporate Facilitation Office"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark gradient overlay from bottom to top for contrast & legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#041226]/95 via-[#071F3F]/60 to-transparent pointer-events-none"
                />

                {/* Bottom Office Metadata */}
                <div className="relative z-10 p-6 sm:p-7 space-y-1.5 text-white">
                  <span className="inline-block text-[10px] font-extrabold tracking-widest text-[#2DD4BF] uppercase bg-[#2DD4BF]/15 px-2.5 py-1 rounded-md backdrop-blur-xs border border-[#2DD4BF]/20">
                    FINANCIAL SERVICES
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-xs">
                    FinAdvise
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-medium pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Your Trusted Financial Partner</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ============================================================== */}
          {/* 2. CENTER COLUMN: INTRODUCTION & SERVICE HIGHLIGHTS (lg:col-span-5) */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 sm:py-3 lg:py-1">
            <ScrollReveal type="fade-up" delay={0.16} className="space-y-5">

              {/* Badge: "ABOUT US" */}
              <div>
                <span className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE] px-3.5 py-1 rounded-full shadow-2xs">
                  ABOUT US
                </span>
              </div>

              {/* Main Heading with Vibrant Blue Keyword & Underline */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-[#0F172A] tracking-tight leading-[1.25]">
                  Empowering Smarter{' '}
                  <span className="text-[#2563EB] relative inline-block">
                    Financial Decisions
                    {/* Subtle curved underline accent */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-2.5 text-[#2563EB]/80"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 9.5C60 3.5 140 3.5 198 9.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Short blue horizontal underline */}
                <div className="w-12 h-1 bg-[#2563EB] rounded-full mt-2" />
              </div>

              {/* Paragraphs in Clean Dark Navy/Slate Typography */}
              <div className="space-y-3.5 text-sm sm:text-[14.5px] lg:text-[15px] text-[#334155] leading-[1.7] font-normal">
                <p>
                  At FinAdvise, we understand that choosing the right loan can be challenging. Different lenders offer different eligibility criteria, interest rates, repayment terms and documentation requirements.
                </p>
                <p>
                  Our goal is to make this process easier by helping borrowers understand available financing options and connect with suitable lending institutions.
                </p>
                <p>
                  Whether you are planning a personal expense, purchasing a home, expanding a business or funding education, FinAdvise aims to make your borrowing journey simpler and more informed.
                </p>
              </div>
            </ScrollReveal>

            {/* Horizontal Light-Blue Container with Four Service Highlights */}
            <ScrollReveal type="fade-up" delay={0.24} className="mt-6 pt-2">
              <div className="bg-[#F0F7FF] border border-[#D0E4FA] rounded-[18px] p-3.5 sm:p-4 shadow-[0_2px_12px_rgba(37,99,235,0.04)]">
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center divide-y sm:divide-y-0 sm:divide-x divide-blue-200/70 gap-y-3 sm:gap-y-0">
                  {SERVICE_HIGHLIGHTS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center space-x-2.5 sm:space-x-2 xl:space-x-2.5 ${idx === 0 ? 'sm:pl-1' : 'sm:px-2.5 xl:px-3'
                          } ${idx % 2 === 1 ? 'pl-2 sm:pl-2.5' : ''} pt-1.5 sm:pt-0`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-blue-200/80 flex items-center justify-center shrink-0 shadow-2xs text-[#2563EB]">
                          <Icon className="w-4 h-4 text-[#2563EB] stroke-[1.8]" />
                        </div>
                        <div className="leading-tight">
                          <span className="block text-[11px] sm:text-[11.5px] font-bold text-[#0F172A] tracking-tight">
                            {item.title}
                          </span>
                          <span className="block text-[10px] sm:text-[10.5px] font-medium text-[#475569]">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ============================================================== */}
          {/* 3. RIGHT COLUMN: PREMIUM TESTIMONIAL CARD (lg:col-span-3)       */}
          {/* ============================================================== */}
          <div className="lg:col-span-3 flex flex-col">
            <ScrollReveal type="fade-up" delay={0.32} className="h-full">
              <div className="h-full min-h-[380px] sm:min-h-[400px] lg:min-h-[480px] bg-gradient-to-br from-[#0F3268] via-[#0E2E5E] to-[#0A1F3E] text-white rounded-[24px] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shadow-[0_16px_36px_rgba(15,50,104,0.18)] border border-blue-900/60 relative overflow-hidden group">

                {/* Subtle soft cyan/blue atmospheric radial glow in background */}
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/15 transition-colors duration-500"
                />

                {/* Top Section: Header Badge & Quotation Mark */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="text-[#38BDF8] select-none">
                    <Quote className="w-9 h-9 fill-[#38BDF8] text-[#38BDF8] opacity-90" />
                  </div>
                  <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-400/15 border border-cyan-400/25 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Client Commitment
                  </span>
                </div>

                {/* Middle Content: Quote Statement & Key Value Badges */}
                <div className="relative z-10 my-auto py-3 space-y-4">
                  <blockquote className="text-[15px] sm:text-base lg:text-[15.5px] xl:text-base font-semibold leading-[1.65] text-white/95 tracking-tight">
                    "Good financial decisions begin with clear information and the right guidance."
                  </blockquote>

                  {/* Trust & Advisory Value Highlights */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center space-x-2 text-xs text-blue-100/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Unbiased multi-bank comparisons</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-blue-100/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Zero upfront consultation fees</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Divider, Logo Initials, Signature & Trust Metric */}
                <div className="relative z-10 pt-4 border-t border-white/15 space-y-3">
                  <div className="flex items-center space-x-3.5">
                    {/* Circular Logo / Initials */}
                    <div className="w-10 h-10 rounded-full bg-[#1D4ED8] border-2 border-white/20 flex items-center justify-center font-black text-white text-xs tracking-wider shrink-0 shadow-sm">
                      FA
                    </div>
                    {/* Company Name & Professional Tagline */}
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                        FinAdvise Advisory
                      </h4>
                      <p className="text-[11px] text-[#93C5FD] font-medium tracking-normal truncate">
                        Independent Loan Facilitator
                      </p>
                    </div>
                  </div>

                  {/* Subtle Mini Stat Strip at the very bottom */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200/80 font-medium">
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-cyan-400" />
                      <span>20+ Lending Banks</span>
                    </span>
                    <span className="text-cyan-300 font-semibold">100% Free Advisory</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
