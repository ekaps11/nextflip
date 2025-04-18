import Slider from "react-slick";
import styled from "styled-components";
import { animation, colors } from "../../../utils/styles/commonStyle";
import { ModalContainer } from "../../modal/Modal-style";

export const Detail = styled.div`
  padding: 3%;
  padding-bottom: 5%;

  div {
    display: flex;

    p {
      margin-right: 5px;
      border-radius: 3px;
      padding: 5px;
      background-color: ${colors.grey[0]};
      margin-bottom: 1em;
      font-size: 0.8em;
    }
  }
`;

export const HomeMoviesContainer = styled(Slider)<{
  $slideIndex: number;
}>`
  margin: -3em 5% 0 5% !important;

  div {
    display: flex;
    gap: 10px;
    padding: 0 !important;
  }

  img {
    border-radius: 5px;
    cursor: pointer;
  }

  .slick-arrow {
    top: 65%;
    height: 50%;
    background-color: ${colors.grey[2]} !important;
    border-radius: 7px;
    color: white !important;
    font-size: 1em;
  }

  .slick-next,
  .slick-prev {
    &:before {
      content: "";
    }
  }

  .slick-prev {
    display: ${({ $slideIndex }) =>
      `${$slideIndex > 0 ? "block" : "none"} !important`};
  }

  .slick-next {
    display: ${({ $slideIndex }) =>
      `${$slideIndex < 6 ? "block" : "none"} !important`};
  }

  .slick-list {
    padding-bottom: 0.55em !important;
  }

  @media (hover: hover) {
    img:hover {
      transition: 0.5s;
      transition-delay: 0.15s;
      transform: scale(1.1);
    }

    .slick-arrow:hover {
      background-color: rgba(255, 255, 255, 0.2) !important;

      svg {
        transition: 0.3s;
        transform: scale(1.3);
      }
    }
  }

  @media (min-width: 30em) {
    margin-bottom: -2em !important;
  }

  @media (max-width: 45em) and (orientation: portrait) {
    .slick-next {
      display: ${({ $slideIndex }) =>
        `${$slideIndex < 8 ? "block" : "none"} !important`};
    }
  }

  @media (min-width: 65em) {
    padding: 0 !important;

    div {
      gap: 2em;
    }
  }
`;

export const HomeCarouselContainer = styled.div`
  ${ModalContainer} {
    width: 95%;
    background-color: ${colors.grey[2]};
    color: white;
    animation: ${animation.popUp} 0.7s;

    button {
      top: 3%;
      border: none;
      font-size: 2em;
      transition: 0.5s;

      &:hover {
        background-color: rgba(200, 200, 200, 0.2);
      }
    }

    div {
      margin-top: unset;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    @media (hover: hover) {
      top: 10%;
    }

    @media (hover: none) and (orientation: landscape) and (max-height: 30em) {
      top: 5%;
      height: 90vh;
      overflow: scroll;
    }

    @media (min-width: 60em) {
      width: 50%;

      ${Detail} > div {
        padding: unset;
        margin-top: 1em;
      }

      ${Detail} > p {
        font-size: 1em;
        margin-bottom: 1.5em;
      }
    }
  }
`;
