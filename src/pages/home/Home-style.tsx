import { styled } from "styled-components";
import banner from "../../assets/images/banner.jpg";
import { flex } from "../../utils/styles/commonStyle";

export const HomeContainer = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url(${banner});
  background-size: cover;
  padding: 5%;

  @media (min-width: 45em) and (orientation: landscape) {
    ${flex}
    height: 100vh;
    padding: 6%;
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
