import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { SelectContainer } from "../select/Select-style";
import store from "../../store/store";

const { user } = store.getState().user;

export const ProfileIcon = styled.div`
  background: url(images/profile.webp);
  width: 2em;
  height: 2em;
  cursor: pointer;
  border-radius: 3px;
  margin-right: -1.25em;
  margin-left: -5px;
`;

export const NavContainer = styled.div<{
  $bgCol: boolean;
}>`
  ${flex}
  position: ${user ? "fixed" : "absolute"};
  width: 100%;
  justify-content: space-between;
  padding: 1% 5%;
  background: ${({ $bgCol }) => $bgCol && user && "black"};
  z-index: 1;
  height: ${`${user ? 2.5 : 3.5}em`};
  transition: 0.5s;

  h1 {
    font-family: "Bebas Neue", sans-serif;
    color: ${colors.red[0]};
    letter-spacing: 3px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  button {
    width: 6em;
    height: 2.6em;
    margin-top: 0.1em;
    margin-left: -0.5em;
  }

  @media (max-width: 20em) {
    button {
      width: fit-content;
    }
  }

  @media (max-width: 30em) and (orientation: portrait) {
    ${SelectContainer} {
      width: 6em;

      svg {
        font-size: 3em;
        left: 45%;
      }
    }

    button {
      margin-top: 0.5em;
    }
  }

  @media (min-width: 35em) {
    ${SelectContainer} {
      width: 12em;

      svg {
        left: 20%;
        font-size: 1.25em;
      }

      select {
        padding: 0.65em 2em;
      }
    }
  }

  @media (min-width: 60em) {
    height: 3.5em;

    h1 {
      font-size: 2em;
    }
  }
`;
