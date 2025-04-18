import styled from "styled-components";
import { animation } from "../../utils/styles/commonStyle";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchIcon = styled(HiMagnifyingGlass)`
  width: 2em;
  cursor: pointer;
  padding: 5px;
  font-size: 1.2em;
  margin-left: auto;
  border-radius: 3px 0 0 3px;
  border-right: none !important;
`;

export const SearchInput = styled.div`
  input {
    animation: ${animation.fullWidth} 0.5s;
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
`;

export const SearchbarContainer = styled.div<{ $isShow: boolean }>`
  ${SearchIcon} {
    background: ${({ $isShow }) => $isShow && "black"};
    opacity: ${({ $isShow }) => $isShow && "0.7"};
    border: ${({ $isShow }) => $isShow && "1px solid white"};
    margin-right: ${({ $isShow }) => `${$isShow ? -0.83 : -0.3}em`};
  }

  @media (max-width: 30em) {
    position: absolute;
    right: ${({ $isShow }) => ($isShow ? 10 : 15) + "%"};

    ${SearchIcon} {
      display: ${({ $isShow }) => ($isShow ? "none" : "block")};
    }

    ${SearchInput} {
      margin-left: 10px;
      border-left: 1px solid white;
      border-radius: 3px;

      input {
        width: 90%;
        height: 2em;
        animation: ${animation.nineties} 0.5s;
      }
    }
  }
`;
