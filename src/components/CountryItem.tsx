import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: var(--color-dark--2);
  border: 3px solid var(--color-dark--2);
  border-left: 6px solid var(--color-third);
  border-radius: 0.7rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  color: var(--color-light--2);

  &:focus {
    border: 3px solid var(--color-third);
    border-left: 6px solid var(--color-third);
  }

  &:focus:not(:focus-visible) {
    border: 3px solid var(--color-dark--2);
    border-left: 6px solid var(--color-third);
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--color-light--2);
  }
`;

function CountryItem() {
  return (
    <li>
      <StyledLink to={'name'}>
        <span>GB</span>
        <h3>Great Britain</h3>
      </StyledLink>
    </li>
  );
}

export default CountryItem;
