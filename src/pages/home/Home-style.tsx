import { styled } from "styled-components";
import Banner from "../../assets/images/banner.jpg";
import { ButtonContainer } from "../../components/button/Button-style";
import { flex } from "../../utils/styles/commonStyle";

export const HomeContainer = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url(${Banner});
  background-size: cover;
  padding: 5%;

  @media (max-height: 20em) {
    h1 {
      padding-top: 1em;
      font-size: 1.5em;
    }

    p {
      font-size: 0.8em;
    }

    ${ButtonContainer} {
      min-width: 35%;
    }
  }

  @media (min-width: 40em) {
    ${flex}
    height: 100vh;
    overflow: hidden;
  }

  @media (min-width: 45em) and (orientation: portrait) {
    height: 50vh;
  }
`;

export const Layout = styled.div`
  text-align: center;

  h1 {
    margin-top: 3.5em;
  }

  p {
    margin-bottom: 1em;
  }
`;
