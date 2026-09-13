import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, siteConfig } from '../../config/site';

interface WhatsAppButtonProps {
  propertyName?: string;
  referenceCode?: string;
  variant?: 'button' | 'outline' | 'pill' | 'minimal' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  propertyName,
  referenceCode,
  variant = 'button',
  size = 'md',
  label = 'WhatsApp Concierge',
  className = '',
}) => {
  const url = getWhatsAppLink(propertyName, referenceCode);

  if (variant === 'icon') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${siteConfig.shortName}`}
        className={`inline-flex items-center justify-center p-2.5 rounded-full bg-[#25D366]/10 text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition-all duration-200 ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect via WhatsApp"
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#18181B] bg-[#F2EDE4] hover:bg-[#E5DFD5] border border-[#E0D9CD] rounded-full transition-colors ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#18181B] border border-[#18181B] hover:bg-[#18181B] hover:text-[#FBF9F5] transition-all duration-200 ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>{label}</span>
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
        <MessageCircle className="w-3.5 h-3.5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-medium text-white bg-[#18181B] hover:bg-[#2D2B29] transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
      <span>{label}</span>
    </a>
  );
};
