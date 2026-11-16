import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, 
  UserCheck, TrendingUp, Briefcase, Home, Building2, GraduationCap, 
  Coins, Filter, Search, Percent, Clock, DollarSign
} from 'lucide-react';
import { loanService } from '../services/api';
import { LOAN_PRODUCTS_DATA } from '../utils/loanData';

const ICON_MAP = {
  'UserCheck': UserCheck,
  'TrendingUp': TrendingUp,
  'Briefcase': Briefcase,
  'Home': Home,
  'Building2': Building2,
  'GraduationCap': GraduationCap,
  'Coins': Coins
};

const LoansListingPage = () => {
  const [loans, setLoans] = useState(LOAN_PRODUCTS_DATA);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

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

  // Filter Categories
  const filteredLoans = loans.filter(loan => {
    const matchesSearch = loan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loan.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Unsecured') return ['personal-loan', 'business-loan', 'education-loan'].includes(loan.slug);
    if (selectedFilter === 'Secured') return ['home-loan', 'loan-against-property', 'loan-against-securities', 'gold-loan'].includes(loan.slug);
    if (selectedFilter === 'Business') return ['business-loan', 'loan-against-property', 'loan-against-securities'].includes(loan.slug);
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Hero Section - Deep Sovereign Navy (#0b357b) with High-Impact Hierarchy */}
      <section className="bajaj-hero-gradient text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Partnered with 45+ RBI-Regulated Banks & NBFCs</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Compare & Apply for Loans at Lowest Market Rates
            </h1>

            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed">
              Explore 7 tailored loan categories with verified banking partner quotes, transparent processing terms, and dedicated advisory assistance from application to disbursal.
            </p>

            {/* Trust Highlights Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-blue-100">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Interest Rate</span>
                <span className="font-extrabold text-white text-sm sm:text-base">From 8.40% p.a.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Turnaround Time</span>
                <span className="font-extrabold text-white text-sm sm:text-base">Within 24–48 Hrs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Advisory Charges</span>
                <span className="font-extrabold text-emerald-400 text-sm sm:text-base">₹0 Upfront Fee</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Lender Network</span>
                <span className="font-extrabold text-white text-sm sm:text-base">45+ Institutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Control Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Unsecured', 'Secured', 'Business'].map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === tab
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab} Loan Categories
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by loan type or requirement..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium"
            />
          </div>

        </div>
      </div>

      {/* 3. The 7 Loan Category Cards Grid (Bajaj Finserv + RuLoans Visual Architecture) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              All Available Loan Products ({filteredLoans.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select your loan product to review eligibility requirements, document checklists, and launch dedicated enquiry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLoans.map(loan => {
            const Icon = ICON_MAP[loan.icon] || UserCheck;
            return (
              <div 
                key={loan.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-200"
              >
                {/* Card Top: Image + Tag */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={loan.heroImage || 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80'} 
                    alt={loan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Loan Icon */}
                  <div className="absolute bottom-3 left-4 flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-brand-blue flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-white font-extrabold text-base tracking-tight drop-shadow-md">
                      {loan.name}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider bg-brand-orange text-white px-2.5 py-0.5 rounded-full shadow-md">
                    Verified Product
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {loan.shortDescription}
                  </p>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Interest Rate</span>
                      <span className="font-extrabold text-slate-900 mt-0.5 block truncate">
                        {loan.indicativeInterestRate?.split(' - ')[0] || 'From 8.5%'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Max Tenure</span>
                      <span className="font-bold text-slate-700 mt-0.5 block truncate">
                        {loan.maxTenure}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Max Amount</span>
                      <span className="font-bold text-slate-700 mt-0.5 block truncate">
                        {loan.maxLoanAmount}
                      </span>
                    </div>
                  </div>

                  {/* Key Benefits Preview */}
                  <div className="space-y-1.5 pt-1">
                    {loan.keyBenefits?.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{benefit.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Dock */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-3 border-t border-slate-100 bg-white pt-4">
                  <Link
                    to={`/loans/${loan.slug}`}
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl border-1.5 border-brand-blue text-brand-blue hover:bg-slate-50 font-bold text-xs transition"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <Link
                    to={`/loans/${loan.slug}#enquire`}
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Why Choose Us Pillar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
              Why Borrowers Trust FinAdvise
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Unbiased Multi-Bank Advisory & Digital Simplicity
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              We empower Indian borrowers with transparent guidance, competitive interest rate negotiation, and paperless loan origination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">20+ Banking Partners</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct tie-ups with leading public/private banks and verified NBFCs across India.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center mb-3">
                <Percent className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Lowest Market Rates</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Algorithmic eligibility matching ensures you access the lowest rate tier matching your credit profile.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Rapid 24-48 Hr Turnaround</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Digital e-KYC and automated account analysis minimize verification delay.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <DollarSign className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Zero Upfront Advisory Fee</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                100% transparent borrowing assistance with zero advance consultation charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Assistance CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-slate-900 via-brand-blue to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Expert Human Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Personalized Guidance on Your Loan Eligibility?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Our accredited loan advisors assess your borrowing capacity and negotiate optimal terms on your behalf without multiple credit bureau hard inquiries.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/loans/personal-loan#enquire"
              className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-xs shadow-lg transition text-center"
            >
              Request Free Consultation Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LoansListingPage;
