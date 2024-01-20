import styled from 'styled-components';
import { TbCurrentLocation } from 'react-icons/tb';
import { LuLayers } from 'react-icons/lu';
import { RiFullscreenExitLine, RiFullscreenLine } from 'react-icons/ri';
import { ICON_SIZE } from '../utils/constant';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  $isActive?: boolean;
  $isTransparent?: boolean;
  $isRound?: boolean;
  $isAbsolute?: boolean;
  $translateY?: number;
  $isFullScreen?: boolean;
  onClick: (() => void) | undefined;
}

const positionAbsolute = `
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const Button = styled.button<ButtonProps>`
  ${(props) => (props.$isAbsolute ? positionAbsolute : '')}
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: var(--color-light--2);
  transition: all 0.4s;
  opacity: ${(props) => (props.$isTransparent ? 0.5 : '')};
  border-radius: ${(props) => (props.$isRound ? '50%' : '4px')};
  transform: ${(props) =>
    props.$translateY ? `translateY(-${props.$translateY}%)` : ''};
  border: ${(props) =>
    props.$isActive
      ? '4px solid var(--color-primary--0)'
      : '4px solid var(--color-light--2)'};

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
  $isAbsolute,
}: ButtonProps) {
  return (
    <Button
      $isAbsolute={$isAbsolute}
      $isTransparent={$isTransparent}
      $isActive={$isActive}
      $translateY={$translateY}
      onClick={onClick}
    >
      {children ? children : <LuLayers style={ICON_SIZE} />}
    </Button>
  );
}

export function ScreenButton({ onClick, $isFullScreen }: ButtonProps) {
  return (
    <Button onClick={onClick}>
      {$isFullScreen ? (
        <RiFullscreenExitLine style={ICON_SIZE} />
      ) : (
        <RiFullscreenLine style={ICON_SIZE} />
      )}
    </Button>
  );
}
