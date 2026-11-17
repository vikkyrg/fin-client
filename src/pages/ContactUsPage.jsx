import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  Loader2, ShieldCheck, Sparkles, Building2, Headphones, AlertCircle
} from 'lucide-react';
import { contentService, enquiryService } from '../services/api';
import { ScrollReveal } from '../components/ScrollReveal';

const SUBJECT_TO_LOANTYPE = {
  'Personal Loan Advisory': 'personal-loan',
  'Business Loan Advisory': 'business-loan',
  'Home Loan / Mortgage': 'home-loan',
  'Loan Against Securities': 'loan-against-securities',
  'Credit Score & CIBIL Rebuilding': 'other',
  'Banking Partner Tie-up': 'other',
  'General Loan Inquiry': 'other',
  'Other': 'other'
};

const ContactUsPage = () => {
  const [settings, setSettings] = useState({
    companyName: 'FinAdvise Loan Consultancy',
    contactEmail: 'contact@finadviseloans.com',
    contactPhone: '+91 98765 43210',
    alternatePhone: '+91 80000 12345',
    officeAddress: 'Tower B, 4th Floor, Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    workingHours: 'Mon - Sat: 9:30 AM to 6:30 PM'
  });

  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    subject: 'General Loan Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    contentService.getSettings()
      .then(res => {
        if (res.data?.data) setSettings(res.data.data);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.fullName.trim() || !form.mobileNumber.trim()) {
      setErrorMessage('Please provide your name and 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const selectedLoanType = SUBJECT_TO_LOANTYPE[form.subject] || 'other';
      const requirementText = `[Subject: ${form.subject}] ${form.message.trim()}`;

      await enquiryService.submitEnquiry({
        fullName: form.fullName.trim(),
        mobileNumber: form.mobileNumber.trim(),
        email: form.email.trim() || undefined,
        loanType: selectedLoanType,
        source: 'Homepage',
        requirement: requirementText,
        city: 'Contact Page Inquiry',
        requiredLoanAmount: 500000,
        privacyConsent: true,
        loanDetails: {
          inquirySubject: form.subject,
          remarks: requirementText
        }
      });

      setSubmitted(true);
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit inquiry. Please try again.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F4F8FD] min-h-screen pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION - NAVY-TO-BLUE COMPACT EDITORIAL HEADER               */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#102B52] via-[#1D4F91] to-[#123668] text-white pt-12 sm:pt-16 pb-24 sm:pb-28">
        
        {/* Subtle Transparent Geometric Accents & Ambient Curved Glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-400/15 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Elegant Abstract Curved Vector on Right */}
        <svg 
          className="absolute -right-12 top-0 h-full w-[420px] opacity-15 hidden lg:block pointer-events-none" 
          viewBox="0 0 420 300" 
          fill="none"
        >
          <path 
            d="M50 0 C 180 80, 240 220, 420 300 L 420 0 Z" 
            fill="url(#contact-hero-curve)" 
          />
          <defs>
            <linearGradient id="contact-hero-curve" x1="50" y1="0" x2="420" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2864F0" stopOpacity="0.8" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          {/* Pill Badge */}
          <ScrollReveal type="fade-down" delay={0.05}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase text-emerald-300 bg-white/10 border border-white/15 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>CONNECT WITH OUR ADVISORY DESK</span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal type="fade-up" delay={0.12}>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Talk About Your{' '}
              <span className="text-[#F28C28] inline-block font-black drop-shadow-sm">
                Financial Goals
              </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal type="fade-up" delay={0.18}>
            <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              Have questions about loan options, interest rates, or eligibility? Our experienced advisory team is here to help you make informed financial decisions.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BACKGROUND ARCHITECTURAL WASH & AMBIENT CURVES                         */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 top-[280px] pointer-events-none -z-0 overflow-hidden">
        {/* Very light blue-white ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F8FD] via-[#FFFFFF] to-[#EFF5FC]" />
        
        {/* Soft flowing translucent ambient shape */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-200/25 to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-emerald-100/30 via-sky-100/20 to-transparent blur-3xl" />
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN TWO-COLUMN CONTACT CARDS CONTAINER                                */}
      {/* ========================================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          
          {/* ======================================================================= */}
          {/* LEFT: DARK NAVY CONTACT INFORMATION CARD (38% Width on Desktop)         */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal type="fade-right" className="w-full flex">
              <div className="w-full bg-gradient-to-br from-[#102B52] via-[#0E2445] to-[#0A1B34] text-white rounded-[24px] p-7 sm:p-9 lg:p-10 shadow-[0_16px_40px_rgba(16,43,82,0.22)] border border-blue-900/50 flex flex-col justify-between relative overflow-hidden">
                
                {/* Subtle Translucent Abstract Gradient Accent inside card */}
                <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-7">
                  
                  {/* Header Area */}
                  <div>
                    <span className="inline-flex items-center space-x-1.5 text-[10.5px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3">
                      <Building2 className="w-3 h-3 text-emerald-400" />
                      <span>Corporate Advisory Desk</span>
                    </span>

                    <h2 className="text-2xl sm:text-[26px] font-black tracking-tight text-white">
                      FinAdvise Loan Consultancy
                    </h2>

                    <p className="text-xs sm:text-[13px] text-blue-200/80 font-normal leading-relaxed mt-1.5">
                      Your trusted partner for smarter financial decisions. Facilitating verified financing through leading Banks and NBFCs.
                    </p>
                  </div>

                  {/* Clean Visual Divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Contact Information Rows */}
                  <div className="space-y-5 text-xs text-slate-300">
                    
                    {/* Office Address */}
                    <div className="flex items-start space-x-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-[#F7931E] shadow-xs group-hover:bg-[#F7931E]/20 transition-colors">
                        <MapPin className="w-4 h-4 text-[#F7931E]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Office Address</p>
                        <p className="text-white text-xs sm:text-[13px] font-medium leading-relaxed">
                          {settings.officeAddress}
                        </p>
                      </div>
                    </div>

                    {/* Telephone & Helplines */}
                    <div className="flex items-start space-x-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 shadow-xs group-hover:bg-emerald-500/20 transition-colors">
                        <Phone className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Telephone &amp; Helplines</p>
                        <p className="text-white text-xs sm:text-[13px] font-black tracking-wide">
                          {settings.contactPhone}
                        </p>
                        {settings.alternatePhone && (
                          <p className="text-blue-200 text-xs font-medium">
                            {settings.alternatePhone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Advisory Email */}
                    <div className="flex items-start space-x-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-blue-300 shadow-xs group-hover:bg-blue-400/20 transition-colors">
                        <Mail className="w-4 h-4 text-blue-300" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Advisory Email</p>
                        <p className="text-white text-xs sm:text-[13px] font-medium break-all">
                          {settings.contactEmail}
                        </p>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-start space-x-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-amber-300 shadow-xs group-hover:bg-amber-400/20 transition-colors">
                        <Clock className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Operating Hours</p>
                        <p className="text-white text-xs sm:text-[13px] font-medium">
                          {settings.workingHours}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer Note */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center space-x-2 text-[11px] text-blue-200/70 font-medium">
                  <Headphones className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero upfront advisory charges for standard retail loan assessment.</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT: WHITE PREMIUM ENQUIRY FORM CARD (62% Width on Desktop)           */}
          {/* ======================================================================= */}
          <div className="lg:col-span-7 flex">
            <ScrollReveal type="fade-left" delay={0.1} className="w-full flex">
              <div className="w-full bg-white rounded-[24px] p-7 sm:p-9 lg:p-10 shadow-[0_12px_36px_rgba(16,43,82,0.06)] border border-blue-100/90 flex flex-col justify-between">
                
                {submitted ? (
                  <div className="text-center py-12 sm:py-16 space-y-4 my-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-[#102B52]">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                      Thank you for contacting FinAdvise. Our dedicated loan advisory desk will review your details and connect with you within 24 working hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ fullName: '', mobileNumber: '', email: '', subject: 'General Loan Inquiry', message: '' });
                        }}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-50 text-[#1D4F91] hover:bg-blue-100/80 font-bold text-xs transition cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    
                    {/* Form Heading & Description */}
                    <div>
                      <h2 className="text-2xl sm:text-[26px] font-black text-[#102B52] tracking-tight">
                        Send Us a Direct Message
                      </h2>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1">
                        Our advisory team will review your enquiry and get back to you within 24 working hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      {errorMessage && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                      
                      {/* Row 1: Full Name & Mobile Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black text-[#102B52] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.fullName}
                            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            placeholder="e.g. Ramesh Kumar"
                            className="w-full h-[48px] sm:h-[50px] px-4 bg-[#F4F8FD] hover:bg-slate-50 border border-slate-200/90 focus:border-[#2864F0] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2864F0]/20 transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#102B52] mb-1.5">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            maxLength="10"
                            value={form.mobileNumber}
                            onChange={(e) => setForm({ ...form, mobileNumber: e.target.value.replace(/\D/g, '') })}
                            placeholder="10-digit mobile number"
                            className="w-full h-[48px] sm:h-[50px] px-4 bg-[#F4F8FD] hover:bg-slate-50 border border-slate-200/90 focus:border-[#2864F0] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2864F0]/20 transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email Address & Inquiry Subject */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black text-[#102B52] mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full h-[48px] sm:h-[50px] px-4 bg-[#F4F8FD] hover:bg-slate-50 border border-slate-200/90 focus:border-[#2864F0] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2864F0]/20 transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#102B52] mb-1.5">
                            Inquiry Subject
                          </label>
                          <select
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full h-[48px] sm:h-[50px] px-3.5 bg-[#F4F8FD] hover:bg-slate-50 border border-slate-200/90 focus:border-[#2864F0] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2864F0]/20 transition-all font-medium cursor-pointer"
                          >
                            <option value="General Loan Inquiry">General Loan Inquiry</option>
                            <option value="Personal Loan Advisory">Personal Loan Advisory</option>
                            <option value="Business Loan Advisory">Business Loan Advisory</option>
                            <option value="Home Loan / Mortgage">Home Loan / Mortgage</option>
                            <option value="Loan Against Securities">Loan Against Securities</option>
                            <option value="Credit Score & CIBIL Rebuilding">Credit Score &amp; CIBIL Rebuilding</option>
                            <option value="Banking Partner Tie-up">Banking Partner Tie-up</option>
                            <option value="Other">Other Query</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Your Message or Requirements */}
                      <div>
                        <label className="block text-xs font-black text-[#102B52] mb-1.5">
                          Your Message or Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows="4"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Please specify loan requirement, required amount, or any question you may have..."
                          className="w-full p-4 bg-[#F4F8FD] hover:bg-slate-50 border border-slate-200/90 focus:border-[#2864F0] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2864F0]/20 transition-all font-medium resize-none leading-relaxed"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2 space-y-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full h-[50px] sm:h-[52px] rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-black text-xs sm:text-sm tracking-wide shadow-md shadow-orange-500/25 active:scale-[0.99] transition-all flex items-center justify-center disabled:opacity-60 cursor-pointer"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              <span>Submitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Inquiry</span>
                              <Send className="w-3.5 h-3.5 ml-2" />
                            </>
                          )}
                        </button>

                        {/* Confidentiality note */}
                        <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>Your information is secure and confidential.</span>
                        </div>
                      </div>

                    </form>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;
