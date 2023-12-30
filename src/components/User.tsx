import { useRef } from 'react';
import styled from 'styled-components';

import { useUser } from '../hooks/useUser';
import { useLogOut } from '../hooks/useLogOut';

import { Button } from './Button';
import UserModal from './UserModal';

const StyledUser = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem 1.6rem;
  width: fit-content;
  background-color: var(--color-dark--1);
  border-radius: 1rem;
  z-index: 999;

  span {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

const AvatarButton = styled.button`
  border-radius: 50%;
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  border: none;

  &:focus {
    outline: 4px solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

function User() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { userName, userPhoto } = useUser();
  const { logout } = useLogOut();

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    dialogRef.current?.close();
  }

  function closeModalByBackdropClick(
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) {
    if (e.target === e.currentTarget) dialogRef.current?.close();
  }

  function closeModalBySubmit() {
    dialogRef.current?.close();
  }

  return (
    <StyledUser>
      <AvatarButton onClick={openModal}>
        <img src={userPhoto || '/user.png'} alt="User Avatar" />
      </AvatarButton>
      <span>Welcome, {userName}</span>
      <Button onClick={() => logout()} size="extraSmall" $variation="dark">
        Logout
      </Button>
      <UserModal
        ref={dialogRef}
        closeModal={closeModal}
        closeModalByBackdropClick={closeModalByBackdropClick}
        closeModalBySubmit={closeModalBySubmit}
      />
    </StyledUser>
  );
}

export default User;
