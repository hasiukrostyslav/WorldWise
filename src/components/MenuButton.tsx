import styled, { css } from 'styled-components';
import { IoMenu, IoClose } from 'react-icons/io5';

import { ICON_SIZE } from '../utils/constant';

interface MenuButtonProps {
  $isOpen: boolean;
  $position: 'navbar' | 'map';
  onClick: () => void;
}

const position = {
  navbar: css`
    top: 2.5rem;
    right: 5rem;
    background-color: var(--color-dark--2);
    border: 4px solid var(--color-dark--2);
    color: var(--color-light--1);
  `,
  map: css`
    bottom: 2rem;
    left: 3rem;
    background-color: var(--color-light--2);
    border: 4px solid var(--color-light--2);
  `,
  sidebar: css`
    top: 2rem;
    bottom: initial;
    left: initial;
    right: 3rem;
    background-color: var(--color-dark--2);
    border: 4px solid var(--color-dark--2);
    color: var(--color-light--1);
  `,
};

const StyledMenuButton = styled.button<MenuButtonProps>`
  position: absolute;
  ${(props) => position[props.$position] || ''}
  ${(props) =>
    props.$position === 'map' && props.$isOpen ? position.sidebar : ''}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 50%;

  z-index: 2000;

  &:focus {
    outline: 4px solid var(--color-primary--0);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function MenuButton({ $isOpen, onClick, $position }: MenuButtonProps) {
  return (
    <StyledMenuButton $isOpen={$isOpen} onClick={onClick} $position={$position}>
      {$isOpen ? <IoClose style={ICON_SIZE} /> : <IoMenu style={ICON_SIZE} />}
    </StyledMenuButton>
  );
}

export default MenuButton;
