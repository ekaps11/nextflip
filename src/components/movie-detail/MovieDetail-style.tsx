import styled from "styled-components";
import { CardInfo } from "../card/Card-style";
import { ModalContainer } from "../modal/Modal-style";
import { colors } from "../../utils/styles/commonStyle";

export const MovieDetailButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin-top: 1em;

  button {
    font-size: 2vw;
    font-weight: bold;

    i {
      margin-right: 5px;
      margin-bottom: 2px;
    }

    &:first-child {
      background: white;
      color: black;

      &:hover {
        opacity: 0.9;
        outline: 1px solid white;
      }
    }

    &:nth-child(2) {
      background: rgba(80, 80, 80, 0.8);
      opacity: 0.7;
      color: rgba(255, 255, 255, 1);

      &:hover {
        opacity: 1;
        outline: 1px solid grey;
      }
    }
  }
`;

export const MovieDetailModal = styled.div`
  ${CardInfo} {
    border-radius: 10px;
    position: unset;
    color: white;
    opacity: 1;
    margin: unset;
    padding: unset;

    p {
      font-size: 1em;
      width: 95%;

      &:nth-child(2) {
        margin: 1.5em 0;
      }

      img {
        margin-top: -0.1em;
      }
    }
  }
`;

export const MovieDetailContainer = styled.div<{
  $strLength?: number;
}>`
  width: 50%;

  h2 {
    font-size: ${({ $strLength }) =>
      $strLength && $strLength > 25 ? "4vw" : "4.5vw"};
  }

  img {
    width: 60%;
    margin-top: 1em;
  }

  ${ModalContainer} {
    padding: 4% !important;
    color: grey;
    background-color: ${colors.grey[2]};
    animation: pop-up 0.7s;

    @keyframes pop-up {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }

  @media (min-width: 45em) and (orientation: portrait) {
    ${ModalContainer} {
      font-size: 1.5em;
    }
  }

  @media (min-width: 45em) and (orientation: landscape) {
    ${ModalContainer} {
      width: 70%;
    }
  }

  @media (min-width: 60em) {
    ${ModalContainer} {
      width: 50%;
      top: 15vh !important;
      font-size: 1.35em;
      padding: 2% 4% !important;
    }
  }

  @media (min-width: 60em) and (orientation: portrait) {
    ${ModalContainer} {
      width: 60%;
      font-size: 1.75em;
    }
  }
`;
