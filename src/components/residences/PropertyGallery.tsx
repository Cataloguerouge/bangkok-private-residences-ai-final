import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { ImageViewerModal } from '../common/ImageViewerModal';

interface PropertyGalleryProps {
  images: string[];
  propertyName: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, propertyName }) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewerAt = (idx: number) => {
    setCurrentIndex(idx);
    setViewerOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Desktop Curated Editorial Gallery Grid */}
      <div className="hidden md:grid grid-cols-12 gap-3 h-[520px] lg:h-[580px] overflow-hidden">
        {/* Main Feature Image */}
        <div
          onClick={() => openViewerAt(0)}
          className="col-span-8 relative h-full group cursor-pointer overflow-hidden bg-[#EAE5DC]"
        >
          <img
            src={images[0]}
            alt={`${propertyName} - Main View`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-white text-xs uppercase tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to Expand</span>
          </div>
        </div>

        {/* Secondary Column */}
        <div className="col-span-4 flex flex-col gap-3 h-full">
          {images.slice(1, 3).map((img, index) => {
            const actualIndex = index + 1;
            return (
              <div
                key={actualIndex}
                onClick={() => openViewerAt(actualIndex)}
                className="relative flex-1 group cursor-pointer overflow-hidden bg-[#EAE5DC]"
              >
                <img
                  src={img}
                  alt={`${propertyName} - Gallery ${actualIndex}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipeable / Horizontal Carousel */}
      <div className="md:hidden relative aspect-[4/3] w-full overflow-hidden bg-[#EAE5DC]">
        <div
          onClick={() => openViewerAt(0)}
          className="w-full h-full cursor-pointer"
        >
          <img
            src={images[0]}
            alt={propertyName}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* View All Photos Button (Floating) */}
      <button
        onClick={() => openViewerAt(0)}
        className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-medium text-[#18181B] bg-[#FBF9F5]/90 hover:bg-[#FBF9F5] backdrop-blur-sm border border-[#DDD6CB] shadow-md transition-all"
      >
        <Camera className="w-3.5 h-3.5 text-[#8C827A]" />
        <span>View Gallery ({images.length} Photos)</span>
      </button>

      {/* Fullscreen Lightbox Modal */}
      <ImageViewerModal
        isOpen={viewerOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setViewerOpen(false)}
        onSelectIndex={setCurrentIndex}
        propertyName={propertyName}
      />
    </div>
  );
};
