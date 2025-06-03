import styled from "styled-components";
import CustomLink from "../../components/custom-link/CustomLink";

export const MobileView = styled(CustomLink)`
  display: flex;
  align-items: center;
  gap: 1em;
  text-decoration: none;

  img {
    width: 40%;
    border-radius: 5px;
  }

  div {
    p {
      font-size: 0.8em;
    }
  }
`;

export const MovieList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  @media (hover: hover) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (min-width: 60em) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export const MyListContainer = styled.div`
  padding: 15% 5%;

  h3 {
    margin-bottom: 1em;
  }

  @media (min-width: 35em) {
    padding: 10% 5%;
  }

  @media (min-width: 60em) {
    padding: 7% 5%;
  }
`;
