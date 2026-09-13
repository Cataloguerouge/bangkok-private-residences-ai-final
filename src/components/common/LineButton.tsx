import React from 'react';
import { siteConfig } from '../../config/site';

interface LineButtonProps {
  variant?: 'button' | 'outline' | 'pill' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const LineButton: React.FC<LineButtonProps> = ({
  variant = 'outline',
  label = 'Connect on LINE',
  className = '',
}) => {
  const url = siteConfig.contact.lineUrl;

  if (variant === 'pill') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on LINE"
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#18181B] bg-[#F2EDE4] hover:bg-[#E5DFD5] border border-[#E0D9CD] rounded-full transition-colors ${className}`}
      >
        <span className="font-bold text-[#06C755] text-xs leading-none">LINE</span>
        <span>{siteConfig.contact.lineId}</span>
      </a>
    );
  }

  if (variant === 'minimal') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs text-[#18181B] hover:text-[#8C827A] border-b border-[#18181B] pb-0.5 tracking-wider uppercase font-medium transition-colors ${className}`}
      >
        <span className="font-bold text-[#06C755] text-[10px]">LINE</span>
        <span>{siteConfig.contact.lineId}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#18181B] border border-[#18181B] hover:bg-[#18181B] hover:text-[#FBF9F5] transition-all duration-200 ${className}`}
    >
      <span className="font-bold text-[#06C755] text-xs leading-none">LINE</span>
      <span>{label}</span>
    </a>
  );
};
