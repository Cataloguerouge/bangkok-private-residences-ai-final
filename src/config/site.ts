/**
 * Central site configuration for Bangkok Private Residences.
 * Keep real contact details in one place and never invent production data.
 */

export const siteConfig = {
  name: "BANGKOK PRIVATE RESIDENCES",
  shortName: "Bangkok Private Residences",
  tagline: "Exceptional residences. Carefully selected.",
  subheadline: "A curated residential rental concept for people looking for a more considered way to find a home in Bangkok.",
  positioning: "Boutique residential rental consultancy & private property concierge in Bangkok.",
  coreIdea: "We don't show you everything. We show you what is worth seeing.",
  contact: {
    phone: "+34626679809",
    phoneDisplay: "+34 626 679 809",
    whatsappNumber: "34626679809",
    whatsappDisplay: "+34 626 679 809",
    whatsappDefaultMessage: "Hello Bangkok Private Residences, I would like to inquire about a residence.",
    lineId: "",
    lineUrl: "",
    email: "val@cataloguerouge.com",
    address: "Bangkok, Thailand",
    hours: "By appointment",
  },
  socials: { instagram: "", linkedin: "" },
  disclaimer: "Concept website: property specifications, imagery, availability, prices and editorial materials are demonstration content only and must be verified before publication or client use."
};

export function getWhatsAppLink(propertyName?: string, referenceCode?: string): string {
  if (!siteConfig.contact.whatsappNumber) return "/contact";
  const text = propertyName
    ? `Hello, I'm interested in ${propertyName}${referenceCode ? ` (${referenceCode})` : ""}. I'd like to know about availability and arrange a private viewing.`
    : siteConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getLineLink(): string {
  return siteConfig.contact.lineUrl || "/contact";
}

export function formatTHB(amount: number): string {
  return new Intl.NumberFormat("en-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(amount).replace("THB", "฿");
}
