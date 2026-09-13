/**
 * TypeScript types for Bangkok Private Residences.
 */

export type PropertyType = 
  | 'Condominium' 
  | 'Apartment' 
  | 'Penthouse' 
  | 'Duplex Residence' 
  | 'Private Villa';

export type AvailabilityStatus = 
  | 'Available Now' 
  | 'Available Next Month' 
  | 'Available Q4'
  | 'Under Negotiation';

export type PropertyLabel = 
  | 'FEATURED' 
  | 'NEW' 
  | 'EXCLUSIVE' 
  | 'AVAILABLE NOW';

export interface RentalTerms {
  minimumLease: string;
  deposit: string;
  advanceRent: string;
  petsPolicy: string;
  utilities: string;
}

export interface NearbyLocation {
  dining: string[];
  shopping: string[];
  lifestyle: string[];
  transport: string[];
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  building: string;
  neighbourhood: string;
  address: string;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  size: number; // in square meters
  floor: string;
  monthlyRent: number; // in THB
  furnished: 'Fully Furnished' | 'Designer Furnished' | 'Unfurnished';
  petFriendly: boolean;
  parking: number; // parking bays
  pool: boolean;
  gym: boolean;
  view: string;
  bts: string;
  mrt: string;
  btsDistance: string;
  availability: AvailabilityStatus;
  description: string;
  buildingDescription: string;
  amenities: string[];
  images: string[];
  floorPlan: string;
  featured: boolean;
  exclusive: boolean;
  labels?: PropertyLabel[];
  rentalTerms: RentalTerms;
  nearby: NearbyLocation;
  // Optional architectural and transport enrichments
  developer?: string;
  yearBuilt?: number | string;
  totalFloors?: number | string;
  totalUnits?: number | string;
  petPolicy?: string;
  leaseTerms?: {
    minLease?: string;
    securityDeposit?: string;
    advanceRent?: string;
    utilities?: string;
  };
  transport?: {
    expressway?: string;
    airportBKK?: string;
    airportDMK?: string;
  };
}

export interface Area {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  lifestyle: string;
  dining: string;
  shopping: string;
  transport: string;
  schools: string;
  hospitals: string;
  btsMrt: string;
  vibe: string[];
  highlights?: string[];
  featured?: boolean;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[] | string;
  date: string;
  readTime: string;
  image: string;
  heroImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

export interface SearchFilterState {
  neighbourhood: string;
  bts?: string;
  btsMrt?: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  minRent: number;
  maxRent: number;
  minSize: number;
  maxSize: number;
  furnished: string;
  petFriendly: boolean;
  pool: boolean;
  gym: boolean;
  parking: boolean;
  availability: string;
  view: string;
  sortBy?: 'recommended' | 'newest' | 'price-asc' | 'price-desc' | 'size-desc';
}

export interface PersonalSearchFormData {
  moveInTimeline: string;
  stayDuration: string;
  preferredAreas: string[];
  bedrooms: string;
  monthlyBudget: string;
  priorities: string[];
  name: string;
  email: string;
  whatsapp: string;
  line: string;
  additionalNotes?: string;
}

export interface OwnerFormData {
  name: string;
  email: string;
  whatsapp: string;
  line: string;
  propertyAddress: string;
  building: string;
  propertyType: string;
  bedrooms: string;
  size: string;
  expectedMonthlyRent: string;
  availableFrom: string;
  furnished: string;
  message: string;
}

export interface ViewingFormData {
  propertyId: string;
  propertyName: string;
  preferredDate: string;
  preferredTime: string;
  name: string;
  email: string;
  whatsapp: string;
  line: string;
  message: string;
}
