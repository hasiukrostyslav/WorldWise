import styled from 'styled-components';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useModal } from '../hooks/useModal';
import { useUser } from '../hooks/useUser';
import { useLogOut } from '../hooks/useLogOut';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { Button } from './Button';
import UserModal from './UserModal';
import DeleteModal from './DeleteModal';

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
  overflow: hidden;

  &:focus {
    outline: 4px solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  img {
    width: 4rem;
    height: auto;
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 4px;
  &:focus {
    outline: solid var(--color-primary--0);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Icon = styled(RiDeleteBin2Line)`
  font-size: 2.5rem;
  color: var(--color-danger--0);
`;

function User() {
  const { matchMedia } = useMatchMedia({ minWidth: '540px' });
  const { userName, userPhoto } = useUser();
  const { logout } = useLogOut();
  const {
    imgDialogRef,
    deleteDialogRef,
    openModal,
    closeModal,
    closeModalBySubmit,
    closeModalByBackdropClick,
  } = useModal();

  return (
    <StyledUser>
      <AvatarButton onClick={() => openModal(imgDialogRef)}>
        <img src={userPhoto || '/user.png'} alt="User Avatar" />
      </AvatarButton>
      {matchMedia && <span>Welcome, {userName}</span>}
      <DeleteButton onClick={() => openModal(deleteDialogRef)}>
        <Icon />
      </DeleteButton>
      <Button onClick={() => logout()} size="extraSmall" $variation="dark">
        Logout
      </Button>
      <UserModal
        ref={imgDialogRef}
        imgDialogRef={imgDialogRef}
        closeModal={closeModal}
        closeModalByBackdropClick={closeModalByBackdropClick}
        closeModalBySubmit={closeModalBySubmit}
      />
      <DeleteModal
        ref={deleteDialogRef}
        deleteDialogRef={deleteDialogRef}
        closeModal={closeModal}
        closeModalByBackdropClick={closeModalByBackdropClick}
        closeModalBySubmit={closeModalBySubmit}
      />
    </StyledUser>
  );
}

export default User;
