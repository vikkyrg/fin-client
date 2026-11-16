import React, { useState, useEffect } from 'react';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentService } from '../services/api';

const LendingPartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    contentService.getPartners()
      .then(res => {
        if (res.data?.data) setPartners(res.data.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full">
            Institutional Tie-ups
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Verified Lending Partners
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We partner with India's most reputable public sector banks, private banking institutions, and RBI-registered NBFCs to facilitate optimal loan options.
          </p>
        </div>
      </section>

      {/* Main Partners Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Approved Institutional Network</h2>
              <p className="text-xs text-slate-500 mt-0.5">Strictly adhering to Reserve Bank of India lending norms and fair practice codes.</p>
            </div>
            <div className="hidden sm:flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              <span>100% RBI Registered</span>
            </div>
          </div>

          {loading ? (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-blue"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map(partner => (
                <div key={partner._id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-brand-blue bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                      {partner.category}
                    </span>
                    <span className="text-xs text-emerald-600 flex items-center font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Active Partner
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {partner.description || 'Offers competitive interest rates, digital verification, and customized loan solutions.'}
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      to="/loans/personal-loan#enquire"
                      className="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center"
                    >
                      <span>Check Partner Eligibility</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Regulatory Advisory Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-xs text-slate-700 leading-relaxed">
          <p className="font-bold text-brand-blue mb-1">Important Facilitation Notice:</p>
          FinAdvise operates strictly as a financial loan facilitator and Direct Selling Associate (DSA). Final loan approval, interest rate sanction, processing timelines, and credit evaluation are the exclusive discretion of the respective partner banks and financial institutions in compliance with applicable banking regulations.
        </div>

      </div>

    </div>
  );
};

export default LendingPartnersPage;
