import { styled } from "styled-components";
import { ButtonContainer } from "../button/Button-style";
import { InputField, ShowPassword } from "../input/Input-style";
import { colors } from "../../utils/styles/commonStyle";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${ButtonContainer} {
    font-size: 1em;
    height: 3em;
    margin-right: auto;
    min-width: 30%;
  }

  @media (min-width: 30em) {
    flex-direction: row;
    height: 3em;

    div {
      width: 100%;
    }
  }
`;

export const AuthError = styled.p`
  background: ${colors.orange};
  border-radius: 2px;
  padding: 0.5em 1em;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  p {
    margin-bottom: 1.5em;
  }

  ${InputField} {
    height: 3em;

    &[type="password"],
    &[type="text"] {
      margin-bottom: -1.5em;
    }
  }

  ${ShowPassword} {
    width: 1.35em;
    top: -0.6em;
  }

  button {
    margin: auto;
  }

  @media (min-width: 35em) {
    ${ShowPassword} {
      left: 80%;
    }
  }

  @media (min-width: 45em) {
    ${ShowPassword} {
      left: 80%;
    }
  }

  @media (min-width: 50em) {
    p {
      font-size: 1.1em;
    }
  }

  @media (min-width: 65em) {
    ${ShowPassword} {
      left: 85%;
    }
  }
`;
