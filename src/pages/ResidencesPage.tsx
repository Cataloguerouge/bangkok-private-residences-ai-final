import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { properties } from '../data/properties';
import { SearchFilterState } from '../types';
import { SearchFilters } from '../components/residences/SearchFilters';
import { PropertyGrid } from '../components/residences/PropertyGrid';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/site';
import { ArrowUpDown } from 'lucide-react';

const initialFilterState: SearchFilterState = { neighbourhood: '', btsMrt: '', propertyType: '', bedrooms: '', bathrooms: '', minRent: 0, maxRent: 500000, minSize: 0, maxSize: 1000, furnished: '', petFriendly: false, pool: false, gym: false, parking: false, availability: '', view: '' };

export const ResidencesPage: React.FC = () => {
  const { currentPath } = useRouter();
  useEffect(() => { document.title = `Demonstration Residences | ${siteConfig.name}`; window.scrollTo(0, 0); }, []);
  const [filters, setFilters] = useState<SearchFilterState>(() => {
    const paramsString = currentPath.includes('?') ? currentPath.split('?')[1] : '';
    const params = new URLSearchParams(paramsString);
    let budgetMax = 500000;
    const budgetParam = params.get('budget');
    if (budgetParam === 'under-150k') budgetMax = 150000;
    else if (budgetParam === '150k-300k') budgetMax = 300000;
    return { ...initialFilterState, neighbourhood: params.get('area') || '', propertyType: params.get('type') || '', bedrooms: params.get('beds') || '', maxRent: budgetMax, availability: params.get('moveIn') === 'immediately' ? 'Available Now' : '' };
  });
  const [sortBy, setSortBy] = useState<string>('recommended');
  const filteredProperties = useMemo(() => properties.filter(prop => {
    if (filters.neighbourhood && prop.neighbourhood.toLowerCase() !== filters.neighbourhood.toLowerCase()) return false;
    if (filters.propertyType && prop.propertyType.toLowerCase() !== filters.propertyType.toLowerCase()) return false;
    if (filters.bedrooms) { if (filters.bedrooms === '4' && prop.bedrooms < 4) return false; if (filters.bedrooms !== '4' && prop.bedrooms !== Number(filters.bedrooms)) return false; }
    if (filters.maxRent && prop.monthlyRent > filters.maxRent) return false;
    if (filters.minSize && prop.size < filters.minSize) return false;
    if (filters.furnished && prop.furnished !== filters.furnished) return false;
    if (filters.availability && prop.availability !== filters.availability) return false;
    if (filters.petFriendly && !prop.petFriendly) return false;
    if (filters.pool && !prop.amenities.some(a => a.toLowerCase().includes('pool'))) return false;
    if (filters.gym && !prop.amenities.some(a => a.toLowerCase().includes('fitness') || a.toLowerCase().includes('gym'))) return false;
    if (filters.parking && !prop.amenities.some(a => a.toLowerCase().includes('parking') || a.toLowerCase().includes('garage'))) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.monthlyRent - b.monthlyRent;
    if (sortBy === 'price-desc') return b.monthlyRent - a.monthlyRent;
    if (sortBy === 'size-desc') return b.size - a.size;
    if (sortBy === 'newest') return b.id.localeCompare(a.id);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  }), [filters, sortBy]);
  const handleResetFilters = () => setFilters(initialFilterState);

  return <div className="pt-24 sm:pt-28 pb-20 bg-[#FBF9F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 pb-8 border-b border-[#EAE5DC]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">DEMONSTRATION PORTFOLIO</span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#18181B] font-normal leading-tight">Selected Residences</h1>
          <p className="text-xs sm:text-sm text-[#78716A] font-light max-w-xl mt-2 leading-relaxed">These listings are demonstration content for the website prototype. Property details, imagery, prices and availability must be verified before publication or client use.</p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-end"><span className="text-xs text-[#8C827A] uppercase tracking-wider flex items-center gap-1.5 font-medium"><ArrowUpDown className="w-3.5 h-3.5" /><span>Sort By:</span></span><select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-white border border-[#DDD6CB] px-3.5 py-2 text-xs text-[#18181B] font-medium focus:outline-none focus:border-[#18181B] cursor-pointer"><option value="recommended">Featured</option><option value="newest">Newest Additions</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="size-desc">Largest Space (SQ.M)</option></select></div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-10 items-start"><SearchFilters filters={filters} onChange={setFilters} onReset={handleResetFilters} totalResults={filteredProperties.length} /><main className="flex-1 w-full"><div className="mb-4 flex items-center justify-between text-xs text-[#8C827A] pb-3 border-b border-[#EAE5DC]"><span>Showing <strong>{filteredProperties.length}</strong> demonstration {filteredProperties.length === 1 ? 'residence' : 'residences'}</span><span className="hidden sm:inline">Concept inventory · not live availability</span></div><PropertyGrid properties={filteredProperties} /></main></div></div>
    <CTASection />
  </div>;
};
