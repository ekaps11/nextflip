import { styled } from "styled-components";
import BaseLayout from "../base-layout/BaseLayout";
import Banner from "../../assets/images/banner.webp";

export const LandingPageContainer = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url(${Banner});
  background-size: cover;
  padding-bottom: 5%;

  @media (min-width: 40em) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Layout = styled(BaseLayout)`
  text-align: center;

  h1 {
    margin-top: 3.5em;
  }

  p {
    margin-bottom: 1em;
  }
`;
