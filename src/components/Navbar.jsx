import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, Mail, ChevronDown, Menu, X, ShieldCheck, 
  Headphones, UserCheck, TrendingUp, Briefcase, 
  Home, Building2, GraduationCap, Coins, CarFront, ArrowRight
} from 'lucide-react';
import { contentService } from '../services/api';

const LOANS_MENU = [
  { name: 'Personal Loan', slug: 'personal-loan', desc: 'Instant funds up to ₹40L for urgent needs', icon: UserCheck, rate: 'From 10.49%' },
  { name: 'Loan Against Securities', slug: 'loan-against-securities', desc: 'Flexible overdraft against shares & mutual funds', icon: TrendingUp, rate: 'From 9.00%' },
  { name: 'Business Loan', slug: 'business-loan', desc: 'Working capital & enterprise expansion', icon: Briefcase, rate: 'From 11.25%' },
  { name: 'Home Loan', slug: 'home-loan', desc: 'Low rates with up to 30-year repayments', icon: Home, rate: 'From 8.40%' },
  { name: 'Loan Against Property', slug: 'loan-against-property', desc: 'Unlock value in residential or commercial real estate', icon: Building2, rate: 'From 9.15%' },
  { name: 'Education Loan', slug: 'education-loan', desc: 'Comprehensive domestic & overseas study funding', icon: GraduationCap, rate: 'From 9.50%' },
  { name: 'Gold Loan', slug: 'gold-loan', desc: 'Instant cash with secure bank-vault custody', icon: Coins, rate: 'From 8.85%' },
  { name: 'Vehicle Loan', slug: 'vehicle-loan', desc: 'New and used car finance with low EMIs', icon: CarFront, rate: 'From 8.75%' },
];

