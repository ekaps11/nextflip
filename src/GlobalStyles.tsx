import { createGlobalStyle } from "styled-components";

export enum colors {
  primary = "#e50914",
  secondary = "#333",
}

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
`;

export default GlobalStyles;
