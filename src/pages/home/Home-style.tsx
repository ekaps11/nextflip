import { styled } from "styled-components";
import banner from "../../assets/images/banner.jpg";
import { flex, gradientBg } from "../../utils/styles/commonStyle";

export const Layout = styled.div`
  text-align: center;
  margin-bottom: 3.5em;
`;

export const HomeContainer = styled.div`
  background: ${gradientBg.top}, url(${banner});
  background-size: cover;
  padding: 5%;

  h1 {
    margin-top: 3.5em;
  }

  @media (min-width: 45em) and (orientation: landscape) {
    ${flex}
    ${Layout} {
      margin-bottom: 6em;
    }
  }
`;
