import axios from 'axios';
import { getVisitedCities } from './apiCities';
import type { Country, BordersCountries } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1/';

export async function getCountry(
  countryName: string | undefined
): Promise<Country | undefined> {
  try {
    const res = await axios(`${BASE_URL}name/${countryName}`);

    const data = res.data.at(0);
    let borders: BordersCountries[] | undefined;

    if (data.borders) {
      borders = await getBorders(data.borders);
    }

    const visitedCities = await getVisitedCities(data.name.common);

    const country: Country = {
      countryName: data.name.common,
      countryFlag: data.flags.png,
      capital: data.capital.at(0),
      coordinate: {
        latitude: data.latlng.at(0),
        longitude: data.latlng.at(-1),
      },
      region: data.region,
      borders: borders || [],
      visitedCities: visitedCities || [],
    };

    return country;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error();
    } else if (error instanceof Error) {
      throw error.message;
    }
  }
}

async function getBorders(
  borders: string[]
): Promise<BordersCountries[] | undefined> {
  try {
    const bordersCountries = await Promise.all(
      borders.map(async (countryCode) => {
        try {
          const res = await axios(`${BASE_URL}alpha/${countryCode}`);
          const data = res.data.at(0);

          const country = {
            countryName: data.name.common,
            countryFlag: data.flags.png,
            coordinate: {
              latitude: data.latlng.at(0),
              longitude: data.latlng.at(-1),
            },
          };

          return country;
        } catch (error) {
          throw new Error();
        }
      })
    );

    return bordersCountries;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error();
    } else if (error instanceof Error) {
      throw error.message;
    }
  }
}
