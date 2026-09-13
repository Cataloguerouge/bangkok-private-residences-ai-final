import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const navigationLinks = [
    { label: 'Residences', path: '/residences' },
    { label: 'Areas', path: '/areas' },
    { label: 'Services', path: '/services' },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#18181B] text-[#E5DFD5] pt-16 pb-20 border-t border-[#2D2B29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="pb-12 border-b border-[#2B2825] grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#8C827A] block font-medium">
              BANGKOK PRIVATE RESIDENCES
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-[#FBF9F5] font-normal leading-snug">
              Exceptional residences.<br />
              <span className="italic font-light">Carefully selected.</span>
            </p>
            <p className="text-xs text-[#A89F95] font-light max-w-md leading-relaxed pt-2">
              A boutique residential rental concept and private property concierge in Bangkok.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10.5px] uppercase tracking-[0.22em] text-[#FBF9F5] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-xs text-[#A89F95] hover:text-[#FBF9F5] transition-colors tracking-wide text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10.5px] uppercase tracking-[0.22em] text-[#FBF9F5] font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A89F95]">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#E5DFD5] hover:text-[#FBF9F5] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>

              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-[#E5DFD5] hover:text-[#FBF9F5] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C827A]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}
            </div>

            <div className="pt-3">
              <button
                onClick={() => navigate('/personal-search')}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#FBF9F5] hover:underline underline-offset-4"
              >
                Start a personal search →
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer / Prototype Notice */}
        <div className="py-6 border-b border-[#2B2825] text-[11px] text-[#78716A] leading-relaxed">
          <p className="font-medium text-[#A89F95] mb-1 uppercase tracking-wider text-[10px]">
            Demonstration Prototype Notice
          </p>
          <p>{siteConfig.disclaimer}</p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716A]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#8C827A]">Bangkok · Thailand</span>
            <button onClick={() => navigate('/about')} className="hover:text-[#A89F95] transition-colors">
              About the concept
            </button>
            <button onClick={() => navigate('/contact')} className="hover:text-[#A89F95] transition-colors">
              Discretion & Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

