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
  ArrowRight,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { blogService } from '../services/api';
import { formatDate } from '../utils/formatters';

const FALLBACK_SINGLE_BLOGS = {
  'mastering-your-cibil-score-750-plus': {
    title: 'Mastering Your CIBIL Score: 7 Proven Ways to Cross 750+',
    slug: 'mastering-your-cibil-score-750-plus',
    category: 'Credit Score & CIBIL',
    author: 'Senior Credit Analyst',
    publishedAt: new Date().toISOString(),
    readTime: '6 min read',
    summary: 'A high credit score is your passport to competitive loan interest rates. Learn the concrete actions you can take today to elevate your score past 750.',
    content: `A CIBIL credit score is a 3-digit numerical summary of your credit history, ranging between 300 and 900. Lenders view a score above 750 as the gold standard for creditworthiness and lower borrowing rates.

### 1. Maintain Pristine Repayment Discipline
Payment history accounts for approximately 35% of your total credit score calculation. Even a single delayed EMI or credit card payment can shave 20 to 50 points off your score. Set up auto-debits for your credit card bills and loan EMIs to avoid accidental oversights.

### 2. Keep Your Credit Utilization Ratio (CUR) Under 30%
If you have a total credit limit of ₹2,00,000 across your cards, strive never to utilize more than ₹60,000 at any billing cycle. A high credit utilization signals credit hunger and downward financial pressure to credit reporting agencies.

### 3. Maintain a Healthy Credit Mix
Having a balanced proportion of secured credit (such as Home Loans or Auto Loans) and unsecured credit (like Personal Loans or Credit Cards) signals responsible multi-instrument management.

### 4. Avoid Submitting Multiple Direct Loan Applications
Every time you apply directly with multiple banks simultaneously, each bank performs a hard inquiry on your credit bureau record. Multiple hard inquiries in a brief window negatively impact your score. Working with an independent loan consultancy helps you find pre-vetted options without racking up indiscriminate hard inquiries.

### 5. Periodically Check Your Bureau Report for Errors
Inaccuracies in PAN linkage, closed loans still displaying as active, or incorrect overdue amounts can artificially drag your score down. If you detect errors, immediately file a dispute on the bureau portal for rectification.`,
    relatedBlogs: [
      {
        slug: 'loan-against-securities-vs-personal-loan-comparison',
        title: 'Loan Against Securities vs Personal Loan: Which One is Right for You?',
        category: 'Loan Guidance',
        readTime: '5 min read'
      },
      {
        slug: 'home-loan-documents-checklist-india',
        title: 'Complete Checklist: Documents Required for Home Loan Approval in India',
        category: 'Loan Guidance',
        readTime: '7 min read'
      }
    ]
  },
  'loan-against-securities-vs-personal-loan-comparison': {
    title: 'Loan Against Securities vs Personal Loan: Which One is Right for You?',
    slug: 'loan-against-securities-vs-personal-loan-comparison',
    category: 'Loan Guidance',
    author: 'Financial Advisory Desk',
    publishedAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    readTime: '5 min read',
    summary: 'Should you pledge your investments or opt for an unsecured personal loan? We break down the cost, interest impact, and liquidity trade-offs.',
    content: `When urgent capital needs arise, borrowers often face the dilemma: should they apply for an unsecured personal loan or pledge their equity portfolio / mutual funds via a Loan Against Securities (LAS)?

### Cost of Borrowing
Personal loans are completely unsecured and carry interest rates typically between 10.5% and 18%. In contrast, Loan Against Securities is backed by high-quality collateral, allowing lending partners to offer interest rates between 9% and 12%.

### Interest Calculation: Lump Sum vs Overdraft
In a personal loan, interest is charged on the entire disbursed loan principal from day one. In Loan Against Securities, banks offer an overdraft limit where interest is levied strictly on the exact amount you withdraw for the exact days you use it.

### Capital Compounding Protection
Liquidating equity funds during market corrections permanently locks in losses. Pledging allows your portfolio to stay invested, continuing to accumulate NAV growth, dividends, and bonuses.

### Conclusion
If you have an existing portfolio of mutual funds or blue-chip shares and want to avoid selling during volatile markets, LAS is virtually always the more economical choice. If you do not have sizable investments, an unsecured personal loan remains the quickest accessible liquidity source.`,
    relatedBlogs: [
      {
        slug: 'mastering-your-cibil-score-750-plus',
        title: 'Mastering Your CIBIL Score: 7 Proven Ways to Cross 750+',
        category: 'Credit Score & CIBIL',
        readTime: '6 min read'
      }
    ]
  },
  'home-loan-documents-checklist-india': {
    title: 'Complete Checklist: Documents Required for Home Loan Approval in India',
    slug: 'home-loan-documents-checklist-india',
    category: 'Loan Guidance',
    author: 'Mortgage Solutions Team',
    publishedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    readTime: '7 min read',
    summary: 'Avoid delays in home purchase transactions by organizing your KYC, income records, and property title papers ahead of time.',
    content: `Securing a home loan is a multi-step process involving credit underwriting, legal title search, and technical valuation of the property.

### 1. Identity & KYC Documents
- PAN Card (mandatory for financial validation)
- Proof of Residence: Aadhaar Card, Passport, or Electricity Bill
- Passport-sized photographs

### 2. Financial Documents for Salaried Applicants
- Salary slips for the last 3 months
- Form 16 / Income Tax Returns for the last 2 assessment years
- Bank statement showing salary credits for 6 months

### 3. Financial Documents for Self-Employed Applicants
- Audited Balance Sheet and Profit & Loss accounts for 3 years
- ITR with computational breakdown for 3 years
- Bank account statements of operating accounts for 12 months
- Business registration documents (GST, MSME, Partnership Deed/MOA)

### 4. Property Documents Required
- Copy of Allotment Letter / Agreement to Sell
- Approved floor plan and sanction blueprint
- Encumbrance Certificate (EC) for the past 13 to 30 years
- NOC from the housing society or developer`,
    relatedBlogs: [
      {
        slug: 'mastering-your-cibil-score-750-plus',
        title: 'Mastering Your CIBIL Score: 7 Proven Ways to Cross 750+',
        category: 'Credit Score & CIBIL',
        readTime: '6 min read'
      }
    ]
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    blogService.getBlogBySlug(slug)
      .then(res => {
        if (res.data?.success && res.data.data?.blog) {
          setBlog(res.data.data.blog);
          setRelated(res.data.data.relatedBlogs || []);
        } else if (FALLBACK_SINGLE_BLOGS[slug]) {
          setBlog(FALLBACK_SINGLE_BLOGS[slug]);
          setRelated(FALLBACK_SINGLE_BLOGS[slug].relatedBlogs || []);
        }
      })
      .catch(() => {
        if (FALLBACK_SINGLE_BLOGS[slug]) {
          setBlog(FALLBACK_SINGLE_BLOGS[slug]);
          setRelated(FALLBACK_SINGLE_BLOGS[slug].relatedBlogs || []);
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The financial article you are looking for may have been moved or updated.</p>
        <Link 
          to="/blogs" 
          className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-blue text-brand-white text-xs font-bold hover:bg-brand-blueDark transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-brand-white border-b border-slate-200 py-3.5 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center text-xs text-slate-500">
          <Link to="/" className="hover:text-brand-blue transition font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-brand-green" />
          <Link to="/blogs" className="hover:text-brand-blue transition font-medium">Blogs</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-brand-green" />
          <span className="font-semibold text-brand-blue line-clamp-1">{blog.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* Back Link */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-green mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to All Articles
        </Link>

        <div className="bg-brand-white rounded-3xl p-6 sm:p-12 shadow-md border border-slate-100">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold text-brand-green bg-emerald-50 px-3 py-1 rounded-md">
              {blog.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-green" />
              {blog.readTime || '5 min read'}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-brand-green" />
              {formatDate(blog.publishedAt || new Date())}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 text-xs text-slate-500">
            <span className="flex items-center font-medium">
              <User className="w-4 h-4 mr-1.5 text-brand-blue" />
              Written by <strong className="ml-1 text-slate-800">{blog.author || 'Senior Advisory Desk'}</strong>
            </span>
            <span className="text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded font-semibold text-[11px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              Verified Guidance
            </span>
          </div>

          {/* Lead Summary */}
          {blog.summary && (
            <div className="bg-blue-50/70 border-l-4 border-brand-blue p-5 rounded-r-2xl mb-8 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {blog.summary}
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-5 text-slate-700">
            {blog.content ? (
              blog.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-bold text-brand-blue pt-4 pb-1 border-b border-slate-100">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx} className="space-y-2 list-none pl-0 my-3">
                      {items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 shrink-0" />
                          <span>{it.replace(/^- /, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                );
              })
            ) : null}
          </div>

          {/* Editorial Advisory Note */}
          <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <Bookmark className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-brand-blue">Financial Advisory Notice:</strong> Information published by FinAdvise is strictly intended for financial educational and informational purposes. Borrowers should assess their individual repayment capability and consult a loan advisor before entering into any binding credit agreement.
            </div>
          </div>

        </div>

        {/* Related Articles Section */}
        {related.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-blue">
              Related Articles & Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel, idx) => (
                <Link
                  key={idx}
                  to={`/blogs/${rel.slug}`}
                  className="bg-brand-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-bold text-brand-green bg-emerald-50 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-brand-blue group-hover:text-brand-green transition mt-3 leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>{rel.readTime || '5 min read'}</span>
                    <span className="font-bold text-brand-orange flex items-center group-hover:translate-x-1 transition">
                      Read Article <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
};

export default BlogDetailPage;