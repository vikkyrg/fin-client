import React from 'react';
import { 
  Send, Users, FileCheck2, Banknote, ArrowRight, ShieldCheck, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

const DEFAULT_PROCESS_STEPS = [
  {
    stepNumber: 1,
    stepTitle: 'Submit Loan Enquiry',
    stepDescription: 'Submit your basic details and loan requirements through our consultation form.',
    icon: Send
  },
  {
    stepNumber: 2,
    stepTitle: 'Profile Evaluation & Lender Matching',
    stepDescription: 'Our advisory team evaluates your profile and identifies suitable lending partners.',
    icon: Users
  },
  {
    stepNumber: 3,
    stepTitle: 'Document Verification',
    stepDescription: 'Complete the lender’s required documentation and verification process.',
    icon: FileCheck2
  },
  {
    stepNumber: 4,
    stepTitle: 'Loan Approval & Disbursal',
    stepDescription: 'The selected lender reviews the application and handles sanction and disbursal.',
    icon: Banknote
  }
];

/**
 * Section 6: 4-Step Application & Disbursal Process
 * Redesigned connected 4-step timeline:
 * - Desktop: Connected horizontal timeline with progressive step indicators and icons
 * - Mobile: Connected vertical timeline with clear alignment
 */
const LoanProcess = ({ loan }) => {
  // Use loan-specific application process if available, mapped to structured icons
  const steps = (loan?.applicationProcess && loan.applicationProcess.length > 0)
    ? loan.applicationProcess.map((s, idx) => ({
        stepNumber: s.stepNumber || idx + 1,
        stepTitle: s.stepTitle,
        stepDescription: s.stepDescription,
        icon: [Send, Users, FileCheck2, Banknote][idx] || FileCheck2
      }))
    : DEFAULT_PROCESS_STEPS;

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <Sparkles className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              End-to-End Roadmap
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              4-Step Application & Disbursal Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              A simple and transparent journey from your loan enquiry to final disbursal.
            </p>
          </div>
        </div>

        {/* Desktop Connected Horizontal Timeline (Hidden on Mobile, block on md+) */}
        <div className="hidden md:block relative pt-4 pb-2">
          {/* Continuous Connecting Line Behind Nodes */}
          <div className="absolute top-[42px] left-[6%] right-[6%] h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200 z-0"></div>

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isFinal = idx === steps.length - 1;

              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Circular Node */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 shadow-sm ${
                    isFinal 
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/20' 
                      : 'bg-white text-[#174F91] border-[#174F91] shadow-blue-900/10'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Tag */}
                  <span className="inline-block mt-3 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Step 0{step.stepNumber}
                  </span>

                  {/* Step Title & Details */}
                  <h4 className="font-bold text-[#0B2345] text-sm mt-1.5 group-hover:text-[#174F91] transition-colors leading-snug">
                    {step.stepTitle}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                    {step.stepDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Connected Vertical Timeline (block on mobile, hidden on md+) */}
        <div className="md:hidden relative pl-6 space-y-6">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-gradient-to-b from-blue-200 via-emerald-200 to-blue-200"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isFinal = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex items-start space-x-3.5 group">
                {/* Node */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center -ml-[25px] border-2 flex-shrink-0 z-10 transition-transform ${
                  isFinal 
                    ? 'bg-emerald-600 text-white border-emerald-500' 
                    : 'bg-white text-[#174F91] border-[#174F91]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-[#F5F8FC] p-3.5 rounded-xl border border-[#DFE7F1] flex-1">
                  <span className="text-[10px] font-black uppercase text-slate-400 block mb-0.5">
                    Step 0{step.stepNumber}
                  </span>
                  <h4 className="font-bold text-[#0B2345] text-xs sm:text-sm">
                    {step.stepTitle}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {step.stepDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Disclaimer */}
        <div className="pt-3 border-t border-[#DFE7F1] flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] mr-1.5" />
            FinAdvise Facilitation Guarantee: Zero advance fees charged to borrowers.
          </span>
          <span className="hidden sm:inline font-semibold text-slate-400">
            Subject to Bank Underwriting
          </span>
        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanProcess;
