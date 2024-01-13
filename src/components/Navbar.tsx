import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Logo from './Logo';
import LinksList from './LinksList';
import MenuButton from './MenuButton';
import { useMenu } from '../hooks/useMenu';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navbar() {
  const { closeMenu } = useMenu();
  const [matchesTablet, setMatchesTablet] = useState(
    window.matchMedia('(min-width: 540px)').matches
  );

  useEffect(() => {
    window.matchMedia('(min-width: 540px)').addEventListener('change', (e) => {
      setMatchesTablet(e.matches);
    });
  }, []);

  return (
    <StyledNavbar>
      <Logo $zIndex={matchesTablet} onClick={closeMenu} />
      <LinksList />
      {!matchesTablet && <MenuButton />}
    </StyledNavbar>
  );
}

export default Navbar;
