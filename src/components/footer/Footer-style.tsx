import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const FooterContainer = styled.footer`
  border-top: 8px solid ${colors.secondary};

  span {
    text-decoration: underline;
  }

  p {
    letter-spacing: unset;
  }

  select {
    margin: 1.5em 0;
    min-width: 10em;
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

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
