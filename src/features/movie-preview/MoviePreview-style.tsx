import styled from "styled-components";
import { flex } from "../../utils/styles/commonStyle";

export const MoviePreviewButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin-top: 1em;

  button {
    font-size: 1.5vw;
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
  }
`;

export const MoviePreviewContainer = styled.div<{
  $strLength?: number | undefined;
}>`
  ${flex}
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  padding: 10% 5%;

  h2 {
    font-size: 5vw;
  }

  img {
    width: 75%;
  }

  @media (min-width: 35em) {
    padding: 13% 5%;

    button {
      font-size: 1.7vw;
    }
  }

  @media (min-width: 50em) {
    button {
      font-size: 0.8em;
    }
  }

  @media (max-width: 60em) and (max-height: 30em) and (orientation: landscape) {
    height: 100vh;
    margin-top: -1.3em;
  }

  @media (min-width: 79em) {
    height: 100vh;

    img {
      width: 50%;
    }

    button {
      font-size: 1.2em;
    }
  }

  @media (min-width: 57em) and (max-width: 64em) and (orientation: portrait) {
    button {
      font-size: 1.2em;
      margin-top: 1em;
    }
  }

  @media (min-width: 85em) and (max-width: 85.5em) and (orientation: landscape) {
    height: unset;

    img {
      width: 65%;
    }
  }
`;
