import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface StyledLinkProps {
  $zIndex?: boolean;
  $size?: 'small' | 'large';
  onClick?: () => void;
}
interface ImgProps {
  $size?: 'small' | 'large';
}

const Img = styled.img<ImgProps>`
  width: ${(props) => (props.$size === 'large' ? '22rem' : '3rem')};
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

function Logo({ $zIndex, onClick, $size }: StyledLinkProps) {
  return (
    <StyledLink to="/" $zIndex={$zIndex} onClick={onClick}>
      <Img
        $size={$size}
        src={$size === 'small' ? '/icon.png' : '/logo.png'}
        alt="WorldWise logo"
      />
    </StyledLink>
  );
}

Img.defaultProps = {
  $size: 'large',
};

export default Logo;
