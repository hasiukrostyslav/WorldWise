import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
  $variation?: 'primary' | 'secondary' | 'danger' | 'outline' | 'dark';
  disabled?: boolean;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void);
}

const basicStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  border-radius: 1rem;
  &:disabled {
      cursor: not-allowed;
    }
  `;

const sizes = {
  extraSmall: css`
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  `,
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

    &:link,
    &:visited {
      color: var(--color-dark--2);
    }
    &:hover {
      background-color: var(--color-primary--1);
    }
    &:disabled {
      background-color: var(--color-primary--2);
    }
    &:focus {
      outline: 4px solid var(--color-primary--0);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
  secondary: css`
    background-color: var(--color-secondary--0);
    color: var(--color-dark--2);

    &:link,
    &:visited {
      color: var(--color-dark--2);
    }
    &:hover {
      background-color: var(--color-secondary--1);
    }
    &:disabled {
      background-color: var(--color-secondary--2);
    }
    &:focus {
      outline: 4px solid var(--color-secondary--0);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
  danger: css`
    background-color: var(--color-danger--0);
    color: var(--color-dark--1);

    &:hover {
      background-color: var(--color-danger--1);
    }
    &:disabled {
      background-color: var(--color-danger--2);
    }
    &:focus {
      outline: 4px solid var(--color-danger--0);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
  outline: css`
    background-color: transparent;
    color: var(--color-light--2);
    border: 1px solid var(--color-light--2);

    &:hover {
      color: var(--color-light--1);
      border-color: 1px solid var(--color-light--1);
    }
    &:focus {
      outline: 4px solid var(--color-light--2);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
  dark: css`
    background-color: var(--color-dark--2);
    color: var(--color-light--2);
    border: 1px solid var(--color-dark--2);

    &:hover {
      background-color: var(--color-dark--0);
      border-color: var(--color-dark--0);
    }
    &:focus {
      outline: 4px solid var(--color-primary--0);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${basicStyles}
  ${(props) => (props.size ? sizes[props?.size] : '')};
  ${(props) => (props.$variation ? variations[props.$variation] : '')}
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  ${basicStyles}
  ${(props) => (props.size ? sizes[props?.size] : '')};
  ${(props) => (props.$variation ? variations[props.$variation] : '')}
`;

Button.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};

ButtonLink.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};
