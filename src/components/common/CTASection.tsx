import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/site';

interface CTASectionProps {
  headline?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = 'Tell us what you are looking for.',
  subtitle = 'Share your requirements and explore a more focused way to search for a Bangkok residence.',
  buttonText = 'START A PERSONAL SEARCH',
}) => {
  const { navigate } = useRouter();

  return (
    <section className="relative py-24 sm:py-32 bg-[#F2EDE4] border-t border-b border-[#E2DDD4] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-semibold block mb-3">
          BANGKOK PRIVATE RESIDENCES · PERSONAL SEARCH
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#18181B] font-normal leading-[1.14] mb-6">
          {headline}
        </h2>

        <p className="text-sm sm:text-base text-[#615B54] font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/personal-search')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] border border-[#18181B] transition-colors"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] bg-white/80 hover:bg-white border border-[#DDD6CB] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
};

