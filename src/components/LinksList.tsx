import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PRIMARY_COLOR } from '../utils/constant';

import Button from './Button';

const StyledLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

function LinksList() {
  return (
    <StyledLinksList>
      <li>
        <NavLink
          to="about"
          style={({ isActive }) =>
            isActive ? { color: PRIMARY_COLOR } : undefined
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="price"
          style={({ isActive }) =>
            isActive ? { color: PRIMARY_COLOR } : undefined
          }
        >
          Price
        </NavLink>
      </li>

      <li>
        <Button to="login">Sign In</Button>
      </li>
      <li>
        <Button $variation="secondary" to="register">
          Register
        </Button>
      </li>
    </StyledLinksList>
  );
}

export default LinksList;
