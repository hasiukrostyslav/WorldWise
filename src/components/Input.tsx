import styled from 'styled-components';

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  name: string;
}

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
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
