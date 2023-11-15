import styled from 'styled-components';

const StyledError = styled.p`
  font-size: 1.8rem;
  margin-top: 3rem;
`;

function Error() {
  return <StyledError>⛔ Something went wrong. Please try again.</StyledError>;
}

export default Error;
