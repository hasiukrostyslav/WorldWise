import styled from 'styled-components';

const StyledSpinner = styled.div`
  flex-grow: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100% - 55rem);
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
