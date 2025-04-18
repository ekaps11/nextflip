import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;

  @media (hover: hover) {
    gap: 1em;
  }
`;

export const BrowseContainer = styled.div`
  h3 {
    margin: 2% 5%;
    margin-bottom: -3%;
  }
`;
