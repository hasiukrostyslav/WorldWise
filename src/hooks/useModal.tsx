import { useRef } from 'react';

export function useModal() {
  const imgDialogRef = useRef<HTMLDialogElement>(null);
  const deleteDialogRef = useRef<HTMLDialogElement>(null);

  function openModal(ref: React.RefObject<HTMLDialogElement>) {
    ref.current?.showModal();
  }

  function closeModal(
    e: React.MouseEvent<HTMLElement>,
    ref: React.RefObject<HTMLDialogElement>
  ) {
    e.preventDefault();

    ref.current?.close();
  }

  function closeModalByBackdropClick(
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
    ref: React.RefObject<HTMLDialogElement>
  ) {
    if (e.target === e.currentTarget) ref.current?.close();
  }

  function closeModalBySubmit(ref: React.RefObject<HTMLDialogElement>) {
    ref.current?.close();
  }

  return {
    imgDialogRef,
    deleteDialogRef,
    openModal,
    closeModal,
    closeModalBySubmit,
    closeModalByBackdropClick,
  };
}
