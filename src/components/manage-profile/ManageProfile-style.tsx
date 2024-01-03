import styled from "styled-components";
import { BiSolidUpArrow } from "react-icons/bi";

export const ProfileIndicator = styled(BiSolidUpArrow)`
  margin-left: 100%;
  margin-top: -2.7em;
  margin-bottom: 1em;
`;

export const ManageProfileContainer = styled.div`
  display: flex;
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

  p,
  i {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    gap: 5px;
  }

  @media (min-width: 60em) and (orientation: portrait) {
    top: 10em;
  }

  @media (min-width: 60em) and (orientation: landscape) {
    top: 7.3em;
  }
`;
