import { styled } from "styled-components";
import banner from "../../assets/images/banner.jpg";
import { gradientBg } from "../../utils/styles/commonStyle";

export const HomeContainer = styled.div`
  background: ${gradientBg.top}, url(${banner});
  background-size: cover;
  padding: 5%;
  padding-bottom: 3.5em;
  border-bottom: 3px solid #6c1f41;

  h1 {
    margin-top: 3.5em;
  }

  @media (min-width: 35em) {
    div {
      margin-bottom: 3.5em;
    }
  }

  @media (min-width: 45em) {
    div {
      width: 85%;
    }

    h1 {
      width: 75%;
    }
  }

  @media (min-width: 65em) {
    padding: 5% 10%;
  }
`;
