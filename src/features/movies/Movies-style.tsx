import styled from "styled-components";

export const MoviesContainer = styled.div`
  margin-top: -10%;
  margin-bottom: 5%;

  @media (min-width: 75em) {
    margin-top: unset;
  }

  @media (min-width: 85em) and (max-width: 86em) {
    margin-top: -10%;
  }
`;
