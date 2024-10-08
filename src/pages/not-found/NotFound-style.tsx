import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { ButtonContainer } from "../../components/button/Button-style";

export const NotFoundContainer = styled.div`
  ${flex}
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url(images/not-found.webp) center;
  background-size: cover;
  flex-direction: column;
  height: 100vh;
  min-height: 25em;

  h1 {
    font-size: 2.3em;
    padding: 0 5%;
  }

  @media (min-width: 60em) {
    min-height: 30em;

    h1 {
      font-size: 4em;
    }
  }
`;

export const NotFoundContent = styled.div`
  text-align: center;
  padding: 0 16%;

  ${ButtonContainer} {
    margin: 1.5em auto;
    background: white;
    color: black;
    font-weight: bolder;
    padding: 0.5em 1.5em;

    &:hover {
      background: ${colors.white};
    }
  }

  @media (min-width: 30em) {
    padding: 0 20%;
  }

  @media (min-width: 45em) and (max-width: 60em) {
    padding: 0 20%;
  }
`;
