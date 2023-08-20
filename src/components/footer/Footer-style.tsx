import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const FooterContainer = styled.footer`
  border-top: 8px solid ${colors.secondary};

  span {
    text-decoration: underline;
  }

  a {
    color: white;
    text-decoration: underline;
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

  @media (min-width: 30em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
