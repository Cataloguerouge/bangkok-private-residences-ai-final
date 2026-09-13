import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NotFoundPageProps {
  title?: string;
  message?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = 'Page Not Found',
  message = 'The residence, guide or page you are looking for could not be found or has been relocated.',
}) => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5]">
      <div className="max-w-xl w-full text-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#DDD6CB] bg-[#F2EDE4] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C827A]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716A] font-medium">
            404 · REFERENCE
          </span>
        </div>

        {/* Title */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#18181B] font-normal leading-tight mb-4">
          {title}
        </h1>

        {/* Supporting Message */}
        <p className="text-sm sm:text-base text-[#615B54] font-light leading-relaxed max-w-md mx-auto mb-10">
          {message}
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={() => navigate('/residences')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-colors border border-[#18181B]"
          >
            <span>EXPLORE RESIDENCES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] bg-transparent hover:bg-[#F2EDE4] transition-colors border border-[#DDD6CB]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8C827A]" />
            <span>RETURN TO HOME</span>
          </button>
        </div>

        {/* Fine print */}
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8C827A] mt-12">
          Bangkok Private Residences · Demonstration Portfolio
        </p>
      </div>
    </div>
  );
};
