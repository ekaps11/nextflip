import styled, { css } from "styled-components";
import { CardInfo, CardContainer } from "../card/Card-style";

const cardWidth = (width: string) => css`
  ${CardContainer}, ${CardInfo} {
    width: ${width};
  }
`;

export const NoResults = styled.div`
  margin: 50% 0;
  text-align: center;
  width: 90%;

  h1 {
    margin-top: -5%;
  }

  @media (orientation: landscape) {
    margin: 18% 0;

    @media (min-width: 65em) {
      margin: 20% 0;
    }
  }
`;

export const MovieResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 5px;

  ${CardInfo} {
    margin-top: -0.3em;
  }

  ${CardContainer} {
    width: 44.5vw;
    margin-bottom: 1em;

    @media (hover: hover) {
      &:hover {
        margin-top: -3em;
        z-index: 1;
      }
    }
  }

  @media (orientation: landscape) {
    ${cardWidth("29.75vw")}

    @media (min-width: 60em) {
      ${cardWidth("22.25vw")}
    }

    @media (min-width: 65em) {
      ${cardWidth("17.5vw")}
    }

    @media (min-width: 85em) {
      ${cardWidth("17.5vw")}
    }
  }

  @media (orientation: portrait) {
    ${CardInfo} {
      width: unset;
    }

    @media (min-width: 45em) {
      ${cardWidth("29.75vw")}
    }

    @media (min-width: 50em) {
      ${cardWidth("29.15vw")}
    }
  }

  @media (hover: hover) {
    @media (min-width: 30em) {
      ${cardWidth("28.75vw")}
    }

    @media (min-width: 40em) {
      ${cardWidth("29vw")}
    }

    @media (min-width: 50em) {
      ${cardWidth("21.85vw")}
    }

    @media (min-width: 60em) {
      ${cardWidth("17.65vw")}
    }
  }
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  margin-left: 5%;
`;
