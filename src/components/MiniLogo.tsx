import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface LinkProps {
  $visible: boolean;
}

interface MiniLogoProps {
  isShow: boolean;
}

const Img = styled.img`
  width: 6rem;
`;

const StyledLink = styled(Link)<LinkProps>`
  position: absolute;
  top: 2.8rem;
  left: 12rem;

  ${mediaQueries(SCREEN_SIZE.Mobile)` 
    top: 2.4rem;
    left: 10rem;
  `}
  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    left: 9rem;
  `}
  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    top: 2rem;
    left: 8rem;
  `}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` 
    top: 1.6rem;
    left: 7.5rem;
  `}
  ${mediaQueries(SCREEN_SIZE.Laptop)` 
    top: 1.2rem;
    left: 7rem;
  `}
  z-index: 999;
  opacity: 0;
  transition: opacity 1s;

  &:focus {
    outline: solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  ${(props) =>
    !props.$visible
      ? ''
      : css`
          opacity: 1;
        `}
`;

function MiniLogo({ isShow }: MiniLogoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isShow) setTimeout(() => setIsVisible(true), 900);
  }, [isShow]);

  return (
    <StyledLink to="/" $visible={isVisible}>
      <Img src="/icon.png" alt="WorldWise logo" />
    </StyledLink>
  );
}

export default MiniLogo;
