import styled from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { InputField, InputError } from "../input/Input-style";
import { ButtonContainer } from "../button/Button-style";
import { LinkContainer } from "../custom-link/CustomLink-style";

export const Help = styled.div`
  ${flex}
  justify-content: space-between;
  font-size: 0.85em;

  input[type="checkbox"] {
    position: relative;
    top: 2.25px;
    margin-right: 3px;
    accent-color: ${colors.grey[0]};
  }
`;

export const Article = styled.article`
  font-size: 0.8em;

  span {
    color: ${colors.blue};
    cursor: pointer;

    p {
      margin-top: 1em;
      cursor: context-menu;
      line-height: 1.3em;
      animation: fadeIn 1s;

      ${LinkContainer} {
        color: ${colors.blue};
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const SignInErrorContainer = styled.span`
  background: ${colors.orange};
  padding: 0.8em 1.15em;
  border-radius: 3px;
  font-size: 0.85em;

  ${LinkContainer} {
    color: inherit;
  }
`;

export const SignInContainer = styled.form<{ $error?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 6%;
  padding-top: 5em;

  h1 {
    margin-left: 5px;
  }

  ${ButtonContainer} {
    height: 3.5em;
    width: 100%;
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
  }

  ${LinkContainer} {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${InputField} {
    background: ${colors.grey[0]};
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  ${InputError} {
    color: ${colors.orange};
    margin-top: 10px;
  }

  @media (min-width: 30em) {
    h1 {
      margin-top: 1.25em;
    }
  }
`;
