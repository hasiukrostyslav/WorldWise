import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  $variation?: 'primary' | 'secondary';
  onClick?: () => void;
}

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
  `,
  medium: css`
    font-size: 1.6rem;
    padding: 1.2rem 1.8rem;
  `,
  large: css`
    font-size: 1.8rem;
    padding: 1.6rem 2.6rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-primary--0);
    color: var(--color-dark--2);

    &:hover {
      background-color: var(--color-primary--1);
    }
    &:link,
    &:visited {
      color: var(--color-dark--2);
    }
  `,
  secondary: css`
    background-color: var(--color-secondary--0);
    color: var(--color-dark--2);

    &:hover {
      background-color: var(--color-secondary--1);
    }
    &:link,
    &:visited {
      color: var(--color-dark--2);
    }
  `,
};

const Button = styled(Link)<ButtonProps>`
  border: none;
  border-radius: 1rem;

  ${(props) => (props.size ? sizes[props?.size] : '')};
  ${(props) => (props.$variation ? variations[props.$variation] : '')}
`;

Button.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};

export default Button;
