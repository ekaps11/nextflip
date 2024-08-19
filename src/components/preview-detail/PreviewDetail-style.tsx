import styled from "styled-components";

export const TrailerYear = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  color: grey;
  margin-left: -2%;

  span {
    border: 1px solid white;
    border-radius: 2px;
    padding: 3px 5px;
    font-size: 10px;
  }

  img {
    height: 1.2em;
  }
`;

export const TrailerDetail = styled.div`
  margin-left: -2%;

  p {
    font-size: 0.9em;
    line-height: 1.2em;
    margin-bottom: 0.5em;

    &:nth-child(2),
    &:last-child {
      font-size: 0.7em;
      color: grey;
    }
  }
`;

export const ActionButton = styled.div`
  display: flex;
  margin-bottom: 1em;

  div {
    text-align: center;
    margin-right: 2em;

    p {
      font-size: 0.5em;
      margin-top: 3px;
    }
  }
`;

export const PreviewDetailContainer = styled.div`
  display: block;
  padding: 0 5% !important;

  @media (orientation: portrait) {
    margin-top: 70%;
  }

  @media (min-width: 45em) {
    ${TrailerYear}, ${TrailerDetail} {
      margin-left: -4%;
    }

    ${TrailerYear} {
      font-size: 1.35em;

      span {
        font-size: 1em;
        margin: 0 5px;
      }

      img {
        height: 1.75em;
      }
    }

    ${TrailerDetail} {
      font-size: 1.5em;
    }

    ${ActionButton} {
      margin-left: -5%;
      font-size: 2em;
    }
  }
`;
