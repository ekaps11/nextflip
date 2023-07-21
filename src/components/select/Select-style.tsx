import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const SelectContainer = styled.select`
  background: black;
  color: white;
  opacity: 0.7;
  padding: 0.5em 2em;
  border: 1.5px solid ${colors.secondary};
  border-radius: 3px;
`;
