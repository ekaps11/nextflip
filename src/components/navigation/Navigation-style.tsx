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

  ${SelectContainer} {
    display: flex;
    align-items: center;
    margin-right: -0.5em;
  }

  @media (max-width: 30em) and (orientation: portrait) {
    ${SelectContainer} {
      width: 5em;

      svg {
        font-size: 2em;
        left: 50%;
      }

      option {
        opacity: 0;
      }
    }

    ${ButtonContainer} {
      width: 6em;
    }
  }

  @media (min-width: 35em) {
    ${SelectContainer} {
      width: 12em;

      svg {
        left: 20%;
      }

      select {
        padding: 0.65em 2em;
      }
    }

    ${ButtonContainer} {
      width: 6.5em;
    }
  }
`;
