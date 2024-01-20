import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../hooks/useUser';
import { useLogOut } from '../hooks/useLogOut';
import { useMenu } from '../hooks/useMenu';
import { PRIMARY_COLOR } from '../utils/constant';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';
import { ButtonLink } from './Button';

interface ListContainerProps {
  $isOpen: boolean;
}

const ListContainer = styled.div<ListContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.$isOpen ? 'grid' : 'none')};
  place-items: center;
  background-color: var(--color-dark--0);

  ${mediaQueries(SCREEN_SIZE.SmallTablet)`  
    position: relative;
    display: block;
    width: initial;
    height: initial;
    background-color: transparent;
  `}
`;

const StyledLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  gap: 5rem;
  ${mediaQueries(SCREEN_SIZE.SmallTablet)`  
    flex-direction: row;
    gap: 3rem;
  `}
  ${mediaQueries(SCREEN_SIZE.Tablet)`  gap: 5rem;`}
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
  const { isOpenMenu, closeMenu } = useMenu();
  const { isAuthenticated } = useUser();
  const { logout } = useLogOut();

  return (
    <ListContainer $isOpen={isOpenMenu}>
      <StyledLinksList>
        <li>
          <StyledNavLink
            onClick={closeMenu}
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
            onClick={closeMenu}
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
              <ButtonLink onClick={closeMenu} to="login">
                Sign In
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                onClick={closeMenu}
                $variation="secondary"
                to="register"
              >
                Register
              </ButtonLink>
            </li>
          </>
        )}

        {isAuthenticated && (
          <li>
            <ButtonLink
              onClick={() => {
                logout();
                closeMenu();
              }}
              $variation="danger"
              to="/"
            >
              Log Out
            </ButtonLink>
          </li>
        )}
      </StyledLinksList>
    </ListContainer>
  );
}

export default LinksList;
