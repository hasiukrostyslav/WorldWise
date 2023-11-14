import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PRIMARY_COLOR } from '../utils/constant';

import ButtonLink from './ButtonLink';

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
          to="pricing"
          style={({ isActive }) =>
            isActive ? { color: PRIMARY_COLOR } : undefined
          }
        >
          Pricing
        </NavLink>
      </li>

      <li>
        <ButtonLink to="login">Sign In</ButtonLink>
      </li>
      <li>
        <ButtonLink $variation="secondary" to="register">
          Register
        </ButtonLink>
      </li>
    </StyledLinksList>
  );
}

export default LinksList;
