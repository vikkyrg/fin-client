import React from 'react';
import { 
  UserCheck, Calendar, IndianRupee, Briefcase, CreditCard, 
  MapPin, ShieldCheck, CheckCircle2, Award 
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

// Helper icon mapping based on criteria name
const getCriteriaIcon = (criteria) => {
  const lower = criteria.toLowerCase();
  if (lower.includes('age')) return Calendar;
  if (lower.includes('income') || lower.includes('salary') || lower.includes('turnover') || lower.includes('value')) return IndianRupee;
  if (lower.includes('vintage') || lower.includes('employment') || lower.includes('experience') || lower.includes('business')) return Briefcase;
  if (lower.includes('credit') || lower.includes('cibil') || lower.includes('score')) return CreditCard;
  if (lower.includes('nationality') || lower.includes('residence') || lower.includes('location')) return MapPin;
  return UserCheck;
};

/**
 * Section 4: Eligibility Criteria
 * Redesigned into structured 2-column compact criteria cards with category icons,
 * clear label-to-value distinctions, and alternating highlight backgrounds.
 */
const LoanEligibility = ({ loan }) => {
  if (!loan || !loan.eligibilityCriteria || loan.eligibilityCriteria.length === 0) return null;

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#174F91] flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#174F91]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Underwriting Benchmarks
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              Eligibility Criteria for {loan.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Preliminary benchmarks evaluated by lending partners to assess credit eligibility and sanction terms.
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loan.eligibilityCriteria.map((item, idx) => {
            const Icon = getCriteriaIcon(item.criteria);
            
            return (
              <div 
                key={idx} 
                className="group bg-[#F5F8FC] hover:bg-white rounded-xl p-4 sm:p-5 border border-[#DFE7F1] hover:border-[#174F91]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#174F91] group-hover:bg-[#174F91] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#0B2345] group-hover:text-[#174F91] transition-colors">
                      {item.criteria}
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pl-11">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 pl-11 flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-1.5"></span>
                  Lender Verification Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Note */}
        <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-start space-x-2 text-xs text-slate-600">
          <Award className="w-4 h-4 text-[#174F91] flex-shrink-0 mt-0.5" />
          <span>
            <strong>Senior Consultant Note:</strong> Profiles falling marginally below preferred benchmarks (e.g. CIBIL &lt; 700 or non-standard ITRs) can frequently be structured with institutional co-applicants or collateral backing.
          </span>
        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanEligibility;
