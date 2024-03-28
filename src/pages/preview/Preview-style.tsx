import styled from "styled-components";
import { FooterContainer } from "../../components/footer/Footer-style";
import { SelectContainer } from "../../components/select/Select-style";

export const PreviewNav = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: black;
  width: 100%;

  svg {
    font-size: 1.5em;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  iframe,
  .banner {
    aspect-ratio: 16/9;
  }

  div {
    padding: 2%;

    button {
      width: 100%;
      margin: 1em 0;
      text-transform: unset;
      text-align: center;
      background: white;
      color: black;

      svg {
        margin-right: 5px;
        margin-bottom: 3px;
      }

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  ${FooterContainer} {
    margin-left: -2%;

    a,
    select {
      margin-left: -4%;
    }
  }

  @media (orientation: portrait) {
    iframe {
      margin-top: 2.5em;
    }

    .banner {
      width: 100%;
      margin-top: 2.35em;
    }

    iframe,
    .banner {
      position: fixed;
    }
  }

  @media (orientation: landscape) {
    .banner {
      margin-top: 3em;
      aspect-ratio: 2.1;
    }

    ${FooterContainer} {
      a {
        margin-left: -7%;
      }

      ${SelectContainer} {
        margin-left: -3.5%;
      }
    }
  }

  @media (min-width: 45em) and (orientation: portrait) {
    ${PreviewNav} {
      font-size: 1.5em;
    }

    iframe,
    .banner {
      margin-top: 4em;
    }
  }

  @media (min-width: 45em) {
    h2 {
      font-size: 2.5em;
    }

    div {
      padding: 2% 4%;

      button {
        font-size: 1.25em;
        border-radius: 5px;
      }
    }

    ${FooterContainer} {
      margin-left: -1%;

      a {
        margin-left: -13%;
      }

      ${SelectContainer} {
        margin-left: -5.5%;
      }
    }
  }

  @media (min-width: 60em) {
    ${PreviewNav} {
      font-size: 2em;
    }

    ${FooterContainer} {
      margin-left: -1%;

      a {
        margin-left: -18%;
      }
    }
  }
`;
