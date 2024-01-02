import styled from "styled-components";

export const CardSliderContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 5%;
  margin-left: -5%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  padding: 0 5%;
  margin-bottom: -20%;

  p {
    margin-left: 0.2em;
    margin-bottom: -3vw;
  }

  @media (min-width: 35em) {
    margin-bottom: -14%;
  }

  @media (min-width: 60em) {
    margin-bottom: -10%;
  }

  @media (min-width: 85em) and (max-width: 86em) {
    margin-bottom: -8%;
  }
`;
