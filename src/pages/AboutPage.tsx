import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';
import { Building2, VolumeX, ShieldCheck, SunMedium, Maximize2, Sparkles, Footprints, Scale } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = `About | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    [Building2, 'Architecture & character', 'We look for residences with considered architecture, good proportions and a sense of place.'],
    [VolumeX, 'Comfort & privacy', 'We pay attention to layout, glazing, orientation and the everyday qualities that make a home comfortable.'],
    [ShieldCheck, 'Building quality', 'We consider building management, common areas, security and the practical standard of day-to-day living.'],
    [SunMedium, 'Light & orientation', 'Natural light, views and orientation are part of how we assess whether a residence will work for a particular client.'],
    [Maximize2, 'Function & space', 'We favour layouts that work in real life: useful living space, sensible circulation and well-resolved storage.'],
    [Sparkles, 'Condition & presentation', 'We aim to present homes clearly and accurately, with specifications and condition verified before client decisions are made.'],
    [Footprints, 'Location & daily life', 'Distance to transit, restaurants, parks, schools and other daily needs matters as much as the address itself.'],
    [Scale, 'Clear terms', 'We communicate rental terms, availability and property information transparently and encourage clients to verify material facts before signing.'],
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-8 border-b border-[#EAE5DC]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">THE AGENCY</span>
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#18181B] font-normal leading-tight max-w-4xl mb-6">A more considered way to search for a home in Bangkok.</h1>
        <p className="text-sm sm:text-base md:text-lg text-[#615B54] font-light max-w-3xl leading-relaxed">Bangkok Private Residences is a boutique residential rental concept focused on a smaller, more considered selection of homes. The emphasis is on presentation, useful information and a personal search experience rather than listing volume.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-sm text-[#4A453F] font-light leading-relaxed">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#18181B] font-normal leading-snug">Selection over volume.</h2>
            <p>Bangkok offers an enormous range of apartments, condominiums, serviced residences and private homes. The challenge is often not finding another listing, but understanding which homes are genuinely relevant to the way a client wants to live.</p>
            <p>Our approach is deliberately boutique. We aim to understand the brief first, then present a focused selection of residences that appear relevant to the client's location, space, budget, lifestyle and timing.</p>
            <p>Property information can change quickly. Availability, pricing, building rules and specifications should therefore always be confirmed with the relevant owner, juristic office or authorised representative before a decision is made.</p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE5DC] border border-[#DDD6CB] shadow-md">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85" alt="Refined residential interior" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="mt-3 text-[11px] text-[#8C827A] font-mono uppercase tracking-wider text-right">Bangkok residential living · Concept portfolio</div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4EFE6] border-y border-[#E2DDD4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">OUR APPROACH</span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#18181B] font-normal mb-4">Eight principles behind the selection.</h2>
            <p className="text-xs sm:text-sm text-[#615B54] font-light leading-relaxed">These are editorial principles, not a claim that every residence has been physically audited against a fixed certification protocol.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {principles.map(([Icon, title, desc], index) => {
              const PrincipleIcon = Icon as React.ElementType;
              return <div key={title as string} className="p-6 sm:p-8 bg-[#FBF9F5] border border-[#DDD6CB]">
                <div className="flex items-center justify-between mb-4"><span className="w-10 h-10 bg-[#F2EDE4] border border-[#DDD6CB] flex items-center justify-center"><PrincipleIcon className="w-5 h-5 text-[#18181B]" /></span><span className="text-xs font-mono font-semibold text-[#8C827A]">{String(index + 1).padStart(2, '0')}</span></div>
                <h3 className="font-editorial text-xl text-[#18181B] font-normal mb-2">{title as string}</h3>
                <p className="text-xs text-[#615B54] font-light leading-relaxed">{desc as string}</p>
              </div>;
            })}
          </div>
        </div>
      </div>

      <div className="mt-20"><CTASection headline="Tell us what you are looking for." subtitle="Share your requirements and we will help you focus the search on residences worth considering." buttonText="CONTACT THE CONCIERGE" /></div>
    </div>
  );
};
