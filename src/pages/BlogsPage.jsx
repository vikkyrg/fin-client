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
  ShieldCheck,
  TrendingUp,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { blogService } from '../services/api';
import { formatDate } from '../utils/formatters';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const FALLBACK_BLOGS = [
  {
    _id: 'fb-1',
    title: 'Mastering Your CIBIL Score: 7 Proven Ways to Cross 750+',
    slug: 'mastering-your-cibil-score-750-plus',
    category: 'Credit Score & CIBIL',
    author: 'Senior Credit Analyst',
    summary: 'A high credit score is your passport to competitive loan interest rates. Learn the concrete actions you can take today to elevate your score past 750.',
    readTime: '6 min read',
    publishedAt: new Date().toISOString(),
    isFeatured: true
  },
  {
    _id: 'fb-2',
    title: 'Loan Against Securities vs Personal Loan: Which One is Right for You?',
    slug: 'loan-against-securities-vs-personal-loan-comparison',
    category: 'Loan Guidance',
    author: 'Financial Advisory Desk',
    summary: 'Should you pledge your investments or opt for an unsecured personal loan? We break down the cost, interest impact, and liquidity trade-offs.',
    readTime: '5 min read',
    publishedAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    isFeatured: false
  },
  {
    _id: 'fb-3',
    title: 'Complete Checklist: Documents Required for Home Loan Approval in India',
    slug: 'home-loan-documents-checklist-india',
    category: 'Loan Guidance',
    author: 'Mortgage Solutions Team',
    summary: 'Avoid delays in home purchase transactions by organizing your KYC, income records, and property title papers ahead of time.',
    readTime: '7 min read',
    publishedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    isFeatured: false
  },
  {
    _id: 'fb-4',
    title: 'Business Working Capital: When to Choose Overdraft vs Term Loans',
    slug: 'business-working-capital-overdraft-vs-term-loan',
    category: 'Business Financing',
    author: 'SME Banking Consultant',
    summary: 'Discover how small and medium businesses can optimize cash flows and interest outflows by structuring their working capital lines effectively.',
    readTime: '5 min read',
    publishedAt: new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString(),
    isFeatured: false
  },
  {
    _id: 'fb-5',
    title: 'How Repo Rate Fluctuations Impact Your Floating Rate EMIs',
    slug: 'how-repo-rate-impacts-floating-rate-emis',
    category: 'Interest Rates & EMIs',
    author: 'Macroeconomic Desk',
    summary: 'A clear guide on how Reserve Bank of India policy rate adjustments translate to changes in your home loan and mortgage monthly outflows.',
    readTime: '4 min read',
    publishedAt: new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString(),
    isFeatured: false
  }
];

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    blogService.getCategories()
      .then(res => {
        if (res.data?.data && res.data.data.length > 0) {
          setCategories(res.data.data);
        } else {
          setCategories([
            { _id: 'c1', name: 'Credit Score & CIBIL' },
            { _id: 'c2', name: 'Loan Guidance' },
            { _id: 'c3', name: 'Business Financing' },
            { _id: 'c4', name: 'Interest Rates & EMIs' },
            { _id: 'c5', name: 'Financial Planning' }
          ]);
        }
      })
      .catch(() => {
        setCategories([
          { _id: 'c1', name: 'Credit Score & CIBIL' },
          { _id: 'c2', name: 'Loan Guidance' },
          { _id: 'c3', name: 'Business Financing' },
          { _id: 'c4', name: 'Interest Rates & EMIs' },
          { _id: 'c5', name: 'Financial Planning' }
        ]);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    blogService.getBlogs({
      category: selectedCategory === 'All' ? undefined : selectedCategory,
      search: search.trim() || undefined
    })
      .then(res => {
        const fetchedBlogs = res.data?.data?.blogs;
        if (fetchedBlogs && fetchedBlogs.length > 0) {
          setBlogs(fetchedBlogs);
        } else {
          let filtered = FALLBACK_BLOGS;
          if (selectedCategory !== 'All') {
            filtered = filtered.filter(b => b.category.toLowerCase() === selectedCategory.toLowerCase());
          }
          if (search.trim()) {
            const q = search.toLowerCase();
            filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q));
          }
          setBlogs(filtered);
        }
      })
      .catch(() => {
        let filtered = FALLBACK_BLOGS;
        if (selectedCategory !== 'All') {
          filtered = filtered.filter(b => b.category.toLowerCase() === selectedCategory.toLowerCase());
        }
        if (search.trim()) {
          const q = search.toLowerCase();
          filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q));
        }
        setBlogs(filtered);
      })
      .finally(() => setLoading(false));
  }, [selectedCategory, search]);

  const featuredBlog = blogs.length > 0 ? (blogs.find(b => b.isFeatured) || blogs[0]) : null;
  const remainingBlogs = featuredBlog ? blogs.filter(b => b._id !== featuredBlog._id) : blogs;

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. HERO BANNER */}
      <section className="bg-brand-blue text-brand-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-white blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-orange blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal type="fade-down" delay={0.05}>
            <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-orange transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-60 text-brand-green" />
              <span className="text-brand-white font-semibold">Blogs</span>
            </nav>
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal type="fade-down" delay={0.1}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-green border border-white/15 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                Financial Insights & Knowledge
              </span>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.15}>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-brand-white mb-4">
                Financial Insights & Knowledge
              </h1>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.22}>
              <p className="text-base sm:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl">
                Explore useful articles, financial guidance and insights to make informed borrowing decisions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* 2. SEARCH & CATEGORY FILTER BAR */}
        <ScrollReveal type="fade-up" delay={0.1}>
          <div className="bg-brand-white rounded-2xl p-4 sm:p-5 shadow-md border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-brand-green" />
                Category:
              </span>
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === 'All' 
                    ? 'bg-brand-blue text-brand-white shadow-sm' 
                    : 'bg-slate-100 text-slate-700 hover:text-brand-blue'
                }`}
              >
                All Topics
              </button>
              {categories.map(cat => (
                <button
                  key={cat._id || cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.name 
                      ? 'bg-brand-blue text-brand-white shadow-sm' 
                      : 'bg-slate-100 text-slate-700 hover:text-brand-blue'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Title Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles by title..."
                className="w-full pl-10 pr-4 py-2.5 bg-brand-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
              />
            </div>

          </div>
        </ScrollReveal>

        {/* 3. FEATURED BLOG SECTION */}
        {featuredBlog && selectedCategory === 'All' && !search && (
          <ScrollReveal type="fade-up">
            <div className="bg-brand-white rounded-3xl border border-slate-100 shadow-md overflow-hidden transition hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Graphic Box */}
                <div className="lg:col-span-5 bg-brand-blue p-8 sm:p-12 flex flex-col justify-between text-brand-white relative">
                  <div className="space-y-3 relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-brand-orange text-brand-white">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Article
                    </span>
                    <p className="text-xs text-blue-200 font-medium">
                      Handpicked by FinAdvise Credit Desk
                    </p>
                  </div>

                  <div className="my-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-green">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-blue-200 relative z-10 border-t border-white/10 pt-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-green" />
                      {featuredBlog.readTime || '6 min read'}
                    </span>
                    <span>•</span>
                    <span>{formatDate(featuredBlog.publishedAt || new Date())}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded">
                        {featuredBlog.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        By {featuredBlog.author || 'Senior Advisory Desk'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue hover:text-brand-green transition leading-snug">
                      <Link to={`/blogs/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed line-clamp-3">
                      {featuredBlog.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">
                      Comprehensive Financial Guide
                    </span>
                    <Link
                      to={`/blogs/${featuredBlog.slug}`}
                      className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-white font-bold text-xs sm:text-sm shadow-sm transition group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 4. BLOGS GRID */}
        <div>
          <ScrollReveal type="fade-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-blue">
                {selectedCategory === 'All' ? 'Latest Financial Articles' : `${selectedCategory} Articles`}
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Showing {blogs.length} article{blogs.length === 1 ? '' : 's'}
              </span>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="py-24 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 bg-brand-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <BookOpen className="w-14 h-14 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No Articles Found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm mx-auto">
                We could not find any articles matching your query.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearch(''); }}
                className="mt-5 px-5 py-2.5 rounded-xl bg-brand-blue text-brand-white text-xs font-bold hover:bg-brand-blueDark transition"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
              {(selectedCategory === 'All' && !search ? remainingBlogs : blogs).map(blog => (
                <StaggerItem
                  key={blog._id} 
                  className="bg-brand-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="font-bold text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-brand-green" />
                        {blog.readTime || '5 min read'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-blue group-hover:text-brand-green transition line-clamp-2 leading-snug">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>

                  <div className="p-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Author</p>
                      <p className="font-semibold text-slate-700">{blog.author || 'Advisory Team'}</p>
                    </div>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center font-bold text-brand-orange hover:text-brand-orangeHover transition group-hover:translate-x-1"
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

        {/* 5. EXPERT CONSULTATION CALLOUT BANNER */}
        <ScrollReveal type="zoom-in">
          <div className="bg-brand-blue rounded-3xl p-8 sm:p-12 text-brand-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Personalized Guidance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-white">
                Need Expert Loan Consultation?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                Our financial specialists provide unbiased assessments to help you compare loan options across 20+ banking partners.
              </p>
            </div>

            <Link
              to="/loans"
              className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg transition shrink-0"
            >
              Talk to an Advisor
            </Link>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default BlogsPage;