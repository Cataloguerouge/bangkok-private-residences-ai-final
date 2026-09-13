import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { properties } from '../data/properties';
import { areas } from '../data/areas';
import { journalArticles } from '../data/journal';
import { siteConfig, getWhatsAppLink } from '../config/site';
import { SearchBar } from '../components/home/SearchBar';
import { PropertyCard } from '../components/residences/PropertyCard';
import { NeighbourhoodCard } from '../components/areas/NeighbourhoodCard';
import { CTASection } from '../components/common/CTASection';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedEnclaveTab, setSelectedEnclaveTab] = useState<string>('ALL');

  useEffect(() => {
    document.title = `${siteConfig.name} | Exceptional Residences. Carefully Selected.`;
  }, []);

  // Filter properties according to selected tab
  const filteredProperties = properties.filter((property) => {
    if (selectedEnclaveTab === 'ALL') return true;
    return property.neighbourhood.toUpperCase().includes(selectedEnclaveTab);
  });

  // Take top 6 or all matching
  const displayedProperties = filteredProperties.slice(0, 6);

  // Selected areas for the city guide
  const featuredAreas = areas
    .filter((a) => ['Thonglor', 'Phrom Phong', 'Sukhumvit', 'Sathorn', 'Silom', 'Riverside'].includes(a.name))
    .slice(0, 6);

  // 3 articles for the architecture journal
  const recentArticles = journalArticles.slice(0, 3);

  const tabs = ['ALL', 'THONGLOR', 'PHROM PHONG', 'SATHORN', 'RIVERSIDE'];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5] overflow-x-hidden text-[#18181B]">
      {/* 1. HERO SECTION: Ultra-luxury private penthouse terrace overlooking contemporary Bangkok skyline */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center pt-24 pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#EAE5DC] overflow-hidden">
        {/* Luxury private penthouse architectural view in warm natural daylight */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/bangkok-luxury-penthouse-skyline.jpg"
            alt="Private luxury residence penthouse terrace and infinity pool overlooking contemporary Bangkok skyline"
            referrerPolicy="no-referrer"
            loading="eager"
            className="w-full h-full object-cover object-[center_top] sm:object-[center_16%] scale-[1.01]"
          />
          {/* Subtle warm daylight editorial wash ensuring Christie's-level editorial legibility without washing out or darkening the residence */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/40 via-[#FBF9F5]/16 to-[#FBF9F5]/55" />
        </div>

        {/* Hero Content: Elevated into the calm, open-sky portion of the composition */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 -translate-y-5 sm:-translate-y-9 lg:-translate-y-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#DDD6CB] bg-[#FBF9F5]/90 shadow-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C827A]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#78716A] font-medium">
              BOUTIQUE RESIDENTIAL RENTAL · BANGKOK
            </span>
          </div>

          {/* Headline: Clean editorial typography sitting against open sky */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#18181B] font-normal leading-[1.08] tracking-tight mb-6">
            Exceptional residences.<br />
            <span className="italic font-light text-[#38332E]">Carefully selected.</span>
          </h1>

          {/* Subheadline: Clear, elegant, and subtle without competing with architecture */}
          <p className="text-sm sm:text-base md:text-lg text-[#38332E] font-normal sm:font-light max-w-2xl mx-auto leading-relaxed mb-10">
            A boutique residential rental concept and private property concierge in Bangkok.
          </p>

          {/* Hero Actions: EXPLORE RESIDENCES & WHATSAPP US */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/residences')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-all border border-[#18181B] shadow-sm"
            >
              <span>EXPLORE RESIDENCES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] bg-[#FBF9F5]/90 hover:bg-white hover:border-[#18181B] transition-all border border-[#DDD6CB] shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRIVATE RESIDENCE SEARCH PANEL */}
      <section className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-16 lg:mb-24">
        <SearchBar />
      </section>

      {/* 3. THE BOUTIQUE IDEA SECTION */}
      <section className="py-20 sm:py-28 border-b border-[#EAE5DC] bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C827A] font-semibold block mb-4">
            THE BOUTIQUE IDEA
          </span>

          <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-[#18181B] font-normal leading-tight mb-8">
            “We don’t show you everything.<br className="hidden sm:block" />
            <span className="italic font-light">We show you what is worth seeing.</span>”
          </blockquote>

          <p className="text-sm sm:text-base text-[#615B54] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            In a city with thousands of indiscriminate listings, our role is to filter the noise. Bangkok Private Residences operates as a discreet advisory concept—selecting residences defined by spatial balance, natural light, and architectural distinction across Bangkok’s most sought-after enclaves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-medium text-[#18181B] bg-transparent hover:bg-[#F2EDE4] transition-colors border border-[#18181B]"
            >
              <span>OUR SELECTION PRINCIPLES</span>
            </button>

            <button
              onClick={() => navigate('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] hover:text-[#18181B] transition-colors border border-[#DDD6CB] hover:border-[#18181B]"
            >
              <span>HOW WE WORK</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. SELECTED RESIDENCES SECTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EAE5DC] gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-semibold block mb-1">
              SELECTED RESIDENCES
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#18181B] font-normal">
              Current Bangkok highlights.
            </h2>
            <p className="text-xs sm:text-sm text-[#78716A] font-light mt-1">
              A focused collection of private rental properties across Bangkok’s most sought-after enclaves.
            </p>
          </div>

          {/* Tasteful Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedEnclaveTab(tab)}
                className={`px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.18em] font-medium transition-all ${
                  selectedEnclaveTab === tab
                    ? 'bg-[#18181B] text-[#FBF9F5]'
                    : 'bg-white text-[#78716A] hover:text-[#18181B] border border-[#DDD6CB]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {displayedProperties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} priority={idx < 2} />
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigate('/residences')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] bg-transparent hover:bg-[#F2EDE4] border border-[#18181B] transition-colors"
          >
            <span>VIEW ALL RESIDENCES ({properties.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. BANGKOK NEIGHBOURHOODS (EDITORIAL CITY GUIDE) */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-t border-b border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#DDD6CB] gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-semibold block mb-1">
                EDITORIAL CITY GUIDE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#18181B] font-normal">
                Bangkok Neighbourhoods
              </h2>
              <p className="text-xs sm:text-sm text-[#615B54] font-light mt-1">
                Where you live shapes the experience of the city.
              </p>
            </div>

            <button
              onClick={() => navigate('/areas')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] hover:text-[#615B54] transition-colors"
            >
              <span>EXPLORE ALL AREAS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredAreas.map((area) => (
              <NeighbourhoodCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE EXPERIENCE / HOW WE WORK: Luxury Advisory Process */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-semibold block mb-2">
            THE EXPERIENCE
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#18181B] font-normal mb-4">
            A discreet, personal way to rent in Bangkok.
          </h2>
          <p className="text-xs sm:text-sm text-[#78716A] font-light">
            A boutique advisory process designed to protect your time and standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 sm:p-9 bg-[#FBF9F5] border border-[#EAE5DC] flex flex-col justify-between">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#8C827A] block mb-6">
                01 · BRIEF
              </span>
              <h3 className="font-editorial text-2xl text-[#18181B] font-normal mb-3">
                UNDERSTAND
              </h3>
              <p className="text-xs sm:text-[13px] text-[#615B54] font-light leading-relaxed">
                We begin with how you live, what you value and the rhythms of your stay in Bangkok.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[10.5px] uppercase tracking-[0.16em] text-[#8C827A]">
              Lifestyle & Location Brief
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 sm:p-9 bg-[#FBF9F5] border border-[#EAE5DC] flex flex-col justify-between">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#8C827A] block mb-6">
                02 · SELECTION
              </span>
              <h3 className="font-editorial text-2xl text-[#18181B] font-normal mb-3">
                CURATE
              </h3>
              <p className="text-xs sm:text-[13px] text-[#615B54] font-light leading-relaxed">
                We select only residences that meet high standards of light, layout, quality and location.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[10.5px] uppercase tracking-[0.16em] text-[#8C827A]">
              Rigorous Quality Filter
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 sm:p-9 bg-[#FBF9F5] border border-[#EAE5DC] flex flex-col justify-between">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#8C827A] block mb-6">
                03 · EXECUTION
              </span>
              <h3 className="font-editorial text-2xl text-[#18181B] font-normal mb-3">
                SECURE
              </h3>
              <p className="text-xs sm:text-[13px] text-[#615B54] font-light leading-relaxed">
                From private viewings to lease details, we handle the process with discretion and care.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[10.5px] uppercase tracking-[0.16em] text-[#8C827A]">
              Discretion & Tenancy Care
            </div>
          </div>
        </div>
      </section>

      {/* 7. BANGKOK JOURNAL / PERSPECTIVES (Sophisticated architecture/lifestyle publication) */}
      <section className="py-20 sm:py-28 bg-[#FBF9F5] border-t border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#EAE5DC] gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-semibold block mb-1">
                BANGKOK JOURNAL
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#18181B] font-normal">
                Notes on architecture, living and neighbourhoods.
              </h2>
              <p className="text-xs sm:text-sm text-[#78716A] font-light mt-1">
                Reflections on residential quality and urban life in Bangkok.
              </p>
            </div>

            <button
              onClick={() => navigate('/journal')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#18181B] hover:text-[#615B54] transition-colors"
            >
              <span>VIEW JOURNAL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.slug}
                onClick={() => navigate(`/journal/${article.slug}`)}
                className="group cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#EAE5DC] hover:border-[#8C827A] transition-all duration-300"
              >
                {/* Large Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFEAE2]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-block px-2.5 py-1 text-[9px] uppercase font-medium tracking-[0.2em] bg-[#FBF9F5]/92 text-[#615B54] backdrop-blur-sm border border-[#E5DFD5]">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C827A] font-medium block mb-2">
                      {article.date} · {article.readTime}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-[22px] text-[#18181B] font-normal leading-snug group-hover:text-[#615B54] transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#615B54] font-light leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em]">
                    <span className="text-[#8C827A] font-normal">Architecture & Living</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#18181B] group-hover:text-[#615B54] transition-colors">
                      <span>READ ARTICLE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <CTASection
        headline="Tell us what you are looking for."
        subtitle="Share your requirements and explore a more focused way to search for a Bangkok residence."
        buttonText="START A PERSONAL SEARCH"
      />
    </div>
  );
};

