import React, { useState } from 'react';
import { SearchFilterState } from '../../types';
import { SlidersHorizontal, RotateCcw, X, Check } from 'lucide-react';
import { formatTHB } from '../../config/site';

interface SearchFiltersProps {
  filters: SearchFilterState;
  onChange: (filters: SearchFilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleFieldChange = <K extends keyof SearchFilterState>(
    field: K,
    value: SearchFilterState[K]
  ) => {
    onChange({
      ...filters,
      [field]: value,
    });
  };

  const neighbourhoods = [
    { value: '', label: 'All Neighbourhoods' },
    { value: 'Thonglor', label: 'Thonglor' },
    { value: 'Phrom Phong', label: 'Phrom Phong' },
    { value: 'Sukhumvit', label: 'Sukhumvit' },
    { value: 'Sathorn', label: 'Sathorn' },
    { value: 'Silom', label: 'Silom' },
    { value: 'Riverside', label: 'Riverside' },
    { value: 'Langsuan', label: 'Langsuan' },
    { value: 'Wireless Road', label: 'Wireless Road' },
    { value: 'Ratchadamri', label: 'Ratchadamri' },
    { value: 'Asoke', label: 'Asoke' },
    { value: 'Ekkamai', label: 'Ekkamai' },
    { value: 'Ari', label: 'Ari' },
  ];

  const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'Condominium', label: 'Condominium' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Duplex Residence', label: 'Duplex Residence' },
    { value: 'Apartment', label: 'Apartment' },
  ];

