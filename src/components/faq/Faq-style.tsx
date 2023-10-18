import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { ButtonContainer } from "../button/Button-style";

export const FaqContainer = styled.div`
  border-top: 8px solid ${colors.grey[0]};

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  ${ButtonContainer} {
    text-transform: initial;
  }
`;
