import { styled } from "styled-components";
import { ButtonContainer } from "../button/Button-style";
import { InputField, ShowPassword } from "../input/Input-style";

export const FaqContainer = styled.div`
  padding: 5%;
  padding-top: unset;

  h2 {
    margin-bottom: 1em;
  }

  ${ButtonContainer} {
    text-transform: initial;
  }

  ${InputField} {
    &[type="password"],
    &[type="text"] {
      margin-bottom: -1.75em;
    }
  }

  ${ShowPassword} {
    top: -0.75em;
  }

  @media (min-width: 50em) {
    ${ShowPassword} {
      left: 85%;
    }
  }

  @media (min-width: 65em) {
    padding: 0 10%;
    margin-bottom: 5%;
  }
`;
