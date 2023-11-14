import styled from 'styled-components';

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  name: string;
}

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

function Input({ label, type, name }: InputProps) {
  return (
    <StyledInput>
      {label}
      <input type={type} name={name} />
    </StyledInput>
  );
}

export default Input;