  const renderFilterControls = () => (
    <div className="space-y-6">
      {/* Neighbourhood */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-2">
          Neighbourhood
        </label>
        <select
          value={filters.neighbourhood}
          onChange={(e) => handleFieldChange('neighbourhood', e.target.value)}
          className="w-full bg-white border border-[#DDD6CB] px-3 py-2.5 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
        >
          {neighbourhoods.map((n) => (
            <option key={n.value} value={n.value}>
              {n.label}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-2">
          Property Type
        </label>
        <select
          value={filters.propertyType}
          onChange={(e) => handleFieldChange('propertyType', e.target.value)}
          className="w-full bg-white border border-[#DDD6CB] px-3 py-2.5 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
        >
          {propertyTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-2">
          Bedrooms
        </label>
        <div className="grid grid-cols-5 gap-1">
          {['', '1', '2', '3', '4'].map((val) => {
            const isSelected = filters.bedrooms === val;
            const label = val === '' ? 'Any' : val === '4' ? '4+' : val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => handleFieldChange('bedrooms', val)}
                className={`py-2 text-xs font-medium border transition-colors ${
                  isSelected
                    ? 'bg-[#18181B] text-[#FBF9F5] border-[#18181B]'
                    : 'bg-white text-[#18181B] border-[#DDD6CB] hover:border-[#8C827A]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Monthly Rent Range */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A]">
            Max Monthly Rent
          </label>
          <span className="text-xs font-semibold text-[#18181B]">
            {filters.maxRent >= 500000 ? 'Any Budget' : `Up to ${formatTHB(filters.maxRent)}`}
          </span>
        </div>
        <input
          type="range"
          min="50000"
          max="500000"
          step="25000"
          value={filters.maxRent}
          onChange={(e) => handleFieldChange('maxRent', Number(e.target.value))}
          className="w-full accent-[#18181B] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#8C827A] mt-1 font-mono">
          <span>฿50,000</span>
          <span>฿250,000</span>
          <span>฿500,000+</span>
        </div>
      </div>

      {/* Minimum Size (sqm) */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A]">
            Min Size (SQ.M)
          </label>
          <span className="text-xs font-semibold text-[#18181B]">
            {filters.minSize === 0 ? 'Any Size' : `${filters.minSize} sq.m+`}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="350"
          step="25"
          value={filters.minSize}
          onChange={(e) => handleFieldChange('minSize', Number(e.target.value))}
          className="w-full accent-[#18181B] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#8C827A] mt-1 font-mono">
          <span>0 sqm</span>
          <span>150 sqm</span>
          <span>350+ sqm</span>
        </div>
      </div>

      {/* Furnishing Status */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-2">
          Furnishing
        </label>
        <select
          value={filters.furnished}
          onChange={(e) => handleFieldChange('furnished', e.target.value)}
          className="w-full bg-white border border-[#DDD6CB] px-3 py-2.5 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
        >
          <option value="">Any Furnishing</option>
          <option value="Designer Furnished">Designer Furnished</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-2">
          Availability
        </label>
        <select
          value={filters.availability}
          onChange={(e) => handleFieldChange('availability', e.target.value)}
          className="w-full bg-white border border-[#DDD6CB] px-3 py-2.5 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
        >
          <option value="">Any Availability</option>
          <option value="Available Now">Available Now</option>
          <option value="Available Next Month">Available Next Month</option>
          <option value="Available Q4">Available Q4</option>
        </select>
      </div>

      {/* Amenities & Characteristics Toggles */}
      <div className="pt-2 border-t border-[#EAE5DC]">
        <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#78716A] mb-3">
          Residence Attributes
        </label>
        <div className="space-y-2.5">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#18181B] select-none">
            <input
              type="checkbox"
              checked={filters.petFriendly}
              onChange={(e) => handleFieldChange('petFriendly', e.target.checked)}
              className="w-4 h-4 accent-[#18181B] rounded-none cursor-pointer"
            />
            <span>Pet Friendly</span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#18181B] select-none">
            <input
              type="checkbox"
              checked={filters.pool}
              onChange={(e) => handleFieldChange('pool', e.target.checked)}
              className="w-4 h-4 accent-[#18181B] rounded-none cursor-pointer"
            />
            <span>Swimming Pool Access</span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#18181B] select-none">
            <input
              type="checkbox"
              checked={filters.gym}
              onChange={(e) => handleFieldChange('gym', e.target.checked)}
              className="w-4 h-4 accent-[#18181B] rounded-none cursor-pointer"
            />
            <span>Private Fitness Studio / Gym</span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#18181B] select-none">
            <input
              type="checkbox"
              checked={filters.parking}
              onChange={(e) => handleFieldChange('parking', e.target.checked)}
              className="w-4 h-4 accent-[#18181B] rounded-none cursor-pointer"
            />
            <span>Dedicated Parking Bay</span>
          </label>
        </div>
      </div>

      {/* Reset Action */}
      <div className="pt-4 border-t border-[#EAE5DC]">
        <button
          type="button"
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 py-2.5 text-[11px] uppercase tracking-widest font-medium border border-[#DDD6CB] text-[#615B54] hover:bg-white hover:text-[#18181B] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Filter Column */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="bg-[#FBF9F5] border border-[#EAE5DC] p-6 sticky top-28">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE5DC]">
            <h3 className="font-editorial text-xl text-[#18181B] font-normal">
              Filter Residences
            </h3>
            <span className="text-xs text-[#8C827A] font-mono">
              {totalResults} {totalResults === 1 ? 'result' : 'results'}
            </span>
          </div>

          {renderFilterControls()}
        </div>
      </aside>

      {/* Mobile Trigger Button */}
      <div className="lg:hidden mb-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#FBF9F5] border border-[#DDD6CB] text-xs uppercase tracking-wider font-semibold text-[#18181B]"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter Residences ({totalResults})</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          aria-label="Reset filters"
          className="p-3 bg-[#FBF9F5] border border-[#DDD6CB] text-[#615B54] hover:text-[#18181B]"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Filter Modal Sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#FBF9F5] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE5DC]">
                <h3 className="font-editorial text-2xl text-[#18181B]">
                  Filter Residences
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 text-[#615B54] hover:text-[#18181B]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {renderFilterControls()}
            </div>

            <div className="pt-6 border-t border-[#EAE5DC] mt-6">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3.5 bg-[#18181B] text-[#FBF9F5] text-xs uppercase tracking-widest font-medium"
              >
                View {totalResults} Residences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
