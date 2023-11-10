import { styled } from "styled-components";
import Banner from "../../assets/images/banner.jpg";

export const LoginContainer = styled.div`
  footer {
    background: black;
    opacity: 0.8;
    padding: 0 0.5em;
  }

  @media (min-width: 45em) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
      url(${Banner});
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
      border-top: none;
      margin-top: 5em;
      padding: 0 5em;
    }
  }

  @media (min-width: 45em) and (max-width: 60em) {
    form {
      margin-top: 10em;
    }
  }

  @media (min-width: 60em) {
    padding-top: 5.15em;

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
