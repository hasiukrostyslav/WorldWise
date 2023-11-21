import styled from 'styled-components';

const StyledError = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

function Error() {
  return <StyledError>⛔ Something went wrong. Please try again.</StyledError>;
}

export default Error;
