import styled from "styled-components";

export const CardContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-top: 0.5em;
  margin-left: 0.5em;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.3);
  }

  img {
    border-radius: 3px;
  }
`;
