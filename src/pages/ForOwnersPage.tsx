import React, { useEffect } from 'react';
import { OwnerForm } from '../components/forms/OwnerForm';
import { siteConfig } from '../config/site';
import { Shield, Sparkles, Camera, Users } from 'lucide-react';

export const ForOwnersPage: React.FC = () => {
  useEffect(() => {
    document.title = `For Property Owners | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  const points = [
    [Sparkles, 'Editorial presentation', 'Present the residence with clear photography, accurate specifications and a concise profile focused on what makes the home distinctive.'],
    [Users, 'Relevant tenant enquiries', 'The intended model is to focus on enquiries that fit the property rather than maximising exposure across every possible listing channel.'],
    [Shield, 'Discreet representation', 'Owners may prefer a quieter approach, with selected introductions and limited public information where appropriate.'],
    [Camera, 'Viewing & handover support', 'The proposed service can include viewing coordination, property information, inventories and practical communication around the tenancy.'],
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 pb-8 border-b border-[#EAE5DC]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">FOR PROPERTY OWNERS</span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight max-w-3xl mb-4">Present your residence with more intention.</h1>
        <p className="text-sm sm:text-base text-[#615B54] font-light max-w-2xl leading-relaxed">A proposed boutique representation model for owners who prefer considered presentation, relevant enquiries and a more personal rental process.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">THE BOUTIQUE APPROACH</span>
              <h2 className="font-editorial text-2xl sm:text-4xl text-[#18181B] font-normal mb-4">A focused alternative to mass listing.</h2>
              <p className="text-sm text-[#615B54] font-light leading-relaxed">The owner service is designed around the idea that a distinctive residence benefits from good information, strong presentation and careful matching. Services and representation terms should be agreed with each owner individually.</p>
            </div>
            <div className="space-y-6 pt-4">
              {points.map(([Icon, title, desc]) => { const PointIcon = Icon as React.ElementType; return <div key={title as string} className="flex gap-4 p-5 bg-white border border-[#EAE5DC]"><div className="w-10 h-10 bg-[#F2EDE4] border border-[#DDD6CB] flex items-center justify-center shrink-0 text-[#18181B]"><PointIcon className="w-4 h-4" /></div><div><h3 className="font-editorial text-lg text-[#18181B] font-normal mb-1">{title as string}</h3><p className="text-xs text-[#615B54] font-light leading-relaxed">{desc as string}</p></div></div>; })}
            </div>
            <p className="text-[11px] text-[#8C827A] leading-relaxed border-t border-[#EAE5DC] pt-5">This website is currently a concept prototype. No tenant network, corporate relationships, photography service, legal service or operational promise should be inferred until the relevant service is formally established.</p>
          </div>
          <div className="lg:col-span-6"><OwnerForm /></div>
        </div>
      </div>
    </div>
  );
};
