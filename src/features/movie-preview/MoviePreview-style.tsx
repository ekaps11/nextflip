import styled from "styled-components";
import { BaseLayout } from "../../utils/styles/commonStyle";
import { flex } from "../../utils/styles/commonStyle";

export const MoviePreviewButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin-top: 1em;

  button {
    font-size: 0.5em;
    font-weight: bold;

    i {
      margin-right: 5px;
    }

    &:first-child {
      background: white;
      color: black;

      &:hover {
        opacity: 0.7;
      }
    }

    &:nth-child(2) {
      background: rgba(80, 80, 80, 0.8);
      opacity: 0.7;
      color: rgba(255, 255, 255, 1);

      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: 20em) {
      font-size: 0.4em;
    }
  }
`;

export const MoviePreviewContainer = styled(BaseLayout)<{
  $strLength?: number | undefined;
}>`
  ${flex}
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  margin-left: 0.5em;
  height: 20vh;

  h2 {
    width: 100%;
    font-size: 1.3em;
  }

  img {
    height: 35%;
    width: 80%;
  }

  @media (orientation: landscape) {
    height: 100vh;

    h2 {
      font-size: 1.85em;
    }
  }

  @media (min-width: 30em) and (orientation: landscape) {
    h2 {
      margin-top: -1em;
    }

    button {
      font-size: 0.7em;
      width: 10em;
    }
  }

  @media (min-width: 40em) and (orientation: portrait) {
    height: 30vh;

    h2 {
      font-size: ${({ $strLength }) =>
        $strLength && $strLength > 30 ? "2em" : "2.5em"};
    }

    img {
      width: 70%;
    }

    button {
      font-size: 0.7em;
    }
  }

  @media (min-width: 60em) and (orientation: landscape) {
    margin-top: 1.5em;
    height: 50vh;

    h2 {
      width: 100%;
      font-size: 3em;
    }

    img {
      width: 55%;
    }
  }

  @media (min-width: 80em) {
    height: 100vh;

    h2 {
      font-size: 3.5em;
    }

    img {
      height: 30%;
      width: 65%;
    }

    button {
      font-size: 1em;
    }
  }
`;
