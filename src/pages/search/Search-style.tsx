import styled from "styled-components";
import { CardContainer, CardInfo } from "../../components/card/Card-style";
import { flex } from "../../utils/styles/commonStyle";

export const NoResult = styled.div`
  ${flex}
  flex-direction: column;
  height: 70vh;
  text-align: center;
`;

export const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-top: 1em;
  margin-bottom: -5%;

  ${CardInfo} {
    margin-top: -0.3em;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  /* web */
  @media (hover: hover) {
    ${CardContainer}:hover {
      margin-top: -2.5em;

      @media (max-width: 33em) {
        transform: scale(1.2);
      }
    }
  }

  @media (min-width: 20em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 40em) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SearchContainer = styled.div`
  padding: 15% 5%;

  @media (min-width: 35em) {
    padding: 10% 5%;
  }

  @media (min-width: 60em) {
    padding: 7% 5%;
  }
`;
