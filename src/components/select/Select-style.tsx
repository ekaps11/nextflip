import { styled } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  label {
    width: 0;
    opacity: 0;
  }

  svg {
    position: relative;
    cursor: pointer;
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
  }

  select {
    width: 100%;
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
  }
`;
