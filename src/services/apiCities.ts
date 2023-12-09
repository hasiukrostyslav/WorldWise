import { supabase } from './supabase';
import { getCurrentUser } from './apiAuth';
import { convertCityDataAPI } from '../utils/helper';
import type { City, CityBaseData, VisitedCities } from '../types';

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
