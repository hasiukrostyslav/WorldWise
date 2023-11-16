import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonLinkProps {
  size?: 'small' | 'medium' | 'large';
  $variation?: 'primary' | 'secondary';
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
    &:focus {
      outline: 4px solid var(--color-primary--0);
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
    &:focus {
      outline: 4px solid var(--color-secondary--0);
    }
  `,
};

const ButtonLink = styled(Link)<ButtonLinkProps>`
  border: none;
  text-transform: uppercase;
  border-radius: 1rem;

  ${(props) => (props.size ? sizes[props?.size] : '')};
  ${(props) => (props.$variation ? variations[props.$variation] : '')}
`;

ButtonLink.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};

export default ButtonLink;
