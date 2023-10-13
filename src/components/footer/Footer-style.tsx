import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { SelectContainer } from "../select/Select-style";
import { LinkContainer } from "../custom-link/CustomLink-style";

export const FooterContainer = styled.footer`
  border-top: 8px solid ${colors.grey[0]};

  span:hover {
    text-decoration: underline;
  }

  p {
    letter-spacing: unset;
  }

  p:last-child {
    font-size: 13px;
  }

  ${LinkContainer} {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${SelectContainer} {
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
