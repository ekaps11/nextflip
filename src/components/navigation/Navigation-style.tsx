import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5%;
  min-width: 20vh;

  button {
    min-width: 6em;
  }

  a {
    color: ${colors.primary};
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 0.2em;
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  @media (min-width: 60em) {
    padding: 1em 13%;
  }
`;
