import styled from "styled-components";

export const ModalContainer = styled.dialog`
  width: 80%;
  padding: 0 !important;
  position: fixed;
  top: 20vh !important;
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

    &:hover {
      background: none;
      color: white;
    }
  }
`;
