import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Img = styled.img`
  width: 22rem;
`;

function Logo() {
  return (
    <Link to="/">
      <Img src="./logo.png" alt="WorldWise logo" />
    </Link>
  );
}

export default Logo;
