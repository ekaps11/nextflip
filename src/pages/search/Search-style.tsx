import styled from "styled-components";
import { CardContainer, CardInfo } from "../../components/card/Card-style";

export const NoResult = styled.div`
  margin: 25% 0;
  width: 90%;
  text-align: center;

  h2 {
    padding-top: auto !important;
  }
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

  @media (hover: hover) {
    ${CardContainer}:hover {
      margin-top: -2.5em;
    }
  }

  @media (min-width: 35em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 65em) {
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
