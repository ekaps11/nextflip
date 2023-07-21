import { createGlobalStyle } from "styled-components";

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

    h1, h2, h3, button {
        text-transform: capitalize;
    }

    a {
        text-decoration: none;
        color: white;
    }

    button {
        background: #e50914;
        color: white;
        font-weight: bolder;
        padding: 0.5rem 1rem;
        border-radius: 3px;
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
