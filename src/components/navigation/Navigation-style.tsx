import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { ButtonContainer } from "../button/Button-style";
import { LinkContainer } from "../custom-link/CustomLink-style";
import { SelectContainer } from "../select/Select-style";
import store from "../../store/store";

const { user } = store.getState().user;

export const Profile = styled.img`
  border-radius: 3px;
  cursor: pointer;
`;

export const NavContainer = styled.div<{ $bgCol?: boolean }>`
  ${flex}
  position: ${user ? "fixed" : "absolute"};
  width: 100%;
  justify-content: space-between;
  padding: 0 5%;
  background: ${({ $bgCol }) => $bgCol && user && "black"};
  transition: 0.5s;
  z-index: 1;
  height: 3.5em;

  ${LinkContainer} {
    color: ${colors.red[0]};
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 0.2em;
    text-decoration: none;
  }

  h1 {
    font-size: 1.75em;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  @media (max-width: 20em) {
    ${SelectContainer}, ${ButtonContainer} {
      font-size: 0.6em;
    }

    ${SelectContainer} {
      width: 6em;
    }
  }

  @media (min-width: 35em) {
    ${SelectContainer} {
      width: 12em;
    }
  }

  @media (min-width: 60em) {
    height: 4em;

    h1 {
      font-size: 2em;
    }

    ${ButtonContainer} {
      margin-left: 5px;
      height: 2.5em;
    }
  }
`;
