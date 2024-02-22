import styled from "styled-components";

export const Title = styled.p`
  margin-left: 3px;
  margin-bottom: 5px;
`;

export const CarouselContainer = styled.div<{ $isShow?: boolean }>`
  padding: 5%;
  margin-bottom: -5%;

  .slick-arrow {
    height: 100%;
    width: 6%;
    color: white !important;
    background: black !important;
    opacity: 0.7;
    border-radius: 3px;
    font-size: 1.35em;
    z-index: 1;

    &:hover {
      opacity: 0.9;

      svg {
        transition: 0.3s;
        transform: scale(1.3);

        @media (hover: none) {
          transform: unset;
        }
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
    display: ${({ $isShow }) => $isShow === false && "none !important"};
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

      &[data-index="-1"] {
        img {
          display: ${({ $isShow }) => $isShow === false && "none"};
        }
      }
    }
  }

  .slick-dots {
    top: -1.9em;
    right: 0;
    height: 1.5em;
    width: 40%;

    li button {
      &:before {
        content: "➖";
        font-size: 25px;
        margin-right: -5px;
      }
    }
  }

  @media (min-width: 60em) {
    margin-bottom: -7%;

    .slick-arrow {
      font-size: 1.5em;
    }

    .slick-dots {
      right: -14%;
    }
  }
`;
