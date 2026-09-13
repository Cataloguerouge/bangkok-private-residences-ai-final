import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { journalArticles } from '../data/journal';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';
import { ArrowUpRight } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = `The Bangkok Journal | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Architecture & Design', 'Neighbourhood Guides', 'Expat Advisory', 'Urban Lifestyle'];

  const filteredArticles = selectedCategory === 'All'
    ? journalArticles
    : journalArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 pb-8 border-b border-[#EAE5DC]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">
          THE BANGKOK RESIDENTIAL JOURNAL
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight max-w-3xl mb-4">
          Notes on Architecture, Living & Urban Culture
        </h1>
        <p className="text-sm sm:text-base text-[#615B54] font-light max-w-2xl leading-relaxed">
          Essays and field notes from our residential advisory team on design trends, enclave dynamics, and legal guidelines for international residents in Bangkok.
        </p>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#18181B] text-[#FBF9F5] border-[#18181B]'
                  : 'bg-white text-[#615B54] border-[#DDD6CB] hover:border-[#8C827A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate(`/journal/${article.slug}`)}
              className="group cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#EAE5DC] hover:border-[#8C827A] transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5DC]">
                <img
                  src={article.image || article.heroImage}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#8C827A] mb-2 uppercase tracking-wider font-mono">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-editorial text-2xl text-[#18181B] font-normal leading-snug group-hover:text-[#615B54] transition-colors mb-3">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#615B54] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE5DC] flex items-center justify-between text-xs uppercase tracking-widest text-[#18181B]">
                  <span className="text-[11px] text-[#8C827A]">{article.date}</span>
                  <span className="inline-flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                    <span>Read Note</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CTASection
          headline="Have Questions About Bangkok Residential Leases?"
          subtitle="Our consultants provide confidential advisory for corporate relocation managers and private international lessees."
          buttonText="CONTACT OUR ADVISORY TEAM"
        />
      </div>
    </div>
  );
};
