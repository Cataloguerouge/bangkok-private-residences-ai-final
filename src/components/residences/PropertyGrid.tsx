import React from 'react';
import { Property } from '../../types';
import { PropertyCard } from './PropertyCard';
import { useRouter } from '../../context/RouterContext';
import { Compass, RotateCcw } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  onResetFilters?: () => void;
  isLoading?: boolean;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  onResetFilters,
  isLoading = false,
}) => {
  const { navigate } = useRouter();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-[#F2EDE4]/60 border border-[#EAE5DC] animate-pulse h-[480px]" />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="py-20 px-6 text-center border border-[#EAE5DC] bg-[#F8F5F0]">
        <Compass className="w-10 h-10 text-[#8C827A] mx-auto mb-4 stroke-1" />
        <h3 className="font-editorial text-2xl sm:text-3xl text-[#18181B] mb-2 font-normal">
          No residences match these specific parameters
        </h3>
        <p className="text-sm text-[#78716A] max-w-md mx-auto mb-6 leading-relaxed">
          Our private portfolio frequently includes discreet off-market residences that are not publicly displayed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-[#18181B] text-[#18181B] hover:bg-[#18181B] hover:text-[#FBF9F5] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search Filters</span>
            </button>
          )}

          <button
            onClick={() => navigate('/personal-search')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium bg-[#18181B] text-[#FBF9F5] hover:bg-[#2D2B29] transition-colors"
          >
            <span>Request Bespoke Search</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {properties.map((property, idx) => (
        <PropertyCard
          key={property.id}
          property={property}
          priority={idx < 3}
        />
      ))}
    </div>
  );
};
