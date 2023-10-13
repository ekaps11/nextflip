import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { SpinnerContainer } from "../spinner/Spinner-style";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
  border-radius: 3px;
  color: inherit;
  padding: 0.5em 1em;
  background: ${colors.red[0]};

  i {
    margin-top: 3px;
  }

  &:hover {
    background: ${colors.red[1]};
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
