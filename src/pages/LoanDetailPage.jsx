import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, FileText, HelpCircle, 
  ChevronRight, AlertCircle, Info, Calculator, Award
} from 'lucide-react';
import { loanService } from '../services/api';
import LoanEnquiryForm from '../components/LoanEnquiryForm';
import { LOAN_PRODUCTS_DATA, getLoanProductBySlug } from '../utils/loanData';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const LoanDetailPage = () => {
  const { slug } = useParams();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Interactive EMI Calculator State
  const [calcAmount, setCalcAmount] = useState(500000);
  const [calcRate, setCalcRate] = useState(10.5);
  const [calcTenure, setCalcTenure] = useState(36); // in months

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const localProduct = getLoanProductBySlug(slug);
    if (localProduct) {
      setLoan(localProduct);
      if (slug === 'home-loan' || slug === 'loan-against-property') {
        setCalcAmount(3000000);
        setCalcRate(8.5);
        setCalcTenure(180);
      } else if (slug === 'business-loan') {
        setCalcAmount(1500000);
        setCalcRate(11.5);
        setCalcTenure(48);
      } else if (slug === 'gold-loan') {
        setCalcAmount(250000);
        setCalcRate(9.0);
        setCalcTenure(12);
      } else {
        setCalcAmount(500000);
        setCalcRate(10.5);
        setCalcTenure(36);
      }
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

  const calculateEMI = () => {
    const monthlyRate = calcRate / (12 * 100);
    const emi = (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, calcTenure)) / (Math.pow(1 + monthlyRate, calcTenure) - 1);
    const totalPayment = emi * calcTenure;
    const totalInterest = totalPayment - calcAmount;
    return {
      monthlyEmi: Math.round(emi) || 0,
      totalInterest: Math.round(totalInterest) || 0,
      totalPayment: Math.round(totalPayment) || 0
    };
  };

  const emiStats = calculateEMI();

  if (loading && !loan) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  if (!loan) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-bold text-brand-blue mb-2">Loan Product Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">
          The requested loan category does not exist. Please browse our active lending options.
        </p>
        <Link
          to="/loans"
          className="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm"
        >
          View All 7 Loan Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <Link to="/loans" className="hover:text-brand-blue transition-colors">Loans</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="font-bold text-brand-blue">{loan.name}</span>
        </div>
      </div>

      {/* 2. Hero Banner - High-Contrast Institutional Blue */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal type="fade-down" delay={0.05}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold border border-white/15 text-blue-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    <span>RBI REGISTERED LENDING PARTNERS</span>
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.12}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {loan.name}
                </h1>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.18}>
                <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
                  {loan.tagline || loan.shortDescription}
                </p>
              </ScrollReveal>

              {/* Indicative Metrics Grid */}
              <ScrollReveal type="fade-up" delay={0.24}>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Interest Rate</span>
                    <span className="text-sm sm:text-lg font-extrabold text-white mt-0.5 block truncate">
                      {loan.indicativeInterestRate}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Max Tenure</span>
                    <span className="text-sm sm:text-lg font-extrabold text-white mt-0.5 block truncate">
                      {loan.maxTenure}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">Max Amount</span>
                    <span className="text-sm sm:text-lg font-extrabold text-white mt-0.5 block truncate">
                      {loan.maxLoanAmount}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-up" delay={0.3}>
                <div className="pt-2 flex flex-wrap gap-3.5 items-center">
                  <a
                    href="#enquire"
                    className="btn-cta px-6 py-3.5 rounded-lg font-bold text-sm flex items-center"
                  >
                    <span>Apply Now for {loan.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#emi-calculator"
                    className="btn-secondary px-5 py-3.5 rounded-lg font-bold text-sm flex items-center"
                  >
                    <Calculator className="w-4 h-4 mr-2 text-brand-blue" />
                    <span>Calculate EMI</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Clean White Application Panel */}
            <div className="lg:col-span-5">
              <ScrollReveal type="fade-left" delay={0.2}>
                <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-100 text-slate-800">
                  <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Quick Consultation
                    </span>
                    <span className="text-[11px] text-slate-400">100% Free & Confidential</span>
                  </div>
                  <LoanEnquiryForm loanType={loan.slug} loanTitle={loan.name} />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main 8-Column Area */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <ScrollReveal type="fade-up">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-4">
                <div className="flex items-center space-x-2 text-brand-blue">
                  <Info className="w-5 h-5 text-brand-blue" />
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-blue">
                    Overview of {loan.name}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {loan.overview || loan.fullDescription}
                </p>
                {loan.features && loan.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                    {loan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-brand-blue text-xs mb-1">{feat.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Key Benefits Grid */}
            {loan.keyBenefits && loan.keyBenefits.length > 0 && (
              <ScrollReveal type="fade-up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded">
                      Key Advantages
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-blue mt-1.5">
                      Why Choose {loan.name} via FinAdvise?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {loan.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                        <div className="flex items-start space-x-3">
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-blue text-xs sm:text-sm mb-1">{benefit.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* EMI Calculator */}
            <ScrollReveal type="fade-up">
              <div id="emi-calculator" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue flex items-center">
                      <Calculator className="w-5 h-5 text-brand-blue mr-2" />
                      Interactive {loan.name} EMI Calculator
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Plan your monthly installments and total interest outgo before applying.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-5 text-xs">
                    <div>
                      <div className="flex justify-between font-bold text-slate-800 mb-2">
                        <span>Loan Amount</span>
                        <span className="text-brand-blue text-sm font-extrabold">
                          ₹{Number(calcAmount).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <input 
                        type="range" 
                        min="50000" 
                        max="10000000" 
                        step="50000" 
                        value={calcAmount} 
                        onChange={(e) => setCalcAmount(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                        <span>₹50,000</span>
                        <span>₹1 Crore</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-slate-800 mb-2">
                        <span>Interest Rate (% p.a.)</span>
                        <span className="text-brand-blue text-sm font-extrabold">{calcRate}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="7.5" 
                        max="22.0" 
                        step="0.25" 
                        value={calcRate} 
                        onChange={(e) => setCalcRate(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                        <span>7.5%</span>
                        <span>22%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-slate-800 mb-2">
                        <span>Repayment Tenure</span>
                        <span className="text-brand-blue text-sm font-extrabold">
                          {calcTenure >= 12 ? `${Math.floor(calcTenure / 12)} Yrs (${calcTenure} Mos)` : `${calcTenure} Mos`}
                        </span>
                      </div>
                      <input 
                        type="range" 
                        min="6" 
                        max="240" 
                        step="6" 
                        value={calcTenure} 
                        onChange={(e) => setCalcTenure(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                        <span>6 Months</span>
                        <span>20 Years</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-brand-blue text-white p-6 rounded-xl space-y-4 shadow-md">
                    <div>
                      <span className="text-[10px] text-blue-200 uppercase font-bold tracking-wider block">Estimated Monthly EMI</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white block mt-1">
                        ₹{emiStats.monthlyEmi.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-white/15 space-y-2 text-xs">
                      <div className="flex justify-between text-blue-100">
                        <span>Principal Amount:</span>
                        <span className="font-bold text-white">₹{Number(calcAmount).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-blue-100">
                        <span>Total Interest Payable:</span>
                        <span className="font-bold text-white">₹{emiStats.totalInterest.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-blue-100">
                        <span>Total Amount Payable:</span>
                        <span className="font-bold text-white">₹{emiStats.totalPayment.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <a
                      href="#enquire"
                      className="btn-cta block text-center py-2.5 px-4 rounded-lg font-bold text-xs"
                    >
                      Apply with this EMI Plan
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Eligibility Criteria */}
            {loan.eligibilityCriteria && loan.eligibilityCriteria.length > 0 && (
              <ScrollReveal type="fade-up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-4">
                  <div className="flex items-center space-x-2 text-brand-blue">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-blue">
                      Eligibility Criteria for {loan.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500">
                    Lenders evaluate these basic benchmarks to determine maximum sanction eligibility and rate concessions.
                  </p>

                  <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {loan.eligibilityCriteria.map((item, idx) => (
                      <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-bold text-slate-800">{item.criteria}</span>
                        <span className="text-slate-600 sm:text-right font-medium">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Required Documents */}
            {loan.requiredDocuments && loan.requiredDocuments.length > 0 && (
              <ScrollReveal type="fade-up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-6">
                  <div className="flex items-center space-x-2 text-brand-blue">
                    <FileText className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-blue">
                      Required Documents Checklist
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {loan.requiredDocuments.map((doc, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                        <h4 className="font-bold text-brand-blue text-xs sm:text-sm mb-3 pb-2 border-b border-slate-200">
                          {doc.category}
                        </h4>
                        <ul className="space-y-2">
                          {doc.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start text-xs text-slate-600 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-2 mt-1.5 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Application Process */}
            {loan.applicationProcess && loan.applicationProcess.length > 0 && (
              <ScrollReveal type="fade-up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded">
                      Smooth Process
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-blue mt-1">
                      4-Step Application & Disbursal Process
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {loan.applicationProcess.map((step, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-2xl font-black text-slate-300 block mb-1">
                          0{step.stepNumber || sIdx + 1}
                        </span>
                        <h4 className="font-bold text-brand-blue text-sm mb-1">{step.stepTitle}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{step.stepDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* FAQs */}
            {loan.faqs && loan.faqs.length > 0 && (
              <ScrollReveal type="fade-up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 card-elevation space-y-4">
                  <div className="flex items-center space-x-2 text-brand-blue mb-2">
                    <HelpCircle className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-xl font-bold text-brand-blue">
                      Frequently Asked Questions on {loan.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {loan.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-bold text-brand-blue text-xs sm:text-sm mb-1.5">{faq.question}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Other Loan Products */}
            <ScrollReveal type="fade-left">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 card-elevation">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Other Loan Products
                </h3>
                <div className="space-y-1">
                  {LOAN_PRODUCTS_DATA.filter(l => l.slug !== loan.slug).map(other => (
                    <Link
                      key={other.slug}
                      to={`/loans/${other.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-brand-blue font-medium text-xs transition-colors"
                    >
                      <span>{other.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Advisory Assistance Card */}
            <ScrollReveal type="fade-left" delay={0.1}>
              <div className="bg-brand-blue text-white rounded-2xl p-6 shadow-md space-y-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-base text-white">Unbiased Multi-Bank Advisory</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Connect with an accredited senior loan advisor to compare pre-qualified bank offers without triggering multiple credit bureau hard inquiries.
                </p>
                <div className="pt-2 border-t border-white/15 space-y-1 text-xs text-blue-100">
                  <p><strong>Advisory Helpline:</strong> +91 98765 43210</p>
                  <p><strong>Desk Email:</strong> contact@finadviseloans.com</p>
                </div>
                <a
                  href="#enquire"
                  className="btn-cta block text-center py-2.5 px-4 rounded-lg text-xs font-bold"
                >
                  Request Free Callback
                </a>
              </div>
            </ScrollReveal>

            {/* Regulatory Trust Badge */}
            <ScrollReveal type="fade-left" delay={0.15}>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-[11px] text-slate-600 leading-relaxed space-y-1.5">
                <p className="font-bold text-slate-800 flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-brand-green" />
                  RBI Regulatory Adherence
                </p>
                <p>
                  FinAdvise acts as a registered loan consultancy facilitator. Final loan approval, interest rate sanction, and disbursement are at the sole discretion of respective partner Banks & NBFCs.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>

    </div>
  );
};

export default LoanDetailPage;