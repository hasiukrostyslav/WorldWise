import styled from 'styled-components';
import { TbCurrentLocation } from 'react-icons/tb';
import { LuLayers } from 'react-icons/lu';

import { ICON_SIZE } from '../utils/constant';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  $isActive?: boolean;
  $isTransparent?: boolean;
  $isRound?: boolean;
  $translateY?: number;
  onClick: () => void;
}

const Button = styled.button<ButtonProps>`
  position: ${(props) => (props.$isRound ? '' : 'absolute')};
  bottom: 0;
  left: 0;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light--2);
  transition: all 0.4s;
  border: ${(props) =>
    props.$isActive
      ? '4px solid var(--color-primary--0)'
      : '4px solid var(--color-light--2)'};
  border-radius: ${(props) => (props.$isRound ? '50%' : '4px')};
  opacity: ${(props) => (props.$isTransparent ? 0.5 : '')};
  z-index: ${(props) => (props.$isTransparent ? 1000 : '')};
  transform: ${(props) =>
    props.$translateY ? `translateY(-${props.$translateY}%)` : ''};

  &:hover {
    background-color: ${(props) =>
      props.$isTransparent ? '' : 'var(--color-light--3)'};
    border: ${(props) =>
      props.$isActive
        ? '4px solid var(--color-primary--0)'
        : '4px solid var(--color-light--3)'};
  }
  &:disabled {
    background-color: var(--color-light--3);
    cursor: not-allowed;
  }
  &:focus {
    outline: 4px solid var(--color-primary--0);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export function LocationButton({ onClick, disabled, $isRound }: ButtonProps) {
  return (
    <Button disabled={disabled} onClick={onClick} $isRound={$isRound}>
      <TbCurrentLocation style={ICON_SIZE} />
    </Button>
  );
}

export function LayerButton({
  children,
  onClick,
  $isActive,
  $isTransparent,
  $translateY,
}: ButtonProps) {
  return (
    <Button
      $isTransparent={$isTransparent}
      $isActive={$isActive}
      $translateY={$translateY}
      onClick={onClick}
    >
      {children ? children : <LuLayers style={ICON_SIZE} />}
    </Button>
  );
}
