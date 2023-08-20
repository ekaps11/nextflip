import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#e50914",
  secondary: "#333",
};

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

    h1 {
      font-weight: bold;
      margin: 0.5em 0;

      @media (min-width: 60em) {
        font-size: 2.75em;
      }
    }

    p{
      letter-spacing: 0.0625em;

      @media (min-width: 60em) {
        font-size: 1.35em;
      }
    }

    a {
      text-decoration: none
    }
`;

export default GlobalStyles;
