import styled from "styled-components";
import { BiSolidUpArrow } from "react-icons/bi";
import { LinkContainer } from "../custom-link/CustomLink-style";

export const ProfileIndicator = styled(BiSolidUpArrow)`
  margin-left: 100%;
  margin-top: -2.7em;
  margin-bottom: 1em;
`;

export const ManageProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column !important;
  position: fixed;
  top: 6.5em;
  right: 5%;
  background: black;
  padding: 1em 2em;
  padding-top: 1.5em;
  border-radius: 3px;
  opacity: 0.7;
  gap: 0.3em;
  font-size: 0.65em;
  border: 1px solid grey;

  div {
    gap: 5px;
    cursor: pointer;
  }

  ${LinkContainer} {
    color: white;
    letter-spacing: unset;
    font-weight: lighter;
    font-family: unset;

    svg {
      margin-right: 5px;
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
    top: 7.3em;
  }
`;
