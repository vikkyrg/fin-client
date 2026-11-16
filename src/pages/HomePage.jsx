import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, 
  UserCheck, TrendingUp, Briefcase, Home, Building2, GraduationCap, 
  Coins, HelpCircle, Landmark, Layers, Award, Sparkles, User,
  FileCheck, BadgePercent, Clock, Handshake, SlidersHorizontal, FileText,
  FileEdit, Search, FileBadge, Banknote
} from 'lucide-react';
import { loanService, blogService, contentService } from '../services/api';
import EnquiryModal from '../components/EnquiryModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import heroBgImage from '../assets/home.png';
import mobileHero from '../assets/mobile.png';

// Loan Card Images cropped exactly from the reference design
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

const DEFAULT_LOAN_DATA = [
  {
    slug: 'personal-loan',
    name: 'Personal Loan',
    shortDescription: 'Collateral-free instant personal loan for salaried and self-employed professionals with minimal documentation.',
    indicativeInterestRate: '10.49% – 18.00% p.a.',
    maxTenure: '12 to 72 Months',
    icon: 'User'
  },
  {
    slug: 'loan-against-securities',
    name: 'Loan Against Securities',
    shortDescription: 'Leverage your equity shares, mutual funds, and sovereign gold bonds into an active credit overdraft line without losing ownership.',
    indicativeInterestRate: '9.00% – 12.50% p.a.',
    maxTenure: '12 to 36 Months (Renewable)',
    icon: 'TrendingUp'
  },
  {
    slug: 'business-loan',
    name: 'Business Loan',
    shortDescription: 'Unsecured and collateralized business financing solutions designed to fuel working capital, raw material inventory, and expansion.',
    indicativeInterestRate: '11.25% – 19.50% p.a.',
    maxTenure: 'Up to 7 Years',
    icon: 'Briefcase'
  },
  {
    slug: 'home-loan',
    name: 'Home Loan',
    shortDescription: 'Comprehensive home financing for ready-to-move properties, under-construction apartments, and self-construction.',
    indicativeInterestRate: '8.40% – 9.85% p.a.',
    maxTenure: 'Up to 30 Years',
    icon: 'Home'
  },
  {
    slug: 'loan-against-property',
    name: 'Loan Against Property',
    shortDescription: 'Monetize existing residential, commercial, or industrial real estate assets for major business capital, debt consolidation, or other needs.',
    indicativeInterestRate: '9.15% – 11.75% p.a.',
    maxTenure: 'Up to 15 Years',
    icon: 'Building2'
  },
  {
    slug: 'education-loan',
    name: 'Education Loan',
    shortDescription: 'Dedicated financial assistance for domestic and international higher education covering tuition fees, living expenses, and related costs.',
    indicativeInterestRate: '9.50% – 13.50% p.a.',
    maxTenure: 'Up to 15 Years (plus Moratorium)',
    icon: 'GraduationCap'
  },
  {
    slug: 'gold-loan',
    name: 'Gold Loan',
    shortDescription: 'Quick, high-value cash facility against gold jewellery with minimal paperwork, transparent terms, and fast processing.',
    indicativeInterestRate: '8.85% – 14.00% p.a.',
    maxTenure: '3 to 24 Months',
    icon: 'Coins'
  }
];

const ICON_MAP = {
  'UserCheck': UserCheck,
  'TrendingUp': TrendingUp,
  'Briefcase': Briefcase,
  'Home': Home,
  'Building2': Building2,
  'GraduationCap': GraduationCap,
  'Coins': Coins
};

