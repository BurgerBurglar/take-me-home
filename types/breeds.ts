export interface Breed {
  name: string;
  _links: Links;
}

export interface Links {
  type: Type;
}

export interface Type {
  href: string;
}
