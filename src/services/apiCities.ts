import { supabase } from './supabase';
import axios from 'axios';
import { getCurrentUser } from './apiAuth';
import { convertCityDataAPI } from '../utils/helper';
import type { City, CityBase, CityBaseData, VisitedCities } from '../types';

const CITY_URL = 'https://api-bdc.net/data/reverse-geocode?';
const API_KEY = 'bdc_0737aab69de84723b4ad0805cba82523';

export async function getCities(): Promise<City[] | undefined> {
  try {
    const user = await getCurrentUser();

    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('user_id', user?.id);

    if (error) throw new Error(error.message);

    const cities = convertCityDataAPI(data);

    return cities;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function getCity(
  id: string | undefined
): Promise<City | undefined> {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('id', id);

    if (error) throw new Error(error.message);

    const city = convertCityDataAPI(data).at(0);

    return city;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function getVisitedCities(country: string) {
  try {
    const user = await getCurrentUser();

    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('user_id', user?.id)
      .select('city_name,latitude,longitude,country_name');

    if (error) throw new Error(error.message);

    const filteredData = data.filter(
      (city: CityBaseData) => city.country_name === country
    );

    const visitedCities: VisitedCities[] = filteredData.map(
      (city: CityBaseData) => ({
        cityName: city.city_name,
        coordinate: { latitude: city.latitude, longitude: city.longitude },
      })
    );

    return visitedCities;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function getCityByCoords(
  lat: string | null,
  lng: string | null
): Promise<CityBase | undefined> {
  try {
    const res = await axios(
      `${CITY_URL}latitude=${lat}&longitude=${lng}&localityLanguage=en&key=${API_KEY}`
    );

    const data = res.data;

    const city = {
      cityName: data.city,
      countryName: data.countryName,
      latitude: data.latitude,
      longitude: data.longitude,
    };

    return city;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error();
    } else if (error instanceof Error) {
      throw error.message;
    }
  }
}
