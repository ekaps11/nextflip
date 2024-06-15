import styled from "styled-components";
import { BiSolidUpArrow } from "react-icons/bi";
import { LinkContainer } from "../custom-link/CustomLink-style";
import { animation } from "../../utils/styles/commonStyle";

export const ProfileIndicator = styled(BiSolidUpArrow)`
  margin-left: 100%;
  margin-top: -2.3em;
  margin-bottom: 5px;
`;

export const ProfilePanelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column !important;
  position: fixed;
  top: 5em;
  right: 5%;
  background: black;
  padding: 1.2em 2em;
  border-radius: 5px;
  gap: 0.3em;
  font-size: 0.65em;
  border: 1px solid grey;
  opacity: 0.7;
  animation: ${animation.fadeIn2} 0.3s;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      letter-spacing: 0;
      font-size: 1em;
      margin-left: -5px;
    }

    svg {
      font-size: 1.5em;
    }
  }

  ${LinkContainer} {
    display: flex;
    align-items: center;
    letter-spacing: unset;
    font-weight: lighter;
    text-decoration: none;

    svg {
      margin-right: 5px;
      font-size: 1.5em;
    }
  }

  div:hover,
  ${LinkContainer}:hover {
    text-decoration: underline;
  }

  @media (min-width: 60em) and (orientation: portrait) {
    top: 10em;
  }

  @media (min-width: 60em) and (orientation: landscape) {
    top: 6.35em;
  }
`;
