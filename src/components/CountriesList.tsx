import styled from 'styled-components';

import CountryItem from './CountryItem';

const StyledCountriesList = styled.ul`
  width: 100%;
  height: 65vh;
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
  return (
    <StyledCountriesList>
      <CountryItem />
      <CountryItem />
      <CountryItem />
    </StyledCountriesList>
  );
}

export default CountriesList;
