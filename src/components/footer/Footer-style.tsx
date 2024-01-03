import { styled } from "styled-components";
import { SelectContainer } from "../select/Select-style";
import { LinkContainer } from "../custom-link/CustomLink-style";
import store from "../../store/store";

const { user } = store.getState().user;

export const FooterContainer = styled.footer`
  padding: 5%;
  border-top: 1px solid #181818;

  span:hover {
    text-decoration: underline;
  }

  p {
    letter-spacing: unset;
    margin-bottom: 1em;
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

  @media (min-width: 65em) {
    padding: ${!user && "3% 10%"};
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
