import { styled } from "styled-components";
import banner from "../../assets/images/banner.webp";
import { gradientBg } from "../../utils/styles/commonStyle";

export const LoginContainer = styled.div`
  footer {
    background: black;
    opacity: 0.8;
    padding: 6%;
  }

  @media (min-width: 45em) {
    background: ${gradientBg.top}, url(${banner});
    background-size: cover;
    padding-top: 7em;

    h1 {
      font-size: 2em;
    }

    form {
      background: black;
      opacity: 0.8;
      width: 50vw;
      margin: auto;
      margin-top: 3em;
      border-radius: 10px;
      padding: 10%;
      padding-top: 5%;
    }

    footer {
      margin-top: 5em;
      padding: 5%;
    }
  }

  @media (min-width: 45em) and (max-width: 60em) {
    form {
      margin-top: 10em;
    }
  }

  @media (min-width: 60em) {
    padding-top: 2em;

    h1 {
      font-size: 2em;
    }

    form {
      width: 35%;
      padding: 5%;
      padding-top: 1em;
    }
  }
`;
