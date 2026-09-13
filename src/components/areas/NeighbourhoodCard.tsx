import React from 'react';
import { Area } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { ArrowUpRight } from 'lucide-react';

interface NeighbourhoodCardProps {
  area: Area;
  aspect?: 'portrait' | 'landscape';
}

export const NeighbourhoodCard: React.FC<NeighbourhoodCardProps> = ({ area }) => {
  const { navigate } = useRouter();

  return (
    <article
      onClick={() => navigate(`/areas/${area.slug}`)}
      className="group cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#EAE5DC] hover:border-[#8C827A] transition-all duration-300 overflow-hidden"
    >
      {/* Photograph */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EFEAE2]">
        <img
          src={area.heroImage}
          alt={`Bangkok Neighbourhood - ${area.name}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-block px-2.5 py-1 text-[9px] uppercase font-medium tracking-[0.2em] bg-[#FBF9F5]/92 text-[#615B54] backdrop-blur-sm border border-[#E5DFD5]">
            ENCLAVE GUIDE
          </span>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-editorial text-2xl sm:text-[25px] text-[#18181B] font-normal leading-tight group-hover:text-[#615B54] transition-colors mb-2">
            {area.name}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#615B54] font-light leading-relaxed line-clamp-2 mb-4">
            {area.tagline}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em]">
          <span className="text-[#8C827A] font-mono truncate max-w-[65%]">
            {area.btsMrt}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-[#18181B] group-hover:text-[#615B54] transition-colors">
            <span>EXPLORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};

