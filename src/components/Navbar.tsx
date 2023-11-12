import { styled } from 'styled-components';

import Logo from './Logo';
import LinksList from './LinksList';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <LinksList />
    </StyledNavbar>
  );
}

export default Navbar;
