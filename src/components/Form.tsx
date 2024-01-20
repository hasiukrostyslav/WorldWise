import styled, { css } from 'styled-components';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface FormProps {
  children: React.ReactNode;
  $variation?: 'primary' | 'secondary';
  $grow?: boolean;
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
  max-height: 100%;
  padding: 4rem 3rem 0;
  border-radius: 1rem;
  width: 50rem;
  ${(props) =>
    !props.$grow
      ? `${mediaQueries(SCREEN_SIZE.SmallTablet)` width: 50rem;`}`
      : `${mediaQueries(SCREEN_SIZE.SmallTablet)` 
          width: 100%;
          padding: 1rem 3rem 0;
        `}`}

  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    width: 40rem;
    padding: 4rem 3rem 0;
  `}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: 45rem;`}
  
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: 50rem;`}
`;

function Form({ children, $variation, onSubmit, $grow }: FormProps) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      $variation={$variation}
      noValidate
      autoComplete="off"
      $grow={$grow}
    >
      {children}
    </StyledForm>
  );
}

Form.defaultProps = {
  $variation: 'primary',
};

export default Form;
