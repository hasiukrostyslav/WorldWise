import styled from 'styled-components';

const StyledHomeError = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 4rem;
  }
`;

function HomeErrorPage() {
  return (
    <StyledHomeError>
      <h2>Page not found.</h2>
    </StyledHomeError>
  );
}

export default HomeErrorPage;
