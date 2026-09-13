import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { areas } from '../data/areas';
import { properties } from '../data/properties';
import { PropertyCard } from '../components/residences/PropertyCard';
import { CTASection } from '../components/common/CTASection';
import { siteConfig, getWhatsAppLink } from '../config/site';
import { NotFoundPage } from './NotFoundPage';
import { ArrowLeft, Train, MapPin, Check, Compass, ArrowUpRight, MessageCircle } from 'lucide-react';

interface AreaDetailPageProps {
  slug: string;
}

export const AreaDetailPage: React.FC<AreaDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();

  const area = areas.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (area) {
      document.title = `${area.name} Residential Guide | ${siteConfig.name}`;
    }
  }, [slug, area]);

  if (!area) {
    return (
      <NotFoundPage
        title="Enclave Guide Not Found"
        message="The neighbourhood enclave guide you are looking for does not exist or has been relocated."
      />
    );
  }

  // Find properties in this neighbourhood
  const areaProperties = properties.filter(
    (p) => p.neighbourhood.toLowerCase() === area.name.toLowerCase()
  );

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FBF9F5]">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[#EAE5DC]">
        <button
          onClick={() => navigate('/areas')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716A] hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Enclaves</span>
        </button>
      </div>

      {/* Cinematic Enclave Hero Stage */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative aspect-[21/9] min-h-[360px] w-full overflow-hidden bg-[#18181B]">
          <img
            src={area.heroImage}
            alt={area.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-2 block">
              BANGKOK RESIDENTIAL ENCLAVE
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight mb-2">
              {area.name}
            </h1>
            <p className="text-sm sm:text-base text-white/90 font-light max-w-2xl leading-relaxed mb-4">
              {area.tagline}
            </p>
            <div className="flex items-center gap-3 text-xs text-white/80 font-mono uppercase tracking-wider">
              <Train className="w-3.5 h-3.5 text-white" />
              <span>{area.btsMrt}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-8 space-y-10">
            <section>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
                ENCLAVE PROFILE
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl text-[#18181B] font-normal mb-4">
                Life in {area.name}
              </h2>
              <p className="text-sm sm:text-base text-[#4A453F] font-light leading-relaxed whitespace-pre-line">
                {area.description}
              </p>
            </section>

            <section className="pt-8 border-t border-[#EAE5DC]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
                LIFESTYLE MATRIX
              </span>
              <h3 className="font-editorial text-2xl text-[#18181B] font-normal mb-4">
                Curated Local Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(area.highlights || area.vibe || []).map((highlight, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#EAE5DC] flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#18181B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2D2B29] font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Available Residences in this Enclave */}
            <section className="pt-8 border-t border-[#EAE5DC]">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
                    CURRENT INVENTORY
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#18181B] font-normal">
                    Residences in {area.name}
                  </h3>
                </div>
                <span className="text-xs text-[#8C827A]">
                  {areaProperties.length} active {areaProperties.length === 1 ? 'residence' : 'residences'}
                </span>
              </div>

              {areaProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {areaProperties.map((prop) => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
              ) : (
                <div className="p-8 bg-[#F2EDE4] border border-[#DDD6CB] text-center">
                  <Compass className="w-8 h-8 text-[#8C827A] mx-auto mb-3 stroke-1" />
                  <h4 className="font-editorial text-xl text-[#18181B] mb-2">
                    Private Inventory Only
                  </h4>
                  <p className="text-xs text-[#615B54] max-w-md mx-auto mb-4">
                    Residences currently in our {area.name} collection are undergoing private tenancy transitions or are held as confidential off-market mandates.
                  </p>
                  <button
                    onClick={() => navigate('/personal-search')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium bg-[#18181B] text-[#FBF9F5]"
                  >
                    <span>Request Off-Market Sourcing in {area.name}</span>
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Right Info Card */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#FBF9F5] border border-[#E2DDD4]">
              <h3 className="font-editorial text-xl text-[#18181B] mb-4 font-normal">
                Enclave Overview
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">Transit Stations</span>
                  <span className="font-medium text-[#18181B]">{area.btsMrt}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">Ideal Demographic</span>
                  <span className="font-medium text-[#18181B]">Expatriate Executives, Diplomats, Creative Leaders</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">Typical Rental Range</span>
                  <span className="font-medium text-[#18181B]">฿90,000 – ฿450,000 / month</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#EAE5DC]">
                <a
                  href={getWhatsAppLink(`Inquiring about properties in ${area.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-widest font-medium bg-[#18181B] text-[#FBF9F5] hover:bg-[#2D2B29] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Discuss {area.name} Rentals</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-20">
        <CTASection
          headline={`Discover Your Residence in ${area.name}`}
          subtitle={`Our team will source private condominiums and duplex penthouses in ${area.name} tailored to your specifications.`}
          buttonText={`REQUEST ${area.name.toUpperCase()} SHORTLIST`}
        />
      </div>
    </div>
  );
};
