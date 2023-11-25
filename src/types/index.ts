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

export interface CountryBase {
  countryName: string;
  countryFlag: string;
}

interface Coordinate {
  lat: number;
  lng: number;
}

export interface BordersCountries extends CountryBase {
  coordinate: Coordinate;
}

export interface Country extends CountryBase {
  capital: string;
  coordinate: Coordinate;
  region: string;
  borders: BordersCountries[];
}
