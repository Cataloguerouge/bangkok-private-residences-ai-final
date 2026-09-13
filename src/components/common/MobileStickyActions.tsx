import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { getWhatsAppLink } from '../../config/site';

interface MobileStickyActionsProps {
  propertyName?: string;
  referenceCode?: string;
  onOpenEnquiry?: () => void;
}

export const MobileStickyActions: React.FC<MobileStickyActionsProps> = ({ propertyName, referenceCode, onOpenEnquiry }) => {
  const whatsappUrl = getWhatsAppLink(propertyName, referenceCode);

  return <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#E5DFD5] px-4 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
    <div className={getWhatsAppLink() === '/contact' ? 'grid grid-cols-1 gap-2.5' : 'grid grid-cols-2 gap-2.5'}>
      {getWhatsAppLink() !== '/contact' && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider font-semibold text-[#18181B] bg-[#EFEAE2] hover:bg-[#E5DFD5] border border-[#DDD6CB] transition-colors rounded-none"><MessageCircle className="w-4 h-4 text-[#25D366]" /><span>WHATSAPP</span></a>}
      <button type="button" onClick={onOpenEnquiry} className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider font-semibold text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-colors rounded-none"><Mail className="w-4 h-4" /><span>ENQUIRE</span></button>
    </div>
  </div>;
};
