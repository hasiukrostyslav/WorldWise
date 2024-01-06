import styled, { css } from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface FormProps {
  children: React.ReactNode;
  $variation?: 'primary' | 'secondary';
  onSubmit: () => void;
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
  padding: 4rem 3rem;
  border-radius: 1rem;
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: 45rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: 50rem;`}
  width: 40rem;
`;

function Form({ children, $variation, onSubmit }: FormProps) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      $variation={$variation}
      noValidate
      autoComplete="off"
    >
      {children}
    </StyledForm>
  );
}

Form.defaultProps = {
  $variation: 'primary',
};

export default Form;
