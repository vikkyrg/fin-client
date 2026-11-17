import React from 'react';
import { Target, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const MissionVisionSection = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-[#F7FAFD] to-white border-y border-blue-100/60 overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. BACKGROUND GRADIENTS & SUBTLE AMBIENT GRAPHICS               */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Soft Radial Ambient Lighting behind Left & Right Cards */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-br from-blue-100/45 via-sky-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-bl from-emerald-100/35 via-teal-50/25 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle curved background lines */}
        <svg
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] text-blue-100/35"
          viewBox="0 0 1200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150 C 300 50, 600 250, 900 100 C 1050 25, 1150 80, 1200 120"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Equal-Width, Equal-Height Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          
          {/* ============================================================== */}
          {/* 1. LEFT CARD: OUR MISSION                                      */}
          {/* ============================================================== */}
          <ScrollReveal type="fade-up" delay={0.08} className="h-full">
            <div className="h-full bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white rounded-[26px] p-7 sm:p-9 lg:p-10 border border-blue-200/80 shadow-[0_8px_30px_rgba(23,74,139,0.06)] hover:shadow-[0_16px_40px_rgba(23,74,139,0.12)] hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group relative overflow-hidden">
              
              {/* Subtle Atmospheric Top Corner Glow */}
              <div 
                aria-hidden="true" 
                className="absolute -top-12 -right-12 w-44 h-44 bg-blue-200/35 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-300/40 transition-colors duration-500" 
              />

              <div className="relative z-10">
                {/* Large Rounded-Square Icon Container in Dark Blue */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-white border border-blue-200/90 text-[#174A8B] flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(23,74,139,0.08)] group-hover:scale-105 group-hover:bg-blue-50/70 transition-all duration-300">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#174A8B] stroke-[2]" />
                </div>

                {/* Small Label: "CORE PURPOSE" */}
                <div className="flex items-center space-x-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B]">
                    CORE PURPOSE
                  </span>
                </div>

                {/* Heading with "Mission" Highlighted in Vibrant Royal-Blue Gradient */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight mb-4 leading-tight">
                  Our{' '}
                  <span className="bg-gradient-to-r from-[#174A8B] to-[#2563EB] bg-clip-text text-transparent">
                    Mission
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  "To simplify access to financing by helping individuals and businesses understand their loan options through transparent information, responsible guidance and accessible support."
                </p>
              </div>

              {/* Bottom Divider & Feature Line */}
              <div className="relative z-10 mt-8 pt-4 border-t border-blue-200/70 flex items-center space-x-2.5 text-xs sm:text-[13px] font-bold text-[#159B69]">
                <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#159B69] shrink-0" />
                <span>Transparent Information • Responsible Guidance</span>
              </div>

            </div>
          </ScrollReveal>

          {/* ============================================================== */}
          {/* 2. RIGHT CARD: OUR VISION                                      */}
          {/* ============================================================== */}
          <ScrollReveal type="fade-up" delay={0.16} className="h-full">
            <div className="h-full bg-gradient-to-br from-[#ECFDF5] via-[#F8FAF9] to-white rounded-[26px] p-7 sm:p-9 lg:p-10 border border-emerald-200/80 shadow-[0_8px_30px_rgba(21,155,105,0.06)] hover:shadow-[0_16px_40px_rgba(21,155,105,0.12)] hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group relative overflow-hidden">
              
              {/* Subtle Atmospheric Top Corner Glow */}
              <div 
                aria-hidden="true" 
                className="absolute -top-12 -right-12 w-44 h-44 bg-emerald-200/35 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-300/40 transition-colors duration-500" 
              />

              <div className="relative z-10">
                {/* Large Rounded-Square Icon Container in Green */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-white border border-emerald-200/90 text-[#159B69] flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(21,155,105,0.08)] group-hover:scale-105 group-hover:bg-emerald-50/70 transition-all duration-300">
                  <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#159B69] stroke-[2]" />
                </div>

                {/* Small Label: "LONG-TERM HORIZON" */}
                <div className="flex items-center space-x-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#159B69]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#159B69]">
                    LONG-TERM HORIZON
                  </span>
                </div>

                {/* Heading with "Vision" Highlighted in Elegant Green Gradient */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight mb-4 leading-tight">
                  Our{' '}
                  <span className="bg-gradient-to-r from-[#159B69] to-[#10B981] bg-clip-text text-transparent">
                    Vision
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  "To become a trusted loan consultancy platform that empowers people to make informed financial decisions and explore suitable lending opportunities."
                </p>
              </div>

              {/* Bottom Divider & Feature Line */}
              <div className="relative z-10 mt-8 pt-4 border-t border-emerald-200/70 flex items-center space-x-2.5 text-xs sm:text-[13px] font-bold text-[#159B69]">
                <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#159B69] shrink-0" />
                <span>Informed Borrowing • Suitable Opportunities</span>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
