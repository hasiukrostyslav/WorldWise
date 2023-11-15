import styled from 'styled-components';

const StyledSpinner = styled.div`
  .spinnerContainer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, var(--color-light--2));
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
`;

function Spinner() {
  return (
    <StyledSpinner className="spinnerContainer">
      <div className="spinner"></div>
    </StyledSpinner>
  );
}

export default Spinner;
