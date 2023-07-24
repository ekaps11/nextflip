import { styled } from "styled-components";
import { BaseLayout as Layout } from "../../GlobalStyles";

export const LandingPageWrapper = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg");
  background-size: cover;
`;

export const BaseLayout = styled(Layout)`
  text-align: center;

  h1 {
    margin-top: 3em;
  }
`;
