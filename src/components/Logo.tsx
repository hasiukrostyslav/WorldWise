import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

const Img = styled.img`
  width: 18rem;
  ${mediaQueries(SCREEN_SIZE.Tablet)` width: 22rem;`}
`;

const StyledLink = styled(Link)`
  border-radius: 1rem;
  &:focus {
    outline: solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function Logo() {
  return (
    <StyledLink to="/">
      <Img src="/logo.png" alt="WorldWise logo" />
    </StyledLink>
  );
}

export default Logo;
