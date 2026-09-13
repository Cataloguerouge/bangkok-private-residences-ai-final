import React from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Waves, 
  Dumbbell, 
  Car, 
  TreePine, 
  Wine, 
  Compass, 
  Utensils 
} from 'lucide-react';

interface AmenityListProps {
  amenities: string[];
}

export const AmenityList: React.FC<AmenityListProps> = ({ amenities }) => {
  const getIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('pool') || lower.includes('water')) return <Waves className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('gym') || lower.includes('fitness') || lower.includes('technogym')) return <Dumbbell className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('park') || lower.includes('ev') || lower.includes('car')) return <Car className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('garden') || lower.includes('pet') || lower.includes('dog')) return <TreePine className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('wine') || lower.includes('sommelier') || lower.includes('bar')) return <Wine className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('concierge') || lower.includes('butler') || lower.includes('security')) return <ShieldCheck className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('kitchen') || lower.includes('chef') || lower.includes('dining')) return <Utensils className="w-4 h-4 text-[#8C827A]" />;
    if (lower.includes('private') || lower.includes('penthouse') || lower.includes('lift')) return <Sparkles className="w-4 h-4 text-[#8C827A]" />;
    return <Check className="w-4 h-4 text-[#8C827A]" />;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
      {amenities.map((amenity, idx) => (
        <div key={idx} className="flex items-start gap-3 py-2 border-b border-[#EFEAE2]">
          <span className="shrink-0 mt-0.5">{getIcon(amenity)}</span>
          <span className="text-xs sm:text-sm text-[#2D2B29] font-light leading-snug">
            {amenity}
          </span>
        </div>
      ))}
    </div>
  );
};
