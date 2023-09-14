import styled from "styled-components";
import { colors } from "../../GlobalStyles";

export const SignInContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 6%;
  padding-top: 5em;

  h1 {
    margin-left: 5px;
  }

  button {
    height: 3.5em;
    width: 100%;
  }

  input {
    background: ${colors.secondary};
  }

  a,
  p,
  article {
    color: grey;
  }

  p {
    font-size: 1em;
    margin-top: 2em;
    letter-spacing: 0;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 30em) {
    h1 {
      margin-top: 1.25em;
    }
  }
`;

export const Help = styled.div`
  display: inherit;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85em;

  input[type="checkbox"] {
    position: relative;
    top: 1.5px;
    margin-right: 3px;
    accent-color: ${colors.secondary};
  }
`;

export const Article = styled.article`
  font-size: 0.8em;

  span {
    color: #5d5df8;
    cursor: pointer;

    p {
      margin-top: unset;
      text-decoration: none;
      cursor: context-menu;

      a {
        color: #5d5df8;
      }
    }
  }
`;
