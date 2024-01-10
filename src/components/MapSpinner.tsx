import styled from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

const StyledSpinner = styled.div`
  flex-grow: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - 30rem);
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    height: 100%;
    width: calc(100% - 45rem);
  `}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: calc(100% - 50rem);`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: calc(100% - 55rem);`}

  .spinner {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, var(--color-dark--2));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: rotate 1.5s infinite linear;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  h2 {
    color: var(--color-dark--2);
  }
`;

function MapSpinner() {
  return (
    <StyledSpinner>
      <div className="spinner"></div>
      <h2>Map is loading...</h2>
    </StyledSpinner>
  );
}

export default MapSpinner;