const Navbar = ({ onOpenEnquiry }) => {
  const [isLoansOpen, setIsLoansOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false);
  const [settings, setSettings] = useState({
    companyName: 'FinAdvise Loan Consultancy',
    contactPhone: '+91 98765 43210',
    contactEmail: 'contact@finadviseloans.com'
  });

  useEffect(() => {
    contentService.getSettings()
      .then(res => {
        if (res.data?.data) setSettings(res.data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Top Utility Notification Bar */}
      <div className="bg-[#174A8B] text-white text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Trust Badges */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center font-medium text-white">
              <span className="w-4 h-4 rounded-full bg-white/20 text-[#159B69] flex items-center justify-center mr-1.5 shrink-0">
                <ShieldCheck className="w-3 h-3 text-[#159B69]" />
              </span>
              India's Trusted Loan Consultation Gateway
            </span>
            <span className="text-blue-300/60">|</span>
            <span className="text-blue-100 font-normal">
              Zero Upfront Advisory Charges for Borrowers
            </span>
          </div>

          {/* Right: Contact & Admin Portal */}
          <div className="flex items-center space-x-5 text-blue-100">
            <a href={`tel:${settings.contactPhone}`} className="hover:text-white flex items-center transition-colors">
              <Phone className="w-3 h-3 text-blue-200 mr-1.5" />
              <span>{settings.contactPhone}</span>
            </a>
            <a href={`mailto:${settings.contactEmail}`} className="hover:text-white flex items-center transition-colors">
              <Mail className="w-3 h-3 text-blue-200 mr-1.5" />
              <span>{settings.contactEmail}</span>
            </a>
            <a 
              href="http://localhost:5174" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white font-bold hover:underline transition-colors ml-1 bg-white/10 px-2 py-0.5 rounded"
            >
              Admin Portal
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100/80">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* LEFT: Exact Brand Identity */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#174A8B] flex items-center justify-center text-white font-extrabold text-base sm:text-lg shadow-sm">
              FA
            </div>
            <div className="min-w-0">
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-black text-[#174A8B] tracking-tight">FinAdvise</span>
                <span className="ml-1.5 px-1.5 sm:px-2 py-0.5 text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-wider text-[#F28C28] border border-[#F28C28]/40 rounded-full">
                  LOANS
                </span>
              </div>
              <p className="text-[8px] sm:text-[9px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">
                SMARTER FINANCING GATEWAY
              </p>
            </div>
          </Link>

          {/* CENTER: Exact Navigation Items */}
          <nav className="hidden lg:flex items-center justify-center space-x-7 flex-1 px-4">
            
            {/* Home */}
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight py-1.5 ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
            >
              Home
            </NavLink>

            {/* About Us */}
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight py-1.5 ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
            >
              About Us
            </NavLink>

            {/* Loans Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLoansOpen(true)}
              onMouseLeave={() => setIsLoansOpen(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer py-1.5">
                <NavLink
                  to="/loans"
                  className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
                >
                  Loans
                </NavLink>
                <button 
                  type="button" 
                  aria-label="Toggle Loans Menu"
                  onClick={() => setIsLoansOpen(!isLoansOpen)}
                  className="text-slate-500 hover:text-[#174A8B] transition-colors focus:outline-none"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLoansOpen ? 'rotate-180 text-[#174A8B]' : ''}`} />
                </button>
              </div>

              {/* Mega Dropdown */}
              {isLoansOpen && (
                <div className="absolute top-full -left-16 w-[440px] bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">All 7 Loan Categories</span>
                    <Link 
                      to="/loans" 
                      onClick={() => setIsLoansOpen(false)} 
                      className="text-xs text-[#174A8B] font-bold hover:underline flex items-center"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-0.5">
                    {LOANS_MENU.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          to={`/loans/${item.slug}`}
                          onClick={() => setIsLoansOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center min-w-0 pr-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#174A8B] flex items-center justify-center mr-2.5 shrink-0 group-hover:bg-[#174A8B] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-slate-800 group-hover:text-[#174A8B] transition-colors truncate">
                                {item.name}
                              </p>
                              <p className="text-[11px] text-slate-400 truncate">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded shrink-0 group-hover:text-[#174A8B] group-hover:bg-blue-50 transition-colors">
                            {item.rate}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Check CIBIL Score */}
            <NavLink 
              to="/cibil-score" 
              className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight py-1.5 ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
            >
              Check CIBIL Score
            </NavLink>

            {/* Blogs */}
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight py-1.5 ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
            >
              Blogs
            </NavLink>

            {/* Contact Us */}
            <NavLink 
              to="/contact-us" 
              className={({ isActive }) => `nav-link-underline text-[13px] font-bold tracking-tight py-1.5 ${isActive ? 'active text-[#174A8B]' : 'text-slate-700 hover:text-[#174A8B]'}`}
            >
              Contact Us
            </NavLink>

          </nav>

          {/* RIGHT: Customer Support CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-bold text-xs text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-md shadow-orange-500/20 active:scale-95"
            >
              <Headphones className="w-4 h-4 mr-2" />
              <span>Customer Support</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2 rounded-xl text-slate-700 hover:text-[#174A8B] hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#174A8B]"
          >
            Home
          </Link>

          <Link 
            to="/about-us" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#174A8B]"
          >
            About Us
          </Link>

          {/* Loans Accordion */}
          <div className="py-2 border-t border-b border-slate-100">
            <button
              onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
              className="w-full flex items-center justify-between text-sm font-bold text-slate-800 hover:text-[#174A8B] focus:outline-none"
            >
              <span>Loans</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLoansOpen ? 'rotate-180 text-[#174A8B]' : ''}`} />
            </button>

            {mobileLoansOpen && (
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold text-[#174A8B] py-1.5"
                >
                  Explore All Loans →
                </Link>
                {LOANS_MENU.map(loan => (
                  <Link
                    key={loan.slug}
                    to={`/loans/${loan.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xs font-medium text-slate-700 hover:text-[#174A8B] py-1.5"
                  >
                    <span>{loan.name}</span>
                    <span className="text-[10px] text-slate-500 font-semibold">{loan.rate}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/cibil-score" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#174A8B]"
          >
            Check CIBIL Score
          </Link>

          <Link 
            to="/blogs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#174A8B]"
          >
            Blogs
          </Link>

          <Link 
            to="/contact-us" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#174A8B]"
          >
            Contact Us
          </Link>

          <div className="pt-3">
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-full text-xs font-bold text-white bg-[#F28C28] hover:bg-[#DC7815] transition shadow-md"
            >
              <Headphones className="w-4 h-4 mr-2" />
              <span>Customer Support</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;