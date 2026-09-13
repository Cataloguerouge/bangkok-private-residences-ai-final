import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { journalArticles } from '../data/journal';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';
import { NotFoundPage } from './NotFoundPage';
import { ArrowLeft, Clock, Calendar, Share2, ArrowUpRight } from 'lucide-react';

interface JournalDetailPageProps {
  slug: string;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();

  const article = journalArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | ${siteConfig.name} Journal`;
    }
  }, [slug, article]);

  if (!article) {
    return (
      <NotFoundPage
        title="Journal Note Not Found"
        message="The editorial publication you are looking for does not exist or has been relocated."
      />
    );
  }

  // Related articles
  const relatedArticles = journalArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FBF9F5]">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[#EAE5DC]">
        <button
          onClick={() => navigate('/journal')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716A] hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#8C827A] mb-4 font-mono">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#18181B] font-normal leading-[1.12] mb-6">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs text-[#78716A]">
            <span>Published {article.date}</span>
            <span>·</span>
            <span>Bangkok Private Residences Editorial</span>
          </div>
        </div>

        {/* Hero Architectural Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAE5DC] mb-12 shadow-sm">
          <img
            src={article.image || article.heroImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-stone max-w-none space-y-6 text-sm sm:text-base text-[#3C3833] font-light leading-relaxed">
          <p className="font-editorial text-xl sm:text-2xl text-[#18181B] leading-relaxed italic border-l-2 border-[#18181B] pl-6 my-8">
            {article.excerpt}
          </p>

          <div className="whitespace-pre-line leading-relaxed space-y-4">
            {article.content}
          </div>
        </div>

        {/* Author / Desk Signature */}
        <div className="mt-14 pt-8 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
          <div>
            Published by <strong>Bangkok Private Residences Research Desk</strong>
          </div>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard.');
              }
            }}
            className="inline-flex items-center gap-1.5 text-[#18181B] hover:text-[#615B54] uppercase tracking-wider text-[11px]"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share This Note</span>
          </button>
        </div>
      </article>

      {/* Related Reading Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#EAE5DC]">
        <h3 className="font-editorial text-2xl text-[#18181B] mb-8 font-normal">
          Further Reading
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigate(`/journal/${rel.slug}`)}
              className="group cursor-pointer bg-white border border-[#EAE5DC] p-6 hover:border-[#8C827A] transition-all"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#8C827A] block mb-2 font-mono">
                {rel.category} · {rel.readTime}
              </span>
              <h4 className="font-editorial text-xl text-[#18181B] group-hover:text-[#615B54] transition-colors mb-2">
                {rel.title}
              </h4>
              <p className="text-xs text-[#615B54] line-clamp-2 leading-relaxed">
                {rel.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
};
