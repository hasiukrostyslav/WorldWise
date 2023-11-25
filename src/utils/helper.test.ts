import { describe, expect, it } from 'vitest';
import {
  formatCountryNameFromURL,
  formatCountryNameToURL,
  getCountries,
} from './helper';

const testCities = [
  {
    country: 'Ukraine',
    countryFlag: 'https://flagcdn.com/w320/ua.png',
    createdAt: '2023-11-20T06:56:50.77671+00:00',
    date: '2023-11-20T08:55:07',
    description: '',
    id: 1,
    latitude: 49.8397,
    longitude: 24.0297,
    name: 'Lviv',
  },
  {
    country: 'Spain',
    countryFlag: 'https://flagcdn.com/w320/es.png',
    createdAt: '2023-11-20T06:58:50.261611+00:00',
    date: '2023-10-29T08:58:12',
    description: null,
    id: 2,
    latitude: 40.4168,
    longitude: 3.7038,
    name: 'Madrid',
  },
  {
    country: 'Spain',
    countryFlag: 'https://flagcdn.com/w320/es.png',
    createdAt: '2023-11-20T06:59:45.426523+00:00',
    date: '2023-10-30T08:59:42',
    description: null,
    id: 3,
    latitude: 39.4699,
    longitude: 0.3763,
    name: 'Valencia',
  },
];

describe('#get unique countries', () => {
  it('without parameters', () => {
    expect(getCountries(undefined)).toEqual(undefined);
  });

  it('pass empty array', () => {
    expect(getCountries([])).toEqual(undefined);
  });

  it('pass array with unique countries', () => {
    expect(getCountries(testCities.slice(0, 2))).toEqual([
      { country: 'Ukraine', countryFlag: 'https://flagcdn.com/w320/ua.png' },
      { country: 'Spain', countryFlag: 'https://flagcdn.com/w320/es.png' },
    ]);
  });

  it('pass array with not unique countries', () => {
    expect(getCountries(testCities)).toEqual([
      { country: 'Ukraine', countryFlag: 'https://flagcdn.com/w320/ua.png' },
      { country: 'Spain', countryFlag: 'https://flagcdn.com/w320/es.png' },
    ]);
  });
});

describe('#format Country name to URL', () => {
  it('Country name from 1 word', () => {
    expect(formatCountryNameToURL('Ukraine')).toBe('Ukraine');
  });
  it('Country name from 2 word', () => {
    expect(formatCountryNameToURL('Great Britain')).toBe('Great_Britain');
  });
  it('Country name from 3 word', () => {
    expect(formatCountryNameToURL('United Arab Emirates')).toBe(
      'United_Arab_Emirates'
    );
  });
});

describe('#format Country name from URL', () => {
  it('Country name from 1 word', () => {
    expect(formatCountryNameFromURL('Ukraine')).toBe('Ukraine');
  });
  it('Country name from 2 word', () => {
    expect(formatCountryNameFromURL('Great_Britain')).toBe('Great Britain');
  });
  it('Country name from 3 word', () => {
    expect(formatCountryNameFromURL('United_Arab_Emirates')).toBe(
      'United Arab Emirates'
    );
  });
});
