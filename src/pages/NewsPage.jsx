import React, { useState, useEffect } from 'react';
import { Newspaper, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { contentService } from '../services/api';
import { formatDate } from '../utils/formatters';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    contentService.getNews()
      .then(res => {
        if (res.data?.data) setNews(res.data.data);
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
            Financial News Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            News & Industry Updates
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Stay updated with RBI policy announcements, banking lending rate revisions, and credit market insights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          
          {loading ? (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-blue"></div>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">No news updates available at this moment.</p>
            </div>
          ) : (
            <div className="space-y-8 divide-y divide-slate-100">
              {news.map((item, idx) => (
                <div key={item._id} className={idx > 0 ? 'pt-8' : ''}>
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                    <span className="font-bold text-brand-blue">{item.source || 'Financial Desk'}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {formatDate(item.publishedDate)}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default NewsPage;
