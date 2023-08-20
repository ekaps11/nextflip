import { styled } from "styled-components";
import BaseLayout from "../base-layout/BaseLayout";

export const LandingPageContainer = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg");
  background-size: cover;
  padding-bottom: 5%;
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
