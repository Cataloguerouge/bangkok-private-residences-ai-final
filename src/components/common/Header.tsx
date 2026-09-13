import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { siteConfig, getWhatsAppLink } from '../../config/site';

interface HeaderProps {
  onOpenEnquiryModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Primary desktop navigation strictly as requested
  const desktopNavLinks = [
    { label: 'RESIDENCES', path: '/residences' },
    { label: 'AREAS', path: '/areas' },
    { label: 'SERVICES', path: '/services' },
    { label: 'JOURNAL', path: '/journal' },
    { label: 'ABOUT', path: '/about' },
  ];

  // Mobile navigation includes secondary destinations
  const mobileNavLinks = [
    { label: 'RESIDENCES', path: '/residences' },
    { label: 'AREAS', path: '/areas' },
    { label: 'SERVICES', path: '/services' },
    { label: 'JOURNAL', path: '/journal' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FOR OWNERS', path: '/for-owners' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/96 backdrop-blur-md border-b border-[#EAE5DC] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-[#FBF9F5] border-b border-[#EAE5DC] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand & Tagline */}
            <div
              onClick={() => handleNavClick('/')}
              className="cursor-pointer group select-none flex flex-col text-left"
            >
              <span className="font-editorial text-lg sm:text-xl md:text-[21px] tracking-[0.18em] text-[#18181B] uppercase transition-colors group-hover:text-[#615B54]">
                BANGKOK PRIVATE RESIDENCES
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.24em] text-[#8C827A] mt-0.5 font-sans font-medium">
                EXCEPTIONAL RESIDENCES. CAREFULLY SELECTED.
              </span>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {desktopNavLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#18181B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#18181B]'
                        : 'text-[#78716A] hover:text-[#18181B]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Desktop Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick('/personal-search')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-all duration-200 border border-[#18181B]"
              >
                <span>START YOUR SEARCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                className="p-2 text-[#18181B] hover:bg-[#F2EDE4] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Refined Full-Screen / Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#18181B]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FBF9F5] shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-[#EAE5DC]">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE5DC]">
                <div onClick={() => { handleNavClick('/'); setMobileMenuOpen(false); }} className="cursor-pointer">
                  <span className="font-editorial text-lg tracking-[0.16em] text-[#18181B] uppercase block">
                    BANGKOK PRIVATE RESIDENCES
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#8C827A] mt-0.5 block">
                    EXCEPTIONAL RESIDENCES. CAREFULLY SELECTED.
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[#615B54] hover:text-[#18181B] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col py-8 space-y-4">
                {mobileNavLinks.map((link) => {
                  const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                  return (
                    <button
                      key={link.path}
                      onClick={() => {
                        handleNavClick(link.path);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left font-editorial text-2xl py-1 transition-colors ${
                        isActive
                          ? 'text-[#18181B] italic underline decoration-[#18181B] underline-offset-8'
                          : 'text-[#615B54] hover:text-[#18181B]'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#EAE5DC] space-y-3.5">
              <button
                onClick={() => {
                  handleNavClick('/personal-search');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-[#18181B] text-[#FBF9F5] hover:bg-[#2D2B29] transition-colors"
              >
                <span>START YOUR SEARCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.18em] font-medium text-[#18181B] bg-white border border-[#DDD6CB] hover:bg-[#F2EDE4] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Concierge</span>
              </a>

              <p className="text-[9px] text-center tracking-[0.25em] text-[#8C827A] pt-2 uppercase">
                Bangkok · Private Advisory
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

