import { ReactNode, useEffect, useRef } from "react";
import Button from "../button/Button";
import { ModalContainer } from "./Modal-style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleEsc = ({ key }: KeyboardEvent) => {
      key === "Escape" && isOpen && onClose();
    };

    const handleClickOutside = ({ target }: MouseEvent) => {
      modalRef.current &&
        !modalRef.current.contains(target as Node) &&
        onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <ModalContainer ref={modalRef} open={isOpen}>
      <Button onClick={onClose}>&times;</Button>
      {children}
    </ModalContainer>
  );
};

export default Modal;
