import styled from "styled-components";

export const MovieDetailButton = styled.div`
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

export const MovieDetailContainer = styled.div<{
  $strLength?: number;
}>`
  width: 50%;

  h2 {
    font-size: ${({ $strLength }) =>
      $strLength && $strLength > 25 ? "4vw" : "4.5vw"};
  }

  img {
    width: 60%;
    margin-top: 1em;
  }
`;
