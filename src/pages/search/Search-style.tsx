import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import { animation, colors } from "../../utils/styles/commonStyle";
import { ModalContainer } from "../../components/modal/Modal-style";

export const SearchIcon = styled(HiMagnifyingGlass)`
  width: 2em;
  cursor: pointer;
  padding: 5px;
  font-size: 1.2em;
  margin-left: auto;
  border-radius: 3px 0 0 3px;
  border-right: none !important;
`;

export const SearchInput = styled.form`
  input {
    animation: ${animation.fullWidth} 0.5s;
    height: 2.4em;
    margin-right: 5px;
    background: black;
    opacity: 0.7;
    border: 1px solid white;
    border-left: none;
    border-radius: 0 3px 3px 0;
    outline: none;
    color: white;
    padding: 0 3%;
  }

  button {
    display: none;
  }
`;

export const SearchContainer = styled.div<{ $isShow: boolean }>`
  ${ModalContainer} {
    width: 60%;
    background: ${colors.grey[0]};
    color: white;
    top: 30%;
    animation: ${animation.popUp} 0.5s;

    button {
      width: max-content;
      height: max-content;
      margin-top: 10px;
    }

    div {
      padding: 5%;
      margin-top: 10px;
    }
  }

  ${SearchIcon} {
    background: ${({ $isShow }) => $isShow && "black"};
    opacity: ${({ $isShow }) => $isShow && "0.7"};
    border: ${({ $isShow }) => $isShow && "1px solid white"};
    margin-right: ${({ $isShow }) => `${$isShow ? -0.83 : -0.3}em`};
  }

  @media (max-width: 25em) {
    ${SearchIcon} {
      display: ${({ $isShow }) => ($isShow ? "none" : "block")};
    }

    ${SearchInput} {
      border-left: 1px solid white;
      border-radius: 3px;
    }
  }
`;
