import { supabase } from './supabase';
import axios from 'axios';
import { getCurrentUser } from './apiAuth';
import { getCountryBaseInfo } from './apiCountries';
import { convertCityDataAPI } from '../utils/helper';
import type {
  City,
  CityBase,
  CityBaseData,
  CityForm,
  VisitedCities,
} from '../types';

const CITY_URL = 'https://api-bdc.net/data/reverse-geocode';
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
      .select('city_name,latitude,longitude,country_name,country_code');

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
    const res = await axios(CITY_URL, {
      params: {
        latitude: lat,
        longitude: lng,
        localityLanguage: 'en',
        key: API_KEY,
      },
    });

    const data = res.data;

    if (!data.city) throw new Error('⛔ You click on empty area!');

    const countryCode = data.countryCode;
    const country = await getCountryBaseInfo(countryCode);

    const city = {
      cityName: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
      countryName: country?.countryName,
      countryFlag: country?.flag,
      countryCode,
    };

    return city;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw error;
    }
  }
}

export async function addNewCity(city: CityForm) {
  try {
    const user = await getCurrentUser();

    const { data, error } = await supabase
      .from('cities')
      .insert([
        {
          user_id: user?.id,
          city_name: city.cityName,
          latitude: city.latitude,
          longitude: city.longitude,
          country_name: city.countryName,
          country_code: city.countryCode,
          country_flag: city.countryFlag,
          description: city.description,
          visited_date: city.visitedDate,
        },
      ])
      .select();

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}
