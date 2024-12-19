import styled from "styled-components";
import { colors } from "../../utils/styles/commonStyle";

export const LoadingSkeleton = styled.div`
  @media (hover: hover) {
    width: 100%;
    background-color: ${colors.grey[0]};
    aspect-ratio: 16/9;
    border-radius: 5px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  opacity: 0;
  position: absolute;
  background: ${colors.grey[2]};
  padding: 5%;
  border-radius: 0 0 5px 5px;
  pointer-events: none;
  margin-top: -0.15em;

  svg {
    font-size: 1.25em;
    margin: 5px 0;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;

    &:first-child {
      background: white;
      color: black;
    }

    &:last-child {
      float: right;
    }

    &:hover {
      border: 1px solid white;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5em;
    letter-spacing: unset;
    font-size: 0.7em;
    margin: 0.5em 0;

    span {
      border: 1px solid;
      border-radius: 3px;
      padding: 0 3px;
    }

    img {
      width: 3.5em !important;
    }
  }
`;

export const CardContainer = styled.div`
  transition: 0.5s;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition-delay: 0.7s;
  }

  &:focus {
    outline: none;
  }

  @media (hover: hover) {
    &:hover {
      transition-delay: 0.7s;
      transform: scale(1.3);
      margin-top: -5em;
      z-index: 10;

      img {
        border-radius: 5px 5px 0 0;
      }

      ${CardInfo} {
        opacity: 1;
        transition-delay: 0.7s;
        pointer-events: auto;
      }
    }
  }
`;
