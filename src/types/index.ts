import { Dayjs } from 'dayjs';

export interface CityBaseData {
  latitude: number;
  longitude: number;
  city_name: string;
  country_name: string;
}

export interface CityData extends CityBaseData {
  id: number;
  country_flag: string;
  created_at: string;
  visited_date: string;
  description: string | null;
  user_id: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface CityBase extends Coordinate {
  cityName: string;
  countryName: string;
  countryFlag?: string;
}

export interface City extends CityBase {
  id: number;
  countryFlag: string;
  date: string;
  description: string | null;
}

export interface VisitedCities {
  cityName: string;
  coordinate: Coordinate;
}

export interface CountryBase {
  countryName: string;
  countryFlag: string;
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
  date: Dayjs | null;
  note: null;
}
