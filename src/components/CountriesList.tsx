import styled from 'styled-components';

import { useCities } from '../hooks/useCities';
import { getCountries } from '../utils/helper';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

import CountryItem from './CountryItem';

const StyledCountriesList = styled.ul`
  width: 70%;
  max-height: 70dvh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries(SCREEN_SIZE.SmallTablet)`  
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: start;
    gap: 1.6rem;
  `}
  ${mediaQueries(SCREEN_SIZE.Tablet)`  
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}

  ${mediaQueries(SCREEN_SIZE.SmallLaptop)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: start;
    gap: 1.6rem;
    `}
`;

function CountriesList() {
  const { cities } = useCities();

  const countries = getCountries(cities);

  return (
    <StyledCountriesList>
      {countries?.map((country) => {
        const { countryName, countryCode, countryFlag } = country;
        return (
          <CountryItem
            key={countryCode}
            countryCode={countryCode}
            countryName={countryName}
            imgSrc={countryFlag}
          />
        );
      })}
    </StyledCountriesList>
  );
}

export default CountriesList;
