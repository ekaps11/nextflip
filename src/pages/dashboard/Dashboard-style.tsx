import styled from "styled-components";
import { banner } from "../../utils/tmdb";
import { gradientBg, flex } from "../../utils/styles/commonStyle";

export const DashboardBg = styled.div<{ $bg: string; $trailer?: string }>`
  ${flex}
  justify-content: flex-start;
  background: ${gradientBg.bot}, url(${({ $bg }) => $bg && banner + $bg});
  background-size: cover;
  aspect-ratio: 2;
  padding-left: 5%;
  margin-bottom: -10%;

  @media (max-width: 45em) and (max-height: 25em) and (orientation: landscape) {
    aspect-ratio: 16/9;
  }

  @media (min-width: 65em) {
    margin-bottom: unset;
  }
`;

export const MoviesContainer = styled.div`
  margin-bottom: 5%;

  @media (min-width: 65em) {
    margin-top: -5%;
  }
`;
