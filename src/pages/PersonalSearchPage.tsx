import React, { useEffect } from 'react';
import { PersonalSearchForm } from '../components/forms/PersonalSearchForm';
import { siteConfig } from '../config/site';
import { Compass, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export const PersonalSearchPage: React.FC = () => {
  useEffect(() => {
    document.title = `Personal Residence Search | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#FBF9F5]">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">
          BESPOKE RESIDENTIAL SOURCING
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight mb-4">
          Personal Residence Search
        </h1>
        <p className="text-sm sm:text-base text-[#615B54] font-light leading-relaxed max-w-2xl mx-auto">
          Searching for a premium Bangkok home is nuanced. Tell us your exact lifestyle requirements, commute parameters, and design preferences, and our private concierge desk will curate a bespoke shortlist.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider text-[#8C827A]">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
            Off-Market Access
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#18181B]" />
            Time-Saving Sourcing
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#18181B]" />
            Strict Confidentiality
          </span>
        </div>
      </div>

      {/* Main Multi-Step Questionnaire */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PersonalSearchForm />
      </div>
    </div>
  );
};
