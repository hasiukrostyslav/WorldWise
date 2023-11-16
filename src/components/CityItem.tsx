import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  background-color: var(--color-dark--2);
  border: 3px solid var(--color-dark--2);
  border-left: 6px solid var(--color-primary--0);
  border-radius: 0.7rem;
  outline: none;
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2.4rem;

  &:focus {
    border: 3px solid var(--color-primary--0);
    border-left: 6px solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    border: 3px solid var(--color-dark--2);
    border-left: 6px solid var(--color-primary--0);
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 1.2rem;
    margin-right: auto;
  }

  time {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 1.6rem;
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    height: 2rem;
    aspect-ratio: 1;
    border: none;
    border-radius: 50%;
    background-color: var(--color-dark--0);
    color: var(--color-light-2);
    transition: all 0.5s;

    &:hover {
      background-color: var(--color-third);
      color: var(--color-dark--1);
    }
    &:focus {
      outline: solid var(--color-primary--0);
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;

function CityItem() {
  return (
    <li>
      <StyledLink to={'id'}>
        <span>GB</span>
        <h4>London</h4>
        <time>(November 15, 2023)</time>
        <button>x</button>
      </StyledLink>
    </li>
  );
}

export default CityItem;
