import { styled } from "styled-components";

export const SelectContainer = styled.select`
  cursor: pointer;
  color: inherit;
  background: black;
  opacity: 0.7;
  border-radius: 3px;
  text-transform: capitalize;
  padding: 0.65em 1em;

  &:focus {
    outline: 1.5px solid white;
  }
`;
