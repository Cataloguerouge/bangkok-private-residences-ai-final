import React, { useState } from 'react';
import { Property } from '../../types';
import { CheckCircle2, Send } from 'lucide-react';

interface ViewingFormProps { property: Property; onSuccess?: () => void; }

export const ViewingForm: React.FC<ViewingFormProps> = ({ property, onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', line: '', preferredDate: '', preferredTime: 'Afternoon (14:00 – 16:00)', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => { setIsSubmitting(false); setSubmitted(true); onSuccess?.(); }, 250);
  };

  if (submitted) return (
    <div className="py-8 px-4 text-center space-y-4 bg-[#F2EDE4]/50 border border-[#E2DDD4]">
      <div className="w-12 h-12 bg-[#18181B] text-[#FBF9F5] rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-6 h-6" /></div>
      <h4 className="font-editorial text-2xl text-[#18181B] font-normal">Your viewing brief is ready</h4>
      <p className="text-xs text-[#615B54] max-w-md mx-auto leading-relaxed">Thank you, <strong className="text-[#18181B]">{formData.name}</strong>. This concept form has prepared a viewing request locally in the browser. It has <strong className="text-[#18181B]">not been sent</strong> to an agent, owner or building.</p>
      <p className="text-[11px] text-[#8C827A]">A live scheduling channel will be connected before commercial use.</p>
      <div className="pt-2 text-[11px] text-[#8C827A] uppercase tracking-wider">Reference: {property.id.toUpperCase()} · Concept enquiry</div>
    </div>
  );

  const inputClass = 'w-full bg-white border border-[#DDD6CB] px-3.5 py-2.5 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]';
  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="p-3.5 bg-[#F2EDE4] border border-[#E2DDD4] mb-2"><span className="text-[10px] uppercase tracking-widest text-[#8C827A] block">Residence Selected</span><span className="font-editorial text-lg text-[#18181B] block font-normal">{property.name}</span><span className="text-xs text-[#615B54]">{property.building} · {property.neighbourhood}</span></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name *"><input type="text" required placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClass} /></Field>
        <Field label="Email Address *"><input type="email" required placeholder="name@company.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClass} /></Field>
        <Field label="WhatsApp Number *"><input type="tel" required placeholder="+66 / +44 / +1 ..." value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} className={inputClass} /></Field>
        <Field label="LINE ID (Optional)"><input type="text" placeholder="@username" value={formData.line} onChange={e => setFormData({ ...formData, line: e.target.value })} className={inputClass} /></Field>
        <Field label="Preferred Date *"><input type="date" required value={formData.preferredDate} onChange={e => setFormData({ ...formData, preferredDate: e.target.value })} className={inputClass} /></Field>
        <Field label="Preferred Time Window"><select value={formData.preferredTime} onChange={e => setFormData({ ...formData, preferredTime: e.target.value })} className={inputClass}><option>Morning (10:00 – 12:00)</option><option>Afternoon (14:00 – 16:00)</option><option>Late Afternoon / Sunset (16:30 – 18:30)</option></select></Field>
      </div>
      <div><label className="block text-[11px] uppercase tracking-wider text-[#78716A] mb-1 font-medium">Specific Requests or Questions</label><textarea rows={3} placeholder="Questions about the residence or preferred viewing arrangements..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white border border-[#DDD6CB] p-3 text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]" /></div>
      <p className="text-[11px] text-[#8C827A] leading-relaxed">Concept prototype only. Viewing availability, building access and scheduling must be confirmed separately. No live enquiry channel is connected yet.</p>
      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium text-[#FBF9F5] bg-[#18181B] hover:bg-[#2D2B29] transition-colors border border-[#18181B]"><Send className="w-3.5 h-3.5" /><span>{isSubmitting ? 'Preparing Request...' : 'PREPARE VIEWING REQUEST'}</span></button>
    </form>
  );
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => <div><label className="block text-[11px] uppercase tracking-wider text-[#78716A] mb-1 font-medium">{label}</label>{children}</div>;
