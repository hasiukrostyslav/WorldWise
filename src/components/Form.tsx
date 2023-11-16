import styled, { css } from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  $variation?: 'primary' | 'secondary';
}

const variations = {
  primary: css`
    background-color: var(--color-dark--1);
  `,
  secondary: css`
    background-color: var(--color-dark--2);
  `,
};

const StyledForm = styled.form<FormProps>`
  ${(props) => (props.$variation ? variations[props.$variation] : '')}
  width: 50rem;
  padding: 4rem 3rem;
  border-radius: 1rem;
`;

function Form({ children, $variation }: FormProps) {
  return (
    <StyledForm $variation={$variation} autoComplete="off">
      {children}
    </StyledForm>
  );
}

Form.defaultProps = {
  $variation: 'primary',
};

export default Form;
