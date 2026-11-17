import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, 
  UserCheck, TrendingUp, Briefcase, Home, Building2, GraduationCap, 
  Coins, Filter, Search, Percent, Clock, DollarSign, Award,
  Landmark, HelpCircle, Check, ChevronDown, PhoneCall, MessageCircle, CarFront
} from 'lucide-react';
import { loanService } from '../services/api';
import { LOAN_PRODUCTS_DATA } from '../utils/loanData';
import EnquiryModal from '../components/EnquiryModal';
import LoansMarketplaceBackground from '../components/LoansMarketplaceBackground';
import WhyBorrowersTrustSection from '../components/WhyBorrowersTrustSection';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

// Loan Card Images cropped exactly from the reference design
import personalLoanImg from '../assets/loans/personal-loan.jpg';
import securitiesLoanImg from '../assets/loans/loan-against-securities.jpg';
import businessLoanImg from '../assets/loans/business-loan.jpg';
import homeLoanImg from '../assets/loans/home-loan.jpg';
import propertyLoanImg from '../assets/loans/loan-against-property.jpg';
import educationLoanImg from '../assets/loans/education-loan.jpg';
import goldLoanImg from '../assets/loans/gold-loan.jpg';
import vehicleLoanImg from '../assets/loans/car.png';
import loansHeroImg from '../assets/loan.png';

const LOAN_IMAGE_MAP = {
  'personal-loan': personalLoanImg,
  'loan-against-securities': securitiesLoanImg,
  'business-loan': businessLoanImg,
  'home-loan': homeLoanImg,
  'loan-against-property': propertyLoanImg,
  'education-loan': educationLoanImg,
  'gold-loan': goldLoanImg,
  'vehicle-loan': vehicleLoanImg
};

const ICON_MAP = {
  'UserCheck': UserCheck,
  'TrendingUp': TrendingUp,
  'Briefcase': Briefcase,
  'Home': Home,
  'Building2': Building2,
  'GraduationCap': GraduationCap,
  'Coins': Coins,
  'CarFront': CarFront
};

const FAQS_LIST = [
  {
    q: 'How does FinAdvise compare loan offers across different banks?',
    a: 'We partner directly with 20+ leading public/private banks and verified NBFCs. Our advisory engine analyzes your credit score, net income, existing EMIs, and property/portfolio profile to match you with lenders providing the lowest interest rate and optimal tenure.'
  },
  {
    q: 'Does submitting a loan enquiry on FinAdvise impact my CIBIL score?',
    a: 'No. Submitting an enquiry or consulting with FinAdvise does not initiate a hard credit bureau pull. A formal hard credit inquiry is only triggered when you formally select a lender and authorize the formal loan application.'
  },
  {
    q: 'Are there any upfront fees or advisory charges for borrowers?',
    a: 'No. FinAdvise operates on a transparent, ₹0 upfront advisory fee model. We do not charge borrowers any advance consultation fees, evaluation charges, or application retainer fees.'
  },
  {
    q: 'What is the standard turnaround time for loan approval and disbursal?',
    a: 'Turnaround depends on the loan category. Unsecured personal loans can be approved digitally within 24 to 48 hours. Secured loans (Home Loans, Loan Against Property) generally take 4 to 7 working days due to legal title checks and technical property valuation.'
  },
  {
    q: 'Can self-employed individuals and business owners apply for these loans?',
    a: 'Yes. We have customized loan products for salaried professionals, self-employed individuals, proprietorships, partnerships, and private limited entities, supported by audited financials and GST records.'
  }
];

