import type { City, Country } from '../types';

export const getFormatDate = function (date: Date) {
  const formatter = new Intl.DateTimeFormat('en-Us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formatter.format(date);
};

export const getCountries = function (cities: City[] | undefined) {
  if (!cities || cities.length === 0) return;
  return cities
    .map((city) => ({
      country: city.country,
      countryFlag: city.countryFlag,
    }))
    .reduce(
      (arr: Country[], country) =>
        !arr.map((item) => item.country).includes(country.country)
          ? [...arr, country]
          : arr,
      []
    );
};
