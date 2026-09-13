import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', line: '', area: 'Thonglor', budget: '฿100,000 – ฿180,000 / mo', bedrooms: '2 Bedrooms', moveIn: 'Within 1 Month', stay: '12+ months', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => setFormData((current) => ({ ...current, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This concept build has no backend yet. Do not claim that an inquiry was received.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F2EDE4] border border-[#E2DDD4] p-8 sm:p-12 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#18181B] text-white flex items-center justify-center mx-auto"><CheckCircle2 className="w-6 h-6" /></div>
        <h3 className="font-editorial text-2xl sm:text-3xl text-[#18181B] font-normal">Thank You</h3>
        <p className="text-xs sm:text-sm text-[#615B54] max-w-md mx-auto leading-relaxed">
          Your requirements have been prepared on this concept site. Direct submission will be connected once the production contact channel is configured.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="inline-flex px-6 py-2.5 text-xs uppercase tracking-widest font-medium border border-[#18181B] text-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors">Edit Search</button>
      </div>
    );
  }

  const selectClass = 'w-full bg-white border border-[#DDD6CB] px-3.5 py-3 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]';
  const labelClass = 'block text-[11px] uppercase tracking-[0.18em] text-[#78716A] mb-1.5 font-medium';

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#FBF9F5] border border-[#EAE5DC] p-6 sm:p-10 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div><label className={labelClass}>Full Name *</label><input required value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className={selectClass} /></div>
        <div><label className={labelClass}>Email *</label><input required type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="name@organization.com" className={selectClass} /></div>
        <div><label className={labelClass}>WhatsApp Number *</label><input required type="tel" value={formData.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} placeholder="+66 / +44 / +1 ..." className={selectClass} /></div>
        <div><label className={labelClass}>LINE ID (Optional)</label><input value={formData.line} onChange={(e) => update('line', e.target.value)} placeholder="@yourlineid" className={selectClass} /></div>
        <div><label className={labelClass}>Preferred Area</label><select value={formData.area} onChange={(e) => update('area', e.target.value)} className={selectClass}>{['Thonglor','Phrom Phong','Sukhumvit','Sathorn','Silom','Riverside','Langsuan','Wireless Road','Ratchadamri','Asoke','Ekkamai','Ari','Open to Recommendation'].map((x) => <option key={x}>{x}</option>)}</select></div>
        <div><label className={labelClass}>Monthly Budget</label><select value={formData.budget} onChange={(e) => update('budget', e.target.value)} className={selectClass}>{['Under ฿100,000 / mo','฿100,000 – ฿180,000 / mo','฿180,000 – ฿300,000 / mo','฿300,000 – ฿500,000 / mo','฿500,000+ / mo'].map((x) => <option key={x}>{x}</option>)}</select></div>
        <div><label className={labelClass}>Bedrooms</label><select value={formData.bedrooms} onChange={(e) => update('bedrooms', e.target.value)} className={selectClass}>{['Studio','1 Bedroom','2 Bedrooms','3 Bedrooms','4+ Bedrooms / Duplex'].map((x) => <option key={x}>{x}</option>)}</select></div>
        <div><label className={labelClass}>Expected Move-in</label><select value={formData.moveIn} onChange={(e) => update('moveIn', e.target.value)} className={selectClass}>{['Immediately','Within 1 Month','1–3 Months','3+ Months'].map((x) => <option key={x}>{x}</option>)}</select></div>
        <div className="sm:col-span-2"><label className={labelClass}>Length of Stay</label><div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{['1–3 months','3–6 months','6–12 months','12+ months'].map((term) => <button key={term} type="button" onClick={() => update('stay', term)} className={`py-2 text-xs font-medium border transition-colors ${formData.stay === term ? 'bg-[#18181B] text-[#FBF9F5] border-[#18181B]' : 'bg-white text-[#18181B] border-[#DDD6CB] hover:border-[#8C827A]'}`}>{term}</button>)}</div></div>
      </div>
      <div><label className={labelClass}>Requirements or Priorities</label><textarea rows={4} value={formData.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about views, lifestyle, pets, schools or other priorities..." className={`${selectClass} p-3.5`} /></div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-all"><Send className="w-3.5 h-3.5" />Prepare My Search</button>
      <p className="text-center text-[10px] uppercase tracking-widest text-[#8C827A] pt-2">Concept form · direct submission channel coming soon</p>
    </form>
  );
};
