import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { SelectContainer } from "../select/Select-style";
import store from "../../store/store";
import { BiSolidUpArrow } from "react-icons/bi";

const { user } = store.getState().user;

export const ProfileIcon = styled.div`
  display: none;
  background: url(images/profile.webp);
  width: 2em;
  height: 2em;
  cursor: pointer;
  border-radius: 3px;
  margin-left: -5px;
`;

export const BrowseIndicator = styled(BiSolidUpArrow)`
  position: absolute;
  bottom: -0.7em;
  margin-left: 2.6rem !important;

  @media (min-width: 45em) {
    margin-left: 3.15rem !important;
  }

  @media (min-width: 60em) {
    margin-left: 3.45rem !important;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex !important;
    align-items: center;
    cursor: pointer;
    font-size: 0.8em;
    transition: 0.5s ease-in-out;

    svg {
      font-size: 0.8em;
      margin-left: -0.6em;
    }

    .genres {
      position: absolute;
      top: 120%;
      background: black;
      opacity: 0.9;
      border-radius: 5px;
      padding: 2%;
      outline: 1px solid grey;
      cursor: context-menu;
      font-size: 1.5em;

      div {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr);
      }

      p:hover {
        text-decoration: underline !important;
      }

      @media (hover: hover) {
        margin-left: -5.5em;

        @media (min-width: 60em) {
          margin-left: unset;
        }
      }
    }
  }
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
    user-select: none;
    font-family: "Bebas Neue", sans-serif;
    color: ${colors.red[0]};
    letter-spacing: 3px;
    cursor: pointer;

    &::after {
      @media (hover: none) {
        content: "n";
      }

      @media (hover: hover) {
        content: "nextflip";
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  button {
    width: 6em;
    height: 2.6em;
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
      margin-top: 0.25em;
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
        padding: 0 2em;
        height: 2.55em;
      }
    }

    ${Left} {
      .genres > div {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  @media (min-width: 60em) {
    height: 3.5em;

    h1 {
      font-size: 2em;
    }

    ${Left} {
      .genres {
        top: 115%;
      }
    }
  }
`;
