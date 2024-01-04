import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { useDeleteUser } from '../hooks/useDeleteUser';

import { Button } from './Button';

const Modal = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;
  padding: 3rem 2rem;
  text-align: center;

  border: none;
  border-radius: 1rem;
  background-color: var(--color-dark--0);
  color: var(--color-light--1);
  z-index: 1000;

  &::backdrop {
    background-color: #333;
    opacity: 0.4;
  }

  h2 {
    color: var(--color-danger--0);
    margin-bottom: 2rem;
  }

  .btns {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type Ref = HTMLDialogElement;
interface UserModalProps {
  closeModal: (
    e: React.MouseEvent<HTMLElement>,
    ref: React.RefObject<HTMLDialogElement>
  ) => void;
  closeModalByBackdropClick: (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
    ref: React.RefObject<HTMLDialogElement>
  ) => void;
  closeModalBySubmit: (ref: React.RefObject<HTMLDialogElement>) => void;
  deleteDialogRef: React.RefObject<HTMLDialogElement>;
}

const DeleteModal = forwardRef<Ref, UserModalProps>(function DeleteModal(
  {
    closeModal,
    closeModalByBackdropClick,
    closeModalBySubmit,
    deleteDialogRef,
  }: UserModalProps,
  ref
) {
  const { deleteUser, isPending } = useDeleteUser();

  function handleDelete() {
    deleteUser();
    closeModalBySubmit(deleteDialogRef);
  }

  return createPortal(
    <Modal
      ref={ref}
      onClick={(e) => closeModalByBackdropClick(e, deleteDialogRef)}
    >
      <h2>Delete Account</h2>
      <p>
        Are you sure you want to delete your account? This will permanently
        erase your account.
      </p>
      <div className="btns">
        <Button
          onClick={(e) => closeModal(e, deleteDialogRef)}
          disabled={isPending}
          $variation="outline"
        >
          Cancel
        </Button>
        <Button onClick={handleDelete} disabled={isPending} $variation="danger">
          Delete
        </Button>
      </div>
    </Modal>,
    document.getElementById('root')!
  );
});

export default DeleteModal;
