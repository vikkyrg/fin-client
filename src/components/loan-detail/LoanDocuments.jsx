import React from 'react';
import { FileText, CheckCircle2, ShieldCheck, Check, Sparkles, FolderLock } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

/**
 * Section 5: Required Documents Checklist
 * Redesigned clean 2-column card grid on desktop, responsive on mobile
 * Card designs with bold category headings, thin separators, check badges, and clear spacing
 */
const LoanDocuments = ({ loan }) => {
  if (!loan || !loan.requiredDocuments || loan.requiredDocuments.length === 0) return null;

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <FileText className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Documentation Readiness
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              Required Documents Checklist
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Keep these digital or paperless records handy to ensure swift KYC verification and underwriting.
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {loan.requiredDocuments.map((doc, idx) => (
            <div 
              key={idx} 
              className="bg-[#F5F8FC] hover:bg-white rounded-xl p-5 border border-[#DFE7F1] hover:border-[#174F91]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DFE7F1]">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                    <h4 className="font-bold text-[#0B2345] text-sm tracking-tight">
                      {doc.category}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 uppercase">
                    {doc.items.length} items
                  </span>
                </div>

                {/* Items Checklist */}
                <ul className="space-y-2.5">
                  {doc.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-2.5 text-xs text-slate-600 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-100/70 text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom security assurance */}
              <div className="pt-3 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center">
                  <FolderLock className="w-3 h-3 mr-1 text-slate-400" />
                  DigiLocker / e-KYC Enabled
                </span>
                <span className="text-emerald-600 font-semibold">100% Confidential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Paperless e-KYC Banner */}
        <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-800">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
            <span className="font-medium">
              Zero Physical Paperwork: Most partner banks support seamless paperless statement ingestion via Account Aggregator.
            </span>
          </div>
        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanDocuments;
