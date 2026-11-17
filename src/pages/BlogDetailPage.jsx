import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  User, 
  Calendar, 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Bookmark,
  PhoneCall,
  Check,
  ListOrdered
} from 'lucide-react';
import { formatDate } from '../utils/formatters';
import { BLOG_ARTICLES } from '../data/blogData';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lookup article strictly from static data
  const blog = BLOG_ARTICLES.find(
    (b) => b.slug.toLowerCase() === (slug || '').toLowerCase()
  );

  // Compute related articles (same category or others, excluding current)
  const relatedArticles = blog 
    ? BLOG_ARTICLES
        .filter((b) => b.id !== blog.id)
        .sort((a, b) => (a.category === blog.category ? -1 : 1))
        .slice(0, 2)
    : [];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // 404 Not Found State
  if (!blog) {
    return (
      <div className="bg-[#F5F8FC] min-h-[70vh] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-[24px] border border-blue-100 p-8 sm:p-10 text-center shadow-[0_10px_30px_rgba(13,40,80,0.06)]">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-[#0D2850] mb-2">Article Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal leading-relaxed">
            The financial article or guide you are looking for may have been updated or moved.
          </p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#174B8C] hover:bg-[#0D2850] text-white text-xs font-bold transition shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  // Extract H3 headings for interactive Table of Contents
  const headings = blog.content 
    ? blog.content.split('\n\n')
        .filter(p => p.startsWith('### '))
        .map(p => p.replace('### ', ''))
    : [];

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
      
      {/* Sticky Breadcrumb Bar with Quick Share */}
      <div className="bg-white border-b border-blue-100/80 py-3.5 shadow-xs sticky top-0 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2 overflow-hidden pr-4">
            <Link to="/" className="hover:text-[#174B8C] transition font-medium shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/blogs" className="hover:text-[#174B8C] transition font-medium shrink-0">Knowledge Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-[#174B8C] truncate">{blog.title}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#174B8C] hover:bg-blue-100/80 font-bold transition text-xs shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Back Link Button */}
        <div>
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-xs sm:text-sm font-extrabold text-[#174B8C] hover:text-[#2563EB] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Main Article Container */}
        <div className="bg-white rounded-[28px] p-6 sm:p-10 lg:p-14 shadow-[0_10px_35px_rgba(13,40,80,0.06)] border border-blue-100/90 space-y-8">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-black text-[#10A878] bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {blog.readTime}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {formatDate(blog.publishDate)}
            </span>
          </div>

          {/* Large Article Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0D2850] tracking-tight leading-[1.2]">
            {blog.title}
          </h1>

          {/* Author & Verification Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#174B8C] font-black">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Editorial Author</p>
                <p className="text-sm font-black text-[#0D2850]">{blog.author}</p>
              </div>
            </div>

            <span className="inline-flex items-center space-x-1.5 text-[#10A878] bg-emerald-50 border border-emerald-200/70 px-3 py-1.5 rounded-full font-bold text-xs self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Financial Guidance</span>
            </span>
          </div>

          {/* Large Featured Image */}
          <div className="relative rounded-[22px] overflow-hidden aspect-[16/9] max-h-[440px] bg-slate-100 shadow-inner">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lead Summary */}
          {blog.shortDescription && (
            <div className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/40 border-l-4 border-[#2563EB] p-5 sm:p-6 rounded-r-2xl text-sm sm:text-base text-slate-700 leading-relaxed font-medium shadow-xs">
              {blog.shortDescription}
            </div>
          )}

          {/* Table of Contents (if multi-section article) */}
          {headings.length > 1 && (
            <div className="p-5 sm:p-6 rounded-[20px] bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#174B8C]">
                <ListOrdered className="w-4 h-4 text-[#2563EB]" />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                {headings.map((heading, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#2563EB] font-bold">•</span>
                    <span className="hover:text-[#174B8C] transition-colors">{heading}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-5 text-slate-700">
            {blog.content ? (
              blog.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-2xl font-black text-[#0D2850] pt-6 pb-2 border-b border-slate-100 tracking-tight">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx} className="space-y-2.5 list-none pl-0 my-4">
                      {items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#10A878] mt-1 shrink-0" />
                          <span>{it.replace(/^- /, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed text-slate-600 font-normal text-sm sm:text-[16px]">
                    {paragraph}
                  </p>
                );
              })
            ) : null}
          </div>

          {/* Editorial Advisory Notice */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
            <Bookmark className="w-5 h-5 text-[#F7931E] mt-0.5 shrink-0" />
            <div className="text-xs text-slate-700 leading-relaxed font-normal">
              <strong className="text-[#0D2850] font-black">Financial Advisory Notice: </strong> 
              Information published by FinAdvise is strictly intended for financial educational and informational purposes. Borrowers should assess their individual repayment capability and consult a loan advisor before entering into any binding credit agreement.
            </div>
          </div>

        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-blue-100">
              <h2 className="text-xl sm:text-2xl font-black text-[#0D2850] tracking-tight">
                Related Articles &amp; Insights
              </h2>
              <Link to="/blogs" className="text-xs font-bold text-[#174B8C] hover:text-[#2563EB] transition">
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blogs/${rel.slug}`}
                  className="bg-white rounded-[20px] border border-blue-100/90 shadow-[0_4px_16px_rgba(13,40,80,0.04)] hover:shadow-[0_12px_28px_rgba(13,40,80,0.08)] hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100 max-h-[180px]">
                    <img 
                      src={rel.image} 
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black text-[#10A878] bg-white/95 backdrop-blur-xs border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <h3 className="text-base font-black text-[#0D2850] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {rel.title}
                    </h3>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>{rel.readTime}</span>
                      <span className="font-bold text-[#F7931E] flex items-center group-hover:translate-x-1 transition-transform">
                        Read Article <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="relative rounded-[26px] overflow-hidden bg-gradient-to-r from-[#0D2850] via-[#174B8C] to-[#0A223E] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
              Personalized Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need Personalized Loan Advisory?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-normal">
              Our financial consultants can help you compare pre-approved loan options across 20+ banking partners.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-extrabold text-xs sm:text-sm whitespace-nowrap shadow-md shadow-orange-500/30 transition shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 inline mr-2" />
            Talk to an Advisor
          </Link>
        </div>

      </article>

    </div>
  );
};

export default BlogDetailPage;
