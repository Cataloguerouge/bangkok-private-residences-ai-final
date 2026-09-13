import React from 'react';
import { ServiceItem } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const { navigate } = useRouter();

  return (
    <article className="group flex flex-col bg-[#FBF9F5] border border-[#E2DDD4] hover:border-[#8C827A] transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE5DC]">
        <img
          src={service.image}
          alt={service.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            {service.subtitle}
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#18181B] font-normal mb-3">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#615B54] font-light leading-relaxed mb-6">
            {service.description}
          </p>

          {service.details && service.details.length > 0 && (
            <ul className="space-y-2 mb-6 pt-4 border-t border-[#EAE5DC]">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#2D2B29]">
                  <Check className="w-3.5 h-3.5 text-[#8C827A] shrink-0 mt-0.5" />
                  <span className="font-light">{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between">
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] group-hover:text-[#615B54] transition-colors"
          >
            <span>INQUIRE ABOUT SERVICE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
