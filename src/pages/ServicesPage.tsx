import React, { useEffect } from 'react';
import { services } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = `Services | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 pb-8 border-b border-[#EAE5DC]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">
          SERVICES · CONCEPT PROTOTYPE
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight max-w-3xl mb-4">
          A More Considered Property Search
        </h1>
        <p className="text-sm sm:text-base text-[#615B54] font-light max-w-2xl leading-relaxed">
          The services below illustrate the proposed client experience for Bangkok Private Residences. Final scope, availability, fees and operational arrangements will be confirmed before commercial launch.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CTASection
          headline="Tell Us What You Are Looking For"
          subtitle="Use the personal search flow to explore the concept, or contact us directly about the next stage of the project."
          buttonText="START A PERSONAL SEARCH"
        />
      </div>
    </div>
  );
};
