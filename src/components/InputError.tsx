import styled from 'styled-components';

const StyledInputError = styled.span`
  color: var(--color-danger--0);
  font-size: 1.2rem;
  position: absolute;
  bottom: -2.4rem;
`;

interface InputErrorProps {
  message: string | undefined;
}

function InputError({ message }: InputErrorProps) {
  if (!message) return;
  return <StyledInputError>{message}</StyledInputError>;
}

export default InputError;
