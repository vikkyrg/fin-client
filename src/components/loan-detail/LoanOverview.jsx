import React from 'react';
import { Info, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

/**
 * Section 1: Loan Overview
 * Redesigned 2-column layout:
 * - Left: Loan overview, narrative context, and highlights
 * - Right: Key loan highlight cards with distinctive icons, soft badge accents, and hover elevations
 */
const LoanOverview = ({ loan }) => {
  if (!loan) return null;

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 mb-6 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <Info className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                Institutional Lending Overview
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              Overview of {loan.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Comprehensive credit parameters, borrowing terms, and operational flexibilities.
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative description & key takeaway */}
          <div className="lg:col-span-6 space-y-4">
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-sm sm:text-base">
              <p className="font-normal text-slate-700">
                {loan.overview || loan.fullDescription}
              </p>
            </div>

            {/* Value Proposition Callout Card */}
            <div className="bg-[#F5F8FC] rounded-xl p-4 sm:p-5 border-l-4 border-l-[#174F91] border border-[#DFE7F1] space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#0B2345]">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Verified Lending Architecture</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                FinAdvise connects you with 20+ RBI-regulated public/private sector banks and premier NBFCs, ensuring transparent documentation with zero upfront charges.
              </p>
            </div>
          </div>

          {/* Right Column: Key Feature Cards Grid */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Loan Highlights
                </span>
                <span className="text-[11px] font-semibold text-[#174F91] flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-[#FF891C]" />
                  Curated Features
                </span>
              </div>

              {loan.features && loan.features.length > 0 ? (
                <div className="space-y-3">
                  {loan.features.map((feat, fIdx) => (
                    <div 
                      key={fIdx} 
                      className="group bg-[#F5F8FC] hover:bg-white rounded-xl p-4 border border-[#DFE7F1] hover:border-[#174F91]/40 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-[#174F91] text-[#174F91] group-hover:text-white flex items-center justify-center font-black text-xs flex-shrink-0 transition-colors duration-200 border border-blue-100 group-hover:border-transparent">
                          0{fIdx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#0B2345] text-sm group-hover:text-[#174F91] transition-colors">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-[#F5F8FC] rounded-xl text-xs text-slate-500 border border-[#DFE7F1]">
                  Feature highlights available upon application submission.
                </div>
              )}
            </div>
          </div>

        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanOverview;
