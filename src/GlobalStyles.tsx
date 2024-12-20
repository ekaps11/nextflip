import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: white;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 0.5em 0;
  }

  p {
    letter-spacing: 0.0625em;
  }

  @media (min-width: 45em) and (max-width: 60em) {
    p {
      font-size: 1.2em;
      margin: 0.5em 0;
    }
  }

  @media (min-width: 60em) {
    h1 {
      font-size: 2.75em;      
    }

    p {
      font-size: 1.35em;
    }
  }
`;

export default GlobalStyles;
