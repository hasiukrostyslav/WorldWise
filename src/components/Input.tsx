import styled from 'styled-components';

interface InputProps {
  label: string;
}

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

function Input({ label }: InputProps) {
  return (
    <StyledInput>
      {label}
      <input type="text" />
    </StyledInput>
  );
}

export default Input;
