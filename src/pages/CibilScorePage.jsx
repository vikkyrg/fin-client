import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, CheckCircle2, TrendingUp, AlertTriangle, 
  HelpCircle, ArrowRight, ShieldCheck, Scale, Award, 
  Sparkles, CreditCard, History, PieChart, Layers, 
  ChevronRight, CalendarCheck, Clock, FileText, Check, PhoneCall, Gauge
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import creditHeroImg from '../assets/credit.png';
import AnimatedScoreBar from '../components/AnimatedScoreBar';
import CibilFactorsBreakdown from '../components/CibilFactorsBreakdown';

const SCORE_TIERS = [
  {
    range: '300–549',
    category: 'Poor',
    color: 'red',
    theme: {
      cardBorder: 'border-red-200 hover:border-red-300',
      iconColor: 'text-red-600 bg-red-50',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      divider: 'bg-red-500'
    },
    description: 'High risk of rejection, credit rebuilding and debt consolidation needed before major unsecured applications.'
  },
  {
    range: '550–649',
    category: 'Average',
    color: 'orange',
    theme: {
      cardBorder: 'border-amber-200 hover:border-amber-300',
      iconColor: 'text-amber-600 bg-amber-50',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      divider: 'bg-amber-500'
    },
    description: 'Sanction possible primarily with collateral, strong co-applicant, or slightly higher interest rate spreads.'
  },
  {
    range: '650–749',
    category: 'Good',
    color: 'blue',
    theme: {
      cardBorder: 'border-blue-200 hover:border-blue-300',
      iconColor: 'text-[#174A8B] bg-blue-50',
      badgeBg: 'bg-blue-50 text-[#174A8B] border-blue-200',
      divider: 'bg-blue-600'
    },
    description: 'Eligible for most retail loan products with standard processing times and competitive credit offerings.'
  },
  {
    range: '750–900',
    category: 'Excellent',
    color: 'green',
    theme: {
      cardBorder: 'border-emerald-200 hover:border-emerald-300',
      iconColor: 'text-emerald-700 bg-emerald-50',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      divider: 'bg-emerald-600'
    },
    description: 'A stronger credit profile may improve access to competitive loan terms and suitable lending opportunities.'
  }
];

const FACTORS = [
  {
    weight: '35% Impact',
    weightBadge: 'bg-blue-50 text-[#174A8B] border-blue-200',
    icon: History,
    iconColor: 'text-[#174A8B] bg-blue-50',
    title: 'Payment History',
    summary: 'Timely repayments of credit card bills, overdraft facilities, and active EMI obligations on or before their due dates.',
    tip: 'Even a single 30-day default or delayed payment leaves a negative imprint on your bureau record.'
  },
  {
    weight: '30% Impact',
    weightBadge: 'bg-orange-50 text-[#F58A22] border-orange-200',
    icon: CreditCard,
    iconColor: 'text-[#F58A22] bg-orange-50',
    title: 'Credit Utilization Ratio (CUR)',
    summary: 'The proportion of your revolving credit limits utilized each billing cycle across all active credit cards.',
    tip: 'Maintaining utilization below 30% signals disciplined budgeting and prevents perceived credit hunger.'
  },
  {
    weight: '15% Impact',
    weightBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Clock,
    iconColor: 'text-emerald-600 bg-emerald-50',
    title: 'Credit Age & History',
    summary: 'The longevity and vintage of your active credit accounts and your demonstrated repayment consistency over time.',
    tip: 'Older accounts with healthy payment histories demonstrate maturity and financial resilience to lenders.'
  },
  {
    weight: '20% Impact',
    weightBadge: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: PieChart,
    iconColor: 'text-purple-600 bg-purple-50',
    title: 'Credit Mix & Hard Enquiries',
    summary: 'A healthy equilibrium between secured credit (home/auto) and unsecured credit, along with minimal hard checks.',
    tip: 'Applying to multiple banks in short spans creates multiple hard enquiries, pulling your score down temporarily.'
  }
];

