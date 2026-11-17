import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Layers, Landmark } from 'lucide-react';
import HomeHeroBackground from './HomeHeroBackground';
import QuickLoanEnquiryCard from './QuickLoanEnquiryCard';
import { ScrollReveal } from './ScrollReveal';

// Exact 8 loan product images mapped identically
import personalLoanImg from '../assets/loans/personal-loan.jpg';
import securitiesLoanImg from '../assets/loans/loan-against-securities.jpg';
import businessLoanImg from '../assets/loans/business-loan.jpg';
import homeLoanImg from '../assets/loans/home-loan.jpg';
import propertyLoanImg from '../assets/loans/loan-against-property.jpg';
import educationLoanImg from '../assets/loans/education-loan.jpg';
import goldLoanImg from '../assets/loans/gold-loan.jpg';
import vehicleLoanImg from '../assets/loans/car.png';

const HERO_LOAN_CATEGORIES = [
  { id: 'personal-loan', name: 'Personal Loan', image: personalLoanImg, path: '/loans/personal-loan' },
  { id: 'loan-against-securities', name: 'Loan Against Securities', image: securitiesLoanImg, path: '/loans/loan-against-securities' },
  { id: 'business-loan', name: 'Business Loan', image: businessLoanImg, path: '/loans/business-loan' },
  { id: 'home-loan', name: 'Home Loan', image: homeLoanImg, path: '/loans/home-loan' },
  { id: 'loan-against-property', name: 'Loan Against Property', image: propertyLoanImg, path: '/loans/loan-against-property' },
  { id: 'education-loan', name: 'Education Loan', image: educationLoanImg, path: '/loans/education-loan' },
  { id: 'gold-loan', name: 'Gold Loan', image: goldLoanImg, path: '/loans/gold-loan' },
  { id: 'vehicle-loan', name: 'Vehicle Loan', image: vehicleLoanImg, path: '/loans/vehicle-loan' }
];

