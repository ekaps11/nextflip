import styled from "styled-components";

export const CardSliderContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 5%;
  margin-left: -5%;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  margin-bottom: -12vh;

  p {
    margin: 0 0 -3vw 0.2em;
  }

  @media (orientation: landscape) {
    margin-bottom: -20vh;
  }
`;
