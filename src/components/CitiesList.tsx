import styled from 'styled-components';

import CityItem from './CityItem';

const StyledCitiesList = styled.ul`
  width: 100%;
  height: 65vh;
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
  return (
    <StyledCitiesList>
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
    </StyledCitiesList>
  );
}

export default CitiesList;
