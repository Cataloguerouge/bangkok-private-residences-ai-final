import React from 'react';
import { Property } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { formatTHB } from '../../config/site';
import { ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, priority = false }) => {
  const { navigate } = useRouter();

  return (
    <article
      onClick={() => navigate(`/residences/${property.slug}`)}
      className="group cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#EAE5DC] hover:border-[#8C827A] transition-all duration-300 overflow-hidden"
    >
      {/* 1. Large Image with consistent aspect ratio */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EFEAE2]">
        <img
          src={property.images[0]}
          alt={property.name}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
        />
        {/* 6. DEMO · VERIFY Badge */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-block px-2.5 py-1 text-[9px] uppercase font-medium tracking-[0.2em] bg-[#FBF9F5]/92 text-[#615B54] backdrop-blur-sm border border-[#E5DFD5]">
            DEMO · VERIFY
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* 2. Property Name */}
          <h3 className="font-editorial text-2xl sm:text-[25px] text-[#18181B] font-normal leading-tight group-hover:text-[#615B54] transition-colors mb-1.5">
            {property.name}
          </h3>

          {/* 3. Neighbourhood & Building */}
          <p className="text-xs text-[#78716A] font-light tracking-wide mb-4">
            {property.building ? `${property.building} · ` : ''}{property.neighbourhood}
          </p>

          {/* 4. Key Facts */}
          <div className="py-3 border-y border-[#EAE5DC] text-[11px] uppercase tracking-[0.18em] text-[#615B54] font-medium flex items-center justify-between">
            <span>
              {property.bedrooms} {property.bedrooms === 1 ? 'BED' : 'BED'} · {property.bathrooms} {property.bathrooms === 1 ? 'BATH' : 'BATH'} · {property.size} SQ M
            </span>
            <span className="text-[10px] text-[#8C827A] font-normal hidden sm:inline">
              {property.bts}
            </span>
          </div>
        </div>

        {/* 5. Indicative Monthly Rent & Explore link */}
        <div className="mt-5 pt-1 flex items-end justify-between">
          <div>
            <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#8C827A] block font-medium">
              Indicative monthly rent
            </span>
            <div className="font-editorial text-2xl text-[#18181B] font-normal mt-0.5">
              {formatTHB(property.monthlyRent)}
              <span className="text-xs font-sans text-[#78716A] ml-1 font-light">/ month</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-medium text-[#18181B] group-hover:text-[#615B54] transition-colors">
            <span>VIEW</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};

