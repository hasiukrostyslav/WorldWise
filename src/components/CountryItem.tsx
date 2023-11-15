import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryItem = styled.li`
  a {
    background-color: var(--color-dark--2);
    border-left: 6px solid var(--color-third);
    border-radius: 0.7rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--color-light--2);
    }
  }
`;

function CountryItem() {
  return (
    <StyledCountryItem>
      <NavLink to={'name'}>
        <span>GB</span>
        <h3>Great Britain</h3>
      </NavLink>
    </StyledCountryItem>
  );
}

export default CountryItem;