const HomeHeroSection = ({ onOpenEnquiry }) => {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION CONTAINER                                                 */}
      {/* Balanced mobile height with natural content distribution.                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-white min-h-[calc(100svh-64px)] lg:min-h-[calc(100vh-112px)] lg:min-h-[calc(100svh-112px)] flex flex-col justify-start lg:justify-between pt-1 sm:pt-2 pb-4 sm:pb-8 lg:pb-12">
        {/* Integrated Unified Background */}
        <HomeHeroBackground />

        <div className="max-w-[1450px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 flex flex-col flex-1 justify-start lg:justify-between">

          {/* ========================================================================= */}
          {/* A. 8 LOAN CATEGORY ICONS                                                  */}
          {/* Mobile: 4-Column x 2-Row Clean Fit Grid (No horizontal overflow)          */}
          {/* Image containers: 48-54px; Labels: 12-13px medium weight                  */}
          {/* ========================================================================= */}
          <div className="pt-1.5 pb-1 sm:pb-3 mb-1 sm:mb-3 lg:mb-6">
            <div className="relative">
              <div className="grid grid-cols-4 md:flex md:items-start md:justify-between gap-x-2 gap-y-2.5 sm:gap-4 select-none">
                {HERO_LOAN_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.path}
                    className="group flex flex-col items-center w-full md:w-[92px] text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  >
                    {/* Consistent 48-54px container */}
                    <div className="w-[50px] xs:w-[54px] sm:w-[58px] md:w-[64px] h-[46px] xs:h-[48px] sm:h-[50px] md:h-[52px] rounded-[11px] sm:rounded-[12px] flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:scale-105 shadow-xs">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-[9px] sm:rounded-[10px] group-hover:shadow-md transition-all duration-200"
                        loading="lazy"
                      />
                    </div>

                    {/* Centered label with 12-13px font & medium weight */}
                    <span className="mt-1 sm:mt-1.5 text-[11.5px] xs:text-[12px] sm:text-[13px] font-medium text-[#174A8B] group-hover:text-[#2563EB] transition-colors leading-[1.25] line-clamp-2 max-w-[76px] sm:max-w-[85px]">
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* B. MAIN HERO CONTENT AREA                                 */}
          {/* ========================================================= */}
          <div className="py-2 sm:py-3 lg:py-4 lg:my-auto lg:-translate-y-6 xl:-translate-y-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">

            {/* LEFT COLUMN: BRANDING, HEADINGS, CTAS & METRICS */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-5 xl:pr-6">

              {/* 1. Trust Badge (12-13px text, balanced spacing) */}
              <ScrollReveal type="fade-down" delay={0.05} duration={0.5}>
                <div className="inline-flex items-center space-x-2 bg-[#E8F8F2] border border-[#A7F3D0] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs">
                  <span className="w-4 h-4 rounded-full bg-[#159B69] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#064E3B] tracking-tight">
                    Trusted by 50,000+ Borrowers Across India
                  </span>
                </div>
              </ScrollReveal>

              {/* 2. Main Hero Heading (25-27px on mobile, 44-50px on desktop) */}
              <ScrollReveal type="fade-up" delay={0.1} duration={0.55}>
                <div className="relative">
                  <h1 className="text-[25px] xs:text-[26.5px] sm:text-[34px] md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold sm:font-black text-[#174A8B] leading-[1.22] sm:leading-[1.15] tracking-tight text-left">
                    Simplifying Loans with Transparent{' '}
                    <span className="relative inline-block text-[#2563EB] whitespace-nowrap">
                      Expert Advisory
                      {/* Curved Green Accent Underline */}
                      <svg
                        className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#159B69] overflow-visible pointer-events-none"
                        viewBox="0 0 260 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 10.5C65 3.5 185 2 258 8.5"
                          stroke="#159B69"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>
                </div>
              </ScrollReveal>

              {/* 3. Hero Description (14-15px font, 1.5 line-height) */}
              <ScrollReveal type="fade-up" delay={0.16} duration={0.55}>
                <p className="text-[13.5px] sm:text-[14.5px] md:text-base text-[#475569] leading-[1.5] font-normal max-w-[680px] text-left">
                  Compare and access the best Personal Loans, Home Loans, Business Financing, and Loans Against Securities from India’s leading Banks & NBFCs with zero hassle.
                </p>
              </ScrollReveal>

              {/* 4. Dual Action Buttons (13-14px font, equal height) */}
              <ScrollReveal type="fade-up" delay={0.22} duration={0.55}>
                <div className="pt-0.5 flex flex-row gap-2.5 sm:gap-4 items-center">
                  <button
                    type="button"
                    onClick={() => {
                      const formElement = document.getElementById('mobile-enquiry-section') || document.getElementById('hero-enquiry-card');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setTimeout(() => {
                          const nameInput = document.getElementById('hero-fullName-mobile') || document.getElementById('hero-fullName');
                          if (nameInput) nameInput.focus();
                        }, 400);
                      } else if (onOpenEnquiry) {
                        onOpenEnquiry('personal-loan');
                      }
                    }}
                    className="inline-flex items-center justify-center flex-1 sm:flex-initial px-4 sm:px-8 py-3 sm:py-3.5 rounded-[12px] sm:rounded-[14px] font-bold text-[13px] sm:text-base text-white bg-[#F58A22] hover:bg-[#E07914] transition-all duration-200 shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer min-h-[46px] sm:min-h-[50px]"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2" />
                  </button>

                  <a
                    href="#loans"
                    className="inline-flex items-center justify-center flex-1 sm:flex-initial px-4 sm:px-8 py-3 sm:py-3.5 rounded-[12px] sm:rounded-[14px] font-bold text-[13px] sm:text-base text-[#174A8B] bg-white border-2 border-[#174A8B] hover:bg-blue-50/60 transition-all duration-200 active:scale-95 shadow-xs min-h-[46px] sm:min-h-[50px]"
                  >
                    <Layers className="w-4 h-4 mr-1.5 sm:mr-2 text-[#174A8B]" />
                    <span>Explore Loans</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* 5. Three Trust Statistics Row (30-34px icons, 16-18px values, 11-12px labels) */}
              <ScrollReveal type="fade-up" delay={0.28} duration={0.55}>
                <div className="pt-3 sm:pt-5 border-t border-slate-200/80 max-w-lg">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center">

                    {/* Metric 1 */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F8F2] text-[#159B69] flex items-center justify-center shrink-0 border border-[#A7F3D0]/60">
                        <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#159B69]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[15.5px] sm:text-xl font-black text-[#174A8B] leading-none">20+</p>
                        <p className="text-[10.5px] sm:text-xs text-[#64748B] font-semibold mt-0.5 sm:mt-1 truncate">Lending Partners</p>
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="flex items-center space-x-2 sm:space-x-3 border-l border-slate-200/90 pl-2 sm:pl-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F8F2] text-[#159B69] flex items-center justify-center shrink-0 border border-[#A7F3D0]/60">
                        <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#159B69]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[15.5px] sm:text-xl font-black text-[#174A8B] leading-none">₹500Cr+</p>
                        <p className="text-[10.5px] sm:text-xs text-[#64748B] font-semibold mt-0.5 sm:mt-1 truncate">Volume</p>
                      </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="flex items-center space-x-2 sm:space-x-3 border-l border-slate-200/90 pl-2 sm:pl-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F8F2] text-[#159B69] flex items-center justify-center shrink-0 border border-[#A7F3D0]/60">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#159B69]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[15.5px] sm:text-xl font-black text-[#174A8B] leading-none">Zero</p>
                        <p className="text-[10.5px] sm:text-xs text-[#64748B] font-semibold mt-0.5 sm:mt-1 truncate">Advisory Fee</p>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>

              {/* 6. Mobile-Only Meaningful Supporting Paragraphs (Hidden on tablet/desktop >= 768px) */}
              <div className="md:hidden pt-2.5 pb-2 text-left space-y-2.5">
                <p className="text-[12.5px] text-[#5A6E85] leading-[1.55] font-normal">
                  Make confident borrowing decisions with transparent guidance, flexible loan options and support from application to disbursal. Find a financing solution that fits your needs.
                </p>
                <p className="text-[12.5px] text-[#5A6E85] leading-[1.6] font-normal">
                  Whether you're planning a new home, expanding your business, purchasing a vehicle or managing personal expenses, FinAdvise helps you explore suitable financing choices with clarity and confidence.
                </p>
              </div>

            </div>

            {/* DESKTOP ONLY: RIGHT COLUMN LOAN ENQUIRY FORM CARD */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">
              <ScrollReveal type="fade-left" delay={0.12} duration={0.6} className="w-full max-w-[540px]">
                <QuickLoanEnquiryCard isMobileSection={false} />
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED SEPARATE ENQUIRY SECTION (MOBILE & TABLET ONLY)              */}
      {/* Placed immediately after the hero section. Appears ONLY when user scrolls  */}
      {/* ========================================================================= */}
      <section
        id="mobile-enquiry-section"
        className="lg:hidden w-full bg-[#F4F8FD] py-10 px-4 sm:px-6 border-t border-b border-blue-100/80"
      >
        <div className="max-w-xl mx-auto space-y-5">

          {/* Clean Single Section Heading matching spec */}
          <div className="text-center space-y-1.5">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200/80 px-3 py-1 rounded-full shadow-xs">
              DIRECT APPLICATION DESK
            </span>
            <h2 className="text-2xl font-black text-[#102B52] tracking-tight">
              Enquire for a Loan
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              Get expert guidance and the best loan options for your needs.
            </p>
          </div>

          {/* Full-width Responsive Mobile Form Card */}
          <QuickLoanEnquiryCard isMobileSection={true} />

        </div>
      </section>
    </>
  );
};

export default HomeHeroSection;
