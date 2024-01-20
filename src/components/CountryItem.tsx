import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatCountryNameToURL } from '../utils/helper';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

const StyledLink = styled(Link)`
  background-color: var(--color-dark--2);
  border: 3px solid var(--color-dark--2);
  border-left: 6px solid var(--color-third);
  border-radius: 0.7rem;
  padding: 1rem 0;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  outline: none;
  color: var(--color-light--2);

  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` 
    height: 8.5rem;
    flex-direction: column;
    gap: 0;
  `}

  &:focus {
    border: 3px solid var(--color-third);
    border-left: 6px solid var(--color-third);
  }

  &:focus:not(:focus-visible) {
    border: 3px solid var(--color-dark--2);
    border-left: 6px solid var(--color-third);
  }

  img {
    width: 3rem;
  }

  h3 {
    flex-grow: 0;
    font-size: 1.5rem;
    ${mediaQueries(SCREEN_SIZE.Laptop)` font-size: 1.8rem;`}
    font-weight: 400;
    color: var(--color-light--2);
  }
`;

type CountryItemProps = {
  imgSrc: string;
  countryName: string;
  countryCode: string;
};

function CountryItem({ imgSrc, countryName, countryCode }: CountryItemProps) {
  const countryNameURL = formatCountryNameToURL(countryName);

  return (
    <li>
      <StyledLink to={`${countryNameURL}?code=${countryCode}`}>
        <img src={imgSrc} alt="Country flag" />
        <h3>{countryName}</h3>
      </StyledLink>
    </li>
  );
}

export default CountryItem;
