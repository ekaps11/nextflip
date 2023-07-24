import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5%;

  a {
    color: ${colors.primary};
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 0.1em;
    text-decoration: none;
  }

  select {
    margin-right: 1em;
  }

  button {
    padding: 0.6em 1.3em;
  }

  @media screen and (min-width: 60em) {
    padding: 1em 13%;
  }
`;
