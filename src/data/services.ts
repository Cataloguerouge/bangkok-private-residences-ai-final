/**
 * Editorial services dataset for Bangkok Private Residences.
 * Demonstration copy only until the operating service model is confirmed.
 */

import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "service-property-search",
    title: "Property Search",
    subtitle: "Tailored Curation",
    description: "A considered search experience built around your preferred location, space, lifestyle and practical requirements.",
    details: [
      "Initial requirements brief",
      "Shortlist of suitable residences",
      "Comparison of location and property features",
      "Availability, specifications and rental terms confirmed before commitment"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "service-private-viewings",
    title: "Private Viewings",
    subtitle: "Considered Property Tours",
    description: "Viewing coordination designed to make it easier to compare a small number of residences efficiently.",
    details: [
      "Viewing schedule arranged around your requirements",
      "Property information prepared before each visit",
      "Unit features and building facilities reviewed on site",
      "Transport arrangements available subject to confirmation"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "service-relocation-support",
    title: "Relocation Support",
    subtitle: "A Smoother Move to Bangkok",
    description: "Practical guidance for clients moving to Bangkok and comparing neighbourhoods, residences and everyday requirements.",
    details: [
      "Neighbourhood and commute considerations",
      "International-school location research where relevant",
      "Pet and building-policy questions identified for verification",
      "Introductions to external service providers only where formally established"
    ],
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "service-tenancy-support",
    title: "Tenancy Support",
    subtitle: "From Selection to Handover",
    description: "A proposed support layer for the stages between selecting a residence and completing a tenancy, subject to the final operating model.",
    details: [
      "Lease terms organised for review",
      "Handover and inventory considerations",
      "Communication with relevant parties where authorised",
      "Renewal or move-out coordination where offered"
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "service-property-management",
    title: "Property Management",
    subtitle: "For Residential Owners",
    description: "A proposed owner-side service for selected residences. Scope, fees and operational responsibilities will be defined before launch.",
    details: [
      "Property presentation and enquiry handling",
      "Tenant communication where authorised",
      "Maintenance coordination where offered",
      "Reporting and rent-collection services only where formally established"
    ],
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "service-investment-consultation",
    title: "Investment Consultation",
    subtitle: "Residential Market Perspective",
    description: "A proposed advisory service for clients evaluating Bangkok residential property. Any legal, tax or investment advice would require the appropriate qualified professionals.",
    details: [
      "Market and location comparisons",
      "Indicative rental and yield analysis",
      "Property-specific due diligence checklist",
      "Legal and tax questions referred to qualified local advisers"
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
  }
];

export const services = servicesData;
