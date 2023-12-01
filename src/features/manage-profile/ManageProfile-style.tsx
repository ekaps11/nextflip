import styled from "styled-components";
import { BiSolidUpArrow } from "react-icons/bi";

export const ProfileIndicator = styled(BiSolidUpArrow)`
  margin-left: auto;
  margin-top: -2.7em;
  margin-bottom: 1em;
`;

export const ManageProfileContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 6.5em;
  right: 5%;
  background: black;
  padding: 1em;
  padding-top: 1.5em;
  border-radius: 3px;
  opacity: 0.7;
  gap: 0.3em;
  font-size: 0.65em;
  border: 1px solid grey;

  p,
  i {
    cursor: pointer;
  }

  i {
    margin-top: 2px;
  }

  div {
    display: flex;
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
