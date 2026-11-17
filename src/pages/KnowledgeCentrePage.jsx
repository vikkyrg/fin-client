import React, { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, FileCheck, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentService } from '../services/api';
import { BLOG_ARTICLES } from '../data/blogData';

const KnowledgeCentrePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBlogs(BLOG_ARTICLES.slice(0, 6));
    contentService.getFAQs()
      .then(faqRes => {
        if (faqRes.data?.data) setFaqs(faqRes.data.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full">
            Borrower Education Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Knowledge Centre
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Essential financial guidance, loan eligibility guidelines, regulatory insights, and credit score mastery.
          </p>
        </div>
      </section>

      {/* Main Educational Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-12">
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Credit Score & Bureau Insights</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Understand how CIBIL and Experian evaluate your creditworthiness, and how repayment behavior affects your score.
            </p>
            <Link to="/cibil-score" className="text-xs font-bold text-brand-blue hover:underline flex items-center">
              <span>Read CIBIL Guide</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Loan Documentation Mastery</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Step-by-step checklists for property titles, ITR submissions, GST returns, and financial balance sheets.
            </p>
            <Link to="/loans/home-loan" className="text-xs font-bold text-brand-orange hover:underline flex items-center">
              <span>Explore Checklists</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Interest Rate Benchmarks</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Repo-linked lending rates (RLLR), MCLR, fixed vs floating interest rates, and loan tenure optimization.
            </p>
            <Link to="/blogs" className="text-xs font-bold text-emerald-600 hover:underline flex items-center">
              <span>Browse Rate Guides</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Featured Educational Articles */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Featured Educational Articles</h2>
              <p className="text-xs text-slate-500">Comprehensive explainers published by our senior credit consultants.</p>
            </div>
            <Link to="/blogs" className="text-xs font-bold text-brand-blue hover:underline">
              View All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <div key={blog.id || blog._id} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-orange uppercase">{blog.category}</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1.5 line-clamp-2">
                    <Link to={`/blogs/${blog.slug}`} className="hover:text-brand-blue">{blog.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{blog.shortDescription || blog.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/70">
                  <Link to={`/blogs/${blog.slug}`} className="text-xs font-bold text-brand-blue hover:underline flex items-center">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 text-brand-blue">
            <HelpCircle className="w-6 h-6" />
            <h2 className="text-xl font-bold text-slate-900">General Loan Advisory FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq._id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm mb-1">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default KnowledgeCentrePage;
