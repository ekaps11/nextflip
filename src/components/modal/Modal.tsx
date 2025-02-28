import { ReactNode, useEffect, useRef } from "react";
import Button from "../button/Button";
import { ModalContainer, Backdrop } from "./Modal-style";
import { handleEsc } from "../../utils/helper/helper";

type ModalProps = {
  isOpen: boolean;
  useBackdrop?: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  useBackdrop = true,
  onClose,
  children,
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const closeModal = () => onClose();

    isOpen && handleEsc(closeModal);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <Backdrop $useBackdrop={useBackdrop} />}
      <ModalContainer ref={modalRef} open={isOpen}>
        <Button onClick={onClose}>&times;</Button>
        {children}
      </ModalContainer>
    </>
  );
};

export default Modal;
