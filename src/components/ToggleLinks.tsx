import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledToggleLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark--2);
  border-radius: 0.6rem;
  margin: 1rem 0 1.4rem;

  a {
    font-size: 1.3rem;
    padding: 0.6rem 1.6rem;
    border-radius: 0.6rem;
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
