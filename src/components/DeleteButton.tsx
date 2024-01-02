import styled, { css } from 'styled-components';

interface DeleteButtonProps {
  disabled: boolean;
  $color: 'dark' | 'light';
  $size?: 'small';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const position = css`
  position: absolute;
  top: -0.6rem;
  right: -1.2rem;
`;

const StyledDeleteButton = styled.button<DeleteButtonProps>`
  ${(props) => (props.$size ? position : '')};
  font-size: ${(props) => (props.$size ? '0.8rem' : '1rem')};
  height: ${(props) => (props.$size ? '1.2rem' : '2rem')};
  font-weight: 600;
  aspect-ratio: 1;
  border: none;
  border-radius: 50%;
  transition: all 0.5s;
  background-color: ${(props) =>
    props.$color === 'dark' ? 'var(--color-dark--0)' : 'var(--color-light--1)'};

  color: ${(props) =>
    props.$color === 'dark' ? 'var(--color-light-2)' : 'var(--color-dark--0)'};

  &:hover {
    background-color: var(--color-third);
    color: var(--color-dark--1);
  }
  &:focus {
    outline: solid var(--color-primary--0);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function DeleteButton({ disabled, onClick, $color, $size }: DeleteButtonProps) {
  return (
    <StyledDeleteButton
      onClick={onClick}
      disabled={disabled}
      $color={$color}
      $size={$size}
    >
      x
    </StyledDeleteButton>
  );
}

export default DeleteButton;
