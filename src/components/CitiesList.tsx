import styled from 'styled-components';

import { useCities } from '../hooks/useCities';

import CityItem from './CityItem';

const StyledCitiesList = styled.ul`
  width: 100%;
  max-height: 70vh;
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
`;

function CitiesList() {
  const { cities } = useCities();

  const sortedCities = cities?.slice().sort((a, b) => b.id - a.id);

  return (
    <StyledCitiesList>
      {sortedCities?.map((city) => {
        const { id, cityName, countryFlag, date } = city;

        return (
          <CityItem
            key={id}
            id={id}
            name={cityName}
            imgSrc={countryFlag}
            date={date}
          />
        );
      })}
    </StyledCitiesList>
  );
}

export default CitiesList;
