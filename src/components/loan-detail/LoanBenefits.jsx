import React from 'react';
import { 
  ShieldCheck, Zap, Award, Percent, Clock, 
  Sparkles, FileText, ArrowRightLeft, Banknote, 
  Coins, TrendingUp, Layers, CheckCircle2, 
  Compass, BadgeCheck, HeartHandshake, Shield,
  Wallet, DollarSign, Scale, CalendarCheck, Lock
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

// Dynamic icon selector based on benefit title keywords
const getBenefitIcon = (title = '', idx = 0) => {
  const lower = title.toLowerCase();

  if (lower.includes('collateral') || lower.includes('zero collateral') || lower.includes('unsecured')) {
    return { icon: Shield, bg: 'bg-blue-50 text-[#174F91] border-blue-200' };
  }
  if (lower.includes('rapid') || lower.includes('24-hour') || lower.includes('express') || lower.includes('instant') || lower.includes('speed')) {
    return { icon: Zap, bg: 'bg-amber-50 text-[#FF891C] border-amber-200' };
  }
  if (lower.includes('repayment') || lower.includes('tenure') || lower.includes('flexible') || lower.includes('horizon')) {
    return { icon: CalendarCheck, bg: 'bg-indigo-50 text-indigo-600 border-indigo-200' };
  }
  if (lower.includes('paperwork') || lower.includes('digital') || lower.includes('kyc') || lower.includes('documents')) {
    return { icon: FileText, bg: 'bg-emerald-50 text-[#10B981] border-emerald-200' };
  }
  if (lower.includes('end-use') || lower.includes('no restriction') || lower.includes('freedom')) {
    return { icon: Compass, bg: 'bg-sky-50 text-sky-600 border-sky-200' };
  }
  if (lower.includes('prepayment') || lower.includes('foreclosure') || lower.includes('part-payment')) {
    return { icon: ArrowRightLeft, bg: 'bg-violet-50 text-violet-600 border-violet-200' };
  }
  if (lower.includes('rate') || lower.includes('interest') || lower.includes('benchmark')) {
    return { icon: Percent, bg: 'bg-rose-50 text-rose-600 border-rose-200' };
  }
  if (lower.includes('portfolio') || lower.includes('dividend') || lower.includes('compounding') || lower.includes('market') || lower.includes('growth')) {
    return { icon: TrendingUp, bg: 'bg-emerald-50 text-[#10B981] border-emerald-200' };
  }
  if (lower.includes('tax') || lower.includes('80c') || lower.includes('80e') || lower.includes('deductible')) {
    return { icon: Banknote, bg: 'bg-emerald-50 text-[#10B981] border-emerald-200' };
  }
  if (lower.includes('partner') || lower.includes('lender') || lower.includes('multi-bank') || lower.includes('network')) {
    return { icon: Layers, bg: 'bg-blue-50 text-[#174F91] border-blue-200' };
  }
  if (lower.includes('vault') || lower.includes('security') || lower.includes('safety') || lower.includes('insurance')) {
    return { icon: Lock, bg: 'bg-slate-100 text-slate-700 border-slate-300' };
  }
  if (lower.includes('moratorium') || lower.includes('grace')) {
    return { icon: Clock, bg: 'bg-indigo-50 text-indigo-600 border-indigo-200' };
  }
  if (lower.includes('quantum') || lower.includes('high value') || lower.includes('limit') || lower.includes('ltv')) {
    return { icon: Wallet, bg: 'bg-blue-50 text-[#174F91] border-blue-200' };
  }

  // Curated fallbacks across items
  const fallbacks = [
    { icon: ShieldCheck, bg: 'bg-blue-50 text-[#174F91] border-blue-200' },
    { icon: Zap, bg: 'bg-amber-50 text-[#FF891C] border-amber-200' },
    { icon: CalendarCheck, bg: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { icon: FileText, bg: 'bg-emerald-50 text-[#10B981] border-emerald-200' },
    { icon: Compass, bg: 'bg-sky-50 text-sky-600 border-sky-200' },
    { icon: ArrowRightLeft, bg: 'bg-violet-50 text-violet-600 border-violet-200' }
  ];

  return fallbacks[idx % fallbacks.length];
};

/**
 * Section 2: Why Choose FinAdvise (Key Benefits)
 * Replaces generic tick checks with contextually matched financial icons
 * for each benefit title across every loan page.
 */
const LoanBenefits = ({ loan }) => {
  if (!loan || !loan.keyBenefits || loan.keyBenefits.length === 0) return null;

  return (
    <ScrollReveal type="fade-up">
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#DFE7F1] shadow-sm hover:shadow-md transition-shadow space-y-6">
        
        {/* Section Header */}
        <div className="flex items-start sm:items-center space-x-3.5 pb-5 border-b border-[#DFE7F1]">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center flex-shrink-0 border border-emerald-100 shadow-xs">
            <Award className="w-5 h-5 text-[#10B981]" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#10B981] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
              Strategic Advantages
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2345] tracking-tight mt-1">
              Why Choose {loan.name} via FinAdvise?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Multi-lender comparison, preferential rate negotiation, and certified advisory support.
            </p>
          </div>
        </div>

        {/* 3-Column Desktop / 2-Column Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {loan.keyBenefits.map((benefit, idx) => {
            const { icon: BenefitIcon, bg: iconStyle } = getBenefitIcon(benefit.title, idx);
            const isFeatured = idx === 0 || idx === 3;
            
            return (
              <div 
                key={idx} 
                className={`group relative rounded-xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured 
                    ? 'bg-gradient-to-b from-[#F0F6FF] to-[#FFFFFF] border-blue-200/80 shadow-xs hover:border-[#174F91] hover:shadow-md' 
                    : 'bg-[#F5F8FC] hover:bg-white border-[#DFE7F1] hover:border-[#174F91]/40 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Relevant Icon & Benefit Index Tag */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-transform duration-200 group-hover:scale-110 shadow-xs ${iconStyle}`}>
                      <BenefitIcon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-wider">
                      Benefit 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-bold text-[#0B2345] text-sm group-hover:text-[#174F91] transition-colors leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom verified accent */}
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center text-[11px] font-medium text-slate-500 group-hover:text-[#174F91] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-1.5"></span>
                  Verified Advisory Benefit
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </ScrollReveal>
  );
};

export default LoanBenefits;
