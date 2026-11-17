import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, 
  ExternalLink, Headphones, Sparkles, Building2
} from 'lucide-react';
import { contentService } from '../services/api';

const Footer = () => {
  const [settings, setSettings] = useState({
    companyName: 'FinAdvise Loan Consultancy',
    tagline: 'Your Trusted Gateway to Smarter Financing Solutions',
    contactEmail: 'contact@finadviseloans.com',
    contactPhone: '+91 98765 43210',
    alternatePhone: '+91 80000 12345',
    officeAddress: 'Tower B, 4th Floor, Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    workingHours: 'Mon - Sat: 9:30 AM to 6:30 PM',
    disclaimerText: 'FinAdvise is an independent loan consultancy and loan facilitation service. We partner with RBI registered Banks and NBFCs to bring you transparent loan offers. We do not charge upfront fees for standard loan advisory.',
    socialLinks: {}
  });

  useEffect(() => {
    contentService.getSettings()
      .then(res => {
        if (res.data?.data) setSettings(res.data.data);
      })
      .catch(() => {});
  }, []);

  const QUICK_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Loan Products', path: '/loans' },
    { name: 'Check CIBIL Score', path: '/cibil-score' },
    { name: 'Financial Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const LOAN_PRODUCTS = [
    { name: 'Personal Loan', path: '/loans/personal-loan' },
    { name: 'Loan Against Securities', path: '/loans/loan-against-securities' },
    { name: 'Business Loan', path: '/loans/business-loan' },
    { name: 'Home Loan', path: '/loans/home-loan' },
    { name: 'Loan Against Property', path: '/loans/loan-against-property' },
    { name: 'Education Loan', path: '/loans/education-loan' },
    { name: 'Gold Loan', path: '/loans/gold-loan' },
    { name: 'Vehicle Loan', path: '/loans/vehicle-loan' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#102B52] via-[#0E2548] to-[#0A1B34] text-white pt-16 sm:pt-20 pb-10 border-t border-t-[#F7931E]/60 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden antialiased select-none">
      
      {/* 1. Subtle Ambient Gradient Lighting & Flowing Accents */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 0%, rgba(29, 90, 160, 0.18) 0%, rgba(23, 75, 135, 0.06) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 70%)'
        }}
      />

      {/* Faint Architectural Linear Contour Line */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* ========================================================================= */}
        {/* 2. MAIN 4-COLUMN RESPONSIVE LAYOUT                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* COLUMN 1 – BRAND INFORMATION (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white text-[#102B52] flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
                FA
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-black text-white tracking-tight">FinAdvise</span>
                <span className="ml-2.5 px-2 py-0.5 text-[10.5px] font-black uppercase tracking-wider bg-[#F7931E] text-white rounded-md shadow-xs">
                  LOANS
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] text-[#C5D5EA] leading-[1.65] font-normal pr-4 sm:pr-6">
              Your Trusted Gateway to Smarter Financing Solutions. We empower Indian borrowers and business owners to secure transparent, competitive, and timely credit assistance.
            </p>

            {/* Address & Operating Hours */}
            <div className="space-y-3 pt-2 text-xs text-[#C5D5EA]">
              <div className="flex items-start space-x-3 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F7931E]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed font-normal">{settings.officeAddress}</span>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="font-normal">{settings.workingHours}</span>
              </div>
            </div>

            {/* Social Media Link Icons if available */}
            {settings.socialLinks && Object.keys(settings.socialLinks).length > 0 && (
              <div className="pt-2 flex items-center space-x-2.5">
                {Object.entries(settings.socialLinks).map(([platform, url]) => (
                  url ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F7931E] text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null
                ))}
              </div>
            )}
          </div>

          {/* COLUMN 2 – QUICK LINKS (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <div className="w-7 h-0.5 bg-[#F7931E] rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-xs text-[#C5D5EA]">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-200 group font-normal py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#2864F0] group-hover:text-[#F7931E] transition-colors shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 – LOAN PRODUCTS (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Loan Products
              </h3>
              <div className="w-7 h-0.5 bg-[#F7931E] rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-xs text-[#C5D5EA]">
              {LOAN_PRODUCTS.map((prod) => (
                <li key={prod.path}>
                  <Link 
                    to={prod.path}
                    className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-200 group font-normal py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#10B981] group-hover:text-[#F7931E] transition-colors shrink-0" />
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 – ASSISTANCE DESK (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Assistance Desk
              </h3>
              <div className="w-7 h-0.5 bg-[#F7931E] rounded-full mt-2" />
            </div>

            <div className="space-y-3.5 text-xs text-[#C5D5EA]">
              {/* Telephone */}
              <a 
                href={`tel:${settings.contactPhone}`} 
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Toll-Free Helpline</p>
                  <p className="font-black text-xs sm:text-sm tracking-wide text-white group-hover:text-emerald-300 transition-colors">
                    {settings.contactPhone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${settings.contactEmail}`} 
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#2864F0] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Advisory Desk</p>
                  <p className="font-bold text-xs text-white group-hover:text-blue-200 transition-colors truncate">
                    {settings.contactEmail}
                  </p>
                </div>
              </a>

              {/* Customer Support CTA Button */}
              <div className="pt-1">
                <Link
                  to="/contact-us"
                  className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-black text-xs tracking-wide shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <Headphones className="w-3.5 h-3.5 mr-2" />
                  <span>Customer Support</span>
                </Link>
              </div>

              {/* Short Supporting Text */}
              <div className="pt-1 text-[11px] text-[#C5D5EA] space-y-0.5 leading-relaxed font-normal">
                <p>Licensed Loan Consultancy Facilitation.</p>
                <p className="text-emerald-400 font-bold">100% Free Advisory for Borrowers.</p>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. REGULATORY & STATUTORY DISCLAIMER SECTION                              */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-white">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Regulatory &amp; Statutory Disclaimer</span>
          </div>
          <p className="text-[11.5px] sm:text-xs text-[#C5D5EA]/90 leading-relaxed font-normal">
            {settings.disclaimerText}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM COPYRIGHT & LEGAL BAR                                           */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5D5EA] gap-4">
          <p className="font-normal text-center sm:text-left">
            © {new Date().getFullYear()} FinAdvise Loan Consultancy Services. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-[#C5D5EA]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
