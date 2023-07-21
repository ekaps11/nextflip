import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const ButtonContainer = styled.button`
  background: ${colors.primary};
  color: white;
  text-transform: capitalize;
  font-weight: bolder;
  padding: 0.5em;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`;
