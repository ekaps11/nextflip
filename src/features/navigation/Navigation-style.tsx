import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";
import { ButtonContainer } from "../../components/button/Button-style";
import { LinkContainer } from "../../components/custom-link/CustomLink-style";
import { SelectContainer } from "../../components/select/Select-style";

export const NavContainer = styled.div`
  ${flex}
  position: absolute;
  width: 100%;
  justify-content: space-between;
  padding: 0 5%;

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
    h1 {
      font-size: 3em;
    }

    ${ButtonContainer} {
      margin-left: 5px;
      height: 2.5em;
    }
  }
`;
