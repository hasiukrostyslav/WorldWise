export interface CountryBase {
  countryName: string;
  countryFlag: string;
}

export interface CityBase {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

export interface City extends CityBase {
  id: number;
  countryFlag: string;
  createdAt: string;
  date: string;
  description: string | null;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface VisitedCities {
  cityName: string;
  coordinate: Coordinate;
}

export interface BordersCountries extends CountryBase {
  coordinate: Coordinate;
}

export interface Country extends CountryBase {
  capital: string;
  coordinate: Coordinate;
  region: string;
  borders: BordersCountries[];
  visitedCities: VisitedCities[];
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface SignUpInputs extends LoginInputs {
  name: string;
  confirmPassword: string;
}

export interface CityInput {
  city: string;
  date: string;
  note: string;
}
