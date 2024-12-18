import { styled } from "styled-components";
import { gradientBg } from "../../utils/styles/commonStyle";
import { SignUpContainer } from "../../components/sign-up/SignUp-style";

export const Header = styled.div`
  background: ${gradientBg.top}, url(images/banner.webp);
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
    div {
      margin: 0 auto;
      margin-bottom: 4em;
    }

    ${SignUpContainer} {
      margin: 1em 0;
    }
  }
`;

export const HomeContainer = styled.div``;
