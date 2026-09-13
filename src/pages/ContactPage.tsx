import React, { useEffect } from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { siteConfig, getWhatsAppLink } from '../config/site';
import { MessageCircle, Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => { document.title = `Contact | ${siteConfig.name}`; window.scrollTo(0, 0); }, []);
  const { contact } = siteConfig;
  return <div className="pt-24 sm:pt-28 pb-24 bg-[#FBF9F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 pb-8 border-b border-[#EAE5DC]"><span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">CONTACT · BANGKOK PRIVATE RESIDENCES</span><h1 className="font-editorial text-4xl sm:text-6xl text-[#18181B] font-normal leading-tight max-w-3xl mb-4">Contact Bangkok Private Residences</h1><p className="text-sm sm:text-base text-[#615B54] font-light max-w-2xl leading-relaxed">Tell us what you are looking for, or contact us directly about a residence, viewing or personal search.</p></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5 space-y-8"><div className="bg-[#F8F5F0] border border-[#E2DDD4] p-8 space-y-6"><h2 className="font-editorial text-2xl text-[#18181B] font-normal pb-4 border-b border-[#EAE5DC]">Contact Information</h2><div className="space-y-5 text-xs text-[#4A453F]">
        <a href={getWhatsAppLink()} target="_blank" rel="noreferrer"><ContactRow icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />} label="WhatsApp"><span>{contact.whatsappDisplay}</span></ContactRow></a>
        {contact.lineId && <ContactRow icon={<span className="font-bold text-[#06C755] text-xs">LINE</span>} label="LINE"><span>ID: {contact.lineId}</span></ContactRow>}
        {contact.phone && <a href={`tel:${contact.phone}`}><ContactRow icon={<Phone className="w-4 h-4 text-[#18181B]" />} label="Telephone"><span>{contact.phoneDisplay}</span></ContactRow></a>}
        {contact.email && <a href={`mailto:${contact.email}`}><ContactRow icon={<Mail className="w-4 h-4 text-[#18181B]" />} label="Email"><span>{contact.email}</span></ContactRow></a>}
        <ContactRow icon={<MapPin className="w-4 h-4 text-[#18181B]" />} label="Location"><span>{contact.address}</span></ContactRow>
        <ContactRow icon={<Clock className="w-4 h-4 text-[#18181B]" />} label="Hours"><span>{contact.hours}</span></ContactRow>
      </div></div><div className="p-6 bg-[#F2EDE4] border border-[#DDD6CB] flex items-start gap-3 text-xs text-[#615B54]"><ShieldCheck className="w-5 h-5 text-[#18181B] shrink-0 mt-0.5" /><p className="leading-relaxed">Please verify residence availability, specifications and rental terms directly with us before making any commitment.</p></div></div>
      <div className="lg:col-span-7"><ContactForm /></div>
    </div></div>
  </div>;
};

const ContactRow: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ icon, label, children }) => <div className="flex items-start gap-3.5"><div className="w-8 h-8 rounded-full bg-[#E5DFD5] flex items-center justify-center shrink-0">{icon}</div><div><span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">{label}</span><span className="font-light text-[#18181B] leading-relaxed block">{children}</span></div></div>;
