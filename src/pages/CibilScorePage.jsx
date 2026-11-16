import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, CheckCircle2, TrendingUp, AlertTriangle, 
  HelpCircle, ArrowRight, ShieldCheck, Scale, Award 
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const CibilScorePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <ScrollReveal type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full">
              Borrower Awareness Desk
            </span>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.12}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Understanding Your CIBIL Score
            </h1>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.18}>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Learn why your credit score is the single most critical factor determining your loan approval, sanction amount, and interest rate in India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Informational Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
        
        {/* Important Informational Notice */}
        <ScrollReveal type="fade-up" delay={0.1}>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start text-xs text-amber-900 leading-relaxed shadow-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Educational & Informational Purpose Only: </strong>
              This page provides educational guidance on how credit scores work in India. FinAdvise is an independent loan consultancy and does not pull, store, or sell credit bureau reports, nor do we charge fees to artificially "repair" legitimate credit records.
            </div>
          </div>
        </ScrollReveal>

        {/* 1. What is a CIBIL Score? */}
        <ScrollReveal type="fade-up">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">What is a CIBIL Score?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A CIBIL score is a 3-digit numerical summary of your credit history, rating your creditworthiness on a scale of <strong>300 to 900</strong>. It is calculated by TransUnion CIBIL, one of four RBI-authorized credit bureaus in India (along with Experian, Equifax, and CRIF High Mark), using information reported monthly by banks and financial institutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                <span className="text-xs font-bold text-red-600 uppercase">300 - 549</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Poor</p>
                <p className="text-[11px] text-slate-500 mt-0.5">High risk of rejection; credit rebuilding needed.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                <span className="text-xs font-bold text-amber-600 uppercase">550 - 649</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Average</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Sanction possible only with collateral or higher rates.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase">650 - 749</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Good</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Eligible for most loans with standard pricing.</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-600 uppercase">750 - 900</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Excellent</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Lowest interest rates, instant approvals & waivers.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Key Factors Affecting Your Credit Score */}
        <ScrollReveal type="fade-up">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Key Factors That Determine Your Score</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-brand-blue">35% Impact</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">Repayment History</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whether you pay credit card bills and loan installments on or before the due date. Even a single 30-day default leaves a negative mark.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-brand-orange">30% Impact</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">Credit Utilization Ratio (CUR)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The proportion of credit limit you spend each month. Utilizing above 30% of your total card limits indicates credit dependency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-emerald-600">15% Impact</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">Credit Age & History</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The average age of your active credit lines. Older accounts with steady repayment records demonstrate financial maturity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-purple-600">20% Impact</span>
                <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">Credit Mix & Hard Enquiries</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A healthy blend of secured loans (home/car) and unsecured credit (cards/personal loans), combined with minimal simultaneous hard checks.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Concrete Ways to Improve Your Score */}
        <ScrollReveal type="fade-up">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Proven Habits to Improve Your Credit Score</h2>
            <ul className="space-y-3 pt-2 text-sm text-slate-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <span><strong>Set up automatic debits:</strong> Ensure EMIs and credit card minimum dues are debited automatically each month.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <span><strong>Keep old credit cards active:</strong> Closing old credit cards shortens your overall credit history length and increases utilization.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <span><strong>Avoid multiple loan applications at once:</strong> Multiple simultaneous hard inquiries signal high credit distress to underwriters.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <span><strong>Review your bureau report yearly:</strong> Check for clerical errors, incorrectly reported overdue amounts, or identity mix-ups directly with CIBIL.</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* 4. Responsible Borrowing Advice */}
        <ScrollReveal type="zoom-in">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">The Golden Rule of Responsible Borrowing</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Borrowing should serve as a strategic lever to create assets, build enterprises, or navigate unavoidable emergencies. Before taking any debt, ensure your total monthly EMI obligations across all loans do not exceed 40% to 50% of your net monthly take-home income.
            </p>
            <div className="pt-2">
              <Link
                to="/loans/personal-loan#enquire"
                className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md transition"
              >
                <span>Consult an Advisor on Debt Capacity</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default CibilScorePage;
