import styled from "styled-components";

export const MoviesContainer = styled.div`
  padding: 0 5%;
  margin: -10% 0 5% 0;

  @media (min-width: 75em) {
    margin-top: unset;
  }

  @media (min-width: 85em) and (max-width: 86em) {
    margin-top: -10%;
  }
`;
