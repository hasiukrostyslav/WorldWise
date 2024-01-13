import styled from 'styled-components';
import { IoMenu, IoClose } from 'react-icons/io5';

import { useMenu } from '../hooks/useMenu';

const StyledMenuButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  z-index: 1;
  background-color: var(--color-dark--2);
  color: var(--color-light--1);

  &:focus {
    outline: 4px solid var(--color-primary--0);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function MenuButton() {
  const { isOpenMenu, toggleMenu } = useMenu();

  return (
    <StyledMenuButton onClick={toggleMenu}>
      {isOpenMenu ? <IoClose /> : <IoMenu />}
    </StyledMenuButton>
  );
}

export default MenuButton;