const HABITS = [
  {
    step: '01',
    title: 'Set up automatic debits for card dues & EMIs',
    description: 'Automate full statement dues or recurring installments via NACH/e-mandate to eliminate human forgetfulness and late payment penalties.'
  },
  {
    step: '02',
    title: 'Keep seasoned credit cards active',
    description: 'Closing your oldest credit cards shrinks your overall credit age and drops total available limit, triggering an artificial spike in utilization.'
  },
  {
    step: '03',
    title: 'Avoid multiple simultaneous loan applications',
    description: 'Each formal loan application prompts a bureau hard check. Submit applications strategically through an advisory desk instead of mass applying.'
  },
  {
    step: '04',
    title: 'Review your credit report annually for discrepancies',
    description: 'Inspect bureau data for clerical errors, incorrectly flagged active dues, or identity mismatches and raise disputes promptly with TransUnion CIBIL.'
  }
];

const CibilScorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFBFD] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. CIBIL HERO SECTION - PREMIUM FINTECH TWO-COLUMN WITH SPEEDOMETER GAUGE */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F2F7FD] via-[#F8FBFE] to-[#FAFBFD] pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-blue-100/60">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-0" />
        
        {/* Dotted Pattern Decorator (Top-Right) */}
        <svg className="absolute top-6 right-8 w-44 h-44 opacity-25 hidden md:block" viewBox="0 0 160 160" fill="none">
          <defs>
            <pattern id="cibil-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.5" fill="#174A8B" />
            </pattern>
          </defs>
          <rect width="160" height="160" fill="url(#cibil-dots)" />
        </svg>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium mb-6">
            <Link to="/" className="hover:text-[#174A8B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#174A8B] font-bold">Credit Bureau Awareness</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Content & Dual CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Badge */}
              <ScrollReveal type="fade-down" delay={0.05}>
                <div className="inline-flex items-center space-x-2 bg-white/95 border border-blue-200/90 px-3.5 py-1.5 rounded-full shadow-xs">
                  <span className="w-4 h-4 rounded-full bg-[#159B69] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#174A8B] uppercase tracking-wider">
                    CREDIT SCORE AWARENESS
                  </span>
                </div>
              </ScrollReveal>

              {/* Main Heading with Royal Blue Highlight */}
              <ScrollReveal type="fade-up" delay={0.1}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#0B2545] tracking-tight leading-[1.15]">
                    Understand Your Credit Score.{' '}
                    <span className="text-[#2563EB] relative inline-block">
                      Unlock Better Loan Opportunities.
                      {/* Subtle green curved underline */}
                      <svg 
                        className="absolute -bottom-2 left-0 w-full h-2.5 text-[#159B69] overflow-visible pointer-events-none"
                        viewBox="0 0 260 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10C65 3.5 185 2 258 8" stroke="#159B69" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h1>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal type="fade-up" delay={0.16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-[680px]">
                  Your credit score plays an important role in your loan eligibility, interest rates and financial opportunities. Understand how it works and learn how to build a stronger credit profile.
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal type="fade-up" delay={0.22}>
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="#cibil-overview"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] font-bold text-sm text-white bg-[#F58A22] hover:bg-[#E07914] transition-all duration-200 shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer"
                  >
                    <span>Explore Credit Score</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>

                  <Link
                    to="/loans"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] font-bold text-sm text-[#174A8B] bg-white border-1.5 border-[#174A8B] hover:bg-blue-50/60 transition-all duration-200 active:scale-95 shadow-xs"
                  >
                    <Layers className="w-4 h-4 mr-2 text-[#174A8B]" />
                    <span>Explore Loan Options</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* 3 Quick Micro Highlights */}
              <ScrollReveal type="fade-up" delay={0.28}>
                <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-600 border-t border-slate-200/70 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159B69]" />
                    <span>300–900 Benchmark Scale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159B69]" />
                    <span>RBI-Authorized Bureaus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159B69]" />
                    <span>Zero Advisory Markups</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column: High-End Credit Score Illustration Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <ScrollReveal type="fade-left" delay={0.15}>
                <div className="relative w-full max-w-[460px] mx-auto">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-emerald-100/35 to-amber-100/30 rounded-[30px] blur-2xl transform scale-95 pointer-events-none" />
                  
                  {/* Image Display */}
                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_16px_45px_rgba(23,74,139,0.08)] border border-blue-100/80 bg-white">
                    <img 
                      src={creditHeroImg} 
                      alt="Credit Health Gauge" 
                      className="w-full h-auto object-contain block select-none"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPACT ELEGANT EDUCATIONAL DISCLAIMER BANNER                          */}
      {/* ========================================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <ScrollReveal type="fade-up" delay={0.08}>
          <div className="bg-[#FFFBEB] border border-amber-300/80 rounded-[18px] p-4 sm:p-5 shadow-[0_4px_16px_rgba(217,119,6,0.06)] flex items-start space-x-3.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 mt-0.5">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
            </div>
            <div className="text-xs sm:text-[13px] text-amber-950 leading-relaxed">
              <strong className="font-extrabold text-amber-900">Educational &amp; Informational Purpose Only: </strong>
              This page provides independent educational guidance on how credit scores work in India. FinAdvise is a certified loan advisory firm and does not pull, store, or sell credit bureau reports, nor do we charge fees to artificially "repair" legitimate bureau-reported repayment records.
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ========================================================================= */}
      {/* 3. WHAT IS A CIBIL SCORE? + 4 VISUAL SCORE RANGE CLASSIFICATION INFOGRAPHIC */}
      {/* ========================================================================= */}
      <section id="cibil-overview" className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F6F9FD]/60 to-white border-b border-slate-100 relative overflow-hidden">
        
        {/* Soft background glow accents */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-14 relative z-10">
          
          {/* Top Educational Section */}
          <div className="max-w-4xl text-left space-y-4 sm:space-y-5">
            <ScrollReveal type="fade-down" delay={0.05}>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-xs">
                FOUNDATIONAL KNOWLEDGE
              </span>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#0B2545] tracking-tight leading-[1.14]">
                What is a{' '}
                <span className="text-[#2563EB] relative inline-block whitespace-nowrap">
                  CIBIL Score?
                  {/* Small green accent underline */}
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-2.5 text-[#159B69] overflow-visible pointer-events-none"
                    viewBox="0 0 260 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10C65 3.5 185 2 258 8" stroke="#159B69" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.16}>
              <div className="space-y-3.5 text-base sm:text-lg lg:text-[18.5px] text-slate-600 leading-[1.65] font-normal">
                <p>
                  A CIBIL score is a 3-digit numerical summary of your credit history, rating your creditworthiness on an official scale of <strong className="text-slate-900 font-bold">300 to 900</strong>. It is formulated by TransUnion CIBIL, one of four RBI-authorized credit bureaus in India (along with Experian, Equifax, and CRIF High Mark), using information reported monthly by banks and NBFCs.
                </p>
                <p>
                  Lenders inspect this rating during retail loan underwriting to evaluate past default risks, calculate maximum repayment capacity, and calibrate customized interest rate tiers.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Classification Section: Large Rounded Rectangular Panel */}
          <ScrollReveal type="fade-up" delay={0.12}>
            <div className="bg-gradient-to-br from-[#F5F9FE] via-[#FFFFFF] to-[#EFF6FD] rounded-[24px] border border-blue-100/90 shadow-[0_12px_36px_rgba(23,74,139,0.06)] p-6 sm:p-8 space-y-7">
              
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-blue-100/60">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                    <Layers className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0B2545] tracking-tight">
                    Official Credit Score Classification Tiers
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 self-start sm:self-auto">
                  Standard Indian Banking Norms
                </span>
              </div>

              {/* Interactive Animated Credit Score Progression Scale */}
              <AnimatedScoreBar targetScore={785} />

              {/* 4 Classification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {SCORE_TIERS.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`bg-white rounded-[20px] p-5 sm:p-6 border ${tier.theme.cardBorder} shadow-[0_4px_16px_rgba(23,74,139,0.04)] hover:shadow-[0_8px_24px_rgba(23,74,139,0.08)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Top Header: Gauge Icon + Category Name (left) & Score Range (right) */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 rounded-lg ${tier.theme.iconColor} flex items-center justify-center shrink-0`}>
                            <Gauge className="w-4 h-4" />
                          </div>
                          <span className="text-base font-black text-slate-900">
                            {tier.category}
                          </span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-md text-xs font-black border ${tier.theme.badgeBg}`}>
                          {tier.range}
                        </span>
                      </div>

                      {/* Thin Colored Accent Divider */}
                      <div className={`w-full h-1 rounded-full ${tier.theme.divider} mb-3.5 opacity-90`} />

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. KEY FACTORS AFFECTING YOUR CREDIT SCORE                                */}
      {/* ========================================================================= */}
      <CibilFactorsBreakdown />

      {/* ========================================================================= */}
      {/* 5. PROVEN HABITS TO IMPROVE YOUR CREDIT SCORE                             */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-[#F5F9FE] via-[#FFFFFF] to-[#EFF6FD] border-b border-blue-100/70 overflow-hidden">
        
        {/* Abstract Curved Glowing Shapes */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/40 via-teal-100/25 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-100/50 via-indigo-50/30 to-transparent blur-3xl pointer-events-none" />
        
        {/* Soft Background Radial Rings */}
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full border border-blue-200/30 opacity-40 pointer-events-none" />
        <div className="absolute -top-32 right-16 w-80 h-80 rounded-full border border-emerald-200/30 opacity-40 pointer-events-none" />

        {/* Decorative Dotted Grid Patterns */}
        <svg 
          className="absolute top-10 right-8 w-36 h-36 opacity-20 hidden md:block pointer-events-none" 
          viewBox="0 0 140 140" 
          fill="none"
        >
          <defs>
            <pattern id="habits-dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#174A8B" />
            </pattern>
          </defs>
          <rect width="140" height="140" fill="url(#habits-dots-tr)" />
        </svg>

        <svg 
          className="absolute bottom-8 left-8 w-32 h-32 opacity-20 hidden md:block pointer-events-none" 
          viewBox="0 0 120 120" 
          fill="none"
        >
          <defs>
            <pattern id="habits-dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#10B981" />
            </pattern>
          </defs>
          <rect width="120" height="120" fill="url(#habits-dots-bl)" />
        </svg>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#159B69] bg-emerald-50/90 border border-emerald-200 px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(21,155,105,0.06)]">
                  BEST PRACTICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B2545] tracking-tight leading-[1.18]">
                Proven Habits to Build &amp; Maintain a Strong Credit Score
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
                Improving a bureau score is not instantaneous, but adopting disciplined credit hygiene yields steady, visible improvement within 3 to 6 billing cycles.
              </p>
              
              <div className="p-5 sm:p-6 rounded-[22px] bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border border-blue-100/90 shadow-[0_4px_16px_rgba(23,74,139,0.04)] space-y-2.5">
                <div className="flex items-center space-x-2 text-xs font-black text-[#174A8B]">
                  <Scale className="w-4 h-4 text-[#2563EB]" />
                  <span>The 40–50% DTI Golden Rule</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Before applying for any new loan, ensure your total monthly EMI obligations across all active debt facilities do not exceed 40% to 50% of your net monthly take-home salary.
                </p>
              </div>
            </div>

            {/* Right Checklist Cards */}
            <div className="lg:col-span-7 space-y-4">
              {HABITS.map((habit, idx) => (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-xs rounded-[20px] p-5 sm:p-6 border border-blue-100/80 hover:border-emerald-300 shadow-[0_4px_16px_rgba(23,74,139,0.04)] hover:shadow-[0_12px_28px_rgba(23,74,139,0.09)] hover:-translate-y-1 transition-all duration-200 flex items-start space-x-4 sm:space-x-5 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[14px] bg-emerald-50 text-[#159B69] border border-emerald-200/90 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 shadow-xs group-hover:scale-105 group-hover:bg-emerald-100/80 transition-all duration-200">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-[17px] font-black text-[#0B2545] tracking-tight group-hover:text-[#2563EB] transition-colors duration-200">
                      {habit.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-slate-600 leading-[1.65] font-normal">
                      {habit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL PREMIUM DARK NAVY CTA SECTION                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#FAFBFD]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#133E68] to-[#0A223E] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(11,37,69,0.25)]">
            
            {/* Background Decorative Rings */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="inline-flex items-center space-x-2 text-[11px] font-extrabold tracking-wider uppercase text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>EXPERT FINANCIAL ADVISORY</span>
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Explore Better Loan Opportunities?
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
                Understand your credit profile and explore suitable financing options with FinAdvise. Our advisors compare options across 20+ partner banks to find competitive rates matching your eligibility.
              </p>

              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <Link
                  to="/loans"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] font-bold text-sm text-white bg-[#F58A22] hover:bg-[#E07914] transition-all duration-200 shadow-md shadow-orange-500/30 active:scale-95 cursor-pointer"
                >
                  <span>Explore Loan Options</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-blue-200" />
                  <span>Contact Our Team</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default CibilScorePage;
