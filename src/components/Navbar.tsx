import { styled } from 'styled-components';

import { useMenu } from '../hooks/useMenu';
import { useMatchMedia } from '../hooks/useMatchMedia';

import Logo from './Logo';
import LinksList from './LinksList';
import MenuButton from './MenuButton';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navbar() {
  const { isOpenMenu, toggleMenu, closeMenu } = useMenu();
  const { matchMedia } = useMatchMedia({ minWidth: '540px' });

  return (
    <StyledNavbar>
      <Logo $zIndex={matchMedia} onClick={closeMenu} />
      <LinksList />
      {!matchMedia && (
        <MenuButton
          $isOpen={isOpenMenu}
          onClick={toggleMenu}
          $position="navbar"
        />
      )}
    </StyledNavbar>
  );
}

export default Navbar;
