import styled from "styled-components";

export const GamesContainer = styled.div`
  padding: 1em 5%;

  h2 {
    margin-bottom: 1em;
  }

  div {
    background: url(images/games.webp) no-repeat;
    background-size: cover;
    min-height: 50vh;
    border-radius: 1em;
    margin-bottom: 1em;

    div {
      padding: 10% 5%;
      background: unset;
      width: 60%;
      padding-left: 5%;

      p {
        letter-spacing: unset;
      }
    }
  }

  @media (orientation: landscape) {
    padding: 0 5%;

    div {
      min-height: 70vh;

      div {
        width: 60%;
      }
    }
  }

  @media (min-width: 45em) {
    div {
      min-height: 30vh;
    }
  }

  @media (min-width: 65em) {
    padding: 0 10%;
  }
`;
