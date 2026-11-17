import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Info, Sparkles, RefreshCw } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

// Loan category-specific configuration boundaries and labels
const CALCULATOR_CONFIGS = {
  'personal-loan': {
    title: 'Personal Loan EMI Calculator',
    subtitle: 'Simulate monthly EMIs and interest commitments for personal borrowings.',
    type: 'emi',
    minAmount: 50000,
    maxAmount: 4000000,
    stepAmount: 25000,
    defaultAmount: 500000,
    amountLabel: 'Required Loan Amount',
    minRate: 10.49,
    maxRate: 22.0,
    stepRate: 0.25,
    defaultRate: 10.5,
    minTenure: 12,
    maxTenure: 72,
    stepTenure: 6,
    defaultTenure: 36,
    tenureUnit: 'Months',
    tenureLabel: 'Repayment Tenure'
  },
  'loan-against-securities': {
    title: 'Loan Against Securities (Overdraft) Calculator',
    subtitle: 'Calculate sanction limit (LTV) and daily interest servicing on utilized funds.',
    type: 'overdraft',
    minAmount: 100000,
    maxAmount: 50000000,
    stepAmount: 100000,
    defaultAmount: 2000000,
    amountLabel: 'Pledged Portfolio Valuation',
    minRate: 8.5,
    maxRate: 14.0,
    stepRate: 0.25,
    defaultRate: 9.5,
    minTenure: 12,
    maxTenure: 36,
    stepTenure: 6,
    defaultTenure: 24,
    tenureUnit: 'Months',
    tenureLabel: 'Credit Line Horizon (Annual Renewal)',
    ltvRatio: 0.65 // Average indicative LTV against equity & mutual funds
  },
  'business-loan': {
    title: 'Business Loan Repayment Calculator',
    subtitle: 'Plan commercial debt-service coverage, working capital EMI, and tenure.',
    type: 'emi',
    minAmount: 100000,
    maxAmount: 20000000,
    stepAmount: 50000,
    defaultAmount: 1500000,
    amountLabel: 'Business Financing Quantum',
    minRate: 11.25,
    maxRate: 24.0,
    stepRate: 0.25,
    defaultRate: 12.5,
    minTenure: 12,
    maxTenure: 84,
    stepTenure: 6,
    defaultTenure: 48,
    tenureUnit: 'Months',
    tenureLabel: 'Commercial Repayment Tenure'
  },
  'home-loan': {
    title: 'Home Loan EMI & Tenure Calculator',
    subtitle: 'Model extended tenures up to 30 years with repo-linked benchmark rates.',
    type: 'emi',
    minAmount: 500000,
    maxAmount: 100000000,
    stepAmount: 100000,
    defaultAmount: 3500000,
    amountLabel: 'Property Purchase / Loan Amount',
    minRate: 8.4,
    maxRate: 12.0,
    stepRate: 0.1,
    defaultRate: 8.6,
    minTenure: 60,
    maxTenure: 360,
    stepTenure: 12,
    defaultTenure: 240,
    tenureUnit: 'Months',
    tenureLabel: 'Home Loan Tenure'
  },
  'loan-against-property': {
    title: 'Loan Against Property (Mortgage) Calculator',
    subtitle: 'Structure commercial or residential mortgage borrowing against property equity.',
    type: 'emi',
    minAmount: 1000000,
    maxAmount: 150000000,
    stepAmount: 200000,
    defaultAmount: 5000000,
    amountLabel: 'Estimated Loan Requirement',
    minRate: 9.15,
    maxRate: 15.0,
    stepRate: 0.15,
    defaultRate: 9.75,
    minTenure: 36,
    maxTenure: 180,
    stepTenure: 12,
    defaultTenure: 120,
    tenureUnit: 'Months',
    tenureLabel: 'Mortgage Repayment Tenure'
  },
  'education-loan': {
    title: 'Education Loan Moratorium & EMI Calculator',
    subtitle: 'Evaluate student repayment projections with post-course moratorium assumptions.',
    type: 'education',
    minAmount: 200000,
    maxAmount: 15000000,
    stepAmount: 50000,
    defaultAmount: 2500000,
    amountLabel: 'Total Academic Expenses Required',
    minRate: 9.5,
    maxRate: 15.0,
    stepRate: 0.25,
    defaultRate: 10.25,
    minTenure: 36,
    maxTenure: 180,
    stepTenure: 12,
    defaultTenure: 120,
    tenureUnit: 'Months',
    tenureLabel: 'Repayment Tenure (Post-Grace Period)',
    moratoriumMonths: 24
  },
  'gold-loan': {
    title: 'Gold Loan Valuation & Interest Calculator',
    subtitle: 'Estimate permissible credit limit (RBI 75% LTV) and monthly interest servicing.',
    type: 'gold',
    minAmount: 25000,
    maxAmount: 10000000,
    stepAmount: 25000,
    defaultAmount: 300000,
    amountLabel: 'Approximate Gold Market Value (or Grams equivalent)',
    minRate: 8.85,
    maxRate: 16.0,
    stepRate: 0.25,
    defaultRate: 9.5,
    minTenure: 3,
    maxTenure: 24,
    stepTenure: 3,
    defaultTenure: 12,
    tenureUnit: 'Months',
    tenureLabel: 'Repayment Horizon',
    rbiLtv: 0.75
  },
  'vehicle-loan': {
    title: 'Vehicle Financing EMI Calculator',
    subtitle: 'Estimate auto installments for brand-new or certified pre-owned vehicles.',
    type: 'emi',
    minAmount: 100000,
    maxAmount: 15000000,
    stepAmount: 25000,
    defaultAmount: 900000,
    amountLabel: 'On-Road Vehicle Loan Amount',
    minRate: 8.75,
    maxRate: 16.0,
    stepRate: 0.25,
    defaultRate: 9.25,
    minTenure: 12,
    maxTenure: 84,
    stepTenure: 6,
    defaultTenure: 60,
    tenureUnit: 'Months',
    tenureLabel: 'Auto Loan Tenure'
  }
};

