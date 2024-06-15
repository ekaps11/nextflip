import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: 9;
`;

export const ModalContainer = styled.dialog`
  width: 80%;
  padding: 0 !important;
  position: fixed;
  top: 20%;
  margin: auto;
  border: none;
  border-radius: 10px;
  z-index: 10;

  button {
    position: absolute;
    right: 4%;
    background: none;
    font-size: 1.25em;
    padding: 0 7px;
    border: 1px solid;
    border-radius: 50%;
    margin-top: 0.2em;

    &:hover {
      background: none;
      color: white;
    }
  }
`;