const HomePage = () => {
  const [loans, setLoans] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [partners, setPartners] = useState([]);
  const [news, setNews] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [homeCms, setHomeCms] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLoanForModal, setSelectedLoanForModal] = useState('personal-loan');

  useEffect(() => {
    window.scrollTo(0, 0);

    Promise.all([
      loanService.getAllLoans().catch(() => ({ data: { data: [] } })),
      blogService.getBlogs({ limit: 3 }).catch(() => ({ data: { data: { blogs: [] } } })),
      contentService.getPartners().catch(() => ({ data: { data: [] } })),
      contentService.getNews().catch(() => ({ data: { data: [] } })),
      contentService.getFAQs('General').catch(() => ({ data: { data: [] } })),
      contentService.getPageContent('home').catch(() => ({ data: { data: null } }))
    ]).then(([loansRes, blogsRes, partnersRes, newsRes, faqsRes, cmsRes]) => {
      if (loansRes.data?.data) setLoans(loansRes.data.data);
      if (blogsRes.data?.data?.blogs) setBlogs(blogsRes.data.data.blogs);
      if (partnersRes.data?.data) setPartners(partnersRes.data.data);
      if (newsRes.data?.data) setNews(newsRes.data.data);
      if (faqsRes.data?.data) setFaqs(faqsRes.data.data);
      if (cmsRes.data?.data?.sections) setHomeCms(cmsRes.data.data.sections);
    });
  }, []);

  const openEnquiry = (loanType = 'personal-loan') => {
    setSelectedLoanForModal(loanType);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ============================================================== */}
      {/* 1. HERO SECTION - RESPONSIVE (DESKTOP: home.png | MOBILE: mobile.png) */}
      {/* ============================================================== */}
      <section className="relative w-full overflow-hidden">
        {/* Desktop & Tablet Background (md and up: 768px+) */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-right lg:bg-center"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />

        {/* Mobile Background: full cover so mobile.png completely fills the section without top white blank gap */}
        <div 
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-top pointer-events-none"
          style={{ backgroundImage: `url(${mobileHero})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-72 sm:pb-80 md:py-16 lg:py-20 w-full relative z-10 min-h-[620px] md:min-h-[580px] lg:min-h-[660px] flex items-start md:items-center">
          <div className="max-w-2xl xl:max-w-3xl space-y-5 sm:space-y-6">
            
            {/* Trust Badge with Rounded Pill & Green Shield: Fade Down */}
            <ScrollReveal type="fade-down" delay={0.05} duration={0.6}>
              <div className="inline-flex items-center space-x-2 bg-emerald-50/90 border border-emerald-200 px-3.5 sm:px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-4 h-4 rounded-full bg-[#159B69] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-tight">
                  Trusted by 50,000+ Borrowers Across India
                </span>
              </div>
            </ScrollReveal>

            {/* Exact High-Impact Bold Navy Headline: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.12} duration={0.65}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#174A8B] leading-[1.15] tracking-tight">
                Simplifying Loans with Transparent Expert Advisory
              </h1>
            </ScrollReveal>

            {/* Clean Readable Description: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.2} duration={0.65}>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
                Compare and access the best Personal Loans, Home Loans, Business Financing, and Loans Against Securities from India’s leading Banks & NBFCs with zero hassle.
              </p>
            </ScrollReveal>

            {/* Dual Action Buttons: Fade Up */}
            <ScrollReveal type="fade-up" delay={0.28} duration={0.65}>
              <div className="pt-2 flex flex-wrap gap-3.5 sm:gap-4 items-center">
                <button
                  onClick={() => openEnquiry('personal-loan')}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <a
                  href="#loans"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#174A8B] bg-white border-2 border-[#174A8B] hover:bg-blue-50 transition active:scale-95 shadow-sm"
                >
                  <Layers className="w-4 h-4 mr-2 text-[#174A8B]" />
                  <span>Explore Loans</span>
                </a>
              </div>
            </ScrollReveal>

            {/* 3 Metrics in Single Line at Bottom Left: Staggered Fade Up */}
            <ScrollReveal type="fade-up" delay={0.35} duration={0.65}>
              <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/90 max-w-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-[#159B69] flex items-center justify-center shrink-0">
                    <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#159B69]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-black text-[#174A8B] leading-none">20+</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 sm:mt-1">Lending Partners</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-[#159B69] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#159B69]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-black text-[#174A8B] leading-none">₹500Cr+</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 sm:mt-1">Facilitated Volume</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-[#159B69] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#159B69]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-black text-[#174A8B] leading-none">Zero</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 sm:mt-1">Advisory Charges</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SEVEN LOAN CATEGORIES GRID SECTION - EXACT REFERENCE DESIGN */}
      {/* ============================================================== */}
      <section id="loans" className="relative py-20 bg-gradient-to-b from-[#F3F8FD] via-[#F8FBFE] to-white overflow-hidden">
        
        {/* Soft flowing wave background accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Section Header matching exact reference */}
          <ScrollReveal type="fade-up" delay={0.05}>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-white border border-blue-200/80 px-4 py-1.5 rounded-full shadow-sm">
                OUR LOAN PORTFOLIO
              </span>
              <div className="mt-3.5 inline-block relative">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#174A8B] tracking-tight">
                  Tailored Financial Solutions for Every Need
                </h2>
                {/* Small orange underline below the heading */}
                <div className="w-20 h-1 bg-[#F28C28] rounded-full mx-auto mt-2.5"></div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
                Each category features transparent terms, verified bank tie-ups, and a dedicated application form.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid: Row 1 has 4 cards, Row 2 has 3 centered cards */}
          {(() => {
            // Merge dynamic API loans with ordered portfolio
            const orderedSlugs = [
              'personal-loan',
              'loan-against-securities',
              'business-loan',
              'home-loan',
              'loan-against-property',
              'education-loan',
              'gold-loan'
            ];

            const loanList = orderedSlugs.map((slug) => {
              const apiLoan = loans.find(l => l.slug === slug);
              const fallback = DEFAULT_LOAN_DATA.find(d => d.slug === slug) || {};
              return {
                ...fallback,
                ...apiLoan,
                slug,
                name: apiLoan?.name || fallback.name,
                shortDescription: apiLoan?.shortDescription || fallback.shortDescription,
                indicativeInterestRate: apiLoan?.indicativeInterestRate || fallback.indicativeInterestRate,
                maxTenure: apiLoan?.maxTenure || fallback.maxTenure,
                image: apiLoan?.bannerImage || LOAN_IMAGE_MAP[slug] || fallback.image,
                icon: apiLoan?.icon || fallback.icon
              };
            });

            const row1 = loanList.slice(0, 4);
            const row2 = loanList.slice(4, 7);

            const renderCard = (loan) => {
              const Icon = ICON_MAP[loan.icon] || UserCheck;
              const cardImage = LOAN_IMAGE_MAP[loan.slug] || loan.image;

              return (
                <StaggerItem 
                  key={loan.slug}
                  type="fade-up"
                  className="bg-white rounded-3xl border border-blue-100/90 shadow-[0_8px_30px_rgb(23,74,139,0.06)] hover:shadow-[0_16px_40px_rgb(23,74,139,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Top: Wide Loan-Specific Illustration Image with Icon Badge */}
                    <div className="relative w-full h-44 sm:h-48 bg-gradient-to-b from-blue-50/60 to-slate-50/30 overflow-hidden flex items-center justify-center shrink-0">
                      {cardImage ? (
                        <img 
                          src={cardImage} 
                          alt={loan.name} 
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-blue-50/80 flex items-center justify-center text-[#174A8B]">
                          <Icon className="w-12 h-12 text-[#174A8B]/40" />
                        </div>
                      )}
                      
                      {/* Floating Icon Badge at top left of image */}
                      <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-md flex items-center justify-center text-[#174A8B] z-10">
                        <Icon className="w-4 h-4 text-[#174A8B]" />
                      </div>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="p-6 pb-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#174A8B] tracking-tight group-hover:text-blue-900 transition-colors">
                          {loan.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                          {loan.shortDescription}
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
                            {loan.indicativeInterestRate || 'Competitive Rates'}
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
                            {loan.maxTenure || 'Flexible'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Action Buttons */}
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
                </StaggerItem>
              );
            };

            return (
              <StaggerContainer staggerDelay={0.09} className="space-y-6 sm:space-y-7">
                {/* Row 1: 4 Cards on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {row1.map(renderCard)}
                </div>

                {/* Row 2: 3 Cards Centered on Desktop with EXACT SAME CARD WIDTH as Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="hidden lg:block lg:col-span-4">
                    <div className="grid grid-cols-3 gap-6 max-w-[calc(75%-0.375rem)] mx-auto">
                      {row2.map(renderCard)}
                    </div>
                  </div>
                  {/* Tablet and Mobile view for Row 2 cards */}
                  <div className="contents lg:hidden">
                    {row2.map(renderCard)}
                  </div>
                </div>
              </StaggerContainer>
            );
          })()}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. ABOUT US INTRO & WHY CHOOSE US - REDESIGNED PREMIUM SECTION */}
      {/* ============================================================== */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-[#F6FAFE] to-white border-y border-blue-100/60 overflow-hidden">
        {/* Soft flowing wave background accents */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* LEFT SIDE - ABOUT CONTENT (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal type="fade-down" delay={0.05}>
                <span className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-xs">
                  ABOUT FINADVISE
                </span>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.12}>
                <div className="space-y-2.5">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#174A8B] tracking-tight leading-[1.2]">
                    Empowering Informed Borrowing Across India
                  </h2>
                  <div className="w-16 h-1 bg-[#159B69] rounded-full"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.18}>
                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <p>
                    FinAdvise is an independent loan consultancy and financial services facilitator. We bridge the gap between discerning borrowers and India's top institutional lenders. Our certified advisors decode fine print, negotiate interest margins, and assist from application documentation to final account disbursement.
                  </p>
                  <p>
                    Whether you need urgent emergency funds or high-ticket corporate financing, our multi-bank matching ensures you receive the lowest interest rates without racking up indiscriminate credit bureau inquiries.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.25}>
                <div className="pt-2">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center text-sm sm:text-base font-bold text-[#174A8B] hover:text-[#0F3463] group transition-colors"
                  >
                    <span className="border-b-2 border-transparent group-hover:border-[#174A8B] transition-all pb-0.5">
                      Learn more about our advisory model &rarr;
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT SIDE - FOUR BENEFIT CARDS (lg:col-span-6) */}
            <div className="lg:col-span-6">
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 [perspective:1000px]">
                {/* Card 1 */}
                <StaggerItem type="fade-up" className="group h-[230px] sm:h-[240px] [perspective:1000px] cursor-pointer">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform rounded-[16px] shadow-[0_4px_20px_rgba(23,74,139,0.04)] group-hover:shadow-[0_16px_36px_rgba(23,74,139,0.18)]">
                    {/* Front Face: Clean White */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-[16px] p-6 border border-blue-100/90 [backface-visibility:hidden] flex flex-col justify-start">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100/80 flex items-center justify-center mb-4 shrink-0">
                        <Handshake className="w-5 h-5 text-[#159B69]" />
                      </div>
                      <h4 className="font-bold text-[#174A8B] text-[15px] sm:text-base leading-snug mb-1.5">
                        20+ Leading Lending Partners
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        Direct tie-ups with top public/private banks and trusted NBFCs.
                      </p>
                      <div className="mt-auto pt-2 flex items-center text-[11px] font-bold text-[#174A8B]/70 group-hover:text-[#174A8B]">
                        <span>Hover for details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Back Face: Premium Brand Blue (#174A8B) */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#174A8B] to-[#0F3463] text-white rounded-[16px] p-6 border border-blue-900 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                            <Handshake className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-white/10 px-2 py-0.5 rounded">
                            Direct Access
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-[15px] sm:text-base leading-snug mb-2">
                          20+ Leading Lending Partners
                        </h4>
                        <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed">
                          Access competitive interest margins from HDFC, SBI, ICICI, Axis, Kotak, Tata Capital, and top institutional lenders without middlemen.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-emerald-300 font-semibold">
                        <span>✓ Multi-Bank Network</span>
                        <span>Fast Sanction</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 2 */}
                <StaggerItem type="fade-up" className="group h-[230px] sm:h-[240px] [perspective:1000px] cursor-pointer">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform rounded-[16px] shadow-[0_4px_20px_rgba(23,74,139,0.04)] group-hover:shadow-[0_16px_36px_rgba(23,74,139,0.18)]">
                    {/* Front Face: Clean White */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-[16px] p-6 border border-blue-100/90 [backface-visibility:hidden] flex flex-col justify-start">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100/80 flex items-center justify-center mb-4 shrink-0">
                        <ShieldCheck className="w-5 h-5 text-[#159B69]" />
                      </div>
                      <h4 className="font-bold text-[#174A8B] text-[15px] sm:text-base leading-snug mb-1.5">
                        Zero Upfront Advisory Charges
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        Transparent guidance with no hidden platform fees for borrowers.
                      </p>
                      <div className="mt-auto pt-2 flex items-center text-[11px] font-bold text-[#174A8B]/70 group-hover:text-[#174A8B]">
                        <span>Hover for details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Back Face: Premium Emerald Green (#159B69) */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#159B69] to-[#0F7850] text-white rounded-[16px] p-6 border border-emerald-700 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-white/10 px-2 py-0.5 rounded">
                            100% Free
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-[15px] sm:text-base leading-snug mb-2">
                          Zero Upfront Advisory Charges
                        </h4>
                        <p className="text-xs sm:text-[13px] text-emerald-50/95 leading-relaxed">
                          Enjoy completely transparent loan guidance. We charge zero platform, retainer, or consultation fees from applicants at any stage.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white font-semibold">
                        <span>✓ No Hidden Fees</span>
                        <span>Zero Retainer</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 3 */}
                <StaggerItem type="fade-up" className="group h-[230px] sm:h-[240px] [perspective:1000px] cursor-pointer">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform rounded-[16px] shadow-[0_4px_20px_rgba(23,74,139,0.04)] group-hover:shadow-[0_16px_36px_rgba(23,74,139,0.18)]">
                    {/* Front Face: Clean White */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-[16px] p-6 border border-blue-100/90 [backface-visibility:hidden] flex flex-col justify-start">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100/80 flex items-center justify-center mb-4 shrink-0">
                        <SlidersHorizontal className="w-5 h-5 text-[#159B69]" />
                      </div>
                      <h4 className="font-bold text-[#174A8B] text-[15px] sm:text-base leading-snug mb-1.5">
                        Tailored Financial Matching
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        Algorithms match you to lenders most likely to approve your profile.
                      </p>
                      <div className="mt-auto pt-2 flex items-center text-[11px] font-bold text-[#174A8B]/70 group-hover:text-[#174A8B]">
                        <span>Hover for details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Back Face: Vibrant Orange (#F28C28) */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#F28C28] to-[#DC7815] text-white rounded-[16px] p-6 border border-orange-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                            <SlidersHorizontal className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-white/10 px-2 py-0.5 rounded">
                            Smart Match
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-[15px] sm:text-base leading-snug mb-2">
                          Tailored Financial Matching
                        </h4>
                        <p className="text-xs sm:text-[13px] text-amber-50/95 leading-relaxed">
                          Our proprietary credit scoring pre-evaluates lender criteria, preventing credit score damage from multiple simultaneous bank rejections.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white font-semibold">
                        <span>✓ High Approval Odds</span>
                        <span>Protects CIBIL</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 4 */}
                <StaggerItem type="fade-up" className="group h-[230px] sm:h-[240px] [perspective:1000px] cursor-pointer">
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform rounded-[16px] shadow-[0_4px_20px_rgba(23,74,139,0.04)] group-hover:shadow-[0_16px_36px_rgba(23,74,139,0.18)]">
                    {/* Front Face: Clean White */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-[16px] p-6 border border-blue-100/90 [backface-visibility:hidden] flex flex-col justify-start">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#159B69] border border-emerald-100/80 flex items-center justify-center mb-4 shrink-0">
                        <FileText className="w-5 h-5 text-[#159B69]" />
                      </div>
                      <h4 className="font-bold text-[#174A8B] text-[15px] sm:text-base leading-snug mb-1.5">
                        End-to-End Documentation Support
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        Dedicated loan managers manage documentation from application to disbursal.
                      </p>
                      <div className="mt-auto pt-2 flex items-center text-[11px] font-bold text-[#174A8B]/70 group-hover:text-[#174A8B]">
                        <span>Hover for details</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Back Face: Corporate Deep Indigo (#103463) */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#103463] to-[#0A2242] text-white rounded-[16px] p-6 border border-blue-950 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-200">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-0.5 rounded">
                            Dedicated RM
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-[15px] sm:text-base leading-snug mb-2">
                          End-to-End Documentation Support
                        </h4>
                        <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed">
                          A dedicated relationship manager assists with DigiLocker e-KYC, bank statement analysis, and paperwork expediting through to final disbursal.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-200 font-semibold">
                        <span>✓ Dedicated Manager</span>
                        <span>Seamless e-KYC</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FOUR STEP APPLICATION PROCESS - REDESIGNED HOW IT WORKS     */}
      {/* ============================================================== */}
      <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
        {/* Soft flowing wave background decoration at top and bottom */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#F6FAFE] to-transparent pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/30 rounded-[100%] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-10 w-[600px] h-[260px] bg-blue-50/60 rounded-[100%] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Heading and Description */}
          <ScrollReveal type="fade-up" delay={0.05}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#174A8B] bg-blue-50/80 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-xs">
                HOW IT WORKS
              </span>
              <div className="mt-3.5 inline-block relative">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#174A8B] tracking-tight">
                  Our Simple 4-Step Loan Assistance Process
                </h2>
                <div className="w-20 h-1 bg-[#F28C28] rounded-full mx-auto mt-2.5"></div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
                Experience a smooth, paperless, and time-saving journey from enquiry to fund disbursement.
              </p>
            </div>
          </ScrollReveal>

          {/* Four Process Cards with subtle right-arrow indicators between cards on desktop */}
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* CARD 01 - BLUE ACCENT */}
            <StaggerItem type="fade-up" className="relative group">
              <div className="h-full bg-gradient-to-b from-blue-50/30 to-white rounded-[18px] p-6 sm:p-7 border border-blue-100/90 border-b-4 border-b-sky-400 shadow-[0_4px_24px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-sky-400/90 tracking-tight font-sans">
                      01
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs">
                      <FileEdit className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-[#174A8B] text-base sm:text-lg mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                    Submit Loan Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Choose your loan category and fill out our simple, tailored online form.
                  </p>
                </div>
              </div>

              {/* Desktop connecting arrow to step 2 */}
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-blue-200 shadow-sm items-center justify-center text-slate-400 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </div>
            </StaggerItem>

            {/* CARD 02 - GREEN ACCENT */}
            <StaggerItem type="fade-up" className="relative group">
              <div className="h-full bg-gradient-to-b from-emerald-50/30 to-white rounded-[18px] p-6 sm:p-7 border border-emerald-100/90 border-b-4 border-b-[#159B69] shadow-[0_4px_24px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-[#159B69] tracking-tight font-sans">
                      02
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#159B69] shadow-xs">
                      <Search className="w-6 h-6 text-[#159B69]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-[#174A8B] text-base sm:text-lg mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                    Consultant Eligibility Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Our senior advisor evaluates your eligibility across available banking partners.
                  </p>
                </div>
              </div>

              {/* Desktop connecting arrow to step 3 */}
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-blue-200 shadow-sm items-center justify-center text-slate-400 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </div>
            </StaggerItem>

            {/* CARD 03 - ORANGE ACCENT */}
            <StaggerItem type="fade-up" className="relative group">
              <div className="h-full bg-gradient-to-b from-orange-50/30 to-white rounded-[18px] p-6 sm:p-7 border border-orange-100/90 border-b-4 border-b-[#F28C28] shadow-[0_4px_24px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-[#F28C28] tracking-tight font-sans">
                      03
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F28C28] shadow-xs">
                      <FileBadge className="w-6 h-6 text-[#F28C28]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-[#174A8B] text-base sm:text-lg mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                    Document Verification &amp; Sanction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    We coordinate with the bank for digital verification and prompt sanction.
                  </p>
                </div>
              </div>

              {/* Desktop connecting arrow to step 4 */}
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-blue-200 shadow-sm items-center justify-center text-slate-400 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </div>
            </StaggerItem>

            {/* CARD 04 - PURPLE ACCENT */}
            <StaggerItem type="fade-up" className="relative group">
              <div className="h-full bg-gradient-to-b from-purple-50/30 to-white rounded-[18px] p-6 sm:p-7 border border-purple-100/90 border-b-4 border-b-purple-500 shadow-[0_4px_24px_rgba(23,74,139,0.05)] hover:shadow-[0_12px_32px_rgba(23,74,139,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-purple-600 tracking-tight font-sans">
                      04
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
                      <Banknote className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-[#174A8B] text-base sm:text-lg mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
                    Funds Disbursed to Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Receive funds directly into your bank account with complete transparency.
                  </p>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 6. KNOWLEDGE CENTRE & LATEST BLOGS                            */}
      {/* ============================================================== */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal type="fade-up" delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#174A8B] bg-blue-50 px-3 py-1 rounded-full">
                  Financial Awareness
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174A8B] mt-3 tracking-tight">
                  Knowledge Centre & Advisory Insights
                </h2>
              </div>
              <Link to="/blogs" className="text-sm font-bold text-[#174A8B] hover:underline flex items-center">
                <span>View all articles</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <StaggerItem key={blog._id} type="fade-up">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-[#174A8B] bg-blue-50 px-2.5 py-0.5 rounded">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-[#174A8B] text-base mt-3 mb-2 line-clamp-2 hover:underline">
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{blog.readTime || '5 min read'}</span>
                    <Link to={`/blogs/${blog.slug}`} className="font-bold text-[#174A8B] hover:underline flex items-center">
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                                 */}
      {/* ============================================================== */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollReveal type="fade-up" delay={0.05}>
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#174A8B] bg-blue-50 px-3 py-1 rounded-full">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#174A8B] mt-3">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="space-y-3.5">
            {faqs.map(faq => (
              <StaggerItem key={faq._id} type="fade-up">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#174A8B] text-sm mb-1.5 flex items-start">
                    <HelpCircle className="w-4 h-4 text-[#174A8B] mr-2 mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* ============================================================== */}
      {/* 8. PROMINENT BOTTOM CTA BANNER                                */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal type="zoom-in" delay={0.1} duration={0.65}>
          <div className="bg-[#174A8B] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2.5 max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Immediate Advisory Assistance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Explore Your Loan Eligibility?
              </h2>
              <p className="text-sm text-blue-100 leading-relaxed">
                Submit your requirement or speak with an experienced loan specialist today with zero upfront consultation fee.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <button
                onClick={() => openEnquiry('personal-loan')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-md cursor-pointer active:scale-95"
              >
                Submit Loan Enquiry
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#174A8B] bg-white hover:bg-slate-100 transition shadow-sm inline-flex items-center justify-center active:scale-95"
              >
                Contact Advisory Desk
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Floating / Header Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultLoan={selectedLoanForModal}
      />

    </div>
  );
};

export default HomePage;