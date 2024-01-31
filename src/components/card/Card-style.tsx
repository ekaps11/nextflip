import styled from "styled-components";
import { colors } from "../../utils/styles/commonStyle";

export const CardInfo = styled.div`
  width: 100%;
  opacity: 0;
  position: absolute;
  background: ${colors.grey[2]};
  padding: 5%;
  border-radius: 0 0 5px 5px;
  pointer-events: none;

  svg {
    font-size: 1.25em;
    margin: 5px 0;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 50%;
    margin-right: 5px;

    &:first-child {
      background: white;
      color: black;
    }

    &:last-child {
      float: right;
    }
  }

  p {
    letter-spacing: unset;
    font-size: 0.7em;
    margin: 0.5em 0;

    span {
      border: 1px solid;
      border-radius: 3px;
      padding: 0 3px;
      margin-left: 5px;
    }
  }
`;

export const CardContainer = styled.div`
  transition: 0.5s;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition-delay: 0.7s;
  }

  &:hover {
    transition-delay: 0.7s;
    transform: scale(1.3);

    img {
      border-radius: 5px 5px 0 0;
    }

    ${CardInfo} {
      opacity: 1;
      transition-delay: 0.7s;
    }
  }

  @media (hover: none) {
    &:hover {
      all: unset;

      ${CardInfo} {
        opacity: 0;
      }
    }
  }

  @media (min-width: 65em) {
    &:hover {
      transform: scale(1.5);
    }
  }
`;
