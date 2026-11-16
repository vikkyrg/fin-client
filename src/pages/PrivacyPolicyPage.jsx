import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="flex items-center space-x-3 text-brand-blue pb-4 border-b border-slate-100">
            <Lock className="w-6 h-6" />
            <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
          </div>

          <p>
            At <strong>FinAdvise Loan Consultancy</strong> ("we", "our", or "us"), we value and protect the privacy of users who visit our platform and submit enquiries for loan advisory services. This Privacy Policy details how we collect, store, transmit, and safeguard your personal information in accordance with applicable Indian laws and the Information Technology Act, 2000.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h2>
          <p>
            When you submit a loan enquiry or contact request on our platform, we collect information including your Full Name, Mobile Number, Email Address, City, and relevant financial parameters specific to the chosen loan category (e.g. employment status, monthly income, property value, turnover, gold weight, etc.).
          </p>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 text-xs">
            <strong>Important: </strong> We do NOT collect or store your sensitive personal identification numbers (such as Aadhaar card number, PAN card number), net banking passwords, ATM PINs, or confidential bank credentials.
          </div>

          <h2 className="text-base font-bold text-slate-900 pt-2">2. Purpose of Information Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To evaluate your preliminary borrowing eligibility across partner institutions.</li>
            <li>To facilitate loan advisory communication via phone call, SMS, or email.</li>
            <li>To transmit your verified application details directly to the chosen RBI-registered Banks/NBFCs for processing.</li>
            <li>To prevent duplicate submissions and fraudulent inquiries.</li>
          </ul>

          <h2 className="text-base font-bold text-slate-900 pt-2">3. Data Security & Storage</h2>
          <p>
            All submitted data is encrypted in transit using industry-standard 256-bit SSL encryption. Access to stored customer enquiry records is restricted to authorized financial consultants and administrators through secure JWT-authenticated dashboards.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">4. Third-Party Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketing companies. Data is shared strictly with RBI-registered Banks, Housing Finance Companies (HFCs), and NBFCs for the sole purpose of assessing and executing your loan request.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">5. Contact Us Regarding Privacy</h2>
          <p>
            For any queries or concerns regarding this policy, please contact our data grievance officer at <strong>privacy@finadviseloans.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