const LoanCalculator = ({ slug, loanName }) => {
  const config = CALCULATOR_CONFIGS[slug] || CALCULATOR_CONFIGS['personal-loan'];

  const [amount, setAmount] = useState(config.defaultAmount);
  const [rate, setRate] = useState(config.defaultRate);
  const [tenure, setTenure] = useState(config.defaultTenure);
  const [utilizationPercent, setUtilizationPercent] = useState(70); // For overdraft / LAS

  // Reset defaults when slug changes
  useEffect(() => {
    setAmount(config.defaultAmount);
    setRate(config.defaultRate);
    setTenure(config.defaultTenure);
  }, [slug]);

  // Standard Reducing Balance EMI Calculation
  const calculateStandardEMI = () => {
    const monthlyRate = rate / (12 * 100);
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - amount;

    return {
      monthlyEmi: Math.round(emi) || 0,
      totalInterest: Math.round(totalInterest) || 0,
      totalPayment: Math.round(totalPayment) || 0,
      principal: amount
    };
  };

  // Overdraft / Loan Against Securities Calculation
  const calculateOverdraft = () => {
    const sanctionedLimit = Math.round(amount * (config.ltvRatio || 0.65));
    const utilizedAmount = Math.round(sanctionedLimit * (utilizationPercent / 100));
    // Monthly interest only on utilized capital: P * R / 12
    const monthlyInterest = Math.round((utilizedAmount * rate) / (12 * 100));
    const annualInterest = Math.round((utilizedAmount * rate) / 100);

    return {
      sanctionedLimit,
      utilizedAmount,
      monthlyInterest,
      annualInterest,
      portfolioValuation: amount
    };
  };

  // Gold Loan Calculation (RBI 75% LTV benchmark)
  const calculateGoldLoan = () => {
    const maxPermissibleLoan = Math.round(amount * (config.rbiLtv || 0.75));
    const monthlyInterest = Math.round((maxPermissibleLoan * rate) / (12 * 100));
    const totalInterest = monthlyInterest * tenure;
    const totalRepayable = maxPermissibleLoan + totalInterest;

    return {
      maxPermissibleLoan,
      monthlyInterest,
      totalInterest,
      totalRepayable,
      collateralValue: amount
    };
  };

  const emiStats = calculateStandardEMI();
  const overdraftStats = calculateOverdraft();
  const goldStats = calculateGoldLoan();

  return (
    <ScrollReveal type="fade-up">
      <section id="emi-calculator" className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <Calculator className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Interactive Financial Simulation
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              {config.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {config.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders and Inputs (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Loan Amount / Valuation Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">{config.amountLabel}</span>
                <span className="text-[#174F91] text-base sm:text-lg font-black tracking-tight bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  ₹{Number(amount).toLocaleString('en-IN')}
                </span>
              </div>
              <input 
                type="range" 
                min={config.minAmount} 
                max={config.maxAmount} 
                step={config.stepAmount} 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#174F91]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>₹{Number(config.minAmount).toLocaleString('en-IN')}</span>
                <span>₹{Number(config.maxAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* 2. Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Indicative Benchmark Rate (% p.a.)</span>
                <span className="text-[#174F91] text-base sm:text-lg font-black tracking-tight bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  {rate}%
                </span>
              </div>
              <input 
                type="range" 
                min={config.minRate} 
                max={config.maxRate} 
                step={config.stepRate} 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#174F91]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>{config.minRate}% p.a.</span>
                <span>{config.maxRate}% p.a.</span>
              </div>
            </div>

            {/* 3. Tenure Slider OR Overdraft Utilization Slider */}
            {config.type === 'overdraft' ? (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Projected Credit Line Utilization</span>
                  <span className="text-[#174F91] text-base sm:text-lg font-black tracking-tight bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {utilizationPercent}% of Limit
                  </span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={100} 
                  step={5} 
                  value={utilizationPercent} 
                  onChange={(e) => setUtilizationPercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#174F91]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>10% Utilized</span>
                  <span>100% Utilized (Pay only for what you use)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">{config.tenureLabel}</span>
                  <span className="text-[#174F91] text-base sm:text-lg font-black tracking-tight bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {tenure >= 12 ? `${Math.floor(tenure / 12)} Yrs (${tenure} Mos)` : `${tenure} Mos`}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={config.minTenure} 
                  max={config.maxTenure} 
                  step={config.stepTenure} 
                  value={tenure} 
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#174F91]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>{config.minTenure} Months</span>
                  <span>{Math.floor(config.maxTenure / 12)} Years</span>
                </div>
              </div>
            )}

            {/* Regulatory Calculation Disclaimer */}
            <div className="p-3 bg-[#F5F8FC] rounded-xl border border-[#DFE7F1] flex items-center space-x-2 text-[11px] text-slate-500">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>
                Calculations are indicative. Final EMI and interest margins depend on credit bureau assessment and underwriting guidelines.
              </span>
            </div>

          </div>

          {/* Right Column: Visual Navy Result Card (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0B2345] via-[#102B52] to-[#174F91] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-blue-900/40 space-y-5">
              
              {/* Type-Specific Primary Output */}
              {config.type === 'overdraft' ? (
                <div>
                  <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">
                    Sanctioned Overdraft Limit (~65% LTV)
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white block mt-1 tracking-tight">
                    ₹{overdraftStats.sanctionedLimit.toLocaleString('en-IN')}
                  </span>
                  <p className="text-[11px] text-emerald-300 mt-1 font-semibold flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Zero interest on unwithdrawn limit
                  </p>
                </div>
              ) : config.type === 'gold' ? (
                <div>
                  <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">
                    Maximum Permissible Sanction (RBI 75% LTV)
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white block mt-1 tracking-tight">
                    ₹{goldStats.maxPermissibleLoan.toLocaleString('en-IN')}
                  </span>
                  <p className="text-[11px] text-blue-200 mt-1">
                    Monthly Interest: <strong>₹{goldStats.monthlyInterest.toLocaleString('en-IN')}</strong>
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] text-blue-200 uppercase font-black tracking-wider block">
                    Estimated Monthly Installment (EMI)
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white block mt-1 tracking-tight">
                    ₹{emiStats.monthlyEmi.toLocaleString('en-IN')}
                  </span>
                  <p className="text-[11px] text-blue-200 mt-1">
                    Tenure: <strong>{tenure} months</strong> at <strong>{rate}% p.a.</strong>
                  </p>
                </div>
              )}

              {/* Breakdown Details */}
              <div className="pt-4 border-t border-white/15 space-y-2.5 text-xs">
                {config.type === 'overdraft' ? (
                  <>
                    <div className="flex justify-between text-blue-100">
                      <span>Utilized Drawdown ({utilizationPercent}%):</span>
                      <span className="font-bold text-white">₹{overdraftStats.utilizedAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Monthly Interest Outgo:</span>
                      <span className="font-bold text-emerald-300">₹{overdraftStats.monthlyInterest.toLocaleString('en-IN')} / mo</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Annual Estimated Interest:</span>
                      <span className="font-bold text-white">₹{overdraftStats.annualInterest.toLocaleString('en-IN')}</span>
                    </div>
                  </>
                ) : config.type === 'gold' ? (
                  <>
                    <div className="flex justify-between text-blue-100">
                      <span>Pledged Gold Market Value:</span>
                      <span className="font-bold text-white">₹{Number(amount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Total Interest Outgo ({tenure}M):</span>
                      <span className="font-bold text-white">₹{goldStats.totalInterest.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Total Repayable (Bullet / End):</span>
                      <span className="font-bold text-white">₹{goldStats.totalRepayable.toLocaleString('en-IN')}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between text-blue-100">
                      <span>Principal Amount:</span>
                      <span className="font-bold text-white">₹{Number(amount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Total Interest Payable:</span>
                      <span className="font-bold text-white">₹{emiStats.totalInterest.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-100">
                      <span>Total Amount Payable:</span>
                      <span className="font-bold text-emerald-300">₹{emiStats.totalPayment.toLocaleString('en-IN')}</span>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>

        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanCalculator;
