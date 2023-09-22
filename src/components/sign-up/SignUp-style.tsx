import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { ButtonContainer } from "../button/Button-style";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${ButtonContainer} {
    font-size: 1em;
    height: 3em;
    margin: auto;
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
  padding: 0.5em 0;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 5%;
  margin: 1em 0;

  p {
    margin-bottom: 1.5em;
  }

  @media (min-width: 50em) {
    p {
      font-size: 1.1em;
    }

    ${Form} {
      padding: 0 15%;
    }
  }
`;
