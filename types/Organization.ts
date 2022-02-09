export interface Organization {
  id: string;
  name: string;
  email: string | null;
  phone: null | string;
  address: Address;
  hours: Hours;
  url: string | null;
  website: null | string;
  mission_statement: null | string;
  adoption: Adoption;
  social_media: SocialMedia;
  photos: Photo[];
  distance: null;
  _links: OrganizationLinks;
}

export interface Address {
  address1: null | string;
  address2: null | string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}
export interface Adoption {
  policy: null | string;
  url: null | string;
}

export interface Hours {
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
  sunday: string | null;
}

export interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface SocialMedia {
  facebook: null | string;
  twitter: null | string;
  youtube: null | string;
  instagram: null | string;
  pinterest: null | string;
}

export interface OrganizationLinks {
  self: Link;
  animals: Link;
}

export interface Link {
  href: string;
}
