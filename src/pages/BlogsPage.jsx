import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  PhoneCall,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { formatDate } from '../utils/formatters';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '../data/blogData';
import blogHeroImg from '../assets/blog.png';
import BlogHeroBackground from '../components/BlogHeroBackground';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter static article data purely in frontend
  const filteredBlogs = BLOG_ARTICLES.filter((blog) => {
    const matchesCategory = 
      selectedCategory === 'All Articles' || 
      blog.category.toLowerCase() === selectedCategory.toLowerCase();

    const query = search.trim().toLowerCase();
    const matchesSearch = 
      !query || 
      blog.title.toLowerCase().includes(query) || 
      blog.shortDescription.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Identify featured article
  const featuredBlog = filteredBlogs.find(b => b.featured) || (selectedCategory === 'All Articles' && !search ? filteredBlogs[0] : null);
  const regularBlogs = featuredBlog && selectedCategory === 'All Articles' && !search
    ? filteredBlogs.filter(b => b.id !== featuredBlog.id)
    : filteredBlogs;

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION - SOPHISTICATED EDITORIAL FINANCIAL KNOWLEDGE HUB         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-slate-200/80 pt-6 sm:pt-10 pb-12 sm:pb-16">
        
        {/* Premium Abstract Fintech Background with Soft Flowing Blue Waves & Ambient Gradients */}
        <BlogHeroBackground />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-10 sm:space-y-12">
          
          {/* Top Breadcrumb */}
          <ScrollReveal type="fade-down" delay={0.04}>
            <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-[#123F7A] transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#123F7A] font-bold">Knowledge Hub &amp; Articles</span>
            </nav>
          </ScrollReveal>

          {/* Two-Column Balanced Hero Composition (55% / 45%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN (55%) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              
              {/* Compact FINANCIAL KNOWLEDGE HUB Label */}
              <ScrollReveal type="fade-up" delay={0.08}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase text-[#123F7A] bg-[#F4F8FD] border border-blue-100">
                  <BookOpen className="w-3.5 h-3.5 text-[#2864F0]" />
                  <span>FINANCIAL KNOWLEDGE HUB</span>
                </div>
              </ScrollReveal>

              {/* Main Heading & Green Accent Line */}
              <ScrollReveal type="fade-up" delay={0.12}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-extrabold text-[#123F7A] tracking-[-0.03em] leading-[1.14]">
                    Financial Knowledge That Helps You Make{' '}
                    <span className="text-[#2864F0] inline-block whitespace-nowrap">
                      Smarter Decisions
                    </span>
                  </h1>
                  {/* Refined Short Green Accent Line */}
                  <div className="w-20 h-1 rounded-full bg-[#10B981] mx-auto lg:mx-0" />
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal type="fade-up" delay={0.16}>
                <p className="text-base sm:text-lg lg:text-[18px] text-slate-600 font-normal leading-[1.65] max-w-2xl mx-auto lg:mx-0">
                  Discover expert insights on personal loans, credit scores, financial planning, interest rates, and responsible borrowing. Get the knowledge you need to make confident financial decisions.
                </p>
              </ScrollReveal>

              {/* Action Buttons (Height: 52-56px) */}
              <ScrollReveal type="fade-up" delay={0.2}>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                  {/* Explore Articles */}
                  <a
                    href="#articles-section"
                    className="w-full sm:w-auto h-[52px] sm:h-[54px] inline-flex items-center justify-center px-8 rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-extrabold text-sm tracking-wide shadow-[0_4px_14px_rgba(247,147,30,0.3)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <span>Explore Articles</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>

                  {/* About FinAdvise */}
                  <Link
                    to="/about-us"
                    className="w-full sm:w-auto h-[52px] sm:h-[54px] inline-flex items-center justify-center px-8 rounded-xl bg-white hover:bg-slate-50 text-[#123F7A] border border-[#123F7A]/30 hover:border-[#123F7A] font-extrabold text-sm tracking-wide active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-2xs"
                  >
                    <span>About FinAdvise</span>
                  </Link>
                </div>
              </ScrollReveal>

            </div>

            {/* RIGHT COLUMN (45%) – Refined Illustration Integration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
              <ScrollReveal type="fade-up" delay={0.22}>
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] flex items-center justify-center">
                  
                  {/* Grounding Shadow for Realistic Depth */}
                  <div className="absolute -bottom-4 w-4/5 h-6 bg-slate-900/10 rounded-full blur-xl pointer-events-none" />

                  {/* Existing Transparent Laptop Graphic - Perfectly Proportioned */}
                  <img 
                    src={blogHeroImg}
                    alt="FinAdvise Financial Knowledge Platform"
                    className="relative z-10 w-full h-auto max-h-[360px] sm:max-h-[400px] lg:max-h-[440px] object-contain drop-shadow-[0_12px_24px_rgba(18,63,122,0.1)] transition-transform duration-300 hover:scale-[1.015]"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div id="articles-section" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-12 sm:space-y-14">
        
        {/* ========================================================================= */}
        {/* 3. FEATURED ARTICLE SECTION - SPLIT-LAYOUT CARD                           */}
        {/* ========================================================================= */}
        {featuredBlog && selectedCategory === 'All Articles' && !search && (
          <ScrollReveal type="fade-up" delay={0.12}>
            <div className="bg-white rounded-[24px] border border-blue-100/90 shadow-[0_12px_36px_rgba(13,40,80,0.06)] hover:shadow-[0_18px_44px_rgba(13,40,80,0.1)] transition-all duration-300 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left: Article Thumbnail */}
                <div className="lg:col-span-6 relative overflow-hidden bg-slate-100 min-h-[260px] sm:min-h-[340px] lg:min-h-full">
                  <img 
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2850]/60 via-transparent to-transparent lg:hidden" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#F7931E] text-white shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      FEATURED ARTICLE
                    </span>
                  </div>
                </div>

                {/* Right: Article Information */}
                <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Category & Read Time */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-black text-[#10A878] bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                        {featuredBlog.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {featuredBlog.readTime}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {formatDate(featuredBlog.publishDate)}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0D2850] hover:text-[#2563EB] transition-colors leading-[1.22] tracking-tight">
                      <Link to={`/blogs/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {featuredBlog.shortDescription}
                    </p>
                  </div>

                  {/* Author & Read Article Button */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#174B8C] shrink-0 font-black text-xs">
                        <User className="w-4 h-4 text-[#174B8C]" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Author</p>
                        <p className="text-xs sm:text-sm font-black text-[#0D2850]">{featuredBlog.author}</p>
                      </div>
                    </div>

                    <Link
                      to={`/blogs/${featuredBlog.slug}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 active:scale-95 transition-all duration-200 group/btn self-start sm:self-auto cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* 4. LATEST FINANCIAL ARTICLES - RESPONSIVE THREE-COLUMN GRID              */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          <ScrollReveal type="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-blue-100/70">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0D2850] tracking-tight">
                  {selectedCategory === 'All Articles' ? 'Latest Financial Insights' : `${selectedCategory} Articles`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                  Practical knowledge to help you make better financial decisions.
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400 self-start sm:self-auto">
                Showing {filteredBlogs.length} article{filteredBlogs.length === 1 ? '' : 's'}
              </span>
            </div>
          </ScrollReveal>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[24px] border border-blue-100/80 p-8 shadow-sm">
              <BookOpen className="w-14 h-14 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-black text-[#0D2850]">No Articles Found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm mx-auto font-normal">
                We could not find any articles matching your search query or filter.
              </p>
              <button
                onClick={() => { setSelectedCategory('All Articles'); setSearch(''); }}
                className="mt-5 px-5 py-2.5 rounded-xl bg-[#174B8C] text-white text-xs font-bold hover:bg-[#0D2850] transition shadow-sm cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.07}>
              {regularBlogs.map((blog) => (
                <StaggerItem
                  key={blog.id} 
                  className="bg-white rounded-[18px] border border-blue-100/90 shadow-[0_4px_16px_rgba(13,40,80,0.04)] hover:shadow-[0_14px_32px_rgba(13,40,80,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* 16:9 Thumbnail with Zoom Effect */}
                    <Link to={`/blogs/${blog.slug}`} className="block relative aspect-video overflow-hidden bg-slate-100">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-black text-[#10A878] bg-white/95 backdrop-blur-xs border border-emerald-200/80 px-2.5 py-1 rounded-full shadow-xs">
                          {blog.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content Body */}
                    <div className="p-6 space-y-3">
                      {/* Meta: Read time & Date */}
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium">
                        <Clock className="w-3 h-3 text-[#10A878]" />
                        <span>{blog.readTime}</span>
                        <span>•</span>
                        <span>{formatDate(blog.publishDate)}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-[17px] font-black text-[#0D2850] group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-3 leading-relaxed font-normal">
                        {blog.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Author & Read More Link */}
                  <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Author</p>
                      <p className="font-extrabold text-[#0D2850] text-xs">{blog.author}</p>
                    </div>
                    
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center font-bold text-[#F7931E] hover:text-[#E07914] transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 5. EXPERT CONSULTATION CTA BANNER                                        */}
        {/* ========================================================================= */}
        <ScrollReveal type="fade-up">
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#0D2850] via-[#174B8C] to-[#0A223E] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(13,40,80,0.22)]">
            
            {/* Background Decorative Rings */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center space-x-2 text-[11px] font-black tracking-wider uppercase text-emerald-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PERSONALIZED FINANCIAL ADVISORY</span>
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  Need Expert Loan Guidance?
                </h2>

                <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                  Our experts can help you understand loan options and explore suitable financing opportunities across 20+ partner banks.
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#F7931E] hover:bg-[#E07914] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/30 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span>Talk to a Loan Advisor</span>
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default BlogsPage;
