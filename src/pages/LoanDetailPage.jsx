import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, AlertCircle, ArrowRight, ShieldCheck, 
  Award, Percent, Clock, Sparkles, Check, PhoneCall,
  UserCheck, TrendingUp, Briefcase, Home, Building2, 
  GraduationCap, Coins, CarFront, Calculator
} from 'lucide-react';
import { loanService } from '../services/api';
import LoanEnquiryForm from '../components/LoanEnquiryForm';
import LoanHeroBackground from '../components/LoanHeroBackground';
import { LOAN_PRODUCTS_DATA, getLoanProductBySlug } from '../utils/loanData';
import { ScrollReveal } from '../components/ScrollReveal';

// Subcomponents for the 7 redesigned content sections
import LoanOverview from '../components/loan-detail/LoanOverview';
import LoanBenefits from '../components/loan-detail/LoanBenefits';
import LoanCalculator from '../components/loan-detail/LoanCalculator';
import LoanEligibility from '../components/loan-detail/LoanEligibility';
import LoanDocuments from '../components/loan-detail/LoanDocuments';
import LoanProcess from '../components/loan-detail/LoanProcess';
import LoanFAQ from '../components/loan-detail/LoanFAQ';

// Loan Images
import personalLoanImg from '../assets/loans/personal-loan.jpg';
import securitiesLoanImg from '../assets/loans/loan-against-securities.jpg';
import businessLoanImg from '../assets/loans/business-loan.jpg';
import homeLoanImg from '../assets/loans/home-loan.jpg';
import propertyLoanImg from '../assets/loans/loan-against-property.jpg';
import educationLoanImg from '../assets/loans/education-loan.jpg';
import goldLoanImg from '../assets/loans/gold-loan.jpg';
import vehicleLoanImg from '../assets/loans/car.png';

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
  'personal-loan': UserCheck,
  'loan-against-securities': TrendingUp,
  'business-loan': Briefcase,
  'home-loan': Home,
  'loan-against-property': Building2,
  'education-loan': GraduationCap,
  'gold-loan': Coins,
  'vehicle-loan': CarFront
};

