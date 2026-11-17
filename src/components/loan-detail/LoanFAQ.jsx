import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, ChevronDown, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

/**
 * Section 7: Frequently Asked Questions
 * Redesigned modern interactive accordion with plus/minus toggles,
 * smooth expand/collapse, readable typography, and loan-specific queries.
 */
const LoanFAQ = ({ loan }) => {
  if (!loan || !loan.faqs || loan.faqs.length === 0) return null;

  // Single expanded accordion index (0 open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <HelpCircle className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Clear & Transparent Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              Frequently Asked Questions on {loan.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Verified answers to frequent borrower questions regarding rates, eligibility, and loan terms.
            </p>
          </div>
        </div>

        {/* Modern Interactive Accordion List */}
        <div className="space-y-3.5">
          {loan.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#174F91]/50 bg-white shadow-sm' 
                    : 'border-[#DFE7F1] bg-[#F5F8FC] hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-black flex-shrink-0 ${
                      isOpen ? 'bg-[#174F91] text-white' : 'bg-slate-200/70 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-[#0B2345] text-xs sm:text-sm leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus Indicator */}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-50 text-[#174F91]' : 'text-slate-400 bg-white border border-[#DFE7F1]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="font-normal pl-9">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Helpline Prompt */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between p-4 bg-[#F5F8FC] rounded-xl border border-[#DFE7F1] text-xs gap-3">
          <div className="flex items-center space-x-2 text-slate-600">
            <MessageSquare className="w-4 h-4 text-[#174F91] flex-shrink-0" />
            <span>Have a specific query not covered here?</span>
          </div>
          <a 
            href="#enquire" 
            className="text-xs font-bold text-[#174F91] hover:text-[#0B2345] underline flex items-center"
          >
            Ask a Senior Loan Advisor &rarr;
          </a>
        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanFAQ;
