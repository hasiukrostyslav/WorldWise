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

export type CountryBase = {
  countryName: string;
  countryFlag: string;
};

type Coordinate = {
  lat: number;
  lng: number;
};

export type BordersCountries = CountryBase & Coordinate;

export interface Country extends CountryBase {
  capital: string;
  coordinate: Coordinate;
  region: string;
  borders?: BordersCountries[];
}
