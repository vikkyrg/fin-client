import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { contentService } from '../services/api';
import { ScrollReveal } from '../components/ScrollReveal';

const ContactUsPage = () => {
  const [settings, setSettings] = useState({
    companyName: 'FinAdvise Loan Consultancy',
    contactEmail: 'contact@finadviseloans.com',
    contactPhone: '+91 98765 43210',
    alternatePhone: '+91 80000 12345',
    officeAddress: 'Tower B, 4th Floor, Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    workingHours: 'Mon - Sat: 9:30 AM to 6:30 PM'
  });

  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    subject: 'General Loan Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    contentService.getSettings()
      .then(res => {
        if (res.data?.data) setSettings(res.data.data);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <ScrollReveal type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full">
              Connect With Our Advisory Desk
            </span>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.12}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact FinAdvise
            </h1>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.18}>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
              Have questions regarding interest rates, eligibility criteria, or bank tie-ups? Our senior advisors are here to assist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <ScrollReveal type="fade-right" className="h-full">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-8 h-full">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Corporate Headquarters</span>
                  <h2 className="text-2xl font-bold mt-1 mb-4">{settings.companyName}</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct Sales Associate & Independent Loan Consultancy Facilitator. Partnering with India’s leading scheduled commercial banks and NBFCs.
                  </p>

                  <div className="mt-8 space-y-6 text-xs text-slate-300">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-sm mb-0.5">Office Address</p>
                        <p className="leading-relaxed">{settings.officeAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-sm mb-0.5">Telephone & Helplines</p>
                        <p>{settings.contactPhone}</p>
                        <p className="text-slate-400">{settings.alternatePhone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-sm mb-0.5">Advisory Email</p>
                        <p>{settings.contactEmail}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-sm mb-0.5">Operating Hours</p>
                        <p>{settings.workingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400">
                  Zero upfront advisory fees for standard retail loan consultation.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Query Form */}
          <div className="lg:col-span-7">
            <ScrollReveal type="fade-left" delay={0.1} className="h-full">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 h-full">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. One of our loan advisors will review your query and get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ fullName: '', mobileNumber: '', email: '', subject: 'General Loan Inquiry', message: '' });
                  }}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Direct Message</h2>
                <p className="text-xs text-slate-500 mb-6">Our loan advisory team responds to inquiries within 24 working hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        maxLength="10"
                        value={form.mobileNumber}
                        onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
                        placeholder="9876543210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ramesh@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option value="General Loan Inquiry">General Loan Inquiry</option>
                        <option value="Personal Loan Advisory">Personal Loan Advisory</option>
                        <option value="Business Loan Advisory">Business Loan Advisory</option>
                        <option value="Home Loan / Mortgage">Home Loan / Mortgage</option>
                        <option value="Partner Tie-up Query">Partner Tie-up Query</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Requirements *</label>
                    <textarea
                      required
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please specify loan requirement, required amount, or any question you may have..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-bold text-xs shadow-md transition flex items-center justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;
