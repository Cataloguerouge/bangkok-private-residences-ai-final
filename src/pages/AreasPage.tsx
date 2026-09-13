import React, { useEffect } from 'react';
import { areas } from '../data/areas';
import { NeighbourhoodCard } from '../components/areas/NeighbourhoodCard';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';

export const AreasPage: React.FC = () => {
  useEffect(() => {
    document.title = `Bangkok Neighbourhoods | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 pb-8 border-b border-[#EAE5DC]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">
          NEIGHBOURHOODS · EDITORIAL GUIDE
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight max-w-3xl mb-4">
          Bangkok Neighbourhoods
        </h1>
        <p className="text-sm sm:text-base text-[#615B54] font-light max-w-2xl leading-relaxed">
          A visual guide to several Bangkok neighbourhoods commonly considered by residential renters. This prototype uses editorial demonstration content; local details, travel times, schools, facilities and other property-specific information should be verified before publication.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((area) => (
            <NeighbourhoodCard key={area.id} area={area} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CTASection
          headline="Not Sure Which Area Fits Your Routine?"
          subtitle="Use the personal search flow to define your priorities and explore the neighbourhoods most relevant to your search."
          buttonText="START A PERSONAL SEARCH"
        />
      </div>
    </div>
  );
};
