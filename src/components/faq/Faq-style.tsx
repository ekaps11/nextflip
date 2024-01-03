import { styled } from "styled-components";
import { ButtonContainer } from "../button/Button-style";

export const FaqContainer = styled.div`
  padding: 5%;
  padding-top: unset;

  h2 {
    margin-bottom: 1em;
  }

  ${ButtonContainer} {
    text-transform: initial;
  }

  @media (min-width: 65em) {
    padding: 0 10%;
  }
`;
