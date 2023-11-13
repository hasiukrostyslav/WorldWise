import styled from 'styled-components';

const StyledError = styled.div`
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
    <StyledError>
      <h2>Page not found.</h2>
    </StyledError>
  );
}

export default HomeErrorPage;
