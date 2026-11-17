import React, { useState } from 'react';
import { User, Phone, Mail, LayoutGrid, Send, MessageSquare, CheckCircle2, ChevronDown, Loader2, ShieldCheck } from 'lucide-react';
import { enquiryService } from '../services/api';

const LOAN_OPTIONS = [
  { value: 'personal-loan', label: 'Personal Loan' },
  { value: 'loan-against-securities', label: 'Loan Against Securities' },
  { value: 'business-loan', label: 'Business Loan' },
  { value: 'home-loan', label: 'Home Loan' },
  { value: 'loan-against-property', label: 'Loan Against Property' },
  { value: 'education-loan', label: 'Education Loan' },
  { value: 'gold-loan', label: 'Gold Loan' },
  { value: 'vehicle-loan', label: 'Vehicle Loan' },
  { value: 'other', label: 'Other Advisory' }
];

/**
 * Unified Loan Enquiry Form Component
 * Shared cleanly between Desktop Hero (Right side) and Mobile Layout (Dedicated next section).
 * Single form logic, prevents code duplication, and adapts responsive styles seamlessly.
 */
const QuickLoanEnquiryCard = ({ isMobileSection = false, onSubmittedSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    loanType: '',
    requirement: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    if (!formData.mobileNumber.trim() || !/^\d{10}$/.test(formData.mobileNumber.trim())) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formData.loanType) {
      setErrorMessage('Please select a loan type');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      await enquiryService.submitEnquiry({
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        email: formData.email.trim() || undefined,
        loanType: formData.loanType,
        source: 'Homepage',
        requirement: formData.requirement ? formData.requirement.trim() : '',
        city: 'Homepage Lead',
        requiredLoanAmount: 500000,
        privacyConsent: true,
        loanDetails: {
          remarks: formData.requirement ? formData.requirement.trim() : 'Submitted from Homepage Enquire for a Loan Form'
        }
      });
      setSubmitted(true);
      if (onSubmittedSuccess) onSubmittedSuccess();
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit enquiry. Please try again.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      id={isMobileSection ? 'hero-enquiry-section-mobile' : 'hero-enquiry-card'}
      className="w-full bg-white rounded-[22px] sm:rounded-[26px] shadow-[0_14px_42px_rgba(23,74,139,0.11)] border border-[#E2E8F0] overflow-hidden transition-all duration-300"
    >
      {/* Form Card Header - Rich Royal Blue Gradient */}
      <div className="relative bg-gradient-to-r from-[#0755B8] via-[#0E5EC6] to-[#124B9E] px-5 sm:px-6 py-3.5 sm:py-5 text-white overflow-hidden">
        {/* Decorative corner curve */}
        <svg 
          className="absolute bottom-0 right-0 w-24 h-12 text-[#159B69] opacity-75 pointer-events-none"
          viewBox="0 0 100 50" 
          fill="currentColor"
        >
          <path d="M0,50 Q60,50 80,0 Q90,30 100,50 Z" />
        </svg>

        <div className="relative z-10 flex items-center space-x-3 sm:space-x-3.5">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            {isMobileSection ? (
              <>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
                  Instant Advisory Request
                </h3>
                <p className="text-[10.5px] sm:text-xs text-blue-100/90 leading-tight mt-0.5">
                  Connect with a certified lending consultant in minutes
                </p>
              </>
            ) : (
              <>
                <h2 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight">
                  Enquire for a Loan
                </h2>
                <p className="text-[11px] sm:text-xs text-blue-100/90 leading-tight mt-0.5">
                  Get expert guidance and the best loan options for your needs.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-4 sm:p-6 bg-white">
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-[#159B69] rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Enquiry Submitted Successfully!
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you for reaching out. Our certified loan advisor will review your requirement and contact you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', mobileNumber: '', email: '', loanType: '', requirement: '' });
              }}
              className="mt-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#174A8B] bg-blue-50 hover:bg-blue-100 transition border border-blue-200 cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            
            {/* Error Banner */}
            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Full Name & Mobile Number (Stacked on mobile, 2 cols on tablet/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 sm:hidden">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id={isMobileSection ? 'hero-fullName-mobile' : 'hero-fullName'}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full pl-10 pr-3.5 h-[46px] sm:h-[48px] text-xs sm:text-sm text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0755B8]/20 focus:border-[#0755B8] focus:bg-white transition"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 sm:hidden">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit Mobile Number *"
                    maxLength={10}
                    className="w-full pl-10 pr-3.5 h-[46px] sm:h-[48px] text-xs sm:text-sm text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0755B8]/20 focus:border-[#0755B8] focus:bg-white transition"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email Address & Select Loan Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 sm:hidden">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address (Optional)"
                    className="w-full pl-10 pr-3.5 h-[46px] sm:h-[48px] text-xs sm:text-sm text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0755B8]/20 focus:border-[#0755B8] focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Select Loan Type */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 sm:hidden">
                  Select Loan Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LayoutGrid className="w-4 h-4" />
                  </span>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 h-[46px] sm:h-[48px] text-xs sm:text-sm text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#0755B8]/20 focus:border-[#0755B8] focus:bg-white transition appearance-none cursor-pointer font-medium"
                    required
                  >
                    <option value="" disabled>Select Loan Type *</option>
                    {LOAN_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Multiline Requirement / Message */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 sm:hidden">
                Your Requirement / Message
              </label>
              <div className="relative">
                <textarea
                  name="requirement"
                  rows={2}
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Your Requirement / Message (Optional)"
                  className="w-full p-3 text-xs sm:text-sm text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0755B8]/20 focus:border-[#0755B8] focus:bg-white transition resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[48px] sm:h-[52px] rounded-[12px] font-bold text-xs sm:text-base text-white bg-gradient-to-r from-[#F58A22] to-[#F28C28] hover:from-[#E07914] hover:to-[#E07914] transition-all duration-200 shadow-md shadow-orange-500/25 active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>

            {/* Privacy Note */}
            <div className="pt-0.5 flex items-center justify-center space-x-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#159B69] shrink-0" />
              <span>Your information is secure and confidential.</span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default QuickLoanEnquiryCard;
