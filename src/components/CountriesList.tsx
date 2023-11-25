import styled from 'styled-components';

import { useCities } from '../hooks/useCities';
import { getCountries } from '../utils/helper';

import CountryItem from './CountryItem';

const StyledCountriesList = styled.ul`
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: 1.6rem;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function CountriesList() {
  const { cities } = useCities();

  const countries = getCountries(cities);

  return (
    <StyledCountriesList>
      {countries?.map((country) => {
        const { countryName, countryFlag } = country;
        return (
          <CountryItem
            key={countryName}
            countryName={countryName}
            imgSrc={countryFlag}
          />
        );
      })}
    </StyledCountriesList>
  );
}

export default CountriesList;
