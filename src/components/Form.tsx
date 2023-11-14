import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
}

const StyledForm = styled.form`
  background-color: var(--color-dark--1);
  width: 50rem;
  padding: 4rem 3rem;
  border-radius: 1rem;
`;

function Form({ children }: FormProps) {
  return <StyledForm autoComplete="off">{children}</StyledForm>;
}

export default Form;
