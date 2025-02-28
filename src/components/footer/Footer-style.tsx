import { styled } from "styled-components";
import { SelectContainer } from "../select/Select-style";
import { LinkContainer } from "../custom-link/CustomLink-style";
import { colors } from "../../utils/styles/commonStyle";

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

export const FooterContainer = styled.footer<{ $user: boolean }>`
  padding: 5%;
  border-top: 1px solid ${colors.grey[2]};

  span:hover {
    text-decoration: underline;
  }

  p {
    letter-spacing: unset;
    margin-bottom: 1em;
  }

  p:last-child {
    font-size: 13px;
    margin-top: 1.5em;
  }

  ${LinkContainer} {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${SelectContainer} {
    margin-left: -1em;

    svg {
      left: 1.3em;
    }

    select {
      padding: 0.65em 2em;
    }
  }

  @media (hover: none) {
    ${SelectContainer} {
      margin-left: -1px;

      svg {
        display: none;
      }
    }
  }

  @media (min-width: 65em) {
    padding: ${({ $user }) => $user && "3% 10%"};
  }
`;
