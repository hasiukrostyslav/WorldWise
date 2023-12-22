import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

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
  top: 1.2rem;
  left: 7rem;
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
