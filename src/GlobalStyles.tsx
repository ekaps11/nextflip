import { createGlobalStyle, styled } from "styled-components";

export enum colors {
  primary = "#e50914",
  secondary = "#333",
}

export const Box = styled.div``;

export const BaseLayout = styled.div`
  padding: 5%;

  @media screen and (min-width: 60em) {
    margin: 0 10%;
  }
`;

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: black;
        font-family:  sans-serif;
        color: white;
    }

    select, button {
      border-radius: 4px;
      color: inherit;
      text-transform: capitalize;
      cursor: pointer;
    }

    select {
      background: black;
      opacity: 0.7;
      padding: 0.5em 2em;
      border: 1.5px solid ${colors.secondary};
    }

    button {
      background: ${colors.primary};
      border: none;
    }

    h1 {
      font-weight: bold;
      margin: 0.5em 0;

      @media screen and (min-width: 60em) {
        font-size: 2.75em;
      }
    }

    p{
      letter-spacing: 0.0625em;

      @media screen and (min-width: 60em) {
        font-size: 1.35em;
      }
    }
`;

export default GlobalStyles;
