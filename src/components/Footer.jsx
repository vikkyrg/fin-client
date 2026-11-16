import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
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

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-brand-blueDark font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-white text-brand-blue flex items-center justify-center font-extrabold text-lg shadow-sm">
                FA
              </div>
              <div className="text-xl font-bold text-white tracking-tight">
                FinAdvise
                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase bg-white/15 text-white rounded">
                  Loans
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed pr-6">
              {settings.tagline}. We empower Indian borrowers and business owners to secure transparent, competitive, and timely credit assistance with over 20+ RBI registered banking partners.
            </p>

            <div className="pt-2 space-y-2 text-xs text-blue-100/80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-blue-200 mt-0.5 flex-shrink-0" />
                <span>{settings.officeAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-blue-200 flex-shrink-0" />
                <span>{settings.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/loans" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Loan Products
                </Link>
              </li>
              <li>
                <Link to="/cibil-score" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Check CIBIL Score
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Financial Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 7 Loan Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2">
              Loan Products
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>
                <Link to="/loans/personal-loan" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/loan-against-securities" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Loan Against Securities
                </Link>
              </li>
              <li>
                <Link to="/loans/business-loan" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Business Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/home-loan" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Home Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/loan-against-property" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link to="/loans/education-loan" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Education Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/gold-loan" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-60" />
                  Gold Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2">
              Assistance Desk
            </h4>
            <div className="space-y-3 text-xs text-blue-100/90">
              <a href={`tel:${settings.contactPhone}`} className="flex items-center space-x-2 text-white hover:underline transition-colors">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <span>{settings.contactPhone}</span>
              </a>
              
              <a href={`mailto:${settings.contactEmail}`} className="flex items-center space-x-2 text-white hover:underline transition-colors">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <span className="truncate">{settings.contactEmail}</span>
              </a>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="btn-cta inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg font-bold text-xs"
                >
                  <span>Customer Support</span>
                </Link>
              </div>

              <div className="pt-1 text-[11px] text-blue-200">
                <p>Licensed Loan Consultancy Facilitation.</p>
                <p className="mt-0.5 text-blue-100 font-medium">100% Free Advisory for Borrowers.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-5 border-b border-white/10 text-[11px] text-blue-200/80 leading-relaxed">
          <p className="font-semibold text-white mb-1">Regulatory & Statutory Disclaimer:</p>
          <p>{settings.disclaimerText}</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/80 gap-3">
          <p>© {new Date().getFullYear()} FinAdvise Loan Consultancy Services. All rights reserved.</p>
          <div className="flex items-center space-x-5 text-blue-100 text-xs">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;