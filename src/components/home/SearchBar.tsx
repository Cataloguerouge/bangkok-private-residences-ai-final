import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const { navigate } = useRouter();

  const [location, setLocation] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [moveInDate, setMoveInDate] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('area', location);
    if (propertyType) params.append('type', propertyType);
    if (bedrooms) params.append('beds', bedrooms);
    if (budget) params.append('budget', budget);
    if (moveInDate) params.append('moveIn', moveInDate);

    const queryString = params.toString();
    navigate(`/residences${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="w-full bg-[#FBF9F5] border border-[#E2DDD4] shadow-[0_10px_35px_rgba(24,24,27,0.04)] p-6 sm:p-8 lg:p-10">
      {/* Visual Concept Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-4 border-b border-[#EAE5DC] gap-2">
        <div>
          <span className="text-[10px] uppercase tracking-[0.26em] text-[#8C827A] font-semibold block mb-1">
            PRIVATE RESIDENCE SEARCH
          </span>
          <p className="text-xs sm:text-sm text-[#615B54] font-light">
            A focused way to narrow the field around location, space, budget and timing.
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C827A] hidden sm:block">
          Curated Bangkok Portfolio
        </span>
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* Fields grid: horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* LOCATION / AREA */}
          <div className="space-y-1.5">
            <label className="block text-[10.5px] uppercase tracking-[0.22em] font-medium text-[#78716A]">
              Location / Area
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none bg-white border border-[#DDD6CB] hover:border-[#8C827A] focus:border-[#18181B] px-3.5 py-3 text-xs text-[#18181B] font-medium rounded-none focus:outline-none transition-colors pr-8 cursor-pointer"
              >
                <option value="">All Prime Enclaves</option>
                <option value="Thonglor">Thonglor (Sukhumvit 55)</option>
                <option value="Phrom Phong">Phrom Phong (EM District)</option>
                <option value="Sukhumvit">Sukhumvit</option>
                <option value="Sathorn">Sathorn</option>
                <option value="Silom">Silom & Lumphini</option>
                <option value="Riverside">Chao Phraya Riverside</option>
                <option value="Langsuan">Langsuan & Sindhorn</option>
                <option value="Wireless Road">Wireless Road</option>
                <option value="Ratchadamri">Ratchadamri</option>
                <option value="Asoke">Asoke</option>
                <option value="Ekkamai">Ekkamai</option>
                <option value="Ari">Ari</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C827A]">
                <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>
          </div>

          {/* PROPERTY TYPE */}
          <div className="space-y-1.5">
            <label className="block text-[10.5px] uppercase tracking-[0.22em] font-medium text-[#78716A]">
              Property Type
            </label>
            <div className="relative">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full appearance-none bg-white border border-[#DDD6CB] hover:border-[#8C827A] focus:border-[#18181B] px-3.5 py-3 text-xs text-[#18181B] font-medium rounded-none focus:outline-none transition-colors pr-8 cursor-pointer"
              >
                <option value="">All Residences</option>
                <option value="Condominium">Condominium</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Duplex Residence">Duplex Residence</option>
                <option value="Apartment">Apartment</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C827A]">
                <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>
          </div>

          {/* BEDROOMS */}
          <div className="space-y-1.5">
            <label className="block text-[10.5px] uppercase tracking-[0.22em] font-medium text-[#78716A]">
              Bedrooms
            </label>
            <div className="relative">
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full appearance-none bg-white border border-[#DDD6CB] hover:border-[#8C827A] focus:border-[#18181B] px-3.5 py-3 text-xs text-[#18181B] font-medium rounded-none focus:outline-none transition-colors pr-8 cursor-pointer"
              >
                <option value="">Any Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C827A]">
                <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>
          </div>

          {/* BUDGET */}
          <div className="space-y-1.5">
            <label className="block text-[10.5px] uppercase tracking-[0.22em] font-medium text-[#78716A]">
              Budget
            </label>
            <div className="relative">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full appearance-none bg-white border border-[#DDD6CB] hover:border-[#8C827A] focus:border-[#18181B] px-3.5 py-3 text-xs text-[#18181B] font-medium rounded-none focus:outline-none transition-colors pr-8 cursor-pointer"
              >
                <option value="">Any Budget</option>
                <option value="under-150k">Up to ฿150,000 / mo</option>
                <option value="150k-300k">฿150,000 – ฿300,000 / mo</option>
                <option value="300k-plus">฿300,000+ / mo (Ultra Luxury)</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C827A]">
                <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>
          </div>

          {/* MOVE-IN */}
          <div className="space-y-1.5">
            <label className="block text-[10.5px] uppercase tracking-[0.22em] font-medium text-[#78716A]">
              Move-in
            </label>
            <div className="relative">
              <select
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                className="w-full appearance-none bg-white border border-[#DDD6CB] hover:border-[#8C827A] focus:border-[#18181B] px-3.5 py-3 text-xs text-[#18181B] font-medium rounded-none focus:outline-none transition-colors pr-8 cursor-pointer"
              >
                <option value="">Flexible / Anytime</option>
                <option value="immediately">Immediately</option>
                <option value="1month">Within 1 Month</option>
                <option value="1-3months">1–3 Months</option>
                <option value="q4">Later this year</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C827A]">
                <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#8C827A] font-light">
            Filter by area, residence typology, space and timeline.
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-all duration-200 border border-[#18181B]"
          >
            <span>SEARCH RESIDENCES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};

