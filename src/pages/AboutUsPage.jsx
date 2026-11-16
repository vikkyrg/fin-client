import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Landmark, 
  FileText, Handshake, Zap, Target, Compass, Sparkles, Clock, 
  UserCheck, Quote, ChevronDown, Check, Building2, Eye, Flag, Mountain
} from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { loanService } from '../services/api';

// Professional Imagery
import aboutHeroBg from '../assets/about.png';
import aboutMobileBg from '../assets/about-mobile.png';
import corporateOfficeImg from '../assets/corporate-building.jpg';

// Loan Category Images
import personalLoanImg from '../assets/loans/personal-loan.jpg';
import securitiesLoanImg from '../assets/loans/loan-against-securities.jpg';
import businessLoanImg from '../assets/loans/business-loan.jpg';
import homeLoanImg from '../assets/loans/home-loan.jpg';
import propertyLoanImg from '../assets/loans/loan-against-property.jpg';
import educationLoanImg from '../assets/loans/education-loan.jpg';
import goldLoanImg from '../assets/loans/gold-loan.jpg';

const LOAN_IMAGE_MAP = {
  'personal-loan': personalLoanImg,
  'loan-against-securities': securitiesLoanImg,
  'business-loan': businessLoanImg,
  'home-loan': homeLoanImg,
  'loan-against-property': propertyLoanImg,
  'education-loan': educationLoanImg,
  'gold-loan': goldLoanImg
};

const LOAN_PORTFOLIO_DATA = [
  {
    slug: 'personal-loan',
    name: 'Personal Loan',
    description: 'Financing for personal expenses and financial needs.',
    indicativeRate: 'From 10.49% p.a.',
    tenure: '12 to 72 Months'
  },
  {
    slug: 'loan-against-securities',
    name: 'Loan Against Securities',
    description: 'Explore credit options against eligible financial investments.',
    indicativeRate: 'From 9.00% p.a.',
    tenure: 'Renewable 12-36 Mos'
  },
  {
    slug: 'business-loan',
    name: 'Business Loan',
    description: 'Financing options for business expansion and working capital.',
    indicativeRate: 'From 11.25% p.a.',
    tenure: 'Up to 7 Years'
  },
  {
    slug: 'home-loan',
    name: 'Home Loan',
    description: 'Explore financing for purchasing or constructing a home.',
    indicativeRate: 'From 8.40% p.a.',
    tenure: 'Up to 30 Years'
  },
  {
    slug: 'loan-against-property',
    name: 'Loan Against Property',
    description: 'Explore secured financing against eligible residential or commercial property.',
    indicativeRate: 'From 9.15% p.a.',
    tenure: 'Up to 15 Years'
  },
  {
    slug: 'education-loan',
    name: 'Education Loan',
    description: 'Financial assistance for eligible higher education expenses.',
    indicativeRate: 'From 9.50% p.a.',
    tenure: 'Up to 15 Years'
  },
  {
    slug: 'gold-loan',
    name: 'Gold Loan',
    description: 'Explore financing against eligible gold jewellery.',
    indicativeRate: 'From 8.85% p.a.',
    tenure: '3 to 24 Months'
  }
];

const WHAT_WE_DO_CARDS = [
  {
    title: 'Multi-Bank Loan Comparison',
    description: 'Explore financing options from different lending institutions and understand the available terms.',
    icon: Landmark
  },
  {
    title: 'Documentation Guidance',
    description: 'Get assistance understanding and organising the documents required for your loan application.',
    icon: FileText
  },
  {
    title: 'Personalised Consultation',
    description: 'Receive guidance based on your financial requirements, eligibility and repayment capacity.',
    icon: Handshake
  },
  {
    title: 'Simplified Enquiry Process',
    description: 'Submit your requirements through a simple enquiry process and receive assistance from our team.',
    icon: Zap
  }
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Trusted Guidance',
    description: 'Understand available financing options with clear and helpful information.'
  },
  {
    title: 'Multiple Lending Options',
    description: 'Explore loan products from different banks and financial institutions.'
  },
  {
    title: 'Personalised Solutions',
    description: 'Explore options based on your financial needs and eligibility.'
  },
  {
    title: 'Documentation Assistance',
    description: 'Get guidance in preparing and organising application documents.'
  },
  {
    title: 'Time-Saving Process',
    description: 'Simplify the initial loan discovery and enquiry process.'
  },
  {
    title: 'Responsible Borrowing',
    description: 'Understand repayment terms and make informed borrowing decisions.'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Loan Enquiry',
    description: 'Choose your loan category and share your financial requirements through our enquiry form.',
    borderColor: 'border-b-sky-400',
    numberColor: 'text-sky-500'
  },
  {
    step: '02',
    title: 'Understand Your Requirements',
    description: 'Our team reviews your enquiry and helps you understand relevant financing options.',
    borderColor: 'border-b-[#159B69]',
    numberColor: 'text-[#159B69]'
  },
  {
    step: '03',
    title: 'Explore Lending Options',
    description: 'Review suitable options and receive guidance about lender requirements and documentation.',
    borderColor: 'border-b-[#F28C28]',
    numberColor: 'text-[#F28C28]'
  },
  {
    step: '04',
    title: 'Application Assistance',
    description: 'Receive support during the application process with the selected lending institution.',
    borderColor: 'border-b-purple-500',
    numberColor: 'text-purple-600'
  }
];

const AboutUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLoanForModal, setSelectedLoanForModal] = useState('personal-loan');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openEnquiry = (loanType = 'personal-loan') => {
    setSelectedLoanForModal(loanType);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      
      {/* ============================================================== */}
      {/* SECTION 1: ABOUT US HERO BANNER - 2-COLUMN LEFT ALIGNED LAYOUT */}
      {/* ============================================================== */}
      <section className="relative w-full overflow-hidden border-b border-blue-100/70">
        {/* Desktop Background: about.png positioned on the right and center */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-right lg:bg-center"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        />

        {/* Mobile Background: full cover from the top so about-mobile.png fills the entire section without empty white gap */}
        <div 
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-top pointer-events-none"
          style={{ backgroundImage: `url(${aboutMobileBg})` }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-72 sm:pb-80 md:py-16 lg:py-20 w-full relative z-10 min-h-[620px] md:min-h-[580px] lg:min-h-[660px] flex items-start md:items-center">
          
          {/* Left Column Content (55% on desktop / tablet) */}
          <div className="w-full md:max-w-[55%] lg:max-w-[56%] xl:max-w-[54%] space-y-5 sm:space-y-6 text-left">
            
            {/* Breadcrumb Navigation: Fade Down */}
            <ScrollReveal type="fade-down" delay={0.05}>
              <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                <Link to="/" className="hover:text-[#174A8B] transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#174A8B] font-bold">About Us</span>
              </nav>
            </ScrollReveal>

            {/* Small Label: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.1}>
              <div>
                <span className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200/90 px-4 py-1.5 rounded-full shadow-xs">
                  ABOUT FINADVISE
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading with Orange Bar: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.16}>
              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#174A8B] tracking-tight leading-[1.15]">
                  Your Trusted Gateway to Smarter Financing
                </h1>
                <div className="w-20 h-1.5 bg-[#F28C28] rounded-full"></div>
              </div>
            </ScrollReveal>

            {/* Description: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.22}>
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-700 leading-relaxed font-normal max-w-xl">
                FinAdvise is a loan consultancy and financial services facilitation platform dedicated to helping individuals and businesses explore suitable financing solutions. We simplify the borrowing journey through clear information, personalised guidance and assistance with loan applications.
              </p>
            </ScrollReveal>

            {/* Feature Cards in One Horizontal Row: Staggered Fade Up */}
            <ScrollReveal type="fade-up" delay={0.28}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                <div className="flex items-center space-x-3 bg-white/95 border border-blue-100 rounded-xl p-3.5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#159B69]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#174A8B] leading-tight">Expert Financial Guidance</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Unbiased borrower advisory</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/95 border border-blue-100 rounded-xl p-3.5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5 text-[#159B69]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#174A8B] leading-tight">Multiple Lending Options</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Public/private banks &amp; NBFCs</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Button: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.34}>
              <div className="pt-2">
                <Link
                  to="/loans"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer"
                >
                  <span>Explore Our Loans</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: COMPANY OVERVIEW (3-COLUMN LAYOUT)                  */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Desktop proportions: Left 30%, Center 43%, Right 27% with 24px gaps (gap-6) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            
            {/* 1. LEFT COLUMN – CORPORATE IMAGE (30% on desktop) */}
            <div className="w-full lg:w-[30%] flex flex-col shrink-0">
              <ScrollReveal type="fade-left" className="h-full">
                <div className="relative h-[340px] sm:h-[360px] lg:h-[380px] w-full rounded-[20px] overflow-hidden border border-blue-100/90 shadow-[0_8px_30px_rgba(23,74,139,0.06)] group">
                  <img
                    src={corporateOfficeImg}
                    alt="FinAdvise Corporate Office Building"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle dark blue gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2242]/90 via-[#0A2242]/30 to-transparent flex items-end p-5 sm:p-6">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block">
                        MODERN ARCHITECTURE
                      </span>
                      <h4 className="text-sm sm:text-[15px] font-bold text-white leading-snug">
                        FinAdvise Corporate Facilitation Desk
                      </h4>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 2. CENTER COLUMN – COMPANY CONTENT (43% on desktop) */}
            <div className="w-full lg:w-[43%] flex flex-col justify-between space-y-6 text-left shrink-0">
              <ScrollReveal type="fade-up" delay={0.1}>
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
                    COMPANY OVERVIEW
                  </span>
                  
                  <div className="space-y-2 mb-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#174A8B] tracking-tight leading-[1.2]">
                      Empowering Smarter Financial Decisions
                    </h2>
                    <div className="w-16 h-1 bg-[#F28C28] rounded-full"></div>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-[1.7] font-normal max-w-xl">
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
                </div>

                {/* Three Compact Feature Indicators */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="px-3 py-2.5 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-center space-x-2.5 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#159B69] shrink-0" />
                    <span className="text-xs font-bold text-[#174A8B] leading-tight">Personalised Guidance</span>
                  </div>

                  <div className="px-3 py-2.5 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-center space-x-2.5 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#159B69] shrink-0" />
                    <span className="text-xs font-bold text-[#174A8B] leading-tight">Transparent Process</span>
                  </div>

                  <div className="px-3 py-2.5 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-center space-x-2.5 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#159B69] shrink-0" />
                    <span className="text-xs font-bold text-[#174A8B] leading-tight">Multiple Loan Solutions</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 3. RIGHT COLUMN – QUOTE CARD (27% on desktop) */}
            <div className="w-full lg:w-[27%] flex flex-col shrink-0">
              <ScrollReveal type="fade-right" delay={0.2} className="h-full">
                <div className="h-full bg-gradient-to-br from-[#174A8B] via-[#143F77] to-[#0F3463] text-white rounded-[20px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(23,74,139,0.15)] border border-blue-900/60 relative overflow-hidden">
                  {/* Decorative background glow circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Large decorative quotation mark in green */}
                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-black text-[#159B69] leading-none block font-serif">
                      “
                    </span>
                  </div>

                  {/* White Quote Typography */}
                  <blockquote className="text-base sm:text-lg lg:text-[19px] font-bold leading-relaxed tracking-tight text-white my-auto">
                    "Good financial decisions begin with clear information and the right guidance."
                  </blockquote>

                  {/* Thin Separator Line & Professional Author Footer */}
                  <div className="mt-6 pt-4 border-t border-white/15 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-extrabold text-emerald-300 text-xs shrink-0">
                      FA
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-tight">FinAdvise Advisory</p>
                      <p className="text-[11px] text-blue-200">Independent Loan Facilitator</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: WHAT WE DO                                          */}
      {/* ============================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#F7FAFE] via-[#FBFDFF] to-white border-y border-blue-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal type="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200/80 px-4 py-1.5 rounded-full shadow-xs">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#174A8B] mt-3 tracking-tight">
                Making Your Loan Journey Simpler
              </h2>
              <div className="w-16 h-1 bg-[#159B69] rounded-full mx-auto mt-2.5"></div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
                We provide guidance and assistance across multiple financing requirements.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {WHAT_WE_DO_CARDS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-blue-100/90 shadow-[0_4px_24px_rgba(23,74,139,0.04)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#159B69]" />
                    </div>
                    <h3 className="font-bold text-[#174A8B] text-base sm:text-[17px] mb-2 leading-snug group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: OUR MISSION AND VISION (WIDE PANELS)               */}
      {/* ============================================================== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* OUR MISSION */}
            <ScrollReveal type="fade-left" className="h-full">
              <div className="h-full bg-gradient-to-br from-blue-50/80 via-[#F3F8FD] to-white rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-[0_6px_28px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_36px_rgba(23,74,139,0.09)] transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200/80 text-[#174A8B] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Target className="w-7 h-7 text-[#174A8B]" />
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#159B69]"></span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B]">Core Purpose</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#174A8B] tracking-tight mb-4">
                    Our Mission
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    "To simplify access to financing by helping individuals and businesses understand their loan options through transparent information, responsible guidance and accessible support."
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-blue-100 flex items-center space-x-2 text-xs font-bold text-[#159B69]">
                  <CheckCircle2 className="w-4 h-4 text-[#159B69]" />
                  <span>Transparent Information • Responsible Guidance</span>
                </div>
              </div>
            </ScrollReveal>

            {/* OUR VISION */}
            <ScrollReveal type="fade-right" delay={0.15} className="h-full">
              <div className="h-full bg-gradient-to-br from-emerald-50/50 via-[#F5FAF8] to-white rounded-3xl p-8 sm:p-10 border border-emerald-200/70 shadow-[0_6px_28px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_36px_rgba(23,74,139,0.09)] transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 text-[#159B69] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Compass className="w-7 h-7 text-[#159B69]" />
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#F28C28]"></span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B]">Long-Term Horizon</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#174A8B] tracking-tight mb-4">
                    Our Vision
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    "To become a trusted loan consultancy platform that empowers people to make informed financial decisions and explore suitable lending opportunities."
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center space-x-2 text-xs font-bold text-[#174A8B]">
                  <CheckCircle2 className="w-4 h-4 text-[#159B69]" />
                  <span>Informed Borrowing • Suitable Opportunities</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: WHY CHOOSE FINADVISE? (3x2 BENEFIT GRID)           */}
      {/* ============================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFD] to-white border-y border-blue-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal type="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200 px-4 py-1.5 rounded-full shadow-xs">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#174A8B] mt-3 tracking-tight">
                Why Choose FinAdvise?
              </h2>
              <div className="w-16 h-1 bg-[#F28C28] rounded-full mx-auto mt-2.5"></div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
                A supportive partner throughout your loan discovery and application journey.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <StaggerItem
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-blue-100/80 shadow-[0_4px_20px_rgba(23,74,139,0.04)] hover:shadow-[0_10px_30px_rgba(23,74,139,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100 flex items-center justify-center mb-4 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#159B69]" />
                </div>
                <h3 className="font-bold text-[#174A8B] text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: OUR LOAN PORTFOLIO (7 CARDS BALANCED 4 + 3)        */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50/80 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-xs">
                OUR LOAN SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#174A8B] mt-3 tracking-tight">
                Financing Solutions for Every Need
              </h2>
              <div className="w-20 h-1 bg-[#159B69] rounded-full mx-auto mt-2.5"></div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
                Explore loan categories designed for different personal, professional and financial requirements.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid: Row 1 has 4 cards, Row 2 has 3 equal-width centered cards */}
          {(() => {
            const row1 = LOAN_PORTFOLIO_DATA.slice(0, 4);
            const row2 = LOAN_PORTFOLIO_DATA.slice(4, 7);

            const renderLoanCard = (loan) => {
              const cardImage = LOAN_IMAGE_MAP[loan.slug];

              return (
                <div
                  key={loan.slug}
                  className="bg-white rounded-3xl border border-blue-100/90 shadow-[0_8px_30px_rgb(23,74,139,0.06)] hover:shadow-[0_16px_40px_rgb(23,74,139,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Loan Image */}
                    <div className="relative w-full h-44 sm:h-48 bg-gradient-to-b from-blue-50/60 to-slate-50/30 overflow-hidden flex items-center justify-center shrink-0">
                      {cardImage ? (
                        <img 
                          src={cardImage} 
                          alt={loan.name} 
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-blue-50 flex items-center justify-center text-[#174A8B]">
                          <Landmark className="w-10 h-10 text-[#174A8B]/40" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 pb-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#174A8B] tracking-tight group-hover:text-blue-900 transition-colors">
                          {loan.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                          {loan.description}
                        </p>
                      </div>

                      {/* Details: Rate & Tenure with Green Icons */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center text-slate-600 font-medium">
                            <span className="w-5 h-5 rounded-md bg-emerald-50 text-[#159B69] flex items-center justify-center mr-2 text-[10px] font-black shrink-0">
                              %
                            </span>
                            Rate
                          </span>
                          <span className="font-extrabold text-[#174A8B]">
                            {loan.indicativeRate}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center text-slate-600 font-medium">
                            <span className="w-5 h-5 rounded-md bg-emerald-50 text-[#159B69] flex items-center justify-center mr-2 shrink-0">
                              <Clock className="w-3 h-3 text-[#159B69]" />
                            </span>
                            Tenure
                          </span>
                          <span className="font-semibold text-slate-800 text-right">
                            {loan.tenure}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-3 shrink-0">
                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                      <Link
                        to={`/loans/${loan.slug}`}
                        className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-white border border-blue-200 text-[#174A8B] font-bold text-xs hover:bg-blue-50/70 hover:border-[#174A8B] transition-all text-center"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </Link>

                      <button
                        onClick={() => openEnquiry(loan.slug)}
                        className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#F28C28] hover:bg-[#DC7815] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all text-center cursor-pointer active:scale-95"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            };

            return (
              <div className="space-y-6 sm:space-y-7">
                {/* Row 1: 4 Cards on Desktop */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
                  {row1.map((loan) => (
                    <StaggerItem key={loan.slug}>
                      {renderLoanCard(loan)}
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Row 2: 3 Cards Centered on Desktop with EXACT SAME CARD WIDTH as Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="hidden lg:block lg:col-span-4">
                    <StaggerContainer className="grid grid-cols-3 gap-6 max-w-[calc(75%-0.375rem)] mx-auto" staggerDelay={0.08}>
                      {row2.map((loan) => (
                        <StaggerItem key={loan.slug}>
                          {renderLoanCard(loan)}
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                  {/* Tablet and Mobile view for Row 2 cards */}
                  <div className="contents lg:hidden">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.08}>
                      {row2.map((loan) => (
                        <StaggerItem key={loan.slug}>
                          {renderLoanCard(loan)}
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: HOW IT WORKS (4 CONNECTED PROCESS CARDS)            */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F6FAFE] to-white border-y border-blue-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200/80 px-4 py-1.5 rounded-full shadow-xs">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#174A8B] mt-3 tracking-tight">
                Our Simple 4-Step Loan Assistance Process
              </h2>
              <div className="w-20 h-1 bg-[#F28C28] rounded-full mx-auto mt-2.5"></div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
                A clear journey from initial enquiry to loan application assistance.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" staggerDelay={0.1}>
            {PROCESS_STEPS.map((step, idx) => (
              <StaggerItem key={idx} className="relative group">
                <div className={`h-full bg-white rounded-[18px] p-6 sm:p-7 border border-blue-100/90 border-b-4 ${step.borderColor} shadow-[0_4px_24px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}>
                  <div>
                    <span className={`text-3xl sm:text-4xl font-black ${step.numberColor} tracking-tight font-sans block mb-4`}>
                      {step.step}
                    </span>

                    <h3 className="font-bold text-[#174A8B] text-base sm:text-lg mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow for desktop (not on last card) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-blue-200 shadow-sm items-center justify-center text-slate-400 pointer-events-none">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Compliance Disclaimer Note */}
          <ScrollReveal type="fade-up" delay={0.2}>
            <div className="mt-12 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-slate-600 text-center max-w-2xl mx-auto">
              <span className="font-bold text-[#174A8B]">Please Note:</span> FinAdvise is an independent loan facilitation platform. Loan approval, credit limits, interest rates and disbursals are determined solely at the discretion of respective lending institutions.
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: FINAL CTA BANNER                                    */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal type="zoom-in">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#174A8B] via-[#103D75] to-[#0A2E5C] text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl">
              
              {/* Subtle decorative wave / circles */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-5">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 bg-white/10 px-3.5 py-1 rounded-full">
                  GET IN TOUCH
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
                  Ready to Explore the Right Loan for You?
                </h2>

                <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
                  Get guidance, compare available options and take the next step towards your financial goals with FinAdvise.
                </p>

                <div className="pt-3">
                  <Link
                    to="/loans"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-lg shadow-orange-500/30 active:scale-95 cursor-pointer"
                  >
                    <span>Explore Our Loans &rarr;</span>
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enquiry Modal Component */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialLoanType={selectedLoanForModal}
      />

    </div>
  );
};

export default AboutUsPage;
