import { styled } from "styled-components";

export const LoginContainer = styled.div`
  @media (min-width: 45em) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
      url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg");
    background-size: cover;
    padding: 10%;

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
  }

  @media (min-width: 50em) {
    padding-top: 5.35em;

    h1 {
      font-size: 2em;
    }

    form {
      width: 40%;
      padding: 5%;
      padding-top: 1em;
    }
  }
`;
