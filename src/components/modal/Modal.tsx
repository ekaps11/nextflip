import { ReactNode, useEffect, useRef } from "react";
import Button from "../button/Button";
import { ModalContainer, Backdrop } from "./Modal-style";
import { handleClickOutside, handleEsc } from "../../utils/helper/helper";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const closeModal = () => onClose();

    if (isOpen) {
      handleEsc(closeModal);
      handleClickOutside(modalRef, closeModal);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <Backdrop />}
      <ModalContainer ref={modalRef} open={isOpen}>
        <Button onClick={onClose}>&times;</Button>
        {children}
      </ModalContainer>
    </>
  );
};

export default Modal;
