import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="flex items-center space-x-3 text-brand-blue pb-4 border-b border-slate-100">
            <FileText className="w-6 h-6" />
            <h1 className="text-2xl font-bold text-slate-900">Terms & Conditions</h1>
          </div>

          <p>
            Please read these Terms & Conditions carefully before using the website operated by <strong>FinAdvise Loan Consultancy</strong>. By accessing or using our services, you acknowledge that you have read, understood, and agreed to be bound by these terms.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">1. Role as Independent Loan Facilitator</h2>
          <p>
            FinAdvise functions exclusively as an independent loan consultancy and Direct Selling Associate (DSA). We facilitate the introduction of loan applicants to RBI-registered banks and financial institutions. FinAdvise is not a licensed banking entity or deposit-taking institution, and does not directly disburse funds.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">2. Discretion of Partner Institutions</h2>
          <p>
            Sanction of any loan, determination of interest rates, applicable processing fees, margin requirements, and disbursement timelines are at the sole and unfettered discretion of the respective lending banks or NBFCs, based on their internal credit policies and borrower document appraisal.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">3. Zero Upfront Advisory Fee Policy</h2>
          <p>
            FinAdvise does NOT collect upfront advisory fees from retail borrowers for standard loan facilitation. Beware of fraudulent impostors asking for advance processing fees in personal accounts.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">4. Accuracy of Information</h2>
          <p>
            The applicant warrants that all details provided in loan enquiry forms (such as contact information, income, employment, and property valuation) are true, complete, and accurate to the best of their knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
