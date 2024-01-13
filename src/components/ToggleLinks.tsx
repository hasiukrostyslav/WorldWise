import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

const StyledToggleLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem;
  background-color: var(--color-dark--2);
  border-radius: 0.6rem;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)`  margin: 0;`}
  ${mediaQueries(SCREEN_SIZE.Tablet)`  margin: 1rem 0 2rem;`}

  a {
    font-size: 1.3rem;
    padding: 0.6rem 1.6rem;
    border-radius: 0.6rem;
    text-transform: uppercase;
    color: var(--color-light--2);

    &:focus {
      outline: solid var(--color-primary--0);
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;

function ToggleLinks() {
  return (
    <StyledToggleLinks>
      <li>
        <NavLink
          to="cities"
          style={({ isActive }) =>
            isActive ? { backgroundColor: 'var(--color-dark--0)' } : undefined
          }
        >
          Cities
        </NavLink>
      </li>
      <li>
        <NavLink
          to="countries"
          style={({ isActive }) =>
            isActive ? { backgroundColor: 'var(--color-dark--0)' } : undefined
          }
        >
          Countries
        </NavLink>
      </li>
    </StyledToggleLinks>
  );
}

export default ToggleLinks;
