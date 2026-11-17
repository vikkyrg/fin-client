import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Lock } from 'lucide-react';
import { enquiryService } from '../services/api';

const LoanEnquiryForm = ({ loanType, loanTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    requiredLoanAmount: '',
    privacyConsent: true,
    // Dynamic fields
    employmentType: 'Salaried',
    monthlyIncome: '',
    securityType: 'Mutual Funds',
    approximateInvestmentValue: '',
    businessType: 'Proprietorship',
    businessVintage: '1-3 years',
    annualTurnover: '',
    propertyValue: '',
    propertyLocation: '',
    propertyType: 'Residential',
    courseName: '',
    institutionName: '',
    studyLocation: 'Domestic (India)',
    educationExpenses: '',
    approximateGoldWeight: '',
    goldPurity: '22K',
    vehicleType: 'New Car',
    vehicleModel: '',
    onRoadPrice: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validations
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobileNumber.trim())) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number (e.g. 98XXXXXXXX)');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city');
      return;
    }
    if (!formData.requiredLoanAmount || Number(formData.requiredLoanAmount) < 10000) {
      setErrorMessage('Minimum required loan amount must be at least ₹10,000');
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMessage('You must agree to the privacy policy terms');
      return;
    }

    // Structure payload
    const payload = {
      loanType,
      fullName: formData.fullName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim(),
      city: formData.city.trim(),
      requiredLoanAmount: Number(formData.requiredLoanAmount),
      privacyConsent: formData.privacyConsent,
      loanDetails: {}
    };

    // Populate loan-specific fields
    switch (loanType) {
      case 'personal-loan':
        if (!formData.monthlyIncome) {
          setErrorMessage('Please enter your net monthly income');
          return;
        }
        payload.loanDetails = {
          employmentType: formData.employmentType,
          monthlyIncome: Number(formData.monthlyIncome)
        };
        break;

      case 'loan-against-securities':
        if (!formData.approximateInvestmentValue) {
          setErrorMessage('Please enter your approximate investment portfolio value');
          return;
        }
        payload.loanDetails = {
          securityType: formData.securityType,
          approximateInvestmentValue: Number(formData.approximateInvestmentValue)
        };
        break;

      case 'business-loan':
        if (!formData.annualTurnover) {
          setErrorMessage('Please enter your annual business turnover');
          return;
        }
        payload.loanDetails = {
          businessType: formData.businessType,
          businessVintage: formData.businessVintage,
          annualTurnover: Number(formData.annualTurnover)
        };
        break;

      case 'home-loan':
        if (!formData.propertyValue) {
          setErrorMessage('Please enter the estimated property cost');
          return;
        }
        if (!formData.propertyLocation.trim()) {
          setErrorMessage('Please enter the property city/location');
          return;
        }
        payload.loanDetails = {
          propertyValue: Number(formData.propertyValue),
          propertyLocation: formData.propertyLocation.trim(),
          employmentType: formData.employmentType
        };
        break;

      case 'loan-against-property':
        if (!formData.propertyValue) {
          setErrorMessage('Please enter the estimated property valuation');
          return;
        }
        if (!formData.propertyLocation.trim()) {
          setErrorMessage('Please specify property location');
          return;
        }
        payload.loanDetails = {
          propertyType: formData.propertyType,
          propertyLocation: formData.propertyLocation.trim(),
          propertyValue: Number(formData.propertyValue)
        };
        break;

      case 'education-loan':
        if (!formData.courseName.trim()) {
          setErrorMessage('Please enter the course/degree name');
          return;
        }
        if (!formData.institutionName.trim()) {
          setErrorMessage('Please enter the college/university name');
          return;
        }
        if (!formData.educationExpenses) {
          setErrorMessage('Please enter estimated total course expenses');
          return;
        }
        payload.loanDetails = {
          courseName: formData.courseName.trim(),
          institutionName: formData.institutionName.trim(),
          studyLocation: formData.studyLocation,
          educationExpenses: Number(formData.educationExpenses)
        };
        break;

      case 'gold-loan':
        if (!formData.approximateGoldWeight) {
          setErrorMessage('Please enter approximate gold weight in grams');
          return;
        }
        payload.loanDetails = {
          approximateGoldWeight: Number(formData.approximateGoldWeight),
          goldPurity: formData.goldPurity
        };
        break;

      case 'vehicle-loan':
        payload.loanDetails = {
          vehicleType: formData.vehicleType,
          vehicleModel: formData.vehicleModel.trim() || undefined,
          onRoadPrice: formData.onRoadPrice ? Number(formData.onRoadPrice) : undefined
        };
        break;

      default:
        break;
    }

    try {
      setLoading(true);
      const res = await enquiryService.submitEnquiry(payload);
      if (res.data?.success) {
        setSuccessResponse(res.data.data);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit enquiry. Please check the form and try again.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  if (successResponse) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Enquiry Received!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          Thank you for choosing FinAdvise. Your dedicated {loanTitle || 'Loan'} advisory consultant will contact you within 24 working hours with personalized bank offers.
        </p>
        <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-left mb-6 text-xs">
          <p className="text-slate-500 font-medium">Application Reference ID</p>
          <p className="text-base font-bold text-brand-blue tracking-wide">{successResponse.enquiryId}</p>
        </div>
        <div>
          <button
            onClick={() => {
              setSuccessResponse(null);
              setFormData(prev => ({
                ...prev,
                fullName: '',
                mobileNumber: '',
                email: '',
                city: '',
                requiredLoanAmount: ''
              }));
            }}
            className="text-xs font-bold text-brand-blue hover:underline"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="enquire" className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-orange-50 px-2 py-0.5 rounded">
            Dedicated Application Form
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">Apply for {loanTitle}</h3>
        </div>
        <div className="hidden sm:flex items-center text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <Lock className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
          <span>Safe & Secure 256-Bit</span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* COMMON FIELDS ROW 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Mobile Number (10 Digits) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-400">+91</span>
              <input
                type="tel"
                name="mobileNumber"
                maxLength="10"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full pl-12 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition"
                required
              />
            </div>
          </div>
        </div>

        {/* COMMON FIELDS ROW 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ramesh@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Current City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Mumbai, Pune, Delhi"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition"
              required
            />
          </div>
        </div>

        {/* COMMON FIELD: REQUIRED LOAN AMOUNT */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Required Loan Amount (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="requiredLoanAmount"
            min="10000"
            step="5000"
            value={formData.requiredLoanAmount}
            onChange={handleChange}
            placeholder="e.g. 500000"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition"
            required
          />
        </div>

        {/* DYNAMIC FORM FIELDS BASED ON LOAN TYPE */}
        <div className="pt-2 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
            Product Specific Information
          </p>

          {/* 1. Personal Loan */}
          {loanType === 'personal-loan' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="Salaried">Salaried (Private / Govt)</option>
                  <option value="Self-Employed Professional">Self-Employed Professional (Doctor, CA, etc.)</option>
                  <option value="Self-Employed Business">Self-Employed Business Owner</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Net Monthly In-Hand Salary (₹)</label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  placeholder="e.g. 60000"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* 2. Loan Against Securities */}
          {loanType === 'loan-against-securities' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Security Type</label>
                <select
                  name="securityType"
                  value={formData.securityType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="Mutual Funds">Mutual Funds (Equity / Debt)</option>
                  <option value="Shares / Equities">Shares / Equities (Demat Listed)</option>
                  <option value="Bonds / Debentures">Bonds / Sovereign Gold Bonds</option>
                  <option value="Insurance Policies">Life Insurance Policies (Surrender Value)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Approx. Portfolio Valuation (₹)</label>
                <input
                  type="number"
                  name="approximateInvestmentValue"
                  value={formData.approximateInvestmentValue}
                  onChange={handleChange}
                  placeholder="e.g. 2000000"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* 3. Business Loan */}
          {loanType === 'business-loan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Constitution</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Proprietorship">Proprietorship</option>
                    <option value="Partnership">Partnership Firm</option>
                    <option value="Pvt Ltd Company">Private Limited Company</option>
                    <option value="LLP">Limited Liability Partnership (LLP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Vintage (Years)</label>
                  <select
                    name="businessVintage"
                    value={formData.businessVintage}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-3 years">1 - 3 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="5+ years">More than 5 years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Annual Gross Turnover (₹)</label>
                <input
                  type="number"
                  name="annualTurnover"
                  value={formData.annualTurnover}
                  onChange={handleChange}
                  placeholder="e.g. 7500000"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* 4. Home Loan */}
          {loanType === 'home-loan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Property Cost (₹)</label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleChange}
                    placeholder="e.g. 7500000"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Employment Profile</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Salaried">Salaried Employee</option>
                    <option value="Self-Employed Professional">Self-Employed Professional</option>
                    <option value="Self-Employed Business">Self-Employed Business</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Property Location / Area</label>
                <input
                  type="text"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                  placeholder="e.g. Whitefield, Bengaluru"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* 5. Loan Against Property */}
          {loanType === 'loan-against-property' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Residential">Residential Flat / House</option>
                    <option value="Commercial">Commercial Office / Shop</option>
                    <option value="Industrial">Industrial Unit / Shed</option>
                    <option value="Plot / Land">Commercial / Residential Plot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Approx. Market Valuation (₹)</label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleChange}
                    placeholder="e.g. 15000000"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Property Location</label>
                <input
                  type="text"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                  placeholder="e.g. Andheri East, Mumbai"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>
          )}

          {/* 6. Education Loan */}
          {loanType === 'education-loan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Course / Degree Program</label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    placeholder="e.g. MBA, MS in Data Science"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Study Location</label>
                  <select
                    name="studyLocation"
                    value={formData.studyLocation}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Domestic (India)">Domestic (India)</option>
                    <option value="International / Overseas">International / Overseas</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">University / College Name</label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    placeholder="e.g. IIM Ahmedabad / University of Melbourne"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Total Expenses (₹)</label>
                  <input
                    type="number"
                    name="educationExpenses"
                    value={formData.educationExpenses}
                    onChange={handleChange}
                    placeholder="e.g. 2500000"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* 7. Gold Loan */}
          {loanType === 'gold-loan' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Approx. Gold Weight (in Grams)</label>
                <input
                  type="number"
                  name="approximateGoldWeight"
                  value={formData.approximateGoldWeight}
                  onChange={handleChange}
                  placeholder="e.g. 50"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Gold Purity (If Known)</label>
                <select
                  name="goldPurity"
                  value={formData.goldPurity}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="22K">22 Karat (Standard Ornaments)</option>
                  <option value="24K">24 Karat (Pure Coins / Bars)</option>
                  <option value="20K">20 Karat</option>
                  <option value="18K">18 Karat</option>
                </select>
              </div>
            </div>
          )}

          {/* 8. Vehicle Loan */}
          {loanType === 'vehicle-loan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Vehicle Category</label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="New Car">Brand New Four-Wheeler (Car/SUV)</option>
                    <option value="Pre-Owned Car">Certified Pre-Owned / Used Car</option>
                    <option value="Electric Vehicle (EV)">Electric Vehicle (EV)</option>
                    <option value="Commercial Vehicle">Commercial Vehicle / Fleet</option>
                    <option value="Two Wheeler">Two Wheeler (Bike / Scooter)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Vehicle Model</label>
                  <input
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    placeholder="e.g. Hyundai Creta, Tata Nexon"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Approx. On-Road / Quotation Price (₹)</label>
                <input
                  type="number"
                  name="onRoadPrice"
                  value={formData.onRoadPrice}
                  onChange={handleChange}
                  placeholder="e.g. 1400000"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>
          )}

        </div>

        {/* PRIVACY CONSENT */}
        <div className="pt-2">
          <label className="flex items-start text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded text-brand-orange border-slate-300 focus:ring-brand-orange"
            />
            <span className="ml-2 leading-relaxed">
              I authorize FinAdvise and its verified RBI registered lending partners to contact me via Call, SMS or WhatsApp regarding this loan enquiry. I agree to the <a href="/privacy-policy" className="text-brand-blue underline">Privacy Policy</a>.
            </span>
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Validating & Submitting...</span>
            </>
          ) : (
            <>
              <span>Get Free Loan Advisory Call</span>
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </button>

      </form>
    </div>
  );
};

export default LoanEnquiryForm;
