import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const FaqContainer = styled.div`
  border-top: 8px solid ${colors.secondary};

  &:last-child {
    margin-top: 2em;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
`;
