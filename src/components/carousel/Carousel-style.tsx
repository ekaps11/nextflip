import styled from "styled-components";

export const Title = styled.p`
  margin-left: 3px;
  margin-bottom: 5px;
`;

// for mobile
export const CardSlider = styled.div`
  overflow-x: scroll;

  div {
    display: flex;
    gap: 3px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    border-radius: 5px;
    width: 27vw;
  }

  @media (min-width: 40em) {
    img {
      width: 20vw;
    }
  }

  @media (min-width: 60em) {
    img {
      width: 17vw;
    }
  }
`;

// for web
export const CarouselContainer = styled.div<{ $isShow: boolean }>`
  padding: 5%;
  margin-bottom: -7%;

  /* class obtained from react-slick */
  .slick-arrow {
    height: 105%;
    width: 6%;
    color: white !important;
    background: black !important;
    opacity: 0.7;
    border-radius: 3px;
    font-size: 1.35em;
    z-index: 1;

    &:hover {
      svg {
        transition: 0.3s;
        transform: scale(1.3);
      }
    }
  }

  .slick-next,
  .slick-prev {
    &:before {
      content: "";
    }
  }

  .slick-prev {
    left: -6%;
    opacity: ${({ $isShow }) => !$isShow && 0};
    pointer-events: ${({ $isShow }) => !$isShow && "none"};
  }

  .slick-next {
    right: -6%;
  }

  .slick-list {
    overflow: visible;

    &:hover {
      z-index: 2;
    }

    .slick-slide {
      padding-right: 3px;
    }
  }

  .slick-slide[data-index="-1"] {
    img {
      display: ${({ $isShow }) => !$isShow && "none"};
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: flex-end;
    padding-right: 3%;
    top: -1.9em;
    height: 1.5em;

    li button {
      &:before {
        content: "➖";
        font-size: 25px;
        margin-right: -5px;
      }
    }
  }

  @media (min-width: 60em) {
    .slick-dots {
      padding-right: 2%;
    }

    .slick-arrow {
      font-size: 1.5em;
    }
  }
`;
