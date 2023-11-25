import axios from 'axios';
import type { Country, BordersCountries } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1/';

export async function getCountry(
  countryName: string | undefined
): Promise<Country | undefined> {
  try {
    const res = await axios(`${BASE_URL}name/${countryName}`);

    const data = res.data.at(0);
    let borders = [];
    if (data.borders) {
      borders = await getBorders(data.borders);
    }
    console.log(data);
    const country: Country = {
      countryName: data.name.common,
      countryFlag: data.flags.png,
      capital: data.capital.at(0),
      coordinate: {
        lat: data.latlng.at(0),
        lng: data.latlng.at(-1),
      },
      region: data.region,
      borders,
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

async function getBorders(borders: string[]) {
  try {
    const bordersCountries = await Promise.all(
      borders.map(async (countryCode) => {
        try {
          const res = await axios(`${BASE_URL}alpha/${countryCode}`);
          const country = res.data.at(0);

          return {
            countryName: country.name.common,
            countryFlag: country.flags.png,
            coordinate: {
              lat: country.latlng.at(0),
              lng: country.latlng.at(-1),
            },
          };
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
