import styled from 'styled-components';

import useCities from '../hooks/useCities';

import CityItem from './CityItem';

const StyledCitiesList = styled.ul`
  width: 100%;
  max-height: 60vh;
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

  return (
    <StyledCitiesList>
      {cities?.map((city) => {
        const { id, name, countryFlag, date } = city;

        return (
          <CityItem
            key={id}
            id={id}
            name={name}
            imgSrc={countryFlag}
            date={new Date(date)}
          />
        );
      })}
    </StyledCitiesList>
  );
}

export default CitiesList;
