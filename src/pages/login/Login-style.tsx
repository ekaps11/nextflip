import { styled } from "styled-components";
import { gradientBg } from "../../utils/styles/commonStyle";

export const LoginContainer = styled.div`
  footer {
    opacity: 0.8;
    background: black;
  }

  @media (min-width: 45em) {
    background: ${gradientBg.top}, url(images/banner.webp);
    background-size: cover;
    padding-top: 5%;

    h1 {
      font-size: 2em;
    }

    form {
      background: black;
      opacity: 0.8;
      width: 50%;
      margin: auto;
      margin-top: 3em;
      border-radius: 10px;
      padding: 5%;
      padding-top: unset;

      input:focus {
        opacity: 1;
      }

      button {
        opacity: 0.8;
        transition: 0.5s ease;

        &:hover {
          opacity: 1;
        }
      }
    }

    footer {
      margin-top: 5em;
      padding: 5%;
    }
  }

  @media (min-width: 45em) and (orientation: portrait) {
    form {
      margin-top: 10vh;
    }

    footer {
      margin-top: 11vh;
    }
  }

  @media (min-width: 50em) and (orientation: portrait) {
    form {
      margin-top: 15vh;
    }

    footer {
      margin-top: 15vh;
    }
  }

  @media (min-width: 60em) and (orientation: portrait) {
    footer {
      font-size: 1.5em;
      margin-top: 15vh;
    }
  }

  @media (min-width: 60em) and (orientation: landscape) {
    form {
      width: 45%;
    }
  }

  @media (min-width: 65em) {
    form {
      padding: 5%;
      padding-top: 1%;
      width: 35%;
    }

    footer {
      padding: 5% 10%;
    }
  }
`;
