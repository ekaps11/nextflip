import { ReactNode } from "react";
import Button from "../button/Button";
import styled from "styled-components";

const ModalContainer = styled.div``;

type ModalProps = {
  onClose: () => void;
  children?: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalContainer>
      <Button onClick={onClose}>x</Button>
      <div>I'm a modal dialog</div>
      {children}
    </ModalContainer>
  );
};

export default Modal;
