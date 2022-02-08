export interface AnimalList {
  animals: Animal[];
  pagination: Pagination;
}

export interface Animal {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Link;
  colors: Colors;
  age: Age;
  gender: Gender;
  size: Size;
  coat: null | string;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  name: string;
  description: null | string;
  organization_animal_id: null | string;
  photos: Photo[];
  primary_photo_cropped: Photo | null;
  videos: { embed: string }[];
  status: string;
  status_changed_at: string;
  published_at: string;
  distance: null | string;
  contact: Contact;
  _links: AnimalLinks;
}

export interface AnimalLinks {
  self: Link;
  type: Link;
  organization: Link;
}

export interface Link {
  href: string;
}

export enum Age {
  Adult = "Adult",
  Baby = "Baby",
  Senior = "Senior",
  Young = "Young",
}

export interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean | null;
  special_needs: boolean;
  shots_current: boolean;
}

export interface Link {
  primary: string;
  secondary: null | string;
  mixed: boolean;
  unknown: boolean;
}

export interface Colors {
  primary: null | string;
  secondary: null | string;
  tertiary: null | string;
}

export interface Contact {
  email: string;
  phone: null | string;
  address: Address;
}

export interface Address {
  address1: null | string;
  address2: null | string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface Environment {
  children: boolean | null;
  dogs: boolean | null;
  cats: boolean | null;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export enum Size {
  ExtraLarge = "Extra Large",
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: PaginationLinks;
}

export interface PaginationLinks {
  next: Link;
}

export interface AnimalParams {
  type?: string;
  breed?: string;
  size?: Size;
  gender?: Gender;
  age?: Age;
  color?: string;
  coat?: string;
  name?: string;
  sort?: string;
  page?: number;
}

export type SingleChoiceAnimalParam = "type" | "sort";

export type MultiChoiceAnimalParam =
  | "breed"
  | "size"
  | "gender"
  | "color"
  | "coat";

export interface AnimalType {
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
  _links: Links;
}

export interface Links {
  self: Link;
  breeds: Link;
}