const LoansListingPage = () => {
  const [loans, setLoans] = useState(LOAN_PRODUCTS_DATA);
  const [loading, setLoading] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryLoanSlug, setEnquiryLoanSlug] = useState('personal-loan');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    loanService.getAllLoans()
      .then(res => {
        if (res.data?.success && res.data.data?.length > 0) {
          setLoans(res.data.data);
        } else {
          setLoans(LOAN_PRODUCTS_DATA);
        }
      })
      .catch(() => {
        setLoans(LOAN_PRODUCTS_DATA);
      })
      .finally(() => setLoading(false));
  }, []);

  const openEnquiry = (slug) => {
    setEnquiryLoanSlug(slug || 'personal-loan');
    setIsEnquiryOpen(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. SOPHISTICATED HERO SECTION                                  */}
      {/* ============================================================== */}
      <section className="relative pt-10 sm:pt-12 pb-18 sm:pb-24 border-b border-blue-100/70 overflow-hidden">
        {/* Tailored Marketplace Background Component */}
        <LoansMarketplaceBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation: Home > Loans Marketplace */}
          <ScrollReveal type="fade-down" delay={0.04}>
            <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium mb-5 sm:mb-6">
              <Link to="/" className="hover:text-[#174A8B] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#174A8B] font-bold">Loans Marketplace</span>
            </nav>
          </ScrollReveal>

          {/* Two-Column Balanced Hero Composition (55% Left / 45% Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            
            {/* Left Content (lg:col-span-7 ~56%) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Verified Marketplace Rounded Badge */}
              <ScrollReveal type="fade-up" delay={0.08}>
                <div className="inline-flex items-center space-x-2 bg-white/95 border border-blue-200/90 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#174A8B] shadow-xs backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>VERIFIED BANKING PARTNER MARKETPLACE</span>
                </div>
              </ScrollReveal>

              {/* Main Heading with Royal Blue Highlight & Subtle Short Green Accent Underline */}
              <ScrollReveal type="fade-up" delay={0.14}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-black text-[#0B2545] tracking-tight leading-[1.15]">
                    Compare &amp; Apply for Loans at{' '}
                    <span className="text-[#2563EB]">Lowest Market Rates</span>
                  </h1>
                  {/* Subtle short green accent underline */}
                  <div className="w-20 sm:w-24 h-1.5 bg-[#159B69] rounded-full" />
                </div>
              </ScrollReveal>

              {/* Hero Description */}
              <ScrollReveal type="fade-up" delay={0.2}>
                <p className="text-base sm:text-lg lg:text-[18.5px] text-[#2C4164] leading-[1.6] font-normal max-w-[780px]">
                  Explore 7 tailored loan categories with verified banking partner options, transparent processing terms and dedicated advisory assistance.
                </p>
              </ScrollReveal>

              {/* Two Professional CTA Buttons */}
              <ScrollReveal type="fade-up" delay={0.25}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    onClick={() => {
                      const el = document.getElementById('loans-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="h-[52px] sm:h-[56px] px-7 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-[15px] inline-flex items-center justify-center space-x-2 shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.36)] transition-all duration-200 cursor-pointer active:scale-98 group"
                  >
                    <span>Explore Loan Options</span>
                    <ArrowRight className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => openEnquiry('personal-loan')}
                    className="h-[52px] sm:h-[56px] px-7 rounded-[12px] bg-white hover:bg-blue-50/70 border-1.5 border-[#174A8B]/30 hover:border-[#174A8B] text-[#0B2545] font-semibold text-sm sm:text-[15px] inline-flex items-center justify-center space-x-2 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2563EB]" />
                    <span>Talk to an Advisor</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Four Financial Highlights / Benefit Cards (Below Buttons) */}
              <ScrollReveal type="fade-up" delay={0.3}>
                <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  
                  {/* Card 1: RATES */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-[16px] p-3 sm:p-3.5 border border-blue-100 shadow-[0_2px_12px_rgba(23,74,139,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[102px]">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
                        <Percent className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400">RATES</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#0B2545] text-xs sm:text-[13px] block leading-snug">
                        Competitive Rates
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Across 20+ lenders</span>
                    </div>
                  </div>

                  {/* Card 2: TURNAROUND */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-[16px] p-3 sm:p-3.5 border border-blue-100 shadow-[0_2px_12px_rgba(23,74,139,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[102px]">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center shrink-0">
                        <Clock className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400">TURNAROUND</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#0B2545] text-xs sm:text-[13px] block leading-snug">
                        24–48 Hr Sanction
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Subject to lender checks</span>
                    </div>
                  </div>

                  {/* Card 3: ADVISORY */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-[16px] p-3 sm:p-3.5 border border-blue-100 shadow-[0_2px_12px_rgba(23,74,139,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[102px]">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.2]" />
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400">ADVISORY</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#159B69] text-xs sm:text-[13px] block leading-snug">
                        ₹0 Upfront Fee
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Zero platform fee</span>
                    </div>
                  </div>

                  {/* Card 4: NETWORK */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-[16px] p-3 sm:p-3.5 border border-blue-100 shadow-[0_2px_12px_rgba(23,74,139,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[102px]">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
                        <Landmark className="w-3 h-3 stroke-[2.2]" />
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-400">NETWORK</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#0B2545] text-xs sm:text-[13px] block leading-snug">
                        20+ Partners
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Banks &amp; NBFCs</span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>

            </div>

            {/* Right Side: Hero Visual Illustration (lg:col-span-5 ~44%, untouched asset) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
              <ScrollReveal type="fade-left" delay={0.2}>
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none">
                  <img 
                    src={loansHeroImg} 
                    alt="Compare & Apply for Loans" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. LOAN PRODUCT CARDS GRID (7 TAILORED LOAN PRODUCTS)          */}
      {/* ============================================================== */}
      <section id="loans-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-10 scroll-mt-10">
        
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2545] tracking-tight">
              Verified Loan Products ({loans.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Review interest rates, maximum tenure, credit ceilings and connect directly with dedicated advisors.
            </p>
          </div>
        </div>

        {/* Cards Grid: 4 columns on large desktop, 2 on tablet, 1 on mobile */}
        <StaggerContainer 
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
        >
          {loans.map((loan) => {
            const Icon = ICON_MAP[loan.icon] || UserCheck;
            const cardImg = LOAN_IMAGE_MAP[loan.slug] || loan.heroImage || personalLoanImg;

            return (
              <StaggerItem key={loan.slug} className="h-full">
                <div className="bg-white rounded-[18px] border border-blue-100 shadow-[0_4px_20px_rgba(23,74,139,0.05)] hover:shadow-[0_16px_36px_rgba(23,74,139,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                  
                  {/* Top: High Quality Image & Floating Verification Badge */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={cardImg} 
                      alt={loan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                    
                    {/* Small Verified Badge */}
                    <div className="absolute top-3 right-3 inline-flex items-center space-x-1 bg-white/95 backdrop-blur-xs text-[#159B69] border border-emerald-100 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-[#159B69]" />
                      <span>Verified</span>
                    </div>

                    {/* Floating Icon Box + Loan Category Title */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/95 text-[#174A8B] flex items-center justify-center shadow-sm shrink-0">
                        <Icon className="w-4.5 h-4.5 text-[#174A8B] stroke-[2]" />
                      </div>
                      <span className="text-white font-extrabold text-[15px] sm:text-base tracking-tight drop-shadow truncate">
                        {loan.name}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 min-h-[2rem]">
                      {loan.shortDescription}
                    </p>

                    {/* Three-Box Metric Details with Green Icons */}
                    <div className="grid grid-cols-3 gap-1.5 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 text-xs">
                      <div className="min-w-0">
                        <span className="text-[9.5px] text-slate-400 block font-semibold truncate">Rate (p.a.)</span>
                        <span className="font-extrabold text-[#174A8B] text-[11.5px] mt-0.5 block truncate">
                          {loan.indicativeInterestRate?.split(' - ')[0] || 'From 8.4%'}
                        </span>
                      </div>
                      <div className="min-w-0 border-x border-slate-200/60 px-1.5">
                        <span className="text-[9.5px] text-slate-400 block font-semibold truncate">Max Tenure</span>
                        <span className="font-bold text-slate-700 text-[11.5px] mt-0.5 block truncate">
                          {loan.maxTenure?.split(' ')[0] ? `${loan.maxTenure.split(' ')[0]} ${loan.maxTenure.split(' ')[1] || 'Yrs'}` : 'Flexible'}
                        </span>
                      </div>
                      <div className="min-w-0 pl-1">
                        <span className="text-[9.5px] text-slate-400 block font-semibold truncate">Max Amount</span>
                        <span className="font-bold text-slate-700 text-[11.5px] mt-0.5 block truncate">
                          {loan.maxLoanAmount || 'Up to ₹5 Cr'}
                        </span>
                      </div>
                    </div>

                    {/* Important Loan Benefits (2 bullets) with Green Check */}
                    <div className="space-y-1.5 pt-0.5">
                      {loan.keyBenefits?.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start text-[11px] text-slate-600 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#159B69] mr-1.5 shrink-0 mt-0.5" />
                          <span className="truncate">{benefit.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Professional Action Buttons (Identical 50:50 Width, 42px Height, Bottom Pinned) */}
                  <div className="p-4 sm:p-5 pt-0 mt-auto shrink-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Link
                        to={`/loans/${loan.slug}`}
                        className="flex-1 h-[42px] px-2.5 rounded-[10px] bg-white border border-[#2879D8] text-[#123B75] hover:text-[#0F2F5E] hover:bg-[#EAF4FF] hover:border-[#1769E8] font-semibold text-[13px] inline-flex items-center justify-center transition-all duration-200 text-center group/btn truncate shadow-2xs"
                      >
                        <span className="truncate">View Details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1 shrink-0 text-[#2879D8] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </Link>

                      <button
                        onClick={() => openEnquiry(loan.slug)}
                        className="flex-1 h-[42px] px-2.5 rounded-[10px] bg-[#F28C28] hover:bg-[#DC7815] text-white font-semibold text-[13px] inline-flex items-center justify-center transition-all duration-200 text-center shadow-xs hover:shadow-md cursor-pointer active:scale-95 truncate"
                      >
                        <span className="truncate">Enquire</span>
                      </button>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </section>

      {/* ============================================================== */}
      {/* 3. WHY BORROWERS TRUST FINADVISE                               */}
      {/* ============================================================== */}
      <WhyBorrowersTrustSection />

      {/* ============================================================== */}
      {/* 4. APPLICATION ASSISTANCE & ENQUIRY CTA                        */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 relative z-10">
        <ScrollReveal type="fade-up">
          <div className="bg-gradient-to-r from-[#0F3463] via-[#174A8B] to-[#2563EB] rounded-[24px] p-7 sm:p-10 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            {/* Background Graphic Accents */}
            <div className="absolute top-0 right-0 w-80 h-full bg-white/5 pointer-events-none rounded-l-full blur-xl" />

            <div className="space-y-2 max-w-xl text-center md:text-left relative z-10">
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>EXPERT HUMAN CONSULTATION</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                Need Personalized Guidance on Your Loan Eligibility?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                Our accredited loan advisors assess your borrowing capacity and negotiate optimal terms on your behalf without multiple credit bureau hard inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <button
                onClick={() => openEnquiry('personal-loan')}
                className="px-6 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#DC7815] text-white font-bold text-xs sm:text-[13px] shadow-lg shadow-orange-500/25 transition active:scale-95 text-center cursor-pointer"
              >
                Request Free Consultation Call
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-[13px] border border-white/20 transition text-center"
              >
                Contact Advisory Desk
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================== */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS)                           */}
      {/* ============================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 pb-8 relative z-10">
        <ScrollReveal type="fade-up">
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              GOT QUESTIONS?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight mt-3">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              Everything you need to know about comparing, applying, and securing loans through FinAdvise.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_LIST.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-xl border border-blue-100 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0B2545] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-6 h-6 rounded-md bg-blue-50 text-[#174A8B] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#174A8B] text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultLoan={enquiryLoanSlug}
      />

    </div>
  );
};

export default LoansListingPage;