const LoanDetailPage = () => {
  const { slug } = useParams();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const localProduct = getLoanProductBySlug(slug);
    if (localProduct) {
      setLoan(localProduct);
    }

    loanService.getLoanBySlug(slug)
      .then(res => {
        if (res.data?.success && res.data.data) {
          setLoan(prev => ({
            ...prev,
            ...res.data.data,
            keyBenefits: res.data.data.keyBenefits?.length > 0 ? res.data.data.keyBenefits : prev?.keyBenefits,
            eligibilityCriteria: res.data.data.eligibilityCriteria?.length > 0 ? res.data.data.eligibilityCriteria : prev?.eligibilityCriteria,
            requiredDocuments: res.data.data.requiredDocuments?.length > 0 ? res.data.data.requiredDocuments : prev?.requiredDocuments,
            applicationProcess: res.data.data.applicationProcess?.length > 0 ? res.data.data.applicationProcess : prev?.applicationProcess,
            faqs: res.data.data.faqs?.length > 0 ? res.data.data.faqs : prev?.faqs,
          }));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading && !loan) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F8FC]">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-3 border-[#174F91] border-t-transparent mx-auto"></div>
          <p className="text-sm font-semibold text-[#0B2345]">Loading Loan Details...</p>
        </div>
      </div>
    );
  }

  if (!loan) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F5F8FC] px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center border border-[#DFE7F1] shadow-xl">
          <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4 border border-red-100">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-[#0B2345] mb-2">Loan Product Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">
            The requested loan category does not exist. Browse our verified credit facilities across India.
          </p>
          <Link
            to="/loans"
            className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#174F91] hover:bg-[#0B2345] transition shadow-md"
          >
            <span>View All 8 Loan Products</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const currentLoanImg = LOAN_IMAGE_MAP[slug] || personalLoanImg;

  return (
    <div className="bg-[#F5F8FC] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] text-slate-800">
      
      {/* 1. Breadcrumb Bar */}
      <div className="bg-white border-b border-[#DFE7F1] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#174F91] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <Link to="/loans" className="hover:text-[#174F91] transition-colors">Loans</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="font-bold text-[#174F91]">{loan.name}</span>
        </div>
      </div>

      {/* 2. Top Hero Section */}
      <section className="relative text-white py-12 sm:py-16 overflow-hidden">
        <LoanHeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Side: Loan Identity, Stats & Feature Card (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Partner Badge */}
              <ScrollReveal type="fade-down" delay={0.05}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-blue-100 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span className="tracking-wide uppercase">Trusted Multi-Bank Consultation Gateway</span>
                </div>
              </ScrollReveal>

              {/* Title & Tagline */}
              <ScrollReveal type="fade-up" delay={0.1}>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                    {loan.name}
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-2xl">
                    {loan.tagline || loan.shortDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* 3 Metric Stat Cards */}
              <ScrollReveal type="fade-up" delay={0.15}>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 shadow-sm">
                    <div className="flex items-center text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Percent className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                      <span>Interest Rate</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-white block truncate">
                      {loan.indicativeInterestRate}
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 shadow-sm">
                    <div className="flex items-center text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#FF891C]" />
                      <span>Max Tenure</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-white block truncate">
                      {loan.maxTenure}
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 shadow-sm">
                    <div className="flex items-center text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-300" />
                      <span>Max Amount</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-white block truncate">
                      {loan.maxLoanAmount}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal type="fade-up" delay={0.2}>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#enquire"
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF891C] hover:bg-orange-600 transition shadow-lg shadow-orange-500/25 active:scale-95"
                  >
                    <span>Apply Now for {loan.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#emi-calculator"
                    className="inline-flex items-center px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition active:scale-95"
                  >
                    <Calculator className="w-4 h-4 mr-2 text-white" />
                    <span>Calculate EMI</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Hero Image Showcase Card */}
              <ScrollReveal type="fade-up" delay={0.25}>
                <div className="relative pt-4">
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-r from-blue-900/60 to-slate-900/60 backdrop-blur-md">
                    <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                      <div className="sm:col-span-7 p-5 sm:p-6 space-y-3">
                        <div className="inline-flex items-center space-x-1.5 bg-[#10B981]/20 border border-[#10B981]/40 px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-300">
                          <Check className="w-3.5 h-3.5" />
                          <span>Pre-Approved Lenders Available</span>
                        </div>
                        <h3 className="text-lg font-black text-white leading-snug">
                          Compare 20+ Banks Without Hurting Your Credit Score
                        </h3>
                        <p className="text-xs text-blue-100/80 leading-relaxed">
                          Our senior financial consultants negotiate preferred rates, lowest processing levies, and expedite instant sanctions.
                        </p>
                        <div className="flex items-center space-x-4 pt-1 text-[11px] font-semibold text-blue-200">
                          <span className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] mr-1.5"></span>
                            ₹0 Upfront Advisory
                          </span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-[#FF891C] mr-1.5"></span>
                            Rapid 24-48h Disbursal
                          </span>
                        </div>
                      </div>

                      <div className="sm:col-span-5 h-48 sm:h-56 relative overflow-hidden bg-slate-800">
                        <img 
                          src={currentLoanImg} 
                          alt={loan.name} 
                          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345] via-transparent to-transparent sm:bg-gradient-to-r sm:from-[#0B2345]/80 sm:to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Side: Embedded Loan Enquiry Form Card (lg:col-span-5) */}
            <div className="lg:col-span-5" id="enquire">
              <ScrollReveal type="fade-left" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-2xl border border-white/20 p-1 sm:p-2 text-slate-800">
                  <LoanEnquiryForm loanType={loan.slug} loanTitle={loan.name} />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Body Container with 8-Column Content Area + 4-Column Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main 8-Column Content Area (Redesigned 7 Content Sections) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Loan Overview (2-Column Layout) */}
            <LoanOverview loan={loan} />

            {/* Section 2: Why Choose FinAdvise (3-Column Desktop Grid) */}
            <LoanBenefits loan={loan} />

            {/* Section 3: Interactive Loan Calculator (Category-Specific) */}
            <LoanCalculator slug={loan.slug} loanName={loan.name} />

            {/* Section 4: Eligibility Criteria (Structured Information Cards) */}
            <LoanEligibility loan={loan} />

            {/* Section 5: Required Documents Checklist (Categorized Grid) */}
            <LoanDocuments loan={loan} />

            {/* Section 6: 4-Step Application & Disbursal Process (Connected Timeline) */}
            <LoanProcess loan={loan} />

            {/* Section 7: Frequently Asked Questions (Interactive Accordion) */}
            <LoanFAQ loan={loan} />

          </div>

          {/* Right Sidebar: 4 Columns (Desktop) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Other Loan Products Vertical List */}
            <ScrollReveal type="fade-left">
              <div className="bg-white rounded-2xl p-6 border border-[#DFE7F1] shadow-sm">
                <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-slate-100">
                  <div className="w-2 h-4 rounded-full bg-[#174F91]"></div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2345]">
                    Other Loan Products
                  </h3>
                </div>

                <div className="space-y-1.5">
                  {LOAN_PRODUCTS_DATA.map(other => {
                    const isActive = other.slug === loan.slug;
                    const OtherIcon = ICON_MAP[other.slug] || ShieldCheck;

                    return (
                      <Link
                        key={other.slug}
                        to={`/loans/${other.slug}`}
                        className={`flex items-center justify-between p-3 rounded-xl font-medium text-xs transition-all ${
                          isActive 
                            ? 'bg-[#174F91] text-white font-bold shadow-md shadow-blue-900/10' 
                            : 'bg-white hover:bg-[#F5F8FC] text-slate-700 hover:text-[#174F91] border border-transparent hover:border-[#DFE7F1]'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <OtherIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#174F91]'}`} />
                          <span>{other.name}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Unbiased Multi-Bank Advisory Contact Card */}
            <ScrollReveal type="fade-left" delay={0.1}>
              <div className="bg-gradient-to-br from-[#0B2345] to-[#174F91] text-white rounded-2xl p-6 shadow-xl border border-blue-900/40 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-white">Unbiased Multi-Bank Advisory</h4>
                  <p className="text-xs text-blue-100/90 leading-relaxed mt-1">
                    Connect with an accredited senior loan advisor to compare pre-qualified bank offers without triggering multiple credit bureau hard inquiries.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 space-y-2 text-xs text-blue-100">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-blue-200">Advisory Helpline:</span>
                    <a href="tel:+919876543210" className="text-white font-bold hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-blue-200">Desk Email:</span>
                    <a href="mailto:contact@finadviseloans.com" className="text-white font-bold hover:underline">
                      contact@finadviseloans.com
                    </a>
                  </div>
                </div>

                <a
                  href="#enquire"
                  className="block text-center py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#FF891C] hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Request Free Callback
                </a>
              </div>
            </ScrollReveal>

            {/* Regulatory Adherence Trust Badge */}
            <ScrollReveal type="fade-left" delay={0.15}>
              <div className="bg-white border border-[#DFE7F1] rounded-2xl p-5 text-[11px] text-slate-600 leading-relaxed space-y-2 shadow-sm">
                <p className="font-bold text-[#0B2345] flex items-center text-xs">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-[#10B981]" />
                  RBI Regulatory Adherence
                </p>
                <p>
                  FinAdvise acts as an independent loan consultancy facilitator. Final loan approval, interest rate sanction, and fund disbursement are subject to the underwriting criteria of respective partner Banks & NBFCs.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>

      {/* 4. Bottom Full-Width CTA Banner */}
      <section className="bg-gradient-to-r from-[#0B2345] via-[#102B52] to-[#174F91] text-white py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/15">
                <PhoneCall className="w-6 h-6 text-[#FF891C]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Need Help Choosing the Right Loan?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/80 mt-0.5">
                  Talk to our loan experts and get personalized guidance for the best {loan.name.toLowerCase()} offers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF891C] hover:bg-orange-600 transition shadow-lg shadow-orange-500/25 active:scale-95"
              >
                <span>Talk to a Loan Advisor</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LoanDetailPage;
