import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const FooterContainer = styled.footer`
  border-top: 8px solid ${colors.secondary};
  margin: unset;
  padding: 5%;

  span {
    text-decoration: underline;
  }

  a {
    color: white;
  }

  p {
    letter-spacing: unset;
  }

  select {
    margin: 1.5em 0;
  }
`;

export const Links = styled.div`
  margin: 1.5em 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media screen and (min-width: 30em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
