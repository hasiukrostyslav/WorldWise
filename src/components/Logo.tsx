import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { useMatchMediaLandScape } from '../hooks/useMatchMediaLandscape';
import { mediaQueriesLandscape } from '../styles/mediaQueries';

interface StyledLinkProps {
  $zIndex?: boolean;
  onClick?: () => void;
}

const Img = styled.img`
  width: 22rem;

  ${mediaQueriesLandscape()` width: 5rem;`}
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  border-radius: 1rem;
  z-index: ${(props) => (props.$zIndex ? 'initial' : 2)};

  &:focus {
    outline: solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function Logo({ $zIndex, onClick }: StyledLinkProps) {
  const { matchMedia } = useMatchMediaLandScape();
  return (
    <StyledLink to="/" $zIndex={$zIndex} onClick={onClick}>
      <Img src={matchMedia ? '/icon.png' : '/logo.png'} alt="WorldWise logo" />
    </StyledLink>
  );
}

export default Logo;
