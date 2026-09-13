import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  propertyName: string;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onSelectIndex,
  propertyName,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white p-4 sm:p-6"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10 py-2 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest text-white/60 block">
            {propertyName}
          </span>
          <span className="text-sm font-light text-white/80">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close fullscreen gallery"
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-10 p-3 bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex]}
          alt={`${propertyName} - View ${currentIndex + 1}`}
          referrerPolicy="no-referrer"
          className="max-h-[80vh] max-w-[90vw] object-contain select-none transition-all duration-300"
        />

        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-10 p-3 bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndex(idx)}
            className={`relative shrink-0 w-16 h-12 overflow-hidden border transition-all ${
              idx === currentIndex
                ? 'border-white opacity-100 scale-105'
                : 'border-white/20 opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
