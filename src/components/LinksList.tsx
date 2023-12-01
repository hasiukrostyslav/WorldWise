import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from '../hooks/useUser';
import { PRIMARY_COLOR } from '../utils/constant';

import { ButtonLink } from './Button';
import { useLogOut } from '../hooks/useLogOut';

const StyledLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  border-radius: 0.6rem;
  padding: 0.6rem 1rem;
  color: var(--color-light--2);

  &:focus {
    outline: solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function LinksList() {
  const { isAuthenticated } = useUser();
  const { logout } = useLogOut();

  return (
    <StyledLinksList>
      <li>
        <StyledNavLink
          to="about"
          style={({ isActive }) =>
            isActive ? { color: PRIMARY_COLOR } : undefined
          }
        >
          About
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="pricing"
          style={({ isActive }) =>
            isActive ? { color: PRIMARY_COLOR } : undefined
          }
        >
          Pricing
        </StyledNavLink>
      </li>

      {!isAuthenticated && (
        <>
          <li>
            <ButtonLink to="login">Sign In</ButtonLink>
          </li>
          <li>
            <ButtonLink $variation="secondary" to="register">
              Register
            </ButtonLink>
          </li>
        </>
      )}

      {isAuthenticated && (
        <li>
          <ButtonLink onClick={() => logout()} $variation="danger" to="/">
            Log Out
          </ButtonLink>
        </li>
      )}
    </StyledLinksList>
  );
}

export default LinksList;
