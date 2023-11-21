export interface City {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  country: string;
  countryFlag: string;
  createdAt: string;
  date: string;
  description: string | null;
}

export interface Country {
  country: string;
  countryFlag: string;
}
