import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  iframe,
  .banner {
    aspect-ratio: 16/9;
    display: block;
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

  @media (orientation: portrait) {
    iframe {
      margin-top: 2.4em;
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
  }

  @media (min-width: 45em) {
    h2 {
      font-size: 2.5em;
    }

    div {
      padding: 2% 4%;

      button {
        font-size: 1.5em;
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 45em) and (orientation: landscape) {
    iframe {
      aspect-ratio: 19.5/9;
    }

    .banner {
      aspect-ratio: 2.5;
    }
  }

  @media (min-width: 60em) and (orientation: portrait) {
    margin-top: 2%;
  }

  @media (min-width: 60em) and (orientation: landscape) {
    iframe {
      aspect-ratio: 16/9;
      margin-top: 1.75em;
    }

    .banner {
      margin-top: 3.5em;
    }

    h2 {
      margin-top: -3vh;
    }
  }
`;
