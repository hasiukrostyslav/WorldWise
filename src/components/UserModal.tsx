import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { useUpdateUserPhoto } from '../hooks/useUpdateUserPhoto';
import { useUser } from '../hooks/useUser';

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
      border-radius: 50%;
    }
  }

  div {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const InputError = styled.span`
  color: var(--color-danger--0);
  font-size: 1.2rem;
  font-weight: 500;
  position: absolute;
  top: 9rem;
`;

type Ref = HTMLDialogElement;
interface UserModalProps {
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
  closeModalByBackdropClick: (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => void;
  closeModalBySubmit: () => void;
}

interface FormValues {
  image: FileList | null;
}

const UserModal = forwardRef<Ref, UserModalProps>(function UserModal(
  { closeModal, closeModalByBackdropClick, closeModalBySubmit }: UserModalProps,
  ref
) {
  const { userPhoto } = useUser();
  const { updateUserPhoto, isPending } = useUpdateUserPhoto();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const image = data?.image?.item(0);

    updateUserPhoto(image);
    closeModalBySubmit();
    reset();
  };

  return createPortal(
    <Modal
      ref={ref}
      onClick={(e) => {
        closeModalByBackdropClick(e);
        // reset();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          Change your profile picture
          <img src={userPhoto || '/user.png'} alt="User Avatar" />
        </p>
        <FileInput
          {...register('image', { required: 'Please upload the file' })}
        />
        {errors.image && <InputError>{errors.image.message}</InputError>}
        <div>
          <Button
            disabled={isPending}
            $variation="outline"
            onClick={(e) => {
              closeModal(e);
              // reset();
            }}
          >
            Cancel
          </Button>
          <Button disabled={isPending}>Upload</Button>
        </div>
      </form>
    </Modal>,
    document.getElementById('root')!
  );
});

export default UserModal;
