import styled from 'styled-components';

interface DeleteButtonProps {
  disabled: boolean;
  $color: 'dark' | 'light';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledDeleteButton = styled.button<DeleteButtonProps>`
  font-size: 1rem;
  font-weight: 600;
  height: 2rem;
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

function DeleteButton({ disabled, onClick, $color }: DeleteButtonProps) {
  return (
    <StyledDeleteButton onClick={onClick} disabled={disabled} $color={$color}>
      x
    </StyledDeleteButton>
  );
}

export default DeleteButton;
