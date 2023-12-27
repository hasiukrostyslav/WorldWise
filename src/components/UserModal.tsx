import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import FileInput from './FileInput';
import { Button } from './Button';

const Modal = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;

  border: none;
  border-radius: 1rem;
  background-color: var(--color-dark--0);
  color: var(--color-light--1);
  z-index: 1000;

  &::backdrop {
    background-color: #333;
    opacity: 0.4;
  }

  form {
    padding: 3rem 2rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--color-light--2);

    img {
      width: 6rem;
      height: 6rem;
    }
  }

  div {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type Ref = HTMLDialogElement;
interface UserModalProps {
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
  closeModalByBackdropClick: (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => void;
}

const UserModal = forwardRef<Ref, UserModalProps>(function UserModal(
  { closeModal, closeModalByBackdropClick }: UserModalProps,
  ref
) {
  return createPortal(
    <Modal ref={ref} onClick={closeModalByBackdropClick}>
      <form>
        <p>
          Change your profile picture
          <img src="/user.png" alt="User Avatar" />
        </p>
        <FileInput />
        <div>
          <Button $variation="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </form>
    </Modal>,
    document.getElementById('root')!
  );
});

export default UserModal;
