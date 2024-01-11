import styled from "styled-components";

export const MoviesContainer = styled.div`
  padding: 0 5%;
  margin: -5% 0 5% 0;

  @media (min-width: 45em) and (orientation: landscape) {
    margin-top: -10%;
  }

  @media (min-width: 75em) {
    margin-top: unset;
  }

  @media (min-width: 85em) and (max-width: 86em) {
    margin-top: -10%;
  }
`;
