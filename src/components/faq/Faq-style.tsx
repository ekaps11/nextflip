import { styled } from "styled-components";
import { ButtonContainer } from "../button/Button-style";
import { ShowPassword } from "../input/Input-style";

export const FaqContainer = styled.div`
  padding: 5%;
  padding-top: unset;
  margin-bottom: 5%;

  h2 {
    margin-bottom: 1em;
  }

  ${ButtonContainer} {
    text-transform: initial;
  }

  ${ShowPassword} {
    top: -0.75em;
  }

  @media (min-width: 45em) {
    ${ShowPassword} {
      left: 85% !important;
    }
  }

  @media (min-width: 65em) {
    padding: 0 10%;
  }
`;
